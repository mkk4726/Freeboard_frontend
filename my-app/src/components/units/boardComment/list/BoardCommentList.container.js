import BoardCommentListUI from "./BoardCommentList.presenter"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardCommentList.queries"
import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"

export default function BoardCommentList() {
  const router = useRouter();
  
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const {data} = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId : router.query.boardId }
  });

  const onClickDelete = async (event) => {
    const myPassword = prompt("비밀번호를 입력하세요.")
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.target.id
        },
        refetchQueries : [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId } 
          }
        ]
      })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <BoardCommentListUI 
      data={data}
      onClickDelete={onClickDelete}
    />
  )
}