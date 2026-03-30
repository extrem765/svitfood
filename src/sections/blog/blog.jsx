import './blog.scss'

export default function Blog({ author }) {
  return (
    <section className="blog">
      <div className="blog-container">

        <h1 className="blog__title">
          Blog & Article
        </h1>

        <div className="blog__layout">

          <div className="blog__main">
            <p className="blog__text">
              Тут буде текст статті
            </p>
          </div>

          <aside className="blog__sidebar">
            <div className="blog__banner">
              <img
                src="/images/banner.jpg"
                alt="Healthy food banner"
              />
            </div>
          </aside>

        </div>

      </div>
    </section>
  )
}