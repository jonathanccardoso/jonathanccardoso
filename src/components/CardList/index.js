import React from "react"
import PropTypes from "prop-types"

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

CardList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardList
