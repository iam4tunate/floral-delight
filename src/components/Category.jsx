import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Category = ({ type, title, link, img }) => {
  return (
    <div className='relative grid grid-cols-2 h-[320px]'>
      <div
        className={`border-black border-b flexCenter flex-col ${
          type === 'reverse' ? 'order-2 border-l' : 'border-r'
        }`}
      >
        <h3 className='text-[33px]'>{title}</h3>
        <Link
          href={link}
          className={`absolute bottom-8 flexCenter gap-x-2 ${
            type === 'reverse' ? 'flex-row-reverse' : ''
          }`}
        >
          <span className='opacity-70 font-gilroyBold'>Shop now</span>
          {type === 'reverse' ? <FaArrowLeftLong /> : <FaArrowRightLong />}
        </Link>
      </div>
      <div
        className={`relative flex-1 bg-blue-300`}
      >
        <Image
          fill
          src={img}
          className='object-cover w-full h-full'
          alt='Fresh Flower'
        />
      </div>
    </div>
  );
};
export default Category;
