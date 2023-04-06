import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router";

export default function BoardList() {
  const {data} = useQuery(FETCH_BOARDS);

  const router = useRouter();

  const onClickNew = () => {
    router.push("/boards/new");
  }

  return(
    <BoardListUI 
      data={ data }
      onClickNew={ onClickNew }
    />
  )
}