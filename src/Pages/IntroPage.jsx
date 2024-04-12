import './IntroPage.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Shop from '../assets/shop.jpg'
import Weather from '../assets/weather.jpg'

function IntroPage() {
    return (
        <div className='intropage'>
            <div className='heading'>Projects</div>
            <Card className='card'>
                <Card.Body className='card1'>
                    <Card.Link href="https://tee-rex-store-olive.vercel.app/"><img className='intro' src={Shop} alt="" /></Card.Link>
                    <Card.Title className='title'>Shopping WebApp</Card.Title>
                </Card.Body >
                <Card.Body className='card1'>
                    <Card.Link href="https://tee-rex-store-olive.vercel.app/"><img className='intro' src={Shop} alt="" /></Card.Link>
                    <Card.Title className='title'>Shopping WebApp</Card.Title>
                </Card.Body>
                <Card.Body className='card1'>
                    <Card.Link href="https://weathercheckonline.netlify.app/"><img className='intro' src={Weather} alt="" /></Card.Link>
                    <Card.Title className='title'>Weather WebApp</Card.Title>
                </Card.Body>
                <Card.Body className='card1'>
                    <Card.Link href="https://weathercheckonline.netlify.app/"><img className='intro' src={Weather} alt="" /></Card.Link>
                    <Card.Title className='title'>Weather WebApp</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}

export default IntroPage;
