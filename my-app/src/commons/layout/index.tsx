import styled from "@emotion/styled";
import Banner from "./banner/banner";

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
    <Banner />
      <Wrapper>
        {props.children}
      </Wrapper>
    </>
  )
}