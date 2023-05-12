const WikiItem = document.getElementById('WikiItems');

function convertMarkdownToHtml(text) {
  // Überschriften umsetzen
  const headings = text.replace(/^(#+)\s*(.*?)\s*#*$/gm, (match, p1, p2) => {
    const level = p1.length;
    if (level === 1) {
      return `<h${level} id='wiki_titles1'>${p2}</h${level}> <hr id='fd' width='100%' size='4.5' color='cornflowerblue' noshade>`;
    } else if ( level == 2) {
      return `<h${level} id='wiki_titles2'>${p2}</h${level}>`;
    };
  });

  // Fettdruck umsetzen
  const bold = headings.replace(/\*\*(.*?)\*\*/g, "<strong id='wiki_bold'>$1</strong>");

  // Kursivschrift umsetzen
  const italic = bold.replace(/\*(.*?)\*/g, "<em id='wiki_italic'>$1</em>");

  console.log(italic)
  document.getElementById('main_s').innerHTML = italic
}

function ReadPage(page, item) {
  fetch('pages/'+page+'/'+ item)
    .then(response => response.text())
    .then(data => {
      console.log(data); // Hier wird die Antwort der PHP-Datei ausgegeben
      convertMarkdownToHtml(data)
    })
    .catch(error => {
      console.error(error);
    });
}

function InitDocsPage(page) {
    const wikiContainer = document.getElementById("WikiContainer");
    const parent = document.querySelector('#main_s');

    document.getElementById('sidenav').style.display = "list-item"
3
    if (wikiContainer !== null) {
      wikiContainer.style.display = "none";
      // Textbereich erstellen
      const markdownText = document.createElement("div");
      markdownText.id = "markdown-text";
      markdownText.style.fontFamily = "Montserrat";
      markdownText.style.fontSize = "20px";
      parent.appendChild(markdownText)
      console.log(parent)
    }


    //echo "<a href='#'>About</a>";


    ReadPage('hexchars', 'home.md' )
}
WikiItem.addEventListener('click', () => {
  InitDocsPage('hexchars')
});