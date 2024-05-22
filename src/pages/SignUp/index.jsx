import Footer from '../../components/footer/footer';
import TopNav from '../../components/nav/topnav';
import './signup.css'

function SignUp() {
  return (
    <>
    <TopNav />
    <div className='signupContainer'>
      <div className='signupForm'>
        <h2>Sign Up</h2>
        <p>Enter your name, email and password</p>
        <form className='signupFormEntries'>
        <input className='signupFormFullName' placeholder='Joe Bloggs' type='email'></input>
          <input className='signupFormEmail' placeholder='name@example.com' type='email'></input>
          <input className='signupFormPwd' placeholder='Password' type='Password'></input>
          <button className='signupSubmitBtn' type='submit'>Create account</button>
          <p className='loginHereTxt'>Already have an account? <a href='/login' className='loginHereBtnLink'>Login</a></p>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default SignUp;