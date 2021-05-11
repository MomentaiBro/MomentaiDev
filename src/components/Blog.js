import React, {useState, useEffect } from "react"
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
            .catch(console.log(error))
    })


    return(
        <h1 className="blog__title title">Blog Page</h1>
    )
}