console.log ('JS OK')

/* 

1- Chiedere KM da percorrere ed età del passeggero

2- Calcolare prezzo totale del viaggio con: 
  - prezzo del biglietto al km (0.21)
  - sconto 20% x minorenni
  - sconto 40% x over 65

3- Prezzo totale con massimo 2 decimali (x centesimi sul prezzo finale)


*/

// Distanza da percorrere

const Distance = prompt ('Quanti km vuoi percorrere?');
console.log (Distance);

// Chiedere l'età

const userAge = prompt ('Quanti anni hai?');
console.log (userAge);

// Calcolare il prezzo totale del viaggio

const PriceatKM = 0.21;
console.log (PriceatKM);


let TotalPrice = Distance * PriceatKM;

if (userAge < 18){
    const SaleForMinor = 20;
    console.log (SaleForMinor);

    function MinorPrice (TotalPrice, SaleForMinor){
        return ((SaleForMinor / TotalPrice) * 100).toFixed(0);
    }
} else if (userAge > 65){
    const SaleOver65 = 40;
    console.log (SaleOver65);

    function Over65 (TotalPrice, SaleOver65){
        return ((SaleOver65 / TotalPrice) * 100).toFixed(0);
    }
} else {
    const NormalPrice = TotalPrice;
    console.log (NormalPrice);
}