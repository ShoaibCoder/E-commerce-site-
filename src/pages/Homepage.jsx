import Category from '../components/category/Category'
import HeroSection from '../components/heroSection/HeroSection'
import HomePageProductCard from '../components/homePageProductCard/HomePageProductCard'
import Layout from '../components/layout/Layout'


const Homepage = () => {

  return (
    
        <Layout >
        <div className="mt-6"></div>
        <HeroSection  />
        <Category/>
        <HomePageProductCard/>
        </Layout>
  
  )
}

export default Homepage