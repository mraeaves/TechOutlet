import SideBar from './sidebar.jsx'
import TopNav from '../../components/nav/topnav.jsx'
import Footer from '../../components/footer/footer.jsx'
import './products.css'

function Products() {
  return (
    <>
    <TopNav />
    <div className='productsPage'>
      <SideBar />
      <div className='allProductsContent'>
        <h1>All Products</h1>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Products;