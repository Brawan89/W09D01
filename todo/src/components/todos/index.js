import React, { useEffect, useState } from "react";
import axios from "axios";

const Todos = ({ clearToken, token }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [update, setUpdate] = useState("");


  useEffect(() => {
    getAllTasks();
  }, []);

  const logout = () => {
    localStorage.clear();
    clearToken("");
  };

  //get all tasks
  const getAllTasks = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/allTasks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(result);
      setTasks(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // add new task
  const addNewTask = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/createTask`,
        {
          name: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    getAllTasks(token);
  };

  // edit task
  const updateTask = async (id) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/updateTask/${id}`,
        {
          name: update,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getAllTasks(token);
    } catch (error) {
      console.log(error);
    }
  };

  // delete task by id
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/deltask/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllTasks(token);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div>
        <button onClick={logout}>logout</button>
      </div>
      <hr />
      <br />
      <div>
        <input
          onChange={(e) => setTask(e.target.value)}
          placeholder="add Tasks"
        />
        <button className="addBtn" onClick={addNewTask}>
          Add New Task
        </button>
      </div>
      <div>
        {tasks.length &&
          tasks.map((item) => (
            <>
              <h2 key={item._id}>{item.name}</h2>
              <button onClick={() => updateTask(item._id)}>Update</button>
              <button onClick={() => deleteTask(item._id)}>Delete</button>
            </>
          ))}
      </div>
      <br />
    </>
  );
};

export default Todos;
