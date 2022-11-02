document.querySelectorAll("li:not(.ember)").forEach( elem => {
  elem.style.color = elem.dataset["tipus"] == "helyes" ? "green" : "red";
});
