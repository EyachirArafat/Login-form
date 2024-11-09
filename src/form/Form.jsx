import { useState } from "react";

function LogIn(){
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [SubmittedData, setSubmittedData] = useState({
    username: "",
    email: "",
    password: ""
  });

  
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData((preData)=>({
      ...preData,
      [name]: value
    }))
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    setSubmittedData(formData)
  }

  return(
    <>
      <div className="flex justify-center items-center h-screen m-auto flex-col mx-5">

        <form onSubmit={handleSubmit} className="bg-slate-200 w-full max-w-md ">
          <div className="m-6 space-y-4">
            <h2 className="text-center text-2xl font-semibold mb-4">React LogIn Form</h2>
            <div className="space-y-1">
              <label htmlFor="username" className="block text-xl font-mono cursor-pointer" required>Username:</label>
              <input onChange={handleChange} className="w-full block p-2 text-xl rounded-md focus:outline-indigo-600" type="text" placeholder="Enter your username" name="username" value={formData.username} id="username"/>
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xl font-mono cursor-pointer" required>Email:</label>
              <input onChange={handleChange} className="w-full block p-2 text-xl rounded-md focus:outline-indigo-600" type="email" placeholder="Enter your email address" name="email" value={formData.email} id="email"/>
            </div>
            <div className="space-y-1 pb-5">
              <label htmlFor="password" className="block text-xl font-mono cursor-pointer" required>Password:</label>
              <input onChange={handleChange} className="w-full block p-2 text-xl rounded-md focus:outline-indigo-600" type="password" placeholder="Enter your password" name="password" value={formData.password} id="password"/>
            </div>
            <button type="submit" className="text-center bg-indigo-500 w-full p-2 text-white text-xl font-mono rounded-lg">Submit Now</button>
          </div>
        </form>
        <div className="bg-slate-200 w-full max-w-md mt-2 mx-5">
          <div className="mx-6 my-4 space-y-2">
            <h3 className="text-center font-bold text-xl border-black border-b pb-3">Submitted Data</h3>
            <p className="text-lg font-medium">Username: {SubmittedData.username}</p>
            <p className="text-lg font-medium">Email: {SubmittedData.email}</p>
            <p className="text-lg font-medium">Password: {SubmittedData.password}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn;