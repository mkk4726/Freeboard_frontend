import { ChangeEvent, MouseEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data? : Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
}