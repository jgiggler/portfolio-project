'use strict'

//create a row of data in a table with the id "randomPerson"
function showPersonData(person) {
    randomPerson.innerHTML += `
        <tr>
            <td><img src=${person.picture.thumbnail} alt="Random Person" /></td>
            <td>
                <a href="mailto: ${person.email}">
                ${person.name.first}
                ${person.name.last}
                </a>
            </td>
            <td>${person.phone}</td>
            <td>${person.location.city}</td>
        </tr>
        `
}
async function getRandomUser(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('id');

    const url = targetId === "fromBrowser" ? "https://randomuser.me/api/" : "/random-person"

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.status == 200) {
            showPersonData(data.results[0])
        }       
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    const fromBrowserButton = document.getElementById("fromBrowser");
    fromBrowserButton.addEventListener("click", getRandomUser);

    const fromServerButton = document.getElementById("fromServer");
    fromServerButton.addEventListener("click", getRandomUser);

})