import React, { useState } from 'react'
import Header from '../Common/Header'
import { TaskContext } from './TaskContext'
import Tasklist from './Tasklist/Tasklist'

const Homepage = () => {

    //overall taskboard of form 
    const [taskboard, setTaskboard] = useState(JSON.parse(localStorage.getItem("taskboard")) || [])

    //task list name
    const [tasklistname, setTasklistname] = useState('');

    //function to add new list on board
    const addtasklist = () => {
        if (tasklistname.length < 1) {
            alert('please type something..')
        }
        else {
            let temp = [...taskboard, { name: tasklistname, tasks: [], id: Math.floor(Math.random() * 100000) }]
            setTaskboard(temp)
            localStorage.setItem("taskboard", JSON.stringify(temp));
            setTasklistname('')
        }
    }

    //delete tasklist from board
    const deleteTasklist = (name) => {
        let temp = taskboard
        temp = temp.filter((list) => list.name !== name)
        setTaskboard(temp)
        localStorage.setItem("taskboard", JSON.stringify(temp));
    }

    return (
        <TaskContext.Provider value={{ taskboard, setTaskboard }}>
            <Header />
            { taskboard.length === 0 ?
                <h3 style={{ color: '#10558c' }} className='p-5 text-center my-5'>No tasks list created yet <br />Create new one</h3>
                :
                <div className="mx-lg-5 m-3">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {taskboard.map((taskObject) => {
                            return <Tasklist
                                key={taskObject.id}
                                n={taskObject.id}
                                tasklist={taskObject}
                                setTaskboard={setTaskboard}
                                deleteTasklist={deleteTasklist}
                            />
                        })}
                    </div>
                </div>}
            <div style={{}}>
                <button className="btn p-0" style={{ backgroundColor: '#10558c', borderRadius: 30, position: 'fixed', width: 60, height: 60, right: 40, bottom: 40 }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fa fa-plus fa-align-center text-white pt-1" style={{ fontSize: 30 }}></i>
                </button>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* <div className="modal-body"> */}
                        <div className="row no-gutters p-1 m-2" style={{ color: '#10558c' }}>
                            <input typr='text' className='col-10 border border-0 border-outline-primary' placeholder='New List' value={tasklistname} onChange={(e) => { setTasklistname(e.target.value) }}></input>
                            <i className="fa fa-plus-circle col-1" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: 45 }} onClick={() => { addtasklist() }}></i>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </TaskContext.Provider>
    )
}

export default Homepage