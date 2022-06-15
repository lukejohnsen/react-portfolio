import './index.scss';
import { Link } from 'react-router-dom';
import headshot from '../../assets/images/headshot-1.jpg';

function Home() {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    Hi, I'm Luke.
                </h1>
                <h2>
                    Fullstack Web Developer
                </h2>
                <Link to='/contact' className='flat-button'>DOWNLOAD CV</Link>
                <Link to='/contact' className='flat-button'>GET IN TOUCH</Link>
            </div>
            <div className='about-zone'>
                <img src={headshot} alt='homepage headshot' className='headshot' />
                <p>
                    I am a recent graduate of the University of Arizona’s Full-Stack WebDev Bootcamp, eager to begin my career in this new field. My skills include both frontend and backend web development in JavaScript utilizing the MERN (MongoDB, Express.js, React.js and Node.js) stack. I have a distinct passion for problem solving issues both large and small and am eager to embark on this new career journey to see what challenges and successes lie ahead.
                </p>
            </div>
        </div>
    )
}

export default Home;