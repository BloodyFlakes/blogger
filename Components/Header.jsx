import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Header() {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);

    const response = await axios.post('/api/email', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail('');
    } else {
      toast.error('Error');
    }
  };

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
          Stay ahead with the latest insights, tips, and trends—subscribe now to
          get fresh and exciting content delivered right to your inbox!
        </p>
        <form
          onSubmit={onSubmitHandler}
          className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_-0px_#000000]'
        >
          <input
            type='email'
            value={email}
            className='pl-4 outline-none'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
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
