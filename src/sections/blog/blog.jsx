import { useState } from 'react'
import './blog.scss'
import data from './data.json'
import RecipeBanner from '@/components/RecipeBanner'
import Button from '@/components/Button'

const { posts, recipes } = data

export default function Blog() {
  const [activePage, setActivePage] = useState(1)

  return (
    <section className="blog">
      <div className="blog__container">

        <div className="blog__hero">
          <h1 className="blog__title">Blog & Article</h1>
          <p className="blog__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          <div className="blog__search">
            <input className="blog__search-input" type="text" placeholder="Search article, news or recipe..." />
            <Button>Search</Button>
          </div>
        </div>

        <div className="blog__layout">
          <div className="blog__main">
            {posts.map((post) => (
              <article key={post.id} className="blog-post">
                <img className="blog-post__image" src={post.image} alt={post.title} />
                <div className="blog-post__body">
                  <h3 className="blog-post__title">{post.title}</h3>
                  <p className="blog-post__excerpt">{post.excerpt}</p>
                  <div className="blog-post__meta">
                    <img className="blog-post__avatar" src={post.author.avatar} alt={post.author.name} />
                    <span className="blog-post__author">{post.author.name}</span>
                    <span className="blog-post__date">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="blog__sidebar">
            <div className="blog__recipes">
              <h2 className="blog__sidebar-title">Tasty Recipes</h2>
              {recipes.map((recipe) => (
                <div key={recipe.id} className="blog-recipe">
                  <img className="blog-recipe__image" src={recipe.image} alt={recipe.title} />
                  <div>
                    <p className="blog-recipe__title">{recipe.title}</p>
                    <p className="blog-recipe__author">By {recipe.author}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="blog__banner">
              <RecipeBanner
                bgImgSrc="/src/assets/images/recipes/0.jpg"
                site="www.foodieland.com"
              />
            </div>
          </aside>
        </div>

        <div className="blog__pagination">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`blog__page-btn${activePage === n ? ' blog__page-btn--active' : ''}`}
              onClick={() => setActivePage(n)}
            >
              {n}
            </button>
          ))}
          <span className="blog__page-dots">…</span>
          <button className="blog__page-btn">›</button>
        </div>

      </div>
    </section>
  )
}