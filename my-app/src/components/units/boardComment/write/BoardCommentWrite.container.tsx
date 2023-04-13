import BoardCommentUI from "./BoardCommentWrite.presenter"
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries"
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { useRouter } from "next/dist/client/router"
import { useMutation } from "@apollo/client"
import { ChangeEvent, useState } from "react"

export default function BoardCommentWrite() {

  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  }

  const onClickWrite = () => {
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
      if (err instanceof Error) alert(err.message);
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