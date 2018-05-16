/**
 * Post.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    content: { type: 'string' },
    title: { type: 'string' },

     // associations
     user: { model: 'User' },

  },

};

