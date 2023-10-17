document.addEventListener("DOMContentLoaded", function () {
  const verse_btn = document.querySelector(".verse_btn");
  const book = document.querySelector(".book");
  const chapter = document.querySelector(".chapter");
  const verse = document.querySelector(".verse");
  const verse_text= document.querySelector(".verse_text");

  const url = 'https://labs.bible.org/api/?passage=random&type=json';

  const getVerse = () => {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      book.innerHTML = data[0].bookname;
      chapter.innerHTML = data[0].chapter;
      verse.innerHTML = data[0].verse;
      verse_text.innerHTML =`"${data[0].text}"`
      
    })
    .catch(error => {
      console.log('error');
    })
  }
  verse_btn.addEventListener("click", getVerse);
});