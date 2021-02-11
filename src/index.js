import "./styles.css";

const onClickAdd = () => {
  // 入力されたテキストを変数に代入してテキストボックスを初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタンの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了ボタンの機能
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);

    //完了リストの追加する要素
    const addTarget = completeButton.parentNode;

    //TODOの内容を取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    // liタグの作成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタンの作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //戻すボタンの機能
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了のリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  //削除ボタンの機能
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //明日のTODOボタンの作成
  const tomorrowButton = document.createElement("button");
  tomorrowButton.innerText = "明日のTODO";

  //明日のTODOボタンの機能
  tomorrowButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(tomorrowButton.parentNode);

    //明日のTODOリストの追加する要素
    const addTarget = tomorrowButton.parentNode;

    //TODOの内容を取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    // liタグの作成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタンの作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //戻すボタンの機能
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("tomorrow-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //明日のTODOリストに追加
    document.getElementById("tomorrow-list").appendChild(addTarget);
  });

  //divタグの子要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  div.appendChild(tomorrowButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
