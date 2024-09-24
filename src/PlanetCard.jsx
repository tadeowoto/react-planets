
import './index.css'

export function PlanetCard({title, text, svg}) {

    return (
        <article className='pl-CardContainer'>
            <div className="pl-TopInfo">
                <img src={svg} alt="" />
            </div>
            <div className="pl-BottomInfo">
                <h1 className='pl-Title'>{title}</h1>
                <p className='pl-Text'>{text}</p>
            </div>
            <button className='pl-Button'>About</button>
        </article>
    )

}