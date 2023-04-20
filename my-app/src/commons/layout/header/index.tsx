import * as S from "./Header.styles"

export default function LayoutHeader() {

  

  return (
    <>
      <S.Wrapper>
        <S.LeftWrapper> 
          MKK`s Page
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.LoginButton>로그인</S.LoginButton>
          <S.SignupButton>회원가입</S.SignupButton> 
        </S.RightWrapper>
      </S.Wrapper>
    </>
  )
}