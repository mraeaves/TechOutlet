import Footer from '../../components/footer/footer';
import TopNav from '../../components/nav/topnav';
import './404.css'

function NoPage() {
  return (
    <>
    <TopNav />
    <div className='Page404'>
      <div className='errorContent'>
        <h1>404</h1>
        <p>It appears the page you are looking for can't be found</p>
        <a href='/'>Got To Homepage</a>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default NoPage;