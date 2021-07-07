<template>
    <div>
        <h1>4eme test: Le plugin videojs-css
            <!-- npm install --save videojs-css  -->
        </h1>


        <div class="container">
            <video id="player" class="video-js" controls preload="auto" width="640" height="464" data-setup="{}"
            @play=onPlay>
                <source id="src" src='@/assets/1.mp4' type='video/mp4' />
            </video>
        </div>
    </div>
</template>

<script>
import videojs from 'video.js';
// inclure video-css après videojs
import 'videojs-css'

import 'video.js/dist/video-js.css';
import 'videojs-css/dist/videojs-css.css'

export default {
    data(){
        return{
            player: null,
        }
    },
    methods: {
        onPlay(){
            let button = videojs.getComponent('Button');
            const customOptionButton = videojs.extend(button, {

            constructor: function() {
            button.apply(this, arguments);
            this.controlText("CustomOptionButton"); // le titre de l'élément
            this.addClass('vjs-option-btn'); // la classe de l'élément
            }

            })

            let opt1 = new customOptionButton(this.player);
            this.player.addChild(opt1)
            console.log(opt1);
            console.log(this.player);

        }
    },
    mounted(){
        this.player = videojs(document.querySelector('#player'));

        // console.log(this.player);
        // console.log(this.player.el());

        this.player.css({
            controlBar:{
                    borderRadius: "20px",
                    marginBottom: "15px",
                    width:"90%",
                    marginLeft:"5%",
                    fontSize:"1.5em",
                    background:"#3F51B5"
            },
            bigPlayButton:{
                    borderRadius: "10%",
                    width:"150px",
                    height:"150px",
                    lineHeight:"150px",
                    fontSize:"80px",
                    border:"none",
                    left:"50%",
                    top:"50%",
                    transform:"translate(-50%,-50%)",
                    background:"#3F51B5"

            }
        })
    }
}
</script>

<style lang="css" scoped>

</style>