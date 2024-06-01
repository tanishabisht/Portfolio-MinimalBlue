import { allSkills } from '../../content/home'

const Tech = () => {
    return (
        <section className="container techContainer">
            <h1 className="header techContainer__header">Tech I have worked with</h1>
            <div className="techContainer__socialHandles">
                {allSkills.map((e, k) => {
                    return (
                        <span data-text={e.name} className={`techContainer__socialHandles__tooltip ${e.isFav ? "icon_fav" : null}`} key={k}>
                            <span><img src={e.icon} height={20} width={20} /></span>
                        </span>
                    )
                })}
            </div>
        </section>
    )
}

export default Tech