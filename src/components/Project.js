import React, { useEffect, useState } from "react"
import sanityClient from "../client"
import Sketch from "react-p5"



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


    


    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        canvas.position(0,0)
        canvas.style('z-index', '-1')
        
    };

    var angle = 0.0;
    var offset= 100;
    var scalar = 40;
    var speed = 0.05;

    const draw = (p5) => {
        p5.background(0);
        var y1 = offset + p5.sin(angle) * scalar;
        var y2 = offset + p5.sin(angle + 0.4) * scalar;
        var y3 = offset + p5.sin(angle + 0.8) * scalar;
        p5.ellipse(100, y1, 40, 40);
        p5.ellipse(300, y2, 40, 40);
        p5.ellipse(500, y3, 40, 40);
        angle += speed;
        // p5.polygon();
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        // x++;
    };

    return(
        <main className="project__main slide">
            <section>
            <Sketch setup={setup} draw={draw} />
                <h1 className="project__title title">Projects</h1>
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