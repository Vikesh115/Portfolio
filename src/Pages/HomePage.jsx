import './HomePage.css'
import lapoo from '../assets/lapoo.jpg'
const HomePage = ({ theme, setTheme }) => {
    return (
        <div className="homepage">
            <div>
                <div className='name1'>
                    Who is Vikesh?
                </div>
                <div className='name3'>
                    Full stack developer
                </div>
                <div >
                    <a href="https://www.linkedin.com/in/vikesh-raut/"> <button className='button'> Lets Connect </button> </a>
                </div>
            </div>
            <div className='row'>
                <img src={lapoo} alt="" className='lapoo' />
            </div>
        </div>
    )
}

export default HomePage
