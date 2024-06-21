import Link from 'next/link';
import { auth } from '@/lib/auth';
import Image from 'next/image';
import { GoSignOut } from 'react-icons/go';
import { signOutAction } from '@/lib/action';

export default async function Navbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className='bg- h-[80px] fixed z-50 left-0 right-0 col-8 border-b border-black bg-white'>
      <span className='col-start-1 col-end-2 border-r border-black flex items-center justify-center'>
        <Link href='/'>Home</Link>
      </span>
      <span className='col-start-2 col-end-3 border-r border-black flex items-center justify-center'>
        <Link href='/shop'>Shop</Link>
      </span>
      <span className='col-start-7 col-end-8 border-x border-black flex items-center px-6'>
        {session ? (
          <div className='w-full flex items-center justify-center'>
            <div className='flex items-center gap-x-2'>
              {/* <Image
                src={user?.image}
                alt='avatar'
                width={40}
                height={40}
                className='rounded-full'
              /> */}
              <p className='font-gilroyMedium flex text-sm'>
                Hi, {user?.name.split(' ')[0]}
              </p>
            </div>
            {/* <form action={signOutAction}>
              <button>
                <GoSignOut className='text-lg cursor-pointer' />
              </button>
            </form> */}
          </div>
        ) : (
          <Link href='/sign-in'>Sign in</Link>
        )}
      </span>
      <span className='col-start-8 -col-end-1 border-r border-black flex items-center justify-center'>
        <Link href='/cart'>Cart</Link>
      </span>
    </nav>
  );
}
