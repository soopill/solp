function createMemo() {
  const textMemo = document.getElementById("memoInput");
  const saveMemo = textMemo.value;

  if (saveMemo !== "") {
    const memoList = document.getElementById("memoList");
    const newMemo = document.createElement("li");

    newMemo.innerText = saveMemo;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";

    // onclick 대신 addEventListener 사용
    deleteBtn.addEventListener("click", () => {
      memoList.removeChild(newMemo);
    });

    newMemo.appendChild(deleteBtn);
    memoList.appendChild(newMemo); // newMemo를 memoList에 추가

    textMemo.value = ""; // 입력 필드를 초기화
  } else {
    alert("메모를 입력하세요!");
  }
}
