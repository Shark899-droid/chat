import { ImCross } from 'react-icons/im';
import { VscDebugBreakpointData } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Chat = () => {
  return (
    <div className='flex justify-center align-middle h-screen w-screen'>
      <div className='w-1/4 flex flex-col justify-center items-center'>
        <div className='flex justify-between items-center w-full bg-blue-500 h-24 px-6 rounded-t-lg'>
          <div className='flex justify-center items-center'>
            <VscDebugBreakpointData className='mr-4 text-green-400' />
            <span className='text-white text-3xl font-semibold'>dfsfsd</span>
          </div>
          <div>
            <Link to='/'>
              <ImCross
                style={{
                  color: 'white',
                }}
              />
            </Link>
          </div>
        </div>
        <div className='bg-white w-full h-96'></div>
        <hr className='border-none w-full bg-gray-300 h-0.5' />
        <div className='w-full h-24 flex justify-between items-center bg-white'>
          <input
            type='text'
            placeholder='Type a message...'
            className='placeholder-gray-600 pl-6 w-full h-full border-none text-2xl'
          />
          <button type='button' className='text-white bg-blue-500 h-full w-28'>
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
