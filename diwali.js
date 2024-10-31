music  = new Audio("music/firevoice.mp3");
textshow = () => {
    setTimeout(() => {
        document.getElementsByClassName('h1')[0].style.display = "block";
    }, 500);
    setTimeout(() => {
        document.getElementsByClassName('h2')[0].style.display = "block";
    }, 1000);
    
    setTimeout(() => {
        document.getElementsByClassName('h4')[0].style.display = "block";
    }, 1500);
    setTimeout(() => {
        document.getElementsByClassName('h5')[0].style.display = "block";
    }, 2000);
    setTimeout(() => {
        document.getElementsByClassName('h6')[0].style.display = "block";
    }, 2500);
    setTimeout(() => {
        document.getElementsByClassName('h7')[0].style.display = "block";
    }, 3000);
    setTimeout(() => {
        document.getElementsByClassName('h8')[0].style.display = "block";
    }, 3500);
    setTimeout(() => {
        document.getElementsByClassName('h9')[0].style.display = "block";
    }, 4000);
    setTimeout(() => {
        document.getElementsByClassName('h10')[0].style.display = "block";
    }, 4500);
    setTimeout(() => {
        document.getElementsByClassName('h11')[0].style.display = "block";
    }, 5000);
    setTimeout(() => {
        document.getElementsByClassName('h12')[0].style.display = "block";
    }, 5500);

    setTimeout(()=>{
        const im1=document.getElementsByClassName('im1')[0]
        const im2=document.getElementsByClassName('im2')[0]
        im1.style.animation="animate 2s linear  forwards";
        im2.style.animation="animate2 2s linear  forwards";
        im1.style.transform="translateX(7%)";
        im2.style.transform=" translateX(868%)";
        
    },5800);
    setTimeout(() => {
        document.getElementsByClassName('h1')[0].style.color = "yellow";
    }, 6500);
    
    setTimeout(() => {
        document.getElementsByClassName('h2')[0].style.color = "yellow";
    }, 6800);
    
    
    setTimeout(() => {
        document.getElementsByClassName('h4')[0].style.color = "yellow";
    }, 7100);
    setTimeout(() => {
        document.getElementsByClassName('h5')[0].style.color = "yellow";
    }, 7400);
    
    setTimeout(() => {
        document.getElementsByClassName('h6')[0].style.color = "yellow";
    }, 7700);
    setTimeout(() => {
        document.getElementsByClassName('h7')[0].style.color = "yellow";
    }, 8000);
    
    setTimeout(() => {
        document.getElementsByClassName('h8')[0].style.color = "yellow";
    }, 8300);
    setTimeout(() => {
        document.getElementsByClassName('h9')[0].style.color = "yellow";
    }, 8600);
    
    setTimeout(() => {
        document.getElementsByClassName('h10')[0].style.color = "yellow";
    }, 8900);
    setTimeout(() => {
        document.getElementsByClassName('h11')[0].style.color = "yellow";
    }, 9200);
    
    setTimeout(() => {
        document.getElementsByClassName('h12')[0].style.color = "yellow";
    }, 9500);
    
    setTimeout(()=>{
        let firecracker= document.getElementsByClassName('firecrackers')[0];
        const fireworks = new Fireworks(firecracker, {
            autoresize: true,
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 50,
            traceLength: 3,
            traceSpeed: 10,
            explosion: 5,
            intensity: 30,
            flickering: 50,
            lineStyle: 'round',
            hue: {
                min: 0,
                max: 360
            },
            delay: {
                min: 30,
                max: 60
            },
            rocketsPoint: {
                min: 50,
                max: 50
    },
    lineWidth: {
        explosion: {
            min: 1,
            max: 3
        },
        trace: {
            min: 1,
            max: 2
        }
    },
    brightness: {
        min: 50,
        max: 80
    },
    decay: {
        min: 0.015,
        max: 0.03
    },
    mouse: {
        click: false,
        move: false,
      max: 1
    }
})
fireworks.start();


},10000)





}

textshow();

music.currentTime=0;
setInterval(()=>{
    
    music.play();
  },10400);
//  setInterval(textshow(),16000);
