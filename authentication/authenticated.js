module.exports = function isAuthenticated(request,response,next){
        if(request.isAuthenticated()){
            next();
        }else{
          response.redirect('/');
        }
}
