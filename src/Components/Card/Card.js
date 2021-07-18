import React from 'react';
import propTypes from 'prop-types'

const Card = ({ movie }) => {
    return (
        <div className= 'card'>
             <img src ={movie.img.src} className='card-img-top' alt={movie.img.alt} width = '200'/>
            <h2 className='card-title'>{`#${movie.ranking}} - ${movie.title} (${movie.year})` }</h2>
                <ul className= 'list-group list-group-flush'>
                    <li className='list-group-item'>{`Distributer : ${movie.distributor}`}</li>
                    <li className='list-group-item'>{`Amount : ${movie.amount}`}</li>
                </ul>
        </div>
    );
};

Card.propTypes = {
    movie: propTypes.shape({
        title: propTypes.string,
        distributor: propTypes.string,
        year: propTypes.number,
        amount: propTypes.string,
        img: propTypes.shape({
        src: propTypes.string,
        alt: propTypes.string
        }),
        ranking: propTypes.number
        }).isRequired
}

export default Card;