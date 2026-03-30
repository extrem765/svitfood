import blog from '@/sections/blog'
import Subscribe from '@/sections/Subscribe'


export const metadata = {
  title: 'blog',
}

export default () => {
  return (
    <>
      <blog />
        <Subscribe />
    </>
  )
}