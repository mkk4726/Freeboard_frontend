import React, { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IBoardListUIProps {
  data ?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardNew : () => void;
  onClickMoveToBoardDetail : (event : MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  startIndex: number;
  count?:number;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
}