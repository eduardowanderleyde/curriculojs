Parse.initialize(
  "zeMYi1Y8gP4qOyBIpgoB3itKaWujqxQ6zAsBLGxC",
  "63ixWZm9uROp8FfKV4ScmxO4y2yECIaI3Z9fUZqj"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

async function retrievePerson() {
  const query = new Parse.Query("Person");

  try {
    const person = await query.get("3Fwmu8z2lq");
    const name = person.get("Name");
    const address = person.get("Address");
    const ctt = person.get("Contact");

    const meuNome = document.querySelector(".meuNome");
    meuNome.innerHTML = name;
    const meuAddress = document.querySelector(".d1");
    meuAddress.innerHTML = address;
    const meuContact = document.querySelector(".d2");
    meuContact.innerHTML = ctt;

    console.log("Dados Back4App:");
    console.log(`
Name: ${name} 
Address: ${address}
Contact: ${ctt}
    `);
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
}

async function retrieveTech() {
  const query = new Parse.Query("Techs");

  try {
    const person = await query.get("XGuS7ow1Sh");
    const html = person.get("html");
    const css = person.get("css");
    const js = person.get("js");

    const meuHtml = document.querySelector(".d3");
    meuHtml.innerHTML = html;
    const meuCSS = document.querySelector(".d4");
    meuCSS.innerHTML = css;
    const meuJS = document.querySelector(".d5");
    meuJS.innerHTML = js;

    console.log(`Techs: ${html}  ${css}  ${js}`);
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
}

retrievePerson();
retrieveTech();

$(document).ready(function () {
  $(".pdf").addClass("animated bounce");
  $(".card-title").addClass("animated fadeInLeft");

  $(".pdf").on("click", function () {
    $(".pdf").addClass("animated hinge");
  });

  let mybutton = document.getElementById("btn-back-to-top");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
