import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data? : Pick<IQuery, "fetchBoard">
  onClickList : () => void;
  onClickEdit : () => void;
  like : number
  disLike : number
  onClickLike : () => void;
  onClickDisLike : () => void;
}