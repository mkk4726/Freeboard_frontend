import * as e from "../../../styles/emotion-detail";

export default function BoardDetailUI({data}) {


  return(
    <e.Wrapper>
      <e.CardWrapper>
        <e.Header>
          <e.AvatarWrapper>
            <e.Avatar src="/images/avatar.png" />
            <e.Info>
              <e.Writer>{data ? (data.fetchBoard? data.fetchBoard.writer : "This number has null") : "Loading..."}</e.Writer>
              <e.CreatedAt>
                {data?.fetchBoard?.createdAt}
              </e.CreatedAt>
            </e.Info>
          </e.AvatarWrapper>
        </e.Header>
        <e.Body>
          <e.Title>{data ? (data.fetchBoard? data.fetchBoard.title : "Empty") : "Loading..."}</e.Title>
          <e.Contents>{data?.fetchBoard?.contents}</e.Contents>
        </e.Body>
      </e.CardWrapper>
      <e.BottomWrapper>
        <e.Button>목록으로</e.Button>
        <e.Button>수정하기</e.Button>
        <e.Button>삭제하기</e.Button>
      </e.BottomWrapper>
    </e.Wrapper>
  )
}