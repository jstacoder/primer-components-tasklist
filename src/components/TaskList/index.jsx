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
  ChevronRight,
  Pencil,
} from '@primer/octicons-react'
import styled, { css } from 'styled-components'
import { Row, TaskIcons } from './task-icons'
import useTasks from './hooks'
import TaskHeader from './task-header'
import TaskTitle from './task-title'
import TaskInput from './task-input'

const TaskText = styled(Text)`
  margin-bottom: 10px;
  ${props=> props.task.complete && 'text-decoration: line-through;'}
`

const iconStyle = css`
  &:hover{
    background-color: #222222;
    opacity: 0.4;
    cursor: pointer;
  }
`


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
      <TaskHeader
        changeTab={changeTab}
        counts={counts}
        renderTabText={renderTabText}
        selected={selected}
        tabs={tabs}
        tabToFilter={tabToFilter}/>
      <TaskTitle
        selected={selected}
        tasks={tasks}
        renderTabTitle={renderTabTitle}/>
      <TaskInput onSubmit={onSubmit} onTextChange={onTextChange} textInput={textInput}/>
       <Flex flexDirection={'column'}>
        {tasks.map(task=>(
          <BorderBox border={0} borderTop={1} borderRadius={0} key={task.id} px={2} pb={0} pt={4}>
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