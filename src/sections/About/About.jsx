import './About.scss'
import { Image } from 'minista'
import Button from '../../components/Button/Button'

export default () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about__title">Contact us</h2>

        <div className="about__inner">
          <div className="about__image-wrap">
            <Image src="/src/assets/images/contact/1.jpg" alt="Chef" />
          </div>

          <form className="about__form">
            <div className="about__row">
              <div className="about__field">
                <label className="about__label">NAME</label>
                <input className="about__input" type="text" name="name" placeholder="Enter your name..." />
              </div>
              <div className="about__field">
                <label className="about__label">EMAIL ADDRESS</label>
                <input className="about__input" type="email" name="email" placeholder="Your email address..." />
              </div>
            </div>

            <div className="about__row">
              <div className="about__field">
                <label className="about__label">SUBJECT</label>
                <input className="about__input" type="text" name="subject" placeholder="Enter subject..." />
              </div>
              <div className="about__field">
                <label className="about__label">ENQUIRY TYPE</label>
                <div className="about__select-wrap">
                  <select className="about__select" name="enquiryType">
                    <option>Advertising</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="about__field about__field--full">
              <label className="about__label">MESSAGES</label>
              <textarea className="about__textarea" name="messages" placeholder="Enter your messages..." />
            </div>

            {/* Передаємо клас about__submit, щоб стилізувати кнопку саме тут */}
            <Button type="submit" className="about__submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}