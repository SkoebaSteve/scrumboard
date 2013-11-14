$(document).ready(function(){

	if (localStorage.getItem("tasks") !== null) {
		updateTables();
	}
	var tasks = [];
	var taskList = [];

	function updateTables(){
		$("#todo>tbody>tr").remove();
		taskList = JSON.parse(localStorage["tasks"]);
		console.log(taskList);
		console.log(taskList.length);
		$.each(taskList, function(key, value){
			if(value.done=="yes"){
				$("#todo").append("<tr><td>"+value.name+"</td><td>"+value.date+"</td><td><input class=\"check\" type=\"checkbox\" checked/></td></tr>");
			}
			else{
				$("#todo").append("<tr><td>"+value.name+"</td><td>"+value.date+"</td><td><input class=\"check\" type=\"checkbox\"/></td></tr>");
			}
			//console.log(value.date);
		});
	}	 

	$('button[name="save"]').click(function(){
		var name = $('input[name="taskname"]').val();
		var date = $('input[name="date"]').val();
		var task = {name:name,date:date,done:"no"};
		tasks.push(task);
		localStorage["tasks"] = JSON.stringify(tasks);
		updateTables();
		var loading_dialog = $('#myModal');
		loading_dialog.modal('hide');
	});

	$('.check').click(function(){
		
	});
});

