import React from 'react'
import Moon from '../images/icon-moon.svg'
import Sun from '../images/icon-sun.svg'
import desktop_light_background from '../images/bg-desktop-light.jpg'
import desktop_dark_background from '../images/bg-desktop-dark.jpg'
import mobile_dark_background from '../images/bg-mobile-dark.jpg'
import mobile_light_background from '../images/bg-mobile-light.jpg'

export default function Header(props) {
    
    const browserWidth = window.innerWidth

    let bgImage;

    if (props.toggleMode){
        if (browserWidth >= 800) {
            bgImage=desktop_light_background
        }
        else{
            bgImage=mobile_light_background
        }
    }
    else {
        if (browserWidth >= 800) {
            bgImage = desktop_dark_background
        }
        else {
            bgImage= mobile_dark_background
        }
    }

    const backgroundStyles= {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
    }

    const toggleModeStyles = {
        backgroundColor: props.toggleMode ? "#fff" : "#25283c", 
        color: props.toggleMode ? "black" : "fff"
    }

    return (
        <div className='header' style={backgroundStyles}>
            <div id="header-info">
                <h1 id="header-title">TODO</h1>
                <img onClick={props.handleClick} src={props.toggleMode ? Sun : Moon} alt="toggle between light and dark mode" id="toggle-icon"/>
            </div>
            <form onSubmit={props.handleSubmit}>
                <input value={props.formData} onChange={props.handleChange} name="todo" id="todo" placeholder="Create A New Todo..." style={toggleModeStyles}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
