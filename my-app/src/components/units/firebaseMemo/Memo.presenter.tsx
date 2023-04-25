import * as S from "./Memo.styles"
import { IMemoUIProps } from "./Memo.types"

export default function MemoUI(props: IMemoUIProps) {

  return (
    <>
      <S.Wrapper>
        <S.LeftWrapper>
          <S.InputWrapper>
            <S.Title>Create and View Simple Memos</S.Title>
            <S.InputTitle onChange={props.onChangeTitle} value={props.title}/>
            <S.InputContents onChange={props.onChangeContents} value={props.contents}/>
            <S.ButtonWrapper>
              <S.Button onClick={props.onClickCreate}>Create</S.Button>
              <S.Button onClick={props.onClickView}>View</S.Button>
            </S.ButtonWrapper>
          </S.InputWrapper>
          <S.Memos>
            {props.memos.map((el, index) => (
              <S.Memo key={index}>
                <div>index: {index}</div>
                <div>title: {el.title}</div>
                <div>contents: {el.contents}</div>
              </S.Memo>
            ))}
          </S.Memos>
        </S.LeftWrapper>
      </S.Wrapper>
    </>
  )
}