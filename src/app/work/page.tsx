import React, { Suspense } from 'react';
import styles from './work.module.scss';
import ExperienceContainer from '@/components/ExperienceContainer/ExperienceContainer';
import { CircularProgress } from '@mui/material';
import mockData from '@/data/mockData';
import { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';

const Work: React.FC = () => {
  return (
    <div className={styles.work}>
      <div className="sectionHeadingWrapper">
        <div className="sectionHeading">
          <h1>work & projects</h1>
        </div>
      </div>
      <div>
        <Suspense fallback={<CircularProgress />}>
          {mockData.map((item, index) => (
            <ExperienceContainer
              key={index}
              companyName={item.companyName}
              role={item.role}
              period={item.period}
              description={item.description}
              projects={item.projects as ProjectCardProps[]}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Work;
