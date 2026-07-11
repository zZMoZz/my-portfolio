import { useState } from 'react';
import { FaGithub, FaArrowRight, FaDownload } from 'react-icons/fa';
import { projects, projectCategories } from '../data/portfolioData';
import './Projects.css';

const INITIAL_COUNT = 3;

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image ? (
        <div className="project-card__mockup project-card__mockup--image">
          <img src={project.image} alt={`${project.name} preview`} />
        </div>
      ) : (
        <div className="project-card__mockup" style={{ background: project.gradient }}>
          <div className="project-card__mockup-bar">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__title-row">
          <h3 className="project-card__title">{project.name}</h3>
          {project.year && <span className="project-card__year">{project.year}</span>}
        </div>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span className="project-card__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__github"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target={project.download ? undefined : '_blank'}
            rel="noopener noreferrer"
            download={project.download || undefined}
            className="project-card__live"
          >
            {project.download ? (
              <>
                Download <FaDownload aria-hidden="true" />
              </>
            ) : (
              <>
                Live preview <FaArrowRight aria-hidden="true" />
              </>
            )}
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter((p) => activeCategory === 'All' || p.category === activeCategory);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="eyebrow">My work</span>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">Here are some of my recent works</p>
        </div>

        <ul className="projects__filters" role="tablist">
          {projectCategories.map((category) => (
            <li key={category}>
              <button
                role="tab"
                aria-selected={activeCategory === category}
                className={`projects__filter ${activeCategory === category ? 'projects__filter--active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="projects__grid">
          {visible.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className="projects__more">
            <button className="btn btn-primary" onClick={() => setShowAll((v) => !v)}>
              {showAll ? 'Show Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
