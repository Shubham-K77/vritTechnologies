/* eslint-disable react/prop-types */
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`
            p-4 mb-4 rounded-lg shadow-lg
            ${snapshot.isDragging ? "bg-blue-600" : "bg-gray-700"}
            transform transition-all duration-200
            ${snapshot.isDragging ? "scale-105" : "scale-100"}
          `}
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Task - {task.id}</h3>
            <p className="text-gray-300">{task.description}</p>
            <div className="flex justify-end">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-gray-600"
                style={{
                  backgroundImage: `url('/Images/avatar3.webp')`,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
