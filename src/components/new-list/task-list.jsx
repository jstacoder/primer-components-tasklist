import React from 'react'
import { Box } from '@primer/components'
import styled, { createGlobalStyle, css } from 'styled-components'

import TodoFooter from './task-list-footer'
import TodoHeader from './task-list-header'
import TodoBody from './task-list-body'



const Style = createGlobalStyle`
html,
body {
	margin: 0;
	padding: 0;
}

body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	color: #4d4d4d;		
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}

:focus {
	outline: 0;
}
`


const TodoApp = styled.section`
	background: #fff;
	margin: 130px 0 40px 0;
	position: relative;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

export const TextInputStyle = css`
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	border: 0;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

export const TodoButtonStyle = css`
	margin: 0;
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	appearance: none;

`

const InfoFooter = styled.footer`
	margin: 65px auto 0;
	color: #bfbfbf;
	font-size: 10px;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	text-align: center;

	p {
		line-height: 1;
	}

	a {
		color: inherit;
		text-decoration: none;
		font-weight: 400;
		
		:hover {
			text-decoration: underline;
		}
	}
`



const TodoList = (props) => {
    
    return (
    <Box p={5}>
      <TodoApp>
        <Box>
           <Style/>
           <TodoHeader />
           <TodoBody />
           <TodoFooter />
        </Box>
      </TodoApp>
      <InfoFooter />
    </Box>
    )
  }
  
export default TodoList
