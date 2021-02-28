import React, { useState, useEffect } from 'react'
import logo from '../../Assets/logo-removebg-preview.png'
import Axios from 'axios'


const Header = () => {

    const [url, setUrl] = useState('')

    const getImageUrl = async () => {
        const num = Math.floor(Math.random() * 1000)
        await Axios
            .get(`https://picsum.photos/id/${num}/info`)
            .then((res) => {
                setUrl(res.data.download_url)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getImageUrl()
    }, [])

    return (
        <>
            <nav className="navbar navbar-light" style={{ backgroundColor: '#10558c' }}>
                <div className="container-fluid">
                    <div className="row text-light">
                        <label className="navbar-brand col-2" style={{ fontSize: 25 }}>
                            <img src={logo} alt="" width="40" height="40" className="d-inline-block align-top" />
                        </label>
                        <span className='pl-2 col-1 fs-4 pt-2'>TasksBoard</span>
                    </div>
                    <div>
                        <img className="float-start rounded-circle" src={url} alt='' width="50" height="50"></img>
                        {/* <a className="btn btn-danger m-1" href='/Login'>
                            <i className="fa fa-sign-out text-white" style={{ fontSize: 20 }}></i>
                        </a> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header