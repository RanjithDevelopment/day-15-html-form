// radio button
function radio(tag, type, typeval, name, namevalue, gen, genvalue, id, idval, content) {
    var radio = document.createElement(tag);
    radio.setAttribute(type, typeval);
    radio.setAttribute(name, namevalue);
    radio.setAttribute(gen, genvalue);
    radio.setAttribute(id, idval);

    radio.innerHTML = content;
    return radio;

}
// label creation function 
function labelcreation(tag, fornam, forvalue, content) {
    var label = document.createElement(tag);
    label.setAttribute(fornam, forvalue);
    label.innerHTML = content;
    return label;

}
// input field creation
function createinput(tagname, classname, classvalue, id, idvalue, place, holder) {

    var input = document.createElement(tagname);
    input.setAttribute(classname, classvalue);
    input.setAttribute(id, idvalue);
    input.setAttribute(place, holder);
    return input;
}
//pragraph
function paragraph(tag, content) {
    var para = document.createElement(tag);
    para.innerHTML = content;
    return para;
}
//checkbox
function checkbox(tag, type, typeval, val, value, id, idvalue) {
    var checkbox = document.createElement(tag);
    checkbox.setAttribute(type, typeval);
    checkbox.setAttribute(val, value);
    checkbox.setAttribute(id, idvalue);
    return checkbox;

}
//button creation
function createbutton(tag, cls, clsval, cli, func, content) {
    var button = document.createElement(tag);
    button.setAttribute(cls, clsval);
    button.addEventListener(cli, func);
    button.innerHTML = content;

    return button;


}
//linebreaker
function linebreak(a) {
    var brave = document.createElement(a);
    return brave;
}
function database() {
    var table = document.getElementById('mytable').insertRow(1);


    var cell1 = table.insertCell(0);
    var cell2 = table.insertCell(1);
    var cell3 = table.insertCell(2);
    var cell4 = table.insertCell(3);
    var cell5 = table.insertCell(4);
    var cell6 = table.insertCell(5);
    var cell7 = table.insertCell(6);
    var cell8 = table.insertCell(7);
    var cell9 = table.insertCell(8);

    var fname = document.getElementById("fname").value;
    console.log(fname);
    cell1.innerHTML = fname;
    var lname = document.getElementById("lname").value;
    cell2.innerHTML = lname;
    var add1 = document.getElementById("address1").value;
    cell3.innerHTML = add1;
    var add2 = document.getElementById("address2").value;
    cell4.innerHTML = add2;
    var pin = document.getElementById("pincode").value;
    cell5.innerHTML = pin;
    if (document.getElementById("gen1").checked === true) {
        var gen1 = document.getElementById("gen1").value;
        cell6.innerHTML = gen1;
    } else if(document.getElementById("gen2").checked === true) {
        var gen2 = document.getElementById("gen2").value;
        cell6.innerHTML = gen2;
    }

    // var c2 = document.getElementById('checkbox2').value;
    // var c3 = document.getElementById('checkbox3').value;
    // var c4 = document.getElementById('checkbox4').value;
    // var c5 = document.getElementById('checkbox5').value;
    if (document.getElementById('checkbox1').checked === true) {
        cell7.innerHTML = document.getElementById('checkbox1').value;
    } else if (document.getElementById('checkbox2').checked === true) {
        cell7.innerHTML = document.getElementById('checkbox2').value;
    } else if (document.getElementById('checkbox3').checked === true) {
        cell7.innerHTML = document.getElementById('checkbox3').value;
    } else if (document.getElementById('checkbox4').checked === true) {
        cell7.innerHTML = document.getElementById('checkbox4').value;
    } else if (document.getElementById('checkbox5').checked === true) {
        cell7.innerHTML = document.getElementById('checkbox5').value;
    }





    var stat = document.getElementById('state').value;
    cell8.innerHTML = stat;
    var con = document.getElementById('country').value;
    cell9.innerHTML = con;



}



var label = labelcreation("label", "for", "fname", "First Name");



var input = createinput("input", "type", "text", "id", "fname", "placeholder", "First Name");

var lname = labelcreation("label", "for", "lname", "Last Name");

var input2 = createinput("input", "type", "text", "id", "lname", "placeholder", "last Name");
var Address1 = labelcreation("label", "for", "address1", "Address line1:");
var input3 = createinput("input", "type", "email", "id", "address1", "placeholder", "Addressline1");
var Address2 = labelcreation("label", "for", "address2", "Address line2:");
var input4 = createinput("input", "type", "text", "id", "address2", "placeholder", "Addressline2");
var pin = labelcreation("label", "for", "pincode", "PIN");
var input5 = createinput("input", "type", "text", "id", "pincode", "placeholder", "PINcode");
var gender = labelcreation("label", "for", "genders", "Gender");
var input6 = radio("input", "type", "radio", "name", "gender", "value", "male", "id", "gen1", "Male");
var male = labelcreation("label", "for", "male", "Male");
var input7 = radio("input", "type", "radio", "name", "gender", "value", "female", "id", "gen2", "FeMale");
var female = labelcreation("label", "for", "male", "FeMale");
var para = labelcreation("label", "for", "checkboxes", "Choice Of Food:(must be 2 of 5 given)");
var check1 = checkbox("input", "type", "checkbox", "value", "North Indian", "id", "checkbox1");
var c1label = labelcreation("label", "for", "checkbox1", "North Indian");
var check2 = checkbox("input", "type", "checkbox", "value", "South Indian", "id", "checkbox2");
var c2label = labelcreation("label", "for", "checkbox2", "South Indian");
var check3 = checkbox("input", "type", "checkbox", "value", "Chinese", "id", "checkbox3");
var c3label = labelcreation("label", "for", "checkbox3", "Chinese");
var check4 = checkbox("input", "type", "checkbox", "value", "Japanese", "id", "checkbox4");
var c4label = labelcreation("label", "for", "checkbox4", "Japanese");
var check5 = checkbox("input", "type", "checkbox", "value", "Europena", "id", "checkbox5");
var c5label = labelcreation("label", "for", "checkbox5", "European");
var state = labelcreation("label", "for", "state", "State:");
var stateinput = createinput("input", "type", "text", "id", "state", "placeholder", "State");
var country = labelcreation("label", "for", "country", "Country");
var countryinput = createinput("input", "type", "text", "id", "country", "placeholder", "Country");
var but = createbutton("button", "class", "button", "click", database, "SUBMIT");

var b = linebreak("br");
var b1 = linebreak("br");
var b2 = linebreak("br");
var b3 = linebreak("br");
var b4 = linebreak("br");
var b5 = linebreak("br");
var b6 = linebreak("br");
var b7 = linebreak("br");
var b8 = linebreak("br");
var b9 = linebreak("br");
var b10 = linebreak("br");
var b11 = linebreak("br");
var b12 = linebreak("br");
var b13 = linebreak("br");
var b14 = linebreak("br");
var b15 = linebreak("br");
var b16 = linebreak("br");
var b17 = linebreak("br");
var b18 = linebreak("br");
var b19 = linebreak("br");
var b20 = linebreak("br");
var b21 = linebreak("br");

var data = document.querySelector(".frominput");
data.append(label, b, input, b1, lname, b2, input2, b3, Address1, b4, input3, b5, Address2, b6, input4, b7, pin, b8, input5, b9, gender, b10, input6, male, input7, female, b11, para, b12, check1, c1label, b13, check2, c2label, b14, check3, c3label, b15, check4, c4label, b16, check5, c5label, b17, state, b18, stateinput, b19, country, b20, countryinput, b21, but);






















