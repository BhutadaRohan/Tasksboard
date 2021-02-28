import React, { useState } from 'react'
import Task from './Task'
import moment from 'moment'
import DatePicker from 'react-date-picker'

const Tasklist = (props) => {

    // const tasklist = props.tasklist
    //tasklist 
    const [tasklist, setTasklist] = useState(props.tasklist)
    const [tasklistname, setTasklistname] = useState(props.tasklist.name)

    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [date, setDate] = useState(new Date())

    //delete task from list
    const deleteTask = (t) => {
        let temp = JSON.parse(localStorage.getItem("taskboard"))
        for (var i in temp) {
            if (temp[i].id === tasklist.id) {
                temp[i].tasks = temp[i].tasks.filter(task => task.name !== t.name);
                setTasklist(temp[i])
                break; //Stop this loop, we found it!
            }
        }
        localStorage.setItem("taskboard", JSON.stringify(temp));
    }

    //add task to the list
    const addtask = () => {
        if (name < 1) {
            alert('please type something..')
        } else {
            let temp = JSON.parse(localStorage.getItem("taskboard"))
            for (var i in temp) {
                if (temp[i].id === tasklist.id) {
                    temp[i].tasks[temp[i].tasks.length] = {
                        name: name,
                        details: details,
                        date: date,
                        completed: false
                    };
                    setTasklist(temp[i])
                    break; //Stop this loop, we found it!
                }
            }
            localStorage.setItem("taskboard", JSON.stringify(temp));
            setName('')
            setDate(new Date())
            setDetails('')
        }

    }

    //move task from onelist to other
    // const moveTo = (obj) => {
    //     alert(JSON.stringify(obj))
    //     let temp = JSON.parse(localStorage.getItem("taskboard"))
    //     for (var i in temp) {
    //         alert(temp[i].id, obj.task)
    //         if (temp[i].id === obj.newID) {
    //             temp[i].tasks[temp[i].tasks.length] = obj.task
    //             break; //Stop this loop, we found it!
    //         }
    //     }
    //     localStorage.setItem("taskboard", JSON.stringify(temp));

    // for (var j in temp) {
    //     if (temp[j].id === obj.oldID) {
    //         temp[j].tasks = temp[j].tasks.filter(t => t.name !== obj.task.name);
    //         setTasklist(temp[j])
    //         break; //Stop this loop, we found it!
    //     }
    // }
    // localStorage.setItem("taskboard", JSON.stringify(temp));


    //     props.setTaskboard(temp)

    // }

    //rename function for tasklist
    const saveTaskListname = () => {
        if (tasklistname === '') {
            alert('list must have name to identify')
            setTasklistname(tasklist.name)
        } else {
            let temp = JSON.parse(localStorage.getItem("taskboard"))
            for (var i in temp) {
                if (temp[i].id === tasklist.id) {
                    temp[i].name = tasklistname
                    setTasklist(temp[i])
                    break; //Stop this loop, we found it!
                }
            }
            localStorage.setItem("taskboard", JSON.stringify(temp));
        }

    }

    //mark completed function
    const markCompleted = (completedTask) => {
        let temp = JSON.parse(localStorage.getItem("taskboard"))
        for (var i in temp) {
            if (temp[i].id === tasklist.id) {
                let index = temp[i].tasks.findIndex((t => t.name === completedTask.name))
                temp[i].tasks[index]['completed'] = true
                setTasklist(temp[i])
                break; //Stop this loop, we found it!
            }
        }
        props.setTaskboard(temp)
        localStorage.setItem("taskboard", JSON.stringify(temp));
    }


    return (
        <>
            <div className="col">
                <div className="card px-2" style={{ borderColor: '#10558c', color: '#10558c' }}>
                    <div className="card-header bg-white border-bottom-0">
                        <h4 className='d-inline fw-normal'>{tasklist.name}</h4>
                        <i className="fa fa-ellipsis-v float-end p-1 fs-5" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        <ul className="dropdown-menu">
                            <li className='dropdown-item' data-bs-toggle="modal" data-bs-target={`#renamemodal${props.n}`}>Rename</li>
                            <li className='dropdown-item' onClick={() => { props.deleteTasklist(tasklist.name) }}>Delete</li>
                        </ul>
                        <div className="modal fade" id={`renamemodal${props.n}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    {/* <div className="modal-body"> */}
                                    <div className="row no-gutters p-1 m-2">
                                        <input typr='text' className='col-10 border border-0 border-outline-primary' placeholder='List Name' value={tasklistname} onChange={(e) => { setTasklistname(e.target.value) }}></input>
                                        <i className="fa fa-check-square col-1" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: 45 }} onClick={() => saveTaskListname()}></i>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row d-flex align-items-center mb-3" data-bs-toggle="modal" data-bs-target={`#addTask${tasklist.id}`} style={{ cursor: 'pointer' }}>
                            <i className="fa fa-plus-circle col-2" style={{ fontSize: 45 }}></i>
                            <h5 className="col-8 mt-2 fw-normal">Add New Task</h5>
                        </div>
                        <div className="modal fade" id={`addTask${tasklist.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="px-3">
                                        <i className="fa fa-times m-2 float-end" style={{ fontSize: 25 }} data-bs-dismiss="modal" aria-label="Close"></i>
                                    </div>
                                    <div className="row no-gutters px-1 m-2">
                                        <input typr='text' className='form-control' placeholder='Enter Task' value={name} onChange={(e) => { setName(e.target.value) }}></input>
                                        <textarea className="form-control mt-2" style={{ width: "100%", height: "125px", resize: 'none' }} placeholder='Add details' value={details} onChange={(e) => { setDetails(e.target.value) }}></textarea>

                                        <h6 className="mt-2">Due date : </h6>
                                        <DatePicker
                                            key={'rohan2'}
                                            className="w-25"
                                            onChange={(value) => setDate(value)}
                                            minDate={new Date()}
                                            value={date}
                                        />
                                        <button className="btn text-white mt-3" style={{ backgroundColor: '#10558c' }} onClick={() => { addtask() }}>Save Task</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {<>   {tasklist.tasks.filter((t) => t.completed === false).map((t, index) => {
                            return <Task
                                key={Math.floor(Math.random() * 100000)}
                                num={[Math.floor(Math.random() * 100000), props.n]}
                                task={t}
                                deleteTask={deleteTask}
                                setTasklist={setTasklist}
                                tasklist={tasklist}
                                setTaskboard={props.setTaskboard}
                                markCompleted={markCompleted}
                            />
                        })}
                            {tasklist.tasks.filter((t) => t.completed === true).length > 0 && <div className="mt-3" style={{ color: '#45cc64' }}>
                                <h5 className='mb-3 fw-normal'>Completed ({tasklist.tasks.filter((t) => t.completed === true).length})</h5>
                                {tasklist.tasks.filter((t) => t.completed === true).map((t, index) => {
                                    let key = props.n + 'task' + Math.floor(Math.random() * 100000)
                                    return <div className="row no-gutters d-flex align-items-center" key={key}>
                                        <i className="fa fa-check-circle-o col-2" style={{ fontSize: 45 }}></i>
                                        <h5 className="col-8 fw-normal" data-bs-toggle="collapse" href={`#complete${key}`} role="button" aria-expanded="false" aria-controls="multiCollapseExample1">{t.name}</h5>
                                        <div className="collapse multi-collapse" id={`complete${key}`}>
                                            <div className="col-10 float-end mt-2">
                                                <p>{t.details.length > 0 ? t.details : 'No detail available'}</p>
                                                <span className="border border-info rounded-pill text-dark px-2 py-1 fs-6">{moment(t.date).format("Do MMM, YYYY")}</span>
                                            </div>
                                        </div>
                                    </div>
                                })}

                            </div>}
                        </>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Tasklist