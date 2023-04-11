import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { gql , useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router";

const FETCH_BORDER = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id,
      writer,
      title,
      contents,
      createdAt
    }
  }
`;



export default function BoardListPage() {

  const router = useRouter();

  const { data } = useQuery(FETCH_BORDER, {
    variables: { boardId : router.query.boardId }
    })

  console.log(data);

  return (
    <BoardWrite 
      isEdit={true} 
      data={data}
    />
  )
}