import * as S from "./CatFacts.styles"
import { ICatFactsUIProps } from "./CatFacts.types"

export default function CatFactsUI(props: ICatFactsUIProps) {

  return (
    <div>
      <S.Title> 5 Facts about cats</S.Title>
      <S.ImgWrapper>
        <img src="https://thecatapi.com/api/images/get?format=src&type=gif"/>
      </S.ImgWrapper>
      {props.facts.map((el, index) => (
        <S.TextWrapper key={index}>
          {index + 1} : {el.text}
        </S.TextWrapper>
      ))}
    </div>
  )
}