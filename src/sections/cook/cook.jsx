import './Cook.scss';
import AuthorCard from '@/components/AuthorCard';
import RecipeBanner from '@/components/RecipeBanner';

import heroImg from '@/assets/images/cook/fon.jpg';
import middleImg from '@/assets/images/cook/fon2.jpg';
import bannerImg from '@/assets/images/cook/0.jpg';
import img33 from '@/assets/images/cook/33.png';
import img34 from '@/assets/images/cook/34.png';
import timerIcon from '@/assets/icons/timer.svg';
import forkKnifeIcon from '@/assets/icons/fork-knife.svg';

// Оновлені імпорти для картинок у Sidebar
import other1Img from '@/assets/images/cook/1.jpg';
import other2Img from '@/assets/images/cook/2.jpg';
import other3Img from '@/assets/images/cook/3.jpg';

export default function Cook() {
  const fullDescription = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";

  return (
    <section className="Cook">
      <div className="Cook__container">

        {/* HEADER */}
        <div className="Cook__header">
          <h1 className="Cook__title">
            Healthy Japanese Fried Rice
          </h1>
        </div>

        {/* META (Author, Stats, Actions) */}
        <div className="Cook__meta">
          <AuthorCard
            imgSrc="/src/assets/images/cook/author.jpg"
            name="John Smith"
            date={{
              dateTime: "2025-03-15",
              label: "15 March 2025"
            }}
          />

          <div className="Cook__stats">
            <div className="Cook__stat-item">
              <img src={timerIcon} alt="Timer" className="Cook__stat-icon" />
              <div className="Cook__stat-info">
                <span className="Cook__label">PREP TIME</span>
                <span className="Cook__value">15 Minutes</span>
              </div>
            </div>

            <div className="Cook__stat-item">
              <img src={timerIcon} alt="Timer" className="Cook__stat-icon" />
              <div className="Cook__stat-info">
                <span className="Cook__label">COOK TIME</span>
                <span className="Cook__value">15 Minutes</span>
              </div>
            </div>

            <div className="Cook__stat-item">
              <img src={forkKnifeIcon} alt="Category" className="Cook__stat-icon" />
              <div className="Cook__stat-info">
                <span className="Cook__label">CATEGORY</span>
                <span className="Cook__value">Chicken</span>
              </div>
            </div>
          </div>

          <div className="Cook__actions">
            <div className="Cook__action-item">
              <img src={img33} alt="print" />
              <span>PRINT</span>
            </div>
            <div className="Cook__action-item">
              <img src={img34} alt="share" />
              <span>SHARE</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="Cook__hero-row">
          <div className="Cook__hero-main">
            <div className="Cook__video-wrapper">
              <img
                className="Cook__hero-image"
                src={heroImg}
                alt="Japanese Fried Rice"
              />
              <button className="Cook__play-button">▶</button>
            </div>
          </div>

          <aside className="Cook__nutrition">
            <h3 className="Cook__nutrition-title">Nutrition Information</h3>
            <ul className="Cook__nutrition-list">
              <li><span>Calories</span><strong>219.9 kcal</strong></li>
              <li><span>Total Fat</span><strong>10.7 g</strong></li>
              <li><span>Protein</span><strong>7.9 g</strong></li>
              <li><span>Carbohydrate</span><strong>22.3 g</strong></li>
              <li><span>Cholesterol</span><strong>37.4 mg</strong></li>
            </ul>
            <p className="Cook__nutrition-note">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </aside>
        </div>

        <p className="Cook__intro-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi adad aliquip ex ea commodo consequat.
          Duis aute irure in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* MAIN GRID CONTENT */}
        <div className="Cook__content-grid">
          <div className="Cook__main-column">
            
            {/* INGREDIENTS */}
            <div className="Cook__ingredients">
              <h2 className="Cook__section-title">Ingredients</h2>
              
              <div className="Cook__ing-group">
                <h4 className="Cook__ing-subtitle">For main dish</h4>
                {[
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet'
                ].map((item, idx) => (
                  <div className="Cook__checkbox-item" key={idx}>
                    <input type="checkbox" id={`main-${idx}`} />
                    <label htmlFor={`main-${idx}`}>{item}</label>
                  </div>
                ))}
              </div>

              <div className="Cook__ing-group">
                <h4 className="Cook__ing-subtitle">For the sauce</h4>
                {[
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet'
                ].map((item, idx) => (
                  <div className="Cook__checkbox-item" key={idx}>
                    <input type="checkbox" id={`sauce-${idx}`} />
                    <label htmlFor={`sauce-${idx}`}>{item}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* DIRECTIONS */}
            <div className="Cook__directions">
              <h2 className="Cook__section-title">Directions</h2>
              {[1, 2, 3].map(step => (
                <div className="Cook__step" key={step}>
                  <div className="Cook__step-header">
                    <span className="Cook__step-indicator"></span> 
                    <span className="Cook__step-number">{step}. Step title</span>
                  </div>

                 
                  <p className="Cook__step-desc">{fullDescription}</p>
                  
                  
                  {step === 1 && (
                    <>
                      <img className="Cook__step-img" src={middleImg} alt="Cooking process" />
                     
                      <p className="Cook__step-desc">{fullDescription}</p>
                    </>
                  )}
                  
                  <hr className="Cook__step-divider" />
                </div>
              ))}
            </div>
          </div> 

          {/* SIDEBAR */}
          <aside className="Cook__sidebar">
            <div className="Cook__other-recipes">
              <h3 className="Cook__sidebar-title">Other Recipes</h3>
              {[
                { img: other1Img, title: 'Chicken Meatball with Creamy Cheese', author: 'Andreas Paula' },
                { img: other2Img, title: 'The Creamiest Creamy Chicken...', author: 'Andreas Paula' },
                { img: other3Img, title: 'The Best Easy One Pot Chicken and Rice', author: 'Andreas Paula' }
              ].map((recipe, idx) => (
                <div className="Cook__recipe-card" key={idx}>
                  <img src={recipe.img} alt={recipe.title} />
                  <div className="Cook__recipe-info">
                    <h5>{recipe.title}</h5>
                    <span>By {recipe.author}</span>
                  </div>
                </div>
              ))}
            </div>
           <div className="Cook__banner-wrapper">
             
             <div className="blog__banner">
              <RecipeBanner
             bgImgSrc={bannerImg} 
             site="www.foodieland.com"
              />
            </div>
          </div>
          </aside>

        </div> 
      </div> 
    </section>
  );
}