// // import {useHistory} from 'react-router-dom'
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import jwt from 'jsonwebtoken'

const Dashbard = () => {

    // const navigate = useNavigate();

    // async function populateQuote(){
    //     const req = await fetch('http://localhost:1337/api/quote',{
    //         headers: {
    //             'x-access-token' : localStorage.getItem('token'),
    //         },
    //     })
    //     const data = req.json()
    //     console.log(data)
    // }

    // useEffect(() => {
    //     const token = localStorage.getItem("token")

    //     if(token){
    //         const user = jwt.decode(token)
    //         if(!user) {
    //             localStorage.removeItem('token')
    //             navigate('/dashboard')
    //         }
    //         else{
    //             populateQuote()
    //         }
            
    //     }

    // }, [])


  return (
    <div>Dashbard</div>
  )
}

export default Dashbard