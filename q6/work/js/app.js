$(function () {

    // セレクトボックスの選択肢が変更されたときに実行する
$(".select-box").on("change", function () {
    // 選択されたカテゴリーを取得する
    var selectedCategory = $(this).val();
    
    // 食材のリストを取得する
    var foodList = $(".food-list li");

    // forを使用して食材のリストをループ処理
    // 食材のリスト分処理を実行する
    for (var i = 0; i < foodList.length; i++) {

    // データ属性からカテゴリータイプを取得する
    var categoryType = $(foodList[i]).data("category-type");

    // 選択されたカテゴリーと一致する場合は表示、そうでなければ非表示
    // 選択されたカテゴリーがすべてと等しい　または　選択されたカテゴリーが取得されたカテゴリーと等しい　場合　表示する
    if (selectedCategory === "all" || selectedCategory === categoryType) {
        $(foodList[i]).show();
    } else {
        // 等しくない場合は非表示
        $(foodList[i]).hide();
    }}
    });

});
