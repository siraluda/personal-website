import Section from "../Section";
import Badge from "./Badge";
import { faUserGraduate, faAward } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <Section
      id="about-section"
      classname="flex flex-col justify-center items-center-safe px-5"
    >
      <div className="flex flex-col justify-center items-center-safe mt-10">
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
          <p className="py-5">
            I am an Engineer with over 5 years of experience designing, deploying, and automating resources using cloud infrastructure
            services like Terraform, Ansible, Docker, and GitHub Actions. My software engineering experience
            include building and deploying scalable full-stack applications using .NET Core, React, TypeScript, and C#.
            I enjoy designing infrastructure and implementing software solutions with clean architecture and RESTful Web Services. I am eager to learn
            and adept at collaborating with cross-functional teams to deliver innovative products from concept to deployment. More importantly, I am
            passionate about reliability, scalability, and operational excellence.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
