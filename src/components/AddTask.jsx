import { useState } from 'react';
import  Input   from './Input'; 

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');  

    return (
        <>
         <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input 
                type="text" 
                placeholder="Título da tarefa"                   
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input 
                type="text" 
                placeholder="Descrição da tarefa"                 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="bg-slate-500 text-white p-2 rounded-md" 
                onClick={() => {
                    if(!title.trim() || !description.trim()) {
                        alert('Preencha todos os campos!');
                        return;
                    }
                    onAddTaskSubmit(title, description);
                    setTitle('');
                    setDescription('');
                }
            }>
                Adicionar Tarefa
            </button>

         </div>
        </>
    )
}

export default AddTask;