import PropTypes from "prop-types";

import { FaTrash, FaEdit } from "react-icons/fa";

const TodoList = ({ lists, onDelete, onEdit, isEditing }) => {
  return (
    <ul className="space-y-4 max-h-[300px] overflow-y-scroll">
      {lists.map((list, index) => (
        <li
          className=" py-2 bg-slate-200 flex justify-between items-center capitalize"
          key={index}
        >
          {list}

          <div className="space-x-4">
            <button
              className="text-blue-400"
              onClick={() => onEdit(list, index)}
            >
              <FaEdit />
            </button>

            <button
              disabled={isEditing}
              className="text-red-400 disabled:text-red-300 disabled:cursor-not-allowed"
              onClick={() => onDelete(index)}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  lists: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  isEditing: PropTypes.bool,
};

export default TodoList;
