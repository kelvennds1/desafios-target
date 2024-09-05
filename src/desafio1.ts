function isFibonacci(num: number): string {
    let a = 0, b = 1, aux= 0;

    if (num == a || num == b) {
        return `O número ${num} está na sequência de fibonaci.`;
    }

    while (aux < num) {
        aux = a + b;
        a = b;
        b = aux;
    }
    
    return aux == num ? `O número ${num} está na sequência de fibonaci.` : `O número ${num} não está na sequência de fibonaci.`
};

const num = 43;
console.log(isFibonacci(num));