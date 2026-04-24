//let numeroSecreto = 5;
let numeroLimite=10; 
let numeroSecreto = Math.floor(Math.random()*numeroLimite+1);
let numeroUsuario;
let intentos = 3;

console.log(numeroSecreto);

// Mientras no sea el número secreto O no sea un número válido
   while (numeroSecreto != numeroUsuario) {

      numeroUsuario = parseInt(prompt(`Indica un número entre 1 y ${numeroLimite}`));

      // 1. Validamos si es un número real
         if (isNaN(numeroUsuario)) {
            alert("¡Eso no es un número! Intenta de nuevo.");
            continue; // Salta al inicio del while para preguntar otra vez
         }

        // 2. Si es número, evaluamos si ganó o perdió
         if (numeroSecreto === numeroUsuario) {
            alert("Acertaste el número")
         } else {
            // Restamos un intento solo cuando el número es válido pero incorrecto
            intentos--;
               if (intentos <= 0) {
                  alert(`Perdiste. El número secreto era ${numeroSecreto}`);
                   alert("Fin del Juego")
                  break; // ¡Importante! Detiene el bucle de inmediato
               }
               if (numeroUsuario > numeroSecreto) {
                  alert("El número es menor");
               } else {
                  alert("El número es mayor");
               } 
      }
      
   }
