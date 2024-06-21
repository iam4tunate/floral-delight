import { signInAction } from '@/lib/action';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function Page() {
  return (
    <div className='w-full h-screen min-h-screen flex items-center col-8'>
      <div className='py-16 col-start-3 col-end-7 border border-black'>
        <div className='colW'>
          <h2>Greetings! Welcome to luxury gift shop.</h2>
          <div className='pt-12 pb-8'>
            <p className='font-gilroyMedium pb-2'>
              Continue without signing in.
            </p>
            <Link href='/'>
              <div className='w-full py-4 bg-black text-white uppercase text-center font-gilroyMedium'>
                Continue Exploring
              </div>
            </Link>
          </div>
          <div className=''>
            <p className='font-gilroyMedium pb-2'>
              Sign in via Google & have access to all app features.
            </p>
            <form action={signInAction}>
              <button className='w-full py-4 text-black uppercase text-center border border-black flex items-center justify-center gap-x-3 cursor-pointer'>
                <FcGoogle className='text-2xl' />
                <p className='font-gilroyMedium'>Continue with Google</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
