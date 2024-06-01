import { Link } from 'react-router-dom'
import { top6Projects } from '../../content/projects'

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