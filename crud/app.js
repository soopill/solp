function createMemo() {
  const memoInput = document.getElementById("memoInput");
  const textMemo = memoInput.value;

  if (textMemo != "") {
    const memoList = document.getElementById("memoList");
    const newMemo = document.createElement("li");

    newMemo.innerText = textMemo;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";
    deleteBtn.onclick = () => {
      memoList.removeChild(newMemo);
    };

    newMemo.appendChild(deleteBtn);
    memoList.appendChild(newMemo);

    memoInput.value = "";
  } else {
    alert("메모입력");
  }
}
