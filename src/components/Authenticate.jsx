import { useState } from 'react'

const Authenticate = (props) => {
  const authToken = props.token;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userName, setUserName] = useState('');

  const handleClick = async(event) => {
    event.preventDefault();
    try{
      const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/authenticate',{
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        }
      });
      const result = await response.json();
      setSuccessMessage(result.message);
      setUserName(result.data.username);
      console.log(result);
    } catch(error) {
      setError(error.message);
    }
  }
  

  return (
    <>
      <h2>Authenticate</h2>
      { successMessage && <p>Welcome, { userName }! { successMessage }</p>}
      { error && <p>{ error }</p> }
      <button onClick={ handleClick }>Authenticate Token</button>
    </>
  )
}

export default Authenticate