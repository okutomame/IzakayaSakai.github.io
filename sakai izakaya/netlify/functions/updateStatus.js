// netlify/functions/updateStatus.js
exports.handler = async function(event, context) {
    const data = JSON.parse(event.body);  // リクエストボディからデータを取得
    const newStatus = data.storeStatus;  // "open" または "closed"

    // ここでデータベースやJSONファイルに状態を保存する処理を追加
    console.log(`新しい営業状態: ${newStatus}`);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `営業状態が ${newStatus} に変更されました。` }),
    };
};
