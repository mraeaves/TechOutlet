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
        <form className='signupFormEntries'>
        <input className='signupFormFullName' placeholder='Please Enter Your Full Name' type='email'></input>
          <input className='signupFormEmail' placeholder='Please Enter Your Email' type='email'></input>
          <input className='signupFormPwd' placeholder='Please Enter a Password' type='password'></input>
          <button className='signupSubmitBtn' type='submit'>Submit</button>
          <p className='loginHereTxt'>Already have an account? <a href='/login' className='loginHereBtnLink'>Login here...</a></p>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default SignUp;