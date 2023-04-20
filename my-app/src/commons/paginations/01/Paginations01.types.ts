import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../types/generated/types";
import { ApolloQueryResult } from "@apollo/client";


export interface IPagenationProps {
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}

export interface IPagenationUIProps {
  activedPage: number;
  startIndex: number;
  onClickPage: (event : MouseEvent<HTMLSpanElement>) => void;
  prevPage: () => void;
  nextPage: () => void;
}

export interface IPageProps {
  isActive?: boolean;
}