function refreshRem(){
    var dewS=720,
        _W=document.documentElement.clientWidth;
    _W = _W>720?720:_W;
    var ratio=_W/dewS;
    document.documentElement.style.fontSize =ratio*100+'px';
};
refreshRem();
window.addEventListener('resize',refreshRem,false);
/** 禁用滚动 **/function stopScroll() {
    $(document.body).css("overflow","hidden");//禁用滚动条
    document.ontouchmove=function(){ return false;}
};
/** 启用滚动 **/function StartScroll() {
    $(document.body).css("overflow","scroll");//启用滚动条
    document.ontouchmove=function(){ return true;}
};
/** 禁用点击 **/function stopTap() {
    document.ontouchstart=function(){ return false;};//禁用点击
};
/** 启用点击 **/function StartTap() {
    document.ontouchstart=function(){ return true;};//启用点击
};





