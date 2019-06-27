import { BorderBox, Box, StyledOcticon, TextInput } from '@primer/components'
import { Pencil } from '@primer/octicons-react'
import React from 'react'

export default ({onSubmit, textInput, onTextChange}) =>{
  return (
     <Box ml={2}>
        <form onSubmit={onSubmit}>
          <Box>
            <Box display={'inline-block'}>
            <StyledOcticon icon={Pencil} size={20} mx={2}/>
            </Box>
            <Box ml={2} width={'90%'} display={'inline-block'}>
              <TextInput block placeholder={'add task'} value={textInput} onChange={onTextChange}/>
            </Box>
          </Box>
        </form>
      </Box>
  )
}