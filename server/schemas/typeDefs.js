const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        bookCount: String
        savedBooks: [Book]!
    }

    type Book {
        bookId: ID,
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input NewBookInput {
        bookId: ID!, 
        authors: [String]!, 
        description: String!, 
        title: String!, 
        image: String, 
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: NewBookInput!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;