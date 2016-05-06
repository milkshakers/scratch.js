"use strict";

var scene = document.getElementById('scene');

var directionToKeyCode = {
    'gauche': 37,
    'haut': 38,
    'droite': 39,
    'bas': 40
};

function Lutin(url) {
    var element = document.createElement('div');
    element.classList.add('lutin');
    element.style.backgroundImage = 'url('+url+')';
    element.style.top = element.style.left = 0;
    
    scene.appendChild(element);
    
    
    var orientation = 0;

    return {
        avancer: function (nbPixels) {
            var x = Math.cos(orientation * Math.PI / 180) * nbPixels;
            var y = Math.sin(orientation * Math.PI / 180) * nbPixels;
            
            element.style.top = parseInt(element.style.top) - y + 'px';
            element.style.left = parseInt(element.style.left) + x + 'px';
        },

        orienter: function (angle) {
            orientation = angle;
            element.style.transform = 'rotate('+orientation+'deg)';
        },
        
        dire: function(text){
            element.setAttribute('data-text', text);
        },
        
        cacher: function(){
            element.setAttribute('hidden', '');
        },
        montrer: function(){
            element.removeAttribute('hidden');
        },
        
        quand_collision: function(autre, listener){
            
        },
        
        quand_touche: function(direction, listener){
            document.addEventListener('keydown', function(e){
                console.log(e.keyCode);
                if (directionToKeyCode[direction] === e.keyCode)
                    listener();
            });
        }
    };

}
