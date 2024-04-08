$(function(){
    // アカウント作成ボタンがクリックされたら、実行する
            // .val()にて、value値を取得する
    $('.btn__submit').on('click',function() {

        // フォーム内の個人情報
        // 名字の取得
        var familyName = $('#family__name').val();
        // 名前の取得
        var givenName = $('#given__name').val();
        // 生年月日の年を取得
        var year = $('.year').val();
        // 生年月日の月を取得
        var month = $('.month').val();
        // 生年月日の日を取得
        var day = $('.day').val();
        // 選択された性別を取得
        var gender = $('input[name="gender"]:checked').val();
        // 職業を取得
        var occupation = $('.occupation').val();

        // フォーム内のアカウント情報
        // アカウント名を取得
        var accountName = $('#account__name').val();
        // メールアドレスを取得
        var email = $('#email').val();
        // パスワードを取得
        var password = $('#password').val();
        // 確認用パスワードを取得
        var duplicationPassword = $('#duplication__password').val();

        // フォーム内の連絡先
        // 住所を取得
        var address = $('#address').val();
        // 電話番号を取得
        var tel = $('#tel').val();

        // フォーム内の購読情報
        // 選択されたメールマガジンを取得
        var subscriptionEmailMagazine = $('#email__magazine:checked').val();
        // 選択されたクーポンを取得
        var subscriptionCoupon = $('#coupon:checked').val();

        // それぞれコンソールに出力
        console.log("個人情報:");
        console.log("名字: " + familyName);
        console.log("名前: " + givenName);
        console.log("生年月日: " + year + "年" + month + "月" + day + "日");
        console.log("性別: " + gender);
        console.log("職業: " + occupation);

        console.log("アカウント情報:");
        console.log("アカウント名: " + accountName);
        console.log("メールアドレス: " + email);
        console.log("パスワード: " + password);
        console.log("確認用パスワード: " + duplicationPassword);

        console.log("連絡先:");
        console.log("住所: " + address);
        console.log("電話番号: " + tel);

        console.log("購読情報:");
        console.log("メールマガジン: " + subscriptionEmailMagazine);
        console.log("クーポン: " + subscriptionCoupon);
    });

})