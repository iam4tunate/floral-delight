import { auth } from '@/lib/auth';
import AboutUs from '@/components/AboutUs';
import LetsTalk from '@/components/LetsTalk';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Image from 'next/image';
import hero_img from '/public/img-hero.png';
import AppLayout from '@/components/AppLayout';
import Hero from '@/components/Hero';
import flower from '/public/flower.png'

export default async function Page() {
  const session = await auth();
  console.log('session', session);
  return (
    <AppLayout>
      <Hero>
        <div className='sticky top-[120px] bottom-0 h-fit colW pt-10 pb-16'>
          <div className='border-b border-black pb-8'>
            <div className='relative text-8xl opacity-85 font-gilroyBold'>Floral Delight 
            <Image src={flower}
                alt='hero'
                width={60}
                className='absolute right-32 bottom-16'/>
            </div>
            <p className='text-base pt-6'>
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
              Spread Joy with Our{' '}
              <span className='italic'>Online Flower Delivery Service</span>
            </p>
          </div>
          <div className='pt-8 grid grid-cols-2 items-end'>
            <figure className='relative aspect-auto h-[186px] w-[236px] border-r border-black pr-6'>
              <Image
                fill
                src={hero_img}
                alt='hero'
                className='flex-1 object-cover object-top pr-6'
              />
            </figure>
            <p className='text-xs'>
              Experience the joy of giving with our modern floral studio. Order
              online and send fresh flowers, plants and gifts today.
            </p>
          </div>
        </div>
      </Hero>
      <AboutUs />
      <WhyUs />
      <LetsTalk />
      <Services />
    </AppLayout>
  );
}
