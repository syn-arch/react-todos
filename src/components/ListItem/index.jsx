import React, { useState } from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListItem(props) {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-white w-full md:w-1/2 p-5 border border-t-0">
        <ul>
          <li>
            <div className="flex justify-between">
              <div className="w-full flex">
                <input type="checkbox" className="mr-2" />
                <p className="text-gray-700 md:ml-7 text-muted">Do Something</p>
              </div>
              <div className="flex">
                <button className="text-blue-600 text-xl mr-4">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="text-blue-600 text-xl">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListItem;
