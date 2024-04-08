//Q1-1
//読み込みされたら関数の実行  
$(function(){
    // id=q1の文字色を緑にする
    $("#q1").css("color","green")
});

// q1-2
$(function(){
// クリックされたら関数の実行
$('#q2').on('click',function(){
    // id=q2の背景色をピンクにする
    $("#q2").css("background-color","pink")
});
})


// q1-3
$(function(){
// クリックされたら関数の実行
$('#q3').on('click',function(){
    // id=q3がフェードアウトする
    // '3E3'は3000ミリ秒、つまり、３秒を意味する
    $("#q3").fadeOut(3000)
});
})

// q1-4
$(function(){
// クリックされたら関数の実行
$('#q4').on('click',function(){
    // id=q4のクラスに"large"を追加する
    // すると、.largeのcssが適用されて、サイズが変更される
    $('#q4').addClass("large")
});
})

// q1-5
$(function(){
// クリックされたら関数の実行
$("#q5").on('click',function(){

    // id=q5のコンテンツ内部の先頭にコンテンツを挿入する
    $("#q5").prepend("DOMの中の前")

    // id=q5のコンテンツ内部の末尾にコンテンツを挿入する
    .append("DOMの中の後")

    // id=q5のコンテンツ自体の先頭にコンテンツを挿入する
    .before("DOMの前")

    // id=q5のコンテンツ自体の末尾にコンテンツを挿入する
    .after("DOMの後")
});
})

// q1-6
$(function(){
// クリックされたら関数の実行
$("#q6").on("click",function(){
    // id=q6の位置が上から100px、左から100pxの位置に移動する
    // '2E3'は2000ミリ秒、つまり、２秒を意味する
    $("#q6").animate({"margin-top":100,"margin-left":100 },2000)
});
})

// q1-7
$(function(){
// クリックされたら関数の実行
$("#q7").on("click",function(){
    // コンソールにノードを表示する
    // 表示内容は要素全体となるため、thisを用いる
    console.log(this)
});
})

// q1-8
$(function(){
// id=q8の要素内にマウスが入ったら関数の実行
$("#q8").on({ mouseenter:function(){
    // id=q8のクラスに"large"を追加する
    // すると、.largeのcssが適用されて、サイズが変更される
    $("#q8").addClass("large")
},  
    // 複数のメソッドを記入する際には、メソッドチェーンとして記入する。
    // id=q8の要素からマウスが出たら関数の実行
    mouseleave:function(){
    // id=q8のクラスから"large"を削除する
    // すると、.largeのcssが解除されて、サイズが元に戻る
    $("#q8").removeClass("large")
}
});
})


// q1-9
$(function(){
// id=q9 liがクリックされたら関数の実行
$("#q9 li").on("click", function(){
    // クリックされたliの要素を取得する
    // index()は、その要素が兄弟要素の中で何番目かを示す
    // 要素の中で数えるため、要素を示すthisを用いる
    var index = $(this).index();
    // アラートで取得した要素の値を表示する
    alert(index)
});
})


// q1-10
$(function(){
// id=q10 liがクリックされたら関数の実行
$("#q10 li").on("click", function(){
    // クリックされたliの要素を取得する
    // index()は、その要素が兄弟要素の中で何番目かを示す
    // 要素の中で数えるため、要素を示すthisを用いる
    var q10LiIndex = $(this).index();
    // クリックされた要素と対応するq11 liについて、コンソールに表示する
    console.log($("#q11 li").eq(q10LiIndex));
    // 対応するq11 liの要素に、large-textクラスを付加する
    $("#q11 li").eq(q10LiIndex).addClass("large-text")
});
})