import React from 'react'


const HomePage = ({setLoginUser}) => {
  return (
    <>
      <h1>welcome to home page suckers</h1>
      <button style={{width : "70px", margin :"30px"}} onClick={()=> setLoginUser({})} >LOgout</button>
      {/* <Link to="/login"> <span  >Login Page</span> </Link> */}
      <br />
      {/* <Link to="/register"> <span  >Register Page</span> </Link> */}
      
    </>
  )
}

export default HomePage
