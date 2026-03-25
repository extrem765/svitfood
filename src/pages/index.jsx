import Hero from '@/sections/Hero'
import Button from '@/components/Button'
import Field from '@/components/Field'
import Categories from '/src/sections/Categories'
import Recipes from '@/sections/Recipes'
import Subscribe from '@/sections/Subscribe'
import Banner from '@/sections/Banner'
import InstagramView from '@/sections/InstagramView'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      
      <Hero />
      <Categories />
      <Recipes />
      <Banner />
       <InstagramView />
     <Subscribe />
     
    </>
  )
}
