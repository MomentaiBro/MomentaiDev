import React, { useEffect, useState } from "react";
import sanityClient from "../client"
import imageUrlBuilder from "./@sanity/image-url"


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
                    <img src={uerlFor(author.authorImage).url()}/>
                    <div>
                        <h1 className="about__title title">About Page</h1>
                        <div>
                            BLOCK CONTENT
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}