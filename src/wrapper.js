import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme as primerTheme } from '@primer/components'

export default ({children}) =>{
  return (
   <div style={{minWidth: 'unset'}}>
     <ThemeProvider theme={primerTheme}>
     {children}
     </ThemeProvider>
   </div>
   
  )
}
