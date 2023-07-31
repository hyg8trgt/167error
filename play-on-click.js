AFRAME.registerComponent("play-on-click", {
 //Add code here
 schema:{
isplaying:{type:"boolean",default:false}
 },
    init: function(){
        this.video1=this.el.getAttribute("material")
        this.onClick=this.onClick.bind(this)
    },
    onClick:function(evt){
        if(!this.video1){
            return
        }
        var isplaying=this.el.getAttribute("play-on-click").isplaying
        this.el.object3D.visible=true
        if(!isplaying){
            this.el.setAttribute("play-on-click",{
                isplaying:true
            })
            this.video1.play()
        }else {
            this.el.setAttribute("play-on-click",{
                isplaying:false
            })
            this.video1.pause()
        }
    }

});
