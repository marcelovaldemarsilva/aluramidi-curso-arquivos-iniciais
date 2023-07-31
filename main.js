window.onload = function () {

    const listaDeTeclas = document.querySelectorAll('.tecla');
    let contador = 0;
    function tocaSom(seletorAudio) {
        const elemento = document.querySelector(seletorAudio);
        if (elemento && elemento.localName === 'audio') {
            elemento.play();
        } else {
            alert('Elemento não encontrado!!!');
            console.log('erro');
        }
    }

    for (let contador = 0; contador < listaDeTeclas.length; contador++) {
        const tecla = listaDeTeclas[contador];
        //console.log('Tecla: ' + tecla);
        const instrumento = tecla.classList[1];
        // console.log('instrumento: ' + instrumento);
        //template String
        const idAudio = `#som_${instrumento}`;
        //   console.log('Valor da Classe do Som: ' + idAudio)
        tecla.onclick = function () {
            tocaSom(idAudio);
        }
        //contador++
    }

}

    // // for (let contador in listaDeTeclas)
    // for (let contador = 0; contador <= listaDeTeclas.length; contador++) {
    //     listaDeTeclas[contador].onclick = function () {
    //         switch (contador) {
    //             case 0:
    //                 tocaSom('#som_tecla_pom');
    //                 break;
    //             case 1:
    //                 tocaSom('#som_tecla_clap');
    //                 break;
    //             case 2:
    //                 tocaSom('#som_tecla_tim');
    //                 break;
    //             case 3:
    //                 tocaSom('#som_tecla_puff');
    //                 break;
    //             case 4:
    //                 tocaSom('#som_tecla_splash');
    //                 break;
    //             case 5:
    //                 tocaSom('#som_tecla_toim');
    //                 break;
    //             case 6:
    //                 tocaSom('#som_tecla_psh');
    //                 break;
    //             case 7:
    //                 tocaSom('#som_tecla_tic');
    //                 break;
    //             case 8:
    //                 tocaSom('#som_tecla_tom');
    //                 break;
    //             default:
    //                 alert('n tem');
    //         }
    //     };
    // console.log(listaDeTeclas[contador]);
    // console.log(contador);

    //}

/*

pom.addEventListener('click', som_pom);
function som_pom() {
    document.querySelector('#som_tecla_pom').play();
}

clap.addEventListener('click', som_clap);
function som_clap() {
    document.querySelector('#som_tecla_clap').play();
}
tim.addEventListener('click', som_tim);
function som_tim() {
    document.querySelector('#som_tecla_tim').play();
}
puff.addEventListener('click', som_puff);
function som_puff() {
    document.querySelector('#som_tecla_puff').play();
}
splash.addEventListener('click', som_splash);
function som_splash() {
    document.querySelector('#som_tecla_splash').play();
}

toim.addEventListener('click', som_toim);
function som_toim() {
    document.querySelector('#som_tecla_toim').play();
}
 
psh.addEventListener('click', som_psh);
function som_psh() {
    document.querySelector('#som_tecla_psh').play();
}
tic.addEventListener('click', som_tic);
function som_tic() {
    document.querySelector('#som_tecla_tic').play();
}
tom.addEventListener('click', som_tom);
function som_tom() {
    document.querySelector('#som_tecla_tom').play();
}
*/
