import { useRouter } from "next/dist/client/router"
import { useQuery } from "@apollo/client"
import { FETCH_BORDER } from "./BoardDetail.queries";
import { BoardDetailUI } from "./BoardDetail.presenter"

export default function BoardDetail() {

    const router = useRouter();

    const {data} = useQuery(FETCH_BORDER, {
    variables: { boardId : router.query.boardId }
  })

  return (
    <BoardDetailUI 
      data = {data}
    />
  )
}