import React, { useState, useEffect } from 'react'

export const TodoItem = (props,onDelete) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://3.6.93.159:7883/machstatz/get_all_users").then((result) => {
            result.json().then((resp) => {
                setUsers(resp)
            })
        })

    }, []);
    console.warn(users)

    return (
        <>
            <div class="container overflow-hidden">

                {
                    users.map((curElem) => {
                        return (
                            <div>

                                <div class="row gy-5">
                                    <div class="col-6">
                                        <div class="p-3 border bg-light">{curElem.fist_name}</div>
                                    </div>
                                    <span>
                                        <div class="col-6">
                                            <div class="p-3 border bg-light">{curElem.last_name}</div>
                                        </div>
                                    </span>
                                    <div class="col-6">
                                        <div class="p-3 border bg-light">{curElem.username}</div>
                                    </div>
                                    {/* <div class="col-6">
                                        <div class="p-3 border bg-light">{curElem.fist_name}</div>
                                    </div> */}

                                    <button className="btn btn-sm btn-danger" onClick={() => { onDelete(props.onDelete) }} >Delete</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </>

    )

}
            // <div>
            //     <p></p>     {/*<p>{todo.firstname} {todo.lastname}</p>*/}
            //     <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }} onClick={() => { onEdit(todo) }} >Delete</button>
            // </div>