import React, { useEffect, useState } from "react"
import sanityClient from "../client"

export default function Project() {

    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place, 
            description,
            projectType,
            link,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error)
    }, []);
    return(
        <main className="project__main slide">
            <section>
                <h1 className="project__title title">Projects</h1>
                <h2>These are my Projects</h2>
                <section>
                    <div className="mountain__three"></div>
                    <div className="mountain__two"></div>
                    <div className="mountain__one"></div>
                </section>

        {projectData && projectData.map((project, index) => (

                <article>
                    <h3>
                        <a
                        href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            {project.title}
                        </a>
                    </h3>
                        <div>
                            <span>
                                <strong>Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong>Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong>Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p> {project.description}</p>
                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                View the Project{" "}
                            <span role="img" aria-label="right pointer">
                                👉
                            </span>
                            </a>
                        </div>
                </article>
                ))}
            </section>
        </main>

    )
}