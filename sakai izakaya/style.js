let show_hour = document.getElementById("show_hour");
let show_minute =document.getElementById("show_minute");
let show_second = document.getElementById("show_second");
 
//■処理実行部分
 
time();
 
function time() {
 
    let now = new Date();  //現在の時刻取得（初期化）
 
    let hour= now.getHours();　//現在の時刻から「時」の数値データを取得
    show_hour.textContent=String(hour).padStart(2,"0");　//「時」の数値データを文字データに変更して2桁表示にする
 
 
    let minute = now.getMinutes();//現在の時刻から「分」の数値データを取得
    show_minute.textContent=String(minute).padStart(2,"0");　//「分」の数値データを文字データに変更して2桁表示にする
 
    let second = now.getSeconds();　//現在の時刻から「秒」の数値データを取得
    show_second.textContent=String(second).padStart(2,"0");　//「秒」の数値データを文字データに変更して2桁表示にする
 
    restart();　// restart()ファンクションを実行する
}
 
function restart(){
 
    setTimeout(time,1000);　//1秒経過後にtime()ファンクションを実行する。
}