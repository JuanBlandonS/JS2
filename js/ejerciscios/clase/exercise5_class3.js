let full_name = prompt("Digite su nombre:"), salary = parseInt(prompt("Digite su salario:")), months_worked = parseInt(prompt("Digite sus meses trajados:")), extract =parseInt(prompt("Digite su extracto:")) , children = parseInt(prompt("Digite cuaantos hijos tiene:")), bonus = 0, total;

const bonus1 = 0.028
const bonus2 = 0.04
const bonus2_5 = 0.015
const bonus3 = 0.08
const bonus3_5 = 0.15

if (children >=3 ) {
    bonus += (salary * bonus1)

    if (months_worked > 10) {
        bonus += (salary*bonus2)

        if (extract > 4) {
            bonus += (salary*bonus3)
        } else{
            bonus += (salary*bonus3_5)
        }

    }else {
        bonus += (salary * bonus2_5)   
        
        if (extract > 4) {
            bonus += (salary*bonus3)
        } else{
            bonus += (salary*bonus3_5)
        }
    }

} else{
    bonus += 0

    if (months_worked > 10) {
        bonus += (salary*bonus2)

        if (extract > 4) {
            bonus += (salary*bonus3)
        } else{
            bonus += (salary*bonus3_5)
        }

    }else {
        bonus += (salary * bonus2_5)   
        
        if (extract > 4) {
            bonus += (salary*bonus3)
        } else{
            bonus += (salary*bonus3_5)
        }
    }
}

salary += bonus
console.log(`Nombre ${full_name}, meses trabajados ${months_worked}, numero de hojos ${children}, extracto ${extract}, su salario es ${salary}, con bonificaciones de ${bonus}`); 