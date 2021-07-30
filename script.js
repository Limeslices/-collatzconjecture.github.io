const header = document.querySelector('header');
var html = ``;
var number = prompt("Enter starting number: ");

function numberAlg(num) {
    while(num !== 1) {
        if(num % 2 === 0) {
            num = num / 2;
            console.log(num)
            html = html + `<h3>${num}</h3>`
        }   else {
            num = num * 3;
            num = num + 1;
            html = html + `<h3>${num}</h3>`
            console.log(num)
        }
    }
    header.innerHTML = html;
}
console.log(html + 'html');

numberAlg(number);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    header.innerHTML = '';
    html = '';
    number = prompt("Enter starting number: ");
    numberAlg(number)
});