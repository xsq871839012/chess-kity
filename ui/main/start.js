/**
 *	开始
 */

CHESS.registerUI('start', function(chess) {
	var main =  chess.getUI('main');
	var $satrtBtn = $('<button>').addClass('main-start main').appendTo(main.$satrtBtnPanel);
	var $optionsBtnPanel = $("<div>").attr('id','options-panel').appendTo($('#chess'));
	var $undoBtn = $('<button>').addClass('undo').appendTo($optionsBtnPanel).hide();
	var $drawBtn = $('<button>').addClass('draw').appendTo($optionsBtnPanel).hide();
	var $failBtn = $('<button>').addClass('fail').appendTo($optionsBtnPanel).hide();
	$satrtBtn.on('click',function(){
		main.$satrtBtnPanel.slideUp();
    	chess.startGame(false,'normal','j0')//.renderList();
    	$undoBtn.show();
	});
	$undoBtn.on('click',function(){
		chess.regret();
	})
	chess.on('gamesatus',function(){
		main.$satrtBtnPanel.slideUp();
	})
	chess.on('gameOver',function(e){
		swal({
			text:'游戏结束',
			title:(e.lose=='j0'?'黑':'红')+'方胜',
			showCancelButton: true,   
            closeOnConfirm: true,
            imageUrl: "static/img/thumbs-up.jpg",
            confirmButtonText:'重新开始',
            cancelButtonText:'查看棋谱'
		},function(v){
			if(v){
				$satrtBtn.trigger('click');
			}else{

			}

		});

	})

})