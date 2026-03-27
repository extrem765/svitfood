import './Contact.scss'


export default function Contact({ author }) {
  return (
    <section className="article">
      <div className="article__container">

        <h1 className="article__title">
          Full Guide to Becoming a Professional Chef
        </h1>

        <div className="article__meta">
          <div className="article__author">
            <img src={author.imgSrc} alt={author.name} className="article__author-img" />
            <span>{author.name}</span>
          </div>
           <span className="article__divider">|</span>
          <time className="article__date" dateTime={author.date.dateTime}>
            {author.date.label}
          </time>
        </div>

        <p className="article__excerpt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>

        <div className="article__image">
          <img src="/src/assets/images/lol/1.jpg" alt="article cover" />
        </div>

      </div>
    </section>
  )
}