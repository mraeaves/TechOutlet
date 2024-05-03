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
          <p className='signUpHereTxt'>Don't Have an account? <a href='/SignUp'>Sign up here...</a></p>
          <a href='/SignUp' className='forgotPasswordLink'>Forgot Password?</a>
        </form>
      </div>
    </div>
    </>
  )
}

export default LoginPg;