function animate(obj, interval_time, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (interval_time - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == interval_time) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + "px";
    }, 15);

}

window.addEventListener('load', function() {
    // left right disappear and show
    var left = document.querySelector('.prev');
    var right = document.querySelector('.after');
    var focus = document.querySelector('.focus');
    var areawidth = focus.offsetWidth;

    focus.addEventListener('mouseenter', function() {
        left.style.display = 'block';
        right.style.display = 'block';
        clearTimeout(auto_play);
        auto_play = null;
    })

    focus.addEventListener('mouseleave', function() {
        left.style.display = 'none';
        right.style.display = 'none';
        auto_play = setInterval(() => {
            right.click();
        }, 2000);
    })

    // circle nav
    var nav = document.querySelector('.promo-nav');
    var circle = nav.children;
    var roll = document.querySelector('.show_area');


    for (var i = 0; i < circle.length; i++) {
        circle[i].setAttribute('data_index', i);
        circle[i].addEventListener('click', function() {
            for (var j = 0; j < circle.length; j++) {
                circle[j].className = '';
                this.className = 'current';
            }
            num = this.getAttribute('data_index');
            circle_index = this.getAttribute('data_index');
            animate(roll, -this.getAttribute('data_index') * areawidth);
        })
    }
    // clone first picture
    var first = roll.children[0].cloneNode(true);
    roll.append(first);

    // left right button
    var num = 0;
    var circle_index = 0;
    var flag = true;
    right.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == roll.children.length - 1) {
                roll.style.left = 0;
                num = 0;
            }
            num++;
            animate(roll, -num * areawidth, function() {
                flag = true;
            });

            circle_index++;
            if (circle_index == nav.children.length) {
                circle_index = 0;
            }

            for (var i = 0; i < nav.children.length; i++) {
                nav.children[i].className = '';
            }
            nav.children[circle_index].className = 'current';
        }
    })

    left.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                roll.style.left = -(roll.children.length - 1) * areawidth + 'px';
                num = roll.children.length - 1;
            }
            num--;
            animate(roll, -num * areawidth, function() {
                flag = true;
            });

            circle_index--;
            if (circle_index < 0) {
                circle_index = nav.children.length - 1;
            }

            for (var i = 0; i < nav.children.length; i++) {
                nav.children[i].className = '';
            }
            nav.children[circle_index].className = 'current';
        }
    })

    // auto play
    var auto_play = setInterval(() => {
        right.click();
    }, 2000);
})

window.addEventListener('DOMContentLoaded', function() {
    var ad = document.querySelector('.load_ad');
    var hour = document.querySelector('#hour');
    var mins = document.querySelector('#mins');
    var secs = document.querySelector('#secs');
    var close_icon = document.querySelector('.close_icon');

    var inputTime = +new Date() + 18000000;
    countDown();
    setInterval(countDown, 1000);

    function countDown() {
        var nowTime = +new Date();
        var times = (inputTime - nowTime) / 1000;
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h;
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        mins.innerHTML = m;
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        secs.innerHTML = s;
    }

    close_icon.onclick = function() {
        ad.style.display = 'none';
    }

    window.addEventListener('load', function() {
        setTimeout(function close() {
            ad.style.display = 'none';
        }, 10000)
    })

    var m = document.querySelector('#mousefollow');
    document.addEventListener('mousemove', function(e) {
        var x = e.pageX;
        var y = e.pageY;

        m.style.left = x + 5 + 'px';
        m.style.top = y + 5 + 'px';
    });

    var slide = document.querySelector('.slider-bar');
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 200) {
            slide.style.position = 'fixed';
            slide.style.top = 100 + 'px';

        } else if (window.pageYOffset < 200 || window.pageYOffset >= 1400) {
            slide.style.position = 'absolute';
            slide.style.top = '300px';
        }
    })

    var close_bar = document.querySelector('#close_bar');
    close_bar.addEventListener('click', function() {
        slide.style.display = 'none';
        this.style.display = 'none';
    })

    var back = document.querySelector('.go_back');
    back.style.display = 'none';
    var topoff = window.pageYOffset;

    document.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            back.style.display = 'block';
            back.style.position = 'fixed';
        } else {
            back.style.display = 'none';
        }
    })

    var imgs = document.querySelectorAll('.table_list_item')[0].querySelectorAll('img')
    var imgs_2 = document.querySelectorAll('.table_list_item')[1].querySelectorAll('img')
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('mouseenter', function() {
            for (var i = 0; i < imgs.length; i++) {
                animate(this, 20);
            }
        })
        imgs[i].addEventListener('mouseleave', function() {
            for (var i = 0; i < imgs.length; i++) {
                animate(this, 0);
            }
        })
    }
    for (var i = 0; i < imgs_2.length; i++) {
        imgs_2[i].addEventListener('mouseenter', function() {
            for (var i = 0; i < imgs_2.length; i++) {
                animate(this, 20);
            }
        })
        imgs_2[i].addEventListener('mouseleave', function() {
            for (var i = 0; i < imgs_2.length; i++) {
                animate(this, 0);
            }
        })
    }
});