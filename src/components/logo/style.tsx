import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../style/patterns";

export const LogoImg = styled(Image)`
  width: 144px;
  height: 44px;
  @media (max-width: ${breakpoints.mobile}) {
  }
`;
