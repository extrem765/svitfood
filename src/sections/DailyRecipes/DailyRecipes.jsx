import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import RecipeCard from '@/components/RecipeCard'
import items from './data.json'

export default (props) => {
  // Дістаємо title та limit з пропсів
  // Якщо їх не передали, ставимо стандартні значення
  const { 
    title = "Try this delicious recipe to make your day", 
    limit = items.length 
  } = props

  return (
    <Section
      title={title} // Передаємо отриманий title далі в Section
      titleId="daily-recipes"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
    >
      <Grid columns={4}>
        {items.slice(0, limit).map((item) => {
          const { type, ...rest } = item
          return (
            <RecipeCard
              mode="transparent"
              titleExtraClassName="h6"
              {...rest}
              key={item.title}
            />
          )
        })}
      </Grid>
    </Section>
  )
}