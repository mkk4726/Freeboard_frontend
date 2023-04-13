import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router";

export default function BoardList() {
  const {data} = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const router = useRouter();

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  }

  const onClickMoveToBoardDetail = (event : MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event?.target?.id}`);
  }

  return(
    <BoardListUI 
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  )
}