var liffID = '1655672433-Q1LNB1XP';

var liffInit = function () {
    liff.init({
        liffId: liffID
    }).then(function () {
            console.log('LIFF init');

            if (!liff.isLoggedIn()) {
                console.log('你還沒登入Line哦！');
                document.getElementById('isLogin').textContent = "你還沒登入Line哦";
                liff.login();
            } else {
                console.log('你已經登入Line哦！');
                document.getElementById('isLogin').textContent = "你已經登入Line哦";

                const accessToken = liff.getAccessToken();
                console.log('getAccessToken', accessToken);
                document.getElementById('accessToken').textContent = accessToken;

                const idToken = liff.getIDToken();
                console.log('getIDToken', idToken)
                document.getElementById('idToken').textContent = idToken;

                const idDecodedToken = liff.getDecodedIDToken();
                console.log('getDecodedIDToken', idDecodedToken)
                document.getElementById('idDecodedToken').textContent = JSON.stringify(idDecodedToken,null,2);
            }


            //取得使用者類型資料
            var context = liff.getContext();
            console.log('getContext', context);

            //取得使用者公開資料
            //後台的「Scopes」要設定開啟 profile, openid
            liff.getProfile().then(function (profile) {
                console.log('getProfile', profile)
                document.getElementById('profile').textContent = JSON.stringify(profile,null,2);
                document.getElementById('lineImg').setAttribute('src',profile.pictureUrl);
                document.getElementById('lineName').textContent = profile.displayName;
            });

        }
    ).catch(function (error) {
        console.log(error);
    });
}

window.addEventListener('load', () => {
    liffInit();
})


