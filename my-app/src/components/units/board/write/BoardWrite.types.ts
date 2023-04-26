import { ChangeEvent, MutableRefObject } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { Address } from "react-daum-postcode";


export interface IBoardWriteProps {
  isEdit: boolean,
  data?: Pick<IQuery, "fetchBoard">
}

export interface IBoardWriteUIProps {
  data? : Pick<IQuery, "fetchBoard">
  errorId : string 
  errorPw : string 
  errorTitle : string 
  errorContents : string 
  isEdit : boolean
  isActive : boolean 
  isOpen : boolean
  address: string
  zipcode: string
  inputEl: MutableRefObject<any>
  imgUrls: string[]
  handleChangeId : (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeTitle : (event: ChangeEvent<HTMLInputElement>) => void; 
  handleChangeContents : (event: ChangeEvent<HTMLTextAreaElement>) => void; 
  handleChangePassword : (event: ChangeEvent<HTMLInputElement>) => void; 
  handleClickSignup : () => void; 
  handleClickEdit : () => void; 
  onToggleModal : () => void;
  handleComplete : (address: Address) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface ISubmitButtonProps {
  isActive : boolean
}