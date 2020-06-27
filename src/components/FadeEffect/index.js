import PropTypes from "prop-types"
import React, { useRef, useState, useEffect } from "react"

import * as Styled from "./styled"

const FadeEffect = ({ children }) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })

    observer.observe(domRef.current)
  }, [])

  return (
    <Styled.Fade visible={isVisible} ref={domRef}>
      {children}
    </Styled.Fade>
  )
}

FadeEffect.propTypes = {
  siteTitle: PropTypes.string,
}

FadeEffect.defaultProps = {
  siteTitle: ``,
}

export default FadeEffect
