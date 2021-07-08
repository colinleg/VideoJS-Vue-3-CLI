# VideoJS-Vue-3-CLI

Fonctionnalités de base de video.js dans un environnement Vue 3 CLI.<br/>
  -> Créer et personnaliser de nouveaux boutons vjs (videojs) à partir des classes composantes de vjs.<br/>
  -> Obtenir les dimensions du lecteur video<br/>
  -> Créer un overlay en HTML : insertion CSS / Javascript <br/>
  -> Utiliser des plugins du projet video.js : videojs-css, videojs-logo <br/>
  -> Changer les sources du player, au clic sur un bouton <br/>
  
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
### Instancier video.js sur une balise <video>
  
```html
  <video id="player" class="video-js" controls preload="auto" width="960" height="505" data-setup="{}">
                <source id="src" src='@/assets/1.mp4' type='video/mp4' />
  </video>
```
  
```js
mounted(){
this.player = videojs(document.querySelector('#player'));
}
```
