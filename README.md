# VideoJS-Vue-3-CLI

Fonctionnalités de base de video.js dans un environnement Vue 3 CLI.<br/><br/>
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
  
### Créer une classe de bouton personnalisé 

```js
  // on prend le composant Button de video.js
  let button = videojs.getComponent('Button');
  
  // on étend la classe Button à customButton
  const customButton = videojs.extend(button, {

    constructor: function() {
      button.apply(this, arguments);
      this.controlText("CustomButton"); // le titre du nouveau bouton
      this.addClass('vjs-option-btn'); // la classe html du nouveau bouton
    }

  });
```
  
### Instancier un bouton appartenant à cette nouvelle classe 
  
```js
  let myCustomButton = new customButton(this.player);
    this.player.addChild(myCustomButton)
    console.log(opt1);
```
  
### Obtenir les dimensions du tag video 
  
```js
getDimensions(element){

  let el = element;
  let rect = el.getBoundingClientRect();

  this.elH = el.offsetHeight;
  this.elW = el.offsetWidth;
  this.elMt = rect.top;
  this.elMl = rect.left;

},
```
```js
  this.getDimensions(this.player.el());
```

### Créer un calque superposé à la vidéo 
  
```js
initLayout(){
  
  let layoutStyle = document.querySelector('.layout').style;
  let h = this.elH - 60; // 60px est ici la taille de controlBar dans le lecteur vidéo

  layoutStyle.height = `${h}px`;
  layoutStyle.width = `${this.elW}px`;

},
```
### Activer ou cacher le calque avec 2 méthodes
```js
show(){
  
  let layout = document.querySelector('.layout');

  layout.classList.remove('hide');
  layout.classList.add('active');
  
  },
hide(){
  
  let layout = document.querySelector('.layout');

  layout.classList.remove('active');
  layout.classList.add('hide');
  
  }
```
  
Problème : à ce niveau là, le calque ne se redimensionne  pas quand la vidéo passe en plein écran.<br />
Pour cela il faut l'insérer dans l'élément DOM de l'instance videojs
 
```js
this.player = videojs(document.querySelector('#player'));
      this.getDimensions(this.player.el());
      let maskContainer = document.querySelector('.mask-ctnr');
      this.player.el().append(maskContainer);
```
  
```js
this.player.on('fullscreenchange',() => {

        let layout = document.querySelector('.layout');
        let player = document.querySelector('#player');
        this.getDimensions(this.player.el()); // prend les dimension du player ( plein écran ) 
        this.initLayout(); // redimensionne le calque (ici fait w-100%, h-100% du player)
        player.append(layout);

    })
``` 
  
  
