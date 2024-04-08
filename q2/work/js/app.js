$(function(){

// .modal_open_buttonがクリックされたら、fadeInメソッドの実行
$(".modal_open_button").on('click',function(){
    // .modal_winをフェードインさせる
    // フェードインにかける時間は0.5s
    $(".modal_win").fadeIn(500)
});

// .modal_close_buttonがクリックされたら、fadeOutメソッドの実行
$(".modal_close_button").on('click',function(){
    // .modal_winをフェードアウトさせる
    // フェードアウトにかける時間は0.5s
    $(".modal_win").fadeOut(500)
});

})
