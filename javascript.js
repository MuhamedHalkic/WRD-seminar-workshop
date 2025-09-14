var coll = document.getElementsByClassName("kolaps");/*Dodjela varijabli coll vrijednost class elementa
iz html code-a kolaps*/ 
var sve = document.getElementById("sve");/*Dodjela varijabli sve vrijednost id elementa
iz html code-a sve*/ 

for (var i = 0; i < coll.length; i++) { /*prva petlja prolazi kroz button-e*/
  coll[i].addEventListener("click", function () { /*dodavanje klik event*/
    for (var j = 0; j < coll.length; j++) { /*druga petlja zastvara otvoreni button*/
      var zatvori = coll[j].nextElementSibling;
      zatvori.style.maxHeight = null;
      sve.style.height = 100 + "%";
    }
    otvori(this); /*poziv funckije otvori. this je parametar*/
  });
}
function otvori(obj) { /*funkcija koja otvara button. obj je button koji korstimo */
  var content = obj.nextElementSibling; /*content traži element od obj ispod dugmeta */
  if (obj.classList.contains("active")) { 
  /*ako je otoren sadržaj ukida mu active te zatvara već otvoren button
  i sliku pozadine na početnu */
    content.style.maxHeight = null;
    obj.classList.remove("active");
    sve.style.backgroundImage = "url('pozadina/SPBW0.jpg')";
  } else {
    for (var j = 0; j < coll.length; j++) { /*sve buttone koji su active briše tu osobinu */
      coll[j].classList.remove("active");
    }
    obj.classList.toggle("active");
    var aktivni = document.getElementsByClassName("active");
/*kodovi koji mjenjaju sliku pozadine na osnovu indexa button-a
parseInt da prebaci string u int kako bi uporedili vrijednosti */
    if (parseInt(aktivni[0].id) === 0) {
      sve.style.backgroundImage = "url('pozadina/SPBW1.jpg')";
      sve.style.backgroundSize = "cover";
      sve.style.backgroundRepeat = "repeat-y";
      sve.style.height = sve.clientHeight + content.scrollHeight + "px";
    }
    if (parseInt(aktivni[0].id) === 1) {
      sve.style.backgroundImage = "url('pozadina/SPBW2.jpg')";
      sve.style.backgroundSize = "cover";
      sve.style.backgroundRepeat = "no-repeat";
      sve.style.height = sve.clientHeight + content.scrollHeight + "px";
    }
    if (parseInt(aktivni[0].id) === 2) {
      sve.style.backgroundImage = "url('pozadina/SPBW3.jpg')";
      sve.style.backgroundSize = "cover";
      sve.style.backgroundRepeat = "no-repeat";
      sve.style.height = sve.clientHeight + content.scrollHeight + "px";
    }
    if (parseInt(aktivni[0].id) === 3) {
      sve.style.backgroundImage = "url('pozadina/SPBW4.jpg')";
      sve.style.backgroundSize = "cover";
      sve.style.backgroundRepeat = "no-repeat";
      sve.style.height = sve.clientHeight + content.scrollHeight + "px";
    }
    if (parseInt(aktivni[0].id) === 4) {
      sve.style.backgroundImage = "url('pozadina/SPBW5.jpg')";
      sve.style.backgroundSize = "cover";
      sve.style.backgroundRepeat = "no-repeat";
      sve.style.height = sve.clientHeight + content.scrollHeight + "px";
    }
    if (content.style.maxHeight) {/*sadržaj koji postoji njegovo otvoranje i zatvaranje */
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
