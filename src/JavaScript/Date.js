const dateText = document.querySelector("#date span:first-child")

function bringDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    let day = today.getDay();
    if(day === 0) {
        day = "일요일";
    } else if(day === 1) {
        day = "월요일"
    } else if(day === 2) {
        day = "화요일"
    } else if(day === 3) {
        day = "수요일"
    } else if(day === 4) {
        day = "목요일"
    } else if(day === 5) {
        day = "금요일"
    } else if(day === 6) {
        day = "토요일"
    }
    dateText.innerText = `${year}년 ${month}월 ${date}일 ${day}`;
}

setInterval(bringDate, 1000);