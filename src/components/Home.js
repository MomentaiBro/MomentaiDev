import React from "react"
import Sketch from "react-p5"



export default function Home() {

        const setup = (p5, canvasParentRef) => {
            // use parent to render the canvas in this ref
            // (without that p5 will render the canvas outside of your component)
            let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
            canvas.position(0,0)
            canvas.style('z-index', '-1')
        };


    
    
        const draw = (p5) => {
            p5.background(150);
            p5.fill(165, 187, 280)
            var x = (p5.windowWidth/1.2)
            p5.quad(x, 50, p5.windowWidth/1.05, p5.windowHeight/1.5, x, p5.windowHeight, p5.windowWidth/1.4, p5.windowHeight/1.5);
            p5.strokeWeight(2)
            
            

            // NOTE: Do not use setState in the draw function or in functions that are executed
            // in the draw function...
            // please use normal variables or class properties for these purposes
            // x++;
        };


        return(
        <main className="home__main slide">
            
            <section className="home_title__box">
                <h1 className="home__title title">Welcome</h1>
            </section>
            <div>
                <Sketch setup={setup} draw={draw} />
            </div>
            
        </main>
    )
    };