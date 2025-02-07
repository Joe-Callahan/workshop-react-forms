import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>Asadude</h1>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token}/>
    </>
  )
}

export default App