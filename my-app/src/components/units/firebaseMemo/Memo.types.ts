import { ChangeEvent } from "react";

export interface IMemoUIProps {
  onClickCreate : () => void;
  onClickView : () => void;
  onChangeTitle : (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  memos: any[];
  title: string;
  contents: string;
}