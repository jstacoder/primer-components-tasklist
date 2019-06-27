import React from 'react'
import styled from 'styled-components'

import { TextInputStyle } from './task-list'

const TodoAppTitle = styled.h1`
	position: absolute;
	top: -155px;
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
	text-rendering: optimizeLegibility;
`

const TodoAppInput = styled.input`
	&::input-placeholder{
		font-style: italic;
		font-weight: 300;
		color: #e6e6e6;
	}
`


const NewTodoInput = styled.input`
	${TextInputStyle}
	padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`



const TodoHeader = props =>{
    return (
        <header className='header'>
          <TodoAppTitle>Todos</TodoAppTitle>
          <NewTodoInput />
        </header>
    )
}

export default TodoHeader
