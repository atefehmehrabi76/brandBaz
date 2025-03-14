import Link from 'next/link'
import React from 'react'

function FooterLinks() {
  const footerLins=[
    {
      title:"خدمات مشتریان",
      links:[
        {lable:"پاسخ به سوالات متداول", href:"/"},
        {lable:"رویه های بازگرداندن کالا", href:"/"},
        {lable:"حریم خصوصی", href:"/"},
        {lable:"قوانین و مقررات", href:"/"},
      ]
    },
    {
      title:"دسترسی سریع",
      links:[
        {lable:"لوازم جانبی خودرو", href:"/"},
        {lable:"ساعت مردانه", href:"/"},
        {lable:"ورود/ثبت نام", href:""}
      ]
    },
      {
      title:"راهنمای خرید",
      links:[
        {lable:"نحوه ی ثبت سفارش", href:"/"},
        {lable:"رویه ارسال سفارش", href:"/"}
      ]
    },
  ]
  return (
    <footer>
      <div className='flex gap-[120px] pr-[100px] py-6 '>
        {footerLins.map((section,index)=>{
          return(
            <div key={index}>
              <h3 className='text-black text-[20px]'>{section.title}</h3>
              <ul className='pr-3'>
                {section.links.map((link,linkIndex)=>{
                  return(
                    <li key={linkIndex} className='text-black mt-5'>
                      <Link href={link.href}>{link.lable}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </footer>
  )
}

export default FooterLinks