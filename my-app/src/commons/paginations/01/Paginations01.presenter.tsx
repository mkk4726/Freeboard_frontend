import * as S from "./Paginations01.styles"
import { IPagenationUIProps } from "./Paginations01.types"

export default function PaginationUI(props: IPagenationUIProps) {

  return (
    <div>
    <S.PageNumber onClick={props.prevPage}>이전페이지</S.PageNumber>
    {new Array(10).fill(1).map((_, index) => (
      <S.PageNumber 
        onClick={props.onClickPage} 
        id={String(props.startIndex + index)}
        key={String(index)}
        isActive={props.startIndex + index === props.activedPage}
      >
        {props.startIndex + index}
      </S.PageNumber>
    ))}
    <S.PageNumber onClick={props.nextPage}>다음페이지</S.PageNumber>
    </div>
  )
}