import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

//DOCS https://material-ui.com/api/text-field/

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pristine: true,
      valid: true,
      visible: false
    };
  }

  componentDidMount = () => {
    if (!this.props.pristine || !this.state.pristine) {
      const valid = this.props.validate(this.props.value);
      this.setState({ valid });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (!nextProps.pristine || !this.state.pristine) {
      const valid = this.props.validate(nextProps.value);
      this.setState({ valid });
    }
  };

  render() {
    const {
      className,
      name,
      label,
      id,
      value,
      multiLine,
      rows,
      rowsMax,
      onChange,
      helperText,
      disabled,
      autoFocus,
      required,
      placeholder,
      fullWidth
    } = this.props;
    const { valid } = this.state;
    return (
      <div className={className}>
        <TextInputWrapper>
          <TextField
            id={id}
            name={name}
            type="text"
            error={!valid}
            value={value}
            label={label}
            multiLine={multiLine}
            rows={rows}
            rowsMax={rowsMax}
            onChange={event => onChange(name, event.target.value)}
            onBlur={this.handleBlur}
            disabled={disabled}
            autoFocus={autoFocus}
            required={required}
            placeholder={placeholder}
            helperText={helperText}
            fullWidth={fullWidth}
          />
          {this.props.children}
        </TextInputWrapper>
      </div>
    );
  }

  handleBlur = () => {
    const valid = this.props.validate(this.props.value);
    this.setState({ pristine: false, valid });
  };
}

export default styled(TextInput)``;

const TextInputWrapper = styled.div`
  position: relative;
  margin: 8px 0;
  input::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    pointer-events: none;
  }
`;
