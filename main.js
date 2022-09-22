let mainText = document.querySelector("h1")   // html의 h1태그를 가져옴

window.addEventListener("scroll", function(){
    let value = window.scrollY // 스크롤의 Y좌표를 갖고오겠다.
    console.log("scrollY", value);

    if(value>300) {
        mainText.style.animation="disappear 1s ease-out forwards"; // forwards : 유지시켜 줌
    } else {
        mainText.style.animation="slide 1s ease-out";
    }
});