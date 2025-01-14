// Home.jsx
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { IoIosSearch } from "react-icons/io";
import Column from "../../components/Column";

const Home = () => {
  const [search, setSearch] = useState("");
  const [columns, setColumns] = useState([
    {
      id: "todo",
      title: "To Do",
      tasks: [
        { id: "1", description: "Complete the report" },
        { id: "2", description: "Fix the bugs" },
      ],
    },
    {
      id: "completed",
      title: "Completed",
      tasks: [{ id: "3", description: "Design the layout" }],
    },
    {
      id: "remaining",
      title: "Remaining",
      tasks: [{ id: "4", description: "Test the application" }],
    },
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const newColumns = [...columns];
    const sourceColumn = newColumns.find(
      (col) => col.id === source.droppableId
    );
    const destColumn = newColumns.find(
      (col) => col.id === destination.droppableId
    );

    if (!sourceColumn || !destColumn) return;

    const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
    destColumn.tasks.splice(destination.index, 0, movedTask);

    setColumns(newColumns);
  };

  const filteredColumns =
    search.length > 0
      ? columns.filter(
          (column) =>
            column.title.toLowerCase().includes(search.toLowerCase()) ||
            column.tasks.some((task) =>
              task.description.toLowerCase().includes(search.toLowerCase())
            )
        )
      : columns;

  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-100 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <div
            className="w-32 h-32 lg:w-40 lg:h-40 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Images/vritLogo.svg')" }}
          />
          <h1 className="text-3xl lg:text-4xl font-bold">Kanban Board</h1>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for column/task"
          />
          <button
            onClick={() => setSearch("")}
            className="p-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg"
          >
            <IoIosSearch className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredColumns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Home;
