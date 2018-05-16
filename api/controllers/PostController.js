/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    async create(req, res) {
        let messageTosave = {...req.body, user: '5afc31f0094cd82684881f1f'};
        let message = await Post.create(messageTosave).fetch();
        console.log(message);
        return res.json(message);
    }

};

