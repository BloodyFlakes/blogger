/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function page({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog', {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className='px-5 py-5 bg-gray-200 md:px-12 lg:px-28'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              src={assets.logo}
              alt='logo'
              width={180}
              className='w-[130px] sm:w-auto'
            />
          </Link>
          <button className='flex items-center gap-2 px-3 py-1 font-medium sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
            Get started <Image src={assets.arrow} alt='arrow' />
          </button>
        </div>
        <div className='my-24 text-center'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            alt='author'
            width={60}
            height={60}
            className='mx-auto mt-6 border border-white rounded-full'
          />
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>
            {data.author}
          </p>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image
          src={data.image}
          alt='blog image'
          width={1280}
          height={720}
          className='border-4 border-white'
        />

        <div
          className='blog-content'
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        <div className='my-24'>
          <p className='my-4 font-semibold text-black'>
            Share this article on social media
          </p>
          <div className='flex'>
            <Image src={assets.facebook_icon} alt='facebook' width={50} />
            <Image src={assets.twitter_icon} alt='twitter' width={50} />
            <Image src={assets.googleplus_icon} alt='google' width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
}

export default page;
