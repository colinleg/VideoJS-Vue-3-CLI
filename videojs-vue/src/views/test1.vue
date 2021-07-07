<template>
    <div>
        <h1>1er test : Insérer un bouton + Afficher un Logo + Changer de Source </h1>
            <!-- J'ai essayé d'insérer 2 boutons mais failed  -->
        <button @click=changeSource>Change Sources</button>
        <button @click=newBtn>Create Button</button>
        <div class="container">
            <video id="myVid" class="video-js" controls preload="auto" width="640" height="464" data-setup="{}"
            @pause="pause" @ended="ended" @play="play">
                <source id="src" src='@/assets/1.mp4' type='video/mp4' />

            </video>
        </div>
    </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-logo';
import 'videojs-logo/dist/videojs-logo.css';
import {whiteLeft2,whiteRight2, styleBtn} from '../style/vjs-customs';

export default {
    data(){
        return{
            myVid: null,
            modalDialog: null,
            modal: null,
            vidBtn: null,
            monDiv: null,
            src: {
                type: 'video/mp4',
                src: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
            },
            logo: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Circle-icons-computer.svg/512px-Circle-icons-computer.svg.png',
                width:  100,
                offsetH: 300, // decalage horizontal
                offsetV: 230 // décalage vertical
             //    https://www.npmjs.com/package/videojs-logo
           },


        }
    },
    props: {

    },
    methods:{
        pause(){
            console.log(this.myVid.currentTime())
        },
        ended(){
            console.log('video terminée')
        },
        play(){
            // let video = this.myVid;
            // video.controls(false);
            // video.logo(this.logo).show()
        },
        changeSource(){
            let video = this.myVid;
            video.src(this.src);
            video.play();
        },
        initBtn(targVideo){
                let video = targVideo;
                let Button = videojs.getComponent('Button');
                let btn = new Button(video,);

                return btn;
        },
        createButton(content, style, labelClass){
            let btn = this.initBtn(this.myVid);
            this.myVid.addChild(btn);
            styleBtn(btn, labelClass, style, content);
        },
        newBtn(){
            this.createButton('Voici', whiteRight2,'btn-white2');
        }
    },
	mounted() {
		const element = document.querySelector('#myVid');
        this.myVid = videojs(element);
        // let video = this.myVid;
        // console.log(video);
        let Bigbtn = document.querySelector('.vjs-big-play-button');
        Bigbtn.style.marginTop = "200px";
        Bigbtn.style.marginLeft = "250px";

    this.createButton('Voila', whiteLeft2,'btn-white');

	},
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