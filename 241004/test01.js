function delay(){
    for(let i =0; i<10000000; i++);
}
function 도망(){
    delay();
    console.log("도망가!!!!");
}
function 태풍(){
    console.log("태풍이 왔어요... 어.. 늦었다");
}
function 예보(){
    delay();
    console.log("태풍이 온다합니다 조심하십쇼");
    도망();
};
setTimeout(태풍, 100);
예보();

//순서 1. setTimeout 함수가 콜 스택에 추가
// 2.setTimeout이 타이머 이벤트를 요청한 후에 콜 스택에 제거되고 예보()함수가 콜 스택에 추가
// 3.예보함수가 실행되면 내부적으로 도망()함수가 실행됨