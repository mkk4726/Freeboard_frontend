import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  onClickDelete: (event: MouseEvent<HTMLElement>) => void;
  onClickComment: (event: MouseEvent<HTMLDivElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEditHandler: (event: MouseEvent<HTMLImageElement>) => void;
  onClickEditCompleteHandler: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeEditContentsHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeInputPasswordHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  setStar : Dispatch<SetStateAction<number>>
  data? : Pick<IQuery, "fetchBoardComments">;
  isOpenDeleteModal: boolean;
  onToggleModal: () => void;
  myIndex: Array<false>;
}