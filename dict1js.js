function reload()
{
  location.reload();
}

function first()
{
    let search=document.getElementById('suv').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
     {
      if (this.readyState == 4 && this.status == 200) 
      {
        let json=JSON.parse(xhttp.responseText)
        document.getElementById('meaning').innerHTML=json[0].word;
        document.getElementById('print') .innerHTML=json[0].phonetic;
        document.getElementById('print1').innerHTML=json[0].meanings[0].partOfSpeech;
        document.getElementById('print2').innerHTML=json[0].meanings[0].definitions[0].definition;
}
};
xhttp.open('GET','https://api.dictionaryapi.dev/api/v2/entries/en/'+search, true);
xhttp.send();
}