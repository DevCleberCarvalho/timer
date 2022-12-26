let sec = 0;
let min = 0;
let hr = 0;
let controle;

twoDigit = (digit) => { // Função para acrescentar um zero na frente do digito < 10
    if(digit < 10) {
      return('0' + digit);
    } else {
        return digit;
    }
};

start = () => {
  counter(); // Chamando de primeira a função contadora counter()
  controle =  setInterval(counter, 1000); // Entrando no contador automático com setInterval que chama a função counter() de um em um segundo.
};

pause = () => { // Pausa o interval
  clearInterval(controle); 
};

stop = () => { // Pausa o interval e zera os contadores (variáveis)
  clearInterval(controle);
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById('watch').innerText = "00:00:00"; // joga a stringue zerada no html
 
};

counter = () => {
    sec++
    if(sec === 60) { // Acréscimo de minutos
        min++;
        sec = 0;

        if(min === 60) { // Acréscimo de horas
            hr++;
            min = 0;

            if(hr === 24) { // Zera os contadores em 24 horas
                sec = 0;
                min = 0
                hr = 0;
            }
        }
    }

    document.getElementById('watch').innerText= twoDigit(hr) + ":" + twoDigit(min) + ":" + twoDigit(sec);
};