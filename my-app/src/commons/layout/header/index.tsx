import { useRouter } from "next/dist/client/router"
import * as S from "./Header.styles"
import { MouseEvent } from "react";

export default function LayoutHeader() {

  const router = useRouter();

  const movePage = (event: MouseEvent<HTMLElement>) => {
    void router.push(event.currentTarget.id);
  }

  return (
    <>
      <S.Wrapper>
        <S.LeftWrapper> 
          <S.Title onClick={movePage} id="/boards">MKK`s Page</S.Title>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.LoginButton onClick={movePage} id="/login">로그인</S.LoginButton>
          <S.SignupButton onClick={movePage} id="/signup">회원가입</S.SignupButton> 
        </S.RightWrapper>
      </S.Wrapper>
    </>
  )
}