// It's a function for accordions
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the selections__sublist */
    this.classList.toggle("active");
    
    /* Toggle between hiding and showing the active selections__sublist */
    var selections__sublist = this.nextElementSibling;
    if (selections__sublist.style.display === "flex") {
      selections__sublist.style.display = "none";
    } else {
      selections__sublist.style.display = "flex";
    }
    
  });
}


// * ==================================== * //
/*
let summaryBox = document.querySelector('#summaryContent');
let selectedCofes = document.querySelectorAll('.selections__subitem');
let selectedCofeTitle = document.querySelectorAll('.selections__subtitle');

selectedCofes.forEach(selectedCofe => {
  
  selectedCofe.addEventListener('click', (event) => {
    event.preventDefault() == false;
    // selectedCofe.setAttribute('class', 'selections__subitem');
    
    toggleClassCyan(selectedCofe);
    
  });
});


function toggleClassCyan(box) {
  box.classList.toggle('cyan');

  getTitle(box);
  return;
}

let innerBox;
function getTitle(box) {
  innerBox = box.childNodes;
  title = innerBox[1];
  console.log(title.textContent);
  return;
}

*/

