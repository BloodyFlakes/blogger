import { blog_data } from '@/Assets/assets';
import BlogItem from './BlogItem';

function BlogList() {
  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button className='px-4 py-1 text-white bg-black rounded-sm'>All</button>
        <button>Technology</button>
        <button>Startup</button>
        <button>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 mb-16 gap-y-10 xl:mx-24'>
        {blog_data.map((item, index) => (
          <BlogItem
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
