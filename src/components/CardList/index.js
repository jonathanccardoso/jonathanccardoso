import React from "react"
import { Link } from "gatsby"

import * as Styled from "./styled"
import { Github } from "styled-icons/fa-brands"

const iconTypes = {
  Github,
}

const CardList = ({ icon, image, title, link, description, year }) => {
  const Iconfa = iconTypes[icon]

  return (
    <>
      {icon ? (
        <Styled.CardItem>
          <Styled.CardItemIcon title={title} icon={icon} />
          <Styled.CardItemTitle>{title}</Styled.CardItemTitle>
          <Styled.CardItemDescription>{description}</Styled.CardItemDescription>
        </Styled.CardItem>
      ) : (
        <Styled.BoxShadowItem>
          <Link to="https:www.mobister.com.br/">
            <img
              class="card-img-top justify-center img-fluid"
              alt="Mobister"
              src="images/logo-mobister.png"
              data-holder-rendered="true"
            />
            <Styled.BoxShadowItemBody>
              <Styled.BoxShadowItemDescription>
                Specialist in design and production of digital solutions,
                Mobister develops products focused on UX.
              </Styled.BoxShadowItemDescription>
              <Styled.BoxShadowItemYear>2018</Styled.BoxShadowItemYear>
            </Styled.BoxShadowItemBody>
          </Link>
        </Styled.BoxShadowItem>
      )}
    </>
  )
}

export default CardList
