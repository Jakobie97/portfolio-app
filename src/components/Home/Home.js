import React from 'react'
import classes  from './Home.module.css'
import image from './../../img/koi.jpg'


function Home() {
    return (
        <div className={classes.Home}> 
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello world</h1>
                 <h1>Welcome, My name is Jacob Stockwell</h1>
            </div>
            <img src={image}></img>
        </div>
    )
}

export default Home
