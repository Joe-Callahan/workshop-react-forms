import { useState } from 'react'

const [loginUserName, setLoginUserName] = useState('');
const [loginPassword, setLoginPassword] = useState('');
const [loginError, setLoginError] = useState(null);

const SignUpForm = () => {
  return (
    // Step 8***************
    <>
      <h2>Sign Up</h2>
      <form>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm