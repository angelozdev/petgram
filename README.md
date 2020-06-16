# Advance React project

## Installation

```
git clone https://github.com/Angelozam17/petgram.git
npm install
npm start
```

## Description
+ Apollo
+ GraphQL
+ React
+ React Icons
+ React Placeholder
+ React Router Dom
+ Styled Components
+ TypeScript
+ Webpack

# Temario

## React Placeholder

```jsx
<ReactPlaceholder
	ready={loading}
	customPlaceholder={
		<MyComponentPlaceholder />
	}
>
	<MyComponent />
</ReactPlaceholder>
```

# 1. Introducción al curso avanzado de React

## **Bienvenida al curso y prerrequisitos**

¡Te damos la bienvenida al Curso Avanzado de React!

En este curso nuestro profesor Miguel Ángel Durán García, Lead Frontend Architect en Adevinta Spain trabajando desde hace cinco años con React, nos dará una vista más profunda de cómo usar React con **Hooks**, **propTypes** y mucho más. Recuerda que React es una biblioteca de vistas creada por Facebook no solo para la web, también podemos hacer vistas nativas para el móvil, aplicaciones de terminal e incluso realidad virtual. React es basado en componentes y declarativo.

### Prerrequisitos

1. HTML
2. CSS
3. JavaScript
4. Git y Github
5. Básico de React
6. Introducción a Terminal y Línea de Comandos
7. Cursos profesional de desarrollo Web

### **¿Por qué debes seguir profundizando en tus conocimientos de React?**

1. Actualmente es la tecnología más demandada del mercado.
2. Divide el código utilizando `React.lazy`.
3. Render props.
4. Hooks personalizados.
5. Comparte la lógica con componentes de orden superior.

## **Proyecto y tecnologías que usaremos**

En este curso realizaremos una aplicación muy parecida a Instagram, llamada *petgram*. Tendremos nuestras rutas, gestión de usuarios y likes.

Utilizaremos como empaquetador y transpilador:

- [Webpack](https://platzi.com/cursos/webpack/)
- [Babel](https://babeljs.io/)

Estilado con CSS en JS con:

- [styled-components](https://www.styled-components.com/)

Como linter utilizaremos:

- [Standard JS](https://standardjs.com/)

Para fetching (obtención) de datos:

- [GraphQL](https://platzi.com/cursos/graphql/)
- [React Apollo](https://www.apollographql.com/docs/react/)

Para el enrutado de la SPA utilizaremos:

- [Reach Router](https://reach.tech/router)

Para las buenas prácticas utilizaremos:

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es)
- [Cypress](https://www.cypress.io/)

Por último haremos SEO, PWA y Deploy con:

- [React Helmet](https://github.com/nfl/react-helmet)
- [Workbox](https://developers.google.com/web/tools/workbox/)
- [Progressive Web App](https://platzi.com/cursos/pwa-react-js/)
- [Deply con Now](https://platzi.com/cursos/deploy-now/)

# 2. Preparando el entorno de desarrollo

## **Clonando el repositorio e instalando Webpack**

Pasos para iniciar nuestro proyecto:

- **Paso 1:** Vamos a clonar el repositorio desde [github.com/midudev/curso-platzi-react-avanzado](https://github.com/midudev/curso-platzi-react-avanzado) usando `git clone URL_DEL_REPO` en nuestra consola.
- **Paso 2:** Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con: `npm i webpack wepack-cli --save-dev`.
- **Paso 3:** Crearemos una carpeta llama `src` y dentro de ella un archivo `index.js` en el cual colocaremos solo un `console.log('Empezamos el curso!')`.
- **Paso 4:** Crearemos en el *root* de nuestro proyecto un archivo `webpack.config.js` el cual tendrá toda la configuración de webpack
- **Paso 5:** Instalaremos `html-webpack-plugin` con: `npm i html-webpack-plugin --save-dev`.
- **Paso 6:** Instalaremos `webpack-dev-server` con: `npm i webpack-dev-server --save-dev`.
- **Paso 7:** Añadiremos un nuevo script llamado `dev`: `"dev": "webpack-dev-server"`.

```json
{
  "name": "react-avanzado",
  "version": "1.0.0",
  "description": "Crea una aplicación para subir y compartir fotos de mascotas usando Webpack, GraphQL, React Hooks, React Router, SEO y PWAs.",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
  "keywords": [
    "ReactJS",
    "Hooks",
    "React Router",
    "PWAs",
    "SEO",
    "JS",
    "TS"
  ],
  "author": "Angelo Zambrano <angelozam17@gmail.com>",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.10.2",
    "@babel/preset-env": "^7.10.2",
    "@babel/preset-react": "^7.10.1",
    "@babel/preset-typescript": "^7.10.1",
    "@types/react": "^16.9.36",
    "@types/react-dom": "^16.9.8",
    "babel-loader": "^8.1.0",
    "html-webpack-plugin": "^4.3.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}
```

## **Instalación de React y Babel / webpack.config.js**

En esta clase vamos a configurar React instalando las dependencias `npm i react react-dom` y Babel para poder transpilar código *jsx* a JavaScript Vanilla con: `npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev`.

Ahora añadiremos en nuestro `webpack.config.js` lo siguiente:

```jsx
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/dist',
      publicPath: '/' /* Toma sus recursos de la ruta raiz */
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
   },
   devServer: {
      historyApiFallback: true /* Si no encuentra nada toma como fallback el index.html */
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: [
                     '@babel/preset-typescript',
                     '@babel/preset-react',
                     '@babel/preset-env'
                  ]
               }
            }
         },
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
         filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
         filename: 'assets/[name].css'
      })
   ]
}
```

## **Linter, extensiones y deploy con Now**

### Instalación de StandardJS

En esta clase haremos que el desarrollo sea más ágil y correcto siguiendo los siguientes pasos:

- Vamos a instalar StandardJS como dependencia de desarrollo con: `npm i standard --save-dev`. StandardJS nos va a servir de Linter para una mejor escritura de JavaScript/React.
- Agregaremos un nuevo `script` en nuestro `package.json`: `"lint": "standard"`.
- Ahora vamos a ignorar aquellos archivos que no queremos que el Linter arregle, añadiremos en nuestro `package.json` lo siguiente:

```json
"standard": [
	"ignore": [
		"/api/**"
	]

```

- Ahora, queremos que nuestro Linter nos detecte los errores a medida que vamos escribiendo, para hacer esto añadimos lo siguiente a nuestro package.json:

```json
"eslintConfig": {
	"extends": [
		"./node_modules/standard/eslintrc.json"
	]
}
```

- Ahora debemos tener lo siguiente en nuestro editor de código para que funcione todo al pie de la letra:
    - Tener instalada la extensión [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - Si quieres que al guardar los cambios se formatee tu código deberás tener instalada la extensión [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - Tener las siguientes configuraciones en VSCode:
        - Format On Save: `false`
        - Prettier: Eslint Integration: `true`
        - Eslint: Auto Fix On Save: `true`

### Deploy con Now

- Ahora utilizaremos [Now](https://zeit.co/login) para hacer el *deploy* de nuestro proyecto.
- Descargaremos e instalaremos [Now](https://zeit.co/download) para que nos registre de una manera mucho más fácil los tokens de acceso y podamos continuar con el curso.
- Entraremos a la carpeta de `api` y notaremos que ya tiene un archivo `now.json` que preparamos para ti con toda la configuración necesaria para hacer el deploy.
- Para desplegar el proyecto del backend haremos lo siguiente en nuestra terminar:
    - `cd api`
    - Cambiamos el `name` de la aplicación en el `now.json`
    - Finalmente ejecutamos `now`
- Ahora para desplegar nuestro front haremos lo siguiente:
    - Crearemos un archivo `now.json` en el root de nuestro proyecto con lo siguiente:

```json
{
	"version": 2,
	"name": "petgram",
	"builds": [
		{
			"use": "@now/static-build",
			"src": "package.json"
		}
	],
	"routes": [
		{
			"src": "(.*).js",
			"dest": "/$1.js"
		},
		{
			"src": "(.*).json",
			"dest": "/$1.json"
		},
		{
			"src": "/.*",
			"dest": "index.html"
		}
	]
}
```

- En nuestro `package.json` añadiremos el siguiente `script`: `"now-build": "npm run build"`.
- Finalmente en la raíz de nuestro proyecto ejecutaremos `now` para que nos dé una URL en la que se verá nuestro proyecto.

Now ya no es now ahora es vercel y tiene algunas diferencias, puede llegar a ser confuso. En todo caso lo que deben hacer es:

1. Instalar vercel a traves del comando **npm i -g vercel**
2. Despues de instalar vercel deben hacer **vercel login** y verificar su correo electronico, para que la instancia de versel local este conectada con el remoto y de esta forma evitar los tokens.
3. Luego si realizar los pasos que dice el profe, pero con la difencia que el comando **no es now, es vercel**

# 3. Creando la interfaz con styled-components

## **¿Qué es CSS-in-JS?**

Con CSS-in-JS no debemos preocuparnos por tener dos clases igual, no nos debemos preocupar por el Critical Path CSS, tendremos un CSS mucho más óptimo.

En esta clase utilizaremos [styled-components](https://www.styled-components.com/) el cual es una biblioteca para CSS-in-JS pensada más que todo para React.

## Mantener relación 16/9 - 4/3 en una imagen

[Fluid Width Video | CSS-Tricks](https://css-tricks.com/fluid-width-video/)

```css
figure {
      width: 100%;
      height: 0;
      padding: **56.25%** 0 0 0; /* 16/9 */
      position: relative;
   }

   img {
      width : 100%;
      height: 100%;
      position: absolute;
      top   : 0;
      bottom: 0;
      left: 0;
      right: 0;
      object-fit: cover;
   }
```

## **SVGR: de SVG a componente de ReactJS**

En esta clase usaremos [maketext.io](https://maketext.io/) para crear nuestro logo y descargarlo en SVG. Posteriormente a esto utilizaremos [SVGOMG](https://jakearchibald.github.io/svgomg/) para optimizar nuestro logo y tener una mejor versión para usarla en nuestro proyecto.

Luego para convertir nuestro logo *svg* en un componente utilizaremos [SVGR](https://www.smooth-code.com/open-source/svgr/playground/).

# 4. Hooks

## **¿Qué son los Hooks?**

En esta clase, el profesor Miguel Ángel Durán García nos explicará qué son los Hooks en React, cómo usar `useEffect` y `useState` y cómo estos Hooks nos permitirán mejorar el performance de nuestra aplicación.

React es una biblioteca de JavaScript para construir interfaces de usuario. Es declarativo, basado en componentes y puedes escribir una vez y usarlo donde sea.

## **Uso de polyfill de Intersection Observer e imports dinámicos**

En esta clase añadiremos soporte a navegadores viejos con un [polyfill de Intersection Observer](https://github.com/w3c/IntersectionObserver/tree/master/polyfill).

# 5. GraphQL y React Apollo

## **¿Qué es GraphQL y React Apollo?**

### **Inicializando React Apollo Client y primer HoC**

GraphQL es un lenguaje creado por Facebook para obtener solo los datos que necesitamos en nuestra aplicación. Imaginemos que tenemos una REST API con WordPress, él nos entrega un JSON con mucha *data* innecesaria y solo queremos unos cuantos *fields*; GraphQL hace posible obtener únicamente esa data.

React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL.

Vamos a instalar `npm i apollo-boost`, una utilidad que nos permite inicializar nuestra conexión con un servidor de Apollo muy rápidamente y sin configuración, necesitaremos `npm i react-apollo` el cual es la integración de Apollo con React y finalmente `npm i graphql`.

Configuraremos nuestro `index.js` para inicializar nuestro cliente de Apollo con GraphQL de la siguiente manera:

```jsx
// index.js

{/*...*/}
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

{/*...*/}

const client = new ApolloClient({
  uri: 'URL_DEL_BACKEND' // En el proyecto usamos https://petgram-server.midudev.now.sh/graphql aquí debes colocar el tuyo
})

ReactDOM.render(
  <ApolloProvider client={client}>
          <App />
  ApolloProvider>,
  document.getElementById('app')
)
```

```jsx
// Component.js

/* GraphQL and Apollo */
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const withPhotos = gql`
   query getPhotos{
      photos {
         id,
         categoryId,
         src,
         likes,
         liked,
         userId
      }
   }
`
const { loading, **data** } = useQuery(withPhotos)
```

# 6. Reach Router

## **¿Qué es Reach Router? Creando la ruta Home**

Reach Router es una versión simplificada y mejor optimizada de React Router, su creador es Ryan Florence el mismo creador de React Router. Se anunció que los dos paquetes se iban a unir, pero su API se va a parecer más a Reach Router.

En este módulo te vamos a enseñar como usar este increíble paquete para manejar las rutas en nuestra aplicación.

## **Usando Link para evitar recargar la página**

En esta clase utilizaremos el componente `Link` para hacer que nuestros enlaces no hagan que la página se recargue y funcione como una Single Page Application. Recuerda siempre que puedas utilizar `Link` en lugar de `a` para tener una mejor experiencia de usuario y que no recargue la página.

## **Estilando las páginas activas**

Reach Router nos agrega un atributo `aria-current="page"` en la página que esté activa en ese momento para que podamos estilarla, agregarle algún tipo de funcionamiento o decirle al usuario en donde se encuentra.

```jsx
import { NavLink } from 'react-router-dom';

<nav>
	<NavLink exact to="/"> // <a href="/" aria-current="page" class="active">hola</a>
		hola
	</NavLink>
	<NavLink exact to="/another">
		anothe
	</NavLink> // <a href="/another">another</a>
</nav>
```

## **Rutas protegidas**

Con el método *render props* realizaremos rutas de autenticación para saber si el usuario ha iniciado sesión o no y podremos mostrar contenido dependiendo de las *props* que le estemos pasando.

## Solución de URLs en react-router-dom al refrescar la página

[React-router urls don't work when refreshing or writing manually](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually)

# 7. Gestión del usuario

## I**ntroducción a React.Context**

[Context - React](https://es.reactjs.org/docs/context.html)

Context API es una característica que tiene React para poder pasar datos en nuestra aplicación sin necesidad de usar las Props.

Para crear un contexto vamos a importar el método `createContext` de la librería React. El contexto que creemos no va a dejar de ser un componente de React, por ello debe llevar mayúscula al inicio.

El Context que creemos nos va a proporcionar 2 componentes:

- **Provider**: componente que debe envolver a nuestra aplicación.
- **Consumer**: nos va a permitir acceder a las *render props* que declaremos en el Provider.


Repo [Curso Avanzado de React de Platzi](https://platzi.com/cursos/react-avanzado/)
