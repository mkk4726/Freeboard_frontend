import BoardCommentUI from "./BoardCommentWrite.presenter"
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries"
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { useRouter } from "next/dist/client/router"
import { useMutation } from "@apollo/client"
import { useState } from "react"

export default function BoardCommentWrite() {

  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onChangeContents = (event) => {
    setContents(event.target.value);
  }

  const onClickWrite = (event) => {
    try {
      const result = createBoardComment({
        variables: {
          createBoardCommentInput : {
            writer,
            password,
            contents,
            rating: 0
          },
          boardId : router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId},
          }
        ]
      })
      alert("등록했습니다.");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <BoardCommentUI 
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      contents={contents}
    />
  )
}