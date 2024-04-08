$(function(){

// .drawer_buttonがクリックされたら、メソッドの実行
$(".drawer_button").on('click',function(){

    // クリックされるたびに、.drawer_buttonに
    // activeというクラスを追加したり削除したりする
    $(".drawer_button").toggleClass("active");

    // クリックされるたびに、.drawer_bgを
    // フェードインさせたり、フェードアウトさせたりする
    $(".drawer_bg").fadeToggle();

    // クリックされるたびに、navに
    // openというクラスを追加したり、削除したりする
    $("nav").toggleClass("open")
});

})