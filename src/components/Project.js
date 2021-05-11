import React, { useEffect, UseState } from "react"
import sanityClient from "../client"

export default function Project() {

    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project]{
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
        <main className="project__main">
            <section>
                <h1 className="project__title title">Project Page</h1>
                <h2>These are my Projects</h2>
                <article>
                    <h3>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p></p>
                            <span></span>
                        </div>
                    </h3>
                </article>
            </section>
        </main>

    )
}