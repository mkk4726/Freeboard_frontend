import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";


export interface IBoardWriteProps {
  isEdit: boolean,
  data?: Pick<IQuery, "fetchBoard">
}

export interface IBoardWriteUIProps {
  data? : Pick<IQuery, "fetchBoard">
  handleChangeId : (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeTitle : (event: ChangeEvent<HTMLInputElement>) => void; 
  handleChangeContents : (event: ChangeEvent<HTMLTextAreaElement>) => void; 
  handleChangePassword : (event: ChangeEvent<HTMLInputElement>) => void; 
  handleClickSignup : () => void; 
  handleClickEdit : () => void; 
  errorId : string 
  errorPw : string 
  errorTitle : string 
  errorContents : string 
  isEdit : boolean
  isActive : boolean 

}

export interface ISubmitButtonProps {
  isActive : boolean
}