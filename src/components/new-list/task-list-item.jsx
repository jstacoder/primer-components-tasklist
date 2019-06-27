import React from 'react'
import styled from 'styled-components'

import { TextInputStyle } from './task-list'

const TodoListLi = styled.li`
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;

	:last-child {
		border-bottom: none;
	}

	${props => props.editing && `	
		border-bottom: none;
		padding: 0;

		.edit {
			display: block;
			width: 506px;
			padding: 12px 16px;
			margin: 0 0 0 43px;
		}

		.view {
			display: none;
		}
		:last-child {
			margin-bottom: -1px;
		}		
	`}
	.edit {
		display: none;
	}
	:hover ${DestroyButton} {
		display: block;
	}
`


const TodoListLiLabel = styled.label`
	word-break: break-all;
	padding: 15px 15px 15px 60px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;

	${props => props.completed ? 'color: #d9d9d9;' : ''}
	${props => props.completed ? 'text-decoration: line-through;':''}
`

const DestroyButton = styled.button`
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
	transition: color 0.2s ease-out;

	:hover {
		color: #af5b5e;
	}

	:after {
		content: '×';
	}
`


const TodoListLiToggle = styled.input`
	text-align: center; 
	width: 40px;	
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	appearance: none;
	opacity: 0;

	+ label {
		background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
		background-repeat: no-repeat;
		background-position: center left;
	}

	:checked + label {
		background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
	}
`

const EditTodoInput = styled.input`
	${TextInputStyle}
	display: none;
`



export const TodoItem = props => {
    return (
        <TodoListLi editing={props.editing}>
            <div className="view">
                <TodoListLiToggle
                    type="checkbox"
                    checked={props.todo.completed}
                    onChange={props.onToggle}
                />
                <TodoListLiLabel completed={props.completed} onDoubleClick={props.handleEdit}>
                    {props.todo.text}
                </TodoListLiLabel>
                <DestroyButton onClick={props.onDestroy} />
            </div>
            <EditTodoInput
                ref={props.editRef}
                value={props.editText}
                onBlur={props.handleSubmit}
                onChange={props.handleChange}
                onKeyDown={props.handleKeyDown}
            />
        </TodoListLi>
    )
}

export default TodoItem
