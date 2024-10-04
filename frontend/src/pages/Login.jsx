
// import React, { useState } from 'react';

// export const Login = () => {
//   const [state, setState] = useState('sign Up'); // Initial state is 'signup'
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     // Your form submission logic here
//   };

//   return (
//     <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
//       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
//         <p className='text-2xl font-semibold'>{state === 'sign Up' ? "Create Account" : "Login"}</p>
//         <p>Please {state === 'sign Up' ? "sign up" : "log in"} to book an appointment</p>
//         {
//             state === "Sign Up" &&
//             <div className='w-full'>
//             <p>Full Name</p>
//             <input
//               className='border border-zinc-300 rounded w-full p-2 mt-1'
//               type="text"
//               onChange={(e) => setName(e.target.name)} // Update the state with the value, not the name
//               value={name}
//               required
//             />
//           </div>
//         }
//         {/* {state === 'signup' && ( */}
          
//         {/* )} */}

//         <div className='w-full'>
//           <p>Email</p>
//           <input
//             className='border border-zinc-300 rounded w-full p-2 mt-1'
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>

//         <div className='w-full'>
//           <p>Password</p>
//           <input
//             className='border border-zinc-300 rounded w-full p-2 mt-1' 
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>

//         <button type="submit" className='bg-primary text-white w-full py-2 rounded-md'>
//           {state === 'signup' ? "Create Account" : "Login"}
//         </button>

//         {/* Button to toggle between "Create Account" and "Login" */}
//         {/* <button 
//           className='text-primary w-full py-2 rounded-md mt-2' 
//           type="button" 
//           onClick={() => setState(state === 'signup' ? 'login' : 'signup')}
//         > */}
//           {/* {state === 'signup' ? "Already have an account? Login" : "New user? Sign up"}
//         </button> */}

//         {/* Toggle between showing login and signup suggestions */}
//         {
//           state === "signup"
//             ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
//             : <p>Create an new account?<span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
//         }
//       </div>
//     </form>
//   );
// };
import React, { useState } from 'react';

export const Login = () => {
  const [state, setState] = useState('signup'); // Use lowercase 'signup' for consistency
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        {/* Corrected comparison for 'signup' state */}
        <p className='text-2xl font-semibold'>{state === 'signup' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'signup' ? "sign up" : "log in"} to book an appointment</p>
        
        {/* Full name field only shows in signup state */}
        {
          state === "signup" && (
            <div className='w-full'>
              <p>Full Name</p>
              <input
                className='border border-zinc-300 rounded w-full p-2 mt-1'
                type="text"
                onChange={(e) => setName(e.target.value)} // Set value correctly
                value={name}
                required
              />
            </div>
          )
        }

        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button type="submit" className='bg-primary text-white w-full py-2 rounded-md'>
          {state === 'signup' ? "Create Account" : "Login"}
        </button>

        {/* Toggle between signup and login */}
        {
          state === "signup"
            ? <p>Already have an account? <span onClick={() => setState('login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create a new account? <span onClick={() => setState('signup')} className='text-primary underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  );
};
