import React from "react"
import Sketch from "react-p5"


let x = 50;
let y = 50;

export default function Home() {

        const setup = (p5, canvasParentRef) => {
            // use parent to render the canvas in this ref
            // (without that p5 will render the canvas outside of your component)
            let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
            canvas.position(0,0)
            canvas.style('z-index', '-1')
        };


    
        const draw = (p5) => {
            p5.background(0);
            p5.fill
            p5.polygon(x, y, 70, 70);
            // NOTE: Do not use setState in the draw function or in functions that are executed
            // in the draw function...
            // please use normal variables or class properties for these purposes
            x++;
        };
        return(
        <main className="home__main slide">
            
            <section className="home_title__box">
                <h1 className="home__title title">Home Page</h1>
            </section>
            <Sketch setup={setup} draw={draw} />
            
        </main>
    )
    };