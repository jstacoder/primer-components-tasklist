import React from 'react'
import styled from 'styled-components'


const BaseFilterLink = styled.span`
    z-index: 1000000;
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;

    ${props => props.hovered && `
        border-color: rgba(175, 47, 47, 0.1);
    `}
    
    &:hover {
       border-color: rgba(175, 47, 47, 0.3);
    }

    ${props => props.selected && `
        border-color: rgba(175, 47, 47, 0.5);
    `}
`

const FilterLink = props =>{


    const onClick = () =>{
        console.log('clicked')
        if(props.selected){
            props.setSelected(false)
        }else{
            props.setSelected(true)
        }
    }

    return <BaseFilterLink
                {...props}
                onClick={onClick}
                selected={props.selected}
            />
}

export default FilterLink