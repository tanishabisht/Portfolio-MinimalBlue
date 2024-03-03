const blogTemplate = ({ blogContent }) => {
  return (
    <div className="blogContainer">
      <h1 className="header blogContainer__header">{blogContent.topic}</h1>

      <div className="blogContainer__credits">
        <p>
          {blogContent.credits.postedOn !== null ? (
            <span className="blogContainer__creditsHead">Posted on: </span>
          ) : null}
          {blogContent.credits.postedOn !== null
            ? blogContent.credits.postedOn
            : null}
        </p>
        <p>
          {blogContent.credits.editedBy !== null ? (
            <span className="blogContainer__creditsHead">Edited by: </span>
          ) : null}
          {blogContent.credits.editedBy !== null
            ? blogContent.credits.editedBy
            : null}
        </p>
        <p>
          {blogContent.credits.illustrationsBy !== null ? (
            <span className="blogContainer__creditsHead">
              Illustrations by:{" "}
            </span>
          ) : null}
          {blogContent.credits.illustrationsBy !== null
            ? blogContent.credits.illustrationsBy
            : null}
        </p>
      </div>

      <div className="blogContainer__content">
        <div className="blogDesc">
          <p className="blogDesc__number">{blogContent.number}</p>
          <p className="blogDesc__content">{blogContent.summary}</p>
        </div>

        {blogContent.content.map((e, k) => {
          if (e.tag === "para") {
            return <p key={k}>{e.data}</p>;
          } else if (e.tag === "img") {
            return <img key={k} src={e.data} width={500} height={300} />;
          }
        })}
      </div>
    </div>
  );
};

export default blogTemplate;
