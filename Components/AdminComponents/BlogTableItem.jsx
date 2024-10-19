import { assets } from '@/Assets/assets';
import Image from 'next/image';

function BlogTableItem({ authorImg, title, author, date, deleteBlog, mongoId }) {
  const BlogDate = new Date(date);

  return (
    <tr className='bg-white border-b'>
      <th
        scope='row'
        className='items-center hidden gap-3 px-6 py-4 font-medium text-gray-900 sm:flex whitespace-nowrap'
      >
        <Image
          width={40}
          height={40}
          alt='profile-icon'
          src={authorImg ? authorImg : assets.profile_icon}
        />
        <p>{author ? author : 'No author'}</p>
      </th>
      <td className='px-6 py-4'>{title ? title : 'no title'}</td>
      <td className='px-6 py-4'>{BlogDate.toDateString()}</td>
      <td onClick={() => deleteBlog(mongoId)} className='py-4 cursor-pointer px-11'>
        x
      </td>
    </tr>
  );
}

export default BlogTableItem;
