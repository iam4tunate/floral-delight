import AppLayout from '@/components/AppLayout';
import Hero from '@/components/Hero';

export default function Page() {
  return (
    <AppLayout>
      <Hero>
        <div className='sticky top-[80px] bottom-0 colW'>
          <div className='flexCenter h-screen'>
            <h1 className='leading-tight'>
              Choose a
              <br />
              Сategory
            </h1>
          </div>
        </div>
      </Hero>
    </AppLayout>
  );
}
