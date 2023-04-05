import { useRouter } from "next/dist/client/router"
import { useQuery, gql } from "@apollo/client"

const FETCH_BORDER = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number) {
      writer,
      title,
      contents
    }
  }
`


export default function NumberPage() {
  const router = useRouter();

  const {data} = useQuery(FETCH_BORDER, {
    variables: {number : Number(router.query.number)}
  })

  return (
    <>
      <div>작성자 : {data ? (data.fetchBoard? data.fetchBoard.writer : "This number has null") : "Loading..."}</div>
      <div>제목 : {data ? (data.fetchBoard? data.fetchBoard.title : "Empty") : "Loading..."}</div>
      <div>내용 : {data ? (data.fetchBoard? data.fetchBoard.contents : "Empty") : "Loading..."}</div>
    </>


  )
}