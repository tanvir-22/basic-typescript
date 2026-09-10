const input = document.getElementById('email') as HTMLInputElement;
const button = document.getElementById("subscribebtn") as HTMLButtonElement;

button.addEventListener('click',()=>{
    console.log(`thanks for subsribing ${input.value}`)
});

