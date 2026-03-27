import './Contact.scss'
import Socials from '@/components/Socials'

export default function Contact({ author }) {
  return (
    <section className="article">
      <div className="article__container">

        <h1 className="article__title">
          Full Guide to Becoming a Professional Chef
        </h1>

        <div className="article__meta">
          <div className="article__author">
            <img
              src={author.imgSrc}
              alt={author.name}
              className="article__author-img"
            />
            <span>{author.name}</span>
          </div>

          <span className="article__divider">|</span>

          <time
            className="article__date"
            dateTime={author.date.dateTime}
          >
            {author.date.label}
          </time>
        </div>

       <p className="article__excerpt"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, 
        at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. </p>

        <div className="article__image">
          <img
            src="/src/assets/images/lol/1.jpg"
            alt="article cover"
          />
        </div>

        <div className="article__body">
          <div className="article__content">

            <h4>How did you start out in the food industry?</h4>

            <p className="article__text article__text--first">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
              turpis. Ut vehicula sed velit a faucibus.
            </p>

            <h4>What do you like most about your job?</h4>

            <p className="article__text article__text--second">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis.
              Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
              Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>

            <h4>Do you cook at home on your days off?</h4>

            <div className="article__image article__image--small">
              <img
                src="/src/assets/images/lol/2.jpg"
                alt="article cover"
              />
            </div>

            <p className="article__text article__text--third">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis.
              Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
              Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>

            <h4>
              What would your advice be to young people looking to get their foot
              in the door?
            </h4>

            <p className="article__text article__text--fourth">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis.
              Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
              Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>

            <blockquote className="article__quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio."
            </blockquote>

            <h4>
              What is the biggest misconception that people have about being a
              professional chef?
            </h4>

            <p className="article__text article__text--fifth">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis.
              Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
              Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>

          </div>

          <div className="article__socials">
            <span>Share this on:</span>
            <Socials />
          </div>

        </div>

      </div>
    </section>
  )
}