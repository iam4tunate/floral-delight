import Image from 'next/image';
import shop from '../../public/shop.png';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { CgPinBottom } from 'react-icons/cg';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { ImPinterest2 } from 'react-icons/im';
import { LuFacebook } from 'react-icons/lu';
import { LiaTelegram } from 'react-icons/lia';

const LetsTalk = () => {
  return (
    <div className='col-8'>
      <div className='col-left'>
        <div className='padY colW'>
          <h2>Let&apos;s Talk</h2>
          <p className='text-base pt-5 pb-4'>
            Enter your number and we&apos;ll call you back ASAP to help you with
            any questions or to place an order
          </p>
          <form className='space-x-4 flex items-center'>
            <input
              type='text'
              placeholder='floralluxebouquets@petals.com'
              className='border border-black py-4 px-3 w-full placeholder:text-sm text-sm'
            />
            <button className='uppercase bg-black border border-black text-white py-4 px-8 whitespace-nowrap'>
              Reach Us
            </button>
          </form>
        </div>
        <div className='grid grid-cols-2'>
          <div className='border-y border-black border-r'>
            <h3 className='text-center py-6'>Phone</h3>
            <div className='border-t border-black h-[230px] flexCenter flex-col gap-y-3'>
              <span className='flex items-center gap-x-2'>
                <BiSolidPhoneCall className='text-xl' />
                <p className='text-base font-gilroyMedium'>+380980099777</p>
              </span>
              <span className='flex items-center gap-x-2'>
                <BiSolidPhoneCall className='text-xl' />
                <p className='text-base font-gilroyMedium'>+380980099111</p>
              </span>
            </div>
          </div>
          <div className='border-y border-black'>
            <h3 className='text-center py-6'>Address</h3>
            <div className='border-t border-black h-[230px] flexCenter flex-col gap-y-3'>
              <p className='font-gilroyMedium text-sm'>
                OPENING HOURS: 8 TO 11 P.M.
              </p>
              <div className='flex items-start gap-x-1'>
                <CgPinBottom className='text-xl' />
                <p className='text-base font-gilroyMedium'>
                  15/4 Khreshchatyk Street, Kyiv
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-right relative flex-1 border-b border-black'>
        <Image fill src={shop} alt='shop' className='flex-1 object-cover' />
        <div className='absolute left-0 right-0 bottom-0 grid grid-cols-2 bg-white'>
          <h3 className='text-center py-6 border-x border-black'>Follow us</h3>
          <div className='py-6 flex items-center justify-between colW'>
            <FaInstagram className='text-xl' />
            <ImPinterest2 className='text-xl' />
            <LuFacebook className='text-xl' />
            <FaXTwitter className='text-xl' />
            <LiaTelegram className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LetsTalk;
