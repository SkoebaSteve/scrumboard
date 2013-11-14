$(document).ready(function(){

	$(document).on('click', '.move-item', function(){
		var task = $(this).prev().html();
		var rowID = $(this).closest('div').attr('id');
		rowID++;
		var currentListItem = $(this).closest('li');
		if(rowID==4){
			bootbox.alert("Your team members have been informed about the task you completed. Just sit back, drink some coffee and wait for their review!", function() {
  				currentListItem.addClass('btn-info');
  				var val = $('#messageBubble').html();
  				val++;
  				$('#messageBubble').html(val);
			});
		}
		else{
			$('#'+rowID).children('ul').append($('<li class="list-group-item"><span class="task">'+task+'</span><span class="glyphicon glyphicon-chevron-right pull-right move-item"></span></li>'));	
			$(currentListItem).remove();
		}
		
	});

	var burndownData = {
		labels : ["10-nov","11-nov","12-nov","13-nov","14-nov","15-nov"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [100,80,60,40,20,0]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : [100,85,70,45,15,0]
			}
		]
	}

	var teamEffortData = [
		{
			value: 30,
			color:"#F38630"
		},
		{
			value : 50,
			color : "#E0E4CC"
		},
		{
			value : 100,
			color : "#69D2E7"
		}			
	]

    var burnDown = new Chart($("#burnDown").get(0).getContext("2d")).Line(burndownData, function(){
    	bezierCurve : false
    	});
    var teamEffort = new Chart($("#teamEffort").get(0).getContext("2d")).Pie(teamEffortData, function(){

    	});
    
});

