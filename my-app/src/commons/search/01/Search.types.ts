import { ApolloQueryResult } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../types/generated/types";

export interface ISearchProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;

}