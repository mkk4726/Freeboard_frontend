import { PaperClipOutlined, EnvironmentOutlined, DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import * as e from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "@material-ui/core";


export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const test = () => {
    alert('test');
  }

  return(
    <e.Wrapper>
      <e.CardWrapper>
        <e.Header>
          <e.AvatarWrapper>
            <e.Avatar src="/images/avatar.png" />
            <e.Info>
              <e.Writer>{props.data ? (props.data.fetchBoard? props.data.fetchBoard.writer : "This number has null") : "Loading..."}</e.Writer>
              <e.CreatedAt>
                {props.data?.fetchBoard?.createdAt}
              </e.CreatedAt>
            </e.Info>
          </e.AvatarWrapper>
          <e.Icons>
            <Tooltip
              placement="top-start"
              title="link"
            >
              <PaperClipOutlined />
            </Tooltip>
            <Tooltip
              placement="top-start"
              title={`${String(props.data?.fetchBoard.boardAddress?.address)} ${String(props.data?.fetchBoard.boardAddress?.addressDetail)}`}
            >
              <EnvironmentOutlined onClick={test}/> 
            </Tooltip>
          </e.Icons>
        </e.Header>
        <e.Body>
          <e.Title>{props.data ? (props.data.fetchBoard? props.data.fetchBoard.title : "Empty") : "Loading..."}</e.Title>
          <e.Contents>{props.data?.fetchBoard?.contents}</e.Contents>
          <e.Rate>
            <e.Like>
              <LikeOutlined onClick={props.onClickLike} />
              <span>{props.data?.fetchBoard.likeCount ?? props.like}</span>
            </e.Like>
            <e.DisLike>
              <DislikeOutlined onClick={props.onClickDisLike} />
              <span>{props.data?.fetchBoard.dislikeCount ?? props.like}</span>
            </e.DisLike>
          </e.Rate>
        </e.Body>
      </e.CardWrapper>
      <e.BottomWrapper>
        <e.Button onClick={props.onClickList}>목록으로</e.Button>
        <e.Button onClick={props.onClickEdit}>수정하기</e.Button>
        <e.Button>삭제하기</e.Button>
      </e.BottomWrapper>
    </e.Wrapper>
  )
}