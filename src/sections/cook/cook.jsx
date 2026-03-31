import './Cook.scss'
import AuthorCard from '@/components/AuthorCard'
import fonImg from '@/assets/images/recipes/fon.jpg'

export default function Cook({ author }) {
  return (
    <section className="Cook">
      <div className="Cook__container">

        <h1 className="Cook__title">
          Healthy Japanese Fried Rice
        </h1>

        <div className="Cook__meta">

          <div className="Cook__author">
            {author && (
              <AuthorCard
                imgSrc={author.imgSrc}
                name={author.name}
                date={author.date}
              />
            )}
          </div>

          <div className="Cook__info">
            {[
              { label: 'Prep Time', value: '15 Minutes' },
              { label: 'Cook Time', value: '15 Minutes' },
              { label: 'Category', value: 'Chicken' },
            ].map((item, idx) => (
              <div className="Cook__info-item" key={idx}>
                <span className="Cook__label">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

        </div>

        <div className="Cook__layout">

          <div className="Cook__image-wrapper">
            <img
              src={fonImg}
              alt="Japanese fried rice"
              className="Cook__image"
            />
            <button className="Cook__play" aria-label="Play video">
              ▶
            </button>
          </div>

          <div className="Cook__nutrition">
            <h3 className="Cook__nutrition-title">
              Nutrition Information
            </h3>
            <ul className="Cook__nutrition-list">
              {[
                { label: 'Calories', value: '219.9 kcal' },
                { label: 'Total Fat', value: '10.7 g' },
                { label: 'Protein', value: '7.9 g' },
                { label: 'Carbohydrate', value: '22.3 g' },
                { label: 'Cholesterol', value: '37.4 mg' },
              ].map((item, idx) => (
                <li key={idx}>
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
            <p className="Cook__nutrition-text">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

        </div>

        <p className="Cook__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

      </div>
    </section>
  )
}