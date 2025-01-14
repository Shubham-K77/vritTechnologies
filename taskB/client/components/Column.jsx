/* eslint-disable react/prop-types */
// Column.jsx
import { Droppable } from "react-beautiful-dnd";
import Task from "../components/Tasks";

const Column = ({ column }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-4">
        <h2 className="text-xl font-bold text-center text-white">
          {column.title}
        </h2>
      </div>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-4 min-h-[200px]"
          >
            {column.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
