import { useState } from 'react'
import { allOtherProjects } from '../content/projects'

const Projects = () => {
    const [category, setCategory] = useState("portfolios")
    const onSelectCategory = (e) => setCategory(e.target.textContent)

    return (
        <div className="container">
            <h1 className="header projHeader">Some more projects</h1>

            <div className="categories">
                {Object.keys(allOtherProjects).map((e,k) => (
                    <span className={`categories__category ${category===e ? "categories__category--active" : null}`} onClick={onSelectCategory} key={k}>{e}</span>
                ))}
            </div>

            <div className="projectsGrid">
                {allOtherProjects[category].map(e => (
                    <a target="__blank" className={`projectsGrid__card ${e.isFav===true?"projectsGrid__card--fav":null}`} href={e.ghLink} key={e.name}>
                        {e.isFav===true?<i className="fa fa-heart"></i>:null}
                        <h3 className="projectsGrid__card__name">{e.name}</h3>
                        <p className="projectsGrid__card__desc">{e.desc}</p>
                        <div className="projectsGrid__card__stacks">
                            {e.stacks.map((s,k) => <span key={k}>{s}</span>)}
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Projects