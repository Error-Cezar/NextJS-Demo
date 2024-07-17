import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="relative place-items-center"> */}
      <Link href="/">
      <Image
          // placeholder="blur"
          src="/404.jpg"
          alt="NJEF"
          // width={912}
          // height={312}
          // layout="responsive"
          fill={true}
          // style={StyleBanner}
          priority
        />
      </Link>
      {/* </div> */}
    </main>
  )
}