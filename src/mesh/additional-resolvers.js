const resolvers = {
  Query: {
    async ProductByType(_, { upc, type }, { products, products2 }) {
      switch(type) {
        case 'P1':
          return await products.api.Product({ upc });
        case 'P2':
          return await products2.api.Product({ upc });
      }
    }
  }
};

module.exports = { resolvers };
