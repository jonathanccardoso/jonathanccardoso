import React, { useEffect } from "react"

import * as Styled from "./styled"
import FadeEffect from "../FadeEffect"

const Initial = () => {
  useEffect(() => {
    function typeWritter(text) {
      const textArray = text.innerHTML.split("")
      text.innerHTML = ""
      textArray.forEach((letter, index) => {
        setTimeout(function () {
          text.innerHTML += letter
        }, 75 * index)
      })
    }

    const p = document.querySelector("p")
    typeWritter(p)
  }, [])

  return (
    <Styled.SectionInitial id="initial">
      <Styled.ContainerInitial>
        <FadeEffect>
          <Styled.Title>Hi!</Styled.Title>
        </FadeEffect>
        <FadeEffect>
          <Styled.Description>
            I have been working as a Systems Analyst since 2017. I am passionate
            about physical activities and enthusiastic about technology.
          </Styled.Description>
          <Styled.Button>
            <a href="#about">More About</a>
          </Styled.Button>
        </FadeEffect>
      </Styled.ContainerInitial>
    </Styled.SectionInitial>
  )
}

export default Initial
