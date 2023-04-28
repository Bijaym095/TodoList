import Todo from "../components/Todo/Todo";

const App = () => {
  return (
    <div className="grid h-screen place-items-center p-4">
      <div className="border border-black p-4 shadow-lg">
        <h1 className="font-bold text-center mb-4 capitalize text-[20px]">
          Todo App using react-redux
        </h1>

        <Todo />
      </div>
    </div>
  );
};

export default App;
