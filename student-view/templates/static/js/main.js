const request = new XMLHttpRequest;
const url = '';

function sayName() {
    //request name from server after login
    
    let greet = document.getElementById("greeting");

    request.open('GET', url);
    request.send();

    request.onload = () => greet.value += request.responseText;
}

//GENERAL GET
/*function btn_get() {

    request.open('GET', url + spec1);
    request.send();

    request.onload = () => text.value += request.responseText;
}*/

//GENERAL POST
/*function btn_post() {

    var xhttp = new XMLHttpRequest();
    
    xhttp.open('POST', url + spec1);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function() {
        text.value += this.responseText;
    };

    const body = {"name": in_name.value, "grade": in_grade.value};
    
    xhttp.send(JSON.stringify(body));
}*/

//GENERAL DELETE
/*function btn_delete() {

    var find = document.getElementById('find');

    request.open('DELETE', url + spec1 + '/' + find.value);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
        text.value += this.responseText;
    }

    request.send()

}*/

function signOut() {
    //Redirect back to login
}

function loadTable(event, showTab){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");        
    }

    document.getElementById(showTab).style.display = "block";
    event.currentTarget.className += " active";
}

function addRow(tableID) {
    let table = document.getElementById(tableID);
    let newRow = table.insertRow(-1);
    
    let newCourse = newRow.insertCell(0);
    let newTeacher = newRow.insertCell(1);
    let newClass = newRow.insertCell(2);
    let newEnroll = newRow.insertCell(3);

    // INCLUDE INFORMATION FROM DATABASE

    //JSON.parse() incoming string
    var fillText = document.createTextNode('New Name');
    var fillTeacher = document.createTextNode('New Teacher');
    var fillClass = document.createTextNode('New Class');
    var fillEnroll = document.createTextNode('New Enroll');
    
    newCourse.appendChild(fillText);
    newTeacher.appendChild(fillTeacher);
    newClass.appendChild(fillClass);
    newEnroll.appendChild(fillEnroll);
}

function delRow(tableID) {
    let table = document.getElementById(tableID);
    
    //DELETE FROM DATABASE AS WELL

    table.deleteRow(-1);
}