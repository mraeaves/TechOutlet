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
        <p>We can't seem to find the page you're looking for.</p>
        <a href='/'>Go To Homepage<i class="fa fa-arrow-circle-right home-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default NoPage;
