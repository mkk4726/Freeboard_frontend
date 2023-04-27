import { MouseEvent, useState } from "react";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router";
import BoardListUI from "./BoardList.presenter"

export default function BoardList() {
  // used in Search Component
  const [keyword, setKeyword] = useState("");

  const [startIndex, setStartIndex] = useState(1);

  const {data, refetch} = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {page: startIndex}
  });
  const {data:dataBoardsCount, refetch: refetchCount} = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const router = useRouter();

  const onClickMoveToBoardNew = () => {
    void router.push("/boards/new");
  }

  const onClickMoveToBoardDetail = (event : MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event?.currentTarget?.id}`);
  }

  return(
    <>
    `<BoardListUI 
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      refetchCount={refetchCount}
      startIndex={startIndex}
      setStartIndex={setStartIndex}
      count={dataBoardsCount?.fetchBoardsCount}
      setKeyword={setKeyword}
      keyword={keyword}
      />
    </>
  )
}