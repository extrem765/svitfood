import './Cook.scss'

import AuthorCard from '@/components/AuthorCard'
import RecipeBanner from '@/components/RecipeBanner'

import authorImg from '@/assets/images/q.png'

export default function Cook() {

  return (

    <section className="Cook">

      <div className="Cook__container">

        <h1 className="Cook__title">
          Healthy Japanese Fried Rice
        </h1>


        <div className="Cook__meta">

          <AuthorCard
            imgSrc={authorImg}
            name="Andreas Paula"
            date={{
              dateTime: "2022-04-20",
              label: "20 April 2022"
            }}
          />


          <div className="Cook__info">

            {[
              { label: 'Prep Time', value: '15 Minutes' },
              { label: 'Cook Time', value: '15 Minutes' },
              { label: 'Category', value: 'Chicken' },
            ].map((item, idx) => (

              <div
                className="Cook__info-item"
                key={idx}
              >

                <span className="Cook__label">
                  {item.label}
                </span>

                <span>
                  {item.value}
                </span>

              </div>

            ))}

          </div>

        </div>


        <div className="Cook__layout">

          <div className="Cook__image-wrapper">

            <button
              className="Cook__play"
              aria-label="Play video"
            >
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

              Adipiscing elit, sed do eiusmod tempor incididunt ut labore.

            </p>

          </div>

        </div>


        <aside className="Cook__aside">

          <RecipeBanner
            bgImgSrc={authorImg}
            site="www.foodieland.com"
          />

        </aside>


      </div>

    </section>

  )
}