/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
// import './Login.css'

const Signup = () => {
 const context = useContext(myContext);
 const {loading, setLoading} = context;

 const navigate = useNavigate();

 const [userSignup, setUserSignup] = useState({
  name : "",
  email : "",
  password : "",
  role: "user",
 })

 const userSignupFunction = async () => {
   if(userSignup.name === "" || userSignup.email === "" || userSignup.password === ""){
    return toast.error("All fields are required")
   }

  setLoading(true);

  try {
    const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

    const user = {
      name : userSignup.name,
      email : users.user.email,
      uid : users.user.uid,
      role : userSignup.role,
      time : Timestamp.now(),
      date : new Date().toLocaleString(
        "en-US",
        {
           month:"short",
          day:"2-digit",
          year:"numeric"
        }
      )

    }

    //to store 
    const userReference = collection(fireDB, "user");

    addDoc(userReference, user);

    setUserSignup({
      name : "",
      email: "",
      password : ""
    })

    toast.success("Signup Successfull");

    setLoading(false);
    navigate('/login')

    
  } catch (error) {
    console.log(error)
    setLoading(false);
  }

 }

    return (
        <div className='flex justify-center items-center h-screen bg-opacity-70 '  >
          {loading && <Loader/>}
            {/* Login Form  */}
            <form className="login_Form  px-1 lg:px-8 py-6  border border-gray-400 rounded-xl shadow-2xl " >

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-gray-900 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3 ">
                  
                    <input
                        type="text"
                        placeholder='Name'
                        value={userSignup.name}
                        autoComplete="name"
                        onChange={(e) => {
                          setUserSignup({
                            ...userSignup,
                            name : e.target.value
                          })
                        }}
                        className='bg-white border border-gray-500 mx-6 pl-3 pr-12 py-2 w-95 rounded-md outline-none placeholder-gray-600 shadow-inner'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        autoComplete="email"
                        value={userSignup.email}
                        onChange={(e) => {
                          setUserSignup({
                            ...userSignup,
                            email : e.target.value
                          })
                        }}
                        className='bg-white border border-gray-500 mx-6 pl-3 pr-12 py-2 w-95 rounded-md outline-none placeholder-gray-600'

                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userSignup.password}
                        autoComplete="password"
                        onChange={(e) => {
                          setUserSignup({
                            ...userSignup,
                            password : e.target.value
                          })
                        }}
                        className='bg-white border border-gray-500 mx-6 pl-3 pr-12 py-2 w-95 rounded-md outline-none placeholder-gray-600'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                       onClick={userSignupFunction}
                        type='button'
                        className='bg-indigo-900 hover:bg-indigo-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account ? <Link className=' text-indigo-900 font-bold ' to={'/login'}>Login</Link></h2>
                </div>

            </form>
        </div>
    );
}

export default Signup;