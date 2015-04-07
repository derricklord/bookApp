module.exports = 
{
  requireAuthentication: function(req, res, next){
    if(req.headers.token === 'Secret'){
      //console.log(req.headers.token);
      next();
    }else{
      next();
      /*
      if(!req.headers.token){
        res.send({'Message': 'Must specify a token'});
      }else{
        res.send({'Message': 'Wrong Token: Must be Authenticated'});
      } 
      */
    }
  }
}