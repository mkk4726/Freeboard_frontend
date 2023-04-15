import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data? : Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLElement>) => void;
  onClickComment: (event: MouseEvent<HTMLDivElement>) => void;
  isOpenDeleteModal: boolean
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onToggleModal: () => void;
}