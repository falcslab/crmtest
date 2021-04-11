$(document).ready(function () {
  initdb();
  bulkputdb();

  //URLから顧客IDを取得
  const url = new URL(window.location.href);
  const prms = url.searchParams;

  getPrefList()
  getCstInfo(prms.get('cstId')).catch(() => {
    window.location.href = "./index.html"
  });
  $("#cstregistconfirm").on("click", function () {
    // ボタン連打対策
    $("#cstregistconfirm").prop("disabled", true);
    // 顧客情報確認画面へ
    window.location.href = "./cstregist_confirm.html" + "?cstId=" + prms.get('cstId');
  });
  $("#backtosearchresult").on("click", function () {
    // 名寄せ検索結果画面に戻る
    window.location.href = "./cstregist_searchresult.html";
  });
});
