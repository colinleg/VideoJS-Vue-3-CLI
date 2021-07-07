<template>
<head>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>

    <div>
        <h1>2ème test : Comprendre les composants internes à videojs
            Comprendre OuterHTML, copie le outerHtml d'un bouton du DOM
            Pour le placer dans un bouton videojs.
            Créer un composant clickable videojs avec 3 enfants.
        </h1>

        <button class="rounded border border-black p-5 bg-blue-200" @click=onClik>
            onClick Button
        </button>



        <div class="container">
            <video id="myVid" class="video-js" controls preload="auto" width="640" height="464" data-setup="{}"
            @pause="pause" @ended="ended" @play="play">
                <source id="src" src='@/assets/1.mp4' type='video/mp4' />
            </video>
        </div>

        <div class="container-btn">
            <button class="myBtn p-3 bg-blue-300 border border-black w-48 h-16 mx-2 vjs-control vjs-button">Option 1</button>
            <button class="myBtn p-3 bg-blue-300 border border-black w-48 h-16 mx-2">Option 2</button>
            <button class="myBtn p-3 bg-blue-300 border border-black w-48 h-16 mx-2 cursor-pointer">Option 3</button>
        </div>

    </div>
</template>

<script>

import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
import '../style/video-js.css';


export default {
    data(){
        return{
            player: null,
        }
    },
    props: {

    },
    methods:{
        initVjs(){
            const element = document.querySelector('#myVid');
            this.player = videojs(element);
            let video = this.player;
            console.log(video);
        },
        // onClik(){
        //     const element = document.querySelector('#myVid');
        //     this.player = videojs(element);

        //     let containerBtn = document.querySelector('.container-btn');
        //     this.player.el().appendChild(containerBtn)
        // }

    },
	mounted() {
        this.initVjs();

        /* Ici je crée un composant cliquable vjs, et lui attribue trois enfants,
        qui sont eux aussi des composants cliquables, plus précisément des boutons. */

        const ClickableComponent = videojs.getComponent('ClickableComponent');

        let x = new ClickableComponent(this.player,{
            children:
            [
            'button', {name:'btn1'},
            'button', {name:'btn2'},
            'button', {name:'btn3'}
            ]
        });



        /**Puis je les ajoute à ma vidéo avec la méthode addChild */

        this.player.addChild(x);



        console.log(x.el());

        let htmlFromctnrBouton = document.querySelector('.container-btn').outerHTML;
        let htmlFromBouton = document.querySelector('.myBtn').outerHTML

        x.el().outerHTML = htmlFromctnrBouton;
        x.el().children[2].outerHTML = htmlFromBouton;
        console.log(x.el().children[2])

            // let containerBtn = document.querySelector('.container-btn');
            // x.el().appendChild(containerBtn)

        // console.log(this.player.el());
        // for(let i=0; i < x.children().length; i++){
            // let id = x.children().[ i ].id_
            // console.log(id)
        // }
        /** renvoie quelque chose comme :
         *  myVid_component_494
            myVid_component_505
            myVid_component_516
            --> Ce sont des composants vjs qui ne sont "apparemment pas customisable,
            puisque seulement la référence javascript. Il faut ajouter une classe pour
            accéder à la partie DOM(html+css) de ces éléments."
         */

	},
}

</script>

<style lang="css" scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.myBtn{
    z-index: 10000;
}

</style>