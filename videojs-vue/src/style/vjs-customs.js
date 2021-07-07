const whiteLeft2 =
{
    height: '100px',
    width: '200px',
    border: '2px solid white',
    borderRadius: '2%',
    color: 'white',
    marginTop:'300px',
    fontSize: '30px',
    cursor: 'pointer'
}

const whiteRight2 =
{
    height: '100px',
    width: '200px',
    border: '2px solid white',
    borderRadius: '2%',
    color: 'white',
    marginTop:'300px',
    marginLeft: '300px',
    fontSize: '30px',
    cursor: 'pointer'
}

const setStylesOnElement = function(element, styles){
    Object.assign(element.style, styles);
}

/**
 * @param {videoJSButton} btn - doit être crée sur le modèle Button de videoJS,
 *  notemment grâce à videojs.getComponent, appartient à la classe 'Button'
 *  dans la fonction createBtn
 * @param {String} strClassName - une string sous la forme: '.class'
 * @param {Object} objCss - L'objet qui contient des propriétés
 *  css ainsi que leurs valeurs
 * @param {String} content - Le contenu du bouton
 */
const styleBtn = function(btn, strClassName, objCss, content){
    btn.addClass(strClassName);
    let elToCustom = document.querySelector(`.${strClassName}`);
    setStylesOnElement(elToCustom, objCss);
    elToCustom.textContent = `${content}`
}

export {whiteLeft2, whiteRight2, setStylesOnElement, styleBtn};