import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { GoTrash, GoPlus } from "react-icons/go";
import { Column, Id, Task } from "@/types";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import TaskHeader from "../TaskHeader";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  updateTitle: (id: Id, title: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
  updateTitle
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      bg-columnBackgroundColor
      opacity-40
      border-2
      border-pink-500
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
w-[350px]
  h-[500px]
  max-h-[500px]
  rounded-md
  flex
  flex-col
  "
    >
      {/* Column title */}
      <TaskHeader 
        attributes={attributes}
        listeners={listeners}
        column={column}
        onClick={() => {
            setEditMode(true);
        }}
        editMode={editMode}
        onChange={(e: any) => updateColumn(column.id, e.target.value)}
        onBlur={() => {
            setEditMode(false);
          }}
        onKeyDown={(e: any) => {
            if (e.key !== "Enter") return;
            setEditMode(false);
          }}
        deleteColumn={() => {
            createTask(column.id);
          }}
      />

      {/* Column task container */}
      <div className="flex flex-grow flex-col gap-4 py-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
              updateTitle={updateTitle}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      <button
        className="flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4 border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <GoPlus />
        Add task
      </button>
    </div>
  );
}

export default ColumnContainer;