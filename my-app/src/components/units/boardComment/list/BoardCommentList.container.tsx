import { ChangeEvent, MouseEvent, useState } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardCommentList.queries"
import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import { 
  IMutation, 
  IMutationDeleteBoardCommentArgs, 
  IQuery, 
  IQueryFetchBoardCommentsArgs 
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

  const {data} = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId : router.query.boardId }
  });

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


  return (
    <BoardCommentListUI 
      data={data}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickDelete={onClickDelete}
      onClickComment={onClickComment}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onToggleModal={onToggleModal}
    />
  )
}