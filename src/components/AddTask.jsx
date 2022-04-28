import { useState } from "react";

const AddTask = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !title
      ? window.alert("Please add a title to your task!!")
      : handleAddTask({
          name: title,
          description: description,
          checked: false,
        });
    setTitle("");
    setDescription("");
  };

  return (
    <form action="post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">
          Your new task:
        </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="taskTitle" />

        <label htmlFor="taskDescription" className="form-label">
          Task description:
        </label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="taskDescription" />
      </div>
      <button type="submit" className="btn btn-primary">
        Add new task
      </button>
    </form>
  );
};

export default AddTask;
