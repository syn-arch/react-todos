import React, { useState } from "react";
import swal from "sweetalert";

function Input(props) {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (input == "") {
      swal("Oops!", "Please enter a task", "error");
    }
  };

  return (
    <div className="flex justify-center w-full -mt-10">
      <div className="bg-white w-full md:w-1/2 p-5 shadow-lg">
        <p>New Todo :</p>
        <form
          action=""
          className="mt-3 flex justify-between flex-col md:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Do something.."
            className="border border-1 p-2 w-full mr-4 focus:outline-none"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 py-2 px-7 text-white hover:bg-blue-700 outline-none mt-3 md:mt-0"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
