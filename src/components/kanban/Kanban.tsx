"use client"
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Droppable from './Droppable';
import { kanbanData } from '@/data/fakeData';

interface Props {
  id: string,
  title: string,
  description: string,
  state: string,
  priority: string,
  date: string,
  views: string
}

const Kanban = () => {
  const [todoItems, setTodoItems] = useState<Array<Props>>(kanbanData);
  const [doneItems, setDoneItems] = useState<Array<Props>>([]);
  const [inProgressItems, setInProgressItems] = useState<Array<Props>>([]);
  const [uItems, setuItems] = useState<Array<Props>>([]);
  const addNewCard = ({id, title, description, state, priority, date, views}: Props) => {
    setuItems([...uItems, { id, title, description, state, priority, date, views }]);
  };

  const handleDragEnd = (e: any) => {
    const container = e.over?.id;
    const id = e.active.data.current?.id ?? "";
    const title = e.active.data.current?.title ?? "";
    const index = e.active.data.current?.index ?? 0;
    const parent = e.active.data.current?.parent ?? "ToDo";
    const description = e.active.data.current?.description ?? "";
    const date = e.active.data.current?.date ?? "";
    const views = e.active.data.current?.views ?? "ToDo";
    const state = e.active.data.current?.views ?? "";
    const priority = e.active.data.current?.views ?? "";

    if (container === "ToDo") {
      setTodoItems([...todoItems, { id, title, description, state, priority, date, views }]);
    } else if (container === "Done") {
      setDoneItems([...doneItems, { id, title, description, state, priority, date, views }]);
    } else if (container === "Unassigned") {
      setuItems([...uItems, { id, title, description, state, priority, date, views }]);
    } else {
      setInProgressItems([...inProgressItems, { id, title, description, state, priority, date, views }]);
    }
    if (parent === "InProgress") {
      setTodoItems([
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1),
      ]);
    } else if (parent === "Done") {
      setDoneItems([
        ...doneItems.slice(0, index),
        ...doneItems.slice(index + 1),
      ]);
    } else if (parent === "Unassigned") {
      setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
    } else {
      setInProgressItems([
        ...inProgressItems.slice(0, index),
        ...inProgressItems.slice(index + 1),
      ]);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <Droppable id='ToDo' title='To Do' items={todoItems} />
        <Droppable id='InProgress' title='In Progress' items={inProgressItems} />
        <Droppable id='Done' title='Done' items={doneItems}/>
      </div>
    </DndContext>
  );
};

export default Kanban;