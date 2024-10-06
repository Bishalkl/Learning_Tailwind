const App = () => {
  return (
    <div className="flex flex-col Parent gap-2">
      <div className="bg-z">Header</div>
      <div className=" flex subparent gap-2">
        <div className="basis-3/4 bg-cyan-50">Main content</div>
        <div className="basis-1/4 bg-cyan-600">sidebar</div>
      </div>
    </div>
  );
};

export default App;
