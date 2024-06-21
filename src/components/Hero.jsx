import Category from './Category';
import cat1 from '/public/cat1.png'
import cat2 from '/public/cat2.png'
import cat3 from '/public/cat3.png'
import cat4 from '/public/cat4.png'
import cat5 from '/public/cat5.png'

export default function Hero({ children }) {
    return (
    <header className='col-8'>
      <div className='col-start-1 col-end-5 border-b border-black'>
        {children}
      </div>
      <div className='col-start-5 -col-end-1 border border-black border-t-0 border-b-0 border-r-0'>
        <Category
          type='normal'
          title='Fresh Flowers'
          link='/shop/fresh-flower'
          img={cat1}
        />
        <Category
          type='reverse'
          title='Dried Flowers'
          link='/shop/dried-flower'
          img={cat2}
        />
        <Category
          type='normal'
          title='Live Plants'
          link='/shop/live-plants'
          img={cat3}
        />
        <Category
          type='reverse'
          title='Aroma Candles'
          link='/shop/aroma-candles'
          img={cat4}
        />
        <Category
          type='normal'
          title='Fresheners'
          link='/shop/fresheners'
          img={cat5}
        />
      </div>
    </header>
  );
}
