import AppLayout from '@/components/AppLayout';
import { getBanner, getProducts } from '@/lib/helper';
import Image from 'next/image';

export default async function Page({ params }) {
  console.log(params.shopId);
  const products = await getProducts(params.shopId);
  const banner = await getBanner(params.shopId);
  console.log('products', products);

  return (
    <AppLayout>
      <header className='col-8'>
        <div className='col-start-1 col-end-5 border-b border-black'>
          <div className='sticky top-[80px] bottom-0'>
            <div
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.43601190476190477) 100%, rgba(0,0,0,0.542454481792717) 100%),url(${banner.image})`,
              }}
              className='flexCenter h-screen bg-cover'
            >
              <h1 className='text-white text- font-gilroyBold capitalize'>
                {banner.title}
              </h1>
            </div>
          </div>
        </div>
        <div className='col-start-5 -col-end-1 border border-black border-t-0 border-b-0 border-r-0'>
          <div className='relative grid grid-cols-2'>
            {products.map((item) => (
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                key={item.id}
                className='relative bg-cover w-[305px] h-[310px] bg-bottom even:border-l border-black border-b'
              >
                <div className='absolute bottom-3 left-0 right-0 flexCenter flex-col font-gilroyMedium'>
                  <span className='capitalize pb-1'>
                    {item.name}
                  </span>
                  <span className='font- text-sm'>
                    N{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </AppLayout>
  );
}
