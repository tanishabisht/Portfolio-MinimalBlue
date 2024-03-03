const developmentProcess = [
  {num:"01", phase:'Understand', tasks:['collect info', 'personas', 'set goals', 'mood board']},
  {num:"02", phase:'Design Phase', tasks:['web flow', 'low fidelity', 'high fidelity', 'user testing']},
  {num:"03", phase:'Build Phase', tasks:['frontend', 'backend', 'integration', 'optimization']},
  {num:"04", phase:'Launch Phase', tasks:['deploy', 'explain client']}
]


const Process = () => {
  return (
    <div className="container processContainer">
      <h1 className="header">My development process</h1>
      <p className="processContainer__content">Designing for me, is boundless. It constantly makes me challenge my own creativity — recently, I've been particularly interested in <span>accessibility</span> and <span>user-centered processes</span>.</p>
      <div className="processGrid">
        {developmentProcess.map(e => (
          <div className="processGrid__card" key={e.phase}>
            <p className="processGrid__card__number">{e.num}</p>
            <h2 className="processGrid__card__phase">{e.phase}</h2>
            {e.tasks.map((t,k) => <p className="processGrid__card__task" key={k}>{t}</p>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Process