const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const images = document.querySelectorAll('#slider .photos img');

let index = 0;

prev.onclick = function(){
    images[index].classList.remove('showed');
    index = index - 1;

    if(index < 0){
        index = images.length - 1;
    }
    images[index].classList.add('showed');
    
}

next.onclick = function(){
    images[index].classList.remove('showed');
    index = index + 1;

    if(index >= images.length){
        index = 0;
    }
    images[index].classList.add('showed');
}
var result;
   
function check()

{

   var question;
   var value1;
   var value2;
   
   
   question = 1;
   value1 = 0;
   value2 = 0;
   
   
   result = "";

   var choice;
   
   for (question = 1; question <= 3; question++) {
   
      var q = document.forms['quiz'].elements['q'+question];

         for (var i = 0; i < q.length; i++) {
            if (q[i].checked) {
               choice = q[i].value;
            }
         }

         if (choice == "value1") {
            value1++;
         }

         if (choice == "value2") {
            value2++;
         }


      }

   if (value2 == 0) {

      // Нет правильных ответов
      result = "ocenka2";

   }

   else if (value2 == 1) {

      // Один правильный ответ
      result = "ocenka3";

   }

   else if (value2 == 2) {

      // Два правильных ответа
      result = "ocenka4";

   }

   else if (value2 == 3) {

      // Три правильных ответа
      result = "ocenka5";

   }


   else {
      result = "404";
   }

   window.location = result + '.html';

}

//  удалить условие, где показывается и добавить displayButtons();
/* function displayButtons(){
    next.style.display = "inline-block";
    prev.style.display = "inline-block";

    if(index >= images.length - 1){
        next.style.display = "none";
    }

    if(index <= 0) {
        prev.style.display = "none";
    }
}
*/















