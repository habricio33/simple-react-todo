import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate do react-router-dom para navegação entre páginas.
import Button from "./Button"; // Importa o componente Button.

function Tasks(props) {
    
    const navigate = useNavigate(); // Hook do react-router-dom para navegar entre páginas.

    function onSeeTaskClick(task) {
        const queryParams = new URLSearchParams();
        queryParams.set('title', task.title); // Adiciona o título da tarefa como parâmetro de consulta.
        queryParams.set('description', task.description); // Adiciona a descrição da tarefa como parâmetro de consulta.
        navigate(`/task?${queryParams.toString()}`); // Navega para a página de detalhes da tarefa, passando o título e a descrição como parâmetros de consulta.
    }

    return (
        <>
           <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map( (task) => (
            <li key={task.id} className="flex gap-2" >
              <button 
                onClick={() => props.onTaskClick(task.id)} 
                className={`bg-slate-400 text-left text-white p-2 w-full rounded-md ${task.isCompleted && "line-through" }` }>
                {task.title}
                {/* task.isCompleted ? <span className="text-green-500"> ✔️</span> : <span > </span> */ }
               </button>
              <Button onClick={() => {onSeeTaskClick(task)}} ><ChevronRightIcon /></Button>   
              <Button onClick={()=> props.onDeleteTaskClick(task.id)} ><TrashIcon /></Button>
            </li>
           ))}</ul> 
        </>
    )  
}

export default Tasks;