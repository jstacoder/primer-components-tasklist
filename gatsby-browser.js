/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme as primerTheme } from '@primer/components'


export const wrapRootElement = ({element}) =>{
  return (
    <ThemeProvider theme={{primerTheme}}>
              {element}
    </ThemeProvider>
  )
}