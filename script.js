const button = document.getElementById("openBook");

button.onclick = () => {

button.innerHTML = "Opening... ❤️";

setTimeout(()=>{

alert("The Memory Book will open in the next part 💙");

},900);

}
const cover = document.getElementById("cover");
const open = document.getElementById("openBook");

open.onclick = () => {

    cover.style.transform =
        "rotateY(-165deg)";

    cover.style.transition =
        "1.4s";

}
