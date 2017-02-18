//routes can be passed as object or array of objects..

module.exports = [

	{
		method : 'GET',
		path : '/first',
		handler : function(request, reply){
			reply('first api...');
		}
	},
	{
		method : 'GET',
		path : '/second',
		handler : function(request, reply) {
			reply('second api...');
		}
	},
	{
		method : 'GET',
		path : '/json',
		handler : function(request, reply) {
			var data = {
				name : 'Prasad7',
				city : 'Hyderabad',
				occupation : 'employee',
				state : 'Andhra Pradesh'
			};
			reply(data);
		}
	}

];
