export function debounce(fn,delay){
    let timer;
    return function(...arg){
      if(timer){
        clearTimeout(timer)
      }
      if(arg[0]&&arg[0].persist)arg[0].persist();
      timer = setTimeout(()=>{
        fn.apply(this,arg);
        timer = null;
      },delay)
    }
  }
  
export function throttle(fn, delay){
    var prev = Date.now();
    return function(){
        var context = this;
        var args = arguments;
        var now = Date.now();
        if(now-prev>=delay){
            fn.apply(context,args);
            prev = Date.now();
        }
    }
  }