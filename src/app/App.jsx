import Todo from "../components/Todo/Todo";

const App = () => {
  return (
    <div className="grid h-screen place-items-center p-4 bg-[#FFDDD2] font-body">
      <div className="rounded-lg p-4 shadow-lg bg-white w-[80%] lg:w-[50%]">
        <h1 className="font-bold text-center text-[1.44rem] mb-6 capitalize">
          Todo App using react-redux
        </h1>

        <Todo />
      </div>
    </div>
  );
};

export default App;
