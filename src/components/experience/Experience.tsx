import Section from '../Section'
import Sector from './Sector'
import Tech from './Tech'

const Experience = () => {
  return (
    <Section id='experience-section' classname='flex flex-col justify-center items-center px-5'>
        <div className='flex flex-col justify-center items-center mt-10'>
        <p>Explore my</p>
        <h2 className='text-[2rem] font-extrabold tracking-wide'>Experience</h2>
        </div>
        <div className='flex flex-col sm:flex-row gap-5 mb-7 tracking-wide'>
            <Sector title='DevOps Engineering'>
                {
                    [   "Terraform", "Ansible", "Docker", "Linux",
                        "Bash", "Github Actions", "Cloudformation",
                        "AWS"
                    ].map((item) => <Tech name={item} />)
                }
            </Sector>
            <Sector title='Software Development'>
                {
                    [   "C#", ".NET Core", "JavaScript", "TypeScript", "Python",
                        "ReactJS", "TailwindCSS", "Entity Framework", "Postgres",
                        "XUnit"
                    ].map((item) => <Tech name={item} />)
                }
            </Sector>
        </div>
    </Section>
  )
}

export default Experience