import { Link } from 'react-router-dom'

const top6Projects = [
    {
        name: 'Jishnu Portfolio',
        desc: 'Portfolio website with parallax effect for a client',
        ghLink: 'https://github.com/tanishabisht/JishnuGoyal',
        stacks: ['reactjs', 'gh-pages', 'parallax-effect', 'css-modules', 'emailjs'],
        isFav: true
    },
    {
        name: 'E-Commerce APIs',
        desc: 'Creating E-Commerce APIs using NodeJS ',
        ghLink: 'https://github.com/tanishabisht/APIs-NodeJS-E-Commerce',
        stacks: ['nodejs', 'express', 'mongoose', 'nodemon', 'express-jwt', 'jsonwebtoken', 'morgan'],
        isFav: false
    },
    {
        name: 'SRM ELab print report',
        desc: 'Automation tool for downloading DAA reports from ELab',
        ghLink: 'https://github.com/tanishabisht/SRM-Elab-DAA-Print-Report',
        stacks: ['python', 'selenium'],
        isFav: true
    },
    {
        name: 'React State Management',
        desc: 'Managing states in react locally, passing from parent to child, globally and using rest APIs',
        ghLink: 'https://github.com/tanishabisht/React-StateManagement',
        stacks: ['reactjs', 'react'],
        isFav: true
    },
    {
        name: 'Angular',
        desc: 'My first angular project, documenting the resources refered to learn the basic concepts',
        ghLink: 'https://github.com/tanishabisht/MiniProj-Angular-Basics',
        stacks: ['angular', 'bootstrap'],
        isFav: true
    }
]

const Projects = () => {
    return (
        <div className="container">
            <h1 className="header">Some more projects</h1>
            <div className="projectsGrid">

                {top6Projects.map(e => (
                    <a target="_blank" className={`projectsGrid__card ${e.isFav === true ? "projectsGrid__card--fav" : null}`} href={e.ghLink} key={e.name}>
                        {e.isFav === true ? <i className="fa fa-heart"></i> : null}
                        <h3 className="projectsGrid__card__name">{e.name}</h3>
                        <p className="projectsGrid__card__desc">{e.desc}</p>
                        <div className="projectsGrid__card__stacks">
                            {e.stacks.map((s, k) => <span key={k}>{s}</span>)}
                        </div>
                    </a>
                ))}

                <Link className="projectsGrid__card projectsGrid__cardLast" to="/all-projects">
                    <h3>See more projects</h3>
                </Link>

            </div>
        </div>
    )
}

export default Projects