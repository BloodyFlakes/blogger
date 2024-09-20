/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function page({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className='px-5 py-5 bg-gray-200 md:px-12 lg:px-28'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image src={assets.logo} alt='logo' width={180} className='w-[130px] sm:w-auto' />
          </Link>
          <button className='flex items-center gap-2 px-3 py-1 font-medium sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
            Get started <Image src={assets.arrow} alt='arrow' />
          </button>
        </div>
        <div className='my-24 text-center'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
          <Image
            src={data.author_img}
            alt='author'
            width={60}
            height={60}
            className='mx-auto mt-6 border border-white rounded-full'
          />
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
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
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>
        <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>
          Before you can manage your lifestyle, you must have a clear understanding of what you want
          to achieve. Start by reflection on your values, aspirations, and long-term goals.
        </p>
        <p className='my-3'>
          Before you can manage your lifestyle, you must have a clear understanding of what you want
          to achieve. Start by reflection on your values, aspirations, and long-term goals.
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>
          Before you can manage your lifestyle, you must have a clear understanding of what you want
          to achieve. Start by reflection on your values, aspirations, and long-term goals.
        </p>
        <p className='my-3'>
          Before you can manage your lifestyle, you must have a clear understanding of what you want
          to achieve. Start by reflection on your values, aspirations, and long-term goals.
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>
          Before you can manage your lifestyle, you must have a clear understanding of what you want
          to achieve. Start by reflection on your values, aspirations, and long-term goals.
        </p>
        <p className='my-3'>
          Before you can manage your lifestyle, you must have a clear understanding of what you want
          to achieve. Start by reflection on your values, aspirations, and long-term goals.
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>Conclusion:</h3>
        <p className='my-3'>
          Before you can manage your lifestyle, you must have a clear understanding of what you want
          to achieve. Start by reflection on your values, aspirations, and long-term goals.
        </p>
        <div className='my-24'>
          <p className='my-4 font-semibold text-black'>Share this article on social media</p>
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
