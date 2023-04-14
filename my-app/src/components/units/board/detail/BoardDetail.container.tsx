import { useRouter } from "next/dist/client/router"
import { useQuery } from "@apollo/client"
import { FETCH_BORDER } from "./BoardDetail.queries";
import  BoardDetailUI  from "./BoardDetail.presenter"
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardDetail() {

  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoard">, // 결과
    IQueryFetchBoardArgs // 들어가는 값
  >(FETCH_BORDER, {variables: { boardId : String(router.query.boardId) }})

  const onClickList = () => {
    void router.push('/boards')
  }

  const onClickEdit = () => {
    void router.push(`/boards/${String(router.query.boardId)}/edit`)
  }

  return (
    <BoardDetailUI 
      data = {data}
      onClickList = {onClickList}
      onClickEdit = {onClickEdit}
    />
  )
}