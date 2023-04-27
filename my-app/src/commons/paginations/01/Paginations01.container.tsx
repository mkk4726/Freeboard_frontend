import { MouseEvent, useState } from "react";
import { IPagenationProps } from "./Paginations01.types";
import PaginationUI from "./Paginations01.presenter";

export default function Pagination(props: IPagenationProps) {
  const [activedPage, setActivedPage] = useState(1);
  
  const lastpage = props.count != null ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event : MouseEvent<HTMLSpanElement>) => {
    void props.refetch({page: Number(event.currentTarget.id)})
    setActivedPage(Number(event.currentTarget.id));
  }

  const prevPage = () => {
    if (props.startIndex < 10) return;
    props.setStartIndex((prev) => (prev - 10));
    setActivedPage(props.startIndex - 10);
  }

  const nextPage = () => {
    if (props.startIndex + 10 > lastpage) return;
    props.setStartIndex((prev) => (prev + 10));
    setActivedPage(props.startIndex + 10);
  }
  

  return (
    <PaginationUI 
      activedPage={activedPage}
      onClickPage={onClickPage}
      prevPage={prevPage}
      nextPage={nextPage}
      startIndex={props.startIndex}
      lastpage={lastpage}
    />
  )
}