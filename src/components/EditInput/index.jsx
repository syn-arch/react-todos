import React, { useState } from "react";
import swal from "sweetalert";

function EditInput(props) {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center w-full">
      <div className="bg-white w-full md:w-1/2 p-5 border mt-7">
        <form
          action=""
          className="mt-3 flex justify-between flex-col md:flex-row"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full">
            <label className="mr-5 mt-2 text-gray-500">Edit</label>
            <input
              type="text"
              placeholder="Do something.."
              className="border border-1 p-2 w-full md:mr-4 focus:outline-none"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-blue-600 py-2 px-7 border border-blue-600 hover:text-white transition-colors hover:bg-blue-600 outline-none mt-3 md:mt-0"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditInput;
