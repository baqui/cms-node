import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Panel, PanelTitle, PanelText } from './styled-components';
import TextInput from '../../components/forms/TextInput';
import Button from '../../components/Buttons/button';

class LoginPanel extends PureComponent {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { className } = this.props;
    return (
      <div className={className}>
        <Panel>
          <PanelTitle>Panel logowania</PanelTitle>
          <PanelText>Zaloguj się, używając swojego adresu e-mail.</PanelText>
          <TextInput
            label="Adres email"
            fullWidth
            type="text"
            name="login"
            id="login_panel_login"
            helperText=""
            validate={() => true}
            pristine={true}
            value=""
            onChange={() => {}}
          />
          <TextInput
            label="Hasło"
            fullWidth
            type="password"
            name="password"
            id="login_panel_password"
            helperText=""
            validate={() => true}
            pristine={true}
            value=""
            onChange={() => {}}
          />
          <Button fullWidth>Zaloguj</Button>
        </Panel>
      </div>
    );
  };
}

export default styled(LoginPanel)`
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
  padding-top: 56px;
`;
