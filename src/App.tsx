const App = () => {
  return (
    <div className="flex flex-col Parent gap-2">
      <div>Header</div>
      <div className=" flex subparent gap-1">
        <div>Main content</div>
        <div>sidebar</div>
      </div>
    </div>
  );
};

export default App;
