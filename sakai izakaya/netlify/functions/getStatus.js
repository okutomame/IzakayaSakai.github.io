// netlify/functions/getStatus.js
exports.handler = async function(event, context) {
    // ダミーデータとして営業状態を返す
    const status = {
        storeStatus: "open",  // "open" または "closed"を外部データベースから取得可能
    };

    return {
        statusCode: 200,
        body: JSON.stringify(status),
    };
};
