import styled from "styled-components";

import { mobile } from "../../utils/device";

const StyledLayout = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  overflow: hidden;

  @media ${mobile} {
    flex-direction: column;
  }
`;

export default StyledLayout;
