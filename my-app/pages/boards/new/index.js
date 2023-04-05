import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  Error
} from "../../../styles/emotion";

import { useDebugValue, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`

export default function BoardWriteUI() {
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [password, setPassword] = useState("")

  const [errorId, setErrorId] = useState("")
  const [errorPw, setErrorPw] = useState("")
  const [errorTitle, setErrorTitle] = useState("")
  const [errorContents, setErrorContents] = useState("")

  const [myCreateBoard] = useMutation(CREATE_BOARD);

  const router = useRouter();

  function handleChangeId(event) {
    const value = event.target.value;
    setId(value);
  }
  function handleChangeTitle(event) {
    const value = event.target.value;
    setTitle(value);
  }
  function handleChangeContents(event) {
    const value = event.target.value;
    setContents(value);
  }

  function handleChangePassword(event) {
    const value = event.target.value;
    setPassword(value);
  }

  async function handleClickSignup(event) {
    if (!id) {
      setErrorId("아이디를 똑바로 입력하세요.")
    } else {
      setErrorId("")
    }
    
    if (!password) {
      setErrorPw("비밀번호를 똑바로 입력하세요")
    } else {
      setErrorPw("")
    }
    
    if (!title) {
      setErrorTitle("제목을 입력해주세요")
    } else {
      setErrorTitle("")
    }

    if (!contents) {
      setErrorContents("내용을 입력해주세요")
    } else {
      setErrorContents("")
    }
    if (id && password && title && contents) {
      try {
        let result = await myCreateBoard({
          variables: { 
            createBoardInput : {
              writer: id,
              password,
              title,
              contents 
            }
          }
        });
        console.log(result);
        // alert(result.data.createBoard.message);
        alert("생성한 페이지로 이동합니다.")
        router.push(`/boards/${result.data.createBoard._id}`);

      } 
      catch(err) {
        console.log(err);
        alert(err);
      }
    }
  }


  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요." onChange={handleChangeId}/>
          <Error>{errorId}</Error>
          
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={handleChangePassword}/>
          <Error>{errorPw}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 작성해주세요." onChange={handleChangeTitle}/>
        <Error>{errorTitle}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents placeholder="내용을 작성해주세요." onChange={handleChangeContents}/>
        <Error>{errorContents}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={handleClickSignup}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
