import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentUIProps {
  onChangeWriter : (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword : (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents : (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite : () => void;
  contents : string;
  setStar : Dispatch<SetStateAction<number>>;
}