/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onDeleteRelationLink = /* GraphQL */ `subscription OnDeleteRelationLink($userID: ID) {
  onDeleteRelationLink(userID: $userID) {
    id
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    relationID
    relation {
      id
      type
      mode
      name
      description
      avatar
      reference
      members
      admins
      updatedAt
      status
      search
      createdAt
      __typename
    }
    type
    notify
    updatedAt
    search
    percentage
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRelationLinkSubscriptionVariables,
  APITypes.OnDeleteRelationLinkSubscription
>;
export const onCreateRelationLink = /* GraphQL */ `subscription OnCreateRelationLink($userID: ID) {
  onCreateRelationLink(userID: $userID) {
    id
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    relationID
    relation {
      id
      type
      mode
      name
      description
      avatar
      reference
      members
      admins
      updatedAt
      status
      search
      createdAt
      __typename
    }
    type
    notify
    updatedAt
    search
    percentage
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRelationLinkSubscriptionVariables,
  APITypes.OnCreateRelationLinkSubscription
>;
export const onUpdateRelationLink = /* GraphQL */ `subscription OnUpdateRelationLink($userID: ID) {
  onUpdateRelationLink(userID: $userID) {
    id
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    relationID
    relation {
      id
      type
      mode
      name
      description
      avatar
      reference
      members
      admins
      updatedAt
      status
      search
      createdAt
      __typename
    }
    type
    notify
    updatedAt
    search
    percentage
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRelationLinkSubscriptionVariables,
  APITypes.OnUpdateRelationLinkSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($relationID: ID) {
  onCreateMessage(relationID: $relationID) {
    id
    relationID
    relation {
      id
      type
      mode
      name
      description
      avatar
      reference
      members
      admins
      updatedAt
      status
      search
      createdAt
      __typename
    }
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    type
    content
    search
    identityId
    createdAt
    status
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onCreateOrderAdm = /* GraphQL */ `subscription OnCreateOrderAdm {
  onCreateOrderAdm {
    id
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    profile {
      userID
      doc
      docType
      docProfessionType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      notes
      urlUserName
      urlEnable
      allowViewEmail
      allowViewPhone
      allowCookiesPreference
      allowCookiesStatistic
      pix
      zipCodeCoverage
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      regionsConfig
      regionSunday
      regionMonday
      regionTuesday
      regionWednesday
      regionThursday
      regionFriday
      regionSaturday
      customerPagarmeID
      companyID
      companyHomeCare
      companyCampaign
      companyAdmin
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    items {
      nextToken
      __typename
    }
    couponID
    couponName
    couponDiscount
    deliveryPrice
    total
    rating
    ratingNotes
    orderPagarmeID
    addressReference
    addressStreet
    addressNumber
    addressComplement
    addressZipcode
    addressNeighborhood
    addressCity
    addressState
    addressCountry
    notes
    campaignID
    campaignName
    campaignOrientation
    companyID
    company {
      id
      cnpj
      name
      openingHours
      phones
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      search
      enableRetail
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      status
      createdAt
      updatedAt
      __typename
    }
    companyName
    companyPhone
    companyOpeningHours
    qrCodePix
    qrCodePixUrl
    payMethod
    installments
    homeCareOrRetail
    vaccinationCardItems {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrderAdmSubscriptionVariables,
  APITypes.OnCreateOrderAdmSubscription
>;
export const onCreateLog = /* GraphQL */ `subscription OnCreateLog {
  onCreateLog {
    id
    userID
    tag
    source
    notes
    message
    page
    manufacturer
    model
    osName
    osVersion
    platform
    uuid
    ip
    city
    region
    country
    provider
    lat
    lng
    createdAt
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLogSubscriptionVariables,
  APITypes.OnCreateLogSubscription
>;
export const onCreateNotify = /* GraphQL */ `subscription OnCreateNotify($userID: ID) {
  onCreateNotify(userID: $userID) {
    id
    userID
    createdAt
    content
    link
    viewed
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNotifySubscriptionVariables,
  APITypes.OnCreateNotifySubscription
>;
export const onUpdateClient = /* GraphQL */ `subscription OnUpdateClient($clientID: ID) {
  onUpdateClient(clientID: $clientID) {
    id
    name
    notes
    status
    search
    totalUnits
    unitsServed
    unitsExpected
    firstOSDate
    lastOSDate
    scheduleRouted
    scheduleConfirmed
    schedulePending
    totalEligibles
    totalVaccinations
    PercentAdherence
    code
    units {
      nextToken
      __typename
    }
    eligibles {
      nextToken
      __typename
    }
    oss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClientSubscriptionVariables,
  APITypes.OnUpdateClientSubscription
>;
export const onCreateCart = /* GraphQL */ `subscription OnCreateCart(
  $filter: ModelSubscriptionCartFilterInput
  $userID: String
) {
  onCreateCart(filter: $filter, userID: $userID) {
    id
    userID
    productID
    product {
      id
      alias
      status
      category
      subCategory
      code
      name
      type
      description
      manufacturer
      contentTitle
      contentTitle2
      contentTitle3
      content
      content2
      content3
      tags
      changeFreq
      priority
      price_of
      price
      qty
      stockControl
      applicationTime
      applicationTimeChild
      photo1
      photo2
      photo3
      photo4
      photo5
      thumbnail
      thumbnailSrc
      thumbnailCropper
      titlePadX
      titlePadY
      contentPadX
      contentPadY
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      hideInSearch
      updatedAt
      __typename
    }
    options {
      nextToken
      __typename
    }
    qty
    changeName
    changeDescription
    changeQtyBlend
    changePriceAdjustment
    blendID
    campaignToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCartSubscriptionVariables,
  APITypes.OnCreateCartSubscription
>;
export const onUpdateCart = /* GraphQL */ `subscription OnUpdateCart(
  $filter: ModelSubscriptionCartFilterInput
  $userID: String
) {
  onUpdateCart(filter: $filter, userID: $userID) {
    id
    userID
    productID
    product {
      id
      alias
      status
      category
      subCategory
      code
      name
      type
      description
      manufacturer
      contentTitle
      contentTitle2
      contentTitle3
      content
      content2
      content3
      tags
      changeFreq
      priority
      price_of
      price
      qty
      stockControl
      applicationTime
      applicationTimeChild
      photo1
      photo2
      photo3
      photo4
      photo5
      thumbnail
      thumbnailSrc
      thumbnailCropper
      titlePadX
      titlePadY
      contentPadX
      contentPadY
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      hideInSearch
      updatedAt
      __typename
    }
    options {
      nextToken
      __typename
    }
    qty
    changeName
    changeDescription
    changeQtyBlend
    changePriceAdjustment
    blendID
    campaignToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCartSubscriptionVariables,
  APITypes.OnUpdateCartSubscription
>;
export const onDeleteCart = /* GraphQL */ `subscription OnDeleteCart(
  $filter: ModelSubscriptionCartFilterInput
  $userID: String
) {
  onDeleteCart(filter: $filter, userID: $userID) {
    id
    userID
    productID
    product {
      id
      alias
      status
      category
      subCategory
      code
      name
      type
      description
      manufacturer
      contentTitle
      contentTitle2
      contentTitle3
      content
      content2
      content3
      tags
      changeFreq
      priority
      price_of
      price
      qty
      stockControl
      applicationTime
      applicationTimeChild
      photo1
      photo2
      photo3
      photo4
      photo5
      thumbnail
      thumbnailSrc
      thumbnailCropper
      titlePadX
      titlePadY
      contentPadX
      contentPadY
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      hideInSearch
      updatedAt
      __typename
    }
    options {
      nextToken
      __typename
    }
    qty
    changeName
    changeDescription
    changeQtyBlend
    changePriceAdjustment
    blendID
    campaignToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCartSubscriptionVariables,
  APITypes.OnDeleteCartSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $userID: String
) {
  onCreateOrder(filter: $filter, userID: $userID) {
    id
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    profile {
      userID
      doc
      docType
      docProfessionType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      notes
      urlUserName
      urlEnable
      allowViewEmail
      allowViewPhone
      allowCookiesPreference
      allowCookiesStatistic
      pix
      zipCodeCoverage
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      regionsConfig
      regionSunday
      regionMonday
      regionTuesday
      regionWednesday
      regionThursday
      regionFriday
      regionSaturday
      customerPagarmeID
      companyID
      companyHomeCare
      companyCampaign
      companyAdmin
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    items {
      nextToken
      __typename
    }
    couponID
    couponName
    couponDiscount
    deliveryPrice
    total
    rating
    ratingNotes
    orderPagarmeID
    addressReference
    addressStreet
    addressNumber
    addressComplement
    addressZipcode
    addressNeighborhood
    addressCity
    addressState
    addressCountry
    notes
    campaignID
    campaignName
    campaignOrientation
    companyID
    company {
      id
      cnpj
      name
      openingHours
      phones
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      search
      enableRetail
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      status
      createdAt
      updatedAt
      __typename
    }
    companyName
    companyPhone
    companyOpeningHours
    qrCodePix
    qrCodePixUrl
    payMethod
    installments
    homeCareOrRetail
    vaccinationCardItems {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $userID: String
) {
  onUpdateOrder(filter: $filter, userID: $userID) {
    id
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    profile {
      userID
      doc
      docType
      docProfessionType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      notes
      urlUserName
      urlEnable
      allowViewEmail
      allowViewPhone
      allowCookiesPreference
      allowCookiesStatistic
      pix
      zipCodeCoverage
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      regionsConfig
      regionSunday
      regionMonday
      regionTuesday
      regionWednesday
      regionThursday
      regionFriday
      regionSaturday
      customerPagarmeID
      companyID
      companyHomeCare
      companyCampaign
      companyAdmin
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    items {
      nextToken
      __typename
    }
    couponID
    couponName
    couponDiscount
    deliveryPrice
    total
    rating
    ratingNotes
    orderPagarmeID
    addressReference
    addressStreet
    addressNumber
    addressComplement
    addressZipcode
    addressNeighborhood
    addressCity
    addressState
    addressCountry
    notes
    campaignID
    campaignName
    campaignOrientation
    companyID
    company {
      id
      cnpj
      name
      openingHours
      phones
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      search
      enableRetail
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      status
      createdAt
      updatedAt
      __typename
    }
    companyName
    companyPhone
    companyOpeningHours
    qrCodePix
    qrCodePixUrl
    payMethod
    installments
    homeCareOrRetail
    vaccinationCardItems {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $userID: String
) {
  onDeleteOrder(filter: $filter, userID: $userID) {
    id
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    profile {
      userID
      doc
      docType
      docProfessionType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      notes
      urlUserName
      urlEnable
      allowViewEmail
      allowViewPhone
      allowCookiesPreference
      allowCookiesStatistic
      pix
      zipCodeCoverage
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      regionsConfig
      regionSunday
      regionMonday
      regionTuesday
      regionWednesday
      regionThursday
      regionFriday
      regionSaturday
      customerPagarmeID
      companyID
      companyHomeCare
      companyCampaign
      companyAdmin
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    items {
      nextToken
      __typename
    }
    couponID
    couponName
    couponDiscount
    deliveryPrice
    total
    rating
    ratingNotes
    orderPagarmeID
    addressReference
    addressStreet
    addressNumber
    addressComplement
    addressZipcode
    addressNeighborhood
    addressCity
    addressState
    addressCountry
    notes
    campaignID
    campaignName
    campaignOrientation
    companyID
    company {
      id
      cnpj
      name
      openingHours
      phones
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      search
      enableRetail
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      status
      createdAt
      updatedAt
      __typename
    }
    companyName
    companyPhone
    companyOpeningHours
    qrCodePix
    qrCodePixUrl
    payMethod
    installments
    homeCareOrRetail
    vaccinationCardItems {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
