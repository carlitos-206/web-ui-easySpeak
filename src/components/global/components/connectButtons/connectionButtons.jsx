import React from "react";
import "./connection.css";
import { easy_links } from "./links";
import { linkConnectionSendOff } from "../../../global/functions/functions";
export default function ConnectionButtons() {
  return (
    <div id="connect-with-us" className="connection-container">
      <div className="connection-header">
        <p>Connect with us</p>
      </div>
      <div className="connection-content">
        <div className="connection-content-row">
        {easy_links.map((item, index) =>{
          if(item.name ==='Email'){
            return(
              <div onClick={(e)=>{linkConnectionSendOff(e, item.url, item.name)}} className="connection-content-row-item" key={index}>
                <a className="connection-content-row-item-icon"href={`mailto:${item.url}`}>
                  <img className="connection-row-item-icon-img email" src={item.icon} alt={item.name} />
                </a>
                <div className="connection-content-row-item-body">
                  <p className="connection-content-row-item-body-title">{item.name}</p>
                  <p className="connection-content-row-item-body-label">{item.label}</p>
                </div>
            </div>
            )
          }else{
            return(
              <div onClick={(e)=>{linkConnectionSendOff(e, item.url, item.name)}}className="connection-content-row-item" key={index}>
                <a className="connection-content-row-item-icon" href={item.url}>
                  <img className="connection-row-item-icon-img linkin" src={item.icon} alt={item.title} />
                </a>
                <div className="connection-content-row-item-body">
                  <p className="connection-content-row-item-body-title">{item.name}</p>
                  <p className="connection-content-row-item-body-label">{item.label}</p>
                </div>
              </div>
            )
          }
        })}
        </div>
      </div>
    </div>
  );
}
