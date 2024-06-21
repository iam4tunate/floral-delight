const AboutUs = () => {
  return (
    <div className='col-8'>
      <div className='col-left padY border-r border-black'>
        <div className='colW sticky top-[124px] bottom-16'>
          <h2>About us</h2>
        </div>
      </div>
      <div className='col-right colW padY'>
        <p className='uppercase text-xs font-gilroyMedium'>Our Story</p>
        <h3 className='py-7'>Floral LuxeBouquets</h3>
        <p className='pb-8'>
          We are a modern local floral studio, which specializes in the design
          and delivery of unique bouquets. We have the best florists who
          carefully select each look, our studio cooperates directly with farms
          for growing different flowers, so we always have fresh flowers, which
          are collected by our florists in exquisite bouquets. We have a
          collection of fresh bouquets, collections of dried bouquets, house
          plants, as well as fragrant candles from luxury brands to create the
          perfect atmosphere. Make someone&apos;s day amazing by sending
          flowers, plants and gifts the same or next day. Ordering flowers
          online has never been easier.
        </p>
        <button className='border border-black uppercase py-4 px-8 opacity-85'>
          Learn More
        </button>
      </div>
    </div>
  );
};
export default AboutUs;
