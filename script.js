import { data } from "./data.js";
console.log(data);


const tr1_element = document.getElementById("tr1")
const td1_element = document.createElement("td")
td1_element.innerHTML = data.name
tr1_element.appendChild(td1_element)

const tr2_element = document.getElementById("tr2")
const td2_element = document.createElement("td")
td2_element.innerHTML = data.lastname
tr2_element.appendChild(td2_element)

const tr3_element = document.getElementById("tr3")
const td3_element = document.createElement("td")
td3_element.innerHTML = data.num[data.age - 1]
tr3_element.appendChild(td3_element)

const tr4_element = document.getElementById("tr4")
const td4_element = document.createElement("td")
td4_element.innerHTML = data.school
tr4_element.appendChild(td4_element)