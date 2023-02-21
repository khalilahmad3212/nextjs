import React from 'react'

function FooterRight({ navigations }: any) {
  return (
    <div className="md:w-1/2 flex justify-between md:justify-evenly py-7 md:px-7">
    {navigations.map(({ _key, navItem, title }: any) => (

      <div key={_key}>
        
        <h4 className=" text-gray-600 text-xl mb-4">
          {title}
        </h4>
        
        <ul>
          {navItem.map(({ _key, navigationItemUrl, text }: any) => (
            <li key={_key} className=" text-sm mb-2">
              <a href={navigationItemUrl}>{text}</a>
            </li>
          ))}
        </ul>
      
      </div>
    ))}
  </div>
  )
}

export default FooterRight