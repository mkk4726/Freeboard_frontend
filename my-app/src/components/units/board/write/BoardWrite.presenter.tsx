import * as e from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props : IBoardWriteUIProps) {

  return (
    <>
      {props.isOpen && (
        <e.AddressModal 
          open={true} 
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}  
        >
          <e.AddressSearchInput onComplete={props.handleComplete}/>
        </e.AddressModal>
      )}
      <e.Wrapper>
        <e.Title>게시글 {props.isEdit ? "수정" : "등록"}</e.Title>
        <e.WriterWrapper>
          <e.InputWrapper>
            <e.Label>작성자</e.Label>
            <e.Writer 
                type="text" 
                placeholder="이름을 적어주세요." 
                onChange={props.handleChangeId} 
                defaultValue={props.isEdit ? String(props.data?.fetchBoard?.writer) : "" }/>
            <e.Error>{props.errorId}</e.Error>
          </e.InputWrapper>
          <e.InputWrapper>
            <e.Label>비밀번호</e.Label>
            <e.Password 
                type="password" 
                placeholder="비밀번호를 작성해주세요." 
                onChange={props.handleChangePassword}/>
            <e.Error>{props.errorPw}</e.Error>
          </e.InputWrapper>
        </e.WriterWrapper>
        <e.InputWrapper>
          <e.Label>제목</e.Label>
          <e.Subject 
              type="text" 
              placeholder="제목을 작성해주세요." 
              onChange={props.handleChangeTitle} 
              defaultValue={props.data?.fetchBoard?.title}/>
          <e.Error>{props.errorTitle}</e.Error>
        </e.InputWrapper>
        <e.InputWrapper>
          <e.Label>내용</e.Label>
          <e.Contents 
              placeholder="내용을 작성해주세요." 
              onChange={props.handleChangeContents} 
              defaultValue={props.data?.fetchBoard?.contents}/>
          <e.Error>{props.errorContents}</e.Error>
        </e.InputWrapper>
        <e.InputWrapper>
          <e.Label>주소</e.Label>
          <e.ZipcodeWrapper>
            <e.Zipcode 
              placeholder="07250"
              readOnly
              value={
                props.zipcode ??
                props.data?.fetchBoard.boardAddress?.zipcode ??
                ""
              } 
            />
            <e.SearchButton onClick={props.onToggleModal}>
              우편번호 검색
            </e.SearchButton>
          </e.ZipcodeWrapper>
          <e.Address 
            readOnly
            value={
              props.address ??
              props.data?.fetchBoard.boardAddress?.address ?? 
              ""
            }
          />
          <e.Address 
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
        </e.InputWrapper>
        <e.InputWrapper>
          <e.Label>유튜브</e.Label>
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
          <e.SubmitButton 
            onClick={props.isEdit ? props.handleClickEdit : props.handleClickSignup}
            isActive={props.isActive ? true : props.isActive}
          >
          {props.isEdit ? "수정" : "등록"}하기</e.SubmitButton>
        </e.ButtonWrapper>
      </e.Wrapper>
    </>
  )
}