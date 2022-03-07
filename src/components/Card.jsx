import React from "react";

export default function Card({item}) {
    return (
        <div className="card">
            <div className="col-4">
                <div className={`card--img ${item.imgClass}`}></div>
                {/* <img src={`../images/${item.img}`} alt={item.imgAlt} className="card--img" /> */}
            </div>
            <div className="col-8">
                <div className="card--location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F55A5A" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <p className="card--country">{item.location.country}</p>
                    {item.location.googleMaps && <a href={`${item.location.googleMaps}`}>View on Google Maps</a>}
                </div>
                <h2 className="card--title">{item.title}</h2>
                <p className="card--dates">{item.dates}</p>
                <p className="card--description">{item.description}</p>
            </div>
        </div>
    )
}