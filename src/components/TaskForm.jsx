import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prioridad, setPrioridad] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
      prioridad,
    });
    setTitle(""); //para limpiar los datos del formulario
    setDescription("");
    setPrioridad("");
  };

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
        <input
          placeholder='Escribe tu tarea'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='bg-slate-300 p-3 w-full mb-2'
          autoFocus
        />
        <textarea
          placeholder='escribe la descripción de la tarea'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2'
        ></textarea>
        <div className=' text-2xl font-bold text-center flex justify-evenly text-white'>
          <div
            className={
              prioridad === "urgente" ? "text-red-600 accent-red-500" : ""
            }
          >
            <input
              className='m-2 w-4 h-4 '
              name='prioridad'
              type='radio'
              onChange={(e) => setPrioridad("urgente")}
              checked={prioridad === "urgente"}
            />
            Urgente
          </div>
          <div
            className={
              prioridad === "no urgente"
                ? "text-green-500 accent-green-500"
                : ""
            }
          >
            <input
              className='m-2 w-4 h-4'
              name='prioridad'
              type='radio'
              onChange={(e) => setPrioridad("no urgente")}
              checked={prioridad === "no urgente"}
            />
            No urgente
          </div>
        </div>
        <div className='text-center mt-5'>
          <button className='bg-indigo-500 px-3 py-1 text-white'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
