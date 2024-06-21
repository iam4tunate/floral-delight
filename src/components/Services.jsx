import Image from 'next/image';
import service from '../../public/service.png';
import serviceBg from '../../public/serviceBg.png';

const Services = () => {
  return (
    <div className='col-8'>
      <h2 className='col-start-1 -col-end-1 text-center py-16'>Our Service</h2>
      <div className='h-[500px] col-left padY border-t border-black relative flex-1 bg-blue-100'>
        <Image
          fill
          src={service}
          alt='service'
          className='object-cover object-top flex-1'
        />
      </div>
      <div className='col-right padY border-t border-l border-black flexCenter'>
        <div className='colW flexCenter flex-col text-center'>
          <p className='uppercase text-xs font-gilroyMedium'>Service</p>
          <h2 className='py-4'>Flower Subcriptions</h2>
          <p className='pb-10'>
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <button className='border border-black uppercase py-4 px-6 opacity-85'>
            Subscribe Now
          </button>
        </div>
      </div>
      <div className='h-[610px] relative flex-1 col-start-1 -col-end-1'>
        <div className='w-full h-full -z-10 flex items-center justify-center'>
          <Image
            fill
            src={serviceBg}
            alt='service bg'
            className='object-cover object-bottom flex-1 w-full'
          />
          <div className='z-10 w-[50%] mx-auto flexCenter flex-col text-center text-white'>
            <p className='uppercase text-xs font-gilroyMedium opacity-100'>
              Service
            </p>
            <h2 className='py-4 opacity-100'>Wedding & Event Decor</h2>
            <p className='pb-10 opacity-100 colW'>
              Let our team of expert florists and designers create stunning,
              on-trend floral décor for your special day. Trust us to bring your
              vision to life.
            </p>
            <button className='border border-white uppercase py-4 px-6 opacity-85'>
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
