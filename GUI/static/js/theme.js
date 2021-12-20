var footer_copyright = document.getElementsByClassName("copyright");
var footer_links = document.getElementsByClassName("links");

var card = document.getElementsByClassName("accordion-item");
var card_server_location = document.getElementsByClassName("location");
var card_server_status = document.getElementsByClassName("status-description");
var card_server_names = document.getElementsByClassName("name");
var card_server_ip = document.getElementsByClassName("ip");
var card_server_username = document.getElementsByClassName("username");
var card_server_password = document.getElementsByClassName("password");

var empty = document.getElementById("empty");
var no_data = document.getElementsByClassName("no-data");
var no_data_description = document.getElementsByClassName("no-data-description");

var header = document.getElementById("header");

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const chk = document.getElementById('chk');
const footer_1 = document.querySelector('footer');
let darkMode = localStorage.getItem('darkMode');

var pagination_disabled = document.querySelectorAll(".disabled");
let pagination_next = document.querySelectorAll('[aria-label="Next"]');
let pagination_previous = document.querySelectorAll('[aria-label="Previous"]');
var pagination_link_a = document.getElementsByClassName("page-link");
var pagination_link_active = document.getElementsByClassName("page-item active");

const darkModeToggle = document.getElementById('#chk');

const enableDarkMode = () => {
  // 1. Add the class to the body
    document.body.classList.add('dark');
    header.classList.add('dark');

    if(pagination_link_a) {
      for (var i = 0; i < pagination_link_a.length; i++) {
          pagination_link_a[i].classList.add('dark');
      }
    }

    if(pagination_link_active) {


      for (var i = 0; i < pagination_link_active.length; i++) {
        darklink = pagination_link_active[i].getElementsByClassName('page-link')
        darklink[0].classList.remove('dark');
      }
    }

    if(pagination_next) {
      for (var i = 0; i < pagination_next.length; i++) {
        pagination_next[i].classList.add('dark');
      }
    }

    if(pagination_previous) {
      for (var i = 0; i < pagination_previous.length; i++) {
        pagination_previous[i].classList.add('dark');
      }
    }

    if(pagination_disabled) {
      for (var i = 0; i < pagination_disabled.length; i++) {
        pagination_disabled[i].classList.add('dark');
      }
    }

    if(empty) {
      empty.classList.add('dark');
    }

    for (var i = 0; i < no_data_description.length; i++) {
        no_data_description[i].classList.add('dark');
    }

    for (var i = 0; i < no_data.length; i++) {
        no_data[i].classList.add('dark');
    }

    for (var i = 0; i < card_server_names.length; i++) {
        card_server_names[i].classList.add('dark');
    }

    for (var i = 0; i < card_server_ip.length; i++) {
        card_server_ip[i].classList.add('dark');
    }

    for (var i = 0; i < card_server_username.length; i++) {
        card_server_username[i].classList.add('dark');
    }

    for (var i = 0; i < card_server_password.length; i++) {
        card_server_password[i].classList.add('dark');
    }

    for (var i = 0; i < card_server_location.length; i++) {
        card_server_location[i].classList.add('dark');
    }

    for (var i = 0; i < card_server_status.length; i++) {
        card_server_status[i].classList.add('dark');
    }

    for (var i = 0; i < card.length; i++) {
        card[i].classList.add('dark');
    }

    for (var i = 0; i < footer_copyright.length; i++) {
        footer_copyright[i].classList.add('dark');
    }

    for (var i = 0; i < footer_links.length; i++) {
        footer_links[i].classList.add('dark');
    }

    footer_1.classList.add('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark');
    header.classList.remove('dark');

    if(pagination_link_a) {
      for (var i = 0; i < pagination_link_a.length; i++) {
        pagination_link_a[i].classList.remove('dark');
      }
    }

    if(pagination_next) {
      for (var i = 0; i < pagination_next.length; i++) {
        pagination_next[i].classList.remove('dark');
      }
    }

    if(pagination_previous) {
      for (var i = 0; i < pagination_previous.length; i++) {
        pagination_previous[i].classList.remove('dark');
      }
    }

    if(pagination_disabled) {
      for (var i = 0; i < pagination_disabled.length; i++) {
        pagination_disabled[i].classList.remove('dark');
      }
    }

    if(empty) {
      empty.classList.remove('dark');
    }

    for (var i = 0; i < no_data_description.length; i++) {
        no_data_description[i].classList.remove('dark');
    }

    for (var i = 0; i < no_data.length; i++) {
        no_data[i].classList.remove('dark');
    }

    for (var i = 0; i < card_server_names.length; i++) {
        card_server_names[i].classList.remove('dark');
    }

    for (var i = 0; i < card_server_ip.length; i++) {
        card_server_ip[i].classList.remove('dark');
    }

    for (var i = 0; i < card_server_username.length; i++) {
        card_server_username[i].classList.remove('dark');
    }

    for (var i = 0; i < card_server_password.length; i++) {
        card_server_password[i].classList.remove('dark');
    }

    for (var i = 0; i < card_server_location.length; i++) {
        card_server_location[i].classList.remove('dark');
    }

    for (var i = 0; i < card_server_status.length; i++) {
        card_server_status[i].classList.remove('dark');
    }

    for (var i = 0; i < card.length; i++) {
        card[i].classList.remove('dark');
    }

    for (var i = 0; i < footer_copyright.length; i++) {
        footer_copyright[i].classList.remove('dark');
    }

    for (var i = 0; i < footer_links.length; i++) {
        footer_links[i].classList.remove('dark');
    }

    footer_1.classList.remove('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
chk.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

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
