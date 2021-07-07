<template>

    <div v-if="playerOptions.sources[0].src">
        <video-player  class="video-player-box"
             ref="videoPlayer"
             :options="playerOptions"
             :playsinline="true"
             @ready="playerReadied">
        </video-player>
    </div>

</template>

<script>
export default {
    props:{
        playerdata: String
    },
    data(){
        return{
            player: '',
                playerOptions: {
                    autoplay: this.playerdata.autoplay,
                    language: 'en',
                    poster: this.playerdata.poster,
                    controls: true,
                    preload: 'auto',
                    fluid: true,
                    playbackRates: [0.2, 0.5, 1, 1.5, 2,3,4],
                    sources: [
                        {
                            src: this.playerdata.source,
                            type: "video/mp4"
                        }
                    ],
                }
        }
    },
    methods : {
        playerReadied(player) {
            this.player = player;
            console.log('the player is readied', player)
        }
    }

}
</script>

<style lang="css" scoped>

</style>