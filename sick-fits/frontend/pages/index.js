import React from 'react'
import Link from 'next/link'

/* 
  Using Link from next.js gives us a way to keep our state as we navigate
*/

const Home = () => {
  return (
    <>
      <div>Home </div>
      <Link href="/sell"><a>Sell!</a></Link>
    </>
  )
}

export default Home