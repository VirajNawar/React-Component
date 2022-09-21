import React from "react"

export default function Main(props) {
    
    return(
          <section>
          <div className="container">
                <div className="img">
                    <img src={props.datas.imageUrl} alt="Mount-Fuji" className="loaction-img"/>
                </div>
                <div className="rightSide-info">    
                    <div className="location-name">
                        <img src="src/images/pin.png" />
                        <p>{props.datas.location}</p>
                        <a href={props.datas.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className="locaton-title">{props.datas.title}</h2>
                    <div className="journey-date">
                    <p>{props.datas.startDate}-</p>
                    <p>{props.datas.endDate}</p>
                    </div>
                    <p className="description">
                    {props.datas.description}
                    </p>
                </div>
          </div>
                <hr className="hr-line">
                
                </hr>
          </section>
    )
      
    
}