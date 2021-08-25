import React from 'react';
import { CheckboxProps, CheckboxState } from './interface';
import {
  CheckBoxContainerDiv,
  GlobalStyle,
  CheckBoxChildrenSpan,
} from './style';

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      value: props.initialValue || false,
    };
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;
    const iconClassName = value ? 'fa fa-check-square' : 'fa fa-square-o';

    const onClick = () => {
      const newValue = !this.state.value;
      this.setState({ value: newValue });
      this.props.onChange(newValue);
    };

    return (
      <CheckBoxContainerDiv onClick={onClick}>
        <GlobalStyle />
        <i className={`${iconClassName} checkbox-icon `} aria-hidden="true"></i>

        <CheckBoxChildrenSpan>{children}</CheckBoxChildrenSpan>
      </CheckBoxContainerDiv>
    );
  }
}
export default Checkbox;
