const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    Product(upc: String): Product
  }

  type Product {
    upc: String!
    name: String
    price: Int
    weight: Int
  }
`;

const resolvers = {
  Query: {
    Product(root, args, context) {
      return context.products.find(obj => { return obj.upc === args.upc });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    products: [
      {
        upc: "1",
        name: "Table",
        price: 899,
        weight: 100
      },
      {
        upc: "2",
        name: "Couch",
        price: 1299,
        weight: 1000
      },
      {
        upc: "3",
        name: "Chair",
        price: 54,
        weight: 50
      }
    ]
  }
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
