import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import TaskHeader from '../TaskHeader';
import TaskCard from './TaskCard';

interface Props {
    title?: string
    items?: any
    id: string
}


const Droppable = ({title, items, id}: Props) => {

  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });

//   const style = {
//     color: isOver ? 'green' : undefined,
//   };
  
  
  return (
    <div ref={setNodeRef} >
        <div className="flex flex-col gap-2">
            <TaskHeader color='text-red-500' title={title} />
            {items.map((item: any) => (
                <TaskCard
                    key={item.id}
                    id={item.id}
                    title={item.title} 
                    description={item.description}
                    date={item.date}
                    priority='High'
                    parent={id}
                />
            ))}
            
        </div>
    </div>
  );
}


export default Droppable;