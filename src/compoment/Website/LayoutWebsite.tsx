import { Outlet } from 'react-router-dom'
import '../../style/index.scss'
import FooterWebsite from './FooterWebsite'
import HeaderWebsite from './HeaderWebsite'
const LayoutWebsite = () => {
  return (
<div id="app">
  <HeaderWebsite />
  <Outlet />
  <FooterWebsite />
</div>

  )
}

export default LayoutWebsite
