import React from "react";

export default function Card({item}) {
    console.log(item)
    return (
        <div className="card">
            <img src={`../images/${item.img}`} alt="Fuji-san" className="col-4 card--img" />
            <div className="col-8">
                <div className="card--location">
                    <i className="bi bi-geo-alt-fill"></i>
                    <p className="card--country">{item.location.country}</p>
                    <a href={`${item.location.googleMaps}`}>View on Google Maps</a>
                </div>
                <h2 className="card--title">{item.title}</h2>
                <p className="card--dates">{item.date}</p>
                <p className="card--description">{item.description}</p>
            </div>
        </div>
    )
}