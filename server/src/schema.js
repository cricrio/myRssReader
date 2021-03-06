const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  type Query {
    cafes: [Cafe]
    cafe(cafeId: ID!): Cafe
  }

  input CafeInput {
    name: String
    type: CafeTypeEnum
    description: String
    pic: String
  }

  type Mutation {
    createCafe(cafe: CafeInput): Cafe
  }
  
  enum CafeTypeEnum {
    LOCAL
    ONLINE
  }

  type Cafe {
    id: ID!
    name: String
    type: CafeTypeEnum
    pic: String
    description: String
    city: String
    membersCount: Int
    meetupsCount: Int
    members: [User]
    meetups: MeetupQueryResponse
  }

  type Meetup {
    id: ID!
    name: String
    localisation: String
    date: DateTime
    participants: [User]
    participantsCount: Int
  }

  type MeetupQueryResponse {
    next: Meetup
    past: [Meetup]
    future: [Meetup]
  }

  type UserIdentity {
    mini: String
    full: String
    surname: String
    firstname: String
  }

  type User {
    id: ID!
    email: String
    pic: String
    identity: UserIdentity
  }
`;

module.exports = typeDefs;
