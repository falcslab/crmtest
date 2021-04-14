$(document).ready(function() {
    //DB初期化
    initdb();
    bulkputdb();

    // tmpに保存された情報を全削除
    delTmpData(FUNC_ID_ALL);

    $("#btnlogin").on("click", function() {
        // ボタン連打対策
        $("#btnlogin").prop("disabled", true);
        login($("#loginid").val(), $("#loginpw").val())
            .then(() => {
                window.location.href = "./main.html";
            })
            .catch((error) => {
                // 該当ユーザーが存在しない場合
                $("#btnlogin").prop("disabled", false);
            });
    });
});