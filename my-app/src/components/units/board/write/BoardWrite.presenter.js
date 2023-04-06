import * as e from "./BoardWrite.styles";

export default function BoardWriteUI({
  handleChangeId, handleChangeTitle, handleChangeContents, handleChangePassword,
  handleClickSignup, errorId, errorPw, errorTitle, errorContents
}) {

  return (
    <e.Wrapper>
      <e.Title>게시글 등록</e.Title>
      <e.WriterWrapper>
        <e.InputWrapper>
          <e.Label>작성자</e.Label>
          <e.Writer type="text" placeholder="이름을 적어주세요." onChange={handleChangeId}/>
          <e.Error>{errorId}</e.Error>
          
        </e.InputWrapper>
        <e.InputWrapper>
          <e.Label>비밀번호</e.Label>
          <e.Password type="password" placeholder="비밀번호를 작성해주세요." onChange={handleChangePassword}/>
          <e.Error>{errorPw}</e.Error>
        </e.InputWrapper>
      </e.WriterWrapper>
      <e.InputWrapper>
        <e.Label>제목</e.Label>
        <e.Subject type="text" placeholder="제목을 작성해주세요." onChange={handleChangeTitle}/>
        <e.Error>{errorTitle}</e.Error>
      </e.InputWrapper>
      <e.InputWrapper>
        <e.Label>내용</e.Label>
        <e.Contents placeholder="내용을 작성해주세요." onChange={handleChangeContents}/>
        <e.Error>{errorContents}</e.Error>
      </e.InputWrapper>
      <e.InputWrapper>
        <e.Label>주소</e.Label>
        <e.ZipcodeWrapper>
          <e.Zipcode placeholder="07250" />
          <e.SearchButton>우편번호 검색</e.SearchButton>
        </e.ZipcodeWrapper>
        <e.Address />
        <e.Address />
      </e.InputWrapper>
      <e.InputWrapper>
        <e.Label qqq="red">유튜브</e.Label>
        <e.Youtube placeholder="링크를 복사해주세요." />
      </e.InputWrapper>
      <e.ImageWrapper>
        <e.Label>사진첨부</e.Label>
        <e.UploadButton>+</e.UploadButton>
        <e.UploadButton>+</e.UploadButton>
        <e.UploadButton>+</e.UploadButton>
      </e.ImageWrapper>
      <e.OptionWrapper>
        <e.Label>메인설정</e.Label>
        <e.RadioButton type="radio" id="youtube" name="radio-button" />
        <e.RadioLabel htmlFor="youtube">유튜브</e.RadioLabel>
        <e.RadioButton type="radio" id="image" name="radio-button" />
        <e.RadioLabel htmlFor="image">사진</e.RadioLabel>
      </e.OptionWrapper>
      <e.ButtonWrapper>
        <e.SubmitButton onClick={handleClickSignup}>등록하기</e.SubmitButton>
      </e.ButtonWrapper>
    </e.Wrapper>
  )
}