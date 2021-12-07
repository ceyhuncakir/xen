const chk = document.getElementById('chk');
var copyright = document.getElementsByClassName("copyright");
var links = document.getElementsByClassName("links");
var card = document.getElementsByClassName("accordion-item");
var card_location = document.getElementsByClassName("location");
var card_status = document.getElementsByClassName("status-description");
var cardnames = document.getElementsByClassName("name");
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.getElementById("header").classList.toggle('dark');
    document.getElementById("footer").classList.toggle('dark');

    for (var i = 0; i < cardnames.length; i++) {
        cardnames[i].classList.toggle('dark');
    }

    for (var i = 0; i < card_location.length; i++) {
        card_location[i].classList.toggle('dark');
    }

    for (var i = 0; i < card_status.length; i++) {
        card_status[i].classList.toggle('dark');
    }

    for (var i = 0; i < card.length; i++) {
        card[i].classList.toggle('dark');
    }

    for (var i = 0; i < copyright.length; i++) {
        copyright[i].classList.toggle('dark');
    }

    for (var i = 0; i < links.length; i++) {
        links[i].classList.toggle('dark');
    }
});

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
      
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
      
      // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
      // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      //   currentlyActiveAccordionItemHeader.classList.toggle("active");
      //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      // }
  
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
      
    });
  });



