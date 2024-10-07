const App = () => {
  return (
    <div className="Parent h-screen flex items-center justify-center text-white bg-slate-900">
      <div className=" rounded-lg p-4 m-2 text-center w-[150px] bg-white shadow-md">
        <h1 className="text-xl font-semibold mb-2 text-black">Hello</h1>
        <p className="mb-4 text-black">Hi, my name is Bishal Koirala.</p>
        <button className="bg-blue-500 text-white rounded px-4 py-2 transition duration-300 hover:bg-blue-600 shadow-md">
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
