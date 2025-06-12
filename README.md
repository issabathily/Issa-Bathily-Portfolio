#B.code Portfolio 
lien website -> https://issa-bathily-portfolio.onrender.com/

<img width="938" alt="image" src="https://github.com/user-attachments/assets/6f18146d-1989-45ac-b11f-d73e19e13f41" />

<img width="937" alt="image" src="https://github.com/user-attachments/assets/31f880ba-c3d5-4eaa-baf4-f7dc61a43151" />

<img width="943" alt="image" src="https://github.com/user-attachments/assets/16cf1691-f0a3-4223-854b-ea34d7d7f336" />
<img width="938" alt="image" src="https://github.com/user-attachments/assets/4693eba6-17d2-49f7-bae2-d75f090c8051" />






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Expertise Web & Mobile - Transformation Digitale</title>
<style>
  body, html {
    margin: 0; padding: 0; height: 100%;
    background: black;
    color: #00ff99;
    font-family: 'Courier New', Courier, monospace;
    overflow: hidden;
  }
  #matrix {
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background: black;
  }
  .content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 3rem auto;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.7);
    border-left: 6px solid #00ff99;
    box-shadow: 0 0 15px #00ff99;
    border-radius: 8px;
  }
  h1 {
    font-weight: 900;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #00ff99;
  }
  p, ul {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #ccffdd;
  }
  ul {
    list-style: none;
    padding-left: 1rem;
  }
  ul li::before {
    content: "• ";
    color: #00ff99;
    font-weight: bold;
  }
  strong {
    color: #00ff99;
  }
</style>
</head>
<body>

<canvas id="matrix"></canvas>

<div class="content">
  <h1>Expertise en développement Web & Mobile : bâtisseurs de la transformation digitale</h1>

  <p>Nous ne faisons pas que coder, nous concevons des solutions digitales qui transforment les entreprises.</p>

  <p><strong>Notre savoir-faire :</strong></p>
  <ul>
    <li>Conception et développement d’applications web et mobiles performantes et adaptées.</li>
    <li>Création d’interfaces utilisateur intuitives et engageantes.</li>
    <li>Gestion et optimisation des données pour éclairer les décisions stratégiques.</li>
    <li>Déploiement de systèmes évolutifs et robustes pour soutenir votre croissance.</li>
    <li>Accompagnement et formation des équipes vers une culture digitale agile et data-driven.</li>
  </ul>

  <p>Être développeur web et mobile, c’est être à la fois <strong>innovateur, technicien et partenaire stratégique</strong>.</p>

  <p>Avec notre expertise, vos idées deviennent des outils puissants et vos projets digitaux des succès durables.</p>

  <p><strong>Ensemble, construisons votre avenir numérique.</strong></p>

  <p>#DevWeb #DevMobile #TransformationDigitale #Innovation #CultureData #SolutionsDigitales #ISEPDiamniadio</p>
</div>

<script>
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const letters = ['0', '1'];
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = [];

  for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
  }

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff99';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 50);
</script>

</body>
</html>

