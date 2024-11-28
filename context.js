import{createContext, useContext} from "react"

export const todocontext= createContext({
    todos:[
        { 
            id:1,
            todo:"todo message",
            complete: false,

        }
    ],
    addtodo:(todo)=>{},
    deletetodo:(id)=>{},
    updatetodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
})

export const usetodo=()=>{
    return useContext(todocontext)
}

export const Todoprovider= todocontext.Provider