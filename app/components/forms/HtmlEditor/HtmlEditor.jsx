import React, { PureComponent } from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';
import { isKeyHotkey } from 'is-hotkey';

import {
  Panel,
  Button,
  Icon,
  Toolbar /*, Spacer */
} from './styled-components';
import initialState from './initial-state';

const isBoldHotkey = isKeyHotkey('mod+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+`');

class HtmlEditorComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: initialState
    };
  }

  render = () => {
    const { className } = this.props;
    const { value } = this.state;

    return (
      <div className={className}>
        <Panel>
          <Toolbar>
            {this.renderMarkButton('bold', 'format_bold')}
            {this.renderMarkButton('italic', 'format_italic')}
            {this.renderMarkButton('underlined', 'format_underlined')}
            {this.renderMarkButton('code', 'code')}
          </Toolbar>
          <Editor
            placeholder="Enter some text..."
            value={value}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            renderMark={this.renderMark}
            spellCheck
          />
        </Panel>
      </div>
    );
  };

  applyOperations = operations => {
    const { value } = this.state;
    const change = value.change().applyOperations(operations);
    this.onChange(change, { remote: true });
  };

  hasMark = type => {
    const { value } = this.state;
    return value.activeMarks.some(mark => mark.type == type);
  };

  renderMarkButton = (type, icon) => {
    return (
      <Button
        active={this.hasMark(type)}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  renderMark = props => {
    const { children, mark, attributes } = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;
      case 'code':
        return <code {...attributes}>{children}</code>;
      case 'italic':
        return <em {...attributes}>{children}</em>;
      case 'underlined':
        return <u {...attributes}>{children}</u>;
    }
  };

  onChange = change => {
    this.setState({ value: change.value });
  };

  onKeyDown = (event, change) => {
    let mark;

    if (isBoldHotkey(event)) {
      mark = 'bold';
    } else if (isItalicHotkey(event)) {
      mark = 'italic';
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined';
    } else if (isCodeHotkey(event)) {
      mark = 'code';
    } else {
      return;
    }

    event.preventDefault();
    change.toggleMark(mark);
    return true;
  };

  onClickMark = (event, type) => {
    event.preventDefault();
    const { value } = this.state;
    const change = value.change().toggleMark(type);
    this.onChange(change);
  };
}

export default styled(HtmlEditorComponent)`
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  padding-top: 56px;
`;
