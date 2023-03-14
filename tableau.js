function Tableau(tab) {
    let newtab = [];
    let min= tab[0];
    let max= tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i];
        }
        if (tab[i] > max) {
            max = tab[i];
        }
    }
    newtab.push(min);
    newtab.push(max);
    return [min,max];
}
console.log(Tableau([2,5,8,6,1]))