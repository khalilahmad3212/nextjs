import React from 'react'

function Heading({ heading }: any) {
  return (
    <div className='max-w-[1440px] mx-auto pl-4 md:pl-12 pt-16 mb-14'>
        <h2 className='font-bold text-4xl mb-5'>{heading}</h2>
        <p className='max-w-md text-gray-600'>Tristique curabitur eget quam eget massa habitant. Arcu mus tincidunt lorem laoreet turpis cras velit tellus. Pulvinar mattis interdum ut cursus urna. Egestas nascetur mollis tortor nunc proin urna.</p>
    </div>


  )
}

export default Heading