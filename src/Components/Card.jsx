import React from "react";
import pin from "../assets/pin.png";

export default function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card__image__container">
          <img
            className="card__image"
            src={props.item.imageUrl}
            alt="image of city"
          />
        </div>
        <div className="card__text__container">
          <div className="card__text--top">
            <img src={pin} alt="pin image" width="12px" />
            <h2 className="card__text__country">{props.item.location}</h2>
            <a
              className="card__text__maps"
              href={props.item.googleMapsUrl}
              target="blank"
            >
              View on Google Maps
            </a>
          </div>
          <div className="card__text--bottom">
            <h1 className="card__text__city">{props.item.title}</h1>
            <h3 className="card__text__timeline">
              {props.item.startDate} - {props.item.endDate}
            </h3>
            <p className="card__text__description">{props.item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
