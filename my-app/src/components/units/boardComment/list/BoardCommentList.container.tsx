import { ChangeEvent, MouseEvent } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardCommentList.queries"
import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();
  
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const {data} = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId : String(router.query.boardId) }
  });

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    console.log(event);
    const myPassword = prompt("비밀번호를 입력하세요.")
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event?.target?.id
        },
        refetchQueries : [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId } 
          }
        ]
      })
    } catch (err) {
      if (err instanceof Error) alert(err.message)
    }
  }

  const onClickComment = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event)
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  }

  return (
    <BoardCommentListUI 
      data={data}
      onClickDelete={onClickDelete}
      onClickComment={onClickComment}
    />
  )
}