function myBtn() {
    for(var i=0; i<5; i++) {
        if (document.querySelectorAll("li")[i]) {
            var btnClick = document.querySelectorAll("li")[i];
            btnClick.classList.remove("myNavLink");
        }
    }
}

// var header = document.getElementsByClassName("myNavList");
// var btns = document.getElementsByClassName("a");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

/* Code for changing active 
            link on clicking */
            var btns = 
                $("#navigation-bar .navbar-nav .nav-link");
  
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click",
                                      function () {
                    var current = document
                        .getElementsByClassName("active");
  
                    current[0].className = current[0]
                        .className.replace(" active", "");
  
                    this.className += " active";
                });
            }
  
            /* Code for changing active 
            link on Scrolling */
            $(window).scroll(function () {
                var distance = $(window).scrollTop();
                $(".page-section").each(function (i) {
  
                    if ($(this).position().top 
                        <= distance + 250) {
                          
                            $(".navbar-nav a.active")
                                .removeClass("active");
  
                            $(".navbar-nav a").eq(i)
                                .addClass("active");
                    }
                });
            }).scroll();

function aboutTransition() {
    var navbar = document.querySelector(".img-wrap");
    var navPosition = document.querySelector(".bio");
    var scrollValue = window.scrollY;
    if(scrollValue > 150) {
        navbar.classList.add("img-wrap2");
        navPosition.classList.add("bio2");
    }
    else {
        navbar.classList.remove("img-wrap2");
        navPosition.classList.remove("bio2");
    }

    if(scrollValue < 150) {
        navbar.classList.remove("img-wrap2");
        navPosition.classList.remove("bio2");
    }
}

window.addEventListener("scroll", aboutTransition);

var count = 1;
function clickedButton() {
            var buttonClick = document.querySelectorAll(".eduBtn")[0];
            var buttonClick1 = document.querySelectorAll(".eduIcon1")[0];
            var buttonClick2 = document.querySelectorAll(".eduIcon")[0];
            if(count === 1) {
                buttonClick.classList.add("clickedButton");
                buttonClick1.classList.add("eduIcon2");
                buttonClick2.classList.add("eduIcon3");
                count = count + 1;
            }
            else if (count === 2) {
                buttonClick.classList.remove("clickedButton");
                buttonClick1.classList.remove("eduIcon2");
                buttonClick2.classList.remove("eduIcon3");
                count = 1;
            }
    }
var count1 = 1;
function clickedButton1() {
            var buttonClick = document.querySelectorAll(".eduBtn")[1];
            var buttonClick1 = document.querySelectorAll(".eduIcon1")[1];
            var buttonClick2 = document.querySelectorAll(".eduIcon")[1];
            if(count1 === 1) {
                buttonClick.classList.add("clickedButton");
                buttonClick1.classList.add("eduIcon2");
                buttonClick2.classList.add("eduIcon3");
                count1 = count1 + 1;
            }
            else if (count1 === 2) {
                buttonClick.classList.remove("clickedButton");
                buttonClick1.classList.remove("eduIcon2");
                buttonClick2.classList.remove("eduIcon3");
                count1 = 1;
            }
    }
var count2 = 1;
function clickedButton2() {
            var buttonClick = document.querySelectorAll(".eduBtn")[2];
            var buttonClick1 = document.querySelectorAll(".eduIcon1")[2];
            var buttonClick2 = document.querySelectorAll(".eduIcon")[2];
            if(count2 === 1) {
                buttonClick.classList.add("clickedButton");
                buttonClick1.classList.add("eduIcon2");
                buttonClick2.classList.add("eduIcon3");
                count2 = count2 + 1;
            }
            else if (count2 === 2) {
                buttonClick.classList.remove("clickedButton");
                buttonClick1.classList.remove("eduIcon2");
                buttonClick2.classList.remove("eduIcon3");
                count2 = 1;
            }
    }
var count3 = 1;
function clickedButton3() {
            var buttonClick = document.querySelectorAll(".eduBtn")[3];
            var buttonClick1 = document.querySelectorAll(".eduIcon1")[3];
            var buttonClick2 = document.querySelectorAll(".eduIcon")[3];
            if(count3 === 1) {
                buttonClick.classList.add("clickedButton");
                buttonClick1.classList.add("eduIcon2");
                buttonClick2.classList.add("eduIcon3");
                count3 = count3 + 1;
            }
            else if (count3 === 2) {
                buttonClick.classList.remove("clickedButton");
                buttonClick1.classList.remove("eduIcon2");
                buttonClick2.classList.remove("eduIcon3");
                count3 = 1;
            }
    }

