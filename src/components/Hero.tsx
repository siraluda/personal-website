import Section from './Section'

const Hero = () => {
  return (
    <Section id='hero-section'>
      <div id='image-container' className='rounded-full overflow-hidden h-[300px] md:h-[400px] w-[300px] md:w-[400px] relative'>
        <img src="../assets/abdul-profile.jpg" className='overflow-clip' alt="profile-image" />
      </div>
      <div id='profile-info' className='flex flex-col justify-center items-center gap-5'>
        <p className='md:text-3xl text-lg font-semibold text-gray-600'>Hello, I'm</p>
        <p className='md:text-7xl text-2xl font-bold'>Abdul-Waris</p>
        <div id='button-container' className='flex flex-col sm:flex-row justify-center gap-5'>
          <button className='p-4 border-1 md:border-4 rounded-4xl font-medium text-xs md:text-lg' type="button">Download CV</button>
          <button className='p-4 border-1 md:border-4 rounded-4xl font-medium text-xs md:text-lg bg-gray-950 text-gray-50' type="button">Contact Info</button>
        </div>
        <div id='socials-container' className='flex flex-row justify-center gap-5'>
          <img className='cursor-pointer h-10' src="/src/assets/linkedin.png" alt="linkedIn" />
          <img className='cursor-pointer h-10' src="/src/assets/github.png" alt="github" />
        </div>
      </div>
    </Section>
  )
}

export default Hero