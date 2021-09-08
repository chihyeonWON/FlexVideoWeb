//모든 article 요소를 변수 items에 저장
const items = document.querySelectorAll("article");

//article 요소의 개수만큼 반복
for(let el of items) {
    //현재 반복하는 article 요소에 mouseenter 이벤트 발생
    el.addEventListener("mouseenter", e=>{
        //자식 요소인 vdieo 재생
        e.currentTarget.querySelector("video").play();
    });
    //현재 반복하는 article 요소에 mouseleave 이벤트 발생
    el.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelector("video").pause();
    });
}