$(function(){

// .dropdwn li　において、
$(".dropdwn li").hover(
    // .dropdwn li　上にカーソルが来たら、以下のメソッドを実行する    
    function () {

        // .dropdwn liの子要素であるli は
        $(this).children("ul")
            // 条件から外れる際に以下のアニメーションを中断するが、
            .stop()
                // 基本的にはスライドダウンして表示する
                .slideDown() },

    // .dropdwn li　上からカーソルが外れたら、以下のメソッドを実行する                    
    function () { 

        // .dropdwn liの子要素であるli は
        $(this).children("ul")
            // 条件から外れる際に以下のアニメーションを中断するが、
            .stop()
                // 基本的にはスライドアップして非表示にする
                .slideUp() });

})