"use client"
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { Id, Task } from "@/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from '../cards/Card';
import Divider from '../UI/Divider';
import Avatar from '../UI/Avatar';
import Badge from '../UI/Badge';

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
  updateTitle: (id: Id, title: string) => void;
}

function TaskCard({ task, deleteTask, updateTask, updateTitle }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const [mouseIsOverTitle, setMouseIsOverTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode || editTitle,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  const toggleEditTitle = () => {
    setEditTitle((prev) => !prev);
    setMouseIsOverTitle(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
      />
    );
  }

  if (editMode || editTitle) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <Card>
            <div className="flex justify-between items-center mb-2">
                <Badge title={task.priority} />
                <span className='text-slate-400 text-xs'>
                    {task.date}
                </span>
            </div>

            <textarea 
                className='text-sm font-[600] bg-gray-200 w-full p-1'
                value={task.title}
                rows={1}
                autoFocus
                placeholder="Task title here"
                onBlur={toggleEditTitle}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && e.shiftKey) {
                    toggleEditTitle();
                    }
                }}
                onChange={(e) => updateTitle(task.id, e.target.value)}
            />
            <textarea
                className="mt-2 p-1 bg-gray-200 text-slate-600 text-xs w-full"
                value={task.content}
                autoFocus
                placeholder="Task content here"
                onBlur={toggleEditMode}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && e.shiftKey) {
                    toggleEditMode();
                    }
                }}
                onChange={(e) => updateTask(task.id, e.target.value)}
            />
        </Card>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      onMouseEnter={() => {
        setMouseIsOver(true);
        setMouseIsOverTitle(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
        setMouseIsOverTitle(false);
      }}
    >
        <Card>
            <div className="flex justify-between items-center mb-2">
                <Badge title={task.priority} />
                <span className='text-slate-400 text-xs'>
                    {task.date}
                </span>
            </div>

            <h4 className='text-sm font-[600] capitalize'>{task.title}</h4>
            <span className="text-slate-400 text-xs">{task.content}</span>

        {/* <Divider 
            color='bg-gradient-to-r from-transparent via-slate-600 to-transparent' 
            className='my-4' 
        />

        <div className="flex justify-between">
            <Avatar width='w-[30px]' height='h-[30px]' className={'rounded-full'} />
            <div className="flex items-center gap-5 text-slate-500">
                <div className='flex gap-1 items-center'>
                    <i className="iconly-Show"></i>
                    <span className='text-xs'>{'views'}</span>
                </div>
            
                <i className="iconly-Send"></i>
            </div>
        </div> */}

      {mouseIsOver || mouseIsOverTitle && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100"
        >
          <GoTrash />
        </button>
      )}
      </Card>
    </div>
  );
}

export default TaskCard;

// interface Props {
//     item?: any
//     title: string
//     date: string
//     badgeColor?: string
//     description: string
//     views?: string
//     priority: string
//     id: string
//     parent: string
// }

// const TaskCard = ({item, id, parent, title, date, description, views, priority}: Props) => {
//     const { attributes, listeners, setNodeRef, transform } = useDraggable({
//         id: title,
//         data: {
//           title, id, parent
//         },
//     });
//     const style = {
//         transform: CSS.Translate.toString(transform)
//     }

//     return (
//         <div style={style} {...listeners} {...attributes} ref={setNodeRef}>
//             <Card>
                // <div className="flex justify-between items-center mb-2">
                //     <Badge title={priority} />
                //     <span className='text-slate-400 text-xs'>
                //         {date}
                //     </span>
                // </div>
                // <h4 className='text-sm font-[600]'>{title}</h4>
                // <span className="text-slate-400 text-xs">{description}</span>

                // <Divider 
                //     color='bg-gradient-to-r from-transparent via-slate-600 to-transparent' 
                //     className='my-4' 
                // />

                // <div className="flex justify-between">
                //     <Avatar width='w-[30px]' height='h-[30px]' className={'rounded-full'} />
                //     <div className="flex items-center gap-5 text-slate-500">
                //         <div className='flex gap-1 items-center'>
                //             <i className="iconly-Show"></i>
                //             <span className='text-xs'>{views}</span>
                //         </div>
                    
                //         <i className="iconly-Send"></i>
                //     </div>
                // </div>


//             </Card>
//         </div>
//     );
// };

// export default TaskCard;