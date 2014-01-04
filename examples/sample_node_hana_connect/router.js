var url = require('url');

exports.getRoutes = function(req,res){
	req.requrl = url.parse(req.url,true);
	var path = req.requrl.pathname;
	if(path=='/')
		require('./controllers/mainController').get(req,res);
}