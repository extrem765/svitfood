import Contact from '@/sections/Contact'
import Subscribe from '@/sections/Subscribe'
import DailyRecipes from '@/sections/DailyRecipes'

export const metadata = {
  title: 'Contact',
}

const author = {
  imgSrc: '/src/assets/images/man.jpg',
  name: 'John Smith',
  date: {
    dateTime: '2022-03-15',
    label: '15 March 2025',
  },
}

export default () => {
  return (
    <>
      <Contact author={author} />

      <Subscribe />
        
      {/* Daily Recipes */}
      <DailyRecipes 
        title="Check out the delicious recipe" 
        limit={4} 
      />
    </>
  )
}