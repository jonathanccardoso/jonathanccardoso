import React from "react"
import { Link } from "gatsby"

import * as Styled from "./styled"

const CardList = ({ icon, image, title, description, year }) => {
  return (
    <>
      {icon ? (
        <Styled.CardItem>
          <Styled.CardItemIcon title="web hosting" icon={icon} />
          <Styled.CardItemTitle>Web Hosting</Styled.CardItemTitle>
          <Styled.CardItemDescription>
            Your site hosted on the best data centers. We guarantee security and
            stability.
          </Styled.CardItemDescription>
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
