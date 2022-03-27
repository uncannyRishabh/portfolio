import React from 'react'
import { FooterContainer, FLine, Span } from './footerElements'

export const Footer = ({isdark}) => {
  return (
    <FooterContainer>
		<FLine isdark={isdark}>
			Designed 🍩 and built 👩‍💻 by <Span isdark={isdark}>@uncannyRishabh</Span>
		</FLine>
		<FLine isdark={isdark}>
			Powered  💪  by <Span isdark={isdark} target='_blank' href='https://github.com/pmndrs' rel='noreferrer' >@Pmndrs</Span>
		</FLine>
    </FooterContainer>
  )
}
