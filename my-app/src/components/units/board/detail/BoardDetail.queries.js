import { gql } from "@apollo/client"

export const FETCH_BORDER = gql`
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