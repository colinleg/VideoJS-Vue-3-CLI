# VideoJS-Vue-3-CLI

Fonctionnalités de base de video.js dans un environnement Vue 3 CLI.
  -> Créer et personnaliser de nouveaux boutons vjs (videojs) à partir des classes composantes de vjs.
  -> Obtenir les dimensions du lecteur video
  -> Créer un overlay en HTML : insertion CSS / Javascript 
  -> Utiliser des plugins du projet video.js : videojs-css, videojs-logo
  -> Changer les sources du player, au clic sur un bouton 
  
 ## Installer le projet
  
    Le projet se trouve dans videojs-vue/ , puis : 
    
```
yarn install
```
```
yarn serve
```

### Importer le module video.js 
```js
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
```

  
