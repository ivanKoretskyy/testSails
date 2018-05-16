/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//const userService = require('../services/userService');

module.exports = {
  async sead(req, res){
      console.log('in sead');
      let users = UserService.getDefaultUsers(); // await sails.helpers.user.getDefaultUsers();
      res.send(users);
  }

};

