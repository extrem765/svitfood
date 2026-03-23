import Hero from '@/sections/Hero'
import Button from '@/components/Button'
import Field from '@/components/Field'
import Categories from '@/layouts/Section/Categories'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      
      <Hero />
      <Categories />
    </>
  )
}
