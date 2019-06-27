import React from 'react'
import styled from 'styled-components'

import { TodoButtonStyle } from './task-list'
import FilterLink from './task-list-filter-link'

const TodoListFooter = styled.footer`
	color: #777;
	padding: 10px 15px;
	/* height: 20px; */
	text-align: center;
	border-top: 1px solid #e6e6e6;

	:before {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 50px;
		overflow: hidden;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
					0 8px 0 -3px #f6f6f6,
					0 9px 1px -3px rgba(0, 0, 0, 0.2),
					0 16px 0 -6px #f6f6f6,
					0 17px 2px -6px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 430px) {
		height: 50px;
	}
`

const TodoCount = styled.span`
	text-align: left;
    display: inline-flex;

	strong {
		font-weight: 300;
		margin-right: 5px;
	}
`


const Filters = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
    display: inline-flex;

	@media (max-width: 430px) {
		bottom: 10px;
	}
`

const FilterLi = styled.li`
    display: inline;
`

const ClearCompleted = styled.button`
	${TodoButtonStyle}
	float: right;
	position: relative;
	line-height: 20px;
	text-decoration: none;
	cursor: pointer;
    background-color: transparent;
	:hover {
		text-decoration: underline;
	}
`

const TodoFooter = props =>{
    

    return (
    <TodoListFooter>
         <TodoCount>
            <strong>{props.count}</strong>{' '}item left
         </TodoCount>
         <Filters>
           <FilterLi>
             <FilterLink>
                 All
             </FilterLink>
           </FilterLi>
           <FilterLi>
               <FilterLink>
                   Active
               </FilterLink>
           </FilterLi>
           <FilterLi>
               <FilterLink>
                   Completed
               </FilterLink>
           </FilterLi>
         </Filters>
         <ClearCompleted>
                Clear completed
        </ClearCompleted>       
    </TodoListFooter>
    )
}

export default TodoFooter
