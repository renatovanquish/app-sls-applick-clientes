import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateClientInput,
  UpdateClientInput,
  DeleteClientInput,
  ListClientsQueryVariables,
  ListClientsByStatusNameQueryVariables,
  ListUnitsByClientQueryVariables,
  ListClientsByCodeQueryVariables,
} from 'API'

export const useClient = () => {
  const createClient = async (input: CreateClientInput) => {
    const {
      data: { createClient },
    } = (await API.graphql({
      query: mutations.createClient,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClient
  }

  const updateClient = async (input: UpdateClientInput) => {
    const {
      data: { updateClient },
    } = (await API.graphql({
      query: mutations.updateClient,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateClient
  }

  const deleteClient = async (input: DeleteClientInput) => {
    try {
      await API.graphql({
        query: mutations.deleteClient,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listClients = async (variables: ListClientsQueryVariables) => {
    const {
      data: {
        listClients: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listClients,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listClientsByStatusName = async (
    variables: ListClientsByStatusNameQueryVariables
  ) => {
    const {
      data: {
        listClientsByStatusName: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listClientsByStatusName,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listClientsByCode = async (
    variables: ListClientsByCodeQueryVariables
  ) => {
    const {
      data: {
        listClientsByCode: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listClientsByCode,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createClient,
    updateClient,
    deleteClient,
    listClients,
    listClientsByStatusName,
    listClientsByCode,
  }
}
