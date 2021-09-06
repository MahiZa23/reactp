import React from 'react'
import { TodoItem } from "./TodoItem";      //  (../MyComponents/TodoItem")

export const Todos = (props) => {
  return (
    <div className="container my-3">
      <h3 className="my-3">Reference Snapshots</h3>
      {props.todos.length===0? "No todos to display" : 
      props.todos.map((todo, onDelete) => {
        return (<TodoItem key={props.sno} onDelete={props.onDelete}/>
        )
        })
      }
    </div>
  )
}
