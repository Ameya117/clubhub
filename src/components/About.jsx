import React from 'react'

const About = () => {
  return (
    <>
<div class='relative'>
    <div class='flex justify-between'>
        <img class='w-[30vw] h-full object-cover mt-48' src="/pic1.png"/>
        <img class='w-[30vw] h-full object-cover' src="/pic2.png"/>
    </div>
    <div class='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
        <div class='text-black text-6xl font-light mb-5 tracking-widest font-san'>
            About Us
        </div>
        <div className='w-[75%] h-[60%] border-2 rounded-2xl p-[5rem] text-2xl bg-[#D9D9D9] opacity-80 border-black leading-[2rem]' >
        Welcome to ClubHub, your gateway to the vibrant world of 
college clubs and events! Here, we invite you to embark on 
a journey of discovery, connecting you with a diverse array 
of clubs that cater to your interests and passions. Dive into 
our "Discover" section to explore the rich tapestry of clubs, 
each offering unique experiences and opportunities for personal 
and professional growth. Stay updated with our comprehensive 
event calendar, where you can relive the excitement of past 
events and stay ahead with upcoming gatherings that promise 
fun, learning, and networking. We believe that participation in 
these events not only enriches your college experience but also 
fosters invaluable skills, friendships, and memories that last a 
lifetime. Join us in celebrating the spirit of community, exploration, 
and empowerment through ClubHub!
        </div>
    </div>
</div>

    </>
  )
}

export default About