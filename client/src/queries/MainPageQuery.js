import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export const MainPageQuery = ({ children }) => (
  <Query query={query}>{children}</Query>
);

const query = gql`
  query GetCafes {
    cafe {
      id
      name
      description
      pic
      cafe_members_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;