function koshin() {
    var date = document.lastModified;
    document.write(date);
}

function test() {
    document.write("����H<br>");
}

function writeJsonData() {
    // �{���̓T�[�o�[����f�[�^�󂯎�邯��
    // ���[�J�����Ȃ̂ł����Ő���
    var obj = { a: true, b: false, c: "madoramu" };
    var str = JSON.stringify(obj);

    // ����
    var parsed = JSON.parse(str);
    
    document.write(parsed.a + "<br>");
    document.write(parsed.b + "<br>");
    document.write(parsed.c + "<br>");
}