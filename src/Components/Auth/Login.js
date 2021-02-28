import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Login = () => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (email.length === 0 || password.length === 0) {
            alert('All fields are required')
        }
        else if (!pattern.test(email)) {
            alert('invalid email address')
        }
        else {
            let users = JSON.parse(localStorage.getItem('users')) || []
            users = users.filter((user) => user.email === email)
            if (users.length === 0) {
                alert('user not found')
            } else if (users[0].password !== password) {
                alert('Invalid Email or Password !')
            } else {
                history.push('/home')
            }

        }
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#10558c' }}>
                <div className='col-lg-4 col-9'>
                    <h1 className="text-white text-center mb-5">Log in!</h1>
                    <div className="position-relative">
                        <input type="email" id="email" className="text form-control  my-3 bg-transparent text-white" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Address" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Email Address</label>
                    </div>
                    <div className="position-relative">
                        <input type="password" id="inputPassword5" className="text form-control bg-transparent text-white" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Password</label>
                    </div>
                    <div className="bottom-action clearfix mt-2">
                        <label className="float-start form-check-label text-white"><input type="checkbox" /> Remember me</label>
                        <a href="/" className="float-end text-white">Forgot Password?</a>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-5">
                        <span className="btn btn-light" type="button" onClick={() => Login()}>Log in</span>
                    </div>
                    <p className="text-white mt-4 mx-auto col-lg-7 col-sm-4">Don't have account ?<a href='/Signup' className="text-light"> Sign up here</a></p>
                </div>
            </div>
        </>
    )
}

export default Login