var footer_copyright = document.getElementsByClassName("copyright");
var footer_links = document.getElementsByClassName("links");
var card = document.getElementsByClassName("accordion-item");
var card_server_location = document.getElementsByClassName("location");
var card_server_status = document.getElementsByClassName("status-description");
var card_server_names = document.getElementsByClassName("name");
var card_server_ip = document.getElementsByClassName("ip");
var card_server_username = document.getElementsByClassName("username");
var card_server_password = document.getElementsByClassName("password");

var header = document.getElementById("header");

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    header.classList.toggle('dark');
    document.getElementById("footer").classList.toggle('dark');


    for (var i = 0; i < card_server_names.length; i++) {
        card_server_names[i].classList.toggle('dark');
    }

    for (var i = 0; i < card_server_ip.length; i++) {
        card_server_ip[i].classList.toggle('dark');
    }

    for (var i = 0; i < card_server_username.length; i++) {
        card_server_username[i].classList.toggle('dark');
    }

    for (var i = 0; i < card_server_password.length; i++) {
        card_server_password[i].classList.toggle('dark');
    }

    for (var i = 0; i < card_server_location.length; i++) {
        card_server_location[i].classList.toggle('dark');
    }

    for (var i = 0; i < card_server_status.length; i++) {
        card_server_status[i].classList.toggle('dark');
    }

    for (var i = 0; i < card.length; i++) {
        card[i].classList.toggle('dark');
    }

    for (var i = 0; i < footer_copyright.length; i++) {
        footer_copyright[i].classList.toggle('dark');
    }

    for (var i = 0; i < footer_links.length; i++) {
        footer_links[i].classList.toggle('dark');
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



