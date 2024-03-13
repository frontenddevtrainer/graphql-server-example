const typeDefs = `#graphql

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type Geo {
    lat: String
    lng: String
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type User {
    id: Int
    name: String
    username: String
    email: String
    phone: String
    website: String
    company: Company
    address: Address
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book],
    users: [User]
  }

`;

export default typeDefs;
