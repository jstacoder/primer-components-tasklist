import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Box } from '@primer/components'
import * as classNames from 'classnames'
import TodoItem from './task-list-item'
import styled, { css } from 'styled-components'


const EditTodoInput = styled.input`
	${TextInputStyle}
`






const TodoAppInput = styled.input`
	&::input-placeholder{
		font-style: italic;
		font-weight: 300;
		color: #e6e6e6;
	}
`


const Index = (props) => {
    
  return (
   <Box p={5}>
   <section className={'todoapp'}>
    <div>
      <Style/>
      <header className='header'>
        <h1>Todos</h1>
        <input className="new-todo"/>
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"
               style={{display: 'block' }}/>
          <label for='toggle-all'></label>
        <ul className="todo-list">
          <TodoItem todo={{completed: true, text: 'yoyoyoy'}}/>
        </ul>
      </section>
    </div>
   </section>
     <footer className="footer" style={{display: 'block'}}>
       <span style={{display: 'inline-flex'}} className="todo-count"><strong>1</strong>{' '}item left</span>
       <ul className="filters" style={{display: 'inline-flex'}}>
         <li>
           <a className="selected" href="#">All</a>
         </li>
         <li>
           <a href="#">Active</a>
         </li>
         <li>
           <a href="#">Completed</a>
         </li>
       </ul>
       <button className="clear-completed" style={{display: 'none'}}>Clear completed</button>
     </footer>
   </Box>
  )
}

export const Wrapper = ({children, ...props}) => <div style={{minWidth: 'unset'}}>{children}</div>

export default Index
