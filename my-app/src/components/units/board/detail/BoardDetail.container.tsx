import { useRouter } from "next/dist/client/router"
import { useMutation, useQuery } from "@apollo/client"
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import  BoardDetailUI  from "./BoardDetail.presenter"
import { IMutation, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import { useState } from "react";


export default function BoardDetail() {

  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoard">, // 결과
    IQueryFetchBoardArgs // 들어가는 값
  >(FETCH_BOARD, {variables: { boardId : String(router.query.boardId) }})

  const onClickList = () => {
    void router.push('/boards')
  }

  const onClickEdit = () => {
    void router.push(`/boards/${String(router.query.boardId)}/edit`)
  }
  
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationLikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickLike = () => {
    // setLike((prev) => prev + 1);
    // setLike(like+1);
    void likeBoard({
      variables: { boardId: String(router.query.boardId)},
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        }
      ]
    })
  }

  const onClickDislike = () => {
    void dislikeBoard({
      variables: { boardId: String(router.query.boardId)},
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {boardId: String(router.query.boardId)}
        }
      ]
    })
  }

  return (
    <BoardDetailUI 
      data = {data}
      onClickList = {onClickList}
      onClickEdit = {onClickEdit}
      like = {like}
      disLike = {disLike}
      onClickLike = {onClickLike}
      onClickDisLike = {onClickDislike}
      
    />
  )
}