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
      users.forEach((element, index) => {
        setTimeout(async () => {
            await User.create(element)
            console.log(`${index}: creating user ${element.firstName}`)
        }, index*100)
      })
      res.ok();
  },

  async getUserCount(req, res) {
      const count = await User.count({});
      console.log(`count: ${count}`)
      return res.json(count);
  }

};

