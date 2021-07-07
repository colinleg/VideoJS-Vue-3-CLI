const customOptionButton = videojs.extend(button, {

    constructor: function() {
    button.apply(this, arguments);
    this.controlText("Custom Option Button"); // le titre de l'élément
    this.addClass('vjs-option-btn'); // la classe de l'élément
    // this.removeClass('vjs-button');
    }

})

export {customOptionButton};