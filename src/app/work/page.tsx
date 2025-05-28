import React from 'react';
import Carousel from '@/components/Carousel/Carousel';
import styles from './work.module.scss';
import carouselStyles from '@/components/Carousel/Carousel.module.scss';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import mockProjects from '@/data/mockData';

const Work: React.FC = () => {
  return (
    <div className={styles.work}>
      {/* heading container */}
      <div className="sectionHeadingWrapper">
        <div className="sectionHeading">
          <h1>work & projects</h1>
        </div>
      </div>
      <div className={styles.carouselWrapper}>
        {Object.entries(mockProjects).map(([category, projects]) => (
          <div key={category} className={styles.carouselContainer}>
            <h2 className={carouselStyles.carouselHeading}>{category}</h2>{' '}
            {/* Format category name */}
            <Carousel>
              {projects.map((project) => (
                <div key={project.id} className={styles.carouselItem}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
