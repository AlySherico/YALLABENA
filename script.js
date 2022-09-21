no.addEventListener('click', () => {
    if (no.classList.contains('animF')) {
        no.classList.remove('animF');
        no.classList.add('animB');
    } else if (no.classList.contains('animB')) {
        no.classList.remove('animB');
        no.classList.add('animF');
    } else {
        no.classList.add('animF');
    }
}
);
const yes = document.getElementById('yes');
yes.addEventListener('click',()=>{
    // alert("yaaaaaaaaaa let's gooooooooooooooo")
    swal("GAMED!", "fried chicken?🍗😍");
});