import React from "react"
import image from "../1133210.jpeg"

export default function Home() {
    return(
        
        <main className="home__wrapper">
            <section>
                <h1 className="home__title title">Home Page</h1>
            </section>
            <img src={image} alt="Background image from the anime show Gurren Lagen"/>
            
            
        </main>
    )
}