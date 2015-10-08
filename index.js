module.exports = function(brick){
  var pkg = require('./package.json');

  brick.commander
    .command('dev')
    .action(function(){
      brick.log.verbose('do action');
    })
}