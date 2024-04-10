$(function () {

    // 次の操作が行われた場合、結果を表示させる
    function displayResult(data) {
        // 検索結果を表示する前にリストを空にする
        $(".lists").empty();
        // メッセージを削除する
        $(".message").remove();
        // data配列の最初の要素にitems配列が存在かつその配列が1つより多くのアイテムを持っている場合、
        if (data[0].items && data[0].items.length > 0) {
            // 以下の処理を繰り返し実行する
            $.each(data[0].items, function (index, item) {

                // item.titleにtitleがあればtitleを、無ければタイトル不明を返す
                const title = item.title ? item.title : "タイトル不明";
                
                // item["dc:creator"]にdc:creatorがあればdc:creatorを、無ければ作者不明を返す
                const creator = item["dc:creator"] ? item["dc:creator"] : "作者不明";
                
                // item["dc:publisher"]にdc:publisherがあればdc:publisherを、無ければ出版社不明を返す
                const publisher = item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明";
                
                // item.link["@id"]を返す
                const link = item.link["@id"];
                
                // 以下のlistItemを、HTMLの.listsの先頭に挿入する
                const listItem =
                `<li class="lists-item">
                        <div class="list-inner">
                            <p>タイトル：${title}</p>
                            <p>作者：${creator}</p>
                            <p>出版社：${publisher}</p>
                            <a href="${link}" target="_blank">書籍情報</a>
                        </div>
                    </li>`;
                $(".lists").prepend(listItem);
            });

            //上記に当てはまらない→検索結果が見つからない場合には、次の文章をHTMLの.listsの要素前に挿入する
        } else {
            $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
        }
    }

    // ページ数である変数pageCountを1で初期化する
    let pageCount = 1;

    // 検索ワードである変数searchWordを””で初期化する
    let searchWord = ""; // 検索ワードの初期値

    // .search-btnがクリックされたら、次の処理が行われる
    $(".search-btn").on("click", function () {

        // inputSearchWordに入力された値を.val()で取得するが、.trim()で前後の空白を除去する
        const inputSearchWord = $("#search-input").val().trim();

        // 前回入力したsearchWordと今回入力されたsearchWordが異なっていた場合、次の処理になる
        if (inputSearchWord !== searchWord) {

            // 新しい検索ワードの場合はページ数をリセットして検索を行う
            pageCount = 1;
            // 新しいsearchWordをinputSearchWordに代入する
            searchWord = inputSearchWord;

        // 前回入力したsearchWordと今回入力されたsearchWordが同じ場合、次の処理になる
        } else {
            // 同じ検索ワードの場合はページ数を増加する
            pageCount++;
        }

        // ajaxリクエストについて、searchWordとpageCountを含み定義する
        const settings = {
        "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
        "method": "GET",
        }
        // ajaxリクエストに接続して
        $.ajax(settings)
        // ヒットするデータがあった場合
        .done(function (response) {
            // ['@graph']から取得したレスポンスを結果として得て
        const result = response['@graph'];
            // それを表示させる
        displayResult(result)
        })

        // ヒットするデータがなかった場合
        .fail(function (err) {
            // 検索結果をクリアにして
        $(".lists").empty();
            // メッセージを削除する
        $(".message").remove();

            // ajaxリクエストの取得に失敗した場合
            // エラーステータスが0のとき、次の要素をHTMLの.listsの先頭に挿入する
            if (err.status === 0) {
            $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください。</div>');
            } else if (err.status === 400) {
            $(".lists").before('<div class="message">検索キーワードが無効です。<br>1文字以上で検索してください。</div>');
            } else {
            $(".lists").before('<div class="message">予期しないエラーが発生しました。<br>もう一度試してください。</div>');
            }
            // エラーが発生した場合、エラーメッセージを表示させる
        displayError(err)

           // 修正箇所ージカウントをリセット
            pageCount = 1;
        });

        // リセットボタンがクリックされたときの処理
        $(".reset-btn").on("click", function () {

        // ページ数をリセット
        pageCount = 1;
        // 検索ワードをリセット
        searchWord = "";
        // 検索結果をクリア
        $(".lists").empty(); 
        // メッセージを削除
        $(".message").remove(); 
        // 検索ワード入力欄を空にする
        $("#search-input").val(""); 
    });
});
})