import React from 'react'

function BreadCrumb() {
  return (
<nav className="rounded-md w-full">
  <ol className="list-reset flex">
    <li><a href="#" className="text-[#222222]">Home</a></li>
    <li><span className="text-gray-500 mx-2">/</span></li>
    <li><a href="#" className="text-[#222222]">Products</a></li>
    <li><span className="text-gray-500 mx-2">/</span></li>
    <li className="text-primary">Electric cars</li>
  </ol>
</nav>
  )
}

export default BreadCrumb