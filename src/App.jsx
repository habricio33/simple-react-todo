import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
import { useEffect, useState } from "react";
import { v4 } from 'uuid';  

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [] // Pega as tarefas do localStorage ou um array vazio
  );

  // a função inserida dentro do useEffect é executada sempre que o valor de tasks mudar
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Salva as tarefas no localStorage  
}, [tasks]); 

// useEffect com chamada a api
// useEffect(() => {
//   const fetchTasks = async () => {
//     // Faz uma requisição para a API e pega as tarefas
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
//       method: 'GET'  
//     });     
//     // retorna os dados da API
//     const data = await response.json(); 

//     // adiciona os dados retornados no estado tasks
//     setTasks(data);

//   }   
//   fetchTasks();

// }, []);

 function onTaskClick(Taskid) {

   const newTasks = tasks.map((task) => {

    if(task.id === Taskid){
      return { ...task, isCompleted: !task.isCompleted}
    } 
    // OU task.id === id ? { ...task, isCompleted: !task.isCompleted } : task

    return task;
   });

    setTasks(newTasks);

  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId); //Mantém apenas os que forem diferentes (ou seja, remove o que tem o id igual ao taskId).
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(), // Gera um id aleatório
      title: title,
      description: description,
      isCompleted: false
    }
     // Adiciona a nova tarefa ao array de tarefas
    setTasks([...tasks, newTask]);
  }

  return ( 
    <>
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
       <div className="w-[500px] space-y-4">
          <Title>Gerenciador de Tarefas</Title>
          <AddTask onAddTaskSubmit={onAddTaskSubmit} /> 
          <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} /> {/* props={variavel} ou prop={função}  */}
       </div>
    </div>
      
    </>
  )
}

export default App
