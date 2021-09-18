const gblen = String.prototype.gblen = function () {
    var len = 0;
    for (var i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) > 127 || this.charCodeAt(i) == 94) {
            len += 2;
        } else {
            len++;
        }
    }
    return len;
}

const setUser = function (userName, alertFn, target) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    expires.setDate(expires.getDate() - 1);
    document.cookie = `auth=true;expires=${expires.toUTCString()};path=/`;
    document.cookie = `user=${
        userName
    };expires=${expires.toUTCString()};path=/`;
    alertFn(target.$store.state.user);
    target.$router.push({
        path: "/"
    });
}

export {
    gblen,
    setUser,
}