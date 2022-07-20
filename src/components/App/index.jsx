import React from "react";
import Input from "../Input";
import EditInput from "../EditInput";
import ListItem from "../ListItem";

function App() {
  return (
    <>
      <div className="h-48 w-full bg-blue-500 text-white flex justify-center items-center">
        <h1 className="text-3xl -mt-10">React TODOS</h1>
      </div>
      <Input />
      <EditInput />
      <ListItem />
    </>
  );
}

export default App;
