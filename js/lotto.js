function showRandomNumber() {
  const min = 1;
  const max = 45;
  const totalNumbers = 7;
  const allNumbers = [];

  // 6개의 기본 번호 생성
  while (allNumbers.length < 6) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!allNumbers.includes(num)) {
      allNumbers.push(num);
    }
  }

  // 보너스 번호 생성
  let bonusNumber;
  do {
    bonusNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (allNumbers.includes(bonusNumber)); // 보너스 번호가 기본 번호에 포함되지 않도록

  // 기본 번호를 작은 순으로 정렬
  allNumbers.sort((a, b) => a - b);

  const ids = ["first", "second", "third", "fourth", "fifth", "sixth", "bonus"];

  // 색상 구분 함수
  function getColorClass(num) {
    if (num >= 1 && num <= 10) return "yellow";
    if (num >= 11 && num <= 20) return "blue";
    if (num >= 21 && num <= 30) return "red";
    if (num >= 31 && num <= 40) return "green";
    return "purple"; // 41~45
  }

  // 각 div에 숫자와 색상 적용
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    let num;

    if (id === "bonus") {
      num = bonusNumber; // 보너스 번호는 마지막에 별도로 처리
    } else {
      num = allNumbers[i]; // 기본 번호
    }

    el.textContent = num;

    // 기존 색상 클래스 제거
    el.className = "number-box";

    // 새 색상 클래스 추가
    el.classList.add(getColorClass(num));
  });
}
