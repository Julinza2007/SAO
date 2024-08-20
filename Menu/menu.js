let container = document.querySelector('#desplegable');
let audio = document.getElementById('audio');
let audioLove = document.getElementById('love');
let error = document.getElementById('error');
let errorP= document.createElement('p');
errorP.style= 'margin-top: 40px;'
document.body.append(errorP);
let hearth = document.createElement('img');
hearth.src = 'img/hearth.png';
hearth.classList.add('hearth');
let aHearth = document.createElement('a');
aHearth.href = 'https://www.youtube.com/watch?v=FIR-hrPXxzA';

audioLove.volume = 0.1;
error.volume = 0.1;
audio.volume = 0.1;  // Reduce el volumen a la mitad
let cont = 0;

let menu = document.createElement('div');
    menu.style.display = 'none';
    menu.id = 'menu';
    container.append(menu);
    let p= document.createElement('p');
    
    menu.append(p);
    let a = document.createElement('a');
    a.href = 'Fotos/fotos.html';
    a.textContent = 'Fotos';
    p.append(a);

    let p1= document.createElement('p');
    menu.append(p1);
    let a1= document.createElement('a');
    a1.href = 'Historia/historia.html';
    a1.textContent = 'Historia';
    p1.append(a1);

    let p2= document.createElement('p');
    menu.append(p2);
    let a2= document.createElement('a');
    a2.href = 'Personajes/personajes.html';
    a2.textContent = 'Personajes';
    p2.append(a2);

    let p3= document.createElement('p');
    menu.append(p3);
    let a3= document.createElement('a');
    a3.href = '#';
    a3.textContent = 'Disconnect';
    p3.append(a3);
       
    a3.addEventListener('click', function(){
        cont++;
        error.play();
        console.log(cont);

        if(cont === 1){
          errorP.textContent = '¿Creíste realmente que ibas a salir no? Te recomiendo que no continúes...';
        }
        else if(cont === 5){
          errorP.textContent = 'Me sorprende que para llegar hasta acá hayas tenido que pasar por un camino un poco largo... Y aun así estás acá.';
        }
        else if(cont === 10){
          errorP.textContent = 'Vas a seguir apretando el maldito botón?';
        }

        else if(cont === 15){	
          errorP.textContent = 'Vas a apretar el botón de nuevo?';
        }

        else if(cont === 25){
          errorP.textContent = 'Mira que hay que ser eh...';
      }

      else if(cont === 50){
          errorP.textContent = 'Si... La verdad... No se como es que sos tan curioso que llegaste hasta acá...';
      }

      else if(cont === 100){
        error.volume = 0;
        audioLove.play();
        errorP.textContent = 'Voy a contarte una historia...'
      }

      else if(cont === 110){
        errorP.textContent = 'Érase una vez, un muchacho, de pelo negro, estaba muy enamorado de alguien...'
      }
    

      else if(cont === 120){
        errorP.textContent = 'Este joven estaba muy ilusionado por su amor... Entre ellos hablaban casi todos los días por celular...';
      }

      else if(cont === 130){
        errorP.textContent = 'Hasta que un día la otra persona dejó de hablarle con la misma intensidad...';
      }

      else if(cont === 140){
        errorP.textContent = 'Y para el chico eso fue demasiado... Que tuvo que alejarse de todos lados, y volver a sus raíces... A como era antes...';
      }
      else if(cont === 150){
        errorP.textContent = 'El chico estuvo peleando y peleando hasta que un día...';
      }

      else if(cont === 160){
        errorP.textContent = 'Volvieron a hablar, pero ya no era lo mismo...';
      }

      else if(cont === 170){
        errorP.textContent = 'Así que... Nada esa historia aún sigue...';
      }

      else if(cont === 180){
        errorP.textContent = 'Lo que se sabe es que el chico sigue esperanzado en encontrar a alguien mejor...';
      }

      else if(cont === 190){
        errorP.textContent = 'Alguien en quien confiar y dar todo su cariño...';
      }

      else if(cont === 200){
        errorP.textContent = 'Ganas de amor... Ganas de gastar todo ese amor acumulado, lleno de desamores...';
      }

      else if(cont === 210){
        errorP.textContent = 'Que tristeza, que tristeza...';
      }

      else if(cont === 220){
        error.volume = 0.1;
        audioLove.pause();
        audioLove.currentTime = 0;
        errorP.textContent = 'Vaya...';
      }
      
      else if(cont === 230){
        errorP.textContent = 'No creas que YO, soy ese chico...';
      }

      else if(cont == 240){
        cont=0;
       aHearth.append(hearth);
       menu.append(aHearth);
      }
    });

function handleClick(event){
  errorP.textContent = '';
  cont = 0;
  audioLove.pause();
  audioLove.currentTime = 0;
  audio.play();
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
        event.target.src = 'img/UsuarioSAO_naranja.png';
        event.target.style = 'width: 150px; height: 150px;';
    }
    else{
    menu.style.display = 'none';
    event.target.src = 'img/UsuarioSAO.png';
    event.target.style = 'width: 150px; height: 150px;';
    }
}
