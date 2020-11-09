const cookie = {
    setCookie(name, value, days) {
        var oDate = new Date();
        /*days为保存时间长度*/
        oDate.setDate(oDate.getDate() + days);
        document.cookie = name + '=' + value + ';expires=' + oDate + "; path=/";
    },
    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    removeCookie(name) {
        /*-1表示昨天过期,系统自动删除*/
        setCookie(name, 1, -1);
    }
}
export default cookie;