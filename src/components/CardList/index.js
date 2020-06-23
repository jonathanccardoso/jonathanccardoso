import React from "react"
import { Link } from "gatsby"

import * as Styled from "./styled"
import * as Image from "styled-icons/fa-brands"

const CardList = ({ icon, title, description }) => {
  return (
    <Styled.CardItem>
      <Styled.CardItemIcon title={title} icon={icon} />
      <Styled.CardItemTitle>{title}</Styled.CardItemTitle>
      <Styled.CardItemDescription>{description}</Styled.CardItemDescription>
    </Styled.CardItem>
  )
}

export default CardList
