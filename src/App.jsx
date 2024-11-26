import { tasks } from "./constants/tasks.js";

function App() {
  const currentTasks = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );
  const completedTasks = tasks.filter((task) => task.state === "completed");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ backgroundColor: "#a3ffe8", padding: "10px" }}>
        Task Manager
      </h1>
      <div>
        <h2>Current Tasks ({currentTasks.length})</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {currentTasks.map((task) => (
            <li key={task.id} style={{ marginBottom: "10px" }}>
              <strong>{task.title}</strong>{" "}
              <span className={`task__state ${task.state}`}>{task.state}</span>
              <p>Priority: {task.priority}</p>
              <p>Est. time: {task.estimatedTime} min</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Completed Tasks ({completedTasks.length})</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>  
          {completedTasks.map((task) => (
            <li key={task.id} style={{ marginBottom: "10px" }}>
              <strong>{task.title}</strong>{" "}
              <span className={`task__state ${task.state}`}>{task.state}</span>
              <p>Priority: {task.priority}</p>
              <p>Est. time: {task.estimatedTime} min</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
