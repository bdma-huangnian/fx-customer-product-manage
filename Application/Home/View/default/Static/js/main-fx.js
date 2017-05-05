



//--------------------   api 统一定义 ----------------------------------
//域名
var api="index-2.html";


//活动列表
var apiActivitylist=api+"/Api/CompanyActionCategory/List/index.aspx?resulttype=json";
//活动子列表
var apiActivitySublist=api+"/Api/CompanyAction/List/index.aspx?resulttype=json";
//活动页面
var apiActivity=api+"/Api/CompanyAction/Detail/index.aspx?resulttype=json";
//产品列表
var apiProductlist=api+"/Api/ProductCategory/List/index.aspx?resulttype=json";
//产品子列表
var apiProductSublist=api+"/Api/ProductInfo/List/index.aspx?resulttype=json";
//产品页面
var apiProduct=api+"/Api/ProductInfo/Detail/index.aspx?resulttype=json";
//市场列表
var apiMarketlist=api+"/Api/SaleActionCategory/List/index.aspx?resulttype=json";
//市场子列表
var apiMarketSublist=api+"/Api/SaleAction/List/index.aspx?resulttype=json";
//市场页面
var apiMarket=api+"/Api/SaleAction/Detail/index.aspx?resulttype=json";
//视频列表
var apiVideolist=api+"/Api/VideoInfoCategory/List/index.aspx?resulttype=json";
//视频子列表
var apiVideoSublist=api+"/Api/VideoInfo/List/index.aspx?resulttype=json";
//视频页面
var apiVideo=api+"/Api/VideoInfo/Detail/index.aspx?resulttype=json";
//使用和维护一类菜单
var apiUselist=api+"/Api/ExplainCategory/List/Firstindex.aspx?resulttype=json";
//使用和维护二类菜单
var apiUselist2=api+"/Api/ExplainCategory/List/Secondindex.aspx?resulttype=json";
//使用和维护子菜单
var apiUseSublist=api+"/Api/ExplainInfo/List/index.aspx?resulttype=json";
//使用和维护页面
var apiUse=api+"/Api/ExplainInfo/Detail/index.aspx?resulttype=json";
//产品说明书分类
var apiManuallist=api+"/Api/ProductInstructionCategory/List/index.aspx?resulttype=json";
//产品说明书子菜单
var apiManuakSublist=api+"/Api/ProductInstruction/List/index.aspx?resulttype=json";
//产品说明书页面
var apiManual=api+"/Api/ProductInstruction/Detail/index.aspx?resulttype=json";
















//-------------------- api 统一定义 end ----------------------------------


// ------------------- LS 名称定义 end ----------------------------------------
var hour_1 = new Date().getTime();
function isClick(name,id){
    if (hour_1 == null){
        hour_1 = new Date().getTime();
    }
    else{
        var hour_2 = new Date().getTime();
        if(hour_2 - hour_1 < 500){
            hour_1 = hour_2;
            return;
        }else{
            hour_1 = hour_2;
        }
         name(id);
    }

}



function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {};
    for ( i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];

    if ( typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }

}


function setThisKey(itemKey, keyValue) {

    if (itemKey == null || keyValue == null)
        return;

    if (window.localStorage) {
        window.localStorage.setItem(itemKey, keyValue);
        console.log('localStorage 已经保存');
    } else {
        alert("您的浏览器版本不支持该功能，建议升级！");
    }
}

function getThisKey(itemKey) {

    if (itemKey == null)
        return null;
    //如果是null，直接回去！
    var keyValue;

    if (window.localStorage) {
        keyValue = window.localStorage.getItem(itemKey);

    } else {

        alert("您的浏览器版本不支持该功能，建议升级！");
    }

    return keyValue;
}


function appendThisKey(itemKey, keyValue) {

    if (itemKey == null || keyValue == null)
        return;
    //如果是null，直接回去！
    var sss = getThisKey(itemKey);
    sss = sss + keyValue;
    setThisKey(itemKey, sss);
}

//删除某个key对应的localstorage
function removeThisKey(itemKey) {
    console.log("removeThisKey -----开始了！");
    if (itemKey == null)
        return null;
    //如果是null，直接回去！

    if (window.localStorage) {
        window.localStorage.removeItem(itemKey);
        console.log('localStorage 已经删除');
    } else {
        alert("您的浏览器版本不支持该功能，建议升级！");
    }
}

//清除所有的local storage
function clearLocalStorage() {
    console.log("clearCache -----开始了！");
    if (window.localStorage) {
        var x = navigator;

        // 不是windows平台和mac平台，就算手机！(mplatform.indexOf('Win32') != -1) ||
        if ((x.platform.indexOf('Mac') != -1) || (x.platform.indexOf('Win32') != -1) || (x.userAgent.indexOf('MicroMessenge') != -1)) {//这是pc的部分

            window.localStorage.clear();
            console.log('localStorage 已经清除啦！');

        } else if (isPhoneGapApp == false) {

            window.localStorage.clear();
            console.log('localStorage 已经清除啦！');

        } else {
            navigator.notification.confirm('您真的要清除所有缓存吗？111', // message
            onConfirmClearCache, // callback to invoke with index of button pressed
            '系统提示', // title
            '按错了,确定' // buttonLabels
            );
        }

    } else {
        console.log('This browser does NOT support localStorage ，不支持 ');
        alert("您的浏览器版本不支持该功能，建议升级！");
    }

}


//清除所有的缓存
function clearLocalStorageWithoutConfirm() {
    console.log("clearLocalStorageWithoutConfirm -----开始了！");
    if (window.localStorage) {
        var x = navigator;

        // 不是windows平台和mac平台，就算手机！(mplatform.indexOf('Win32') != -1) ||
        if ((x.platform.indexOf('Mac') != -1) || (x.platform.indexOf('Win32') != -1) || (x.userAgent.indexOf('MicroMessenge') != -1)) {//这是pc的部分

            //这是pc的部分，不确认了！直接clear
            window.localStorage.clear();
            //add by wzh 20140725 清除掉cookie
            clearCookie();

            console.log('localStorage已经清除啦！');
        } else if (isPhoneGapApp == false) {

            window.localStorage.clear();
            //清除掉cookie
            clearCookie();

            console.log('localStorage已经清除啦！');
        } else {
            navigator.notification.confirm('WEB服务的版本更新了，是否现在更新数据？' + "WS_Version_LS : " + WS_Version_LS + "WS_Version_LS==" + WS_Version, // message
            onConfirmClearCache, // callback to invoke with index of button pressed
            '系统提示', // title
            '按错了,确定' // buttonLabels
            );
        }

    } else {

        alert("您的浏览器版本不支持该功能，建议升级！");
    }

}


//保存单个sessionStorage
function setThisSessionKey(itemKey, keyValue) {

    if (itemKey == null || keyValue == null)
        return;
    //如果是null，直接回去！

    //是否先判断是否已经存在？待处理
    if (window.sessionStorage) {
        window.sessionStorage.setItem(itemKey, keyValue);
        console.log('sessionStorage 已经保存');
    } else {
        console.log('This browser does NOT support sessionStorage ，不支持 ');
    }
}

//获取session
function getThisSessionKey(itemKey) {

    if (itemKey == null)
        return null;
    //如果是null，直接回去！
    var keyValue;

    if (window.localStorage) {
        keyValue = window.sessionStorage.getItem(itemKey);

    } else {
        console.log('This browser does NOT support sessionStorage ，不支持 ');
        alert("您的浏览器版本不支持该功能，建议升级！");
    }

    return keyValue;
}

//删除某个key对应的session
function removeThisSessionKey(itemKey) {
    console.log("removeThisSessionKey -----开始了！");
    if (itemKey == null)
        return null;
    //如果是null，直接回去！

    if (window.sessionStorage) {
        window.sessionStorage.removeItem(itemKey);
        console.log('removeThisSessionKey 已经删除');
    } else {

        alert("您的浏览器版本不支持该功能，建议升级！");
    }
}

//追加session
function appendThisSessionKey(itemKey, keyValue) {
    console.log("appendThisSessionKey -----开始了！");

    if (itemKey == null || keyValue == null)
        return;
    //如果是null，直接回去！
    var sss = getThisSessionKey(itemKey);
    sss = sss + keyValue;
    setThisSessionKey(itemKey, sss);
}

//===============================
function onConfirmClearCache(button) {
    //设置自动检测参数为0，下次打开软件可以进行检测。
    if (button == 2) {
        window.localStorage.clear();
        console.log('localStorage 已经清除啦！');
        sleep(200);
        ClearCache.show();
        console.log('ClearCache 已经清除啦！');
        alert("本应用程序的缓存已经清除啦！");
        //add by wzh 20140725 清除掉cookie
        clearCookie();
    } //选择了确定才执行退出

}
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}


//返回上一个页面
function goback() {
    var pageName=request("pageName");
    if(pageName==null || pageName=="" || pageName=="undefined"){
        history.back(-1);
    }
    else{
       window.location.href=pageName+".html";
    }
//    if(onclickback==0){
//        history.back(-1);
//    }
//    else{
//        window.location.href=window.document.referrer
//    }


}









//保存cookies
function setCookie(objName, objValue, objHours) {

    var str = objName + "=" + escape(objValue);
    if (objHours > 0) {

        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;

}
//读取cookies
function getCookie(objName) {

    if(document.cookie!=""){
        var arrStr = document.cookie.split("; ");
        for(var i = 0;i < arrStr.length;i ++){
            var temp = arrStr[i].split("=");
            if(temp[0] == objName) return unescape(temp[1]);
        }
    }
    else{

        return "";
    }
}


//删除cookies  单个
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//删除cookies 所有的
function clearCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--; )
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}



//图片上传时，截取图片名称的后三位
function right(mainStr, lngLen) {
    // alert(mainStr.length)
    if (mainStr.length - lngLen >= 0 && mainStr.length >= 0 && mainStr.length - lngLen <= mainStr.length) {
        return mainStr.substring(mainStr.length - lngLen, mainStr.length)
    } else {
        return null
    }
}










