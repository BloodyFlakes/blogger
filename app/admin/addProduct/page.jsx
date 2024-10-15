/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

function page() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: 'Rashed Al-Masri',
    authorImg: '/author_img.png',
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('image', image);
    formData.append('authorImg', data.authorImg);

    const response = await axios.post('/api/blog', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
    } else {
      toast.error('Error');
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className='px-5 pt-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor='image'>
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt='upload'
            width={140}
            height={70}
            className='mt-4'
          />
        </label>
        <input
          type='file'
          id='image'
          hidden
          required
          onChange={(e) => setImage(e.target.files[0])}
        />
        <p className='mt-4 text-xl'>Blog title</p>
        <input
          required
          type='text'
          name='title'
          value={data.title}
          placeholder='Type here'
          onChange={onChangeHandler}
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
        />
        <p className='mt-4 text-xl'>Blog description</p>
        <textarea
          rows={6}
          required
          type='text'
          name='description'
          value={data.description}
          onChange={onChangeHandler}
          placeholder='Write content here'
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
        />
        <p className='mt-4 text-xl'>Blog category</p>
        <select
          name='category'
          value={data.category}
          onChange={onChangeHandler}
          className='w-40 px-4 py-3 mt-3 text-gray-500 border '
        >
          <option value='Startup'>Startup</option>
          <option value='Technology'>Technology</option>
          <option value='Lifestyle'>Lifestyle</option>
        </select>
        <br />
        <button type='submit' className='w-40 h-12 mt-8 text-white bg-black'>
          ADD
        </button>
      </form>
    </>
  );
}

export default page;
