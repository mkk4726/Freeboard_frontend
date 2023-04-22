import { ChangeEvent, MouseEvent, useState } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentList.queries"
import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import { 
  IMutation, 
  IMutationDeleteBoardCommentArgs, 
  IQuery, 
  IQueryFetchBoardCommentsArgs,
  IMutationUpdateBoardCommentArgs
} from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") {
    // alert("올바르지 않은 게시글 아이디입니다.");
    // void router.push('/');
    return <></>;
  }

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [myPassword, setMyPassword] = useState("");
  
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  // 댓글 조회 gql
  const {data} = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId : router.query.boardId }
  });

  // 댓글 수정 gql
  const [updateComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT)

  // 수정할 댓글 확인용 index
  const [myIndex, setMyIndex] = useState(
    new Array(data?.fetchBoardComments.length).fill(false)
  );
  const [editContents, setEditContents] = useState("");
  const [star, setStar] = useState(0);
  const [inputPassword, setInputPassword] = useState("");
  

  const onClickDelete = async (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;

    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: myBoardCommentId // Event Bubbling 현상 때문에. 
        },
        refetchQueries : [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId } 
          }
        ]
      })
      setIsOpenDeleteModal(false);
    } catch (err) {
      if (err instanceof Error) alert(err.message)
    }
  }

  const onClickOpenDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    setMyBoardCommentId(event.target.id);
    setIsOpenDeleteModal(true);
  }

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  }

  const onToggleModal = () => {
    setIsOpenDeleteModal((prev) => !prev)
  }

  const onClickComment = (event: MouseEvent<HTMLDivElement>) => {
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  }

  // 댓글 수정기능
  const onClickEditCompleteHandler = async (event: MouseEvent<HTMLImageElement>) => {
    const qqq = [...myIndex];
    const aaa = event.currentTarget.id.indexOf('/'); 
    const index = event.currentTarget.id.slice(0, aaa);
    qqq[Number(index)] = false;
    setMyIndex(qqq);

    const id = event.currentTarget.id.slice(aaa+1);

    if (!editContents) return;
    if (!inputPassword) return;
    if (!id) return;

    try {
      await updateComment({
        variables: {
          updateBoardCommentInput: {
            contents: editContents,
            rating: star
          },
          password: inputPassword,
          boardCommentId: id
        }
      })
    } catch (err) {
      alert(err)
    }
    
  }

  // 보기 -> 수정 이미지 클릭했을 때
  const onClickEditHandler = (event: MouseEvent<HTMLImageElement>) => {
    const qqq = [...myIndex];
    const aaa = event.currentTarget.id.indexOf('/'); 
    const index = event.currentTarget.id.slice(0, aaa);
    qqq[Number(index)] = true;
    setMyIndex(qqq);

  }

  // 수정시 입력값 
  const onChangeEditContentsHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.currentTarget.value);
  }

  const onChangeInputPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.currentTarget.value);
  }


  return (
    <BoardCommentListUI 
      data={data}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickDelete={onClickDelete}
      onClickComment={onClickComment}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onToggleModal={onToggleModal}
      onClickEditHandler={onClickEditHandler}
      onClickEditCompleteHandler={onClickEditCompleteHandler}
      myIndex={myIndex}
      onChangeEditContentsHandler={onChangeEditContentsHandler}
      onChangeInputPasswordHandler={onChangeInputPasswordHandler}
      setStar={setStar}
    />
  )
}