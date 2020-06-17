const hapi = require('hapi');
const routes = require('./routes');

const server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: '8080'
});

/*server.route({ test-1
	method : 'GET',
	path : '/test',
	handler : function(request, reply) {
		reply('hello world !');
	}
});*/

server.route(routes);

server.start(function(){
	console.log('hapi Server Started...');
});