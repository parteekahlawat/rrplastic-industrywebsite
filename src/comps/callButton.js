import React from "react";

const CallButton = ({ phoneNumber = 9255595335 }) => {
    return (
        <a href={`tel:${phoneNumber}`} className="btn btn-primary my-2">
            Call Me
        </a>
    );
}

export default CallButton;