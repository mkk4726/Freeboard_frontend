import { getDate } from '../../../../commons/libraries/utils';
import * as S from "./BoardCommentList.styles"
import { IBoardCommentListUIProps } from './BoardCommentList.types';


export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
 
  return (
    <div>
      {props.isOpenDeleteModal && (
        <S.PasswordModal open={true} onOk={props.onClickDelete} onCancel={props.onToggleModal}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput 
            type='password'
            onChange={props.onChangeDeletePassword}  
          />
        </S.PasswordModal>
      )}
      {props.data?.fetchBoardComments.map((el, index) => (
        <div key={index}>
          {/* 수정버튼 누른 댓글 */}
          {props.myIndex[index] && (
            <S.ItemWrapper 
              key={el._id} 
              id={el._id}
            >
              <S.FlexWrapper>
                <S.Avatar src="/images/avatar.png" />
                <S.MainWrapper id={String(el.writer)}>
                    <S.WriterWrapper>
                      <S.Writer>{el.writer}</S.Writer>
                      <S.Star 
                        value={el.rating} 
                        onChange={props.setStar}
                      />
                    </S.WriterWrapper>
                    <S.Contents>
                      <S.EditContents 
                        placeholder='contents'
                        onChange={props.onChangeEditContentsHandler}
                      />
                      <S.InputPassword 
                        type='password' 
                        placeholder='password'
                        onChange={props.onChangeInputPasswordHandler}
                      />
                    </S.Contents>
                </S.MainWrapper>
                <S.OptionWrapper>
                  <S.UpdateIcon 
                    id={`${index}/${el._id}`}
                    src="/images/boardComment/list/option_update_icon.png" 
                    onClick={props.onClickEditCompleteHandler}
                  />
                  <S.DeleteIcon 
                    id={el._id}
                    src="/images/boardComment/list/option_delete_icon.png"
                    onClick={props.onClickOpenDeleteModal}
                  />
                </S.OptionWrapper>
              </S.FlexWrapper>
              <S.DateString>{getDate(el?.createdAt)}</S.DateString>
            </S.ItemWrapper>
          )}
          {/* 수정버튼 안누른 댓글 */}
          {!props.myIndex[index] && (
            <S.ItemWrapper 
              key={el._id} 
              id={el._id}
            >
              <S.FlexWrapper>
                <S.Avatar src="/images/avatar.png" />
                <S.MainWrapper id={String(el.writer)} onClick={props.onClickComment}>
                    <S.WriterWrapper>
                      <S.Writer>{el.writer}</S.Writer>
                      <S.Star value={el.rating} disabled/>
                    </S.WriterWrapper>
                    <S.Contents>{el.contents}</S.Contents>
                </S.MainWrapper>
                <S.OptionWrapper>
                  <S.UpdateIcon 
                    src="/images/boardComment/list/option_update_icon.png" 
                    id={`${index}/${el._id}`}
                    onClick={props.onClickEditHandler}
                  />
                  <S.DeleteIcon 
                    id={el._id}
                    src="/images/boardComment/list/option_delete_icon.png"
                    onClick={props.onClickOpenDeleteModal}
                  />
                </S.OptionWrapper>
              </S.FlexWrapper>
              <S.DateString>{getDate(el?.createdAt)}</S.DateString>
            </S.ItemWrapper>
          )}
        </div>
      ))}
    </div>
  );
}