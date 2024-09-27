import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (e) =>{
e.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quasi natus in incidunt possimus, repellendus dignissimos rem quas eos voluptates vero unde dolorum odit officia aspernatur iure officiis, accusamus velit?</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button className='uppercase bg-black text-white text-sm px-10 py-4' type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
