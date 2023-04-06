import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px 0px 0px 100px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: none;
  border-top: 3px solid gray;
  padding: 20px;
  text-align: center;
`

export const UpperLine = styled.div`
  border-top: 1px solid black;
`

export const LowerLine = styled.div`
  border-bottom: 3px solid gray;
`

export const Board = styled.div`
  display:flex;
  width: 100%;
  padding: 20px;
  text-align: center;
`

export const Id = styled.div`
  width: 15%;
`

export const Title = styled.div`
  width: 40%;
  cursor: pointer;

  :hover {
    color: blue;
  }
`
export const Writer = styled.div`
  width: 15%;
`

export const Date = styled.div`
  width: 30%;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;