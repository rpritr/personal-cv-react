import React from "react";
import "./_social.scss";

const Social = (props) => {
    return (
        <div className="header__social--icons">
                {props.items.map((item, i) => (
                    <a href={item.url} key={i}>
                        <img  src={item.src} className="social--icons--icon"  alt="social"/>
                    </a>
                ))}
        </div>
    )
}

export default Social;