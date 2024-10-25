let Name, estrato, vlr_matricula,desc_matricula, desc_adiciona;

Name = prompt("ingresa tu nombre")
estrato= parseInt(prompt("Ingresa tu estrato economico"))
vlr_matricula = parseFloat(prompt("Ingrese el valor de la matricula"))

if(estrato == 1 || estrato == 2 || estrato == 3){
    desc_matricula = vlr_matricula * 0.70;
    desc_adicional = desc_matricula * 0.30;
    vlr_matricula -= (desc_matricula + desc_adicional) ;
    console.log(`${Name} descuento matricula ${desc_matricula}, descuento adicional ${desc_adicional}, valor matricula: ${vlr_matricula}`)
} else{
    desc_matricula = vlr_matricula * 0.05;
    desc_adicional = 0
    vlr_matricula -= desc_matricula;
    console.log(`${Name} descuento matricula ${desc_matricula}, descuento adicional ${desc_adicional}, valor matricula: ${vlr_matricula}`) 
}               