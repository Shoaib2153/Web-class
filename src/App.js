

import React from "react"
import Heading from "./components/Header/Header"
import Section from "./components/Section/Section"

  
export const App=()=>{
    return(
      <Section >
      <Heading >Title</Heading>
      <Section level={2}>
        <Heading >Heading</Heading>
        <Heading >Heading</Heading>
        <Heading >Heading</Heading>
        <Section>
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>
          <Section>
            <Heading >Sub-sub-heading</Heading>
            <Heading >Sub-sub-heading</Heading>
            <Heading >Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>

    )
}
