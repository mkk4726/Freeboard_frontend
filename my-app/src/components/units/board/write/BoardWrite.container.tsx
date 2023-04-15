import { ChangeEvent, useState } from "react";
import { useMutation} from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { CREATE_BOARD , UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { IBoardWriteProps } from "./BoardWrite.types";
import { Address } from "react-daum-postcode";


export default function BoardWrite(props: IBoardWriteProps) {
  // Create state using useState (hooks)
  const [id, setId] = useState<string>("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [password, setPassword] = useState("")
  // modal , for conditional rendering
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  // for error message
  const [errorId, setErrorId] = useState("")
  const [errorPw, setErrorPw] = useState("")
  const [errorTitle, setErrorTitle] = useState("")
  const [errorContents, setErrorContents] = useState("")
  // control activation of button
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  // gql -> function using useMutation
  // create Board
  const [myCreateBoard] = useMutation<
    Pick<IMutation, "createBoard">, // output 
    IMutationCreateBoardArgs // input
  >(CREATE_BOARD);
  // update Board
  const [myUpdateBoard] = useMutation<
    Pick<IMutation, "updateBoard">, 
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  // define handler functions
  // for onChange Id event
  function handleChangeId(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setId(value);

    if (event.target.value !== "") {
      setErrorId("");
    }

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // for onChange Title event
  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTitle(value);

    if (event.target.value !== "") {
      setErrorTitle("");
    }

    if (event.target.value && id && password && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  // for onChange Contents event
  function handleChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setContents(value);

    if (event.target.value !== "") {
      setErrorContents("");
    }

    if (event.target.value && id && title && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  // for onChange password event
  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPassword(value);

    if (event.target.value !== "") {
      setErrorPw("");
    }

    if (event.target.value && id && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  // Modal 관련 functions.
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  }
  // react-daum-postcode를 이용
  // onComplete event에 대한 handelr
  const handleComplete = (address : Address) => {
    setAddress(address.address);
    setZipcode(address.zonecode)
    setIsOpen((prev) => !prev);
  }
  // 세부주소 입력 
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event?.target.value);
  }

  // youtube url 입력
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event?.target.value)
  }

  // for signup button onClick event
  // create board
  async function handleClickSignup() {
    if (!id) {
      setErrorId("아이디를 똑바로 입력하세요.")
    } 
    if (!password) {
      setErrorPw("비밀번호를 똑바로 입력하세요")
    }
    
    if (!title) {
      setErrorTitle("제목을 입력해주세요")
    } 

    if (!contents) {
      setErrorContents("내용을 입력해주세요")
    } 

    if (id && password && title && contents) {
      try {
        const result = await myCreateBoard({
          // input value 
          variables: { 
            createBoardInput : {
              writer: id,
              password,
              title,
              contents ,
              boardAddress: {
                zipcode,
                address,
                addressDetail
              },
              youtubeUrl
            }
          }
        });
        // alert(result.data.createBoard.message);
        alert("생성한 페이지로 이동합니다.")
        void router.push(`/boards/${String(result.data?.createBoard._id)}`);

      } catch(err) {
        alert(err);
      }
    }
  }
  // for edit button onClick event
  // update board
  async function handleClickEdit() {
    // error exception 항상 해주기
    try {
      const updateBoardInput: IUpdateBoardInput = {}
      if (title) updateBoardInput.title = title;
      if (contents) updateBoardInput.contents = contents;
      if (zipcode || address || addressDetail) {
        updateBoardInput.boardAddress = {};
        if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;        
        if (address) updateBoardInput.boardAddress.address = address;
        if (addressDetail) 
          updateBoardInput.boardAddress.addressDetail = addressDetail;
      }

      const result = await myUpdateBoard({
        // update variables
        variables: {
          boardId: String(router.query.boardId),
          password,
          updateBoardInput
      }});
      // alert(result.data.createBoard.message);
      alert("수정한 페이지로 이동합니다.")
      void router.push(`/boards/${String(result.data?.updateBoard._id)}`);
    } catch(err) {
      console.log(password);

      console.log(err);
      alert(err);
    }
  }


  return (
    <BoardWriteUI 
      data={props.data}
      isActive={isActive}
      errorId={errorId}
      errorPw={errorPw}
      errorTitle={errorTitle}
      errorContents={errorContents}
      isEdit={props.isEdit}
      isOpen={isOpen}
      address={address}
      zipcode={zipcode}
      handleChangeId={handleChangeId}
      handleChangeTitle={handleChangeTitle}
      handleChangeContents={handleChangeContents}
      handleChangePassword={handleChangePassword}
      handleClickSignup={handleClickSignup}
      handleClickEdit={handleClickEdit}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
    />
  )
}