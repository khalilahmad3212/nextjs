import Link from 'next/link';
import React from 'react'

function AboutBreadCrumb() {
  return (
<nav className="rounded-md w-full">
  <ol className="list-reset flex">
    <li><Link href="/" className="text-[#222222]">Home</Link></li>
    <li><span className="text-gray-500 mx-2">/</span></li>
    <li className="text-primary">About</li>
  </ol>
</nav>
  )
}

export default AboutBreadCrumb;