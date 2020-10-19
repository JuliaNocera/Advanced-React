
const Query = {
  async items(parent, args, context, info) {
    console.log('items fetchtime')
    const items = await context.db.query.items()
    return items
  }
};

module.exports = Query;
