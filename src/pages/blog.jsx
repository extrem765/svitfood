import Blog from '@/sections/blog'
import Subscribe from '@/sections/Subscribe'

export const metadata = {
  title: 'blog',
}

export default () => {
  return (
    <>
      <Blog />
      <Subscribe />
    </>
  )
}