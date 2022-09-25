import React from "react";

function DisplayData() {
    fetch('https://api.github.com/orgs/nodejs')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
export default DisplayData;