import React from 'react'
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';
import { Card } from './Card';

interface ColumnProps {
    text: string;
    index: number;
    id: string;
}

export const Column = ({ text, index, id }: React.PropsWithChildren<ColumnProps>) => {

    const { state, dispatch } = useAppState();

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map(task => (
                <Card text={task.text} key={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={text => dispatch({ type: "ADD_TASK", payload: { listId: id, text } })}
                dark
            />
        </ColumnContainer>
    )
}

