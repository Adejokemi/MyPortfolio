import React from 'react'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'

const Contact = () => {
  return (
    <div className='container py-10 lg:py-0 lg:px-20 px-6 grid lg:grid-cols-3 '>
      <div className='lg:col-span-2'>
        <ContactForm/>
      </div>
      <div className='lg:col-span-1 flex justify-center items-center'>
        <ContactCard/>
      </div>
    </div>
  )
}

export default Contact
