//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;
    ConsoleDisplay = document.getElementById('ConsoleDisplay'),
    SideNav = document.getElementById('SideNav');



document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationPrompt = window.prompt("How much would you like to donate?"),
  redH3 = document.createElement("h3"),
  classArticle = document.getElementsByTagName("article");

if (donationPrompt < 100) {
  var donationAmount = document.createTextNode("Thank you for your donation of $" + donationPrompt + ".");
}
else {
  var donationAmount = document.createTextNode("Thank you for your very generous donation.");
redH3.setAttribute("style", "color: red;");

for (i = 0; i < classArticle.length; i++) {
  if (donatePrompt >= 100) {
    classArticle[i].className = "generous-donation";
  }
}
};
redH3.appendChild(donationAmount);
SideNav.appendChild(redH3);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  ConsoleDisplay.innerHTML += "This speech was written by" + speechesArray[0].author + " in " + speechesArray[0].year + ".</br>";

  if(speechesArray[0].yearIsBCE === true){
    ConsoleDisplay.innerHTML += "This speech took place before the common era.</br>";
  }else{
    ConsoleDisplay.innerHTML += "This speech took place during the common era.</br>";
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    ConsoleDisplay.innerHTML += "This is the oldest speech on the page.</br>";
  }
  if(speechesArray[0].year === newest){
    ConsoleDisplay.innerHTML += "This is the most recent speech on the page.</br>";
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  ConsoleDisplay.innerHTML += "This speech was written by" + speechesArray[1].author + " in " + speechesArray[1].year + ".</br>";

  if(speechesArray[1].yearIsBCE === true){
    ConsoleDisplay.innerHTML += "This speech took place before the common era.</br>";
  }else{
    ConsoleDisplay.innerHTML += "This speech took place during the common era.</br>";
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    ConsoleDisplay.innerHTML += "This is the oldest speech on the page.</br>";
  }
  if(speechesArray[1].year === newest){
    ConsoleDisplay.innerHTML += "This is the most recent speech on the page.</br>";
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  ConsoleDisplay.innerHTML += "This speech was written by" + speechesArray[2].author + ' in ' + speechesArray[2].year + ".</br>";

  if(speechesArray[2].yearIsBCE === true){
    ConsoleDisplay.innerHTML += "This speech took place before the common era.</br>";
  }else{
    ConsoleDisplay.innerHTML += "This speech took place during the common era.</br>";
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    ConsoleDisplay.innerHTML += "This is the oldest speech on the page.</br>";
  }
  if(speechesArray[2].year === newest){
    ConsoleDisplay.innerHTML += "This is the most recent speech on the page.</br>";
  }
});
