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
















let numbersix= document.getElementById("number-minus");
const plusnum = document.getElementById('numberplus');
const clickCompleted = document.getElementsByClassName('click-completed');

for (let i = 0; i < clickCompleted.length; i++) {
    clickCompleted[i].addEventListener('click', function(event) {
        alert("Board update Successfully")
        const tittle = event.target.parentElement.parentElement.parentElement.getElementsByClassName('title')[0].innerText;
        event.target.setAttribute('disabled', true);
        // event.target.classList.add( 'bg-[#ced6ff]')
        event.target.style.backgroundColor='#ced6ff';
        
        const numberSixVert = parseInt(numbersix.innerText);
        numbersix.innerText= numberSixVert-1;


       const plusnumVert = parseInt(plusnum.innerText);
       plusnum.innerText = plusnumVert+1;


       const now = new Date();
       let hours = now.getHours();
       const minutes = now.getMinutes().toString().padStart(2, '0');
       const seconds = now.getSeconds().toString().padStart(2, '0');
       const ampm = hours >= 12 ? 'PM' : 'AM';
       
       
       hours = hours % 12 || 12;
       
       const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
       
       
        const newContent = `
       <p class="mb-5 p-2 bg-[#F4F7FF] font-normal">
          You have Complete The Task ${tittle} at ${currentTime}
       </p>
       `;



     

      document.getElementById('addtag').innerHTML += newContent;
      


        if(numberSixVert === 1){
            alert("hridoy")
        }
    });
}



const clearData = document.getElementsByClassName('clear-borard')[0];
const clearDatas = document.getElementById('addtag')
clearData.addEventListener('click', function(event) {
    clearDatas.innerHTML = "";
    
   
})