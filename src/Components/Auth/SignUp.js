import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = () => {

    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState(0)

    const createAccount = () => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (name.length === 0 || email.length === 0 || password.length === 0) {
            alert('All fields are required')
        }
        else if (!pattern.test(email)) {
            alert('invalid email address')
        }
        else if (password.length < 8) {
            alert('password must conatin at least 8 letters')
        }
        else if (check !== 1) {
            alert('please accept terms and conditions')
        }
        else {
            let users = JSON.parse(localStorage.getItem('users')) || []
            users = [...users, { name: name, email: email, password: password }]
            localStorage.setItem('users', JSON.stringify(users))
            history.push('/')
        }
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#10558c' }}>
                <div className='col-lg-4 col-9'>
                    <h1 className="text-white text-center mb-5">Sign up</h1>
                    <div className="position-relative">
                        <input type="text" className="text form-control  my-3 bg-transparent text-white" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Username</label>
                    </div>
                    <div className="position-relative">
                        <input type="email" id="email" className="text form-control  my-3 bg-transparent text-white" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email Address" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Email Address</label>
                    </div>
                    <div className="position-relative ">
                        <input type="password" id="inputPassword5" className="text form-control bg-transparent text-white" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Password</label>
                    </div>
                    <div className="bottom-action clearfix mt-2">
                        <label className="float-start form-check-label text-white"><input type="checkbox" checked={check === 1 ? true : false} onClick={() => check === 0 ? setCheck(1) : setCheck(0)} /> I accept the terms & conditions</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-5">
                        <span className="btn btn-light" type="button" onClick={() => createAccount()}>Sign up</span>
                    </div>
                    <div className='text-white text-center mt-3'>
                        <span>Already have account ? <a className="text-decoration-none text-white" href='/'>Login here</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup