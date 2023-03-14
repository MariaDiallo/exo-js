function Nbr_paire(array) {
    let rest;
    let newarry = [];
    for (let i = 0; i < array.length; i++) {
        rest = array[i] % 2;
        if (rest==0) {
        newarry.push(array[i]);
        }
    }
    return newarry;
}
console.log(Nbr_paire([2,5,6,8,3]))