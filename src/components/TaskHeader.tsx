import React from 'react';
import DotBadge from './DotBadge';
import { FiMoreHorizontal } from 'react-icons/fi';
import clsx from 'clsx';
import { GoTrash } from 'react-icons/go';

interface Props {
    color?: string
    column?: any
    onClick?: any
    editMode?: boolean
    attributes: any
    listeners: any
    onChange: any
    onBlur: any
    onKeyDown: any
    deleteColumn: any
}

const TaskHeader: React.FC<Props> = (
    {column, onClick, editMode, attributes, listeners, onChange, onBlur, onKeyDown, deleteColumn}
    ) => {
    return (
        <div
            {...attributes}
            {...listeners} 
            className="flex justify-between items-center bg-white py-4 px-10 rounded-md"
            onClick={onClick}
        >
            <DotBadge className={clsx({
                'text-red-500': column.title === "Todo",
                'text-orange-400': column.title === "In Progress",
                'text-afrogreen': column.title === "Done",
            })}  />
          {!editMode && <span className='uppercase tracking-[.5em] text-sm'>{column.title}</span>}
          {editMode && (
            <input
              className="bg-slate-400 uppercase tracking-[.5em focus:border-rose-500 border rounded outline-none px-2"
              value={column.title}
              onChange={onChange}
              autoFocus
              onBlur={onBlur}
              onKeyDown={onKeyDown}
            />
          )}
            <button
            onClick={deleteColumn}
            className="
            stroke-gray-500
            hover:stroke-white
            hover:bg-columnBackgroundColor
            rounded
            px-1
            py-2
            "
            >
            <GoTrash />
            </button>
        </div>
    );
};

export default TaskHeader;