const buttons = document.getElementsByClassName('button');
const inputfield = document.getElementById('number-input');



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let inputtext = "";
        switch (event.target.innerHTML) {
            case 'C':
                break;

            case '←':
                inputtext = inputfield.value.subs(0, inputfield.value-1);
                break;

            case '=':
                inputtext = eval(inputfield.value);
                break;
                
                default:
                    inputtext= '${inputfield.value}${event.target.innerHTML}';
          
        }
    })
}
console.log(buttons.length)