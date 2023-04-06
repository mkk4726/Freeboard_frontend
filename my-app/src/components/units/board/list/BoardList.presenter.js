import * as S from "./BoardList.styles"
import { getDate } from "../../../../commons/libraries/utils"

export default function BoardListUI({
  data, onClickMoveToBoardNew, onClickMoveToBoardDetail}) {
  
  console.log(data?.fetchBoards)

  return (
    <S.Wrapper>
      
      <S.Header>
        <S.Id>Id</S.Id>
        <S.Title>title</S.Title>
        <S.Writer>writer</S.Writer>
        <S.Date>date</S.Date>
      </S.Header>
      <S.UpperLine/>
      {data?.fetchBoards.map((board) => (
        <S.Board key={board._id}>
          <S.Id>{String(board._id).slice(-4).toUpperCase()}</S.Id>
          <S.Title id={board._id} onClick={onClickMoveToBoardDetail}>{board.title}</S.Title>
          <S.Writer>{board.writer}</S.Writer>
          <S.Date>{getDate(board.createdAt)}</S.Date>
        </S.Board>
      ))}
      <S.LowerLine/>
      <S.Footer>
        <S.Button onClick={onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등l록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
    
  )
}