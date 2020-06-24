import React from "react"

import * as Styled from "./styled"

const CardList = ({ title, description, children }) => {
  return (
    <Styled.CardItem>
      {children}
      <Styled.CardItemTitle>{title}</Styled.CardItemTitle>
      <Styled.CardItemDescription>{description}</Styled.CardItemDescription>
    </Styled.CardItem>
  )
}

export default CardList
