import menus from './src/menus'
import webpackSetup from './webpack.setup'
import CustomHTML from './src/components/CustomHTML'

export default {
  withSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: menus.routes,
  webpack: webpackSetup,
  Document: CustomHTML,
}
