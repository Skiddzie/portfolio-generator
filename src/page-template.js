//function that generates the bit of html with the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
  <section class="my-3" id="about">
    <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
    <p>${aboutText}</p>
  </section>
`; 
}
//I don't think this actually does anything special other than create this chunk of html
const generateProjects = projectArr => {
  return `
  <section class="my-3" id="portfolio">
    <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
    <div class="flex-row justify-space-between">
      <!-- Leaving this empty as we'll dynamically insert project HTML here -->
    </div>
  </section>
`;
}
//idk what module.exports is
module.exports = templateData => {
  
  //this object is somehow taken from app.js and includes all the user input but i have no fucking clue how it gets all of them when onnly 3 are listed
  //and i also don't know how to include more
  //if i could figure out how to include more then i'd be fine with the assignment
  const { projects, about, ...header } = templateData;
  
  //stuff like ${foo.bar} is just writing variables in the string
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
            header.github
          }">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
          ${generateAbout(about)}
          ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
  console.log(header.name);
};
