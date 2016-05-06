function koshin() {
    var date = document.lastModified;
    document.write(date);
}

function test() {
    document.write("あん？<br>");
}

function writeJsonData() {
    // 本当はサーバーからデータ受け取るけど
    // ローカル環境なのでここで生成
    var obj = { a: true, b: false, c: "madoramu" };
    var str = JSON.stringify(obj);

    // 分割
    var parsed = JSON.parse(str);
    
    document.write(parsed.a + "<br>");
    document.write(parsed.b + "<br>");
    document.write(parsed.c + "<br>");
}