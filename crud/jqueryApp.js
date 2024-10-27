$(document).ready(function () {
  let postId = 0; // 게시글 번호
  let posts = []; // 게시글 목록 저장

  // 게시글 추가
  $("#addPost").on("click", function () {
    const title = $("#title").val();
    const content = $("#content").val();

    if (title && content) {
      postId++;
      posts.push({ id: postId, title: title, content: content });

      renderPosts(); // 게시글 목록 렌더링
      clearInputs(); // 입력 필드 초기화
    } else {
      alert("제목과 내용을 입력하세요!");
    }
  });

  // 게시글 목록 렌더링
  function renderPosts() {
    const $tbody = $("#postTable tbody");
    $tbody.empty(); // 기존 목록을 비우고 새로 렌더링

    posts.forEach(function (post) {
      const $row = $("<tr>");
      $row.append(`<td>${post.id}</td>`);
      $row.append(`<td>${post.title}</td>`);
      $row.append(`<td>${post.content}</td>`);
      $row.append(`
                <td>
                    <button class="editBtn" data-id="${post.id}">수정</button>
                    <button class="deleteBtn" data-id="${post.id}">삭제</button>
                </td>
            `);
      $tbody.append($row);
    });
  }

  // 입력 필드 초기화
  function clearInputs() {
    $("#title").val("");
    $("#content").val("");
  }

  // 게시글 삭제
  $(document).on("click", ".deleteBtn", function () {
    const id = $(this).data("id");
    posts = posts.filter((post) => post.id !== id); // 해당 ID의 게시글 삭제
    renderPosts(); // 변경된 목록 다시 렌더링
  });

  // 게시글 수정
  $(document).on("click", ".editBtn", function () {
    const id = $(this).data("id");
    const post = posts.find((post) => post.id === id);

    const newTitle = prompt("새로운 제목을 입력하세요:", post.title);
    const newContent = prompt("새로운 내용을 입력하세요:", post.content);

    if (newTitle && newContent) {
      post.title = newTitle;
      post.content = newContent;
      renderPosts(); // 수정된 내용으로 다시 렌더링
    } else {
      alert("제목과 내용을 입력하세요!");
    }
  });
});
