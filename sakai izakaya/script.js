// 状態をLocalStorageに保存し、別のページからも参照できるようにする
document.getElementById("openButton")?.addEventListener("click", function() {
    localStorage.setItem("storeStatus", "open");
    alert("営業中に変更しました！");
});

document.getElementById("closedButton")?.addEventListener("click", function() {
    localStorage.setItem("storeStatus", "closed");
    alert("準備中に変更しました！");
});

// 状態を表示する
const statusDiv = document.getElementById("status");
const storeStatus = localStorage.getItem("storeStatus");

if (storeStatus === "open") {
    statusDiv.textContent = "営業中";
    statusDiv.className = "open";
} else if (storeStatus === "closed") {
    statusDiv.textContent = "準備中";
    statusDiv.className = "closed";
} else {
    statusDiv.textContent = "状態が設定されていません";
}

// 営業状態を取得する関数
async function getStatus() {
    const response = await fetch('/.netlify/functions/getStatus');
    const data = await response.json();

    const statusDiv = document.getElementById("status");
    if (data.storeStatus === "open") {
        statusDiv.textContent = "営業中";
        statusDiv.className = "open";
    } else {
        statusDiv.textContent = "準備中";
        statusDiv.className = "closed";
    }
}

// 営業状態を変更する関数
async function updateStatus(newStatus) {
    const response = await fetch('/.netlify/functions/updateStatus', {
        method: 'POST',
        body: JSON.stringify({ storeStatus: newStatus }),
    });

    const data = await response.json();
    alert(data.message);
}

// ページ読み込み時に営業状態を取得
getStatus();

// 営業状態を変更するボタンのイベントリスナー
document.getElementById("openButton").addEventListener("click", function() {
    updateStatus("open");
});

document.getElementById("closedButton").addEventListener("click", function() {
    updateStatus("closed");
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('saveButton').addEventListener('click', () => {
      fetch('/.netlify/functions/saveStatus', {
        method: 'POST',
        body: JSON.stringify({ status: "営業中" }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });