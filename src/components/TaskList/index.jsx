import React from 'react'
import {
  BorderBox,
  Box,
  Flex,
  Text,
  Heading,
  StyledOcticon,
  TextInput,
  CircleOcticon,
  UnderlineNav,
  CounterLabel,
} from '@primer/components'

import {
  Heart,
  X,
  Plus,
  Check,
  Flame,
  ChevronRight,
  KebabVertical,
  Pencil,
  Reply,
} from '@primer/octicons-react'
import styled, { css } from 'styled-components'

import useTasks from './hooks'


const TaskText = styled(Text)`
  margin-bottom: 10px;
  ${props=> props.task.complete && 'text-decoration: line-through;'}
`

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

const TaskIcons = ({task, removeTask, markComplete, undoRemove, undoComplete, toggleFavorite}) =>{
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

const Column = props => <Flex {...props} flexDirection={'column'} flexWrap={'wrap'} width={'100%'} />

const Row = props => <Flex {...props} flexDirection={'row'} flexBasis={'100%'} flex={1}/>

const iconStyle = {

}

const renderTabText = (tab, tasks) => (
  `${tab}${(tab !== 'Archived' && tab !== 'Completed' && tab !== 'All') ? ((tasks && tasks.length !== 1 || !tasks) ? 's': '') : ''}`
)

const renderTabTitle = (tab, tasks) =>(
  `${tasks.length} ${renderTabText(tab, tasks)}`
)

const TaskList = props =>{
  const {
    tasks,
    addTask,
    removeTask,
    markComplete,
    undoComplete,
    undoRemove,
    toggleFavorite,
    counts,
    changeFilter,
  } = useTasks()

  const tabs = ['Task', 'Favorite', 'Archived', 'Completed', 'All']
  const tabToFilter = {
    Task: 'INCOMPLETE',
    Favorite: 'FAVORITE',
    Archived: 'ARCHIVED',
    Completed: 'COMPLETE',
    All: 'ALL',
  }

  const [selected, setSelected] = React.useState(tabs[0])

  const [textInput, setInput] = React.useState('')
  const onSubmit = e =>{
    e.preventDefault()
    addTask({text: textInput})
    setInput('')
  }
  const onTextChange = e =>{
    setInput(e.target.value)
  }

  const changeTab = tab => {
    changeFilter(tabToFilter[tab])
    setSelected(tab)
  }

  return (
    <BorderBox borderColor={'gray.2'} border={1} pt={3} m={5}>
      <UnderlineNav full justifyContent={'space-around'}>
        {tabs.map(tab=>(
          <UnderlineNav.Link style={{flex:1}} onClick={()=>changeTab(tab)} selected={selected === tab} key={tab}>
            {renderTabText(tab)} <CounterLabel scheme={selected === tab ? null:'gray'}>{counts[tabToFilter[tab]]}</CounterLabel>
          </UnderlineNav.Link>
        ))}
      </UnderlineNav>
      <BorderBox border={0} borderBottom={1} mb={3}>
        <Heading textAlign={'center'} m={2}>
          {renderTabTitle(selected, tasks)}
        </Heading>
      </BorderBox>
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
       <Flex flexDirection={'column'}>
        {tasks.map(task=>(
          <BorderBox border={0} borderTop={1  } borderRadius={0} key={task.id} px={2} pb={0} pt={4}>
            <Row>
              <Flex.Item flex={4}  style={iconStyle}>
                <StyledOcticon icon={ChevronRight} size={20}/>
              </Flex.Item>
              <Flex.Item flex={30}>
                <TaskText task={task} fontSize={20} color={task.complete ? 'gray.3' : 'gray.7'} as={'p'}>
              {task.text}
                </TaskText>
              </Flex.Item>
              <Flex.Item flex={5}>
                <TaskIcons toggleFavorite={toggleFavorite} task={task} undoRemove={undoRemove} undoComplete={undoComplete} removeTask={removeTask} markComplete={markComplete}/>
              </Flex.Item>
            </Row>
          </BorderBox>
        ))}
      </Flex>
    </BorderBox>
  )
}

export default TaskList