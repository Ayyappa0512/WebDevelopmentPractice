import React from "react";

function Footer(){
    return (
        <footer><p>Copyright &#169; {year}</p></footer>
    );
}

export default Footer;


    const date = new Date();
    var year = date.getFullYear();
