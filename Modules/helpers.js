function  $g() {
    //判斷是否為id selector
    if(selector.include('#')&& !selector.include('')){
        //回傳Element
        return document.querySelector(selector);
    }
    let nodelist = document.querySelectorAll(selector);
    return nodelist.length = 1?nodelist[0]: nodelist;
}
export{$g as $get};