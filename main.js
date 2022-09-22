let mainText = document.querySelector("h1");
// document.querySelector() : html의 h1태그를 가져옴
// let : 변수 선언

window.addEventListener("scroll", function(){
// addEventListener() : 지정한 유형의 이벤트를 대상이 수신할 때마다 호출할 함수를 설정함
// window : 현재 스크립트가 작동 중인 창을 나타냄
    let value = window.scrollY // 스크롤의 Y좌표를 갖고오겠다.
    console.log("scrollY", value); //여러 개를 동시에 출력

    if(value>300) {
        mainText.style.animation="disappear 1s ease-out forwards"; // forwards : 유지시켜 줌
    } else {
        mainText.style.animation="slide 1s ease-out";
    }
});