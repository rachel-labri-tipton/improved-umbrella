import React from 'react';
import styles from './about.module.scss';
import aboutMeData from '../../data/aboutMeData'; // Adjust the relative path
import AboutCard from '../../components/AboutCard/AboutCard'; // Adjust the relative path

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      {/* heading container */}
      <div className="sectionHeadingWrapper">
        <div className="sectionHeading">
          <h1>about me</h1>
        </div>
      </div>
      <AboutCard
        title={aboutMeData.whoAmIAbridged.title}
        paragraphs={aboutMeData.whoAmIAbridged.paragraphs}
        reverse={false}
        imageSrc={process.env.NEXT_PUBLIC_HIKING_IMAGE}
        imageAlt={aboutMeData.whoAmIAbridged.images[0].alt}
        link={aboutMeData.whoAmIAbridged.link}
      />
      <AboutCard
        title={aboutMeData.whyCoding.title}
        paragraphs={aboutMeData.whyCoding.paragaphs}
        imageSrc={process.env.NEXT_PUBLIC_HIKING_IMAGE}
        reverse={true}
      />
      <AboutCard
        title={aboutMeData.lookingFor.title}
        paragraphs={aboutMeData.lookingFor.paragaphs}
        imageSrc={process.env.NEXT_PUBLIC_HIKING_IMAGE}
        reverse={false}
      />
    </div>
  );
};

export default About;
