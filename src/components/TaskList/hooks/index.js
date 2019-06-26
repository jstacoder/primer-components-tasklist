import React from 'react'
import uuid from 'uuid/v4'

const applyFilter = (tasks, filter) =>{
  return {
    COMPLETE:   tasks => tasks.filter(task => !task.archived && !!task.complete),
    INCOMPLETE: tasks => tasks.filter(task => !task.archived && !task.complete),
    ARCHIVED:   tasks => tasks.filter(task => !!task.archived),
    FAVORITE:   tasks => tasks.filter(task => !!task.favorite),
    ALL:        tasks => tasks,
  }[filter](tasks)
}

const getCounts = tasks =>{
  const filters = ['COMPLETE', 'INCOMPLETE', 'ARCHIVED', 'ALL', 'FAVORITE']
  const rtn = {}

  filters.forEach(filter=> rtn[filter] = applyFilter(tasks, filter).length)

  return rtn
}

const useTasks = () =>{
  const initialState = []

  const ADD_TASK = 'ADD_TASK'

  const MARK_COMPLETE = 'MARK_COMPLETE'

  const UNDO_COMPLETE = 'UNDO_COMPLETE'

  const MARK_FAVORITE = 'MARK_FAVORITE'

  const UNDO_FAVORITE = 'UNDO_FAVORITE'

  const REMOVE_TASK = 'REMOVE_TASK'

  const UNDO_REMOVE = 'UNDO_REMOVE'

  const reducer = (state = initialState, {type, value} = {})=>{
    return {
      [ADD_TASK]:      task   => [...state, {...task, favorite: false, id: uuid(), complete: false, archived: false}],
      [MARK_COMPLETE]: taskId => state.map(task => task.id !== taskId ? task : {...task, complete: true}),
      [REMOVE_TASK]:   taskId => state.map(task =>task.id !== taskId ? task : {...task, archived: true}),
      [UNDO_COMPLETE]: taskId => state.map(task => task.id !== taskId ? task : {...task, complete: false}),
      [UNDO_REMOVE]:   taskId => state.map(task => task.id !== taskId ? task : {...task, archived: false}),
      [MARK_FAVORITE]: taskId => state.map(task => task.id !== taskId ? task : {...task, favorite: true}),
      [UNDO_FAVORITE]: taskId => state.map(task => task.id !== taskId ? task : {...task, favorite: false}),
    }[type](value)
  }

  const [filter, changeFilter] = React.useState('INCOMPLETE')


  const [tasks, dispatch] = React.useReducer(reducer, initialState)

  const [filteredTasks, setFilteredTasks] = React.useState(tasks)

  const counts = getCounts(tasks)

  const addTask = task => dispatch({type: ADD_TASK, value: task})

  const markComplete = taskId => dispatch({type: MARK_COMPLETE, value: taskId})

  const removeTask = taskId => dispatch({type: REMOVE_TASK, value: taskId})

  const undoComplete = taskId => dispatch({type: UNDO_COMPLETE, value: taskId})

  const undoRemove = taskId => dispatch({type: UNDO_REMOVE, value: taskId})

  const markFavorite = taskId => dispatch({type: MARK_FAVORITE, value: taskId})

  const undoFavorite = taskId => dispatch({type: UNDO_FAVORITE, value: taskId})

  const toggleFavorite = task => (task.favorite ? undoFavorite : markFavorite)(task.id)

  React.useEffect(()=>{
      const newFilteredTasks = applyFilter(tasks,filter)
      setFilteredTasks(newFilteredTasks)
  }, [filter, tasks])



  return {
    tasks: filteredTasks,
    addTask,
    removeTask,
    markComplete,
    undoComplete,
    undoRemove,
    toggleFavorite,
    changeFilter,
    counts,
  }
}

export default useTasks