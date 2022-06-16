import './index.scss';
import ohSnapPhoto from '../../assets/images/photo-portfolio.png';
import rendatevousPhoto from '../../assets/images/rendatevous.png';
import eCommercePhoto from '../../assets/images/ecommerce-backend.png';
import portfolioPhoto from '../../assets/images/react-portfolio.png';


const projects = [
    {
        title: 'Oh Snap! Photo Portfolio',
        description: 'Single page React application that allows users to view a mock photo portfolio through the use of Modals and Hooks',
        github: 'https://github.com/lukejohnsen/photo-port',
        deployed: 'https://lukejohnsen.github.io/photo-port/',
        image: ohSnapPhoto
    },
    {
        title: 'RenDATEvous',
        description: 'Application that allows users to login, rate, save and review potential dates with friends and significant others.',
        github: 'https://github.com/Blitman12/ren-date-vous',
        deployed: 'http://rendatevous.herokuapp.com/',
        image: rendatevousPhoto
    },
    {
        title: 'E-Commerce Backend',
        description: ' Building a backend relation database for a popular eCommerce site using MySQL. API routes are RESTful and follow the CRUD methodology.',
        github: 'https://github.com/lukejohnsen/ecommerce-backend',
        deployed: null,
        image: eCommercePhoto
    },
    {
        title: 'React Portfolio',
        description: 'A portfolio made with React and various libraries to help showcase Luke"s journey as a web developer.',
        github: 'https://github.com/lukejohnsen/react-portfolio',
        deployed: 'https://lukejohnsen.github.io/react-portfolio/',
        image: portfolioPhoto
    }
]

function Portfolio() {
    return (
        <div className='portfolio-container'>
            <div className='project-container'>{projects.map(project => {
                return (
                    <div className='single-project'>
                        <h1>{project.title}</h1>
                        <img src={project.image}/>
                        <p>{project.description}</p>
                        <a href={project.github}>GITHUB LINK</a>
                        {project.deployed === null ? <p></p>: <a href={project.deployed}>DEPLOYED LINK</a>}
                    </div>
                );
            })}</div>
        </div>
    )
}

export default Portfolio