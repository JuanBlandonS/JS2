let Name, final_grade,note1,note2,note3, vlr_note1, vlr_note2, vlr_note3;
const Note1 = 0.20, Note2 = 0.30, Note3 = 0.50;

Name =(prompt("Ingrese su nombre: "));
note1 =(parseFloat(prompt("Ingrese su nota 1: ")))
note2 =(parseFloat(prompt("Ingrese su nota 2: ")))
note3 =(parseFloat(prompt("Ingrese su nota 3: ")))

vlr_note1 = note1 * Note1;
vlr_note2 = note2 * Note2;
vlr_note3 = note3 * Note3;

final_grade = vlr_note1+vlr_note2+vlr_note3;

console.log(`${Name}`);
console.log(`Nota 1: ${note1}, valor de la nota 1: ${vlr_note1}`);
console.log(`Nota 2: ${note2}, valor de la nota 2: ${vlr_note2.toFixed(2)}`);
console.log(`Nota 3: ${note3}, valor nota 3: ${vlr_note3.toFixed(2)}`);
console.log(`Nota final: ${final_grade}`);

if(final_grade < 3.0){
    console.log(`Perdistes la materia nota: ${final_grade}`)
} else{
    console.log(`Ganastes la materia, nota: ${final_grade}`)
}