import { useState } from 'react'

const SignUpForm = (props) => {
  const [createUserName, setCreateUserName] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: createUserName,
          password: createPassword
        })
      });
      const createAccountObject = await response.json();
      props.setToken(createAccountObject.token);

    } catch(error) {
    setError(error.message);
    }
} 

  return (
    <>
      <h2>Sign Up</h2>
      { error && <p>{ error }</p> }
      <form onSubmit={handleSubmit}>
        <input placeholder="create a username" value={createUserName}
          onChange={(event) => {setCreateUserName(event.target.value)}} />
        <input placeholder="create a password" value={createPassword}
          onChange={(event) => {setCreatePassword(event.target.value)}} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm