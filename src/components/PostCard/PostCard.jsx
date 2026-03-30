import './PostCard.scss'

export default function PostCard({ post }) {
  const { image, title, excerpt, author, date } = post

  return (
    <article className="post-card">
      <img className="post-card__image" src={image} alt={title} />
      <div className="post-card__body">
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__excerpt">{excerpt}</p>
        <div className="post-card__meta">
          <img className="post-card__avatar" src={author.avatar} alt={author.name} />
          <span className="post-card__author">{author.name}</span>
          <span className="post-card__date">{date}</span>
        </div>
      </div>
    </article>
  )
}