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


    
        var angle = 0.0;
        var offset= 490;
        var scalar = 40;
        var speed = 0.005;
    
        const draw = (p5) => {
            p5.background(0);
            var x = (p5.windowWidth/1.2)
            var y = p5.windowHeight
            var y1 = offset + p5.sin(angle) * scalar;
            var y2 = offset + p5.sin(angle + 0.6) * scalar;
            var y3 = offset + p5.sin(angle + 0.8) * scalar;
            p5.quad(x, 50, p5.windowWidth/1.05, p5.windowHeight/1.5, x, p5.windowHeight, p5.windowWidth/1.4, p5.windowHeight/1.5);
            p5.ellipse(300, y2, 40, 40);
            p5.ellipse(500, y3, 40, 40);
            angle += speed;
            scalar += speed;
            // p5.polygon();
            // NOTE: Do not use setState in the draw function or in functions that are executed
            // in the draw function...
            // please use normal variables or class properties for these purposes
            // x++;
        };


        return(
        <main className="home__main slide">
            
            <section className="home_title__box">
                <h1 className="home__title title">Home Page</h1>
            </section>
            <div>
                <Sketch setup={setup} draw={draw} />
            </div>
            
        </main>
    )
    };