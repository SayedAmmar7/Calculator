


const buttons = document.querySelectorAll('.button');
const inputfield = document.getElementById('input-number');
const infopar = document.getElementById('info');


for(let i = 0 ; i < buttons.length ; i++ ) {
    buttons[i].addEventListener('click', (event) => {
        let inputtext = '';
        infopar.style.display ='none';
        switch (event.target.innerHTML) {
            case 'C':
                break;

          

            case '=':
                try{
                    inputtext = eval(inputfield.value);
                }catch(e){
                    inputtext='';
                    infopar.style.display = 'block';
                    infopar.innerHTML = 'Invalid operation';
                }                
                break;

                case '←':
                    inputtext = inputfield.value.slice(0, inputfield.value.length-1);
                    break;

                default:
                    inputtext= `${inputfield.value}${event.target.innerHTML}`;
        }
        inputfield.value = inputtext;
    });
}
