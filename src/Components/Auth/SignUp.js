import React from 'react'

const Signup = () => {

    return (
        <>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#10558c' }}>
                <div className='col-lg-4 col-9'>
                    <h1 className="text-white text-center mb-5">Sign up</h1>
                    <div className="position-relative">
                        <input type="text" className="text form-control  my-3 bg-transparent text-white" placeholder="Enter Name" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Username</label>
                    </div>
                    <div className="position-relative">
                        <input type="email" id="email" className="text form-control  my-3 bg-transparent text-white" placeholder="Enter Email Address" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Email Address</label>
                    </div>
                    <div className="position-relative ">
                        <input type="password" id="inputPassword5" className="text form-control bg-transparent text-white" placeholder="Enter Password" />
                        <label className="inputlabel" style={{ backgroundColor: '#10558c' }}>Password</label>
                    </div>
                    <div className="bottom-action clearfix mt-2">
                        <label className="float-start form-check-label text-white"><input type="checkbox" /> I accept the terms & conditions</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-5">
                        <a href='/' className="btn btn-light" type="button">Sign up</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup