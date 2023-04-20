import styled from "@emotion/styled";
import { IPageProps } from "./Paginations01.types";

export const PageNumber = styled.span`
    padding: 15px;
    cursor: ${(props:IPageProps) => (props.isActive ? "none" : "pointer")};
    font-size: 10px;
    color: ${(props:IPageProps) => (props.isActive ? "blue" : "black")};
    font-weight: ${(props:IPageProps) => (props.isActive ? "bold" : "normal")};

    :hover {
      color: orange;
    }
  `