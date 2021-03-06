import React from 'react';

import { Column } from './Column';
import { Card } from './Card';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';

import { useAppState } from './AppStateContext';

const App = () => {

  const { state, dispatch } = useAppState()

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i}/>
      ))}
      <AddNewItem
        onAdd={text => dispatch({ type: "ADD_LIST", payload: text })}
        toggleButtonText="+ Add another list" />
    </AppContainer>
  )
}

export default App;
