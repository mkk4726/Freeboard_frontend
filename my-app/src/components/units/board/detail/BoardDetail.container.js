import { useRouter } from "next/dist/client/router"
import { useQuery } from "@apollo/client"
import { FETCH_BORDER } from "./BoardDetail.queries";
import  BoardDetailUI  from "./BoardDetail.presenter"

export default function BoardDetail() {

  const router = useRouter();
  const { data } = useQuery(FETCH_BORDER, {
  variables: { boardId : router.query.boardId }
  })

  const onClickList = () => {
    router.push('/boards')
  }

  const onClickEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`)
  }

  return (
    <BoardDetailUI 
      data = {data}
      onClickList = {onClickList}
      onClickEdit={onClickEdit}
    />
  )
}