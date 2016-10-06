// 宣告全域變數
var AllLanguage = GetJsonLang();

// 取得javascript語言檔lang.json
function GetJsonLang(NowLang){
	var NowLang     = (NowLang=="")? "en-us":$.cookie("lang");
	var LangFileUrl = "lang/"+NowLang+"/lang.json";
	var AllLanguage = [];

	$.ajax({
		url: LangFileUrl,
	    data: '',
	    type: "GET",
	    dataType: 'json',
		async: false,
		success: function(Data){
			AllLanguage = Data;
	    },
	    error:function(xhr, ajaxOptions, thrownError){
	        console.log(xhr.status);
	        console.log(thrownError);
	    }
	});
	return AllLanguage;
}
