import React from "react";
import styles from "./writing.module.scss";



const Writing: React.FC = () => {
  return (
    <div className={styles.writing}>
      <h1 >writing</h1>
      <p>
        Welcome to the About page! Here, you can share information about yourself, your journey, and your work.
      </p>
      <p>
        I am a passionate developer with a love for creating beautiful and functional web applications. My goal is to
        build impactful projects that solve real-world problems.
      </p>
    </div>
  );
};

export default Writing;