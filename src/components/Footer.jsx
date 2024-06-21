import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { ImPinterest2 } from 'react-icons/im';
import { LiaTelegram } from 'react-icons/lia';
import { LuFacebook } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className='col-8 h-[400px] border-b border-black'>
      <div className='col-start-1 col-span-2 border-r border-black px-8 pt-10'>
        <p className='text-sm pb-6'>
          Remember to offer beautiful flowers from Kyiv Florist Studio
          Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
          No spam or sharing your address
        </p>
        <form className='space-y-4 flex flex-col items-center'>
          <input
            type='text'
            placeholder='Your Email'
            className='border border-black border-opacity-50 py-3 px-3 w-full placeholder:text-sm text-sm'
          />
          <button className='uppercase bg-black border border-black text-white py-3.5 w-full whitespace-nowrap'>
            Remind
          </button>
        </form>
      </div>
      <div className='col-start-3 col-span-2 border-r border-black px-8 pt-10'>
        <h4 className='text-lg text-gray-400 pb-2.5'>Contact Us</h4>
        <div className=''>
          <span className='text-gray-400 text-sm'>Address</span>
          <p className='text-sm font-gilroyMedium pt-1'>
            15/4 Khreshchatyk Street, Kyiv
          </p>
        </div>
        <div className='py-4'>
          <span className='text-sm text-gray-400'>Phone</span>
          <p className='text-sm font-gilroyMedium pt-1'>+380980099777</p>
        </div>
        <div className=''>
          <span className='text-sm text-gray-400'>General Enquiry:</span>
          <p className='text-sm font-gilroyMedium pt-1'>
            Kiev.Florist.Studio@gmail.com
          </p>
        </div>
        <div className='pt-5'>
          <span className='text-lg text-gray-400'>Follow Us</span>
          <div className='flex items-center justify-between pt-2.5'>
            <FaInstagram className='text-xl' />
            <ImPinterest2 className='text-xl' />
            <LuFacebook className='text-xl' />
            <FaXTwitter className='text-xl' />
            <LiaTelegram className='text-2xl' />
          </div>
        </div>
      </div>
      <div className='col-start-5 col-span-2 border-r border-black px-8 pt-10'>
        <div className='pb-6'>
          <h4 className='text-lg text-gray-400 pb-2.5'>Shop</h4>
          <ul className='text-sm space-y-2 opacity-80'>
            <li>All Products</li>
            <li>Fresh Flowers</li>
            <li>Dried Flowers</li>
            <li>Live Plants</li>
            <li>Aroma Candles</li>
            <li>Designer Vases</li>
            <li>Freshener Diffuser</li>
          </ul>
        </div>
        <div className=''>
          <h4 className='text-lg text-gray-400 pb-2.5'>Service</h4>
          <ul className='text-sm space-y-2 opacity-80'>
            <li>Flower Subscription</li>
            <li>Wedding & Event Decor</li>
          </ul>
        </div>
      </div>
      <div className='col-start-t col-span-2 px-8 pt-10'>
        <div className='pb-6'>
          <h4 className='text-lg text-gray-400 pb-2.5'>About Us</h4>
          <ul className='text-sm space-y-2 opacity-80'>
            <li>Our Story</li>
            <li>Blog</li>
          </ul>
        </div>
        <ul className='text-sm space-y-2 opacity-80'>
          <li>Shpping & returns</li>
          <li>Terms & condtions</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
