// 지정한 번호의 이미지를 활성화 시킨다.
function actImg(actImgNo){
	// 모든 슬라이드 이미지를 비활성화 시킨 후 지정한 번호의 이미지만 활성화 시킨다.
	$(".slideImg > li").removeClass("actImg").filter(":eq("+actImgNo+")").addClass("actImg");
	// 모든 슬라이드 번호 표시를 비활성화 시킨 후 지정한 번호만 활성화 시킨다.
	$(".slideNumber > a").removeClass("actNumber").filter(":eq("+actImgNo+")").addClass("actNumber");
}			

$(function(){
	slideImgSize = $(".slideImg > li").size();	// 슬라이드 이미지 수				
	var actImgNo = 0;	// 초기 슬라이드 활성화 번호
	
	$(".slidePrev").click(function(){	// 이전 버튼 클릭 이벤트
		// 첫번째 이미지에서 이전 버튼을 누를 경우 마지막 슬라이드 번호로 이동한다.
		actImgNo = (actImgNo == 0) ? slideImgSize-1 : --actImgNo;
		actImg(actImgNo);
	});
	$(".slideNext").click(function(){	// 다음 버튼 클릭 이벤트
		// 마지막 이미지에서 다음 버튼을 누를 경우 첫번째 슬라이드 번호로 이동한다.
		actImgNo = (actImgNo == slideImgSize-1) ? 0 : ++actImgNo;
		actImg(actImgNo);
	});
});

// 처음 서적인지와 마지막 서적인지 여부를 확인한다.
function checkEnd(actBookNo){
	// 처음 서적일 경우 이전버튼을 비활성화 시킨다.
	if(actBookNo == 0){
		$(".bookPrev").addClass("end");
	}else{
		$(".bookPrev").removeClass("end");
	}
	
	// 마지막 서적일 경우 다음버튼을 비활성화 시킨다.
	if(actBookNo == bookDetailSize-1){
		$(".bookNext").addClass("end");
	}else{
		$(".bookNext").removeClass("end");
	}
}

// 지정한 번호의 서적을 활성화 시킨다.
function actBook(actBookNo){
	checkEnd(actBookNo);
	// 모든 서적을 비활성화 시킨 후 지정한 번호의 서적만 활성화 시킨다.
	$(".bookDetail").removeClass("actBook").filter(":eq("+actBookNo+")").addClass("actBook");
}

$(function(){
	bookDetailSize = $(".bookDetail").size();	// 서적 수
	var actBookNo = 0;	// 초기 서적 활성화 번호
	checkEnd(actBookNo);	// 최초 페이지 로딩 시 서적의 이전/다음 버튼의 활성화여부를 지정한다.
	
	$(".bookPrev").click(function(){	// 이전 버튼 클릭 이벤트
		if(actBookNo > 0){
			actBook(--actBookNo);
		}
	});
	$(".bookNext").click(function(){	// 다음 버튼 클릭 이벤트
		if(actBookNo < bookDetailSize-1){
			actBook(++actBookNo);
		}
	});				
});			