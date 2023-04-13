import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { gql , useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";

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

  // if (typeof router.query.boardId !== "string") {
  //   router.push("/")
  //   return <></>
  // }

  const { data } = useQuery<
    Pick<IQuery, "fetchBoard">, 
    IQueryFetchBoardArgs
  >(FETCH_BORDER, {
    variables: { boardId : String(router.query.boardId) }
    })

  console.log(data);

  return (
    <BoardWrite 
      isEdit={true} 
      data={data}
    />
  )
}