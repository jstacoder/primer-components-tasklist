import React from 'react'
import { BorderBox, Heading } from '@primer/components'

export default ({renderTabTitle, selected, tasks}) => {

  return (
    <BorderBox border={0} borderBottom={1} mb={3}>
        <Heading textAlign={'center'} m={2}>
          {renderTabTitle(selected, tasks)}
        </Heading>
      </BorderBox>
  )
}