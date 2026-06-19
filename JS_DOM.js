// The DOM (Document Object Model) is the browser's representation of your HTML as a JS object you can manipulate. 

// The four selectors you need to know
document.getElementById("title")          // by id — returns one element
document.getElementsByClassName("card")   // by class — returns HTMLCollection (like an array)
document.querySelector(".card")           // CSS selector — returns FIRST match
document.querySelectorAll(".card")        // CSS selector — returns ALL matches (NodeList)


//types of queryselector arguments:
document.querySelector("#title")      // by id
document.querySelector(".card")       // by class
document.querySelector("h1")          // by tag
document.querySelector(".card h2")    // nested — same as CSS
 
const title = document.querySelector("#title");

title.textContent          // gets the text
title.textContent = "Hello"  // sets the text

title.innerHTML            // gets HTML inside (including tags)
title.innerHTML = "<span>Hello</span>"  // sets HTML inside

title.style.color = "red"   // inline style

title.classList.add("active")      // add a class
title.classList.remove("active")   // remove a class
title.classList.toggle("active")   // add if missing, remove if present