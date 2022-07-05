const inputs = document.querySelectorAll('input');
const fieldsets = document.querySelectorAll('fieldset');
const visibilityEyes = document.querySelectorAll('.visibility-eye');
const pwdControls = document.querySelectorAll('.pwd-ctrl');
const resetBtn = document.getElementById('reset');

fieldsets.forEach(fieldset => fieldset.addEventListener('click', () => fieldset.children[1].focus()));

inputs.forEach((input, idx) => input.addEventListener('focus', () => fieldsets[idx].classList.add('focused')));

inputs.forEach((input, idx) => input.addEventListener('focusout', () => fieldsets[idx].classList.remove('focused')));

visibilityEyes.forEach((eye, idx) => eye.addEventListener('click', () => {
    if(eye.classList.contains('checked')){
        eye.classList.remove('checked');
        eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

        inputs[idx].type = 'password';
    } else {
        eye.classList.add('checked');
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>';

        inputs[idx].type = 'text';
    }
}));

inputs[1].addEventListener('keyup', (e) => {
    setTimeout(() => {
        if( inputs[0].value !== e.target.value ) {

            pwdControls[1].innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';

            fieldsets[1].classList.add('wrong');
            resetBtn.classList.add('not-matched');

        } else {

            pwdControls[1].innerHTML = '<i class="fa-solid fa-circle-check"></i>';

            fieldsets[1].classList.remove('wrong');            
            resetBtn.classList.remove('not-matched');
        }
    }, 1000);
});