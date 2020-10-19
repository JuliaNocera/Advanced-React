const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db')
  /*
    Forwarding to the db is a great way to build out the initial functionality
    And then you can come back for the authentication and any more complex interactions in the resolvers
    This is an alternative to the below implementation
  */
  // async items(parent, args, context, info) {
  //   console.log('items fetchtime')
  //   const items = await context.db.query.items()
  //   return items
  // }
};

module.exports = Query;
