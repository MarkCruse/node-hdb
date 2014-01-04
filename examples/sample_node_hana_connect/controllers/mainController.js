exports.get = function(req,res){
	var hdb = require('hdb');
	var client = hdb.createClient({
		host : 'ld9408.wdf.sap.corp',
		port : 30015,
		user : '<I-no.>',
		password : '*****'
	});
	var WBSArray = [];
	res.writeHead(200,{'Content-Type':'text/html'});
	client.connect({
		user : '<I-no.>',
		password : '*****'
		},function(err){
		if (err) {
    		console.log('Connect error', err);
  		}
  		client.exec('SELECT TOP 10 "POST1" FROM "SAP_P4Q_ECC"."PRPS"',function(err,rows){
  			client.end();
  			if (err) {
      			console.log('Execute error:', err);
    		}
    		console.log('Results:', rows);
    		res.write('<p>' + rows[0].POST1 + '</p>');
    		res.end();
/*    		var names = JSON.stringify(rows);
    		names = JSON.parse(names);
    		for(var i=0;i<names.Results.length;i++){
    			WBSArray.push(names.Results[i].POST1);
    		}*/
  		}); 
	});
/*	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<p>Hello Heroku</p>');
    res.end();*/
}