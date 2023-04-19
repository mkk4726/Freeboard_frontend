import Banner from "./banner/banner";

interface ILayoutProps {
  children: JSX.Element|JSX.Element[];
}

export default function Layout(props:ILayoutProps) {

  return (
    <>
    <Banner></Banner>
    {props.children}
    </>
  )
}