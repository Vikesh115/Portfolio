// import {button} from 'react'
import './NavBar.css'
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

const PDF_FILE_URL = 'http://localhost:5173/resume.pdf';

const NavBar = ({ theme, setTheme }) => {

    const downloadfileAtURL = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
    return (
        <div className="navbar" >
            <img src={theme == 'light' ? logo_light : logo_dark} alt="" className="logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>

            <button onClick={() => { downloadfileAtURL(PDF_FILE_URL); }} className="favorite styled" type="button">Download CV</button>

            <img onClick={() => { toggle_mode() }} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />

        </div>
    );
};

export default NavBar;
