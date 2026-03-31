import Cook from '@/sections/Cook'
import Subscribe from '@/sections/Subscribe'
import AuthorCard from '@/components/AuthorCard'
import Banner from '@/sections/Banner'
import DailyRecipes from '@/sections/DailyRecipes'

export default function CookPage() {
  return (
    <>
      <Cook />
      <Subscribe />
       <DailyRecipes 
              title="Check out the delicious recipe" 
              limit={4} 
            />
    </>
  )
}