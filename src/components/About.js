import React, { useEffect, useState } from "react";
import sanityClient from "../client"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div> Loading...</div>

    return(

        <main>
            <img />
            <div>
                <section>
                    <img src={urlFor(author.authorImage).url()} alt={author.name}/>
                    <div>
                        <h1 className="about__title title"> 
                        Hey There! My Name is Alexander and I'm a Fullstack Software Engineer and Creative Coder!{" "}
                        </h1>
                        <span>{author.name}</span>
                        <div>
                            <BlockContent blocks={author.bio} projectId="nveo0x9l" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}