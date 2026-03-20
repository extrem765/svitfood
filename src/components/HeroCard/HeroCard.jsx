import './HeroCard.scss'
import clsx from 'clsx'
//import Icon from '@/components/Icon'
import AuthorCard from '@/components/AuthorCard'
// import Tags from '@/components/Tags'
// import Button from '@/components/Button'

export default (props) => {
  const {
    className,
    category,
    title,
    TitleTag = 'h2',
    description,
    tags = [],
    author,
    imgSrc,
  } = props

  return (
    <div className={clsx('hero-card', className)}>
      <div className="hero-card__body">
        <header className="hero-card__category">
          <img
            className="hero-card__category-image"
            src={category.imgSrc}
            alt={category.label}
          />
          <span>{category.label}</span>
        </header>
        <TitleTag className="hero-card__title">
          {title}
        </TitleTag>
        <div className="hero-card__description">
          <p>{description}</p>
        </div>
        {/* <Tags
          className="hero-card__tags"
          type="rounded"
          items={tags}
        /> */}
        <footer className="hero-card__footer">
          <AuthorCard
            className="hero-card__author"
            {...author}
          />
          {/* <Button
            className="hero-card__button"
            href="/"
          >
            <span>View Recipes</span>
            <Icon name="play" hasFill />
          </Button> */}
        </footer>
        <img
          className="hero-card__badge"
          src="/images/badge.svg"
          alt="Handpicked recipies"
          width={150}
          height={150}
          loading="lazy"
        />
      </div>
      <img
        className="hero-card__image"
        src={imgSrc}
        width={660}
        height={640}
        alt={title}
      />
    </div>
  )
}