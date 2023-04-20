import styled from "@emotion/styled";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutMenu from "./menu";

interface ILayoutProps {
  children: JSX.Element|JSX.Element[];
}

export default function Layout(props:ILayoutProps) {
  
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
  `

  return (
    <>
    <LayoutHeader />
    <LayoutBanner />
    <LayoutMenu />
      <Wrapper>
        {props.children}
      </Wrapper>
    </>
  )
}