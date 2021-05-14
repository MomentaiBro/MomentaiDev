import React, { useEffect, useState } from "react";
import sanityClient from "../client"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import Sketch from "react-p5"


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

    if(!author) return <div className="loading__screen"> Loading... </div>


    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        canvas.position(0,0)
        canvas.style('z-index', '-1')
        p5.frameRate(5);
        
    };

    var angle = 0.0;
    var offset= 700;
    var scalar = 40;
    var speed = 0.005;
    


    const draw = (p5) => {
        p5.background(150);

        for (var i = 0; i < 150; i++) {
            // Code goes here
            var x = p5.random(p5.windowWidth);
            var y = p5.random(p5.windowHeight);

            p5.strokeWeight(2)
            p5.fill(255,206,127);
            p5.ellipse(x, y, p5.random(1,3), p5.random(1,3))
        }


        var x = (p5.windowWidth/1.2)
        var y = p5.windowHeight/1.2
        var y1 = offset + p5.sin(angle) * scalar;
        var y2 = offset + p5.sin(angle + 0.6) * scalar;
        var y3 = offset + p5.sin(angle + 0.8) * scalar;
        p5.ellipse(x, y1, 1000, 1000);
        p5.ellipse(200, y2, 40, 40);
        p5.ellipse(500, y3, 40, 40);
        angle += speed;
        // p5.polygon();
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        // x++;
        
    };



    return(
        <main className="about__main slide">
            <Sketch setup={setup} draw={draw} />
            <div>
                <section className="bio__section">
                    <img src={urlFor(author.authorImage).url()} alt={author.name}/>
                    <div>
                        <h1 className="about__title title"> 
                            MOMENTAI!{" "}
                        </h1>
                        <div className="author__name">{author.name}</div>
                        <div className="block__content">
                            <BlockContent blocks={author.bio} projectId="nveo0x9l" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}