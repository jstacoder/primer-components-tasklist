import React from 'react'
import styled from 'styled-components'

const BaseFilterLink = styled.a`
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;

    ${props => props.hovered && `
        border-color: rgba(175, 47, 47, 0.1);
    `}

    ${props => props.selected && `
        border-color: rgba(175, 47, 47, 0.2);
    `}
`

const FilterLink = props =>{
    const [hovered, setHovered] = React.useState(false)
    const [selected, setSelected] = React.useState(false)

    const onMouseOver = () =>{
        setHovered(true)
    }    

    const onMouseOut = () =>{
        setHovered(false)
    }

    const onClick = () =>{
        if(selected){
            setSelected(false)
        }else{
            setSelected(true)
        }
    }

    return <BaseFilterLink 
                {...props} 
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                onClick={onClick}
                selected={selected}
                hovered={hovered} 
            />
}
