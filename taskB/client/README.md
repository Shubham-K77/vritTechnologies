## 🌟 Features

- Drag and drop tasks between columns
- Real-time search functionality
- Responsive design for all devices
- Customizable task cards with avatars
- Smooth animations and transitions

## 🚀 Quick Start

### Prerequisites

```bash
node.js >= 14.0.0
npm >= 6.14.0
```

### Installation

1. Clone the repository

```bash
git clone https://github.com/Shubham-K77/vritTechnologies.git
```

2. Install dependencies

```bash
package.json List of All Packages
npm install
```

3. Start the development server

```bash
npm run dev
```

## 🔧 Core Components

### 1. Home Component (`Home.jsx`)

- Main container for the Kanban board
- Manages state and search functionality
- Handles drag and drop logic

### 2. Column Component (`Column.jsx`)

- Represents individual columns (e.g., "To Do", "In Progress", "Done")
- Contains droppable area for tasks

### 3. Task Component (`Task.jsx`)

- Individual task cards that can be dragged
- Displays task information and avatar

## 💡 How It Works

### State Management

```javascript
const [columns, setColumns] = useState([
  {
    id: "todo",
    title: "To Do",
    tasks: [{ id: "1", description: "Task description" }],
  },
]);
```

### Drag and Drop Flow

1. User initiates drag on a task
2. Task can be moved to any column
3. `onDragEnd` function updates state:
   - Removes task from source column
   - Adds task to destination column
   - Updates UI automatically

### Search Functionality

- Filter tasks and columns in real-time
- Matches against both column titles and task descriptions
- Case-insensitive search

### Styling

- Built with Tailwind CSS
- Easy to customize colors and layouts
- Responsive design breakpoints

## 📚 Core Concepts

### 1. DragDropContext

- Wraps the entire board
- Manages drag and drop state
- Handles drag end events

### 2. Droppable Areas

- Columns where tasks can be dropped
- Unique IDs for each column
- Visual feedback during drag

### 3. Draggable Items

- Individual task cards
- Unique IDs and indices
- Animation and styling during drag

## Video Demo

[Click here to watch the demo video](../../taskB/demoTaskB.mp4)
