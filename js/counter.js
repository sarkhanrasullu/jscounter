var t_  = new Date();

var c_ = document.getElementById("campaign-counter");
var eda_ = c_.getAttribute("enddate");
var bda_ = c_.getAttribute("begin");
var ea_ = c_.getAttribute("end");
if(eda_===null || eda_===undefined){
    eda_ = new Date();
    var min = Math.ceil(bda_);
    var max = Math.floor(ea_);
    var n_ = Math.floor(Math.random() * (max - min + 1)) + min;
    eda_.setDate(eda_.getDate() + n_); 
}
var ed_ = new Date(eda_);
var td_ = t_.toLocaleDateString("en-GB");
var ee_ = ed_.toLocaleDateString("en-GB");

  var cdd_ = ed_.getTime();
  var x = setInterval(function() {
        var nw_ = new Date().getTime();
        var ds_ = cdd_ - nw_;
        var dys_ = Math.floor(ds_ / (1000 * 60 * 60 * 24));
        var hrs_ = Math.floor((ds_ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mts_ = Math.floor((ds_ % (1000 * 60 * 60)) / (1000 * 60));
        var sds_ = Math.floor((ds_ % (1000 * 60)) / 1000);
        var dys_ = dys_ < 10 ? "0" + dys_ : dys_;
        var hrs_ = hrs_ < 10 ? "0" + hrs_ : hrs_;
        var mts_ = mts_ < 10 ? "0" + mts_ : mts_;
        var sds_ = sds_ < 10 ? "0" + sds_ : sds_;
        var message =c_.getAttribute("message");
        message=message.replace("${day}",dys_)
                        .replace("${hour}",hrs_)
                        .replace("${minute}",mts_)
                        .replace("${second}",sds_);
        c_.innerHTML = "<div data-gnl='o' class='indbold'>"+message+"</div>";
        if (ds_ < 0) {
            clearInterval(x);
            c_.innerHTML = "BİTTİ";
        }
   }, 1000);
 