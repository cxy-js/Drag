;(function(window,document){

	var Drag=function(el){
		this.el=document.querySelector(el)
		this.init()
	}
	Drag.prototype.init=function(){
		this.event()
	}
	Drag.prototype.event=function(){
		var that=this
		this.el.onmousedown=function(e){
			var e=e||window.event;
			var l=e.clientX-this.offsetLeft;
			var t=e.clientY-this.offsetTop;
			document.onmousemove=function(e){
				var e=e||window.event;
				var W=window.innerWidth,H=window.innerHeight;
				var width,height,left,top,lx,tx
				that.el.style.left=e.clientX-l+'px';
				that.el.style.top=e.clientY-t+'px';
				//获取元素width,height
				if(window.getComputedStyle){
					width=window.getComputedStyle(that.el,null)['width']
					height=window.getComputedStyle(that.el,null)['height']
				}else{
					//IE
					width=that.el.currentStyle['width']
					height=that.el.currentStyle['height']
				}
				//保存left,top,差值
				left=parseInt(that.el.style.left)
				lx=W-parseInt(width)

				top=parseInt(that.el.style.top)
				tx=H-parseInt(height)
				//三元运算简化代码
				that.el.style.left = left <= 0 ? 0 : left >= lx ? lx + 'px' : (e.clientX-l) +'px'
				that.el.style.top = top <= 0 ? 0 : top >= tx ? tx + 'px' : (e.clientY-t) +'px'
				// if(left>=lx){
				// 	that.el.style.left=lx+'px'
				// }
				// if(left<=0){
				// 	that.el.style.left=0
				// }
			};
			document.onmouseup=function(){
				//清除移动，抬起
				this.onmousemove=null;
				this.onmouseup=null
			}
			//阻止冒泡
			//addEventListener用stopPropageation()
			return false
		}
	}
	window.Drag=Drag

})(window,document)
