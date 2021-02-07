const resolvers = {
  Query: {
    async ProductByType(_, { upc, type }, { products, products2 }) {
      switch(type) {
        case 'P1':
          return await products.api.Product({ upc });
        case 'P2':
          return await products2.api.Product({ upc });
      }
    },
    async Products(_, { upc }, { products, products2 }) {
      return [
        await products.api.Product({ upc }),
        await products2.api.Product({ upc })
      ];
    },
    Services(root, args, context, info) {
      return [
          {name: "P1", method: "PULL", timeout: 1500},
          {name: "P2", method: "PULL", timeout: 1500}
        ];
    }
  }
};

module.exports = { resolvers };
