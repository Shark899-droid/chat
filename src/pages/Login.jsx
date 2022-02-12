import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex justify-center align-middle h-screen w-screen'>
      <div className='flex flex-col justify-center items-center w-56'>
        <h1 className='text-white text-6xl'>Join</h1>
        <hr className='w-72 my-10 border-none h-0.5 bg-white' />
        <input type='text' placeholder='Name' className='h-16 w-72 pl-4 mb-8' />
        <input type='text' placeholder='Room' className='h-16 w-72 pl-4 mb-8' />
        <button
          type='button'
          className='w-72 rounded-lg bg-sky-900 h-16 text-white font-bold'
        >
          <Link to='/chat/423w4' className='no-underline'>
            SIGN IN
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
