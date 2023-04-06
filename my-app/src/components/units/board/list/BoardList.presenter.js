import * as S from "./BoardList.styles"

export default function BoardListUI({data, onClickNew}) {
  
  console.log(data?.fetchBoards)

  return (
    <S.Wrapper>
      <S.UpperLine/>
      <S.Board>
        <S.Id>Id</S.Id>
        <S.Title>title</S.Title>
        <S.Writer>writer</S.Writer>
        <S.Date>date</S.Date>
      </S.Board>
      {data?.fetchBoards.map((board) => (
        <S.Board key={board._id}>
          <S.Id>{String(board._id).slice(-4).toUpperCase()}</S.Id>
          <S.Title>{board.title}</S.Title>
          <S.Writer>{board.writer}</S.Writer>
          <S.Date>{board.createdAt}</S.Date>
        </S.Board>
      ))}
      <S.LowerLine/>
      <S.Footer>
        <S.Button onClick={onClickNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
    
  )
}