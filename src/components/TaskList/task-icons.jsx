import { Check, Heart, Reply, X } from '@primer/octicons-react'
import { CircleOcticon, Flex } from '@primer/components'
import React from 'react'
import styled, { css } from 'styled-components'

const iconStyles = css`
  &:hover{
    background-color: #222222;
    opacity: 0.4;
    cursor: pointer;
  }
`


const StyledCircleIcon = styled(CircleOcticon)`
  ${iconStyles}
`

export const TaskIcons = ({task, removeTask, markComplete, undoRemove, undoComplete, toggleFavorite}) =>{
  return (
    <Row>
      <Column>
        <StyledCircleIcon
          mr={2}
          icon={Heart}
          size={20}
          bg={task.favorite ? 'white' : 'gray.2'} color={task.favorite ? 'red.8': 'red.2'}
          onClick={()=> toggleFavorite(task)}/>
      </Column>


        {!task.archived ?
          (<Column>
              {!task.complete?

          <StyledCircleIcon
            onClick={()=> markComplete(task.id)}
            size={20}
            icon={Check}
            bg={'gray.2'}
            color={'green.6'} /> :
          <StyledCircleIcon
            onClick={()=> undoComplete(task.id)}
            size={20}
            icon={Reply}
            bg={'gray.2'}
            color={'orange.6'}/> } </Column>) : null
        }
      <Column>
        {task.archived ?
          <StyledCircleIcon
            onClick={()=> undoRemove(task.id)}
            icon={Reply}
            mr={2}
            size={20}
            bg={'gray.2'}
            color={'orange.6'}/> :
          <StyledCircleIcon
            onClick={() => removeTask(task.id)}
            icon={X}
            mr={2}
            size={20}
            bg={'gray.2'}
            color={'red.6'}/>
        }
      </Column>
    </Row>
  )
}

export const Column = props => <Flex {...props} flexDirection={'column'} flexWrap={'wrap'} width={'100%'} />

export const Row = props => <Flex {...props} flexDirection={'row'} flexBasis={'100%'} flex={1}/>
