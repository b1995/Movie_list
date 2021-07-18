import React from 'react';

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

export default Card;