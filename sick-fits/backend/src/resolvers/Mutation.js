const Mutations = {
  createDog(parent, args, context, info) {
    console.log(context)
    global.dogs = global.dogs || [];
    // write to db 
    const newDog = { name: args.name }
    global.dogs.push(newDog)
    return newDog
  }
};

module.exports = Mutations;
