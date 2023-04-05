import { useRouter } from "next/dist/client/router"
import { useQuery, gql } from "@apollo/client"
import { Avatar, AvatarWrapper, Body, BottomWrapper, Button, CardWrapper, Contents, CreatedAt, Header, Info, Title, Wrapper, Writer } from "../../../styles/emotion-detail";


const FETCH_BORDER = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId) {
      _id,
      writer,
      title,
      contents,
      createdAt
    }
  }
`


export default function NumberPage() {
  const router = useRouter();

  const {data} = useQuery(FETCH_BORDER, {
    variables: { boardId : router.query.boardId }
  })

  return (
    <Wrapper>
        <CardWrapper>
          <Header>
            <AvatarWrapper>
              <Avatar src="/images/avatar.png" />
              <Info>
                <Writer>{data ? (data.fetchBoard? data.fetchBoard.writer : "This number has null") : "Loading..."}</Writer>
                <CreatedAt>
                  {data?.fetchBoard?.createdAt}
                </CreatedAt>
              </Info>
            </AvatarWrapper>
          </Header>
          <Body>
            <Title>{data ? (data.fetchBoard? data.fetchBoard.title : "Empty") : "Loading..."}</Title>
            <Contents>{data?.fetchBoard?.contents}</Contents>
          </Body>
        </CardWrapper>
        <BottomWrapper>
          <Button>목록으로</Button>
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </BottomWrapper>
      </Wrapper>
  )
}