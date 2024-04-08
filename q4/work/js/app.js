$(function(){

// クリックされたらメソッドの実行
$(".nav li" ).on('click',function()
{
    // クリックされたリストのインデックス番号を取得する
    var index = $(".nav li").index(this);

    // すべての.description li　に　.is-hidden　を追加し、非表示にする
    $(".description li").addClass("is-hidden");

    // 取得されたインデックス番号をもつ.description liから、.is-hiddenを削除し、表示する
    $(".description li").eq(index).removeClass("is-hidden");
});

})