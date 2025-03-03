document.body.style.backgroundColor = "#f4f7ff";
function randomColor() {
const color = '#' + Math.floor(Math.random()*16777215).toString(16);
document.body.style.backgroundColor = color;
}




const date = new Date(); 

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dayOfWeek = days[date.getDay()];
const month = months[date.getMonth()]; 
const day = date.getDate(); 
const year = date.getFullYear(); 
const formattedDate = `${dayOfWeek}, ${month} ${day} ${year}`;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('date').innerText = formattedDate;
});