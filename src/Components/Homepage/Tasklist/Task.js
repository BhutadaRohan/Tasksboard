import React, { useState, useEffect } from 'react'
import DatePicker from 'react-date-picker';
import moment from 'moment';

const Task = (props) => {
    const task = props.task
    const tasklist = props.tasklist

    const [name, setName] = useState(task.name)
    const [details, setDetails] = useState(task.details)
    const [date, setDate] = useState(new Date(task.date))
    const [newlist, setNewlist] = useState(0)

    const taskboard = JSON.parse(localStorage.getItem("taskboard"))

    const moveTo = () => {

        let temp = JSON.parse(localStorage.getItem("taskboard"))
        for (var i in temp) {
            if ((temp[i].id).toString() === newlist) {
                temp[i].tasks[temp[i].tasks.length] = task
                props.setTasklist(temp[i])
                break; //Stop this loop, we found it!
            }
        }

        for (var j in temp) {
            alert(typeof (tasklist.id))
            if (temp[j].id === tasklist.id) {
                temp[j].tasks = temp[j].tasks.filter(t => t.name !== task.name);
                props.setTasklist(temp[j])
                break; //Stop this loop, we found it!
            }
        }
        props.setTaskboard(temp)
        localStorage.setItem("taskboard", JSON.stringify(temp));
    }

    //whenever change in one of the fields then function is called
    useEffect(() => {
        let temp = JSON.parse(localStorage.getItem("taskboard"))
        for (var i in temp) {
            if (temp[i].id === tasklist.id) {
                let index = temp[i].tasks.findIndex((t => t.name === task.name))
                temp[i].tasks[index] = {
                    name: name,
                    details: details,
                    date: date,
                    completed: false
                };
                break; //Stop this loop, we found it!
            }
        }
        localStorage.setItem("taskboard", JSON.stringify(temp));
    }, [name, details, date])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="mt-2">
                <div className="row no-gutters d-flex align-items-center" >
                    <i className="fa fa-circle-thin col-2" style={{ fontSize: 45 }} onClick={() => props.markCompleted(props.task)}></i>
                    <h5 className="col-8 fw-normal" data-bs-toggle="collapse" href={`#multiCollapseExample${props.num[0]}task${props.num[1]}`} role="button" aria-expanded="false" aria-controls="multiCollapseExample1">{name}</h5>
                    <i className="fa fa-pencil col-2" style={{ fontSize: 20 }} data-bs-toggle="modal" data-bs-target={`#exampleModal${props.num[0]}task${props.num[1]}`}></i>
                    <div className="collapse multi-collapse" id={`multiCollapseExample${props.num[0]}task${props.num[1]}`}>
                        <div className="col-10 float-end mt-2">
                            <p>{details.length > 0 ? details : 'No detail available'}</p>
                            <span className="border border-info rounded-pill text-dark px-2 py-1 fs-6">{moment(date).format("Do MMM, YYYY")}</span>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id={`exampleModal${props.num[0]}task${props.num[1]}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="px-3">
                                <i className="fa fa-trash-o m-2 float-start" style={{ fontSize: 25 }} data-bs-dismiss="modal" aria-label="Close" onClick={() => { props.deleteTask(props.task) }}></i>
                                <i className="fa fa-times m-2 float-end" style={{ fontSize: 25 }} data-bs-dismiss="modal" aria-label="Close"></i>
                            </div>
                            <div className="row no-gutters px-1 m-2">
                                <input typr='text' className='form-control' placeholder='Enter Task' value={name} onChange={(e) => { setName(e.target.value) }}></input>
                                <textarea className="form-control mt-2" style={{ width: "100%", height: "125px", resize: 'none' }} placeholder='Add details' value={details} onChange={(e) => { setDetails(e.target.value) }}></textarea>

                                <h6 className="mt-2">Due date : </h6>
                                <DatePicker
                                    key={'rohan1'}
                                    className="w-25"
                                    onChange={(value) => setDate(value)}
                                    minDate={new Date()}
                                    value={date}
                                />
                                <h6 className="mt-2">Move to</h6>
                                <div className="row no-gutters">
                                    <select className="form-select w-75" aria-label="Default select example" value={newlist} onChange={(e) => { setNewlist(e.target.value) }} >
                                        <option value={0}>Choose List Name</option>
                                        {taskboard.filter((t) => t.id !== tasklist.id).map((tasklist, index) => {
                                            return <option key={index} value={tasklist.id}>{tasklist.name}</option>
                                        })}
                                    </select>
                                    <button style={{ backgroundColor: '#10558c' }} className="btn text-white w-25" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => { moveTo() }}>Move</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task