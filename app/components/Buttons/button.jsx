import styled from 'styled-components';
import React from 'react';
import Button from '@material-ui/core/Button';

const PrimaryButton = ({
  className,
  children,
  fullWidth,
  href,
  variant,
  disabled
}) => (
  <div className={className}>
    <Button
      color="primary"
      fullWidth={fullWidth}
      href={href}
      variant={variant || 'contained'}
      disabled={disabled}
    >
      {children}
    </Button>
  </div>
);

export default styled(PrimaryButton)`
  display: inline-block;
  margin: 30px 0;
  width: ${p => (p.fullWidth ? '100%' : 'auto')};
`;
