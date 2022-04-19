import "./Card.css";
import { Link, generatePath } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <Link className='c-link'  to={generatePath("/films/:id", {id: card.id})}>  
    <div className="c-gallery">     
        <figure key={card.id}>
        <figcaption>{card.original_title}</figcaption>
          <h3>{card.title}</h3>          
          <img src={card.image} alt={card.title} />  
          <p>{card.release_date}</p>        
        </figure>
    </div>
    </Link>
  );
};
export default Card;
