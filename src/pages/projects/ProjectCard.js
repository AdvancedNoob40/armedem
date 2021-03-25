import React from "react";
import Style from "./projects.module.scss";

const ProjectCard = ({
  ProjectImg,
  ProjectTitle,
  ProjectText,
  ProjectLink,
}) => {
  return (
    <div className={Style.projectCard}>
      <img className="w-100" src={ProjectImg} alt="" />
      <h2>{ProjectTitle}</h2>
      <p>{ProjectText}</p>
      <a href={ProjectLink}>Proje Detayları</a>
    </div>
  );
};

export default ProjectCard;
