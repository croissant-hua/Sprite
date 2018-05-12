//获取元素对象
function g(id) { return document.getElementById(id); }


//(el=Element) 登录浮层
function autoCenter(el) {
    //获得可视区域的宽高
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;

    //浮层元素实际宽高
    var elW = el.offsetWidth;
    var elH = el.offsetHeight;

    el.style.left = (bodyW - elW) / 2 + 'px';
    el.style.top = (bodyH - elH) / 2 + 'px';
}


//三个鼠标事件：1.按下鼠标mousedown  2.开始移动onmousemove  3.放开onmouseup

//鼠标偏移值
var mouseOffsetX = 0;
var mouseOffsetY = 0;

var isDraging = false; //是否为可拖动的标记

//1.按下鼠标：  按下鼠标时，计算鼠标相对拖拽元素的左上角的坐标，并且标记元素为可拖动。
g('map').addEventListener('mousedown', function(e) {
    //获得鼠标事件对象
    var e = e || window.event; //兼容在IE中鼠标事件获取的方法，IE中不会直接传入e对象，会存在window.event大对象下
    //计算鼠标偏移   e.pageX
    console.log("00000000000");
    mouseOffsetX = e.pageX; // - g('imgg').offsetLeft;
    mouseOffsetY = e.pageY; // - g('imgg').offsetTop;
    isDraging = true;
})

g('imgg').addEventListener('mousedown', function(e) {
    //获得鼠标事件对象
    var e = e || window.event; //兼容在IE中鼠标事件获取的方法，IE中不会直接传入e对象，会存在window.event大对象下
    //计算鼠标偏移   e.pageX
    console.log("00000000000");
    mouseOffsetX = e.pageX; //- g('imgg').offsetLeft;
    mouseOffsetY = e.pageY; //- g('imgg').offsetTop;
    isDraging = true;
})

//2.开始移动：  检测登录浮层是否标记为可移动，如果是，则更新元素的位置到当前鼠标的位置。（减去第一步中获得的偏移）
//针对document处理鼠标移动事件
document.onmousemove = function(e) {
    var e = e || window.event;

    var mouseX = e.pageX; //鼠标移动事件发生时，鼠标当前的位置
    var mouseY = e.pageY;

    //浮层元素新位置
    var moveX = 0; //移动事件发生时，浮层元素新的位置
    var moveY = 0;

    if (isDraging === true) {
        moveX = mouseX - mouseOffsetX;
        moveY = mouseY - mouseOffsetY;


        //  移动范围限定  宽度  moveX > 0 并且  moveX < (页面最大宽度 - 浮层的宽度)
        //           高度  moveY > 0 并且  movey < (页面最大高度 - 浮层的高度)

        // var pageWidth = document.documentElement.clientWidth;
        // var pageHeight = document.documentElement.clientHeight;

        // var dialogWidth = g('dialog').offsetWidth;
        // var dialogHeight = g('dialog').offsetHeight;

        // var maxX = pageWidth - dialogWidth;
        // var maxY = pageHeight - dialogHeight;

        // moveX = Math.min(maxX, Math.max(0, moveX));
        // moveY = Math.min(maxY, Math.max(0, moveY));



        g("map").style.backgroundPositionX = -2880 + moveX + 'px';
        g("map").style.backgroundPositionY = -1620 + moveY + 'px';
        g("imgg").style.left = moveX + 'px';
        g("imgg").style.top = moveY + 'px';

        // console.log(moveX, moveY);
    }
}

//3.放开：      鼠标松开，标记元素为不可拖动状态。
document.onmouseup = function() {
    isDraging = false;
}