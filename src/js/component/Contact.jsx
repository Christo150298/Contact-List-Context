import React from "react";

const Contact = () => {
    return(
        <div className="container text-end mt-5">
            <button className="btn btn-success ">Add new Contact</button>
            <div className="container text-start mt-2 border rounded">
                <img src="" alt="" />
                <div className="info">
                    <h4 className="name">Christopher Álvarez</h4>
                    <p className="direcction">
                        <i class="fa-solid fa-location-dot"></i>
                    </p>
                    <p className="phone">
                        <i class="fa-solid fa-phone"></i>
                    </p>
                    <p className="email">
                        <i class="fa-solid fa-envelope"></i>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;