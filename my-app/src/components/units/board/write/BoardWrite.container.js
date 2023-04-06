import { useState } from "react";
import { useMutation} from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { CREATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite() {
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
    <BoardWriteUI 
    handleChangeId={handleChangeId}
    handleChangeTitle={handleChangeTitle}
    handleChangeContents={handleChangeContents}
    handleChangePassword={handleChangePassword}
    handleClickSignup={handleClickSignup}
    errorId={errorId}
    errorPw={errorPw}
    errorTitle={errorTitle}
    errorContents={errorContents}
    />
  )
}