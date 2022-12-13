let draw = () => {
    let canvas = document.getElementById('weather');

    if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(333,0,0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgb(222,222,000,0.5)';
    ctx.fillRect(30, 30, 50, 50);
    ctx.font = '18px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('現在の天気は晴れ時々曇り', 10, 50);
    }
};