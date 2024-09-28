import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='w-[20%]'>
        <Link className="text-primary font-semibold text-2xl flex justify-center items-center gap-2" href="/">
        <Image src="/images/sde_logo.jpeg" width={80} height={50}  alt="SDE Logo" />
            <span className='text-3xl hidden md:block'>SDE</span>
            <span className='text-3xl hidden md:block'>Solutions</span>
        </Link>
    </div>
  )
}

export default Logo
