import React from 'react'
import Login from './login'
import SighUp from './signup'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import Resetpassword from './resetpass'
function Loginhandler() {
  const [signup,setsignupstate] = useState(true);
  const signupstate = useSelector((state) => state.login.loginstate);
  return (
    <>
    {signupstate==="LOGIN" ? <Login/> :signupstate==="FORGOTPASSWORD"?<Resetpassword/> :<SighUp />}
    </>
  )
}

export default Loginhandler