import { useRouter } from "next/dist/client/router"
import * as S from "./Menu.styles"
import { Fragment, MouseEvent } from "react";

export default function LayoutMenu() {

  const router = useRouter();

  const movePage = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };

  const PageList = [
    {id:"/freeboard", title:"자유게시판"},
    {id:"/usedMarket", title:"중고마켓"},
    {id:"/myPage", title:"마이페이지"},
    {id:"/catfacts", title:"FactsAboutCats"}
  ]
  
  return (
    <>
     <S.Wrapper>
        {PageList.map((el) => (
          <Fragment key={el.id}>
            <S.Page onClick={movePage} id={el.id}>{el.title}</S.Page>
            <S.Contour>|</S.Contour>
          </Fragment>
        ))}
     </S.Wrapper>
    </>
  )
}