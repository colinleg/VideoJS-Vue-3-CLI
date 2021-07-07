<template>
<!-- https://github.com/videojs/video.js/issues/3473 -->
    <div>
        <h1>3eme test : Créer un button custom video js,
                à partir de Button ( par extend, constructor ).
                CSS via classe (vjs-custom.css).
                Fonction au clic
            <!-- à voir : this.player.getChild() -->
        </h1>


        <div class="container">
            <video id="myVid" class="video-js" controls preload="auto" width="640" height="464" data-setup="{}">
                <source id="src" src='@/assets/1.mp4' type='video/mp4' />
            </video>
        </div>
    </div>
</template>

<script>
import videojs from 'video.js';
import '../style/video-js.css'
import '../style/vjs-custom.css';

export default {
    data(){
        return{
            player: null,
        }
    },
    props: {

    },
    methods:{

    },
	mounted() {
		const element = document.querySelector('#myVid');
        this.player = videojs(element);

        /** On copie le composant 'Button' qui est un objet de videojs dans la variable button */
        let button = videojs.getComponent('Button');

        /** Création d'une class pour créer des boutons qui changeront l'url de la video */
        const customOptionButton = videojs.extend(button, {

            constructor: function() {
            button.apply(this, arguments);
            this.controlText("Custom Option Button"); // le titre de l'élément
            this.addClass('vjs-option-btn'); // la classe de l'élément
            // this.removeClass('vjs-button');
            }

        })
        /** Enregistre le nouveau composant dans le js de video-js */
        videojs.registerComponent('customOptionButton', customOptionButton);


        /** Instanciation d'un customOptionButton */
        let option1 = new customOptionButton(this.player);

        let opt1Dom = option1.el();

        opt1Dom.addEventListener('click', function(){
            console.log('hahaha')
        })

        opt1Dom.textContent = 'Une option';

        console.log(option1); // un objet javascript conforme à videojs
        console.log(opt1Dom) // un HTML Element de type button, qui a comme classe vjs-option-btn

        /** On ajoute le bouton au lecteur */
        this.player.addChild(option1);


        // console.log(this.player);
    }
}

</script>

<style lang="css" scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .z{
        z-index: 999999;
    }
</style>

