import { useState } from "react";
import { useMutation} from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { CREATE_BOARD , UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { Id } from "../list/BoardList.styles";

export default function BoardWrite(props) {
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [password, setPassword] = useState("")
  
  const [errorId, setErrorId] = useState("")
  const [errorPw, setErrorPw] = useState("")
  const [errorTitle, setErrorTitle] = useState("")
  const [errorContents, setErrorContents] = useState("")

  const [myCreateBoard] = useMutation(CREATE_BOARD);
  const [myUpdateBoard] = useMutation(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);


  const router = useRouter();

  function handleChangeId(event) {
    const value = event.target.value;
    setId(value);

    if (event.target.value !== "") {
      setErrorId("");
    }

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  function handleChangeTitle(event) {
    const value = event.target.value;
    setTitle(value);

    if (event.target.value !== "") {
      setErrorTitle("");
    }

    if (event.target.value && Id && password && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function handleChangeContents(event) {
    const value = event.target.value;
    setContents(value);

    if (event.target.value !== "") {
      setErrorContents("");
    }

    if (event.target.value && Id && title && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function handleChangePassword(event) {
    const value = event.target.value;
    setPassword(value);

    if (event.target.value !== "") {
      setErrorPw("");
    }

    if (event.target.value && Id && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  async function handleClickSignup(event) {
    if (!id) {
      setErrorId("아이디를 똑바로 입력하세요.")
    } 
    if (!password) {
      setErrorPw("비밀번호를 똑바로 입력하세요")
    }
    
    if (!title) {
      setErrorTitle("제목을 입력해주세요")
    } 

    if (!contents) {
      setErrorContents("내용을 입력해주세요")
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

      } catch(err) {
        console.log(err);
        alert(err);
      }
    }
  }

  async function handleClickEdit(event) {
    try {
      const myVariables = {
        boardId: router.query.boardId,
        updateBoardInput : {}
      }
      if (title) myVariables.updateBoardInput.title = title;
      if (contents) myVariables.updateBoardInput.contents = contents;
      if (password) myVariables.password = password;

      let result = await myUpdateBoard({
        variables: myVariables
      });

      console.log(result);
      // alert(result.data.createBoard.message);
      alert("수정한 페이지로 이동합니다.")
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch(err) {
      console.log(password);

      console.log(err);
      alert(err);
    }
  }

  return (
    <BoardWriteUI 
    data={props.data}
    isActive={isActive}
    handleChangeId={handleChangeId}
    handleChangeTitle={handleChangeTitle}
    handleChangeContents={handleChangeContents}
    handleChangePassword={handleChangePassword}
    handleClickSignup={handleClickSignup}
    errorId={errorId}
    errorPw={errorPw}
    errorTitle={errorTitle}
    errorContents={errorContents}
    isEdit={props.isEdit}
    handleClickEdit={handleClickEdit}
    />
  )
}