import { assets } from '@/Assets/assets';
import Image from 'next/image';

function Footer() {
  return (
    <div className='flex flex-col items-center justify-around gap-2 py-5 bg-black sm:gap-0 sm:flex-row'>
      <Image src={assets.logo_light} alt='logo-light' width={120} />
      <p className='text-sm text-white'>All right reserved. Copyright @Blogger</p>
      <div className='flex'>
        <Image src={assets.facebook_icon} alt='facebook' width={40} />
        <Image src={assets.twitter_icon} alt='twitter' width={40} />
        <Image src={assets.googleplus_icon} alt='google' width={40} />
      </div>
    </div>
  );
}

export default Footer;
