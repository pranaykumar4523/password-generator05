let inputslider = document.querySelector("#inputslider");
let slider = document.querySelector("#slider");
slider.textContent = inputslider.value;

inputslider.addEventListener('input', () => {
    slider.textContent = inputslider.value;

});


let passbox = document.querySelector("#passbox");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let gb = document.querySelector("#gb");


gb.addEventListener("click", () => {
    passbox.value = generatepassword();
});


let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "01234567890";
let sym = "~!@#$%^&*";



function generatepassword() {
    let genpassword = "";
    let allchar = "";
    let mchar = [];
    let r1=0
    if (lowercase.checked) {
        allchar += lowerCase;
        r1+=1
        mchar.push(lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)))

    }


    if (uppercase.checked) {
        allchar += upperCase;
        r1+=1
        mchar.push(upperCase.charAt(Math.floor(Math.random() * upperCase.length)))

    }

    if (numbers.checked) {
        allchar += num;
        r1+=1
        mchar.push(num.charAt(Math.floor(Math.random() * num.length)))

    }

    if (symbols.checked) {
        allchar += sym;
        r1+=1
        mchar.push(sym.charAt(Math.floor(Math.random() * sym.length)))

    }

    
    if(inputslider.value<4  && r1!=inputslider.value){
        alert("choose correct length");
    }
    if(inputslider.value<4  && lowercase.checked && uppercase.checked && numbers.checked && symbols.checked){
        alert("choose correct length");
    }



    genpassword += mchar.join('');
    console.log(mchar);
    console.log(mchar.length);





    let i = 0;

    let r = inputslider.value - genpassword.length;
    while (i < r) {
        genpassword += allchar.charAt(Math.floor(Math.random() * allchar.length));
        i++;
    }

    let arr = genpassword.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }

    return arr.join('');





}



let copy = document.querySelector("#copy");

copy.addEventListener("click", () => {
    if (passbox.value != "" || passbox.value.length >= 1) {
        navigator.clipboard.writeText(passbox.value);
        copy.innerText = "check";
        copy.title = "password copied";
        setTimeout(() => {
            copy.innerText = "content_copy";
            copy.title = "";
        }, 2500);
    }

});


if(inputslider.value<4  && lowercase.checked && uppercase.checked && numbers.checked && symbols.checked){
    document.alert("choose correct length")
}