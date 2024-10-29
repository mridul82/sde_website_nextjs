import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='w-[20%]'>
        <Link className="text-primary font-semibold text-2xl flex justify-center items-center gap-2" href="/">
        <Image src="/images/ITNex_logo.jpg" width={60} height={60}  alt="SDE Logo" loading="lazy" className='rounded-full' />
            <span className='text-3xl hidden md:block'>ITNex</span>
            <span className='text-3xl hidden md:block'>Solutions</span>
        </Link>
    </div>
  )
}

export default Logo
