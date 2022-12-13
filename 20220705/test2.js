let draw = () => {
let canvas = document.getElementById('weather2').getContext('2d');
var image = new Image();
image.src =
'https://tsundora.com/image/2019/02/zombieland_saga_13-1024x789.jpg';
image.onload = function(){
    canvas.drawImage(image, 50, 50);
};
image.src = 'backdrop.jpg';
};