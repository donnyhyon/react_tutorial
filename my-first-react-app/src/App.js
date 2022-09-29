import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <Todo text="build a killer app" />
      <Todo text="sell it for millions" />
    </div>
  );
}

export default App;
