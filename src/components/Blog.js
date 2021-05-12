import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom"
import sanityClient from "../client.js"

export default function Blog() {

    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, []);


    return(
        <main className="blog__page">
            <section className="blog__left_section">
                <h1 className="blog__title title">Blog Page</h1>
                <h2>Welcome to my blogging space</h2>
            </section>
            <div className="blog__grid">
                {postData && postData.map((post, index) => (
                            <article className="blog__post__card">
                                    <Link to={"/post/" + post.slug.current}
                                    >
                                        <span
                                            key={index}
                                        >
                                            <img 
                                                src={post.mainImage.asset.url}
                                                alt={post.mainImage.alt}
                                                className="blog__img"
                                            />
                                            <span className="blog__post__title">
                                                <h3>{post.title}</h3>
                                            </span>
                                        </span>
                                    </Link>
                            </article>
                        ))}  
            </div>
        </main>
        
    )
}