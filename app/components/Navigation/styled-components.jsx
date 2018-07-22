import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 22;
  height: ${p => (p.height ? p.height : '56px')};
  background: ${p => (p.background ? p.background : 'white')};
`;
