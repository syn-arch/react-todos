import React, { useState, useEffect } from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState("");
  const [editInput, setEditInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      swal("Oops!", "Please enter a task", "error", {
        buttons: false,
        timer: 1000,
      });
      return;
    }
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: input,
        status: "new",
      },
    ]);

    setInput("");
    swal("Success!", "Task added successfully", "success");
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!editId) {
      swal("Oops!", "Please choose a task", "error", {
        buttons: false,
        timer: 1000,
      });
      return;
    }
    if (!editInput) {
      swal("Oops!", "Please enter a task", "error", {
        buttons: false,
        timer: 1000,
      });
      return;
    }
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === editId) {
          return {
            ...todo,
            text: editInput,
          };
        }
        return todo;
      }),
    ]);
    swal("Success!", "Task updated successfully", "success");

    setEditInput("");
  };

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this task!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const taskRemove = todos.filter((task) => task.id !== id);
        setTodos(taskRemove);
        swal("Poof! Your task file has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          if (todo.status == "done") {
            todo.status = "new";
          } else {
            todo.status = "done";
          }
        }
        return todo;
      })
    );
  };

  const handleEdit = (id) => {
    setEditInput(todos.find((todo) => todo.id === id).text);
    setEditId(id);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="containers">
      <div className="h-48 w-full bg-blue-500 text-white flex justify-center items-center flex-col">
        <h1 className="text-3xl -mt-10">
          React <span className="font-bold">TODOS</span>
        </h1>
        <h2>
          {todos.length === 0
            ? "No tasks"
            : "You have " + todos.length + " tasks"}
        </h2>
      </div>
      <div className="flex justify-center w-full -mt-10">
        <div className="bg-white w-full md:w-1/2 p-5 shadow-lg">
          <p>New Todo :</p>
          <form
            action=""
            className="mt-3 flex justify-between flex-col md:flex-row"
            onSubmit={handleSubmit}
          >
            <input type="hidden" value={editId} />
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
      <div className="flex justify-center w-full">
        <div className="bg-white w-full md:w-1/2 p-5 border mt-7">
          <form
            action=""
            className="mt-3 flex justify-between flex-col md:flex-row"
            onSubmit={handleUpdate}
          >
            <div className="flex w-full">
              <label className="mr-5 mt-2 text-gray-500">Edit</label>
              <input
                type="text"
                placeholder="Edit Task"
                className="border border-1 p-2 w-full md:mr-4 focus:outline-none"
                value={editInput}
                onChange={(event) => setEditInput(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-blue-600 py-2 px-7 border border-blue-600 hover:text-white transition-colors hover:bg-blue-600 outline-none mt-3 md:mt-0"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      {todos.map((todo) => {
        return (
          <div className="flex justify-center w-full" key={todo.id}>
            <div className="bg-white w-full md:w-1/2 p-5 border border-t-0">
              <ul>
                <li key={todo.id}>
                  <div className="flex justify-between">
                    <div className="w-full flex">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onChange={() => {
                          handleDone(todo.id);
                        }}
                        checked={todo.status === "done"}
                      />
                      <p
                        className={`text-gray-700 md:ml-7 mt-3 md:mt-2 text-muted ${
                          todo.status == "done" ? "line-through" : ""
                        }`}
                      >
                        {todo.text}
                      </p>
                    </div>
                    <div className="flex">
                      <button
                        className="bg-blue-500 py-2 px-7 text-white hover:bg-blue-700 outline-none mt-3 md:mt-0"
                        onClick={() => {
                          handleEdit(todo.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="bg-red-500 py-2 px-7 text-white hover:bg-red-700 outline-none mt-3 md:mt-0"
                        onClick={() => {
                          handleDelete(todo.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}

      <div className="h-40"></div>
    </div>
  );
}

export default App;
