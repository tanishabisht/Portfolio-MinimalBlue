import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const Error404 = () => {

    const location = useLocation()

    useEffect(() => {
        setTimeout(() => {
            location.push('/')
        }, 3000)
    }, [])

    return (
        <div className='not-found'>
            <h1>Ooooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link to='/'><a>Homepage</a></Link></p>
        </div>
    )

}
export default Error404