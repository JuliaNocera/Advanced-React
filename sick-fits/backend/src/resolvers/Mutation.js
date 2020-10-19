const Mutations = {
  async createItem(parent, args, context, info) {
    // TODO: check if they are logged in 

    // To figure out what methods you have available in Prisma, look at the generated file 
    // The second arg "info" passes the query to the mutation 
    // so it knows what to respond with after it creates the item 
    const item = await context.db.mutation.createItem({
      data: {
        ...args
      }
    }, info)

    return item
  }
  // createDog(parent, args, context, info) {
  //   console.log(context)
  //   global.dogs = global.dogs || [];
  //   // write to db 
  //   const newDog = { name: args.name }
  //   global.dogs.push(newDog)
  //   return newDog
  // }
};

module.exports = Mutations;
