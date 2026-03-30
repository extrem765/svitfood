
import './cook.scss'

import Button from '@/components/Button'

export default function Cook() {



  return (
    <section className="cook">
      <div className="cook__container">

        <div className="cook__hero">
          <h1 className="cook__title">
            Health Japanese Fried Rice
          </h1>

          <p className="cook__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <div className="cook__search">
            <input
              className="cook__search-input"
              type="text"
              placeholder="Search recipe..."
            />

            <Button>
              Search
            </Button>
          </div>
        </div>



      </div>
    </section>
  )
}