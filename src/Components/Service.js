import React from "react";
const Service = (props) => {
    return (

        //--------

            <div className={props.box} data-aos="zoom-in" data-aos-delay={props.position}>
                <div className={props.box_color}>
                    <div className="icon">
                        <i className={props.logo}></i>
                    </div>
                    <h4><a href="">{props.name}</a></h4>
                    <p>{props.details}</p>
                </div>
            </div>

        


    )
}

export default Service;

