/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import BlogTableItem from '@/Components/AdminComponents/BlogTableItem';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function page() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete('/api/blog', {
      params: {
        id: mongoId,
      },
    });
    toast.success(response.data.msg);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className='flex-1 px-5 pt-5 sm:pt-12 sm:pl-16'>
      <h1>All blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='hidden px-6 py-3 sm:block'>
                Author name
              </th>
              <th scope='col' className='px-6 py-3'>
                Blog title
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => {
              return (
                <BlogTableItem
                  key={index}
                  author={item.author}
                  title={item.title}
                  mongoId={item._id}
                  authorImg={item.authorImg}
                  date={item.date}
                  deleteBlog={deleteBlog}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
