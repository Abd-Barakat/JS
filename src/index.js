import './index.css'
import { GetUsers, DeleteUser } from './API/UserAPI'

GetUsers().then(result => {
    let userBody = "";
    result.forEach(user => {
        userBody += `<tr>
            <td> <a href='#' data-id="${user.id}" class= "deleteUser">Delete </a></td>
            <td> ${user.id} </td>
            <td> ${user.firstName}</td>
            <td> ${user.lastName}</td>
            </tr>`
    });
    document.getElementById('users').innerHTML = userBody;

    const deleteLinks = document.getElementsByClassName("deleteUser");
    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const element = event.target;
            event.preventDefault();
            const id = element.attributes["data-id"].value;
            DeleteUser(id);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
    });


});