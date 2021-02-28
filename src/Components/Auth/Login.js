import React from 'react'
import './style.css'
const Login = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#10558c' }}>
                <div className='col-lg-4 col-9'>
                    <h1 className="text-white text-center mb-5">Log in!</h1>
                    <div className="position-relative">
                        <input type="email" id="email" className="text form-control  my-3 bg-transparent text-white" placeholder="Email Address" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Email Address</label>
                    </div>
                    <div className="position-relative">
                        <input type="password" id="inputPassword5" className="text form-control bg-transparent text-white" placeholder="Password" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Password</label>
                    </div>
                    <div className="bottom-action clearfix mt-2">
                        <label className="float-start form-check-label text-white"><input type="checkbox" /> Remember me</label>
                        <a href="/" className="float-end text-white">Forgot Password?</a>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-5">
                        <a href='/Home' className="btn btn-light" type="button">Log in</a>
                    </div>
                    <p className="text-white mt-4 mx-auto col-lg-7 col-sm-4">Don't have account ?<a href='/Signup' className="text-light"> Sign up here</a></p>
                </div>
            </div>
        </>
    )
}

export default Login