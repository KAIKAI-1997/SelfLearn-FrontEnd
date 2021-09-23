window.onload() {
    var eye = document.getElementById('eye');
    var password = document.getElementById('password');
    var flag = 0;

    eye.onclick = function() {
        if (flag == 0) {
            password.type = 'text';
            eye.src = 'imgs/open.png';
            flag = 1;
        } else {
            password.type = 'password';
            eye.src = 'imgs/close.png';
            flag = 0;
        }
    }
}