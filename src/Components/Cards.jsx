import React from "react";
import './Card.css';

export const Card = ({element}) => {
    return (
        <div className="card text-center">
            <h1 className="card-title">{element}</h1>
        </div>
    )
}