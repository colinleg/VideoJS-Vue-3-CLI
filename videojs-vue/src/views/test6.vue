<template>
    <div>
        <h1>6ème Test :
            <!-- npm install --save videojs-css  -->
        </h1>
        <button @click=selectSource>change src</button>
        <button @click=setMask>Set the mask</button>
        <button @click=checkTime>Check the time</button>
        <div class="container">
            <video id="player" class="video-js" controls preload="auto" width="960" height="505" data-setup="{}"
            @play=onPlay>
                <source id="src" src='@/assets/1.mp4' type='video/mp4' />
            </video>
        </div>

        <div class="mask-ctnr hide">
            <div class="mask-top">
                <p class="question">Quelle est la bonne option ? </p>
            </div>
            <div class="mask-bottom">
                <button class="btn1 opt" @click="changeSource(sources[0])">Option 1</button>
                <button class="btn2 opt" @click="changeSource(sources[1])">Option 2</button>
                <button class="btn3 opt" @click="changeSource(sources[2])">Option 3</button>
            </div>

        </div>
    </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

//Le plugin css de videojs
import 'videojs-css'
import 'videojs-css/dist/videojs-css.css'

export default {
    data(){
        return{
            player: null,
            elH: null,
            elW: null,
            elMt: null,
            elMl: null,
            elMb: null,
            elMr: null,
            sources: [
                {
                        index: 0,
                        type: 'video/mp4',
                        src: 'https://www.lesjouetsdecolin.ovh/vid1.mp4'
                },
                {
                        index: 1,
                        type: 'video/mp4',
                        src: 'https://www.lesjouetsdecolin.ovh/vid2.mp4'
                },
                {
                        index: 2,
                        type: 'video/mp4',
                        src: 'https://www.lesjouetsdecolin.ovh/vid3.mp4'
                },
                {
                        index: 3,
                        type: 'video/mp4',
                        src: 'https://vimeo.com/572057684'
                },
                {
                        index: 4,
                        type: 'video/mp4',
                        src: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
                },

            ],



            // src1: {
            //     type: 'video/mp4',
            //     src: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
            // },
            currentTime: null,
            time: null,
            displayOn: false,

        }
    },
    methods: {
        initMask(){
            let mask = document.querySelector('.mask-ctnr');
            let style = mask.style;
            let h = this.elH - 60;

            style.height = `${h}px`;
            style.width = `${this.elW}px`;
            // style.top = `${this.elMt}px`;
            // style.left = `${this.elMl}px`;
        },
        activeMask(){
            let mask = document.querySelector('.mask-ctnr');

            mask.classList.remove('hide')
            mask.classList.add('active')
            // console.log(mask)
        },
        hideMask(){
            let mask = document.querySelector('.mask-ctnr');
            mask.classList.add('hide')
            mask.classList.remove('active')
        },
        getDimensions(element){
            let el = element;
            let rect = el.getBoundingClientRect();

        this.elH = el.offsetHeight;
        this.elW = el.offsetWidth;
        this.elMt = rect.top;
        this.elMl = rect.left;

        },
        /**@param number - un nombre qui correspond à
         * l'index dans l'objet sources
         */
        changeSource(source){

            this.player.src(source);
            this.player.play();
        },
        checkTime(){
            setInterval(() => {
                let time = this.player.currentTime();
                this.time = time;
                // console.log(this.time);
                if (this.time > 3 && this.time < 10){
                    this.displayOn = true;
                }else{
                    this.displayOn = false;
                }
            },1000)
        },

    },
    watch: {
        displayOn(){
            if(this.displayOn == true){
                this.activeMask();
            }else if(this.displayOn == false){
                this.hideMask();
            }
        }

    },
    mounted(){

        this.player = videojs(document.querySelector('#player'));
        this.getDimensions(this.player.el());
        let maskContainer = document.querySelector('.mask-ctnr');
        this.player.el().append(maskContainer);

        this.player.css({
            controlBar:{ borderRadius: "20px", marginBottom: "15px", width:"90%", height: '50px', marginLeft:"5%", fontSize:"1.5em", background:"#3F51B5"}
        })

        this.initMask();
        this.checkTime();

        this.player.on('fullscreenchange',() => {

            this.getDimensions(this.player.el());
             console.log(this.elH, this.elW, this.Mt, this.Ml);
            console.log(this.player.el())
            let maskContainer = document.querySelector('.mask-ctnr');
            let player = document.querySelector('#player');
            this.initMask()
            player.append(maskContainer);

        })


    }
}
</script>

<style lang="css" scoped>

.hide{
    display: none;
}

.active{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.mask-ctnr{
position: absolute;
z-index: 100;

}

.mask-top{
display: flex;
justify-content: space-around;
align-items: center;

z-index: 200;
width: 100%;
}

.mask-bottom{
display: flex;
justify-content: space-around;
align-items: center;

z-index: 200;
width: 100%;
}

.question{
    padding: 3rem;
    font-weight: 900;
    background:rgba(63, 81, 181,0.65);
    color: white;
    border-radius: 10px;
}

.opt{
    background:rgba(63, 81, 181,0.65);
    color: white;
    border-radius: 10px;
    padding: 2.5rem;
    border: none;
}
.opt:hover{
    cursor: pointer;
}
</style>