import { useState } from 'react';
import BlogItem from './BlogItem';
import { blog_data } from '@/Assets/assets';

function BlogList() {
  const [menu, setMenu] = useState('All');

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button
          onClick={() => setMenu('All')}
          className={menu === 'All' ? 'px-4 py-1 text-white bg-black rounded-sm' : ''}
        >
          All
        </button>
        <button
          onClick={() => setMenu('Technology')}
          className={menu === 'Technology' ? 'px-4 py-1 text-white bg-black rounded-sm' : ''}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu('Startup')}
          className={menu === 'Startup' ? 'px-4 py-1 text-white bg-black rounded-sm' : ''}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu('Lifestyle')}
          className={menu === 'Lifestyle' ? 'px-4 py-1 text-white bg-black rounded-sm' : ''}
        >
          Lifestyle
        </button>
      </div>

      <div className='flex flex-wrap justify-around gap-1 mb-16 gap-y-10 xl:mx-24'>
        {blog_data
          .filter((blog) => (menu === 'All' ? true : blog.category === menu))
          .map((item, index) => (
            <BlogItem
              id={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              image={item.image}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}

export default BlogList;
