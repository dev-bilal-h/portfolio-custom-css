import Image from "next/image";
import AboutProfile from "@/assets/profile1.jpg"; 
import "@/styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Profile picture container with borders */}
      <div className="profile-picture-container">
        <div className="outer-border"></div>
        <div className="inner-border">
          <Image
            src={AboutProfile}
            alt="Profile Picture"
            className="profile-picture"
          />
        </div>
      </div>

      {/* About section heading */}
      <h2 className="about-heading">
        About <span className="highlight-text">Me</span>
      </h2>
      <p className="sub-heading">Front-end Developer</p>

      {/* About description with a brief introduction */}
      <p className="about-description">
        I&apos;m Bilal Hassan, & I&apos;m a student at the Governor Initiative,
        exploring the dynamic fields of Cloud, Applied Generative AI, & Web 3.0
        and I&apos;m a passionate web developer who specializes in using modern
        web technologies to create user-friendly and responsive websites and
        applications. I have expertise in HTML5, CSS, JavaScript, TypeScript,
        React, and Next.js, and I always focus on providing user-centric
        solutions. My goal is to balance both performance and aesthetics in
        every project. Continuously improving my skills and staying up-to-date
        with new trends is my priority. I aim to create digital experiences that
        are impactful and engaging for users.
      </p>
    </div>
  );
};

export default About;
