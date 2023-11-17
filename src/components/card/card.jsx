/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import './card.css'
export default function Card(props) {
  return (
    <>
      <article className="Card" style={{backgroundImage: `url(${props.data.coverImg})`}}>
        <div className='Transparent-Overlay'></div>
        <section className="Card--Info">
        <h3>{props.data.location}</h3>
          <div className="Info--Stats">
            <h1>{props.data.attraction} </h1>
            <h2 className='Info--Rating'>{props.data.stats.rating} <a className="Info--ReviewCount" href={props.data.stats.reviews}> ({props.data.stats.reviewCount})</a></h2>
          </div>
        </section>
        <section className='Card--Description'>
          {props.data.description}. <a href={props.data.links.wikipedia}>Wikipedia</a>
        </section>
        <section className='Card--Links'>
          <div className='Button--Row'>
            <a href={props.data.links.googleMaps}>Google Maps</a>
            <a href={props.data.links.ticketBooking}><strong>&euro;{props.data.price}</strong> Book your Ticket here</a> 
          </div>
          <span className='gray'>(might be different from listed here depending on how you'll book a ticket you may check the site for updated listings)</span>
        </section>
      </article>
    </>
  )
}

/*To Do 
  - Add styling to the Links
  - Add styling to the Description
*/