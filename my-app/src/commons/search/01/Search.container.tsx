import styled from "@emotion/styled"
import { ChangeEvent } from "react"
import { ISearchProps } from "./Search.types";
import _ from "lodash"

export default function Search(props: ISearchProps) {

  // debouncing
  const getDebounce = _.debounce((value) => {
    void props.refetch({page: 1, search: value});
    props.setKeyword(value);
  }, 500)

  // event handler
  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  }

  //  styles
  const Wrapper = styled.div`
    margin-bottom: 30px;

  `
  const SearchSpan = styled.span`
    padding-right: 30px;
  `
  const SearchInput = styled.input`
    
  `

  return (
    <Wrapper>
      <SearchSpan>검색어를 입력하세요 :</SearchSpan>
      <SearchInput type="text" onChange={onChangeKeyword}/>
    </Wrapper>

  )
}