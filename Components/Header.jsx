import { assets } from '@/Assets/assets';
import Image from 'next/image';

function Header() {
  return (
    <div className='px-5 py-5 md:px-12 lg:px-28'>
      <div className='flex items-center justify-between'>
        <Image src={assets.logo} alt='logo' className='w-[130px] sm:w-auto' />
        <button className='flex items-center gap-2 px-3 py-1 font-medium border border-black border-solid sm:py-3 sm:px-6 shadow-[-7px_7px_-0px_#000000]'>
          Get started <Image src={assets.arrow} alt='arrow' />
        </button>
      </div>
      <div className='my-8 text-center'>
        <h1 className='text-3xl font-medium sm:text-5xl'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nemo nulla ducimus optio
        </p>
        <form
          className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_-0px_#000000]'
          action=''
        >
          <input type='email' placeholder='Enter your email' className='pl-4 outline-none' />
          <button
            type='submit'
            className='px-4 py-4 border-l border-black sm:px-8 active:bg-gray-600 active:text-white'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
