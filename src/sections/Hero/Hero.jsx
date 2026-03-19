import './Hero.scss'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__slider swiper" data-js-slider='{"loop": true, "slidesPerView": 1}'>
        <ul className="hero__slide-list swiper-wrapper">
          <li className="hero__slide swiper-slide">
            <div className="hero__card">
              122222222222
            </div>
          </li>
          <li className="hero__slide swiper-slide">
            <div className="hero__card">
              2
            </div>
          </li>
          <li className="hero__slide swiper-slide">
            <div className="hero__card">
              3
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}