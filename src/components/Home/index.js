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
                <Link to='/contact' className='flat-button'>GET IN TOUCH</Link>
            </div>
            <div className='photo-zone'>
            <img src={headshot} alt='homepage headshot' className='headshot'/>
            </div>
        </div>
    )
}

export default Home;