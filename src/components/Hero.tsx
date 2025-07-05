import Section from './Section'

const Hero = () => {
  return (
    <Section id='hero-section' classname='flex flex-col md:flex-row justify-center items-center'>
      <div id='image-container' className='rounded-full overflow-hidden h-[300px] md:h-[400px] w-[300px] md:w-[400px]'>
        <img src="/assets/abdul-profile.jpg" className='overflow-clip' alt="profile-image" />
      </div>
      <div id='profile-info' className='flex flex-col justify-center-safe items-center-safe gap-5'>
        <p className='md:text-3xl text-[1rem] font-semibold text-gray-600'>Hello, I'm</p>
        <p className='md:text-7xl text-[2rem] md:text-[3rem] font-bold'>Abdul-Waris</p>
        <div id='button-container' className='flex flex-col sm:flex-row justify-center gap-5'>
          <button className='p-4 border-1 md:border-4 rounded-4xl font-medium text-xs sm:text-[1rem]' type="button">View CV</button>
          <button className='p-4 border-1 md:border-4 rounded-4xl font-medium bg-gray-950 text-xs sm:text-[1rem] text-gray-50 min-w-3' type="button">Contact Info</button>
        </div>
        <div id='socials-container' className='flex flex-row justify-center gap-5'>
          <img className='cursor-pointer h-10' src="/assets/linkedin.png" alt="linkedIn" />
          <img className='cursor-pointer h-10' src="/assets/github.png" alt="github" />
        </div>
      </div>
    </Section>
  )
}

export default Hero