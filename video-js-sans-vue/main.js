let video = videojs('myVid');

// console.log(video)

// ***** LES EVENEMENTS *****

// event sur quand la video commence à être jouée

// video.on('play', function(){
//     console.log('Video commencée')
// })

// event sur le chargement de la vidéo dans le navigateur
// video.ready(function(){
//     console.log('video chargée');
// })

// event sur la fin de la vidéo dans le navigateur
video.on('ended', function(){
    console.log('video terminée')
})

// event quand on fait pause
// Ici la fonction affiche le temps restant quand on fait pause
video.on('pause', function(){
    console.log(this.remainingTime());
    console.log(this.currentTime())
})

// n'est pas autorisé, peut être un paramètre à gérer pour que l'user ait accès
video.ready(function(){
    let that = this;

    setTimeout(function(){
        that.play();
    },2000)
})