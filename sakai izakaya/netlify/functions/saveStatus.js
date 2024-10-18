const admin = require('firebase-admin');
admin.initializeApp();

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  await admin.firestore().collection("営業状態").add(data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "データが保存されました" }),
  };
};
