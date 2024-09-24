import { PlanetCard } from './PlanetCard.jsx'
import  earth  from './assets/earth.svg'
import jupiter from './assets/jupiter.svg'
import mars from './assets/mars.svg'
import React from 'react'
import './index.css'




export function App() {
    return (
        <section className='pl-Container'>
        <PlanetCard title='Earth' text='Our home' svg={earth} />
        <PlanetCard title='Jupiter' text='The biggest planet' svg={jupiter} />
        <PlanetCard title='Mars' text='The red planet' svg={mars} />
        </section>
    ) 
    
}