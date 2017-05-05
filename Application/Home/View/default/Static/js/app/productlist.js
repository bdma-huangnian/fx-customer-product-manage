var pageno=1;
function loaded(){

    getItems();
}
function getItems(){

    $.ajax({
        type: "get",
        async: true,
        url: apiProductlist,
        cache:"true",
        data:{
        },
        dataType: "json",
        success : function(json) {
          var list=json.datalsit;	
			var str="";
			for(i=0;i<list.length;i++){			
				str+='<li><a href="product_sublist.html?categoryid='+list[i].categoryid+'"><img src="'+list[i].iconurl+'" alt="" class="pic_pro">'+
				'<div class="txtbox_pro"><div class="txtbox"><h3>'+list[i].categoryname+'</h3><p>'+list[i].description+'</p></div><div class="arrowbox"></div></div></a></li>'
		    }
			if(json.pagetotal>1){
				  str+='<div class="more" onclick="getMore()">点击加载更多</div>'	
			}				
			$("#prolist").html(str);
			$(".container").show();
        }

    });
}

function getMore(){
	$(".more").remove();
	pageno+=1;
    $.ajax({
        type: "get",
        async: true,
        url: apiProductlist,
        cache:"true",
        data:{
			pageno:pageno
        },
        dataType: "json",
        success : function(json) {
          var list=json.datalsit;	
			var str="";
			for(i=0;i<list.length;i++){			
				str+='<li><a href="product_sublist.html?categoryid='+list[i].categoryid+'"><img src="'+list[i].iconurl+'" alt="" class="pic_pro">'+
				'<div class="txtbox_pro"><div class="txtbox"><h3>'+list[i].categoryname+'</h3><p>'+list[i].description+'</p></div><div class="arrowbox"></div></div></a></li>'
		    }
			if(pageno<json.pagetotal){
				  str+='<div class="more" onclick="getMore()">点击加载更多</div>'	
				}
				else{
					str+='<div class="more">无更多数据</div>'
			}			
			$("#prolist").append(str);
        }

    });
}




