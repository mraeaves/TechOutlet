import Footer from '../../components/footer/footer';
import TopNav from '../../components/nav/topnav';
import './login.css'

function LoginPg() {
  return (
    <>
    <TopNav />
    <div className='gradient_background'>
      <div className='loginContainer'>
        <div className='loginForm'>
          <h2>Login</h2>
          <p>Enter your email and password</p>
          <form className='loginFormEntries'>
            <input className='loginFormEmail' placeholder='name@example.com' type='email'></input>
            <input className='loginFormPwd' placeholder='Password' type='password'></input>
            <button className='loginSubmitBtn' type='submit'>Sign in</button>
            <p className='signUpHereTxt'>Don't have an account? <a href='/sign-up' className='signUpHereBtnLink'>Create an account</a></p>
            <a href='/login' className='forgotPasswordLink'>Forgot your password?</a>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default LoginPg;