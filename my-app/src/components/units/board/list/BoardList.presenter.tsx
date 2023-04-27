import * as S from "./BoardList.styles"
import { getDate } from "../../../../commons/libraries/utils"
import { IBoardListUIProps } from "./BoardList.types"
import Pagination from "../../../../commons/paginations/01/Paginations01.container"
import Search from "../../../../commons/search/01/Search.container"
import {v4 as uuid4} from "uuid"

export default function BoardListUI({
  data, onClickMoveToBoardNew, onClickMoveToBoardDetail, refetch,
  startIndex, setStartIndex, count, setKeyword, keyword} : IBoardListUIProps) {
  
  console.log(data?.fetchBoards)

  return (
    <S.Wrapper>
      <Search 
        refetch={refetch}
        setKeyword={setKeyword}
      />
      <S.Header>
        <S.Id>Id</S.Id>
        <S.Title>title</S.Title>
        <S.Writer>writer</S.Writer>
        <S.Date>date</S.Date>
      </S.Header>
      <S.UpperLine/>
      {data?.fetchBoards.map((board) => (
        <S.Board key={board._id} onClick={onClickMoveToBoardDetail} id={board._id}>
          <S.Id>{String(board._id).slice(-4).toUpperCase()}</S.Id>
          <S.Title id={board._id}>
            {board.title
              .replaceAll(keyword, `@#$${keyword}@#$`)
              .split("@#$")
              .map(el => (
                <span 
                  key={uuid4()}
                  style={{color: el===keyword ? "red" : "black"}}
                >
                  {el}
                </span>
              ))}
          </S.Title>
          <S.Writer>{board.writer}</S.Writer>
          <S.Date>{getDate(board.createdAt)}</S.Date>
        </S.Board>
      ))}
      <S.LowerLine/>
      <S.Footer>
        <Pagination
          refetch={refetch}
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          count={count}
        />
        <S.Button onClick={onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" /> 
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
    
  )
}