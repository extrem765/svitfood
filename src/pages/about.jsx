import About from '@/sections/About'
import DailyRecipes from '@/sections/DailyRecipes'
import Subscribe from '@/sections/Subscribe'

export default () => {
  return (
    <>
      <About />
      <Subscribe />
      
      {/* Тепер ці пропси "зайдуть" у компонент */}
      <DailyRecipes 
        title="Check out the delicious recipe" 
        limit={4} 
      />
    </>
  )
}