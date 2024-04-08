import BannerWebsite from '../compoment/Website/BannerWebsite'
import BlogWebsite from '../compoment/Website/BlogWebsite'
import NewWebsite from '../compoment/Website/NewWebsite'
import RoleWebsite from '../compoment/Website/RoleWebsite'
import ShopWebsite from '../compoment/Website/ShopWebsite'

const HomePage = () => {
  return (
    <div id="app">
  <BannerWebsite />
  <NewWebsite />
  <ShopWebsite />
  <BlogWebsite />
  <RoleWebsite />
</div>
  )
}

export default HomePage
