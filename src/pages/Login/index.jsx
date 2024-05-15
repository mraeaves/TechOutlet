import Footer from '../../components/footer/footer';
import TopNav from '../../components/nav/topnav';
import './login.css'

function LoginPg() {
  return (
    <>
    <TopNav />
    <div className='loginContainer'>
      <div className='loginForm'>
        <h2>Login</h2>
        <form className='loginFormEntries'>
          <input className='loginFormEmail' placeholder='Please Enter Your Email' type='email'></input>
          <input className='loginFormPwd' placeholder='Please Enter Your Password' type='password'></input>
          <button className='loginSubmitBtn' type='submit'>Submit</button>
          <p className='signUpHereTxt'>Don't Have an account? <a href='/sign-up' className='signUpHereBtnLink'>Sign up here...</a></p>
          <a href='/login' className='forgotPasswordLink'>Forgot Password?</a>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default LoginPg;