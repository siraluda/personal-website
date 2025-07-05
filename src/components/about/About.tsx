import Section from "../Section";
import Badge from "./Badge";
import { faUserGraduate, faAward } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <Section
      id="about-section"
      classname="flex flex-col justify-center items-center px-5"
    >
      <div className="flex flex-col justify-center items-center mt-10">
        <p>know more</p>
        <h2 className="text-[2rem] font-extrabold tracking-wide">About me</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div
          id="image-container-2"
          className="rounded-4xl overflow-hidden h-[400px] md:h-[600px] sm:mx-5"
        >
          <img
            src="/assets/abdul-smiling.jpg"
            className="overflow-clip"
            alt="abdul-image-2"
          />
        </div>
        <div>
          <div className="flex flex-col sm:flex-row gap-5 mb-7">
            <Badge icon={faAward} title="Experience">
              <p>5+ years</p>
              <p>Software and DevOps Engineering</p>
            </Badge>
            <Badge icon={faUserGraduate} title="Education">
              <p>B.Sc Engineering <span className="font-light italic">- Petroleum</span></p>
              <p>M.Eng Engineering <span className="font-light italic">- Process</span></p>
            </Badge>
          </div>
          <p className="py-5 leading-9 tracking-wide">
            I’m a DevOps and Software Engineer with over 5 years of hands-on experience architecting, automating, and managing cloud-native infrastructure using tools like Terraform, Ansible, Docker, and GitHub Actions. My background in full-stack development includes building and deploying robust, scalable applications with .NET Core, React, TypeScript, and C#. I specialize in designing clean, maintainable architectures and implementing reliable RESTful APIs that power modern web experiences. I thrive in collaborative environments, working closely with cross-functional teams to bring innovative ideas to life—from initial concept to production. Above all, I’m passionate about building systems that prioritize reliability, scalability, and operational excellence.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
