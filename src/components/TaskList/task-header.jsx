import { BorderBox, CounterLabel, UnderlineNav } from '@primer/components'
import React from 'react'

export default ({tabs, renderTabText, changeTab, selected, counts, tabToFilter}) =>{

  return (
    <UnderlineNav full justifyContent={'space-around'}>
        {tabs.map(tab=>(
          <UnderlineNav.Link
            style={{flex:1}}
            onClick={()=>changeTab(tab)}
            selected={selected === tab}
            key={tab}>
              {renderTabText(tab)}
              <CounterLabel
                scheme={selected === tab ? null:'gray'}>
                {counts[tabToFilter[tab]]}
              </CounterLabel>
          </UnderlineNav.Link>
        ))}
      </UnderlineNav>
  )
}