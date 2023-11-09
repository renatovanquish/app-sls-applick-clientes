/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email?: string | null,
  phone?: string | null,
  status?: UserStatus | null,
  active?: boolean | null,
  avatar?: string | null,
  search?: string | null,
  createdAt?: string | null,
  profile?: Profile | null,
  groups?: ModelGroupUserConnection | null,
  logs?: ModelLogConnection | null,
  addresses?: ModelAddressConnection | null,
  payMethods?: ModelPayMethodConnection | null,
  relationsLink?: ModelRelationLinkConnection | null,
  carts?: ModelCartConnection | null,
  ordersByCreatedAt?: ModelOrderConnection | null,
  ordersByStatusCreatedAt?: ModelOrderConnection | null,
  updatedAt: string,
};

export enum UserStatus {
  DEFAULT = "DEFAULT",
  PREREGISTER = "PREREGISTER",
  SUSPENDED = "SUSPENDED",
  ACTIVE = "ACTIVE",
}


export type Profile = {
  __typename: "Profile",
  userID: string,
  user?: User | null,
  doc?: string | null,
  docType?: DocTypes | null,
  docProfessionType?: string | null,
  docProfession?: string | null,
  profession?: string | null,
  specialties?: string | null,
  subSpecialties?: string | null,
  bio?: string | null,
  gender?: GenderOptions | null,
  birth?: string | null,
  notes?: string | null,
  urlUserName?: string | null,
  urlEnable?: boolean | null,
  allowViewEmail?: boolean | null,
  allowViewPhone?: boolean | null,
  allowCookiesPreference?: boolean | null,
  allowCookiesStatistic?: boolean | null,
  pix?: string | null,
  zipCodeCoverage?: Array< string | null > | null,
  schedulesSunday?: Array< string | null > | null,
  schedulesMonday?: Array< string | null > | null,
  schedulesTuesday?: Array< string | null > | null,
  schedulesWednesday?: Array< string | null > | null,
  schedulesThursday?: Array< string | null > | null,
  schedulesFriday?: Array< string | null > | null,
  schedulesSaturday?: Array< string | null > | null,
  regionsConfig?: string | null,
  regionSunday?: string | null,
  regionMonday?: string | null,
  regionTuesday?: string | null,
  regionWednesday?: string | null,
  regionThursday?: string | null,
  regionFriday?: string | null,
  regionSaturday?: string | null,
  customerPagarmeID?: string | null,
  companyID?: string | null,
  company?: Company | null,
  companyHomeCare?: boolean | null,
  companyCampaign?: boolean | null,
  companyAdmin?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export enum DocTypes {
  CPF = "CPF",
  CNPJ = "CNPJ",
  PASSPORT = "PASSPORT",
}


export enum GenderOptions {
  M = "M",
  F = "F",
  UNKNOWN = "UNKNOWN",
}


export type Company = {
  __typename: "Company",
  id: string,
  cnpj: string,
  name: string,
  openingHours?: string | null,
  phones?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  search?: string | null,
  enableRetail?: string | null,
  schedulesSunday?: Array< string | null > | null,
  schedulesMonday?: Array< string | null > | null,
  schedulesTuesday?: Array< string | null > | null,
  schedulesWednesday?: Array< string | null > | null,
  schedulesThursday?: Array< string | null > | null,
  schedulesFriday?: Array< string | null > | null,
  schedulesSaturday?: Array< string | null > | null,
  status?: CompanyStatus | null,
  createdAt: string,
  updatedAt: string,
};

export enum CompanyStatus {
  ON = "ON",
  OFF = "OFF",
}


export type ModelGroupUserConnection = {
  __typename: "ModelGroupUserConnection",
  items:  Array<GroupUser | null >,
  nextToken?: string | null,
};

export type GroupUser = {
  __typename: "GroupUser",
  id: string,
  group: string,
  userID: string,
  user?: User | null,
  profileID: string,
  profile?: Profile | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type ModelLogConnection = {
  __typename: "ModelLogConnection",
  items:  Array<Log | null >,
  nextToken?: string | null,
};

export type Log = {
  __typename: "Log",
  id: string,
  userID: string,
  tag: string,
  source: LogSource,
  notes?: string | null,
  message?: string | null,
  page?: string | null,
  manufacturer?: string | null,
  model?: string | null,
  osName?: string | null,
  osVersion?: string | null,
  platform?: string | null,
  uuid?: string | null,
  ip?: string | null,
  city?: string | null,
  region?: string | null,
  country?: string | null,
  provider?: string | null,
  lat?: number | null,
  lng?: number | null,
  createdAt?: string | null,
  user?: User | null,
  updatedAt: string,
};

export enum LogSource {
  APP = "APP",
}


export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  userID: string,
  name?: string | null,
  reference?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  addressPagarmeID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPayMethodConnection = {
  __typename: "ModelPayMethodConnection",
  items:  Array<PayMethod | null >,
  nextToken?: string | null,
};

export type PayMethod = {
  __typename: "PayMethod",
  id: string,
  userID: string,
  method: PaymentMethods,
  number?: string | null,
  holderName?: string | null,
  holderDocument?: string | null,
  expMonth?: number | null,
  expYear?: number | null,
  cvv?: string | null,
  brand?: string | null,
  label?: string | null,
  cardPagarmeID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum PaymentMethods {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
  PIX = "PIX",
  GATEWAY = "GATEWAY",
  CASH = "CASH",
  ONDELIVERY = "ONDELIVERY",
  VACINASNET = "VACINASNET",
}


export type ModelRelationLinkConnection = {
  __typename: "ModelRelationLinkConnection",
  items:  Array<RelationLink | null >,
  nextToken?: string | null,
};

export type RelationLink = {
  __typename: "RelationLink",
  id: string,
  userID: string,
  user?: User | null,
  relationID: string,
  relation?: Relation | null,
  type: string,
  notify: number,
  updatedAt?: string | null,
  search?: string | null,
  percentage?: number | null,
  createdAt: string,
};

export type Relation = {
  __typename: "Relation",
  id: string,
  type: RelationTypes,
  mode: RelationModes,
  name?: string | null,
  description?: string | null,
  avatar?: string | null,
  reference?: string | null,
  members: Array< string >,
  admins: Array< string >,
  updatedAt?: string | null,
  status: RelationStatus,
  search?: string | null,
  relationsLink?: ModelRelationLinkConnection | null,
  messages?: ModelMessageConnection | null,
  createdAt: string,
};

export enum RelationTypes {
  CONTACT = "CONTACT",
  DOCUMENT = "DOCUMENT",
}


export enum RelationModes {
  PRIVATE = "PRIVATE",
  GROUP = "GROUP",
}


export enum RelationStatus {
  STANDBY = "STANDBY",
  ABORTED = "ABORTED",
  STARTED = "STARTED",
  FINALIZED = "FINALIZED",
  INPROGRESS = "INPROGRESS",
  INANALYZE = "INANALYZE",
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}


export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  relationID?: string | null,
  relation?: Relation | null,
  userID: string,
  user?: User | null,
  type: MessagesTypes,
  content?: string | null,
  search?: string | null,
  identityId?: string | null,
  createdAt?: string | null,
  status?: string | null,
  updatedAt: string,
};

export enum MessagesTypes {
  ALERT = "ALERT",
  TEXT = "TEXT",
  AUDIO = "AUDIO",
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  LOCATION = "LOCATION",
}


export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
};

export type Cart = {
  __typename: "Cart",
  id: string,
  userID: string,
  productID: string,
  product?: Product | null,
  options?: ModelCartOptionConnection | null,
  qty?: number | null,
  changeName?: string | null,
  changeDescription?: string | null,
  changeQtyBlend?: number | null,
  changePriceAdjustment?: string | null,
  blendID?: string | null,
  campaignToken?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Product = {
  __typename: "Product",
  id: string,
  alias: string,
  status: PageStatus,
  category: string,
  categoryProps?: Category | null,
  subCategory: string,
  subCategoryProps?: Category | null,
  code?: string | null,
  name: string,
  type?: string | null,
  description?: string | null,
  manufacturer?: string | null,
  contentTitle?: string | null,
  contentTitle2?: string | null,
  contentTitle3?: string | null,
  content?: string | null,
  content2?: string | null,
  content3?: string | null,
  tags?: Array< string | null > | null,
  changeFreq?: PageChangeFreq | null,
  priority?: PagePriority | null,
  price_of?: number | null,
  price: number,
  qty?: number | null,
  stockControl?: boolean | null,
  applicationTime?: number | null,
  applicationTimeChild?: number | null,
  photo1?: string | null,
  photo2?: string | null,
  photo3?: string | null,
  photo4?: string | null,
  photo5?: string | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  titlePadX?: string | null,
  titlePadY?: string | null,
  contentPadX?: string | null,
  contentPadY?: string | null,
  optionTitle?: PageOptionTitle | null,
  sideColumn?: PageSideColumn | null,
  sideColumnPadX?: string | null,
  sideColumnPadY?: string | null,
  sideColumnContent?: string | null,
  optionSideColumn?: PageOptionSideColumn | null,
  hideFooter?: boolean | null,
  hideInMenu?: boolean | null,
  createdAt?: string | null,
  search?: string | null,
  hideInSearch?: boolean | null,
  options?: ModelOptionConnection | null,
  kitItems?: ModelKitItemConnection | null,
  updatedAt: string,
};

export enum PageStatus {
  ON = "ON",
  OFF = "OFF",
}


export type Category = {
  __typename: "Category",
  id: string,
  alias: string,
  order: number,
  title?: string | null,
  description?: string | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  hide?: boolean | null,
  isSub?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export enum PageChangeFreq {
  NEVER = "NEVER",
  YEARLY = "YEARLY",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY",
  DAILY = "DAILY",
  HOURLY = "HOURLY",
  ALWAYS = "ALWAYS",
}


export enum PagePriority {
  P0 = "P0",
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
  P4 = "P4",
  P5 = "P5",
  P6 = "P6",
  P7 = "P7",
  P8 = "P8",
  P9 = "P9",
  P10 = "P10",
}


export enum PageOptionTitle {
  L = "L",
  R = "R",
  C = "C",
  N = "N",
}


export enum PageSideColumn {
  L = "L",
  R = "R",
  N = "N",
}


export enum PageOptionSideColumn {
  CART_CONTENT_TAGS = "CART_CONTENT_TAGS",
  CART_CONTENT = "CART_CONTENT",
  CONTENT_CART = "CONTENT_CART",
  MENU_CONTENT_TAGS = "MENU_CONTENT_TAGS",
  MENU_CONTENT = "MENU_CONTENT",
  TAGS_CONTENT = "TAGS_CONTENT",
  CONTENT_MENU_TAGS = "CONTENT_MENU_TAGS",
  CONTENT_MENU = "CONTENT_MENU",
  CONTENT_TAGS = "CONTENT_TAGS",
  CONTENT_BACK = "CONTENT_BACK",
  BACK_CONTENT = "BACK_CONTENT",
}


export type ModelOptionConnection = {
  __typename: "ModelOptionConnection",
  items:  Array<Option | null >,
  nextToken?: string | null,
};

export type Option = {
  __typename: "Option",
  id: string,
  productID: string,
  name?: string | null,
  price?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelKitItemConnection = {
  __typename: "ModelKitItemConnection",
  items:  Array<KitItem | null >,
  nextToken?: string | null,
};

export type KitItem = {
  __typename: "KitItem",
  id: string,
  productID: string,
  kitItemProductID: string,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCartOptionConnection = {
  __typename: "ModelCartOptionConnection",
  items:  Array<CartOption | null >,
  nextToken?: string | null,
};

export type CartOption = {
  __typename: "CartOption",
  id: string,
  cartID: string,
  optionID: string,
  option?: Option | null,
  createdAt: string,
  updatedAt: string,
  userID?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  userID: string,
  user?: User | null,
  profile?: Profile | null,
  status: OrderStatus,
  createdAt?: string | null,
  items?: ModelOrderItemConnection | null,
  couponID?: string | null,
  couponName?: string | null,
  couponDiscount?: number | null,
  deliveryPrice?: number | null,
  total?: number | null,
  rating?: number | null,
  ratingNotes?: string | null,
  orderPagarmeID?: string | null,
  addressReference?: string | null,
  addressStreet?: string | null,
  addressNumber?: string | null,
  addressComplement?: string | null,
  addressZipcode?: string | null,
  addressNeighborhood?: string | null,
  addressCity?: string | null,
  addressState?: string | null,
  addressCountry?: string | null,
  notes?: string | null,
  campaignID?: string | null,
  campaignName?: string | null,
  campaignOrientation?: string | null,
  companyID?: string | null,
  company?: Company | null,
  companyName?: string | null,
  companyPhone?: string | null,
  companyOpeningHours?: string | null,
  qrCodePix?: string | null,
  qrCodePixUrl?: string | null,
  payMethod?: PaymentMethods | null,
  installments?: number | null,
  homeCareOrRetail?: string | null,
  vaccinationCardItems?: ModelVaccinationCardItemConnection | null,
  updatedAt: string,
};

export enum OrderStatus {
  STANDBY = "STANDBY",
  CANCELED = "CANCELED",
  REJECTED = "REJECTED",
  APPROVED = "APPROVED",
  IN_PREPARATION = "IN_PREPARATION",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
}


export type ModelOrderItemConnection = {
  __typename: "ModelOrderItemConnection",
  items:  Array<OrderItem | null >,
  nextToken?: string | null,
};

export type OrderItem = {
  __typename: "OrderItem",
  id: string,
  orderID: string,
  productID: string,
  product?: Product | null,
  optionsItem?: ModelOrderItemOptionConnection | null,
  qty: number,
  code?: string | null,
  name: string,
  description?: string | null,
  price: number,
  photo1?: string | null,
  changeName?: string | null,
  changeDescription?: string | null,
  changeQtyBlend?: number | null,
  changePriceAdjustment?: string | null,
  blendID?: string | null,
  changeNameAdmin?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderItemOptionConnection = {
  __typename: "ModelOrderItemOptionConnection",
  items:  Array<OrderItemOption | null >,
  nextToken?: string | null,
};

export type OrderItemOption = {
  __typename: "OrderItemOption",
  id: string,
  orderItemID: string,
  optionID: string,
  option?: Option | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelVaccinationCardItemConnection = {
  __typename: "ModelVaccinationCardItemConnection",
  items:  Array<VaccinationCardItem | null >,
  nextToken?: string | null,
};

export type VaccinationCardItem = {
  __typename: "VaccinationCardItem",
  id: string,
  vaccinationCardID: string,
  vaccinationCard?: VaccinationCard | null,
  orderID: string,
  order?: Order | null,
  orderItemID: string,
  orderItem?: OrderItem | null,
  campaignID?: string | null,
  campaign?: Campaign | null,
  companyID?: string | null,
  company?: Company | null,
  lote?: string | null,
  profissionalID?: string | null,
  profissional?: User | null,
  profissionalName?: string | null,
  coren?: string | null,
  dueDate?: string | null,
  via?: string | null,
  applicationDate?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
  userID?: string | null,
};

export type VaccinationCard = {
  __typename: "VaccinationCard",
  id: string,
  userID: string,
  person: string,
  doc?: string | null,
  birth?: string | null,
  relationship?: string | null,
  notes?: string | null,
  avatar?: string | null,
  isOwner?: boolean | null,
  vaccinationCardItem?: ModelVaccinationCardItemConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Campaign = {
  __typename: "Campaign",
  id: string,
  name: string,
  description?: string | null,
  code: string,
  start?: string | null,
  expiration?: string | null,
  discountPercentage?: number | null,
  discountValue?: number | null,
  qtyLimit?: number | null,
  qtyUsed?: number | null,
  qtyProduct?: number | null,
  qtyProductUsed?: number | null,
  orientation?: string | null,
  orderMessage?: string | null,
  zipCodeCoverage?: Array< string | null > | null,
  search?: string | null,
  products?: ModelCampaignProductConnection | null,
  campaignUsed?: ModelCampaignUsedConnection | null,
  companies?: ModelCampaignCompanyConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCampaignProductConnection = {
  __typename: "ModelCampaignProductConnection",
  items:  Array<CampaignProduct | null >,
  nextToken?: string | null,
};

export type CampaignProduct = {
  __typename: "CampaignProduct",
  id: string,
  campaignID: string,
  productID: string,
  price?: number | null,
  limit?: number | null,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCampaignUsedConnection = {
  __typename: "ModelCampaignUsedConnection",
  items:  Array<CampaignUsed | null >,
  nextToken?: string | null,
};

export type CampaignUsed = {
  __typename: "CampaignUsed",
  id: string,
  campaignID: string,
  campaign?: Campaign | null,
  userID: string,
  user?: User | null,
  qty?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCampaignCompanyConnection = {
  __typename: "ModelCampaignCompanyConnection",
  items:  Array<CampaignCompany | null >,
  nextToken?: string | null,
};

export type CampaignCompany = {
  __typename: "CampaignCompany",
  id: string,
  campaignID: string,
  companyID: string,
  company?: Company | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelRelationFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelRelationTypesInput | null,
  mode?: ModelRelationModesInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  members?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  status?: ModelRelationStatusInput | null,
  search?: ModelStringInput | null,
  and?: Array< ModelRelationFilterInput | null > | null,
  or?: Array< ModelRelationFilterInput | null > | null,
  not?: ModelRelationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelRelationTypesInput = {
  eq?: RelationTypes | null,
  ne?: RelationTypes | null,
};

export type ModelRelationModesInput = {
  eq?: RelationModes | null,
  ne?: RelationModes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRelationStatusInput = {
  eq?: RelationStatus | null,
  ne?: RelationStatus | null,
};

export type ModelRelationConnection = {
  __typename: "ModelRelationConnection",
  items:  Array<Relation | null >,
  nextToken?: string | null,
};

export type ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyConditionInput = {
  eq?: ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyInput | null,
  le?: ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyInput | null,
  lt?: ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyInput | null,
  ge?: ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyInput | null,
  gt?: ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyInput | null,
  between?: Array< ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyInput | null,
};

export type ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyInput = {
  mode?: RelationModes | null,
  updatedAt?: string | null,
};

export type ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyConditionInput = {
  eq?: ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyInput | null,
  le?: ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyInput | null,
  lt?: ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyInput | null,
  ge?: ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyInput | null,
  gt?: ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyInput | null,
  between?: Array< ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyInput | null,
};

export type ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyInput = {
  status?: RelationStatus | null,
  updatedAt?: string | null,
};

export type ModelLogFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  tag?: ModelStringInput | null,
  source?: ModelLogSourceInput | null,
  notes?: ModelStringInput | null,
  message?: ModelStringInput | null,
  page?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  model?: ModelStringInput | null,
  osName?: ModelStringInput | null,
  osVersion?: ModelStringInput | null,
  platform?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  ip?: ModelStringInput | null,
  city?: ModelStringInput | null,
  region?: ModelStringInput | null,
  country?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelLogFilterInput | null > | null,
  or?: Array< ModelLogFilterInput | null > | null,
  not?: ModelLogFilterInput | null,
};

export type ModelLogSourceInput = {
  eq?: LogSource | null,
  ne?: LogSource | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelLogLogsByUserTagCreatedAtCompositeKeyConditionInput = {
  eq?: ModelLogLogsByUserTagCreatedAtCompositeKeyInput | null,
  le?: ModelLogLogsByUserTagCreatedAtCompositeKeyInput | null,
  lt?: ModelLogLogsByUserTagCreatedAtCompositeKeyInput | null,
  ge?: ModelLogLogsByUserTagCreatedAtCompositeKeyInput | null,
  gt?: ModelLogLogsByUserTagCreatedAtCompositeKeyInput | null,
  between?: Array< ModelLogLogsByUserTagCreatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelLogLogsByUserTagCreatedAtCompositeKeyInput | null,
};

export type ModelLogLogsByUserTagCreatedAtCompositeKeyInput = {
  tag?: string | null,
  createdAt?: string | null,
};

export type Page = {
  __typename: "Page",
  id: string,
  alias: string,
  status: PageStatus,
  type: PageType,
  menu: string,
  menuProps?: Menu | null,
  order: number,
  title: string,
  titlePadX?: string | null,
  titlePadY?: string | null,
  description?: string | null,
  content?: string | null,
  contentPadX?: string | null,
  contentPadY?: string | null,
  tags?: Array< string | null > | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  changeFreq?: PageChangeFreq | null,
  priority?: PagePriority | null,
  optionTitle?: PageOptionTitle | null,
  sideColumn?: PageSideColumn | null,
  sideColumnPadX?: string | null,
  sideColumnPadY?: string | null,
  sideColumnContent?: string | null,
  optionSideColumn?: PageOptionSideColumn | null,
  hideFooter?: boolean | null,
  hideInMenu?: boolean | null,
  createdAt?: string | null,
  search?: string | null,
  blocks?: ModelBlockConnection | null,
  updatedAt: string,
};

export enum PageType {
  CONTENT = "CONTENT",
  COMMERCE = "COMMERCE",
}


export type Menu = {
  __typename: "Menu",
  id: string,
  alias: string,
  order: number,
  title?: string | null,
  description?: string | null,
  orderDesc?: boolean | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  showDescriptionPage?: string | null,
  showThumbnailPage?: string | null,
  hide?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBlockConnection = {
  __typename: "ModelBlockConnection",
  items:  Array<Block | null >,
  nextToken?: string | null,
};

export type Block = {
  __typename: "Block",
  id: string,
  pageID: string,
  order: number,
  component: string,
  content: string,
  config?: string | null,
  page?: Page | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPageFilterInput = {
  id?: ModelIDInput | null,
  alias?: ModelStringInput | null,
  status?: ModelPageStatusInput | null,
  type?: ModelPageTypeInput | null,
  menu?: ModelIDInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  titlePadX?: ModelStringInput | null,
  titlePadY?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  contentPadX?: ModelStringInput | null,
  contentPadY?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  thumbnailSrc?: ModelStringInput | null,
  thumbnailCropper?: ModelStringInput | null,
  changeFreq?: ModelPageChangeFreqInput | null,
  priority?: ModelPagePriorityInput | null,
  optionTitle?: ModelPageOptionTitleInput | null,
  sideColumn?: ModelPageSideColumnInput | null,
  sideColumnPadX?: ModelStringInput | null,
  sideColumnPadY?: ModelStringInput | null,
  sideColumnContent?: ModelStringInput | null,
  optionSideColumn?: ModelPageOptionSideColumnInput | null,
  hideFooter?: ModelBooleanInput | null,
  hideInMenu?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  search?: ModelStringInput | null,
  and?: Array< ModelPageFilterInput | null > | null,
  or?: Array< ModelPageFilterInput | null > | null,
  not?: ModelPageFilterInput | null,
};

export type ModelPageStatusInput = {
  eq?: PageStatus | null,
  ne?: PageStatus | null,
};

export type ModelPageTypeInput = {
  eq?: PageType | null,
  ne?: PageType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPageChangeFreqInput = {
  eq?: PageChangeFreq | null,
  ne?: PageChangeFreq | null,
};

export type ModelPagePriorityInput = {
  eq?: PagePriority | null,
  ne?: PagePriority | null,
};

export type ModelPageOptionTitleInput = {
  eq?: PageOptionTitle | null,
  ne?: PageOptionTitle | null,
};

export type ModelPageSideColumnInput = {
  eq?: PageSideColumn | null,
  ne?: PageSideColumn | null,
};

export type ModelPageOptionSideColumnInput = {
  eq?: PageOptionSideColumn | null,
  ne?: PageOptionSideColumn | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPageConnection = {
  __typename: "ModelPageConnection",
  items:  Array<Page | null >,
  nextToken?: string | null,
};

export type ModelPagePagesByStatusMenuOrderCompositeKeyConditionInput = {
  eq?: ModelPagePagesByStatusMenuOrderCompositeKeyInput | null,
  le?: ModelPagePagesByStatusMenuOrderCompositeKeyInput | null,
  lt?: ModelPagePagesByStatusMenuOrderCompositeKeyInput | null,
  ge?: ModelPagePagesByStatusMenuOrderCompositeKeyInput | null,
  gt?: ModelPagePagesByStatusMenuOrderCompositeKeyInput | null,
  between?: Array< ModelPagePagesByStatusMenuOrderCompositeKeyInput | null > | null,
  beginsWith?: ModelPagePagesByStatusMenuOrderCompositeKeyInput | null,
};

export type ModelPagePagesByStatusMenuOrderCompositeKeyInput = {
  menu?: string | null,
  order?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  alias?: ModelStringInput | null,
  status?: ModelPageStatusInput | null,
  category?: ModelIDInput | null,
  subCategory?: ModelIDInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  contentTitle?: ModelStringInput | null,
  contentTitle2?: ModelStringInput | null,
  contentTitle3?: ModelStringInput | null,
  content?: ModelStringInput | null,
  content2?: ModelStringInput | null,
  content3?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  changeFreq?: ModelPageChangeFreqInput | null,
  priority?: ModelPagePriorityInput | null,
  price_of?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  qty?: ModelIntInput | null,
  stockControl?: ModelBooleanInput | null,
  applicationTime?: ModelIntInput | null,
  applicationTimeChild?: ModelIntInput | null,
  photo1?: ModelStringInput | null,
  photo2?: ModelStringInput | null,
  photo3?: ModelStringInput | null,
  photo4?: ModelStringInput | null,
  photo5?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  thumbnailSrc?: ModelStringInput | null,
  thumbnailCropper?: ModelStringInput | null,
  titlePadX?: ModelStringInput | null,
  titlePadY?: ModelStringInput | null,
  contentPadX?: ModelStringInput | null,
  contentPadY?: ModelStringInput | null,
  optionTitle?: ModelPageOptionTitleInput | null,
  sideColumn?: ModelPageSideColumnInput | null,
  sideColumnPadX?: ModelStringInput | null,
  sideColumnPadY?: ModelStringInput | null,
  sideColumnContent?: ModelStringInput | null,
  optionSideColumn?: ModelPageOptionSideColumnInput | null,
  hideFooter?: ModelBooleanInput | null,
  hideInMenu?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  search?: ModelStringInput | null,
  hideInSearch?: ModelBooleanInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelProductProductsByStatusCategoryNameCompositeKeyConditionInput = {
  eq?: ModelProductProductsByStatusCategoryNameCompositeKeyInput | null,
  le?: ModelProductProductsByStatusCategoryNameCompositeKeyInput | null,
  lt?: ModelProductProductsByStatusCategoryNameCompositeKeyInput | null,
  ge?: ModelProductProductsByStatusCategoryNameCompositeKeyInput | null,
  gt?: ModelProductProductsByStatusCategoryNameCompositeKeyInput | null,
  between?: Array< ModelProductProductsByStatusCategoryNameCompositeKeyInput | null > | null,
  beginsWith?: ModelProductProductsByStatusCategoryNameCompositeKeyInput | null,
};

export type ModelProductProductsByStatusCategoryNameCompositeKeyInput = {
  category?: string | null,
  name?: string | null,
};

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  qty?: ModelIntInput | null,
  changeName?: ModelStringInput | null,
  changeDescription?: ModelStringInput | null,
  changeQtyBlend?: ModelIntInput | null,
  changePriceAdjustment?: ModelStringInput | null,
  blendID?: ModelIDInput | null,
  campaignToken?: ModelStringInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
};

export type ModelProductProductsByCategorySubCategoryNameCompositeKeyConditionInput = {
  eq?: ModelProductProductsByCategorySubCategoryNameCompositeKeyInput | null,
  le?: ModelProductProductsByCategorySubCategoryNameCompositeKeyInput | null,
  lt?: ModelProductProductsByCategorySubCategoryNameCompositeKeyInput | null,
  ge?: ModelProductProductsByCategorySubCategoryNameCompositeKeyInput | null,
  gt?: ModelProductProductsByCategorySubCategoryNameCompositeKeyInput | null,
  between?: Array< ModelProductProductsByCategorySubCategoryNameCompositeKeyInput | null > | null,
  beginsWith?: ModelProductProductsByCategorySubCategoryNameCompositeKeyInput | null,
};

export type ModelProductProductsByCategorySubCategoryNameCompositeKeyInput = {
  subCategory?: string | null,
  name?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  active?: ModelBooleanInput | null,
  avatar?: ModelStringInput | null,
  search?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserStatusInput = {
  eq?: UserStatus | null,
  ne?: UserStatus | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGroupUserFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupUserFilterInput | null > | null,
  or?: Array< ModelGroupUserFilterInput | null > | null,
  not?: ModelGroupUserFilterInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  status?: ModelOrderStatusInput | null,
  createdAt?: ModelStringInput | null,
  couponID?: ModelIDInput | null,
  couponName?: ModelStringInput | null,
  couponDiscount?: ModelFloatInput | null,
  deliveryPrice?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  rating?: ModelIntInput | null,
  ratingNotes?: ModelStringInput | null,
  orderPagarmeID?: ModelStringInput | null,
  addressReference?: ModelStringInput | null,
  addressStreet?: ModelStringInput | null,
  addressNumber?: ModelStringInput | null,
  addressComplement?: ModelStringInput | null,
  addressZipcode?: ModelStringInput | null,
  addressNeighborhood?: ModelStringInput | null,
  addressCity?: ModelStringInput | null,
  addressState?: ModelStringInput | null,
  addressCountry?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  campaignID?: ModelIDInput | null,
  campaignName?: ModelStringInput | null,
  campaignOrientation?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  companyName?: ModelStringInput | null,
  companyPhone?: ModelStringInput | null,
  companyOpeningHours?: ModelStringInput | null,
  qrCodePix?: ModelStringInput | null,
  qrCodePixUrl?: ModelStringInput | null,
  payMethod?: ModelPaymentMethodsInput | null,
  installments?: ModelIntInput | null,
  homeCareOrRetail?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type ModelPaymentMethodsInput = {
  eq?: PaymentMethods | null,
  ne?: PaymentMethods | null,
};

export type ModelCampaignFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  code?: ModelStringInput | null,
  start?: ModelStringInput | null,
  expiration?: ModelStringInput | null,
  discountPercentage?: ModelIntInput | null,
  discountValue?: ModelFloatInput | null,
  qtyLimit?: ModelIntInput | null,
  qtyUsed?: ModelIntInput | null,
  qtyProduct?: ModelIntInput | null,
  qtyProductUsed?: ModelIntInput | null,
  orientation?: ModelStringInput | null,
  orderMessage?: ModelStringInput | null,
  zipCodeCoverage?: ModelStringInput | null,
  search?: ModelStringInput | null,
  and?: Array< ModelCampaignFilterInput | null > | null,
  or?: Array< ModelCampaignFilterInput | null > | null,
  not?: ModelCampaignFilterInput | null,
};

export type ModelCampaignConnection = {
  __typename: "ModelCampaignConnection",
  items:  Array<Campaign | null >,
  nextToken?: string | null,
};

export type ModelDeliveryOrderFilterInput = {
  id?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  deliveryUserID?: ModelIDInput | null,
  deliveryCompanyID?: ModelIDInput | null,
  status?: ModelDeliveryStatusInput | null,
  and?: Array< ModelDeliveryOrderFilterInput | null > | null,
  or?: Array< ModelDeliveryOrderFilterInput | null > | null,
  not?: ModelDeliveryOrderFilterInput | null,
};

export type ModelDeliveryStatusInput = {
  eq?: DeliveryStatus | null,
  ne?: DeliveryStatus | null,
};

export enum DeliveryStatus {
  FORESEEN = "FORESEEN",
  NEEDS_ACTION = "NEEDS_ACTION",
  CONFIRMED = "CONFIRMED",
  BLOCKED = "BLOCKED",
  DELIVERED = "DELIVERED",
}


export type ModelDeliveryOrderConnection = {
  __typename: "ModelDeliveryOrderConnection",
  items:  Array<DeliveryOrder | null >,
  nextToken?: string | null,
};

export type DeliveryOrder = {
  __typename: "DeliveryOrder",
  id: string,
  orderID: string,
  order?: Order | null,
  date: string,
  deliveryUserID?: string | null,
  deliveryUser?: User | null,
  deliveryCompanyID?: string | null,
  deliveryCompany?: Company | null,
  status: DeliveryStatus,
  createdAt: string,
  updatedAt: string,
};

export type ModelCampaignUsedFilterInput = {
  id?: ModelIDInput | null,
  campaignID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  qty?: ModelIntInput | null,
  and?: Array< ModelCampaignUsedFilterInput | null > | null,
  or?: Array< ModelCampaignUsedFilterInput | null > | null,
  not?: ModelCampaignUsedFilterInput | null,
};

export type ModelCouponUsedFilterInput = {
  id?: ModelIDInput | null,
  couponID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  qty?: ModelIntInput | null,
  and?: Array< ModelCouponUsedFilterInput | null > | null,
  or?: Array< ModelCouponUsedFilterInput | null > | null,
  not?: ModelCouponUsedFilterInput | null,
};

export type ModelCouponUsedConnection = {
  __typename: "ModelCouponUsedConnection",
  items:  Array<CouponUsed | null >,
  nextToken?: string | null,
};

export type CouponUsed = {
  __typename: "CouponUsed",
  id: string,
  couponID: string,
  coupon?: Coupon | null,
  userID: string,
  user?: User | null,
  qty?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type Coupon = {
  __typename: "Coupon",
  id: string,
  name: string,
  description?: string | null,
  code: string,
  start?: string | null,
  expiration?: string | null,
  discountPercentage?: number | null,
  discountValue?: number | null,
  qtyLimit?: number | null,
  qtyUsed?: number | null,
  qtyProduct?: number | null,
  qtyProductUsed?: number | null,
  search?: string | null,
  products?: ModelCouponProductConnection | null,
  couponUsed?: ModelCouponUsedConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCouponProductConnection = {
  __typename: "ModelCouponProductConnection",
  items:  Array<CouponProduct | null >,
  nextToken?: string | null,
};

export type CouponProduct = {
  __typename: "CouponProduct",
  id: string,
  couponID: string,
  productID: string,
  price?: number | null,
  limit?: number | null,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelVaccinationCardItemFilterInput = {
  id?: ModelIDInput | null,
  vaccinationCardID?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  orderItemID?: ModelIDInput | null,
  campaignID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  lote?: ModelStringInput | null,
  profissionalID?: ModelIDInput | null,
  profissionalName?: ModelStringInput | null,
  coren?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  via?: ModelStringInput | null,
  applicationDate?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelVaccinationCardItemFilterInput | null > | null,
  or?: Array< ModelVaccinationCardItemFilterInput | null > | null,
  not?: ModelVaccinationCardItemFilterInput | null,
};

export type ModelProfileFilterInput = {
  userID?: ModelIDInput | null,
  doc?: ModelStringInput | null,
  docType?: ModelDocTypesInput | null,
  docProfessionType?: ModelStringInput | null,
  docProfession?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  specialties?: ModelStringInput | null,
  subSpecialties?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  gender?: ModelGenderOptionsInput | null,
  birth?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  urlUserName?: ModelStringInput | null,
  urlEnable?: ModelBooleanInput | null,
  allowViewEmail?: ModelBooleanInput | null,
  allowViewPhone?: ModelBooleanInput | null,
  allowCookiesPreference?: ModelBooleanInput | null,
  allowCookiesStatistic?: ModelBooleanInput | null,
  pix?: ModelStringInput | null,
  zipCodeCoverage?: ModelStringInput | null,
  schedulesSunday?: ModelStringInput | null,
  schedulesMonday?: ModelStringInput | null,
  schedulesTuesday?: ModelStringInput | null,
  schedulesWednesday?: ModelStringInput | null,
  schedulesThursday?: ModelStringInput | null,
  schedulesFriday?: ModelStringInput | null,
  schedulesSaturday?: ModelStringInput | null,
  regionsConfig?: ModelStringInput | null,
  regionSunday?: ModelStringInput | null,
  regionMonday?: ModelStringInput | null,
  regionTuesday?: ModelStringInput | null,
  regionWednesday?: ModelStringInput | null,
  regionThursday?: ModelStringInput | null,
  regionFriday?: ModelStringInput | null,
  regionSaturday?: ModelStringInput | null,
  customerPagarmeID?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  companyHomeCare?: ModelBooleanInput | null,
  companyCampaign?: ModelBooleanInput | null,
  companyAdmin?: ModelBooleanInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelDocTypesInput = {
  eq?: DocTypes | null,
  ne?: DocTypes | null,
};

export type ModelGenderOptionsInput = {
  eq?: GenderOptions | null,
  ne?: GenderOptions | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelCampaignCompanyFilterInput = {
  id?: ModelIDInput | null,
  campaignID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  and?: Array< ModelCampaignCompanyFilterInput | null > | null,
  or?: Array< ModelCampaignCompanyFilterInput | null > | null,
  not?: ModelCampaignCompanyFilterInput | null,
};

export type ModelAuthorizationListMemberVaccinationFilterInput = {
  id?: ModelIDInput | null,
  authorizationListID?: ModelIDInput | null,
  authorizationListMemberID?: ModelIDInput | null,
  profissionalID?: ModelIDInput | null,
  coren?: ModelStringInput | null,
  lote?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  via?: ModelStringInput | null,
  OS?: ModelStringInput | null,
  applicationDate?: ModelStringInput | null,
  applicationTime?: ModelStringInput | null,
  and?: Array< ModelAuthorizationListMemberVaccinationFilterInput | null > | null,
  or?: Array< ModelAuthorizationListMemberVaccinationFilterInput | null > | null,
  not?: ModelAuthorizationListMemberVaccinationFilterInput | null,
};

export type ModelAuthorizationListMemberVaccinationConnection = {
  __typename: "ModelAuthorizationListMemberVaccinationConnection",
  items:  Array<AuthorizationListMemberVaccination | null >,
  nextToken?: string | null,
};

export type AuthorizationListMemberVaccination = {
  __typename: "AuthorizationListMemberVaccination",
  id: string,
  authorizationListID: string,
  authorizationList?: AuthorizationList | null,
  authorizationListMemberID: string,
  authorizationListMember?: AuthorizationListMember | null,
  profissionalID?: string | null,
  profissional?: User | null,
  coren?: string | null,
  lote?: string | null,
  dueDate?: string | null,
  via?: string | null,
  OS?: string | null,
  applicationDate?: string | null,
  applicationTime?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type AuthorizationList = {
  __typename: "AuthorizationList",
  id: string,
  name: string,
  description?: string | null,
  start?: string | null,
  expiration?: string | null,
  orientation?: string | null,
  search?: string | null,
  qtyApplication?: number | null,
  qtyReturned?: number | null,
  contactNameFinished?: string | null,
  contactPhoneFinished?: string | null,
  contactEmailFinished?: string | null,
  notesFinished?: string | null,
  professionalFinished?: string | null,
  withList?: boolean | null,
  campaignCode?: string | null,
  OS?: string | null,
  status?: AuthorizationListStatus | null,
  members?: ModelAuthorizationListMemberConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum AuthorizationListStatus {
  STANDBY = "STANDBY",
  STARTED = "STARTED",
  FINISHED = "FINISHED",
}


export type ModelAuthorizationListMemberConnection = {
  __typename: "ModelAuthorizationListMemberConnection",
  items:  Array<AuthorizationListMember | null >,
  nextToken?: string | null,
};

export type AuthorizationListMember = {
  __typename: "AuthorizationListMember",
  id: string,
  authorizationListID: string,
  name: string,
  key?: string | null,
  cpf?: string | null,
  birth?: string | null,
  search?: string | null,
  others?: string | null,
  vaccinations?: ModelAuthorizationListMemberVaccinationConnection | null,
  authorizationList?: AuthorizationList | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelVaccinationCardFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  person?: ModelStringInput | null,
  doc?: ModelStringInput | null,
  birth?: ModelStringInput | null,
  relationship?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  isOwner?: ModelBooleanInput | null,
  and?: Array< ModelVaccinationCardFilterInput | null > | null,
  or?: Array< ModelVaccinationCardFilterInput | null > | null,
  not?: ModelVaccinationCardFilterInput | null,
};

export type ModelVaccinationCardConnection = {
  __typename: "ModelVaccinationCardConnection",
  items:  Array<VaccinationCard | null >,
  nextToken?: string | null,
};

export type ModelCouponFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  code?: ModelStringInput | null,
  start?: ModelStringInput | null,
  expiration?: ModelStringInput | null,
  discountPercentage?: ModelIntInput | null,
  discountValue?: ModelFloatInput | null,
  qtyLimit?: ModelIntInput | null,
  qtyUsed?: ModelIntInput | null,
  qtyProduct?: ModelIntInput | null,
  qtyProductUsed?: ModelIntInput | null,
  search?: ModelStringInput | null,
  and?: Array< ModelCouponFilterInput | null > | null,
  or?: Array< ModelCouponFilterInput | null > | null,
  not?: ModelCouponFilterInput | null,
};

export type ModelCouponConnection = {
  __typename: "ModelCouponConnection",
  items:  Array<Coupon | null >,
  nextToken?: string | null,
};

export type ModelRelationLinkFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  relationID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  notify?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  search?: ModelStringInput | null,
  percentage?: ModelIntInput | null,
  and?: Array< ModelRelationLinkFilterInput | null > | null,
  or?: Array< ModelRelationLinkFilterInput | null > | null,
  not?: ModelRelationLinkFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  relationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  type?: ModelMessagesTypesInput | null,
  content?: ModelStringInput | null,
  search?: ModelStringInput | null,
  identityId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessagesTypesInput = {
  eq?: MessagesTypes | null,
  ne?: MessagesTypes | null,
};

export type ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyConditionInput = {
  eq?: ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyInput | null,
  le?: ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyInput | null,
  lt?: ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyInput | null,
  ge?: ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyInput | null,
  gt?: ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyInput | null,
  between?: Array< ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyInput | null,
};

export type ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyInput = {
  type?: string | null,
  notify?: number | null,
  updatedAt?: string | null,
};

export type ModelAuthorizationListMemberFilterInput = {
  id?: ModelIDInput | null,
  authorizationListID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  key?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  birth?: ModelStringInput | null,
  search?: ModelStringInput | null,
  others?: ModelStringInput | null,
  and?: Array< ModelAuthorizationListMemberFilterInput | null > | null,
  or?: Array< ModelAuthorizationListMemberFilterInput | null > | null,
  not?: ModelAuthorizationListMemberFilterInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  status?: UserStatus | null,
  active?: boolean | null,
  avatar?: string | null,
  search?: string | null,
  createdAt?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  active?: ModelBooleanInput | null,
  avatar?: ModelStringInput | null,
  search?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateProfileInput = {
  userID: string,
  doc?: string | null,
  docType?: DocTypes | null,
  docProfessionType?: string | null,
  docProfession?: string | null,
  profession?: string | null,
  specialties?: string | null,
  subSpecialties?: string | null,
  bio?: string | null,
  gender?: GenderOptions | null,
  birth?: string | null,
  notes?: string | null,
  urlUserName?: string | null,
  urlEnable?: boolean | null,
  allowViewEmail?: boolean | null,
  allowViewPhone?: boolean | null,
  allowCookiesPreference?: boolean | null,
  allowCookiesStatistic?: boolean | null,
  pix?: string | null,
  zipCodeCoverage?: Array< string | null > | null,
  schedulesSunday?: Array< string | null > | null,
  schedulesMonday?: Array< string | null > | null,
  schedulesTuesday?: Array< string | null > | null,
  schedulesWednesday?: Array< string | null > | null,
  schedulesThursday?: Array< string | null > | null,
  schedulesFriday?: Array< string | null > | null,
  schedulesSaturday?: Array< string | null > | null,
  regionsConfig?: string | null,
  regionSunday?: string | null,
  regionMonday?: string | null,
  regionTuesday?: string | null,
  regionWednesday?: string | null,
  regionThursday?: string | null,
  regionFriday?: string | null,
  regionSaturday?: string | null,
  customerPagarmeID?: string | null,
  companyID?: string | null,
  companyHomeCare?: boolean | null,
  companyCampaign?: boolean | null,
  companyAdmin?: boolean | null,
};

export type ModelProfileConditionInput = {
  doc?: ModelStringInput | null,
  docType?: ModelDocTypesInput | null,
  docProfessionType?: ModelStringInput | null,
  docProfession?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  specialties?: ModelStringInput | null,
  subSpecialties?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  gender?: ModelGenderOptionsInput | null,
  birth?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  urlUserName?: ModelStringInput | null,
  urlEnable?: ModelBooleanInput | null,
  allowViewEmail?: ModelBooleanInput | null,
  allowViewPhone?: ModelBooleanInput | null,
  allowCookiesPreference?: ModelBooleanInput | null,
  allowCookiesStatistic?: ModelBooleanInput | null,
  pix?: ModelStringInput | null,
  zipCodeCoverage?: ModelStringInput | null,
  schedulesSunday?: ModelStringInput | null,
  schedulesMonday?: ModelStringInput | null,
  schedulesTuesday?: ModelStringInput | null,
  schedulesWednesday?: ModelStringInput | null,
  schedulesThursday?: ModelStringInput | null,
  schedulesFriday?: ModelStringInput | null,
  schedulesSaturday?: ModelStringInput | null,
  regionsConfig?: ModelStringInput | null,
  regionSunday?: ModelStringInput | null,
  regionMonday?: ModelStringInput | null,
  regionTuesday?: ModelStringInput | null,
  regionWednesday?: ModelStringInput | null,
  regionThursday?: ModelStringInput | null,
  regionFriday?: ModelStringInput | null,
  regionSaturday?: ModelStringInput | null,
  customerPagarmeID?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  companyHomeCare?: ModelBooleanInput | null,
  companyCampaign?: ModelBooleanInput | null,
  companyAdmin?: ModelBooleanInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type DeleteProfileInput = {
  userID: string,
};

export type CreateGroupUserInput = {
  id?: string | null,
  group: string,
  userID: string,
  profileID: string,
  createdAt?: string | null,
};

export type ModelGroupUserConditionInput = {
  group?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupUserConditionInput | null > | null,
  or?: Array< ModelGroupUserConditionInput | null > | null,
  not?: ModelGroupUserConditionInput | null,
};

export type DeleteGroupUserInput = {
  id: string,
};

export type CreateAddressInput = {
  id?: string | null,
  userID: string,
  name?: string | null,
  reference?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  addressPagarmeID?: string | null,
};

export type ModelAddressConditionInput = {
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  street?: ModelStringInput | null,
  number?: ModelStringInput | null,
  complement?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  addressPagarmeID?: ModelStringInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
};

export type UpdateAddressInput = {
  id: string,
  userID?: string | null,
  name?: string | null,
  reference?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  addressPagarmeID?: string | null,
};

export type DeleteAddressInput = {
  id: string,
};

export type CreatePayMethodInput = {
  id?: string | null,
  userID: string,
  method: PaymentMethods,
  number?: string | null,
  holderName?: string | null,
  holderDocument?: string | null,
  expMonth?: number | null,
  expYear?: number | null,
  cvv?: string | null,
  brand?: string | null,
  label?: string | null,
  cardPagarmeID?: string | null,
};

export type ModelPayMethodConditionInput = {
  userID?: ModelIDInput | null,
  method?: ModelPaymentMethodsInput | null,
  number?: ModelStringInput | null,
  holderName?: ModelStringInput | null,
  holderDocument?: ModelStringInput | null,
  expMonth?: ModelIntInput | null,
  expYear?: ModelIntInput | null,
  cvv?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  label?: ModelStringInput | null,
  cardPagarmeID?: ModelStringInput | null,
  and?: Array< ModelPayMethodConditionInput | null > | null,
  or?: Array< ModelPayMethodConditionInput | null > | null,
  not?: ModelPayMethodConditionInput | null,
};

export type UpdatePayMethodInput = {
  id: string,
  userID?: string | null,
  method?: PaymentMethods | null,
  number?: string | null,
  holderName?: string | null,
  holderDocument?: string | null,
  expMonth?: number | null,
  expYear?: number | null,
  cvv?: string | null,
  brand?: string | null,
  label?: string | null,
  cardPagarmeID?: string | null,
};

export type DeletePayMethodInput = {
  id: string,
};

export type CreateLogInput = {
  id?: string | null,
  userID: string,
  tag: string,
  source: LogSource,
  notes?: string | null,
  message?: string | null,
  page?: string | null,
  manufacturer?: string | null,
  model?: string | null,
  osName?: string | null,
  osVersion?: string | null,
  platform?: string | null,
  uuid?: string | null,
  ip?: string | null,
  city?: string | null,
  region?: string | null,
  country?: string | null,
  provider?: string | null,
  lat?: number | null,
  lng?: number | null,
  createdAt?: string | null,
};

export type ModelLogConditionInput = {
  userID?: ModelIDInput | null,
  tag?: ModelStringInput | null,
  source?: ModelLogSourceInput | null,
  notes?: ModelStringInput | null,
  message?: ModelStringInput | null,
  page?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  model?: ModelStringInput | null,
  osName?: ModelStringInput | null,
  osVersion?: ModelStringInput | null,
  platform?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  ip?: ModelStringInput | null,
  city?: ModelStringInput | null,
  region?: ModelStringInput | null,
  country?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelLogConditionInput | null > | null,
  or?: Array< ModelLogConditionInput | null > | null,
  not?: ModelLogConditionInput | null,
};

export type CreateConfigInput = {
  id?: string | null,
  validationMode: ConfigValidationModes,
  googleAnalyticsID?: string | null,
  googleSiteVerification?: string | null,
  inviteSubject?: string | null,
  inviteMessage?: string | null,
  inviteSMS?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  infoFooter?: string | null,
  minValueOrder?: number | null,
  phoneOrders?: string | null,
  allowPayOnDelivery?: boolean | null,
  allowLocalPickup?: boolean | null,
  deliveryOnSunday?: string | null,
  deliveryOnMonday?: string | null,
  deliveryOnTuesday?: string | null,
  deliveryOnWednesday?: string | null,
  deliveryOnThursday?: string | null,
  deliveryOnFriday?: string | null,
  deliveryOnSaturday?: string | null,
  deliveryOffSunday?: string | null,
  deliveryOffMonday?: string | null,
  deliveryOffTuesday?: string | null,
  deliveryOffWednesday?: string | null,
  deliveryOffThursday?: string | null,
  deliveryOffFriday?: string | null,
  deliveryOffSaturday?: string | null,
  showNotesCart?: boolean | null,
  notesCart?: string | null,
  soundOnNewOrder?: boolean | null,
};

export enum ConfigValidationModes {
  CODE = "CODE",
  LINK = "LINK",
}


export type ModelConfigConditionInput = {
  validationMode?: ModelConfigValidationModesInput | null,
  googleAnalyticsID?: ModelStringInput | null,
  googleSiteVerification?: ModelStringInput | null,
  inviteSubject?: ModelStringInput | null,
  inviteMessage?: ModelStringInput | null,
  inviteSMS?: ModelStringInput | null,
  facebook?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  infoFooter?: ModelStringInput | null,
  minValueOrder?: ModelFloatInput | null,
  phoneOrders?: ModelStringInput | null,
  allowPayOnDelivery?: ModelBooleanInput | null,
  allowLocalPickup?: ModelBooleanInput | null,
  deliveryOnSunday?: ModelStringInput | null,
  deliveryOnMonday?: ModelStringInput | null,
  deliveryOnTuesday?: ModelStringInput | null,
  deliveryOnWednesday?: ModelStringInput | null,
  deliveryOnThursday?: ModelStringInput | null,
  deliveryOnFriday?: ModelStringInput | null,
  deliveryOnSaturday?: ModelStringInput | null,
  deliveryOffSunday?: ModelStringInput | null,
  deliveryOffMonday?: ModelStringInput | null,
  deliveryOffTuesday?: ModelStringInput | null,
  deliveryOffWednesday?: ModelStringInput | null,
  deliveryOffThursday?: ModelStringInput | null,
  deliveryOffFriday?: ModelStringInput | null,
  deliveryOffSaturday?: ModelStringInput | null,
  showNotesCart?: ModelBooleanInput | null,
  notesCart?: ModelStringInput | null,
  soundOnNewOrder?: ModelBooleanInput | null,
  and?: Array< ModelConfigConditionInput | null > | null,
  or?: Array< ModelConfigConditionInput | null > | null,
  not?: ModelConfigConditionInput | null,
};

export type ModelConfigValidationModesInput = {
  eq?: ConfigValidationModes | null,
  ne?: ConfigValidationModes | null,
};

export type Config = {
  __typename: "Config",
  id: string,
  validationMode: ConfigValidationModes,
  googleAnalyticsID?: string | null,
  googleSiteVerification?: string | null,
  inviteSubject?: string | null,
  inviteMessage?: string | null,
  inviteSMS?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  infoFooter?: string | null,
  minValueOrder?: number | null,
  phoneOrders?: string | null,
  allowPayOnDelivery?: boolean | null,
  allowLocalPickup?: boolean | null,
  deliveryOnSunday?: string | null,
  deliveryOnMonday?: string | null,
  deliveryOnTuesday?: string | null,
  deliveryOnWednesday?: string | null,
  deliveryOnThursday?: string | null,
  deliveryOnFriday?: string | null,
  deliveryOnSaturday?: string | null,
  deliveryOffSunday?: string | null,
  deliveryOffMonday?: string | null,
  deliveryOffTuesday?: string | null,
  deliveryOffWednesday?: string | null,
  deliveryOffThursday?: string | null,
  deliveryOffFriday?: string | null,
  deliveryOffSaturday?: string | null,
  showNotesCart?: boolean | null,
  notesCart?: string | null,
  soundOnNewOrder?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateConfigInput = {
  id: string,
  validationMode?: ConfigValidationModes | null,
  googleAnalyticsID?: string | null,
  googleSiteVerification?: string | null,
  inviteSubject?: string | null,
  inviteMessage?: string | null,
  inviteSMS?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  infoFooter?: string | null,
  minValueOrder?: number | null,
  phoneOrders?: string | null,
  allowPayOnDelivery?: boolean | null,
  allowLocalPickup?: boolean | null,
  deliveryOnSunday?: string | null,
  deliveryOnMonday?: string | null,
  deliveryOnTuesday?: string | null,
  deliveryOnWednesday?: string | null,
  deliveryOnThursday?: string | null,
  deliveryOnFriday?: string | null,
  deliveryOnSaturday?: string | null,
  deliveryOffSunday?: string | null,
  deliveryOffMonday?: string | null,
  deliveryOffTuesday?: string | null,
  deliveryOffWednesday?: string | null,
  deliveryOffThursday?: string | null,
  deliveryOffFriday?: string | null,
  deliveryOffSaturday?: string | null,
  showNotesCart?: boolean | null,
  notesCart?: string | null,
  soundOnNewOrder?: boolean | null,
};

export type CreateInviteInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  email?: string | null,
  phone?: string | null,
  groups?: Array< string | null > | null,
  status: InviteStatus,
  createdAt?: string | null,
};

export enum InviteStatus {
  SENT = "SENT",
  CANCELED = "CANCELED",
  ACCEPTED = "ACCEPTED",
}


export type ModelInviteConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  status?: ModelInviteStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelInviteConditionInput | null > | null,
  or?: Array< ModelInviteConditionInput | null > | null,
  not?: ModelInviteConditionInput | null,
};

export type ModelInviteStatusInput = {
  eq?: InviteStatus | null,
  ne?: InviteStatus | null,
};

export type Invite = {
  __typename: "Invite",
  id: string,
  name: string,
  description?: string | null,
  email?: string | null,
  phone?: string | null,
  groups?: Array< string | null > | null,
  status: InviteStatus,
  createdAt?: string | null,
  updatedAt: string,
};

export type DeleteInviteInput = {
  id: string,
};

export type CreateCouponInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  code: string,
  start?: string | null,
  expiration?: string | null,
  discountPercentage?: number | null,
  discountValue?: number | null,
  qtyLimit?: number | null,
  qtyUsed?: number | null,
  qtyProduct?: number | null,
  qtyProductUsed?: number | null,
  search?: string | null,
};

export type ModelCouponConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  code?: ModelStringInput | null,
  start?: ModelStringInput | null,
  expiration?: ModelStringInput | null,
  discountPercentage?: ModelIntInput | null,
  discountValue?: ModelFloatInput | null,
  qtyLimit?: ModelIntInput | null,
  qtyUsed?: ModelIntInput | null,
  qtyProduct?: ModelIntInput | null,
  qtyProductUsed?: ModelIntInput | null,
  search?: ModelStringInput | null,
  and?: Array< ModelCouponConditionInput | null > | null,
  or?: Array< ModelCouponConditionInput | null > | null,
  not?: ModelCouponConditionInput | null,
};

export type DeleteCouponInput = {
  id: string,
};

export type CreateFolderInput = {
  id?: string | null,
  name: string,
};

export type ModelFolderConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFolderConditionInput | null > | null,
  or?: Array< ModelFolderConditionInput | null > | null,
  not?: ModelFolderConditionInput | null,
};

export type Folder = {
  __typename: "Folder",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFolderInput = {
  id: string,
  name?: string | null,
};

export type DeleteFolderInput = {
  id: string,
};

export type CreateMidiaInput = {
  id?: string | null,
  key: string,
  type?: MidiaTypes | null,
  title?: string | null,
  subTitle?: string | null,
  description?: string | null,
  identifyText?: string | null,
};

export enum MidiaTypes {
  AUDIO = "AUDIO",
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  PDF = "PDF",
  DOC = "DOC",
  XLS = "XLS",
  FILE = "FILE",
  ZIP = "ZIP",
}


export type ModelMidiaConditionInput = {
  key?: ModelStringInput | null,
  type?: ModelMidiaTypesInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  identifyText?: ModelStringInput | null,
  and?: Array< ModelMidiaConditionInput | null > | null,
  or?: Array< ModelMidiaConditionInput | null > | null,
  not?: ModelMidiaConditionInput | null,
};

export type ModelMidiaTypesInput = {
  eq?: MidiaTypes | null,
  ne?: MidiaTypes | null,
};

export type Midia = {
  __typename: "Midia",
  id: string,
  key: string,
  type?: MidiaTypes | null,
  title?: string | null,
  subTitle?: string | null,
  description?: string | null,
  identifyText?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMidiaInput = {
  id: string,
  key?: string | null,
  type?: MidiaTypes | null,
  title?: string | null,
  subTitle?: string | null,
  description?: string | null,
  identifyText?: string | null,
};

export type DeleteMidiaInput = {
  id: string,
};

export type CreateMenuInput = {
  id?: string | null,
  alias: string,
  order: number,
  title?: string | null,
  description?: string | null,
  orderDesc?: boolean | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  showDescriptionPage?: string | null,
  showThumbnailPage?: string | null,
  hide?: boolean | null,
};

export type ModelMenuConditionInput = {
  alias?: ModelStringInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  orderDesc?: ModelBooleanInput | null,
  thumbnail?: ModelStringInput | null,
  thumbnailSrc?: ModelStringInput | null,
  thumbnailCropper?: ModelStringInput | null,
  showDescriptionPage?: ModelStringInput | null,
  showThumbnailPage?: ModelStringInput | null,
  hide?: ModelBooleanInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type UpdateMenuInput = {
  id: string,
  alias?: string | null,
  order?: number | null,
  title?: string | null,
  description?: string | null,
  orderDesc?: boolean | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  showDescriptionPage?: string | null,
  showThumbnailPage?: string | null,
  hide?: boolean | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type UpdatePageInput = {
  id: string,
  alias?: string | null,
  status?: PageStatus | null,
  type?: PageType | null,
  menu?: string | null,
  order?: number | null,
  title?: string | null,
  titlePadX?: string | null,
  titlePadY?: string | null,
  description?: string | null,
  content?: string | null,
  contentPadX?: string | null,
  contentPadY?: string | null,
  tags?: Array< string | null > | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  changeFreq?: PageChangeFreq | null,
  priority?: PagePriority | null,
  optionTitle?: PageOptionTitle | null,
  sideColumn?: PageSideColumn | null,
  sideColumnPadX?: string | null,
  sideColumnPadY?: string | null,
  sideColumnContent?: string | null,
  optionSideColumn?: PageOptionSideColumn | null,
  hideFooter?: boolean | null,
  hideInMenu?: boolean | null,
  createdAt?: string | null,
  search?: string | null,
};

export type ModelPageConditionInput = {
  alias?: ModelStringInput | null,
  status?: ModelPageStatusInput | null,
  type?: ModelPageTypeInput | null,
  menu?: ModelIDInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  titlePadX?: ModelStringInput | null,
  titlePadY?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  contentPadX?: ModelStringInput | null,
  contentPadY?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  thumbnailSrc?: ModelStringInput | null,
  thumbnailCropper?: ModelStringInput | null,
  changeFreq?: ModelPageChangeFreqInput | null,
  priority?: ModelPagePriorityInput | null,
  optionTitle?: ModelPageOptionTitleInput | null,
  sideColumn?: ModelPageSideColumnInput | null,
  sideColumnPadX?: ModelStringInput | null,
  sideColumnPadY?: ModelStringInput | null,
  sideColumnContent?: ModelStringInput | null,
  optionSideColumn?: ModelPageOptionSideColumnInput | null,
  hideFooter?: ModelBooleanInput | null,
  hideInMenu?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  search?: ModelStringInput | null,
  and?: Array< ModelPageConditionInput | null > | null,
  or?: Array< ModelPageConditionInput | null > | null,
  not?: ModelPageConditionInput | null,
};

export type DeletePageInput = {
  id: string,
};

export type CreateBlockInput = {
  id?: string | null,
  pageID: string,
  order: number,
  component: string,
  content: string,
  config?: string | null,
};

export type ModelBlockConditionInput = {
  pageID?: ModelIDInput | null,
  order?: ModelIntInput | null,
  component?: ModelStringInput | null,
  content?: ModelStringInput | null,
  config?: ModelStringInput | null,
  and?: Array< ModelBlockConditionInput | null > | null,
  or?: Array< ModelBlockConditionInput | null > | null,
  not?: ModelBlockConditionInput | null,
};

export type UpdateBlockInput = {
  id: string,
  pageID?: string | null,
  order?: number | null,
  component?: string | null,
  content?: string | null,
  config?: string | null,
};

export type DeleteBlockInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  alias: string,
  order: number,
  title?: string | null,
  description?: string | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  hide?: boolean | null,
  isSub?: boolean | null,
};

export type ModelCategoryConditionInput = {
  alias?: ModelStringInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  thumbnailSrc?: ModelStringInput | null,
  thumbnailCropper?: ModelStringInput | null,
  hide?: ModelBooleanInput | null,
  isSub?: ModelBooleanInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  alias?: string | null,
  order?: number | null,
  title?: string | null,
  description?: string | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  hide?: boolean | null,
  isSub?: boolean | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  alias: string,
  status: PageStatus,
  category: string,
  subCategory: string,
  code?: string | null,
  name: string,
  type?: string | null,
  description?: string | null,
  manufacturer?: string | null,
  contentTitle?: string | null,
  contentTitle2?: string | null,
  contentTitle3?: string | null,
  content?: string | null,
  content2?: string | null,
  content3?: string | null,
  tags?: Array< string | null > | null,
  changeFreq?: PageChangeFreq | null,
  priority?: PagePriority | null,
  price_of?: number | null,
  price: number,
  qty?: number | null,
  stockControl?: boolean | null,
  applicationTime?: number | null,
  applicationTimeChild?: number | null,
  photo1?: string | null,
  photo2?: string | null,
  photo3?: string | null,
  photo4?: string | null,
  photo5?: string | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  titlePadX?: string | null,
  titlePadY?: string | null,
  contentPadX?: string | null,
  contentPadY?: string | null,
  optionTitle?: PageOptionTitle | null,
  sideColumn?: PageSideColumn | null,
  sideColumnPadX?: string | null,
  sideColumnPadY?: string | null,
  sideColumnContent?: string | null,
  optionSideColumn?: PageOptionSideColumn | null,
  hideFooter?: boolean | null,
  hideInMenu?: boolean | null,
  createdAt?: string | null,
  search?: string | null,
  hideInSearch?: boolean | null,
};

export type ModelProductConditionInput = {
  alias?: ModelStringInput | null,
  status?: ModelPageStatusInput | null,
  category?: ModelIDInput | null,
  subCategory?: ModelIDInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  contentTitle?: ModelStringInput | null,
  contentTitle2?: ModelStringInput | null,
  contentTitle3?: ModelStringInput | null,
  content?: ModelStringInput | null,
  content2?: ModelStringInput | null,
  content3?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  changeFreq?: ModelPageChangeFreqInput | null,
  priority?: ModelPagePriorityInput | null,
  price_of?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  qty?: ModelIntInput | null,
  stockControl?: ModelBooleanInput | null,
  applicationTime?: ModelIntInput | null,
  applicationTimeChild?: ModelIntInput | null,
  photo1?: ModelStringInput | null,
  photo2?: ModelStringInput | null,
  photo3?: ModelStringInput | null,
  photo4?: ModelStringInput | null,
  photo5?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  thumbnailSrc?: ModelStringInput | null,
  thumbnailCropper?: ModelStringInput | null,
  titlePadX?: ModelStringInput | null,
  titlePadY?: ModelStringInput | null,
  contentPadX?: ModelStringInput | null,
  contentPadY?: ModelStringInput | null,
  optionTitle?: ModelPageOptionTitleInput | null,
  sideColumn?: ModelPageSideColumnInput | null,
  sideColumnPadX?: ModelStringInput | null,
  sideColumnPadY?: ModelStringInput | null,
  sideColumnContent?: ModelStringInput | null,
  optionSideColumn?: ModelPageOptionSideColumnInput | null,
  hideFooter?: ModelBooleanInput | null,
  hideInMenu?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  search?: ModelStringInput | null,
  hideInSearch?: ModelBooleanInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type UpdateProductInput = {
  id: string,
  alias?: string | null,
  status?: PageStatus | null,
  category?: string | null,
  subCategory?: string | null,
  code?: string | null,
  name?: string | null,
  type?: string | null,
  description?: string | null,
  manufacturer?: string | null,
  contentTitle?: string | null,
  contentTitle2?: string | null,
  contentTitle3?: string | null,
  content?: string | null,
  content2?: string | null,
  content3?: string | null,
  tags?: Array< string | null > | null,
  changeFreq?: PageChangeFreq | null,
  priority?: PagePriority | null,
  price_of?: number | null,
  price?: number | null,
  qty?: number | null,
  stockControl?: boolean | null,
  applicationTime?: number | null,
  applicationTimeChild?: number | null,
  photo1?: string | null,
  photo2?: string | null,
  photo3?: string | null,
  photo4?: string | null,
  photo5?: string | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  titlePadX?: string | null,
  titlePadY?: string | null,
  contentPadX?: string | null,
  contentPadY?: string | null,
  optionTitle?: PageOptionTitle | null,
  sideColumn?: PageSideColumn | null,
  sideColumnPadX?: string | null,
  sideColumnPadY?: string | null,
  sideColumnContent?: string | null,
  optionSideColumn?: PageOptionSideColumn | null,
  hideFooter?: boolean | null,
  hideInMenu?: boolean | null,
  createdAt?: string | null,
  search?: string | null,
  hideInSearch?: boolean | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateKitItemInput = {
  id?: string | null,
  productID: string,
  kitItemProductID: string,
};

export type ModelKitItemConditionInput = {
  productID?: ModelIDInput | null,
  kitItemProductID?: ModelIDInput | null,
  and?: Array< ModelKitItemConditionInput | null > | null,
  or?: Array< ModelKitItemConditionInput | null > | null,
  not?: ModelKitItemConditionInput | null,
};

export type DeleteKitItemInput = {
  id: string,
};

export type CreateOptionInput = {
  id?: string | null,
  productID: string,
  name?: string | null,
  price?: number | null,
};

export type ModelOptionConditionInput = {
  productID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelOptionConditionInput | null > | null,
  or?: Array< ModelOptionConditionInput | null > | null,
  not?: ModelOptionConditionInput | null,
};

export type UpdateOptionInput = {
  id: string,
  productID?: string | null,
  name?: string | null,
  price?: number | null,
};

export type DeleteOptionInput = {
  id: string,
};

export type DeleteCartInput = {
  id: string,
};

export type ModelCartConditionInput = {
  userID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  qty?: ModelIntInput | null,
  changeName?: ModelStringInput | null,
  changeDescription?: ModelStringInput | null,
  changeQtyBlend?: ModelIntInput | null,
  changePriceAdjustment?: ModelStringInput | null,
  blendID?: ModelIDInput | null,
  campaignToken?: ModelStringInput | null,
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
};

export type DeleteCartOptionInput = {
  id: string,
};

export type ModelCartOptionConditionInput = {
  cartID?: ModelIDInput | null,
  optionID?: ModelIDInput | null,
  and?: Array< ModelCartOptionConditionInput | null > | null,
  or?: Array< ModelCartOptionConditionInput | null > | null,
  not?: ModelCartOptionConditionInput | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelOrderConditionInput = {
  userID?: ModelIDInput | null,
  status?: ModelOrderStatusInput | null,
  createdAt?: ModelStringInput | null,
  couponID?: ModelIDInput | null,
  couponName?: ModelStringInput | null,
  couponDiscount?: ModelFloatInput | null,
  deliveryPrice?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  rating?: ModelIntInput | null,
  ratingNotes?: ModelStringInput | null,
  orderPagarmeID?: ModelStringInput | null,
  addressReference?: ModelStringInput | null,
  addressStreet?: ModelStringInput | null,
  addressNumber?: ModelStringInput | null,
  addressComplement?: ModelStringInput | null,
  addressZipcode?: ModelStringInput | null,
  addressNeighborhood?: ModelStringInput | null,
  addressCity?: ModelStringInput | null,
  addressState?: ModelStringInput | null,
  addressCountry?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  campaignID?: ModelIDInput | null,
  campaignName?: ModelStringInput | null,
  campaignOrientation?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  companyName?: ModelStringInput | null,
  companyPhone?: ModelStringInput | null,
  companyOpeningHours?: ModelStringInput | null,
  qrCodePix?: ModelStringInput | null,
  qrCodePixUrl?: ModelStringInput | null,
  payMethod?: ModelPaymentMethodsInput | null,
  installments?: ModelIntInput | null,
  homeCareOrRetail?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type CreateDeliveryMethodOrderInput = {
  id?: string | null,
  name?: string | null,
  zipCode?: Array< string | null > | null,
  price?: number | null,
};

export type ModelDeliveryMethodOrderConditionInput = {
  name?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelDeliveryMethodOrderConditionInput | null > | null,
  or?: Array< ModelDeliveryMethodOrderConditionInput | null > | null,
  not?: ModelDeliveryMethodOrderConditionInput | null,
};

export type DeliveryMethodOrder = {
  __typename: "DeliveryMethodOrder",
  id: string,
  name?: string | null,
  zipCode?: Array< string | null > | null,
  price?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDeliveryMethodOrderInput = {
  id: string,
  name?: string | null,
  zipCode?: Array< string | null > | null,
  price?: number | null,
};

export type DeleteDeliveryMethodOrderInput = {
  id: string,
};

export type UpdateNotifyInput = {
  id: string,
  userID?: string | null,
  createdAt?: string | null,
  content?: string | null,
  link?: string | null,
  viewed?: boolean | null,
};

export type ModelNotifyConditionInput = {
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  link?: ModelStringInput | null,
  viewed?: ModelBooleanInput | null,
  and?: Array< ModelNotifyConditionInput | null > | null,
  or?: Array< ModelNotifyConditionInput | null > | null,
  not?: ModelNotifyConditionInput | null,
};

export type Notify = {
  __typename: "Notify",
  id: string,
  userID: string,
  createdAt?: string | null,
  content?: string | null,
  link?: string | null,
  viewed?: boolean | null,
  updatedAt: string,
};

export type CreateCampaignInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  code: string,
  start?: string | null,
  expiration?: string | null,
  discountPercentage?: number | null,
  discountValue?: number | null,
  qtyLimit?: number | null,
  qtyUsed?: number | null,
  qtyProduct?: number | null,
  qtyProductUsed?: number | null,
  orientation?: string | null,
  orderMessage?: string | null,
  zipCodeCoverage?: Array< string | null > | null,
  search?: string | null,
};

export type ModelCampaignConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  code?: ModelStringInput | null,
  start?: ModelStringInput | null,
  expiration?: ModelStringInput | null,
  discountPercentage?: ModelIntInput | null,
  discountValue?: ModelFloatInput | null,
  qtyLimit?: ModelIntInput | null,
  qtyUsed?: ModelIntInput | null,
  qtyProduct?: ModelIntInput | null,
  qtyProductUsed?: ModelIntInput | null,
  orientation?: ModelStringInput | null,
  orderMessage?: ModelStringInput | null,
  zipCodeCoverage?: ModelStringInput | null,
  search?: ModelStringInput | null,
  and?: Array< ModelCampaignConditionInput | null > | null,
  or?: Array< ModelCampaignConditionInput | null > | null,
  not?: ModelCampaignConditionInput | null,
};

export type DeleteCampaignInput = {
  id: string,
};

export type CreateVaccinationCardInput = {
  id?: string | null,
  userID: string,
  person: string,
  doc?: string | null,
  birth?: string | null,
  relationship?: string | null,
  notes?: string | null,
  avatar?: string | null,
  isOwner?: boolean | null,
};

export type ModelVaccinationCardConditionInput = {
  userID?: ModelIDInput | null,
  person?: ModelStringInput | null,
  doc?: ModelStringInput | null,
  birth?: ModelStringInput | null,
  relationship?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  isOwner?: ModelBooleanInput | null,
  and?: Array< ModelVaccinationCardConditionInput | null > | null,
  or?: Array< ModelVaccinationCardConditionInput | null > | null,
  not?: ModelVaccinationCardConditionInput | null,
};

export type UpdateVaccinationCardInput = {
  id: string,
  userID?: string | null,
  person?: string | null,
  doc?: string | null,
  birth?: string | null,
  relationship?: string | null,
  notes?: string | null,
  avatar?: string | null,
  isOwner?: boolean | null,
};

export type DeleteVaccinationCardInput = {
  id: string,
};

export type UpdateVaccinationCardItemInput = {
  id: string,
  vaccinationCardID?: string | null,
  orderID?: string | null,
  orderItemID?: string | null,
  campaignID?: string | null,
  companyID?: string | null,
  lote?: string | null,
  profissionalID?: string | null,
  profissionalName?: string | null,
  coren?: string | null,
  dueDate?: string | null,
  via?: string | null,
  applicationDate?: string | null,
  status?: string | null,
};

export type ModelVaccinationCardItemConditionInput = {
  vaccinationCardID?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  orderItemID?: ModelIDInput | null,
  campaignID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  lote?: ModelStringInput | null,
  profissionalID?: ModelIDInput | null,
  profissionalName?: ModelStringInput | null,
  coren?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  via?: ModelStringInput | null,
  applicationDate?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelVaccinationCardItemConditionInput | null > | null,
  or?: Array< ModelVaccinationCardItemConditionInput | null > | null,
  not?: ModelVaccinationCardItemConditionInput | null,
};

export type DeleteVaccinationCardItemInput = {
  id: string,
};

export type CreateCompanyInput = {
  id?: string | null,
  cnpj: string,
  name: string,
  openingHours?: string | null,
  phones?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  search?: string | null,
  enableRetail?: string | null,
  schedulesSunday?: Array< string | null > | null,
  schedulesMonday?: Array< string | null > | null,
  schedulesTuesday?: Array< string | null > | null,
  schedulesWednesday?: Array< string | null > | null,
  schedulesThursday?: Array< string | null > | null,
  schedulesFriday?: Array< string | null > | null,
  schedulesSaturday?: Array< string | null > | null,
  status?: CompanyStatus | null,
};

export type ModelCompanyConditionInput = {
  cnpj?: ModelStringInput | null,
  name?: ModelStringInput | null,
  openingHours?: ModelStringInput | null,
  phones?: ModelStringInput | null,
  street?: ModelStringInput | null,
  number?: ModelStringInput | null,
  complement?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  search?: ModelStringInput | null,
  enableRetail?: ModelStringInput | null,
  schedulesSunday?: ModelStringInput | null,
  schedulesMonday?: ModelStringInput | null,
  schedulesTuesday?: ModelStringInput | null,
  schedulesWednesday?: ModelStringInput | null,
  schedulesThursday?: ModelStringInput | null,
  schedulesFriday?: ModelStringInput | null,
  schedulesSaturday?: ModelStringInput | null,
  status?: ModelCompanyStatusInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type ModelCompanyStatusInput = {
  eq?: CompanyStatus | null,
  ne?: CompanyStatus | null,
};

export type UpdateCompanyInput = {
  id: string,
  cnpj?: string | null,
  name?: string | null,
  openingHours?: string | null,
  phones?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  search?: string | null,
  enableRetail?: string | null,
  schedulesSunday?: Array< string | null > | null,
  schedulesMonday?: Array< string | null > | null,
  schedulesTuesday?: Array< string | null > | null,
  schedulesWednesday?: Array< string | null > | null,
  schedulesThursday?: Array< string | null > | null,
  schedulesFriday?: Array< string | null > | null,
  schedulesSaturday?: Array< string | null > | null,
  status?: CompanyStatus | null,
};

export type DeleteCompanyInput = {
  id: string,
};

export type CreateAuthorizationListInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  start?: string | null,
  expiration?: string | null,
  orientation?: string | null,
  search?: string | null,
  qtyApplication?: number | null,
  qtyReturned?: number | null,
  contactNameFinished?: string | null,
  contactPhoneFinished?: string | null,
  contactEmailFinished?: string | null,
  notesFinished?: string | null,
  professionalFinished?: string | null,
  withList?: boolean | null,
  campaignCode?: string | null,
  OS?: string | null,
  status?: AuthorizationListStatus | null,
};

export type ModelAuthorizationListConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  start?: ModelStringInput | null,
  expiration?: ModelStringInput | null,
  orientation?: ModelStringInput | null,
  search?: ModelStringInput | null,
  qtyApplication?: ModelIntInput | null,
  qtyReturned?: ModelIntInput | null,
  contactNameFinished?: ModelStringInput | null,
  contactPhoneFinished?: ModelStringInput | null,
  contactEmailFinished?: ModelStringInput | null,
  notesFinished?: ModelStringInput | null,
  professionalFinished?: ModelIDInput | null,
  withList?: ModelBooleanInput | null,
  campaignCode?: ModelStringInput | null,
  OS?: ModelStringInput | null,
  status?: ModelAuthorizationListStatusInput | null,
  and?: Array< ModelAuthorizationListConditionInput | null > | null,
  or?: Array< ModelAuthorizationListConditionInput | null > | null,
  not?: ModelAuthorizationListConditionInput | null,
};

export type ModelAuthorizationListStatusInput = {
  eq?: AuthorizationListStatus | null,
  ne?: AuthorizationListStatus | null,
};

export type UpdateAuthorizationListInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  start?: string | null,
  expiration?: string | null,
  orientation?: string | null,
  search?: string | null,
  qtyApplication?: number | null,
  qtyReturned?: number | null,
  contactNameFinished?: string | null,
  contactPhoneFinished?: string | null,
  contactEmailFinished?: string | null,
  notesFinished?: string | null,
  professionalFinished?: string | null,
  withList?: boolean | null,
  campaignCode?: string | null,
  OS?: string | null,
  status?: AuthorizationListStatus | null,
};

export type DeleteAuthorizationListInput = {
  id: string,
};

export type CreateAuthorizationListClosureInput = {
  id?: string | null,
  authorizationListID: string,
  contactName?: string | null,
  contactPhone?: string | null,
  contactEmail?: string | null,
  notes?: string | null,
  qtyApplication?: number | null,
  qtyReturned?: number | null,
  professionalID?: string | null,
  OS?: string | null,
  createdAt?: string | null,
};

export type ModelAuthorizationListClosureConditionInput = {
  authorizationListID?: ModelIDInput | null,
  contactName?: ModelStringInput | null,
  contactPhone?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  qtyApplication?: ModelIntInput | null,
  qtyReturned?: ModelIntInput | null,
  professionalID?: ModelIDInput | null,
  OS?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAuthorizationListClosureConditionInput | null > | null,
  or?: Array< ModelAuthorizationListClosureConditionInput | null > | null,
  not?: ModelAuthorizationListClosureConditionInput | null,
};

export type AuthorizationListClosure = {
  __typename: "AuthorizationListClosure",
  id: string,
  authorizationListID: string,
  contactName?: string | null,
  contactPhone?: string | null,
  contactEmail?: string | null,
  notes?: string | null,
  qtyApplication?: number | null,
  qtyReturned?: number | null,
  professionalID?: string | null,
  OS?: string | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type UpdateAuthorizationListClosureInput = {
  id: string,
  authorizationListID?: string | null,
  contactName?: string | null,
  contactPhone?: string | null,
  contactEmail?: string | null,
  notes?: string | null,
  qtyApplication?: number | null,
  qtyReturned?: number | null,
  professionalID?: string | null,
  OS?: string | null,
  createdAt?: string | null,
};

export type DeleteAuthorizationListClosureInput = {
  id: string,
};

export type CreateAuthorizationListMemberInput = {
  id?: string | null,
  authorizationListID: string,
  name: string,
  key?: string | null,
  cpf?: string | null,
  birth?: string | null,
  search?: string | null,
  others?: string | null,
};

export type ModelAuthorizationListMemberConditionInput = {
  authorizationListID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  key?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  birth?: ModelStringInput | null,
  search?: ModelStringInput | null,
  others?: ModelStringInput | null,
  and?: Array< ModelAuthorizationListMemberConditionInput | null > | null,
  or?: Array< ModelAuthorizationListMemberConditionInput | null > | null,
  not?: ModelAuthorizationListMemberConditionInput | null,
};

export type DeleteAuthorizationListMemberInput = {
  id: string,
};

export type CreateClientInput = {
  id?: string | null,
  name: string,
  notes?: string | null,
  status: ClientStatus,
  search?: string | null,
  code?: string | null,
};

export enum ClientStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
}


export type ModelClientConditionInput = {
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  status?: ModelClientStatusInput | null,
  search?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
};

export type ModelClientStatusInput = {
  eq?: ClientStatus | null,
  ne?: ClientStatus | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  name: string,
  notes?: string | null,
  status: ClientStatus,
  search?: string | null,
  code?: string | null,
  units?: ModelClientUnitConnection | null,
  eligibles?: ModelClientEligibleConnection | null,
  oss?: ModelOSConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelClientUnitConnection = {
  __typename: "ModelClientUnitConnection",
  items:  Array<ClientUnit | null >,
  nextToken?: string | null,
};

export type ClientUnit = {
  __typename: "ClientUnit",
  id: string,
  clientID: string,
  name?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  notes?: string | null,
  search?: string | null,
  contactName?: string | null,
  contactEmail?: string | null,
  contactPhone?: string | null,
  code?: string | null,
  oss?: ModelOSConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOSConnection = {
  __typename: "ModelOSConnection",
  items:  Array<OS | null >,
  nextToken?: string | null,
};

export type OS = {
  __typename: "OS",
  id: string,
  clientID: string,
  clientUnitID: string,
  driverID?: string | null,
  professionals: Array< string >,
  collaborators?: Array< string > | null,
  number: number,
  start?: string | null,
  expiration?: string | null,
  orientation?: string | null,
  notes?: string | null,
  status: OSStatus,
  allowOffList?: boolean | null,
  withList?: boolean | null,
  vaccination?: string | null,
  qtyApplication?: number | null,
  dateStarted?: string | null,
  dateFinished?: string | null,
  professionalStarted?: string | null,
  professionalFinished?: string | null,
  notesStarted?: string | null,
  notesFinished?: string | null,
  clientNameStarted?: string | null,
  clientNameFinished?: string | null,
  unitNameFinished?: string | null,
  contactNameFinished?: string | null,
  contactDocFinished?: string | null,
  contactCRMFinished?: string | null,
  contactEmailFinished?: string | null,
  stayVaccines?: boolean | null,
  stayQtd?: number | null,
  lat?: number | null,
  lng?: number | null,
  eligiblesVaccination?: ModelEligibleVaccinationConnection | null,
  client?: Client | null,
  clientUnit?: ClientUnit | null,
  createdAt: string,
  updatedAt: string,
};

export enum OSStatus {
  STANDBY = "STANDBY",
  STARTED = "STARTED",
  FINISHED = "FINISHED",
}


export type ModelEligibleVaccinationConnection = {
  __typename: "ModelEligibleVaccinationConnection",
  items:  Array<EligibleVaccination | null >,
  nextToken?: string | null,
};

export type EligibleVaccination = {
  __typename: "EligibleVaccination",
  id: string,
  clientEligibleID: string,
  clientEligible?: ClientEligible | null,
  profissionalID?: string | null,
  profissional?: User | null,
  coren?: string | null,
  applicationDate?: string | null,
  reason?: string | null,
  vaccination?: string | null,
  status?: EligibleVaccinationStatus | null,
  localCity?: string | null,
  localState?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ClientEligible = {
  __typename: "ClientEligible",
  id: string,
  clientID: string,
  key: string,
  name?: string | null,
  cpf?: string | null,
  rg?: string | null,
  birth?: string | null,
  notes?: string | null,
  search?: string | null,
  relationship?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum EligibleVaccinationStatus {
  CANCELED = "CANCELED",
  APPLIED = "APPLIED",
}


export type ModelClientEligibleConnection = {
  __typename: "ModelClientEligibleConnection",
  items:  Array<ClientEligible | null >,
  nextToken?: string | null,
};

export type UpdateClientInput = {
  id: string,
  name?: string | null,
  notes?: string | null,
  status?: ClientStatus | null,
  search?: string | null,
  code?: string | null,
};

export type DeleteClientInput = {
  id: string,
};

export type CreateClientUnitInput = {
  id?: string | null,
  clientID: string,
  name?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  notes?: string | null,
  search?: string | null,
  contactName?: string | null,
  contactEmail?: string | null,
  contactPhone?: string | null,
  code?: string | null,
};

export type ModelClientUnitConditionInput = {
  clientID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  street?: ModelStringInput | null,
  number?: ModelStringInput | null,
  complement?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  search?: ModelStringInput | null,
  contactName?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  contactPhone?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelClientUnitConditionInput | null > | null,
  or?: Array< ModelClientUnitConditionInput | null > | null,
  not?: ModelClientUnitConditionInput | null,
};

export type UpdateClientUnitInput = {
  id: string,
  clientID?: string | null,
  name?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  notes?: string | null,
  search?: string | null,
  contactName?: string | null,
  contactEmail?: string | null,
  contactPhone?: string | null,
  code?: string | null,
};

export type DeleteClientUnitInput = {
  id: string,
};

export type CreateClientEligibleInput = {
  id?: string | null,
  clientID: string,
  key: string,
  name?: string | null,
  cpf?: string | null,
  rg?: string | null,
  birth?: string | null,
  notes?: string | null,
  search?: string | null,
  relationship?: string | null,
};

export type ModelClientEligibleConditionInput = {
  clientID?: ModelIDInput | null,
  key?: ModelStringInput | null,
  name?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  rg?: ModelStringInput | null,
  birth?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  search?: ModelStringInput | null,
  relationship?: ModelStringInput | null,
  and?: Array< ModelClientEligibleConditionInput | null > | null,
  or?: Array< ModelClientEligibleConditionInput | null > | null,
  not?: ModelClientEligibleConditionInput | null,
};

export type UpdateClientEligibleInput = {
  id: string,
  clientID?: string | null,
  key?: string | null,
  name?: string | null,
  cpf?: string | null,
  rg?: string | null,
  birth?: string | null,
  notes?: string | null,
  search?: string | null,
  relationship?: string | null,
};

export type DeleteClientEligibleInput = {
  id: string,
};

export type CreateEligibleVaccinationInput = {
  id?: string | null,
  clientEligibleID: string,
  profissionalID?: string | null,
  coren?: string | null,
  applicationDate?: string | null,
  reason?: string | null,
  vaccination?: string | null,
  status?: EligibleVaccinationStatus | null,
  localCity?: string | null,
  localState?: string | null,
};

export type ModelEligibleVaccinationConditionInput = {
  clientEligibleID?: ModelIDInput | null,
  profissionalID?: ModelIDInput | null,
  coren?: ModelStringInput | null,
  applicationDate?: ModelStringInput | null,
  reason?: ModelStringInput | null,
  vaccination?: ModelStringInput | null,
  status?: ModelEligibleVaccinationStatusInput | null,
  localCity?: ModelStringInput | null,
  localState?: ModelStringInput | null,
  and?: Array< ModelEligibleVaccinationConditionInput | null > | null,
  or?: Array< ModelEligibleVaccinationConditionInput | null > | null,
  not?: ModelEligibleVaccinationConditionInput | null,
};

export type ModelEligibleVaccinationStatusInput = {
  eq?: EligibleVaccinationStatus | null,
  ne?: EligibleVaccinationStatus | null,
};

export type UpdateEligibleVaccinationInput = {
  id: string,
  clientEligibleID?: string | null,
  profissionalID?: string | null,
  coren?: string | null,
  applicationDate?: string | null,
  reason?: string | null,
  vaccination?: string | null,
  status?: EligibleVaccinationStatus | null,
  localCity?: string | null,
  localState?: string | null,
};

export type DeleteEligibleVaccinationInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email?: string | null,
  phone?: string | null,
  status?: UserStatus | null,
  active?: boolean | null,
  avatar?: string | null,
  search?: string | null,
  createdAt?: string | null,
};

export type CreateProfileInput = {
  userID: string,
  doc?: string | null,
  docType?: DocTypes | null,
  docProfessionType?: string | null,
  docProfession?: string | null,
  profession?: string | null,
  specialties?: string | null,
  subSpecialties?: string | null,
  bio?: string | null,
  gender?: GenderOptions | null,
  birth?: string | null,
  notes?: string | null,
  urlUserName?: string | null,
  urlEnable?: boolean | null,
  allowViewEmail?: boolean | null,
  allowViewPhone?: boolean | null,
  allowCookiesPreference?: boolean | null,
  allowCookiesStatistic?: boolean | null,
  pix?: string | null,
  zipCodeCoverage?: Array< string | null > | null,
  schedulesSunday?: Array< string | null > | null,
  schedulesMonday?: Array< string | null > | null,
  schedulesTuesday?: Array< string | null > | null,
  schedulesWednesday?: Array< string | null > | null,
  schedulesThursday?: Array< string | null > | null,
  schedulesFriday?: Array< string | null > | null,
  schedulesSaturday?: Array< string | null > | null,
  regionsConfig?: string | null,
  regionSunday?: string | null,
  regionMonday?: string | null,
  regionTuesday?: string | null,
  regionWednesday?: string | null,
  regionThursday?: string | null,
  regionFriday?: string | null,
  regionSaturday?: string | null,
  customerPagarmeID?: string | null,
  companyID?: string | null,
  companyHomeCare?: boolean | null,
  companyCampaign?: boolean | null,
  companyAdmin?: boolean | null,
};

export type CreateTempAuxInput = {
  id?: string | null,
  name?: string | null,
  doc?: string | null,
  birth?: string | null,
};

export type ModelTempAuxConditionInput = {
  name?: ModelStringInput | null,
  doc?: ModelStringInput | null,
  birth?: ModelStringInput | null,
  and?: Array< ModelTempAuxConditionInput | null > | null,
  or?: Array< ModelTempAuxConditionInput | null > | null,
  not?: ModelTempAuxConditionInput | null,
};

export type TempAux = {
  __typename: "TempAux",
  id: string,
  name?: string | null,
  doc?: string | null,
  birth?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type DeleteTempAuxInput = {
  id: string,
};

export type UpdateInviteInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  email?: string | null,
  phone?: string | null,
  groups?: Array< string | null > | null,
  status?: InviteStatus | null,
  createdAt?: string | null,
};

export type UpdateCouponInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  code?: string | null,
  start?: string | null,
  expiration?: string | null,
  discountPercentage?: number | null,
  discountValue?: number | null,
  qtyLimit?: number | null,
  qtyUsed?: number | null,
  qtyProduct?: number | null,
  qtyProductUsed?: number | null,
  search?: string | null,
};

export type CreateCouponProductInput = {
  id?: string | null,
  couponID: string,
  productID: string,
  price?: number | null,
  limit?: number | null,
};

export type ModelCouponProductConditionInput = {
  couponID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  limit?: ModelIntInput | null,
  and?: Array< ModelCouponProductConditionInput | null > | null,
  or?: Array< ModelCouponProductConditionInput | null > | null,
  not?: ModelCouponProductConditionInput | null,
};

export type UpdateCouponProductInput = {
  id: string,
  couponID?: string | null,
  productID?: string | null,
  price?: number | null,
  limit?: number | null,
};

export type DeleteCouponProductInput = {
  id: string,
};

export type CreateCouponUsedInput = {
  id?: string | null,
  couponID: string,
  userID: string,
  qty?: number | null,
};

export type ModelCouponUsedConditionInput = {
  couponID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  qty?: ModelIntInput | null,
  and?: Array< ModelCouponUsedConditionInput | null > | null,
  or?: Array< ModelCouponUsedConditionInput | null > | null,
  not?: ModelCouponUsedConditionInput | null,
};

export type CreateRelationInput = {
  id?: string | null,
  type: RelationTypes,
  mode: RelationModes,
  name?: string | null,
  description?: string | null,
  avatar?: string | null,
  reference?: string | null,
  members: Array< string >,
  admins: Array< string >,
  updatedAt?: string | null,
  status: RelationStatus,
  search?: string | null,
};

export type ModelRelationConditionInput = {
  type?: ModelRelationTypesInput | null,
  mode?: ModelRelationModesInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  members?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  status?: ModelRelationStatusInput | null,
  search?: ModelStringInput | null,
  and?: Array< ModelRelationConditionInput | null > | null,
  or?: Array< ModelRelationConditionInput | null > | null,
  not?: ModelRelationConditionInput | null,
};

export type UpdateRelationInput = {
  id: string,
  type?: RelationTypes | null,
  mode?: RelationModes | null,
  name?: string | null,
  description?: string | null,
  avatar?: string | null,
  reference?: string | null,
  members?: Array< string > | null,
  admins?: Array< string > | null,
  updatedAt?: string | null,
  status?: RelationStatus | null,
  search?: string | null,
};

export type DeleteRelationInput = {
  id: string,
};

export type CreateRelationLinkInput = {
  id?: string | null,
  userID: string,
  relationID: string,
  type: string,
  notify: number,
  updatedAt?: string | null,
  search?: string | null,
  percentage?: number | null,
};

export type ModelRelationLinkConditionInput = {
  userID?: ModelIDInput | null,
  relationID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  notify?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  search?: ModelStringInput | null,
  percentage?: ModelIntInput | null,
  and?: Array< ModelRelationLinkConditionInput | null > | null,
  or?: Array< ModelRelationLinkConditionInput | null > | null,
  not?: ModelRelationLinkConditionInput | null,
};

export type UpdateRelationLinkInput = {
  id: string,
  userID?: string | null,
  relationID?: string | null,
  type?: string | null,
  notify?: number | null,
  updatedAt?: string | null,
  search?: string | null,
  percentage?: number | null,
};

export type DeleteRelationLinkInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  relationID?: string | null,
  userID: string,
  type: MessagesTypes,
  content?: string | null,
  search?: string | null,
  identityId?: string | null,
  createdAt?: string | null,
  status?: string | null,
};

export type ModelMessageConditionInput = {
  relationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  type?: ModelMessagesTypesInput | null,
  content?: ModelStringInput | null,
  search?: ModelStringInput | null,
  identityId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreatePageInput = {
  id?: string | null,
  alias: string,
  status: PageStatus,
  type: PageType,
  menu: string,
  order: number,
  title: string,
  titlePadX?: string | null,
  titlePadY?: string | null,
  description?: string | null,
  content?: string | null,
  contentPadX?: string | null,
  contentPadY?: string | null,
  tags?: Array< string | null > | null,
  thumbnail?: string | null,
  thumbnailSrc?: string | null,
  thumbnailCropper?: string | null,
  changeFreq?: PageChangeFreq | null,
  priority?: PagePriority | null,
  optionTitle?: PageOptionTitle | null,
  sideColumn?: PageSideColumn | null,
  sideColumnPadX?: string | null,
  sideColumnPadY?: string | null,
  sideColumnContent?: string | null,
  optionSideColumn?: PageOptionSideColumn | null,
  hideFooter?: boolean | null,
  hideInMenu?: boolean | null,
  createdAt?: string | null,
  search?: string | null,
};

export type CreateCartInput = {
  id?: string | null,
  userID: string,
  productID: string,
  qty?: number | null,
  changeName?: string | null,
  changeDescription?: string | null,
  changeQtyBlend?: number | null,
  changePriceAdjustment?: string | null,
  blendID?: string | null,
  campaignToken?: string | null,
};

export type UpdateCartInput = {
  id: string,
  userID?: string | null,
  productID?: string | null,
  qty?: number | null,
  changeName?: string | null,
  changeDescription?: string | null,
  changeQtyBlend?: number | null,
  changePriceAdjustment?: string | null,
  blendID?: string | null,
  campaignToken?: string | null,
};

export type CreateCartOptionInput = {
  id?: string | null,
  cartID: string,
  optionID: string,
};

export type UpdateCartOptionInput = {
  id: string,
  cartID?: string | null,
  optionID?: string | null,
};

export type CreateOrderInput = {
  id?: string | null,
  userID: string,
  status: OrderStatus,
  createdAt?: string | null,
  couponID?: string | null,
  couponName?: string | null,
  couponDiscount?: number | null,
  deliveryPrice?: number | null,
  total?: number | null,
  rating?: number | null,
  ratingNotes?: string | null,
  orderPagarmeID?: string | null,
  addressReference?: string | null,
  addressStreet?: string | null,
  addressNumber?: string | null,
  addressComplement?: string | null,
  addressZipcode?: string | null,
  addressNeighborhood?: string | null,
  addressCity?: string | null,
  addressState?: string | null,
  addressCountry?: string | null,
  notes?: string | null,
  campaignID?: string | null,
  campaignName?: string | null,
  campaignOrientation?: string | null,
  companyID?: string | null,
  companyName?: string | null,
  companyPhone?: string | null,
  companyOpeningHours?: string | null,
  qrCodePix?: string | null,
  qrCodePixUrl?: string | null,
  payMethod?: PaymentMethods | null,
  installments?: number | null,
  homeCareOrRetail?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  userID?: string | null,
  status?: OrderStatus | null,
  createdAt?: string | null,
  couponID?: string | null,
  couponName?: string | null,
  couponDiscount?: number | null,
  deliveryPrice?: number | null,
  total?: number | null,
  rating?: number | null,
  ratingNotes?: string | null,
  orderPagarmeID?: string | null,
  addressReference?: string | null,
  addressStreet?: string | null,
  addressNumber?: string | null,
  addressComplement?: string | null,
  addressZipcode?: string | null,
  addressNeighborhood?: string | null,
  addressCity?: string | null,
  addressState?: string | null,
  addressCountry?: string | null,
  notes?: string | null,
  campaignID?: string | null,
  campaignName?: string | null,
  campaignOrientation?: string | null,
  companyID?: string | null,
  companyName?: string | null,
  companyPhone?: string | null,
  companyOpeningHours?: string | null,
  qrCodePix?: string | null,
  qrCodePixUrl?: string | null,
  payMethod?: PaymentMethods | null,
  installments?: number | null,
  homeCareOrRetail?: string | null,
};

export type CreateOrderItemInput = {
  id?: string | null,
  orderID: string,
  productID: string,
  qty: number,
  code?: string | null,
  name: string,
  description?: string | null,
  price: number,
  photo1?: string | null,
  changeName?: string | null,
  changeDescription?: string | null,
  changeQtyBlend?: number | null,
  changePriceAdjustment?: string | null,
  blendID?: string | null,
  changeNameAdmin?: string | null,
};

export type ModelOrderItemConditionInput = {
  orderID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  qty?: ModelIntInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  photo1?: ModelStringInput | null,
  changeName?: ModelStringInput | null,
  changeDescription?: ModelStringInput | null,
  changeQtyBlend?: ModelIntInput | null,
  changePriceAdjustment?: ModelStringInput | null,
  blendID?: ModelIDInput | null,
  changeNameAdmin?: ModelStringInput | null,
  and?: Array< ModelOrderItemConditionInput | null > | null,
  or?: Array< ModelOrderItemConditionInput | null > | null,
  not?: ModelOrderItemConditionInput | null,
};

export type UpdateOrderItemInput = {
  id: string,
  orderID?: string | null,
  productID?: string | null,
  qty?: number | null,
  code?: string | null,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  photo1?: string | null,
  changeName?: string | null,
  changeDescription?: string | null,
  changeQtyBlend?: number | null,
  changePriceAdjustment?: string | null,
  blendID?: string | null,
  changeNameAdmin?: string | null,
};

export type DeleteOrderItemInput = {
  id: string,
};

export type CreateOrderItemOptionInput = {
  id?: string | null,
  orderItemID: string,
  optionID: string,
};

export type ModelOrderItemOptionConditionInput = {
  orderItemID?: ModelIDInput | null,
  optionID?: ModelIDInput | null,
  and?: Array< ModelOrderItemOptionConditionInput | null > | null,
  or?: Array< ModelOrderItemOptionConditionInput | null > | null,
  not?: ModelOrderItemOptionConditionInput | null,
};

export type UpdateOrderItemOptionInput = {
  id: string,
  orderItemID?: string | null,
  optionID?: string | null,
};

export type DeleteOrderItemOptionInput = {
  id: string,
};

export type CreateDeliveryOrderInput = {
  id?: string | null,
  orderID: string,
  date: string,
  deliveryUserID?: string | null,
  deliveryCompanyID?: string | null,
  status: DeliveryStatus,
};

export type ModelDeliveryOrderConditionInput = {
  orderID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  deliveryUserID?: ModelIDInput | null,
  deliveryCompanyID?: ModelIDInput | null,
  status?: ModelDeliveryStatusInput | null,
  and?: Array< ModelDeliveryOrderConditionInput | null > | null,
  or?: Array< ModelDeliveryOrderConditionInput | null > | null,
  not?: ModelDeliveryOrderConditionInput | null,
};

export type UpdateDeliveryOrderInput = {
  id: string,
  orderID?: string | null,
  date?: string | null,
  deliveryUserID?: string | null,
  deliveryCompanyID?: string | null,
  status?: DeliveryStatus | null,
};

export type DeleteDeliveryOrderInput = {
  id: string,
};

export type CreateNotifyInput = {
  id?: string | null,
  userID: string,
  createdAt?: string | null,
  content?: string | null,
  link?: string | null,
  viewed?: boolean | null,
};

export type DeleteNotifyInput = {
  id: string,
};

export type UpdateCampaignInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  code?: string | null,
  start?: string | null,
  expiration?: string | null,
  discountPercentage?: number | null,
  discountValue?: number | null,
  qtyLimit?: number | null,
  qtyUsed?: number | null,
  qtyProduct?: number | null,
  qtyProductUsed?: number | null,
  orientation?: string | null,
  orderMessage?: string | null,
  zipCodeCoverage?: Array< string | null > | null,
  search?: string | null,
};

export type CreateCampaignUsedInput = {
  id?: string | null,
  campaignID: string,
  userID: string,
  qty?: number | null,
};

export type ModelCampaignUsedConditionInput = {
  campaignID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  qty?: ModelIntInput | null,
  and?: Array< ModelCampaignUsedConditionInput | null > | null,
  or?: Array< ModelCampaignUsedConditionInput | null > | null,
  not?: ModelCampaignUsedConditionInput | null,
};

export type CreateCampaignProductInput = {
  id?: string | null,
  campaignID: string,
  productID: string,
  price?: number | null,
  limit?: number | null,
};

export type ModelCampaignProductConditionInput = {
  campaignID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  limit?: ModelIntInput | null,
  and?: Array< ModelCampaignProductConditionInput | null > | null,
  or?: Array< ModelCampaignProductConditionInput | null > | null,
  not?: ModelCampaignProductConditionInput | null,
};

export type UpdateCampaignProductInput = {
  id: string,
  campaignID?: string | null,
  productID?: string | null,
  price?: number | null,
  limit?: number | null,
};

export type DeleteCampaignProductInput = {
  id: string,
};

export type CreateCampaignCompanyInput = {
  id?: string | null,
  campaignID: string,
  companyID: string,
};

export type ModelCampaignCompanyConditionInput = {
  campaignID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  and?: Array< ModelCampaignCompanyConditionInput | null > | null,
  or?: Array< ModelCampaignCompanyConditionInput | null > | null,
  not?: ModelCampaignCompanyConditionInput | null,
};

export type UpdateCampaignCompanyInput = {
  id: string,
  campaignID?: string | null,
  companyID?: string | null,
};

export type DeleteCampaignCompanyInput = {
  id: string,
};

export type CreateVaccinationCardItemInput = {
  id?: string | null,
  vaccinationCardID: string,
  orderID: string,
  orderItemID: string,
  campaignID?: string | null,
  companyID?: string | null,
  lote?: string | null,
  profissionalID?: string | null,
  profissionalName?: string | null,
  coren?: string | null,
  dueDate?: string | null,
  via?: string | null,
  applicationDate?: string | null,
  status?: string | null,
};

export type UpdateAuthorizationListMemberInput = {
  id: string,
  authorizationListID?: string | null,
  name?: string | null,
  key?: string | null,
  cpf?: string | null,
  birth?: string | null,
  search?: string | null,
  others?: string | null,
};

export type CreateAuthorizationListMemberVaccinationInput = {
  id?: string | null,
  authorizationListID: string,
  authorizationListMemberID: string,
  profissionalID?: string | null,
  coren?: string | null,
  lote?: string | null,
  dueDate?: string | null,
  via?: string | null,
  OS?: string | null,
  applicationDate?: string | null,
  applicationTime?: string | null,
};

export type ModelAuthorizationListMemberVaccinationConditionInput = {
  authorizationListID?: ModelIDInput | null,
  authorizationListMemberID?: ModelIDInput | null,
  profissionalID?: ModelIDInput | null,
  coren?: ModelStringInput | null,
  lote?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  via?: ModelStringInput | null,
  OS?: ModelStringInput | null,
  applicationDate?: ModelStringInput | null,
  applicationTime?: ModelStringInput | null,
  and?: Array< ModelAuthorizationListMemberVaccinationConditionInput | null > | null,
  or?: Array< ModelAuthorizationListMemberVaccinationConditionInput | null > | null,
  not?: ModelAuthorizationListMemberVaccinationConditionInput | null,
};

export type UpdateAuthorizationListMemberVaccinationInput = {
  id: string,
  authorizationListID?: string | null,
  authorizationListMemberID?: string | null,
  profissionalID?: string | null,
  coren?: string | null,
  lote?: string | null,
  dueDate?: string | null,
  via?: string | null,
  OS?: string | null,
  applicationDate?: string | null,
  applicationTime?: string | null,
};

export type DeleteAuthorizationListMemberVaccinationInput = {
  id: string,
};

export type CreateCounterInput = {
  id?: string | null,
  qty: number,
};

export type ModelCounterConditionInput = {
  qty?: ModelIntInput | null,
  and?: Array< ModelCounterConditionInput | null > | null,
  or?: Array< ModelCounterConditionInput | null > | null,
  not?: ModelCounterConditionInput | null,
};

export type Counter = {
  __typename: "Counter",
  id: string,
  qty: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCounterInput = {
  id: string,
  qty?: number | null,
};

export type DeleteCounterInput = {
  id: string,
};

export type CreateClientUserInput = {
  id?: string | null,
  userID: string,
  clientID: string,
};

export type ModelClientUserConditionInput = {
  userID?: ModelIDInput | null,
  clientID?: ModelIDInput | null,
  and?: Array< ModelClientUserConditionInput | null > | null,
  or?: Array< ModelClientUserConditionInput | null > | null,
  not?: ModelClientUserConditionInput | null,
};

export type ClientUser = {
  __typename: "ClientUser",
  id: string,
  userID: string,
  user?: User | null,
  clientID: string,
  client?: Client | null,
  createdAt: string,
  updatedAt: string,
};

export type DeleteClientUserInput = {
  id: string,
};

export type CreateOSInput = {
  id?: string | null,
  clientID: string,
  clientUnitID: string,
  driverID?: string | null,
  professionals: Array< string >,
  collaborators?: Array< string > | null,
  number: number,
  start?: string | null,
  expiration?: string | null,
  orientation?: string | null,
  notes?: string | null,
  status: OSStatus,
  allowOffList?: boolean | null,
  withList?: boolean | null,
  vaccination?: string | null,
  qtyApplication?: number | null,
  dateStarted?: string | null,
  dateFinished?: string | null,
  professionalStarted?: string | null,
  professionalFinished?: string | null,
  notesStarted?: string | null,
  notesFinished?: string | null,
  clientNameStarted?: string | null,
  clientNameFinished?: string | null,
  unitNameFinished?: string | null,
  contactNameFinished?: string | null,
  contactDocFinished?: string | null,
  contactCRMFinished?: string | null,
  contactEmailFinished?: string | null,
  stayVaccines?: boolean | null,
  stayQtd?: number | null,
  lat?: number | null,
  lng?: number | null,
};

export type ModelOSConditionInput = {
  clientID?: ModelIDInput | null,
  clientUnitID?: ModelIDInput | null,
  driverID?: ModelIDInput | null,
  professionals?: ModelIDInput | null,
  collaborators?: ModelIDInput | null,
  number?: ModelIntInput | null,
  start?: ModelStringInput | null,
  expiration?: ModelStringInput | null,
  orientation?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  status?: ModelOSStatusInput | null,
  allowOffList?: ModelBooleanInput | null,
  withList?: ModelBooleanInput | null,
  vaccination?: ModelStringInput | null,
  qtyApplication?: ModelIntInput | null,
  dateStarted?: ModelStringInput | null,
  dateFinished?: ModelStringInput | null,
  professionalStarted?: ModelIDInput | null,
  professionalFinished?: ModelIDInput | null,
  notesStarted?: ModelStringInput | null,
  notesFinished?: ModelStringInput | null,
  clientNameStarted?: ModelStringInput | null,
  clientNameFinished?: ModelStringInput | null,
  unitNameFinished?: ModelStringInput | null,
  contactNameFinished?: ModelStringInput | null,
  contactDocFinished?: ModelStringInput | null,
  contactCRMFinished?: ModelStringInput | null,
  contactEmailFinished?: ModelStringInput | null,
  stayVaccines?: ModelBooleanInput | null,
  stayQtd?: ModelIntInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  and?: Array< ModelOSConditionInput | null > | null,
  or?: Array< ModelOSConditionInput | null > | null,
  not?: ModelOSConditionInput | null,
};

export type ModelOSStatusInput = {
  eq?: OSStatus | null,
  ne?: OSStatus | null,
};

export type UpdateOSInput = {
  id: string,
  clientID?: string | null,
  clientUnitID?: string | null,
  driverID?: string | null,
  professionals?: Array< string > | null,
  collaborators?: Array< string > | null,
  number?: number | null,
  start?: string | null,
  expiration?: string | null,
  orientation?: string | null,
  notes?: string | null,
  status?: OSStatus | null,
  allowOffList?: boolean | null,
  withList?: boolean | null,
  vaccination?: string | null,
  qtyApplication?: number | null,
  dateStarted?: string | null,
  dateFinished?: string | null,
  professionalStarted?: string | null,
  professionalFinished?: string | null,
  notesStarted?: string | null,
  notesFinished?: string | null,
  clientNameStarted?: string | null,
  clientNameFinished?: string | null,
  unitNameFinished?: string | null,
  contactNameFinished?: string | null,
  contactDocFinished?: string | null,
  contactCRMFinished?: string | null,
  contactEmailFinished?: string | null,
  stayVaccines?: boolean | null,
  stayQtd?: number | null,
  lat?: number | null,
  lng?: number | null,
};

export type DeleteOSInput = {
  id: string,
};

export type ModelFolderFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelFolderFilterInput | null > | null,
  or?: Array< ModelFolderFilterInput | null > | null,
  not?: ModelFolderFilterInput | null,
};

export type ModelFolderConnection = {
  __typename: "ModelFolderConnection",
  items:  Array<Folder | null >,
  nextToken?: string | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  street?: ModelStringInput | null,
  number?: ModelStringInput | null,
  complement?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  addressPagarmeID?: ModelStringInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelPayMethodFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  method?: ModelPaymentMethodsInput | null,
  number?: ModelStringInput | null,
  holderName?: ModelStringInput | null,
  holderDocument?: ModelStringInput | null,
  expMonth?: ModelIntInput | null,
  expYear?: ModelIntInput | null,
  cvv?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  label?: ModelStringInput | null,
  cardPagarmeID?: ModelStringInput | null,
  and?: Array< ModelPayMethodFilterInput | null > | null,
  or?: Array< ModelPayMethodFilterInput | null > | null,
  not?: ModelPayMethodFilterInput | null,
};

export type ModelNotifyFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  link?: ModelStringInput | null,
  viewed?: ModelBooleanInput | null,
  and?: Array< ModelNotifyFilterInput | null > | null,
  or?: Array< ModelNotifyFilterInput | null > | null,
  not?: ModelNotifyFilterInput | null,
};

export type ModelNotifyConnection = {
  __typename: "ModelNotifyConnection",
  items:  Array<Notify | null >,
  nextToken?: string | null,
};

export type ModelInviteFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  status?: ModelInviteStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelInviteFilterInput | null > | null,
  or?: Array< ModelInviteFilterInput | null > | null,
  not?: ModelInviteFilterInput | null,
};

export type ModelInviteConnection = {
  __typename: "ModelInviteConnection",
  items:  Array<Invite | null >,
  nextToken?: string | null,
};

export type ModelCouponProductFilterInput = {
  id?: ModelIDInput | null,
  couponID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  limit?: ModelIntInput | null,
  and?: Array< ModelCouponProductFilterInput | null > | null,
  or?: Array< ModelCouponProductFilterInput | null > | null,
  not?: ModelCouponProductFilterInput | null,
};

export type ModelMidiaFilterInput = {
  id?: ModelIDInput | null,
  key?: ModelStringInput | null,
  type?: ModelMidiaTypesInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  identifyText?: ModelStringInput | null,
  and?: Array< ModelMidiaFilterInput | null > | null,
  or?: Array< ModelMidiaFilterInput | null > | null,
  not?: ModelMidiaFilterInput | null,
};

export type ModelMidiaConnection = {
  __typename: "ModelMidiaConnection",
  items:  Array<Midia | null >,
  nextToken?: string | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  alias?: ModelStringInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  orderDesc?: ModelBooleanInput | null,
  thumbnail?: ModelStringInput | null,
  thumbnailSrc?: ModelStringInput | null,
  thumbnailCropper?: ModelStringInput | null,
  showDescriptionPage?: ModelStringInput | null,
  showThumbnailPage?: ModelStringInput | null,
  hide?: ModelBooleanInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBlockFilterInput = {
  id?: ModelIDInput | null,
  pageID?: ModelIDInput | null,
  order?: ModelIntInput | null,
  component?: ModelStringInput | null,
  content?: ModelStringInput | null,
  config?: ModelStringInput | null,
  and?: Array< ModelBlockFilterInput | null > | null,
  or?: Array< ModelBlockFilterInput | null > | null,
  not?: ModelBlockFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  alias?: ModelStringInput | null,
  order?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  thumbnailSrc?: ModelStringInput | null,
  thumbnailCropper?: ModelStringInput | null,
  hide?: ModelBooleanInput | null,
  isSub?: ModelBooleanInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelKitItemFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  kitItemProductID?: ModelIDInput | null,
  and?: Array< ModelKitItemFilterInput | null > | null,
  or?: Array< ModelKitItemFilterInput | null > | null,
  not?: ModelKitItemFilterInput | null,
};

export type ModelOptionFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelOptionFilterInput | null > | null,
  or?: Array< ModelOptionFilterInput | null > | null,
  not?: ModelOptionFilterInput | null,
};

export type ModelCartOptionFilterInput = {
  id?: ModelIDInput | null,
  cartID?: ModelIDInput | null,
  optionID?: ModelIDInput | null,
  and?: Array< ModelCartOptionFilterInput | null > | null,
  or?: Array< ModelCartOptionFilterInput | null > | null,
  not?: ModelCartOptionFilterInput | null,
};

export type ModelOrderOrdersByUserStatusCreatedAtCompositeKeyConditionInput = {
  eq?: ModelOrderOrdersByUserStatusCreatedAtCompositeKeyInput | null,
  le?: ModelOrderOrdersByUserStatusCreatedAtCompositeKeyInput | null,
  lt?: ModelOrderOrdersByUserStatusCreatedAtCompositeKeyInput | null,
  ge?: ModelOrderOrdersByUserStatusCreatedAtCompositeKeyInput | null,
  gt?: ModelOrderOrdersByUserStatusCreatedAtCompositeKeyInput | null,
  between?: Array< ModelOrderOrdersByUserStatusCreatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelOrderOrdersByUserStatusCreatedAtCompositeKeyInput | null,
};

export type ModelOrderOrdersByUserStatusCreatedAtCompositeKeyInput = {
  status?: OrderStatus | null,
  createdAt?: string | null,
};

export type ModelOrderItemFilterInput = {
  id?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  qty?: ModelIntInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  photo1?: ModelStringInput | null,
  changeName?: ModelStringInput | null,
  changeDescription?: ModelStringInput | null,
  changeQtyBlend?: ModelIntInput | null,
  changePriceAdjustment?: ModelStringInput | null,
  blendID?: ModelIDInput | null,
  changeNameAdmin?: ModelStringInput | null,
  and?: Array< ModelOrderItemFilterInput | null > | null,
  or?: Array< ModelOrderItemFilterInput | null > | null,
  not?: ModelOrderItemFilterInput | null,
};

export type ModelOrderItemOptionFilterInput = {
  id?: ModelIDInput | null,
  orderItemID?: ModelIDInput | null,
  optionID?: ModelIDInput | null,
  and?: Array< ModelOrderItemOptionFilterInput | null > | null,
  or?: Array< ModelOrderItemOptionFilterInput | null > | null,
  not?: ModelOrderItemOptionFilterInput | null,
};

export type ModelDeliveryMethodOrderFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelDeliveryMethodOrderFilterInput | null > | null,
  or?: Array< ModelDeliveryMethodOrderFilterInput | null > | null,
  not?: ModelDeliveryMethodOrderFilterInput | null,
};

export type ModelDeliveryMethodOrderConnection = {
  __typename: "ModelDeliveryMethodOrderConnection",
  items:  Array<DeliveryMethodOrder | null >,
  nextToken?: string | null,
};

export type ModelCampaignProductFilterInput = {
  id?: ModelIDInput | null,
  campaignID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  limit?: ModelIntInput | null,
  and?: Array< ModelCampaignProductFilterInput | null > | null,
  or?: Array< ModelCampaignProductFilterInput | null > | null,
  not?: ModelCampaignProductFilterInput | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  cnpj?: ModelStringInput | null,
  name?: ModelStringInput | null,
  openingHours?: ModelStringInput | null,
  phones?: ModelStringInput | null,
  street?: ModelStringInput | null,
  number?: ModelStringInput | null,
  complement?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  search?: ModelStringInput | null,
  enableRetail?: ModelStringInput | null,
  schedulesSunday?: ModelStringInput | null,
  schedulesMonday?: ModelStringInput | null,
  schedulesTuesday?: ModelStringInput | null,
  schedulesWednesday?: ModelStringInput | null,
  schedulesThursday?: ModelStringInput | null,
  schedulesFriday?: ModelStringInput | null,
  schedulesSaturday?: ModelStringInput | null,
  status?: ModelCompanyStatusInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
};

export type ModelAuthorizationListFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  start?: ModelStringInput | null,
  expiration?: ModelStringInput | null,
  orientation?: ModelStringInput | null,
  search?: ModelStringInput | null,
  qtyApplication?: ModelIntInput | null,
  qtyReturned?: ModelIntInput | null,
  contactNameFinished?: ModelStringInput | null,
  contactPhoneFinished?: ModelStringInput | null,
  contactEmailFinished?: ModelStringInput | null,
  notesFinished?: ModelStringInput | null,
  professionalFinished?: ModelIDInput | null,
  withList?: ModelBooleanInput | null,
  campaignCode?: ModelStringInput | null,
  OS?: ModelStringInput | null,
  status?: ModelAuthorizationListStatusInput | null,
  and?: Array< ModelAuthorizationListFilterInput | null > | null,
  or?: Array< ModelAuthorizationListFilterInput | null > | null,
  not?: ModelAuthorizationListFilterInput | null,
};

export type ModelAuthorizationListConnection = {
  __typename: "ModelAuthorizationListConnection",
  items:  Array<AuthorizationList | null >,
  nextToken?: string | null,
};

export type ModelAuthorizationListClosureFilterInput = {
  id?: ModelIDInput | null,
  authorizationListID?: ModelIDInput | null,
  contactName?: ModelStringInput | null,
  contactPhone?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  qtyApplication?: ModelIntInput | null,
  qtyReturned?: ModelIntInput | null,
  professionalID?: ModelIDInput | null,
  OS?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAuthorizationListClosureFilterInput | null > | null,
  or?: Array< ModelAuthorizationListClosureFilterInput | null > | null,
  not?: ModelAuthorizationListClosureFilterInput | null,
};

export type ModelAuthorizationListClosureConnection = {
  __typename: "ModelAuthorizationListClosureConnection",
  items:  Array<AuthorizationListClosure | null >,
  nextToken?: string | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  status?: ModelClientStatusInput | null,
  search?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items:  Array<Client | null >,
  nextToken?: string | null,
};

export type ModelClientUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  clientID?: ModelIDInput | null,
  and?: Array< ModelClientUserFilterInput | null > | null,
  or?: Array< ModelClientUserFilterInput | null > | null,
  not?: ModelClientUserFilterInput | null,
};

export type ModelClientUserConnection = {
  __typename: "ModelClientUserConnection",
  items:  Array<ClientUser | null >,
  nextToken?: string | null,
};

export type ModelClientUnitFilterInput = {
  id?: ModelIDInput | null,
  clientID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  street?: ModelStringInput | null,
  number?: ModelStringInput | null,
  complement?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  search?: ModelStringInput | null,
  contactName?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  contactPhone?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelClientUnitFilterInput | null > | null,
  or?: Array< ModelClientUnitFilterInput | null > | null,
  not?: ModelClientUnitFilterInput | null,
};

export type ModelClientEligibleFilterInput = {
  id?: ModelIDInput | null,
  clientID?: ModelIDInput | null,
  key?: ModelStringInput | null,
  name?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  rg?: ModelStringInput | null,
  birth?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  search?: ModelStringInput | null,
  relationship?: ModelStringInput | null,
  and?: Array< ModelClientEligibleFilterInput | null > | null,
  or?: Array< ModelClientEligibleFilterInput | null > | null,
  not?: ModelClientEligibleFilterInput | null,
};

export type ModelOSFilterInput = {
  id?: ModelIDInput | null,
  clientID?: ModelIDInput | null,
  clientUnitID?: ModelIDInput | null,
  driverID?: ModelIDInput | null,
  professionals?: ModelIDInput | null,
  collaborators?: ModelIDInput | null,
  number?: ModelIntInput | null,
  start?: ModelStringInput | null,
  expiration?: ModelStringInput | null,
  orientation?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  status?: ModelOSStatusInput | null,
  allowOffList?: ModelBooleanInput | null,
  withList?: ModelBooleanInput | null,
  vaccination?: ModelStringInput | null,
  qtyApplication?: ModelIntInput | null,
  dateStarted?: ModelStringInput | null,
  dateFinished?: ModelStringInput | null,
  professionalStarted?: ModelIDInput | null,
  professionalFinished?: ModelIDInput | null,
  notesStarted?: ModelStringInput | null,
  notesFinished?: ModelStringInput | null,
  clientNameStarted?: ModelStringInput | null,
  clientNameFinished?: ModelStringInput | null,
  unitNameFinished?: ModelStringInput | null,
  contactNameFinished?: ModelStringInput | null,
  contactDocFinished?: ModelStringInput | null,
  contactCRMFinished?: ModelStringInput | null,
  contactEmailFinished?: ModelStringInput | null,
  stayVaccines?: ModelBooleanInput | null,
  stayQtd?: ModelIntInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  and?: Array< ModelOSFilterInput | null > | null,
  or?: Array< ModelOSFilterInput | null > | null,
  not?: ModelOSFilterInput | null,
};

export type ModelEligibleVaccinationFilterInput = {
  id?: ModelIDInput | null,
  clientEligibleID?: ModelIDInput | null,
  profissionalID?: ModelIDInput | null,
  coren?: ModelStringInput | null,
  applicationDate?: ModelStringInput | null,
  reason?: ModelStringInput | null,
  vaccination?: ModelStringInput | null,
  status?: ModelEligibleVaccinationStatusInput | null,
  localCity?: ModelStringInput | null,
  localState?: ModelStringInput | null,
  and?: Array< ModelEligibleVaccinationFilterInput | null > | null,
  or?: Array< ModelEligibleVaccinationFilterInput | null > | null,
  not?: ModelEligibleVaccinationFilterInput | null,
};

export type ModelSubscriptionCartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productID?: ModelSubscriptionIDInput | null,
  qty?: ModelSubscriptionIntInput | null,
  changeName?: ModelSubscriptionStringInput | null,
  changeDescription?: ModelSubscriptionStringInput | null,
  changeQtyBlend?: ModelSubscriptionIntInput | null,
  changePriceAdjustment?: ModelSubscriptionStringInput | null,
  blendID?: ModelSubscriptionIDInput | null,
  campaignToken?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  couponID?: ModelSubscriptionIDInput | null,
  couponName?: ModelSubscriptionStringInput | null,
  couponDiscount?: ModelSubscriptionFloatInput | null,
  deliveryPrice?: ModelSubscriptionFloatInput | null,
  total?: ModelSubscriptionFloatInput | null,
  rating?: ModelSubscriptionIntInput | null,
  ratingNotes?: ModelSubscriptionStringInput | null,
  orderPagarmeID?: ModelSubscriptionStringInput | null,
  addressReference?: ModelSubscriptionStringInput | null,
  addressStreet?: ModelSubscriptionStringInput | null,
  addressNumber?: ModelSubscriptionStringInput | null,
  addressComplement?: ModelSubscriptionStringInput | null,
  addressZipcode?: ModelSubscriptionStringInput | null,
  addressNeighborhood?: ModelSubscriptionStringInput | null,
  addressCity?: ModelSubscriptionStringInput | null,
  addressState?: ModelSubscriptionStringInput | null,
  addressCountry?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  campaignID?: ModelSubscriptionIDInput | null,
  campaignName?: ModelSubscriptionStringInput | null,
  campaignOrientation?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  companyName?: ModelSubscriptionStringInput | null,
  companyPhone?: ModelSubscriptionStringInput | null,
  companyOpeningHours?: ModelSubscriptionStringInput | null,
  qrCodePix?: ModelSubscriptionStringInput | null,
  qrCodePixUrl?: ModelSubscriptionStringInput | null,
  payMethod?: ModelSubscriptionStringInput | null,
  installments?: ModelSubscriptionIntInput | null,
  homeCareOrRetail?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type GetUserCustomQueryVariables = {
  id: string,
};

export type GetUserCustomQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    status?: UserStatus | null,
    active?: boolean | null,
    avatar?: string | null,
    profile?:  {
      __typename: "Profile",
      doc?: string | null,
      docType?: DocTypes | null,
      docProfession?: string | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      customerPagarmeID?: string | null,
      birth?: string | null,
      company?:  {
        __typename: "Company",
        id: string,
        name: string,
      } | null,
    } | null,
  } | null,
};

export type ListRelationsByTypeUpdatedAtCustomQueryVariables = {
  type: RelationTypes,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsByTypeUpdatedAtCustomQuery = {
  listRelationsByTypeUpdatedAt?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
      relationsLink?:  {
        __typename: "ModelRelationLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsByTypeModeUpdatedAtCustomQueryVariables = {
  type: RelationTypes,
  modeUpdatedAt?: ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsByTypeModeUpdatedAtCustomQuery = {
  listRelationsByTypeModeUpdatedAt?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
      relationsLink?:  {
        __typename: "ModelRelationLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRelationCustomQueryVariables = {
  id: string,
};

export type GetRelationCustomQuery = {
  getRelation?:  {
    __typename: "Relation",
    id: string,
    type: RelationTypes,
    mode: RelationModes,
    name?: string | null,
    description?: string | null,
    avatar?: string | null,
    reference?: string | null,
    members: Array< string >,
    admins: Array< string >,
    updatedAt?: string | null,
    status: RelationStatus,
    createdAt: string,
  } | null,
};

export type ListRelationsByTypeStatusUpdatedAtCustomQueryVariables = {
  type: RelationTypes,
  statusUpdatedAt?: ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsByTypeStatusUpdatedAtCustomQuery = {
  listRelationsByTypeStatusUpdatedAt?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      createdAt: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          content?: string | null,
          createdAt?: string | null,
          id: string,
          type: MessagesTypes,
          userID: string,
          user?:  {
            __typename: "User",
            id: string,
            email?: string | null,
            name: string,
            phone?: string | null,
          } | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      relationsLink?:  {
        __typename: "ModelRelationLinkConnection",
        items:  Array< {
          __typename: "RelationLink",
          id: string,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsByTagCreatedAtCustomQueryVariables = {
  tag: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsByTagCreatedAtCustomQuery = {
  listLogsByTagCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      tag: string,
      notes?: string | null,
      message?: string | null,
      page?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      updatedAt: string,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        active?: boolean | null,
        avatar?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsBySourceCreatedAtCustomQueryVariables = {
  source: LogSource,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsBySourceCreatedAtCustomQuery = {
  listLogsBySourceCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      tag: string,
      source: LogSource,
      notes?: string | null,
      message?: string | null,
      page?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      updatedAt: string,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        active?: boolean | null,
        avatar?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsByUserTagCreatedAtCustomQueryVariables = {
  userID: string,
  tagCreatedAt?: ModelLogLogsByUserTagCreatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsByUserTagCreatedAtCustomQuery = {
  listLogsByUserTagCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      tag: string,
      notes?: string | null,
      message?: string | null,
      page?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      updatedAt: string,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        active?: boolean | null,
        avatar?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsByUserCreatedAtCustomQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsByUserCreatedAtCustomQuery = {
  listLogsByUserCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      tag: string,
      notes?: string | null,
      message?: string | null,
      page?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      updatedAt: string,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        active?: boolean | null,
        avatar?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPageCustomQueryVariables = {
  id: string,
};

export type GetPageCustomQuery = {
  getPage?:  {
    __typename: "Page",
    id: string,
    alias: string,
    status: PageStatus,
    type: PageType,
    menu: string,
    order: number,
    title: string,
    description?: string | null,
    content?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    tags?: Array< string | null > | null,
    thumbnail?: string | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    optionTitle?: PageOptionTitle | null,
    titlePadX?: string | null,
    titlePadY?: string | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInMenu?: boolean | null,
    createdAt?: string | null,
    updatedAt: string,
    blocks?:  {
      __typename: "ModelBlockConnection",
      items:  Array< {
        __typename: "Block",
        component: string,
        config?: string | null,
        content: string,
        order: number,
      } | null >,
    } | null,
  } | null,
};

export type ListPagesByAliasCreatedAtCustomQueryVariables = {
  alias: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesByAliasCreatedAtCustomQuery = {
  listPagesByAliasCreatedAt?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      menuProps?:  {
        __typename: "Menu",
        orderDesc?: boolean | null,
        showThumbnailPage?: string | null,
        showDescriptionPage?: string | null,
      } | null,
      order: number,
      title: string,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      updatedAt: string,
      blocks?:  {
        __typename: "ModelBlockConnection",
        items:  Array< {
          __typename: "Block",
          component: string,
          config?: string | null,
          content: string,
          order: number,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPagesByStatusMenuOrderCustomQueryVariables = {
  status: PageStatus,
  menuOrder?: ModelPagePagesByStatusMenuOrderCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesByStatusMenuOrderCustomQuery = {
  listPagesByStatusMenuOrder?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      alias: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      hideInMenu?: boolean | null,
      order: number,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPagesByStatusMenuOrderCustom2QueryVariables = {
  status: PageStatus,
  menuOrder?: ModelPagePagesByStatusMenuOrderCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesByStatusMenuOrderCustom2Query = {
  listPagesByStatusMenuOrder?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      order: number,
      title: string,
      titlePadX?: string | null,
      titlePadY?: string | null,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
      blocks?:  {
        __typename: "ModelBlockConnection",
        items:  Array< {
          __typename: "Block",
          component: string,
          config?: string | null,
          content: string,
          order: number,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductCustomQueryVariables = {
  id: string,
};

export type GetProductCustomQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    alias: string,
    status: PageStatus,
    category: string,
    code?: string | null,
    name: string,
    description?: string | null,
    contentTitle?: string | null,
    contentTitle2?: string | null,
    contentTitle3?: string | null,
    content?: string | null,
    content2?: string | null,
    content3?: string | null,
    tags?: Array< string | null > | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    price_of?: number | null,
    price: number,
    qty?: number | null,
    stockControl?: boolean | null,
    photo1?: string | null,
    photo2?: string | null,
    photo3?: string | null,
    photo4?: string | null,
    photo5?: string | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    titlePadX?: string | null,
    titlePadY?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    optionTitle?: PageOptionTitle | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInSearch?: boolean | null,
    createdAt?: string | null,
    updatedAt: string,
    options?:  {
      __typename: "ModelOptionConnection",
      items:  Array< {
        __typename: "Option",
        id: string,
        name?: string | null,
        price?: number | null,
      } | null >,
    } | null,
    kitItems?:  {
      __typename: "ModelKitItemConnection",
      items:  Array< {
        __typename: "KitItem",
        productID: string,
        product?:  {
          __typename: "Product",
          name: string,
        } | null,
      } | null >,
    } | null,
  } | null,
};

export type ListProductsByAliasCreatedAtCustomQueryVariables = {
  alias: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsByAliasCreatedAtCustomQuery = {
  listProductsByAliasCreatedAt?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      code?: string | null,
      name: string,
      description?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      type?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInSearch?: boolean | null,
      createdAt?: string | null,
      updatedAt: string,
      options?:  {
        __typename: "ModelOptionConnection",
        items:  Array< {
          __typename: "Option",
          id: string,
          name?: string | null,
          price?: number | null,
        } | null >,
      } | null,
      kitItems?:  {
        __typename: "ModelKitItemConnection",
        items:  Array< {
          __typename: "KitItem",
          productID: string,
          product?:  {
            __typename: "Product",
            name: string,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsByStatusCategoryNameCustomQueryVariables = {
  status: PageStatus,
  categoryName?: ModelProductProductsByStatusCategoryNameCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsByStatusCategoryNameCustomQuery = {
  listProductsByStatusCategoryName?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      alias: string,
      name: string,
      description?: string | null,
      hideInMenu?: boolean | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      photo1?: string | null,
      thumbnail?: string | null,
      subCategory: string,
      subCategoryProps?:  {
        __typename: "Category",
        id: string,
        title?: string | null,
      } | null,
      kitItems?:  {
        __typename: "ModelKitItemConnection",
        items:  Array< {
          __typename: "KitItem",
          productID: string,
          product?:  {
            __typename: "Product",
            name: string,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCartsByUserCustomQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsByUserCustomQuery = {
  listCartsByUser?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      userID: string,
      productID: string,
      qty?: number | null,
      changeName?: string | null,
      changeDescription?: string | null,
      changeQtyBlend?: number | null,
      changePriceAdjustment?: string | null,
      blendID?: string | null,
      campaignToken?: string | null,
      product?:  {
        __typename: "Product",
        thumbnail?: string | null,
        photo1?: string | null,
        name: string,
        description?: string | null,
        code?: string | null,
        price: number,
        qty?: number | null,
        stockControl?: boolean | null,
        categoryProps?:  {
          __typename: "Category",
          title?: string | null,
        } | null,
        kitItems?:  {
          __typename: "ModelKitItemConnection",
          items:  Array< {
            __typename: "KitItem",
            productID: string,
            product?:  {
              __typename: "Product",
              name: string,
            } | null,
          } | null >,
        } | null,
      } | null,
      options?:  {
        __typename: "ModelCartOptionConnection",
        items:  Array< {
          __typename: "CartOption",
          id: string,
          optionID: string,
          option?:  {
            __typename: "Option",
            name?: string | null,
            price?: number | null,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsByCategorySubCategoryNameCustomQueryVariables = {
  category: string,
  subCategoryName?: ModelProductProductsByCategorySubCategoryNameCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsByCategorySubCategoryNameCustomQuery = {
  listProductsByCategorySubCategoryName?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      description?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      type?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
      categoryProps?:  {
        __typename: "Category",
        id: string,
        title?: string | null,
        description?: string | null,
        thumbnail?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsByStatusCategoryNameCustom2QueryVariables = {
  status: PageStatus,
  categoryName?: ModelProductProductsByStatusCategoryNameCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsByStatusCategoryNameCustom2Query = {
  listProductsByStatusCategoryName?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      description?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      type?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
      subCategoryProps?:  {
        __typename: "Category",
        id: string,
        title?: string | null,
        description?: string | null,
        thumbnail?: string | null,
      } | null,
      kitItems?:  {
        __typename: "ModelKitItemConnection",
        items:  Array< {
          __typename: "KitItem",
          productID: string,
          product?:  {
            __typename: "Product",
            name: string,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersCustomQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersCustomQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        items:  Array< {
          __typename: "GroupUser",
          group: string,
        } | null >,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        items:  Array< {
          __typename: "Address",
          name?: string | null,
          street?: string | null,
          number?: string | null,
          complement?: string | null,
          zipcode?: string | null,
          neighborhood?: string | null,
          city?: string | null,
          state?: string | null,
          country?: string | null,
          reference?: string | null,
        } | null >,
      } | null,
      carts?:  {
        __typename: "ModelCartConnection",
        items:  Array< {
          __typename: "Cart",
          product?:  {
            __typename: "Product",
            name: string,
            categoryProps?:  {
              __typename: "Category",
              title?: string | null,
            } | null,
            code?: string | null,
            alias: string,
            price: number,
          } | null,
          createdAt: string,
          qty?: number | null,
        } | null >,
      } | null,
      ordersByCreatedAt?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          status: OrderStatus,
          total?: number | null,
        } | null >,
      } | null,
      profile?:  {
        __typename: "Profile",
        schedulesFriday?: Array< string | null > | null,
        schedulesMonday?: Array< string | null > | null,
        schedulesSaturday?: Array< string | null > | null,
        schedulesSunday?: Array< string | null > | null,
        schedulesThursday?: Array< string | null > | null,
        schedulesTuesday?: Array< string | null > | null,
        schedulesWednesday?: Array< string | null > | null,
        zipCodeCoverage?: Array< string | null > | null,
        subSpecialties?: string | null,
        specialties?: string | null,
        profession?: string | null,
        notes?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        pix?: string | null,
        doc?: string | null,
        customerPagarmeID?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersByGroupCustomQueryVariables = {
  group: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersByGroupCustomQuery = {
  listUsersByGroup?:  {
    __typename: "ModelGroupUserConnection",
    items:  Array< {
      __typename: "GroupUser",
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        phone?: string | null,
        email?: string | null,
        avatar?: string | null,
        active?: boolean | null,
        createdAt?: string | null,
      } | null,
      profile?:  {
        __typename: "Profile",
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        notes?: string | null,
        urlUserName?: string | null,
        urlEnable?: boolean | null,
        zipCodeCoverage?: Array< string | null > | null,
        schedulesSunday?: Array< string | null > | null,
        schedulesMonday?: Array< string | null > | null,
        schedulesTuesday?: Array< string | null > | null,
        schedulesWednesday?: Array< string | null > | null,
        schedulesThursday?: Array< string | null > | null,
        schedulesFriday?: Array< string | null > | null,
        schedulesSaturday?: Array< string | null > | null,
        companyHomeCare?: boolean | null,
        companyCampaign?: boolean | null,
        companyID?: string | null,
        regionsConfig?: string | null,
        regionSunday?: string | null,
        regionMonday?: string | null,
        regionTuesday?: string | null,
        regionWednesday?: string | null,
        regionThursday?: string | null,
        regionFriday?: string | null,
        regionSaturday?: string | null,
        customerPagarmeID?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersByUserCreatedAtCustomQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersByUserCreatedAtCustomQuery = {
  listOrdersByUserCreatedAt?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      updatedAt: string,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      company?:  {
        __typename: "Company",
        name: string,
        phones?: string | null,
        street?: string | null,
        number?: string | null,
        complement?: string | null,
        zipcode?: string | null,
        neighborhood?: string | null,
        city?: string | null,
        state?: string | null,
        status?: CompanyStatus | null,
      } | null,
      notes?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
        createdAt?: string | null,
      } | null,
      items?:  {
        __typename: "ModelOrderItemConnection",
        items:  Array< {
          __typename: "OrderItem",
          id: string,
          qty: number,
          code?: string | null,
          name: string,
          description?: string | null,
          price: number,
          photo1?: string | null,
          changeName?: string | null,
          changeDescription?: string | null,
          changeNameAdmin?: string | null,
          product?:  {
            __typename: "Product",
            categoryProps?:  {
              __typename: "Category",
              title?: string | null,
            } | null,
            name: string,
            kitItems?:  {
              __typename: "ModelKitItemConnection",
              items:  Array< {
                __typename: "KitItem",
                productID: string,
                product?:  {
                  __typename: "Product",
                  name: string,
                } | null,
              } | null >,
            } | null,
          } | null,
          optionsItem?:  {
            __typename: "ModelOrderItemOptionConnection",
            items:  Array< {
              __typename: "OrderItemOption",
              option?:  {
                __typename: "Option",
                name?: string | null,
                price?: number | null,
              } | null,
            } | null >,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersByStatusCreatedAtCustomQueryVariables = {
  status: OrderStatus,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersByStatusCreatedAtCustomQuery = {
  listOrdersByStatusCreatedAt?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      updatedAt: string,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      company?:  {
        __typename: "Company",
        name: string,
        phones?: string | null,
        street?: string | null,
        number?: string | null,
        complement?: string | null,
        zipcode?: string | null,
        neighborhood?: string | null,
        city?: string | null,
        state?: string | null,
      } | null,
      notes?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
        createdAt?: string | null,
        addresses?:  {
          __typename: "ModelAddressConnection",
          items:  Array< {
            __typename: "Address",
            street?: string | null,
            number?: string | null,
            complement?: string | null,
            zipcode?: string | null,
            neighborhood?: string | null,
            city?: string | null,
            state?: string | null,
          } | null >,
        } | null,
      } | null,
      profile?:  {
        __typename: "Profile",
        doc?: string | null,
      } | null,
      items?:  {
        __typename: "ModelOrderItemConnection",
        items:  Array< {
          __typename: "OrderItem",
          id: string,
          qty: number,
          code?: string | null,
          name: string,
          description?: string | null,
          price: number,
          photo1?: string | null,
          changeName?: string | null,
          changeDescription?: string | null,
          changeNameAdmin?: string | null,
          product?:  {
            __typename: "Product",
            categoryProps?:  {
              __typename: "Category",
              title?: string | null,
            } | null,
            name: string,
            kitItems?:  {
              __typename: "ModelKitItemConnection",
              items:  Array< {
                __typename: "KitItem",
                productID: string,
                product?:  {
                  __typename: "Product",
                  name: string,
                } | null,
              } | null >,
            } | null,
          } | null,
          optionsItem?:  {
            __typename: "ModelOrderItemOptionConnection",
            items:  Array< {
              __typename: "OrderItemOption",
              option?:  {
                __typename: "Option",
                name?: string | null,
                price?: number | null,
              } | null,
            } | null >,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCampaignByCodeCustomQueryVariables = {
  code: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCampaignByCodeCustomQuery = {
  listCampaignByCode?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      orientation?: string | null,
      orderMessage?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelCampaignProductConnection",
        items:  Array< {
          __typename: "CampaignProduct",
          price?: number | null,
          limit?: number | null,
          product?:  {
            __typename: "Product",
            id: string,
            name: string,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByOrderCustomQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByOrderCustomQuery = {
  listDeliveryByOrder?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      deliveryUser?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
      } | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByDateUserCustomQueryVariables = {
  date: string,
  deliveryUserID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByDateUserCustomQuery = {
  listDeliveryByDateUser?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
      deliveryUser?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        userID: string,
        status: OrderStatus,
        createdAt?: string | null,
        couponID?: string | null,
        couponName?: string | null,
        couponDiscount?: number | null,
        deliveryPrice?: number | null,
        total?: number | null,
        rating?: number | null,
        ratingNotes?: string | null,
        orderPagarmeID?: string | null,
        addressReference?: string | null,
        addressStreet?: string | null,
        addressNumber?: string | null,
        addressComplement?: string | null,
        addressZipcode?: string | null,
        addressNeighborhood?: string | null,
        addressCity?: string | null,
        addressState?: string | null,
        addressCountry?: string | null,
        updatedAt: string,
        notes?: string | null,
        user?:  {
          __typename: "User",
          name: string,
          email?: string | null,
          phone?: string | null,
          avatar?: string | null,
          createdAt?: string | null,
        } | null,
        items?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            qty: number,
            code?: string | null,
            name: string,
            description?: string | null,
            price: number,
            photo1?: string | null,
            changeName?: string | null,
            changeDescription?: string | null,
            changeNameAdmin?: string | null,
            product?:  {
              __typename: "Product",
              categoryProps?:  {
                __typename: "Category",
                title?: string | null,
              } | null,
              name: string,
            } | null,
            optionsItem?:  {
              __typename: "ModelOrderItemOptionConnection",
              items:  Array< {
                __typename: "OrderItemOption",
                option?:  {
                  __typename: "Option",
                  name?: string | null,
                  price?: number | null,
                } | null,
              } | null >,
            } | null,
          } | null >,
        } | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByCompanyDateCustomQueryVariables = {
  deliveryCompanyID: string,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByCompanyDateCustomQuery = {
  listDeliveryByCompanyDate?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
      deliveryUser?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
        profile?:  {
          __typename: "Profile",
          docProfession?: string | null,
        } | null,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        userID: string,
        status: OrderStatus,
        createdAt?: string | null,
        couponID?: string | null,
        couponName?: string | null,
        couponDiscount?: number | null,
        deliveryPrice?: number | null,
        total?: number | null,
        rating?: number | null,
        ratingNotes?: string | null,
        orderPagarmeID?: string | null,
        addressReference?: string | null,
        addressStreet?: string | null,
        addressNumber?: string | null,
        addressComplement?: string | null,
        addressZipcode?: string | null,
        addressNeighborhood?: string | null,
        addressCity?: string | null,
        addressState?: string | null,
        addressCountry?: string | null,
        updatedAt: string,
        notes?: string | null,
        user?:  {
          __typename: "User",
          name: string,
          email?: string | null,
          phone?: string | null,
          avatar?: string | null,
          createdAt?: string | null,
          profile?:  {
            __typename: "Profile",
            doc?: string | null,
          } | null,
        } | null,
        items?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            qty: number,
            code?: string | null,
            name: string,
            description?: string | null,
            price: number,
            photo1?: string | null,
            changeName?: string | null,
            changeDescription?: string | null,
            changeNameAdmin?: string | null,
            product?:  {
              __typename: "Product",
              categoryProps?:  {
                __typename: "Category",
                title?: string | null,
              } | null,
              name: string,
            } | null,
            optionsItem?:  {
              __typename: "ModelOrderItemOptionConnection",
              items:  Array< {
                __typename: "OrderItemOption",
                option?:  {
                  __typename: "Option",
                  name?: string | null,
                  price?: number | null,
                } | null,
              } | null >,
            } | null,
          } | null >,
        } | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByUserDateCustomQueryVariables = {
  deliveryUserID: string,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByUserDateCustomQuery = {
  listDeliveryByUserDate?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
      deliveryUser?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        userID: string,
        status: OrderStatus,
        createdAt?: string | null,
        couponID?: string | null,
        couponName?: string | null,
        couponDiscount?: number | null,
        deliveryPrice?: number | null,
        total?: number | null,
        rating?: number | null,
        ratingNotes?: string | null,
        orderPagarmeID?: string | null,
        addressReference?: string | null,
        addressStreet?: string | null,
        addressNumber?: string | null,
        addressComplement?: string | null,
        addressZipcode?: string | null,
        addressNeighborhood?: string | null,
        addressCity?: string | null,
        addressState?: string | null,
        addressCountry?: string | null,
        updatedAt: string,
        notes?: string | null,
        user?:  {
          __typename: "User",
          name: string,
          email?: string | null,
          phone?: string | null,
          avatar?: string | null,
          createdAt?: string | null,
        } | null,
        items?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            qty: number,
            code?: string | null,
            name: string,
            description?: string | null,
            price: number,
            photo1?: string | null,
            changeName?: string | null,
            changeDescription?: string | null,
            changeNameAdmin?: string | null,
            product?:  {
              __typename: "Product",
              categoryProps?:  {
                __typename: "Category",
                title?: string | null,
              } | null,
              name: string,
            } | null,
            optionsItem?:  {
              __typename: "ModelOrderItemOptionConnection",
              items:  Array< {
                __typename: "OrderItemOption",
                option?:  {
                  __typename: "Option",
                  name?: string | null,
                  price?: number | null,
                } | null,
              } | null >,
            } | null,
          } | null >,
        } | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryOrdersCustomQueryVariables = {
  id?: string | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDeliveryOrdersCustomQuery = {
  listDeliveryOrders?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
      deliveryUser?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        userID: string,
        status: OrderStatus,
        createdAt?: string | null,
        couponID?: string | null,
        couponName?: string | null,
        couponDiscount?: number | null,
        deliveryPrice?: number | null,
        total?: number | null,
        rating?: number | null,
        ratingNotes?: string | null,
        orderPagarmeID?: string | null,
        addressReference?: string | null,
        addressStreet?: string | null,
        addressNumber?: string | null,
        addressComplement?: string | null,
        addressZipcode?: string | null,
        addressNeighborhood?: string | null,
        addressCity?: string | null,
        addressState?: string | null,
        addressCountry?: string | null,
        updatedAt: string,
        notes?: string | null,
        user?:  {
          __typename: "User",
          name: string,
          email?: string | null,
          phone?: string | null,
          avatar?: string | null,
          createdAt?: string | null,
        } | null,
        items?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            qty: number,
            code?: string | null,
            name: string,
            description?: string | null,
            price: number,
            photo1?: string | null,
            changeName?: string | null,
            changeDescription?: string | null,
            changeNameAdmin?: string | null,
            product?:  {
              __typename: "Product",
              categoryProps?:  {
                __typename: "Category",
                title?: string | null,
              } | null,
              name: string,
            } | null,
            optionsItem?:  {
              __typename: "ModelOrderItemOptionConnection",
              items:  Array< {
                __typename: "OrderItemOption",
                option?:  {
                  __typename: "Option",
                  name?: string | null,
                  price?: number | null,
                } | null,
              } | null >,
            } | null,
          } | null >,
        } | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByStatusDateCustomQueryVariables = {
  status: DeliveryStatus,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByStatusDateCustomQuery = {
  listDeliveryByStatusDate?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
      deliveryUser?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        userID: string,
        status: OrderStatus,
        createdAt?: string | null,
        couponID?: string | null,
        couponName?: string | null,
        couponDiscount?: number | null,
        deliveryPrice?: number | null,
        total?: number | null,
        rating?: number | null,
        ratingNotes?: string | null,
        orderPagarmeID?: string | null,
        addressReference?: string | null,
        addressStreet?: string | null,
        addressNumber?: string | null,
        addressComplement?: string | null,
        addressZipcode?: string | null,
        addressNeighborhood?: string | null,
        addressCity?: string | null,
        addressState?: string | null,
        addressCountry?: string | null,
        updatedAt: string,
        notes?: string | null,
        user?:  {
          __typename: "User",
          name: string,
          email?: string | null,
          phone?: string | null,
          avatar?: string | null,
          createdAt?: string | null,
        } | null,
        items?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            qty: number,
            code?: string | null,
            name: string,
            description?: string | null,
            price: number,
            photo1?: string | null,
            changeName?: string | null,
            changeDescription?: string | null,
            changeNameAdmin?: string | null,
            product?:  {
              __typename: "Product",
              categoryProps?:  {
                __typename: "Category",
                title?: string | null,
              } | null,
              name: string,
            } | null,
            optionsItem?:  {
              __typename: "ModelOrderItemOptionConnection",
              items:  Array< {
                __typename: "OrderItemOption",
                option?:  {
                  __typename: "Option",
                  name?: string | null,
                  price?: number | null,
                } | null,
              } | null >,
            } | null,
          } | null >,
        } | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsCustomQueryVariables = {
  id?: string | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsCustomQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      description?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      type?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      hideInSearch?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
      subCategoryProps?:  {
        __typename: "Category",
        id: string,
        title?: string | null,
        description?: string | null,
        thumbnail?: string | null,
      } | null,
      kitItems?:  {
        __typename: "ModelKitItemConnection",
        items:  Array< {
          __typename: "KitItem",
          productID: string,
          product?:  {
            __typename: "Product",
            name: string,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsedByCampaignCustomQueryVariables = {
  campaignID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignUsedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsedByCampaignCustomQuery = {
  listUsedByCampaign?:  {
    __typename: "ModelCampaignUsedConnection",
    items:  Array< {
      __typename: "CampaignUsed",
      id: string,
      campaignID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      qty?: number | null,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsedByCouponCustomQueryVariables = {
  couponID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCouponUsedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsedByCouponCustomQuery = {
  listUsedByCoupon?:  {
    __typename: "ModelCouponUsedConnection",
    items:  Array< {
      __typename: "CouponUsed",
      id: string,
      couponID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderCustomQueryVariables = {
  id: string,
};

export type GetOrderCustomQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    status: OrderStatus,
    createdAt?: string | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    updatedAt: string,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    company?:  {
      __typename: "Company",
      name: string,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      status?: CompanyStatus | null,
    } | null,
    notes?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    user?:  {
      __typename: "User",
      name: string,
      email?: string | null,
      phone?: string | null,
      avatar?: string | null,
      createdAt?: string | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        items:  Array< {
          __typename: "Address",
          street?: string | null,
          number?: string | null,
          complement?: string | null,
          zipcode?: string | null,
          neighborhood?: string | null,
          city?: string | null,
          state?: string | null,
        } | null >,
      } | null,
    } | null,
    profile?:  {
      __typename: "Profile",
      doc?: string | null,
    } | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        qty: number,
        code?: string | null,
        name: string,
        description?: string | null,
        price: number,
        photo1?: string | null,
        changeName?: string | null,
        changeDescription?: string | null,
        changeNameAdmin?: string | null,
        product?:  {
          __typename: "Product",
          id: string,
          categoryProps?:  {
            __typename: "Category",
            title?: string | null,
          } | null,
          name: string,
          kitItems?:  {
            __typename: "ModelKitItemConnection",
            items:  Array< {
              __typename: "KitItem",
              productID: string,
              product?:  {
                __typename: "Product",
                name: string,
              } | null,
            } | null >,
          } | null,
        } | null,
        optionsItem?:  {
          __typename: "ModelOrderItemOptionConnection",
          items:  Array< {
            __typename: "OrderItemOption",
            option?:  {
              __typename: "Option",
              name?: string | null,
              price?: number | null,
            } | null,
          } | null >,
        } | null,
      } | null >,
    } | null,
  } | null,
};

export type ListVaccinationCardsItemsByVaccinationCardCustomQueryVariables = {
  vaccinationCardID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByVaccinationCardCustomQuery = {
  listVaccinationCardsItemsByVaccinationCard?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      order?:  {
        __typename: "Order",
        createdAt?: string | null,
      } | null,
      orderItemID: string,
      orderItem?:  {
        __typename: "OrderItem",
        name: string,
        description?: string | null,
        price: number,
        changeName?: string | null,
        changeDescription?: string | null,
        changeNameAdmin?: string | null,
      } | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      applicationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCampaignCustomQueryVariables = {
  id: string,
};

export type GetCampaignCustomQuery = {
  getCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    description?: string | null,
    code: string,
    start?: string | null,
    expiration?: string | null,
    discountPercentage?: number | null,
    discountValue?: number | null,
    qtyLimit?: number | null,
    qtyUsed?: number | null,
    orientation?: string | null,
    zipCodeCoverage?: Array< string | null > | null,
    products?:  {
      __typename: "ModelCampaignProductConnection",
      nextToken?: string | null,
    } | null,
    campaignUsed?:  {
      __typename: "ModelCampaignUsedConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCampaignCompanyConnection",
      items:  Array< {
        __typename: "CampaignCompany",
        company?:  {
          __typename: "Company",
          id: string,
          name: string,
          openingHours?: string | null,
          phones?: string | null,
          street?: string | null,
          number?: string | null,
          complement?: string | null,
          zipcode?: string | null,
          neighborhood?: string | null,
          city?: string | null,
          state?: string | null,
          country?: string | null,
          enableRetail?: string | null,
          schedulesSunday?: Array< string | null > | null,
          schedulesMonday?: Array< string | null > | null,
          schedulesTuesday?: Array< string | null > | null,
          schedulesWednesday?: Array< string | null > | null,
          schedulesThursday?: Array< string | null > | null,
          schedulesFriday?: Array< string | null > | null,
          schedulesSaturday?: Array< string | null > | null,
          status?: CompanyStatus | null,
        } | null,
      } | null >,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesByCompanyCustomQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesByCompanyCustomQuery = {
  listProfilesByCompany?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersByCampaignCreatedAtCustomQueryVariables = {
  campaignID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersByCampaignCreatedAtCustomQuery = {
  listOrdersByCampaignCreatedAt?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      status: OrderStatus,
      createdAt?: string | null,
      total?: number | null,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
      } | null,
      profile?:  {
        __typename: "Profile",
        doc?: string | null,
      } | null,
      company?:  {
        __typename: "Company",
        name: string,
        city?: string | null,
        state?: string | null,
      } | null,
      items?:  {
        __typename: "ModelOrderItemConnection",
        items:  Array< {
          __typename: "OrderItem",
          qty: number,
          name: string,
          price: number,
        } | null >,
      } | null,
      vaccinationCardItems?:  {
        __typename: "ModelVaccinationCardItemConnection",
        items:  Array< {
          __typename: "VaccinationCardItem",
          vaccinationCard?:  {
            __typename: "VaccinationCard",
            person: string,
            doc?: string | null,
            birth?: string | null,
            relationship?: string | null,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCompaniesByCampaignCustomQueryVariables = {
  campaignID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesByCampaignCustomQuery = {
  listCompaniesByCampaign?:  {
    __typename: "ModelCampaignCompanyConnection",
    items:  Array< {
      __typename: "CampaignCompany",
      id: string,
      campaignID: string,
      companyID: string,
      company?:  {
        __typename: "Company",
        id: string,
        name: string,
        openingHours?: string | null,
        phones?: string | null,
        street?: string | null,
        number?: string | null,
        complement?: string | null,
        zipcode?: string | null,
        neighborhood?: string | null,
        city?: string | null,
        state?: string | null,
        country?: string | null,
        enableRetail?: string | null,
        schedulesSunday?: Array< string | null > | null,
        schedulesMonday?: Array< string | null > | null,
        schedulesTuesday?: Array< string | null > | null,
        schedulesWednesday?: Array< string | null > | null,
        schedulesThursday?: Array< string | null > | null,
        schedulesFriday?: Array< string | null > | null,
        schedulesSaturday?: Array< string | null > | null,
        status?: CompanyStatus | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByOrderCustomQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByOrderCustomQuery = {
  listVaccinationCardsItemsByOrder?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      vaccinationCard?:  {
        __typename: "VaccinationCard",
        person: string,
        doc?: string | null,
        birth?: string | null,
        avatar?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        createdAt?: string | null,
      } | null,
      orderItem?:  {
        __typename: "OrderItem",
        name: string,
      } | null,
      campaign?:  {
        __typename: "Campaign",
        name: string,
      } | null,
      company?:  {
        __typename: "Company",
        name: string,
      } | null,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      applicationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByCampaignCustomQueryVariables = {
  campaignID: string,
  applicationDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByCampaignCustomQuery = {
  listVaccinationCardsItemsByCampaign?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      vaccinationCard?:  {
        __typename: "VaccinationCard",
        person: string,
        doc?: string | null,
        birth?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        createdAt?: string | null,
      } | null,
      orderItem?:  {
        __typename: "OrderItem",
        name: string,
      } | null,
      company?:  {
        __typename: "Company",
        name: string,
      } | null,
      lote?: string | null,
      profissionalName?: string | null,
      profissional?:  {
        __typename: "User",
        profile?:  {
          __typename: "Profile",
          company?:  {
            __typename: "Company",
            name: string,
          } | null,
        } | null,
      } | null,
      coren?: string | null,
      dueDate?: string | null,
      applicationDate?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardItemsCustomQueryVariables = {
  id?: string | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListVaccinationCardItemsCustomQuery = {
  listVaccinationCardItems?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      applicationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
      vaccinationCard?:  {
        __typename: "VaccinationCard",
        person: string,
        doc?: string | null,
        birth?: string | null,
        avatar?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        createdAt?: string | null,
        addressCity?: string | null,
        addressState?: string | null,
      } | null,
      campaign?:  {
        __typename: "Campaign",
        name: string,
      } | null,
      company?:  {
        __typename: "Company",
        name: string,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByProfissionalCustomQueryVariables = {
  profissionalID: string,
  applicationDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByProfissionalCustomQuery = {
  listVaccinationCardsItemsByProfissional?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      applicationDate?: string | null,
      vaccinationCard?:  {
        __typename: "VaccinationCard",
        person: string,
        doc?: string | null,
        birth?: string | null,
        avatar?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        createdAt?: string | null,
      } | null,
      orderItem?:  {
        __typename: "OrderItem",
        name: string,
      } | null,
      campaign?:  {
        __typename: "Campaign",
        name: string,
      } | null,
      company?:  {
        __typename: "Company",
        name: string,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByStatusCustomQueryVariables = {
  status: string,
  applicationDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByStatusCustomQuery = {
  listVaccinationCardsItemsByStatus?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      applicationDate?: string | null,
      vaccinationCard?:  {
        __typename: "VaccinationCard",
        person: string,
        doc?: string | null,
        birth?: string | null,
        avatar?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        createdAt?: string | null,
      } | null,
      orderItem?:  {
        __typename: "OrderItem",
        name: string,
      } | null,
      campaign?:  {
        __typename: "Campaign",
        name: string,
      } | null,
      company?:  {
        __typename: "Company",
        name: string,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersVaccinationByAuthorizationListCustomQueryVariables = {
  authorizationListID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberVaccinationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersVaccinationByAuthorizationListCustomQuery = {
  listMembersVaccinationByAuthorizationList?:  {
    __typename: "ModelAuthorizationListMemberVaccinationConnection",
    items:  Array< {
      __typename: "AuthorizationListMemberVaccination",
      id: string,
      authorizationListMember?:  {
        __typename: "AuthorizationListMember",
        id: string,
        key?: string | null,
        name: string,
        cpf?: string | null,
        birth?: string | null,
        others?: string | null,
      } | null,
      profissional?:  {
        __typename: "User",
        name: string,
        profile?:  {
          __typename: "Profile",
          doc?: string | null,
          company?:  {
            __typename: "Company",
            name: string,
          } | null,
        } | null,
      } | null,
      coren?: string | null,
      lote?: string | null,
      dueDate?: string | null,
      OS?: string | null,
      applicationDate?: string | null,
      applicationTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsByUserCustomQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsByUserCustomQuery = {
  listVaccinationCardsByUser?:  {
    __typename: "ModelVaccinationCardConnection",
    items:  Array< {
      __typename: "VaccinationCard",
      id: string,
      userID: string,
      person: string,
      doc?: string | null,
      birth?: string | null,
      relationship?: string | null,
      notes?: string | null,
      avatar?: string | null,
      isOwner?: boolean | null,
      createdAt: string,
      updatedAt: string,
      vaccinationCardItem?:  {
        __typename: "ModelVaccinationCardItemConnection",
        items:  Array< {
          __typename: "VaccinationCardItem",
          orderItem?:  {
            __typename: "OrderItem",
            name: string,
          } | null,
          campaign?:  {
            __typename: "Campaign",
            name: string,
          } | null,
          company?:  {
            __typename: "Company",
            name: string,
          } | null,
          lote?: string | null,
          profissionalName?: string | null,
          coren?: string | null,
          dueDate?: string | null,
          applicationDate?: string | null,
          status?: string | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserByEmailCustomQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByEmailCustomQuery = {
  getUserByEmail?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        items:  Array< {
          __typename: "GroupUser",
          group: string,
        } | null >,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        items:  Array< {
          __typename: "Address",
          name?: string | null,
          street?: string | null,
          number?: string | null,
          complement?: string | null,
          zipcode?: string | null,
          neighborhood?: string | null,
          city?: string | null,
          state?: string | null,
          country?: string | null,
          reference?: string | null,
        } | null >,
      } | null,
      carts?:  {
        __typename: "ModelCartConnection",
        items:  Array< {
          __typename: "Cart",
          product?:  {
            __typename: "Product",
            name: string,
            categoryProps?:  {
              __typename: "Category",
              title?: string | null,
            } | null,
            code?: string | null,
            alias: string,
            price: number,
          } | null,
          createdAt: string,
          qty?: number | null,
        } | null >,
      } | null,
      ordersByCreatedAt?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          status: OrderStatus,
          total?: number | null,
        } | null >,
      } | null,
      profile?:  {
        __typename: "Profile",
        schedulesFriday?: Array< string | null > | null,
        schedulesMonday?: Array< string | null > | null,
        schedulesSaturday?: Array< string | null > | null,
        schedulesSunday?: Array< string | null > | null,
        schedulesThursday?: Array< string | null > | null,
        schedulesTuesday?: Array< string | null > | null,
        schedulesWednesday?: Array< string | null > | null,
        zipCodeCoverage?: Array< string | null > | null,
        subSpecialties?: string | null,
        specialties?: string | null,
        profession?: string | null,
        notes?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        pix?: string | null,
        doc?: string | null,
        customerPagarmeID?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserByPhoneCustomQueryVariables = {
  phone: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByPhoneCustomQuery = {
  getUserByPhone?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        items:  Array< {
          __typename: "GroupUser",
          group: string,
        } | null >,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        items:  Array< {
          __typename: "Address",
          name?: string | null,
          street?: string | null,
          number?: string | null,
          complement?: string | null,
          zipcode?: string | null,
          neighborhood?: string | null,
          city?: string | null,
          state?: string | null,
          country?: string | null,
          reference?: string | null,
        } | null >,
      } | null,
      carts?:  {
        __typename: "ModelCartConnection",
        items:  Array< {
          __typename: "Cart",
          product?:  {
            __typename: "Product",
            name: string,
            categoryProps?:  {
              __typename: "Category",
              title?: string | null,
            } | null,
            code?: string | null,
            alias: string,
            price: number,
          } | null,
          createdAt: string,
          qty?: number | null,
        } | null >,
      } | null,
      ordersByCreatedAt?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          status: OrderStatus,
          total?: number | null,
        } | null >,
      } | null,
      profile?:  {
        __typename: "Profile",
        schedulesFriday?: Array< string | null > | null,
        schedulesMonday?: Array< string | null > | null,
        schedulesSaturday?: Array< string | null > | null,
        schedulesSunday?: Array< string | null > | null,
        schedulesThursday?: Array< string | null > | null,
        schedulesTuesday?: Array< string | null > | null,
        schedulesWednesday?: Array< string | null > | null,
        zipCodeCoverage?: Array< string | null > | null,
        subSpecialties?: string | null,
        specialties?: string | null,
        profession?: string | null,
        notes?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        pix?: string | null,
        doc?: string | null,
        customerPagarmeID?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCouponsByCodeCustomQueryVariables = {
  code: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCouponsByCodeCustomQuery = {
  listCouponsByCode?:  {
    __typename: "ModelCouponConnection",
    items:  Array< {
      __typename: "Coupon",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelCouponProductConnection",
        items:  Array< {
          __typename: "CouponProduct",
          price?: number | null,
          limit?: number | null,
          product?:  {
            __typename: "Product",
            id: string,
            name: string,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByCompanyCustomQueryVariables = {
  companyID: string,
  applicationDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByCompanyCustomQuery = {
  listVaccinationCardsItemsByCompany?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      vaccinationCard?:  {
        __typename: "VaccinationCard",
        person: string,
        doc?: string | null,
        birth?: string | null,
      } | null,
      order?:  {
        __typename: "Order",
        createdAt?: string | null,
      } | null,
      orderItem?:  {
        __typename: "OrderItem",
        name: string,
      } | null,
      company?:  {
        __typename: "Company",
        name: string,
        city?: string | null,
      } | null,
      lote?: string | null,
      profissionalName?: string | null,
      profissional?:  {
        __typename: "User",
        profile?:  {
          __typename: "Profile",
          userID: string,
          company?:  {
            __typename: "Company",
            name: string,
          } | null,
        } | null,
      } | null,
      coren?: string | null,
      dueDate?: string | null,
      via?: string | null,
      applicationDate?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsLinkByRelationUserCustomQueryVariables = {
  relationID: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsLinkByRelationUserCustomQuery = {
  listRelationsLinkByRelationUser?:  {
    __typename: "ModelRelationLinkConnection",
    items:  Array< {
      __typename: "RelationLink",
      id: string,
      userID: string,
      relationID: string,
      updatedAt?: string | null,
      createdAt: string,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesByRelationCreatedAtCustomQueryVariables = {
  relationID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesByRelationCreatedAtCustomQuery = {
  listMessagesByRelationCreatedAt?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      userID: string,
      type: MessagesTypes,
      content?: string | null,
      search?: string | null,
      identityId?: string | null,
      createdAt?: string | null,
      status?: string | null,
      user?:  {
        __typename: "User",
        name: string,
        avatar?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsLinkByUserTypeNotifyUpdatedAtCustomQueryVariables = {
  userID: string,
  typeNotifyUpdatedAt?: ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsLinkByUserTypeNotifyUpdatedAtCustomQuery = {
  listRelationsLinkByUserTypeNotifyUpdatedAt?:  {
    __typename: "ModelRelationLinkConnection",
    items:  Array< {
      __typename: "RelationLink",
      id: string,
      userID: string,
      relationID: string,
      type: string,
      notify: number,
      updatedAt?: string | null,
      search?: string | null,
      createdAt: string,
      relation?:  {
        __typename: "Relation",
        id: string,
        type: RelationTypes,
        mode: RelationModes,
        name?: string | null,
        description?: string | null,
        avatar?: string | null,
        reference?: string | null,
        members: Array< string >,
        admins: Array< string >,
        updatedAt?: string | null,
        status: RelationStatus,
        createdAt: string,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfileByDocCustomQueryVariables = {
  doc: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetProfileByDocCustomQuery = {
  getProfileByDoc?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      birth?: string | null,
      customerPagarmeID?: string | null,
      user?:  {
        __typename: "User",
        name: string,
        email?: string | null,
        phone?: string | null,
        avatar?: string | null,
        addresses?:  {
          __typename: "ModelAddressConnection",
          items:  Array< {
            __typename: "Address",
            id: string,
            street?: string | null,
            number?: string | null,
            complement?: string | null,
            zipcode?: string | null,
            neighborhood?: string | null,
            city?: string | null,
            state?: string | null,
          } | null >,
        } | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderCustom2QueryVariables = {
  id: string,
};

export type GetOrderCustom2Query = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    status: OrderStatus,
    createdAt?: string | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    updatedAt: string,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    company?:  {
      __typename: "Company",
      name: string,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      status?: CompanyStatus | null,
    } | null,
    notes?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        qty: number,
        code?: string | null,
        name: string,
        description?: string | null,
        price: number,
        photo1?: string | null,
        changeName?: string | null,
        changeDescription?: string | null,
        changeNameAdmin?: string | null,
        product?:  {
          __typename: "Product",
          id: string,
          categoryProps?:  {
            __typename: "Category",
            title?: string | null,
          } | null,
          name: string,
          kitItems?:  {
            __typename: "ModelKitItemConnection",
            items:  Array< {
              __typename: "KitItem",
              productID: string,
              product?:  {
                __typename: "Product",
                name: string,
              } | null,
            } | null >,
          } | null,
        } | null,
        optionsItem?:  {
          __typename: "ModelOrderItemOptionConnection",
          items:  Array< {
            __typename: "OrderItemOption",
            option?:  {
              __typename: "Option",
              name?: string | null,
              price?: number | null,
            } | null,
          } | null >,
        } | null,
      } | null >,
    } | null,
  } | null,
};

export type ListMembersByCPFCustomQueryVariables = {
  cpf: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByCPFCustomQuery = {
  listMembersByCPF?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
      authorizationList?:  {
        __typename: "AuthorizationList",
        name: string,
        start?: string | null,
        expiration?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersByKeyCustomQueryVariables = {
  key: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByKeyCustomQuery = {
  listMembersByKey?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
      authorizationList?:  {
        __typename: "AuthorizationList",
        name: string,
        start?: string | null,
        expiration?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAuthorizationListMembersCustomQueryVariables = {
  id?: string | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAuthorizationListMembersCustomQuery = {
  listAuthorizationListMembers?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
      authorizationList?:  {
        __typename: "AuthorizationList",
        name: string,
        start?: string | null,
        expiration?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersByAuthorizationListKeyCustomQueryVariables = {
  authorizationListID: string,
  key?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByAuthorizationListKeyCustomQuery = {
  listMembersByAuthorizationListKey?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
      authorizationList?:  {
        __typename: "AuthorizationList",
        name: string,
        start?: string | null,
        expiration?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersByAuthorizationListCPFCustomQueryVariables = {
  authorizationListID: string,
  cpf?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByAuthorizationListCPFCustomQuery = {
  listMembersByAuthorizationListCPF?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
      authorizationList?:  {
        __typename: "AuthorizationList",
        name: string,
        start?: string | null,
        expiration?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCampaignsCustomQueryVariables = {
  id?: string | null,
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCampaignsCustomQuery = {
  listCampaigns?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      orientation?: string | null,
      orderMessage?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelCampaignProductConnection",
        items:  Array< {
          __typename: "CampaignProduct",
          price?: number | null,
          limit?: number | null,
          product?:  {
            __typename: "Product",
            id: string,
            name: string,
          } | null,
        } | null >,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationsByAuthorizationListMemberCustomQueryVariables = {
  authorizationListMemberID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberVaccinationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationsByAuthorizationListMemberCustomQuery = {
  listVaccinationsByAuthorizationListMember?:  {
    __typename: "ModelAuthorizationListMemberVaccinationConnection",
    items:  Array< {
      __typename: "AuthorizationListMemberVaccination",
      id: string,
      authorizationListID: string,
      authorizationListMemberID: string,
      profissionalID?: string | null,
      coren?: string | null,
      lote?: string | null,
      dueDate?: string | null,
      via?: string | null,
      OS?: string | null,
      applicationDate?: string | null,
      applicationTime?: string | null,
      createdAt: string,
      updatedAt: string,
      authorizationList?:  {
        __typename: "AuthorizationList",
        name: string,
      } | null,
      authorizationListMember?:  {
        __typename: "AuthorizationListMember",
        name: string,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AdminDeleteUserMutationVariables = {
  id?: string | null,
};

export type AdminDeleteUserMutation = {
  adminDeleteUser?: string | null,
};

export type AdminCreateUserMutationVariables = {
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  id?: string | null,
  messageAction?: string | null,
  passwordLength?: number | null,
  resendTempPass?: number | null,
  confirmSignUp?: number | null,
};

export type AdminCreateUserMutation = {
  adminCreateUser?: string | null,
};

export type AdminAddUserToGroupMutationVariables = {
  username?: string | null,
  groups?: string | null,
};

export type AdminAddUserToGroupMutation = {
  adminAddUserToGroup?: string | null,
};

export type AdminUpdateUserAttributesMutationVariables = {
  username?: string | null,
  attributes?: string | null,
};

export type AdminUpdateUserAttributesMutation = {
  adminUpdateUserAttributes?: string | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    status?: UserStatus | null,
    active?: boolean | null,
    avatar?: string | null,
    search?: string | null,
    createdAt?: string | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    groups?:  {
      __typename: "ModelGroupUserConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    payMethods?:  {
      __typename: "ModelPayMethodConnection",
      nextToken?: string | null,
    } | null,
    relationsLink?:  {
      __typename: "ModelRelationLinkConnection",
      nextToken?: string | null,
    } | null,
    carts?:  {
      __typename: "ModelCartConnection",
      nextToken?: string | null,
    } | null,
    ordersByCreatedAt?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    ordersByStatusCreatedAt?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    status?: UserStatus | null,
    active?: boolean | null,
    avatar?: string | null,
    search?: string | null,
    createdAt?: string | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    groups?:  {
      __typename: "ModelGroupUserConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    payMethods?:  {
      __typename: "ModelPayMethodConnection",
      nextToken?: string | null,
    } | null,
    relationsLink?:  {
      __typename: "ModelRelationLinkConnection",
      nextToken?: string | null,
    } | null,
    carts?:  {
      __typename: "ModelCartConnection",
      nextToken?: string | null,
    } | null,
    ordersByCreatedAt?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    ordersByStatusCreatedAt?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    doc?: string | null,
    docType?: DocTypes | null,
    docProfessionType?: string | null,
    docProfession?: string | null,
    profession?: string | null,
    specialties?: string | null,
    subSpecialties?: string | null,
    bio?: string | null,
    gender?: GenderOptions | null,
    birth?: string | null,
    notes?: string | null,
    urlUserName?: string | null,
    urlEnable?: boolean | null,
    allowViewEmail?: boolean | null,
    allowViewPhone?: boolean | null,
    allowCookiesPreference?: boolean | null,
    allowCookiesStatistic?: boolean | null,
    pix?: string | null,
    zipCodeCoverage?: Array< string | null > | null,
    schedulesSunday?: Array< string | null > | null,
    schedulesMonday?: Array< string | null > | null,
    schedulesTuesday?: Array< string | null > | null,
    schedulesWednesday?: Array< string | null > | null,
    schedulesThursday?: Array< string | null > | null,
    schedulesFriday?: Array< string | null > | null,
    schedulesSaturday?: Array< string | null > | null,
    regionsConfig?: string | null,
    regionSunday?: string | null,
    regionMonday?: string | null,
    regionTuesday?: string | null,
    regionWednesday?: string | null,
    regionThursday?: string | null,
    regionFriday?: string | null,
    regionSaturday?: string | null,
    customerPagarmeID?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyHomeCare?: boolean | null,
    companyCampaign?: boolean | null,
    companyAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    doc?: string | null,
    docType?: DocTypes | null,
    docProfessionType?: string | null,
    docProfession?: string | null,
    profession?: string | null,
    specialties?: string | null,
    subSpecialties?: string | null,
    bio?: string | null,
    gender?: GenderOptions | null,
    birth?: string | null,
    notes?: string | null,
    urlUserName?: string | null,
    urlEnable?: boolean | null,
    allowViewEmail?: boolean | null,
    allowViewPhone?: boolean | null,
    allowCookiesPreference?: boolean | null,
    allowCookiesStatistic?: boolean | null,
    pix?: string | null,
    zipCodeCoverage?: Array< string | null > | null,
    schedulesSunday?: Array< string | null > | null,
    schedulesMonday?: Array< string | null > | null,
    schedulesTuesday?: Array< string | null > | null,
    schedulesWednesday?: Array< string | null > | null,
    schedulesThursday?: Array< string | null > | null,
    schedulesFriday?: Array< string | null > | null,
    schedulesSaturday?: Array< string | null > | null,
    regionsConfig?: string | null,
    regionSunday?: string | null,
    regionMonday?: string | null,
    regionTuesday?: string | null,
    regionWednesday?: string | null,
    regionThursday?: string | null,
    regionFriday?: string | null,
    regionSaturday?: string | null,
    customerPagarmeID?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyHomeCare?: boolean | null,
    companyCampaign?: boolean | null,
    companyAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupUserMutationVariables = {
  input: CreateGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type CreateGroupUserMutation = {
  createGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    group: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profileID: string,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteGroupUserMutationVariables = {
  input: DeleteGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type DeleteGroupUserMutation = {
  deleteGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    group: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profileID: string,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    name?: string | null,
    reference?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    addressPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    name?: string | null,
    reference?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    addressPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    name?: string | null,
    reference?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    addressPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePayMethodMutationVariables = {
  input: CreatePayMethodInput,
  condition?: ModelPayMethodConditionInput | null,
};

export type CreatePayMethodMutation = {
  createPayMethod?:  {
    __typename: "PayMethod",
    id: string,
    userID: string,
    method: PaymentMethods,
    number?: string | null,
    holderName?: string | null,
    holderDocument?: string | null,
    expMonth?: number | null,
    expYear?: number | null,
    cvv?: string | null,
    brand?: string | null,
    label?: string | null,
    cardPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePayMethodMutationVariables = {
  input: UpdatePayMethodInput,
  condition?: ModelPayMethodConditionInput | null,
};

export type UpdatePayMethodMutation = {
  updatePayMethod?:  {
    __typename: "PayMethod",
    id: string,
    userID: string,
    method: PaymentMethods,
    number?: string | null,
    holderName?: string | null,
    holderDocument?: string | null,
    expMonth?: number | null,
    expYear?: number | null,
    cvv?: string | null,
    brand?: string | null,
    label?: string | null,
    cardPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePayMethodMutationVariables = {
  input: DeletePayMethodInput,
  condition?: ModelPayMethodConditionInput | null,
};

export type DeletePayMethodMutation = {
  deletePayMethod?:  {
    __typename: "PayMethod",
    id: string,
    userID: string,
    method: PaymentMethods,
    number?: string | null,
    holderName?: string | null,
    holderDocument?: string | null,
    expMonth?: number | null,
    expYear?: number | null,
    cvv?: string | null,
    brand?: string | null,
    label?: string | null,
    cardPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLogMutationVariables = {
  input: CreateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type CreateLogMutation = {
  createLog?:  {
    __typename: "Log",
    id: string,
    userID: string,
    tag: string,
    source: LogSource,
    notes?: string | null,
    message?: string | null,
    page?: string | null,
    manufacturer?: string | null,
    model?: string | null,
    osName?: string | null,
    osVersion?: string | null,
    platform?: string | null,
    uuid?: string | null,
    ip?: string | null,
    city?: string | null,
    region?: string | null,
    country?: string | null,
    provider?: string | null,
    lat?: number | null,
    lng?: number | null,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateConfigMutationVariables = {
  input: CreateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type CreateConfigMutation = {
  createConfig?:  {
    __typename: "Config",
    id: string,
    validationMode: ConfigValidationModes,
    googleAnalyticsID?: string | null,
    googleSiteVerification?: string | null,
    inviteSubject?: string | null,
    inviteMessage?: string | null,
    inviteSMS?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    infoFooter?: string | null,
    minValueOrder?: number | null,
    phoneOrders?: string | null,
    allowPayOnDelivery?: boolean | null,
    allowLocalPickup?: boolean | null,
    deliveryOnSunday?: string | null,
    deliveryOnMonday?: string | null,
    deliveryOnTuesday?: string | null,
    deliveryOnWednesday?: string | null,
    deliveryOnThursday?: string | null,
    deliveryOnFriday?: string | null,
    deliveryOnSaturday?: string | null,
    deliveryOffSunday?: string | null,
    deliveryOffMonday?: string | null,
    deliveryOffTuesday?: string | null,
    deliveryOffWednesday?: string | null,
    deliveryOffThursday?: string | null,
    deliveryOffFriday?: string | null,
    deliveryOffSaturday?: string | null,
    showNotesCart?: boolean | null,
    notesCart?: string | null,
    soundOnNewOrder?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConfigMutationVariables = {
  input: UpdateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type UpdateConfigMutation = {
  updateConfig?:  {
    __typename: "Config",
    id: string,
    validationMode: ConfigValidationModes,
    googleAnalyticsID?: string | null,
    googleSiteVerification?: string | null,
    inviteSubject?: string | null,
    inviteMessage?: string | null,
    inviteSMS?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    infoFooter?: string | null,
    minValueOrder?: number | null,
    phoneOrders?: string | null,
    allowPayOnDelivery?: boolean | null,
    allowLocalPickup?: boolean | null,
    deliveryOnSunday?: string | null,
    deliveryOnMonday?: string | null,
    deliveryOnTuesday?: string | null,
    deliveryOnWednesday?: string | null,
    deliveryOnThursday?: string | null,
    deliveryOnFriday?: string | null,
    deliveryOnSaturday?: string | null,
    deliveryOffSunday?: string | null,
    deliveryOffMonday?: string | null,
    deliveryOffTuesday?: string | null,
    deliveryOffWednesday?: string | null,
    deliveryOffThursday?: string | null,
    deliveryOffFriday?: string | null,
    deliveryOffSaturday?: string | null,
    showNotesCart?: boolean | null,
    notesCart?: string | null,
    soundOnNewOrder?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInviteMutationVariables = {
  input: CreateInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type CreateInviteMutation = {
  createInvite?:  {
    __typename: "Invite",
    id: string,
    name: string,
    description?: string | null,
    email?: string | null,
    phone?: string | null,
    groups?: Array< string | null > | null,
    status: InviteStatus,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteInviteMutationVariables = {
  input: DeleteInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type DeleteInviteMutation = {
  deleteInvite?:  {
    __typename: "Invite",
    id: string,
    name: string,
    description?: string | null,
    email?: string | null,
    phone?: string | null,
    groups?: Array< string | null > | null,
    status: InviteStatus,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateCouponMutationVariables = {
  input: CreateCouponInput,
  condition?: ModelCouponConditionInput | null,
};

export type CreateCouponMutation = {
  createCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    description?: string | null,
    code: string,
    start?: string | null,
    expiration?: string | null,
    discountPercentage?: number | null,
    discountValue?: number | null,
    qtyLimit?: number | null,
    qtyUsed?: number | null,
    qtyProduct?: number | null,
    qtyProductUsed?: number | null,
    search?: string | null,
    products?:  {
      __typename: "ModelCouponProductConnection",
      nextToken?: string | null,
    } | null,
    couponUsed?:  {
      __typename: "ModelCouponUsedConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCouponMutationVariables = {
  input: DeleteCouponInput,
  condition?: ModelCouponConditionInput | null,
};

export type DeleteCouponMutation = {
  deleteCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    description?: string | null,
    code: string,
    start?: string | null,
    expiration?: string | null,
    discountPercentage?: number | null,
    discountValue?: number | null,
    qtyLimit?: number | null,
    qtyUsed?: number | null,
    qtyProduct?: number | null,
    qtyProductUsed?: number | null,
    search?: string | null,
    products?:  {
      __typename: "ModelCouponProductConnection",
      nextToken?: string | null,
    } | null,
    couponUsed?:  {
      __typename: "ModelCouponUsedConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFolderMutationVariables = {
  input: CreateFolderInput,
  condition?: ModelFolderConditionInput | null,
};

export type CreateFolderMutation = {
  createFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFolderMutationVariables = {
  input: UpdateFolderInput,
  condition?: ModelFolderConditionInput | null,
};

export type UpdateFolderMutation = {
  updateFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFolderMutationVariables = {
  input: DeleteFolderInput,
  condition?: ModelFolderConditionInput | null,
};

export type DeleteFolderMutation = {
  deleteFolder?:  {
    __typename: "Folder",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMidiaMutationVariables = {
  input: CreateMidiaInput,
  condition?: ModelMidiaConditionInput | null,
};

export type CreateMidiaMutation = {
  createMidia?:  {
    __typename: "Midia",
    id: string,
    key: string,
    type?: MidiaTypes | null,
    title?: string | null,
    subTitle?: string | null,
    description?: string | null,
    identifyText?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMidiaMutationVariables = {
  input: UpdateMidiaInput,
  condition?: ModelMidiaConditionInput | null,
};

export type UpdateMidiaMutation = {
  updateMidia?:  {
    __typename: "Midia",
    id: string,
    key: string,
    type?: MidiaTypes | null,
    title?: string | null,
    subTitle?: string | null,
    description?: string | null,
    identifyText?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMidiaMutationVariables = {
  input: DeleteMidiaInput,
  condition?: ModelMidiaConditionInput | null,
};

export type DeleteMidiaMutation = {
  deleteMidia?:  {
    __typename: "Midia",
    id: string,
    key: string,
    type?: MidiaTypes | null,
    title?: string | null,
    subTitle?: string | null,
    description?: string | null,
    identifyText?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    alias: string,
    order: number,
    title?: string | null,
    description?: string | null,
    orderDesc?: boolean | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    showDescriptionPage?: string | null,
    showThumbnailPage?: string | null,
    hide?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    alias: string,
    order: number,
    title?: string | null,
    description?: string | null,
    orderDesc?: boolean | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    showDescriptionPage?: string | null,
    showThumbnailPage?: string | null,
    hide?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    alias: string,
    order: number,
    title?: string | null,
    description?: string | null,
    orderDesc?: boolean | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    showDescriptionPage?: string | null,
    showThumbnailPage?: string | null,
    hide?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePageMutationVariables = {
  input: UpdatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type UpdatePageMutation = {
  updatePage?:  {
    __typename: "Page",
    id: string,
    alias: string,
    status: PageStatus,
    type: PageType,
    menu: string,
    menuProps?:  {
      __typename: "Menu",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      orderDesc?: boolean | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      showDescriptionPage?: string | null,
      showThumbnailPage?: string | null,
      hide?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    title: string,
    titlePadX?: string | null,
    titlePadY?: string | null,
    description?: string | null,
    content?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    tags?: Array< string | null > | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    optionTitle?: PageOptionTitle | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInMenu?: boolean | null,
    createdAt?: string | null,
    search?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePageMutationVariables = {
  input: DeletePageInput,
  condition?: ModelPageConditionInput | null,
};

export type DeletePageMutation = {
  deletePage?:  {
    __typename: "Page",
    id: string,
    alias: string,
    status: PageStatus,
    type: PageType,
    menu: string,
    menuProps?:  {
      __typename: "Menu",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      orderDesc?: boolean | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      showDescriptionPage?: string | null,
      showThumbnailPage?: string | null,
      hide?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    title: string,
    titlePadX?: string | null,
    titlePadY?: string | null,
    description?: string | null,
    content?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    tags?: Array< string | null > | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    optionTitle?: PageOptionTitle | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInMenu?: boolean | null,
    createdAt?: string | null,
    search?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateBlockMutationVariables = {
  input: CreateBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type CreateBlockMutation = {
  createBlock?:  {
    __typename: "Block",
    id: string,
    pageID: string,
    order: number,
    component: string,
    content: string,
    config?: string | null,
    page?:  {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      order: number,
      title: string,
      titlePadX?: string | null,
      titlePadY?: string | null,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlockMutationVariables = {
  input: UpdateBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type UpdateBlockMutation = {
  updateBlock?:  {
    __typename: "Block",
    id: string,
    pageID: string,
    order: number,
    component: string,
    content: string,
    config?: string | null,
    page?:  {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      order: number,
      title: string,
      titlePadX?: string | null,
      titlePadY?: string | null,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlockMutationVariables = {
  input: DeleteBlockInput,
  condition?: ModelBlockConditionInput | null,
};

export type DeleteBlockMutation = {
  deleteBlock?:  {
    __typename: "Block",
    id: string,
    pageID: string,
    order: number,
    component: string,
    content: string,
    config?: string | null,
    page?:  {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      order: number,
      title: string,
      titlePadX?: string | null,
      titlePadY?: string | null,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    alias: string,
    order: number,
    title?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    hide?: boolean | null,
    isSub?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    alias: string,
    order: number,
    title?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    hide?: boolean | null,
    isSub?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    alias: string,
    order: number,
    title?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    hide?: boolean | null,
    isSub?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    alias: string,
    status: PageStatus,
    category: string,
    categoryProps?:  {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subCategory: string,
    subCategoryProps?:  {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    code?: string | null,
    name: string,
    type?: string | null,
    description?: string | null,
    manufacturer?: string | null,
    contentTitle?: string | null,
    contentTitle2?: string | null,
    contentTitle3?: string | null,
    content?: string | null,
    content2?: string | null,
    content3?: string | null,
    tags?: Array< string | null > | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    price_of?: number | null,
    price: number,
    qty?: number | null,
    stockControl?: boolean | null,
    applicationTime?: number | null,
    applicationTimeChild?: number | null,
    photo1?: string | null,
    photo2?: string | null,
    photo3?: string | null,
    photo4?: string | null,
    photo5?: string | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    titlePadX?: string | null,
    titlePadY?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    optionTitle?: PageOptionTitle | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInMenu?: boolean | null,
    createdAt?: string | null,
    search?: string | null,
    hideInSearch?: boolean | null,
    options?:  {
      __typename: "ModelOptionConnection",
      nextToken?: string | null,
    } | null,
    kitItems?:  {
      __typename: "ModelKitItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    alias: string,
    status: PageStatus,
    category: string,
    categoryProps?:  {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subCategory: string,
    subCategoryProps?:  {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    code?: string | null,
    name: string,
    type?: string | null,
    description?: string | null,
    manufacturer?: string | null,
    contentTitle?: string | null,
    contentTitle2?: string | null,
    contentTitle3?: string | null,
    content?: string | null,
    content2?: string | null,
    content3?: string | null,
    tags?: Array< string | null > | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    price_of?: number | null,
    price: number,
    qty?: number | null,
    stockControl?: boolean | null,
    applicationTime?: number | null,
    applicationTimeChild?: number | null,
    photo1?: string | null,
    photo2?: string | null,
    photo3?: string | null,
    photo4?: string | null,
    photo5?: string | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    titlePadX?: string | null,
    titlePadY?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    optionTitle?: PageOptionTitle | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInMenu?: boolean | null,
    createdAt?: string | null,
    search?: string | null,
    hideInSearch?: boolean | null,
    options?:  {
      __typename: "ModelOptionConnection",
      nextToken?: string | null,
    } | null,
    kitItems?:  {
      __typename: "ModelKitItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    alias: string,
    status: PageStatus,
    category: string,
    categoryProps?:  {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subCategory: string,
    subCategoryProps?:  {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    code?: string | null,
    name: string,
    type?: string | null,
    description?: string | null,
    manufacturer?: string | null,
    contentTitle?: string | null,
    contentTitle2?: string | null,
    contentTitle3?: string | null,
    content?: string | null,
    content2?: string | null,
    content3?: string | null,
    tags?: Array< string | null > | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    price_of?: number | null,
    price: number,
    qty?: number | null,
    stockControl?: boolean | null,
    applicationTime?: number | null,
    applicationTimeChild?: number | null,
    photo1?: string | null,
    photo2?: string | null,
    photo3?: string | null,
    photo4?: string | null,
    photo5?: string | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    titlePadX?: string | null,
    titlePadY?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    optionTitle?: PageOptionTitle | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInMenu?: boolean | null,
    createdAt?: string | null,
    search?: string | null,
    hideInSearch?: boolean | null,
    options?:  {
      __typename: "ModelOptionConnection",
      nextToken?: string | null,
    } | null,
    kitItems?:  {
      __typename: "ModelKitItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateKitItemMutationVariables = {
  input: CreateKitItemInput,
  condition?: ModelKitItemConditionInput | null,
};

export type CreateKitItemMutation = {
  createKitItem?:  {
    __typename: "KitItem",
    id: string,
    productID: string,
    kitItemProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteKitItemMutationVariables = {
  input: DeleteKitItemInput,
  condition?: ModelKitItemConditionInput | null,
};

export type DeleteKitItemMutation = {
  deleteKitItem?:  {
    __typename: "KitItem",
    id: string,
    productID: string,
    kitItemProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOptionMutationVariables = {
  input: CreateOptionInput,
  condition?: ModelOptionConditionInput | null,
};

export type CreateOptionMutation = {
  createOption?:  {
    __typename: "Option",
    id: string,
    productID: string,
    name?: string | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOptionMutationVariables = {
  input: UpdateOptionInput,
  condition?: ModelOptionConditionInput | null,
};

export type UpdateOptionMutation = {
  updateOption?:  {
    __typename: "Option",
    id: string,
    productID: string,
    name?: string | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOptionMutationVariables = {
  input: DeleteOptionInput,
  condition?: ModelOptionConditionInput | null,
};

export type DeleteOptionMutation = {
  deleteOption?:  {
    __typename: "Option",
    id: string,
    productID: string,
    name?: string | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    id: string,
    userID: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    options?:  {
      __typename: "ModelCartOptionConnection",
      nextToken?: string | null,
    } | null,
    qty?: number | null,
    changeName?: string | null,
    changeDescription?: string | null,
    changeQtyBlend?: number | null,
    changePriceAdjustment?: string | null,
    blendID?: string | null,
    campaignToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartOptionMutationVariables = {
  input: DeleteCartOptionInput,
  condition?: ModelCartOptionConditionInput | null,
};

export type DeleteCartOptionMutation = {
  deleteCartOption?:  {
    __typename: "CartOption",
    id: string,
    cartID: string,
    optionID: string,
    option?:  {
      __typename: "Option",
      id: string,
      productID: string,
      name?: string | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userID?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: OrderStatus,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
    } | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    notes?: string | null,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    vaccinationCardItems?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateDeliveryMethodOrderMutationVariables = {
  input: CreateDeliveryMethodOrderInput,
  condition?: ModelDeliveryMethodOrderConditionInput | null,
};

export type CreateDeliveryMethodOrderMutation = {
  createDeliveryMethodOrder?:  {
    __typename: "DeliveryMethodOrder",
    id: string,
    name?: string | null,
    zipCode?: Array< string | null > | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDeliveryMethodOrderMutationVariables = {
  input: UpdateDeliveryMethodOrderInput,
  condition?: ModelDeliveryMethodOrderConditionInput | null,
};

export type UpdateDeliveryMethodOrderMutation = {
  updateDeliveryMethodOrder?:  {
    __typename: "DeliveryMethodOrder",
    id: string,
    name?: string | null,
    zipCode?: Array< string | null > | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDeliveryMethodOrderMutationVariables = {
  input: DeleteDeliveryMethodOrderInput,
  condition?: ModelDeliveryMethodOrderConditionInput | null,
};

export type DeleteDeliveryMethodOrderMutation = {
  deleteDeliveryMethodOrder?:  {
    __typename: "DeliveryMethodOrder",
    id: string,
    name?: string | null,
    zipCode?: Array< string | null > | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotifyMutationVariables = {
  input: UpdateNotifyInput,
  condition?: ModelNotifyConditionInput | null,
};

export type UpdateNotifyMutation = {
  updateNotify?:  {
    __typename: "Notify",
    id: string,
    userID: string,
    createdAt?: string | null,
    content?: string | null,
    link?: string | null,
    viewed?: boolean | null,
    updatedAt: string,
  } | null,
};

export type CreateCampaignMutationVariables = {
  input: CreateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type CreateCampaignMutation = {
  createCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    description?: string | null,
    code: string,
    start?: string | null,
    expiration?: string | null,
    discountPercentage?: number | null,
    discountValue?: number | null,
    qtyLimit?: number | null,
    qtyUsed?: number | null,
    qtyProduct?: number | null,
    qtyProductUsed?: number | null,
    orientation?: string | null,
    orderMessage?: string | null,
    zipCodeCoverage?: Array< string | null > | null,
    search?: string | null,
    products?:  {
      __typename: "ModelCampaignProductConnection",
      nextToken?: string | null,
    } | null,
    campaignUsed?:  {
      __typename: "ModelCampaignUsedConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCampaignCompanyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCampaignMutationVariables = {
  input: DeleteCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type DeleteCampaignMutation = {
  deleteCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    description?: string | null,
    code: string,
    start?: string | null,
    expiration?: string | null,
    discountPercentage?: number | null,
    discountValue?: number | null,
    qtyLimit?: number | null,
    qtyUsed?: number | null,
    qtyProduct?: number | null,
    qtyProductUsed?: number | null,
    orientation?: string | null,
    orderMessage?: string | null,
    zipCodeCoverage?: Array< string | null > | null,
    search?: string | null,
    products?:  {
      __typename: "ModelCampaignProductConnection",
      nextToken?: string | null,
    } | null,
    campaignUsed?:  {
      __typename: "ModelCampaignUsedConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCampaignCompanyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVaccinationCardMutationVariables = {
  input: CreateVaccinationCardInput,
  condition?: ModelVaccinationCardConditionInput | null,
};

export type CreateVaccinationCardMutation = {
  createVaccinationCard?:  {
    __typename: "VaccinationCard",
    id: string,
    userID: string,
    person: string,
    doc?: string | null,
    birth?: string | null,
    relationship?: string | null,
    notes?: string | null,
    avatar?: string | null,
    isOwner?: boolean | null,
    vaccinationCardItem?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVaccinationCardMutationVariables = {
  input: UpdateVaccinationCardInput,
  condition?: ModelVaccinationCardConditionInput | null,
};

export type UpdateVaccinationCardMutation = {
  updateVaccinationCard?:  {
    __typename: "VaccinationCard",
    id: string,
    userID: string,
    person: string,
    doc?: string | null,
    birth?: string | null,
    relationship?: string | null,
    notes?: string | null,
    avatar?: string | null,
    isOwner?: boolean | null,
    vaccinationCardItem?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVaccinationCardMutationVariables = {
  input: DeleteVaccinationCardInput,
  condition?: ModelVaccinationCardConditionInput | null,
};

export type DeleteVaccinationCardMutation = {
  deleteVaccinationCard?:  {
    __typename: "VaccinationCard",
    id: string,
    userID: string,
    person: string,
    doc?: string | null,
    birth?: string | null,
    relationship?: string | null,
    notes?: string | null,
    avatar?: string | null,
    isOwner?: boolean | null,
    vaccinationCardItem?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVaccinationCardItemMutationVariables = {
  input: UpdateVaccinationCardItemInput,
  condition?: ModelVaccinationCardItemConditionInput | null,
};

export type UpdateVaccinationCardItemMutation = {
  updateVaccinationCardItem?:  {
    __typename: "VaccinationCardItem",
    id: string,
    vaccinationCardID: string,
    vaccinationCard?:  {
      __typename: "VaccinationCard",
      id: string,
      userID: string,
      person: string,
      doc?: string | null,
      birth?: string | null,
      relationship?: string | null,
      notes?: string | null,
      avatar?: string | null,
      isOwner?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null,
    orderItemID: string,
    orderItem?:  {
      __typename: "OrderItem",
      id: string,
      orderID: string,
      productID: string,
      qty: number,
      code?: string | null,
      name: string,
      description?: string | null,
      price: number,
      photo1?: string | null,
      changeName?: string | null,
      changeDescription?: string | null,
      changeQtyBlend?: number | null,
      changePriceAdjustment?: string | null,
      blendID?: string | null,
      changeNameAdmin?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    campaignID?: string | null,
    campaign?:  {
      __typename: "Campaign",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      orientation?: string | null,
      orderMessage?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lote?: string | null,
    profissionalID?: string | null,
    profissional?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profissionalName?: string | null,
    coren?: string | null,
    dueDate?: string | null,
    via?: string | null,
    applicationDate?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    userID?: string | null,
  } | null,
};

export type DeleteVaccinationCardItemMutationVariables = {
  input: DeleteVaccinationCardItemInput,
  condition?: ModelVaccinationCardItemConditionInput | null,
};

export type DeleteVaccinationCardItemMutation = {
  deleteVaccinationCardItem?:  {
    __typename: "VaccinationCardItem",
    id: string,
    vaccinationCardID: string,
    vaccinationCard?:  {
      __typename: "VaccinationCard",
      id: string,
      userID: string,
      person: string,
      doc?: string | null,
      birth?: string | null,
      relationship?: string | null,
      notes?: string | null,
      avatar?: string | null,
      isOwner?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null,
    orderItemID: string,
    orderItem?:  {
      __typename: "OrderItem",
      id: string,
      orderID: string,
      productID: string,
      qty: number,
      code?: string | null,
      name: string,
      description?: string | null,
      price: number,
      photo1?: string | null,
      changeName?: string | null,
      changeDescription?: string | null,
      changeQtyBlend?: number | null,
      changePriceAdjustment?: string | null,
      blendID?: string | null,
      changeNameAdmin?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    campaignID?: string | null,
    campaign?:  {
      __typename: "Campaign",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      orientation?: string | null,
      orderMessage?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lote?: string | null,
    profissionalID?: string | null,
    profissional?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profissionalName?: string | null,
    coren?: string | null,
    dueDate?: string | null,
    via?: string | null,
    applicationDate?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    userID?: string | null,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    id: string,
    cnpj: string,
    name: string,
    openingHours?: string | null,
    phones?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    search?: string | null,
    enableRetail?: string | null,
    schedulesSunday?: Array< string | null > | null,
    schedulesMonday?: Array< string | null > | null,
    schedulesTuesday?: Array< string | null > | null,
    schedulesWednesday?: Array< string | null > | null,
    schedulesThursday?: Array< string | null > | null,
    schedulesFriday?: Array< string | null > | null,
    schedulesSaturday?: Array< string | null > | null,
    status?: CompanyStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    id: string,
    cnpj: string,
    name: string,
    openingHours?: string | null,
    phones?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    search?: string | null,
    enableRetail?: string | null,
    schedulesSunday?: Array< string | null > | null,
    schedulesMonday?: Array< string | null > | null,
    schedulesTuesday?: Array< string | null > | null,
    schedulesWednesday?: Array< string | null > | null,
    schedulesThursday?: Array< string | null > | null,
    schedulesFriday?: Array< string | null > | null,
    schedulesSaturday?: Array< string | null > | null,
    status?: CompanyStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    id: string,
    cnpj: string,
    name: string,
    openingHours?: string | null,
    phones?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    search?: string | null,
    enableRetail?: string | null,
    schedulesSunday?: Array< string | null > | null,
    schedulesMonday?: Array< string | null > | null,
    schedulesTuesday?: Array< string | null > | null,
    schedulesWednesday?: Array< string | null > | null,
    schedulesThursday?: Array< string | null > | null,
    schedulesFriday?: Array< string | null > | null,
    schedulesSaturday?: Array< string | null > | null,
    status?: CompanyStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthorizationListMutationVariables = {
  input: CreateAuthorizationListInput,
  condition?: ModelAuthorizationListConditionInput | null,
};

export type CreateAuthorizationListMutation = {
  createAuthorizationList?:  {
    __typename: "AuthorizationList",
    id: string,
    name: string,
    description?: string | null,
    start?: string | null,
    expiration?: string | null,
    orientation?: string | null,
    search?: string | null,
    qtyApplication?: number | null,
    qtyReturned?: number | null,
    contactNameFinished?: string | null,
    contactPhoneFinished?: string | null,
    contactEmailFinished?: string | null,
    notesFinished?: string | null,
    professionalFinished?: string | null,
    withList?: boolean | null,
    campaignCode?: string | null,
    OS?: string | null,
    status?: AuthorizationListStatus | null,
    members?:  {
      __typename: "ModelAuthorizationListMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorizationListMutationVariables = {
  input: UpdateAuthorizationListInput,
  condition?: ModelAuthorizationListConditionInput | null,
};

export type UpdateAuthorizationListMutation = {
  updateAuthorizationList?:  {
    __typename: "AuthorizationList",
    id: string,
    name: string,
    description?: string | null,
    start?: string | null,
    expiration?: string | null,
    orientation?: string | null,
    search?: string | null,
    qtyApplication?: number | null,
    qtyReturned?: number | null,
    contactNameFinished?: string | null,
    contactPhoneFinished?: string | null,
    contactEmailFinished?: string | null,
    notesFinished?: string | null,
    professionalFinished?: string | null,
    withList?: boolean | null,
    campaignCode?: string | null,
    OS?: string | null,
    status?: AuthorizationListStatus | null,
    members?:  {
      __typename: "ModelAuthorizationListMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorizationListMutationVariables = {
  input: DeleteAuthorizationListInput,
  condition?: ModelAuthorizationListConditionInput | null,
};

export type DeleteAuthorizationListMutation = {
  deleteAuthorizationList?:  {
    __typename: "AuthorizationList",
    id: string,
    name: string,
    description?: string | null,
    start?: string | null,
    expiration?: string | null,
    orientation?: string | null,
    search?: string | null,
    qtyApplication?: number | null,
    qtyReturned?: number | null,
    contactNameFinished?: string | null,
    contactPhoneFinished?: string | null,
    contactEmailFinished?: string | null,
    notesFinished?: string | null,
    professionalFinished?: string | null,
    withList?: boolean | null,
    campaignCode?: string | null,
    OS?: string | null,
    status?: AuthorizationListStatus | null,
    members?:  {
      __typename: "ModelAuthorizationListMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthorizationListClosureMutationVariables = {
  input: CreateAuthorizationListClosureInput,
  condition?: ModelAuthorizationListClosureConditionInput | null,
};

export type CreateAuthorizationListClosureMutation = {
  createAuthorizationListClosure?:  {
    __typename: "AuthorizationListClosure",
    id: string,
    authorizationListID: string,
    contactName?: string | null,
    contactPhone?: string | null,
    contactEmail?: string | null,
    notes?: string | null,
    qtyApplication?: number | null,
    qtyReturned?: number | null,
    professionalID?: string | null,
    OS?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorizationListClosureMutationVariables = {
  input: UpdateAuthorizationListClosureInput,
  condition?: ModelAuthorizationListClosureConditionInput | null,
};

export type UpdateAuthorizationListClosureMutation = {
  updateAuthorizationListClosure?:  {
    __typename: "AuthorizationListClosure",
    id: string,
    authorizationListID: string,
    contactName?: string | null,
    contactPhone?: string | null,
    contactEmail?: string | null,
    notes?: string | null,
    qtyApplication?: number | null,
    qtyReturned?: number | null,
    professionalID?: string | null,
    OS?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorizationListClosureMutationVariables = {
  input: DeleteAuthorizationListClosureInput,
  condition?: ModelAuthorizationListClosureConditionInput | null,
};

export type DeleteAuthorizationListClosureMutation = {
  deleteAuthorizationListClosure?:  {
    __typename: "AuthorizationListClosure",
    id: string,
    authorizationListID: string,
    contactName?: string | null,
    contactPhone?: string | null,
    contactEmail?: string | null,
    notes?: string | null,
    qtyApplication?: number | null,
    qtyReturned?: number | null,
    professionalID?: string | null,
    OS?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateAuthorizationListMemberMutationVariables = {
  input: CreateAuthorizationListMemberInput,
  condition?: ModelAuthorizationListMemberConditionInput | null,
};

export type CreateAuthorizationListMemberMutation = {
  createAuthorizationListMember?:  {
    __typename: "AuthorizationListMember",
    id: string,
    authorizationListID: string,
    name: string,
    key?: string | null,
    cpf?: string | null,
    birth?: string | null,
    search?: string | null,
    others?: string | null,
    vaccinations?:  {
      __typename: "ModelAuthorizationListMemberVaccinationConnection",
      nextToken?: string | null,
    } | null,
    authorizationList?:  {
      __typename: "AuthorizationList",
      id: string,
      name: string,
      description?: string | null,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      search?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      contactNameFinished?: string | null,
      contactPhoneFinished?: string | null,
      contactEmailFinished?: string | null,
      notesFinished?: string | null,
      professionalFinished?: string | null,
      withList?: boolean | null,
      campaignCode?: string | null,
      OS?: string | null,
      status?: AuthorizationListStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorizationListMemberMutationVariables = {
  input: DeleteAuthorizationListMemberInput,
  condition?: ModelAuthorizationListMemberConditionInput | null,
};

export type DeleteAuthorizationListMemberMutation = {
  deleteAuthorizationListMember?:  {
    __typename: "AuthorizationListMember",
    id: string,
    authorizationListID: string,
    name: string,
    key?: string | null,
    cpf?: string | null,
    birth?: string | null,
    search?: string | null,
    others?: string | null,
    vaccinations?:  {
      __typename: "ModelAuthorizationListMemberVaccinationConnection",
      nextToken?: string | null,
    } | null,
    authorizationList?:  {
      __typename: "AuthorizationList",
      id: string,
      name: string,
      description?: string | null,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      search?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      contactNameFinished?: string | null,
      contactPhoneFinished?: string | null,
      contactEmailFinished?: string | null,
      notesFinished?: string | null,
      professionalFinished?: string | null,
      withList?: boolean | null,
      campaignCode?: string | null,
      OS?: string | null,
      status?: AuthorizationListStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    notes?: string | null,
    status: ClientStatus,
    search?: string | null,
    code?: string | null,
    units?:  {
      __typename: "ModelClientUnitConnection",
      nextToken?: string | null,
    } | null,
    eligibles?:  {
      __typename: "ModelClientEligibleConnection",
      nextToken?: string | null,
    } | null,
    oss?:  {
      __typename: "ModelOSConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    notes?: string | null,
    status: ClientStatus,
    search?: string | null,
    code?: string | null,
    units?:  {
      __typename: "ModelClientUnitConnection",
      nextToken?: string | null,
    } | null,
    eligibles?:  {
      __typename: "ModelClientEligibleConnection",
      nextToken?: string | null,
    } | null,
    oss?:  {
      __typename: "ModelOSConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    notes?: string | null,
    status: ClientStatus,
    search?: string | null,
    code?: string | null,
    units?:  {
      __typename: "ModelClientUnitConnection",
      nextToken?: string | null,
    } | null,
    eligibles?:  {
      __typename: "ModelClientEligibleConnection",
      nextToken?: string | null,
    } | null,
    oss?:  {
      __typename: "ModelOSConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClientUnitMutationVariables = {
  input: CreateClientUnitInput,
  condition?: ModelClientUnitConditionInput | null,
};

export type CreateClientUnitMutation = {
  createClientUnit?:  {
    __typename: "ClientUnit",
    id: string,
    clientID: string,
    name?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    notes?: string | null,
    search?: string | null,
    contactName?: string | null,
    contactEmail?: string | null,
    contactPhone?: string | null,
    code?: string | null,
    oss?:  {
      __typename: "ModelOSConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientUnitMutationVariables = {
  input: UpdateClientUnitInput,
  condition?: ModelClientUnitConditionInput | null,
};

export type UpdateClientUnitMutation = {
  updateClientUnit?:  {
    __typename: "ClientUnit",
    id: string,
    clientID: string,
    name?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    notes?: string | null,
    search?: string | null,
    contactName?: string | null,
    contactEmail?: string | null,
    contactPhone?: string | null,
    code?: string | null,
    oss?:  {
      __typename: "ModelOSConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientUnitMutationVariables = {
  input: DeleteClientUnitInput,
  condition?: ModelClientUnitConditionInput | null,
};

export type DeleteClientUnitMutation = {
  deleteClientUnit?:  {
    __typename: "ClientUnit",
    id: string,
    clientID: string,
    name?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    notes?: string | null,
    search?: string | null,
    contactName?: string | null,
    contactEmail?: string | null,
    contactPhone?: string | null,
    code?: string | null,
    oss?:  {
      __typename: "ModelOSConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClientEligibleMutationVariables = {
  input: CreateClientEligibleInput,
  condition?: ModelClientEligibleConditionInput | null,
};

export type CreateClientEligibleMutation = {
  createClientEligible?:  {
    __typename: "ClientEligible",
    id: string,
    clientID: string,
    key: string,
    name?: string | null,
    cpf?: string | null,
    rg?: string | null,
    birth?: string | null,
    notes?: string | null,
    search?: string | null,
    relationship?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientEligibleMutationVariables = {
  input: UpdateClientEligibleInput,
  condition?: ModelClientEligibleConditionInput | null,
};

export type UpdateClientEligibleMutation = {
  updateClientEligible?:  {
    __typename: "ClientEligible",
    id: string,
    clientID: string,
    key: string,
    name?: string | null,
    cpf?: string | null,
    rg?: string | null,
    birth?: string | null,
    notes?: string | null,
    search?: string | null,
    relationship?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientEligibleMutationVariables = {
  input: DeleteClientEligibleInput,
  condition?: ModelClientEligibleConditionInput | null,
};

export type DeleteClientEligibleMutation = {
  deleteClientEligible?:  {
    __typename: "ClientEligible",
    id: string,
    clientID: string,
    key: string,
    name?: string | null,
    cpf?: string | null,
    rg?: string | null,
    birth?: string | null,
    notes?: string | null,
    search?: string | null,
    relationship?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEligibleVaccinationMutationVariables = {
  input: CreateEligibleVaccinationInput,
  condition?: ModelEligibleVaccinationConditionInput | null,
};

export type CreateEligibleVaccinationMutation = {
  createEligibleVaccination?:  {
    __typename: "EligibleVaccination",
    id: string,
    clientEligibleID: string,
    clientEligible?:  {
      __typename: "ClientEligible",
      id: string,
      clientID: string,
      key: string,
      name?: string | null,
      cpf?: string | null,
      rg?: string | null,
      birth?: string | null,
      notes?: string | null,
      search?: string | null,
      relationship?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profissionalID?: string | null,
    profissional?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    coren?: string | null,
    applicationDate?: string | null,
    reason?: string | null,
    vaccination?: string | null,
    status?: EligibleVaccinationStatus | null,
    localCity?: string | null,
    localState?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEligibleVaccinationMutationVariables = {
  input: UpdateEligibleVaccinationInput,
  condition?: ModelEligibleVaccinationConditionInput | null,
};

export type UpdateEligibleVaccinationMutation = {
  updateEligibleVaccination?:  {
    __typename: "EligibleVaccination",
    id: string,
    clientEligibleID: string,
    clientEligible?:  {
      __typename: "ClientEligible",
      id: string,
      clientID: string,
      key: string,
      name?: string | null,
      cpf?: string | null,
      rg?: string | null,
      birth?: string | null,
      notes?: string | null,
      search?: string | null,
      relationship?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profissionalID?: string | null,
    profissional?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    coren?: string | null,
    applicationDate?: string | null,
    reason?: string | null,
    vaccination?: string | null,
    status?: EligibleVaccinationStatus | null,
    localCity?: string | null,
    localState?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEligibleVaccinationMutationVariables = {
  input: DeleteEligibleVaccinationInput,
  condition?: ModelEligibleVaccinationConditionInput | null,
};

export type DeleteEligibleVaccinationMutation = {
  deleteEligibleVaccination?:  {
    __typename: "EligibleVaccination",
    id: string,
    clientEligibleID: string,
    clientEligible?:  {
      __typename: "ClientEligible",
      id: string,
      clientID: string,
      key: string,
      name?: string | null,
      cpf?: string | null,
      rg?: string | null,
      birth?: string | null,
      notes?: string | null,
      search?: string | null,
      relationship?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profissionalID?: string | null,
    profissional?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    coren?: string | null,
    applicationDate?: string | null,
    reason?: string | null,
    vaccination?: string | null,
    status?: EligibleVaccinationStatus | null,
    localCity?: string | null,
    localState?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    status?: UserStatus | null,
    active?: boolean | null,
    avatar?: string | null,
    search?: string | null,
    createdAt?: string | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    groups?:  {
      __typename: "ModelGroupUserConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    payMethods?:  {
      __typename: "ModelPayMethodConnection",
      nextToken?: string | null,
    } | null,
    relationsLink?:  {
      __typename: "ModelRelationLinkConnection",
      nextToken?: string | null,
    } | null,
    carts?:  {
      __typename: "ModelCartConnection",
      nextToken?: string | null,
    } | null,
    ordersByCreatedAt?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    ordersByStatusCreatedAt?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    doc?: string | null,
    docType?: DocTypes | null,
    docProfessionType?: string | null,
    docProfession?: string | null,
    profession?: string | null,
    specialties?: string | null,
    subSpecialties?: string | null,
    bio?: string | null,
    gender?: GenderOptions | null,
    birth?: string | null,
    notes?: string | null,
    urlUserName?: string | null,
    urlEnable?: boolean | null,
    allowViewEmail?: boolean | null,
    allowViewPhone?: boolean | null,
    allowCookiesPreference?: boolean | null,
    allowCookiesStatistic?: boolean | null,
    pix?: string | null,
    zipCodeCoverage?: Array< string | null > | null,
    schedulesSunday?: Array< string | null > | null,
    schedulesMonday?: Array< string | null > | null,
    schedulesTuesday?: Array< string | null > | null,
    schedulesWednesday?: Array< string | null > | null,
    schedulesThursday?: Array< string | null > | null,
    schedulesFriday?: Array< string | null > | null,
    schedulesSaturday?: Array< string | null > | null,
    regionsConfig?: string | null,
    regionSunday?: string | null,
    regionMonday?: string | null,
    regionTuesday?: string | null,
    regionWednesday?: string | null,
    regionThursday?: string | null,
    regionFriday?: string | null,
    regionSaturday?: string | null,
    customerPagarmeID?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyHomeCare?: boolean | null,
    companyCampaign?: boolean | null,
    companyAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTempAuxMutationVariables = {
  input: CreateTempAuxInput,
  condition?: ModelTempAuxConditionInput | null,
};

export type CreateTempAuxMutation = {
  createTempAux?:  {
    __typename: "TempAux",
    id: string,
    name?: string | null,
    doc?: string | null,
    birth?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTempAuxMutationVariables = {
  input: DeleteTempAuxInput,
  condition?: ModelTempAuxConditionInput | null,
};

export type DeleteTempAuxMutation = {
  deleteTempAux?:  {
    __typename: "TempAux",
    id: string,
    name?: string | null,
    doc?: string | null,
    birth?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInviteMutationVariables = {
  input: UpdateInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type UpdateInviteMutation = {
  updateInvite?:  {
    __typename: "Invite",
    id: string,
    name: string,
    description?: string | null,
    email?: string | null,
    phone?: string | null,
    groups?: Array< string | null > | null,
    status: InviteStatus,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCouponMutationVariables = {
  input: UpdateCouponInput,
  condition?: ModelCouponConditionInput | null,
};

export type UpdateCouponMutation = {
  updateCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    description?: string | null,
    code: string,
    start?: string | null,
    expiration?: string | null,
    discountPercentage?: number | null,
    discountValue?: number | null,
    qtyLimit?: number | null,
    qtyUsed?: number | null,
    qtyProduct?: number | null,
    qtyProductUsed?: number | null,
    search?: string | null,
    products?:  {
      __typename: "ModelCouponProductConnection",
      nextToken?: string | null,
    } | null,
    couponUsed?:  {
      __typename: "ModelCouponUsedConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCouponProductMutationVariables = {
  input: CreateCouponProductInput,
  condition?: ModelCouponProductConditionInput | null,
};

export type CreateCouponProductMutation = {
  createCouponProduct?:  {
    __typename: "CouponProduct",
    id: string,
    couponID: string,
    productID: string,
    price?: number | null,
    limit?: number | null,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCouponProductMutationVariables = {
  input: UpdateCouponProductInput,
  condition?: ModelCouponProductConditionInput | null,
};

export type UpdateCouponProductMutation = {
  updateCouponProduct?:  {
    __typename: "CouponProduct",
    id: string,
    couponID: string,
    productID: string,
    price?: number | null,
    limit?: number | null,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCouponProductMutationVariables = {
  input: DeleteCouponProductInput,
  condition?: ModelCouponProductConditionInput | null,
};

export type DeleteCouponProductMutation = {
  deleteCouponProduct?:  {
    __typename: "CouponProduct",
    id: string,
    couponID: string,
    productID: string,
    price?: number | null,
    limit?: number | null,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCouponUsedMutationVariables = {
  input: CreateCouponUsedInput,
  condition?: ModelCouponUsedConditionInput | null,
};

export type CreateCouponUsedMutation = {
  createCouponUsed?:  {
    __typename: "CouponUsed",
    id: string,
    couponID: string,
    coupon?:  {
      __typename: "Coupon",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    qty?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRelationMutationVariables = {
  input: CreateRelationInput,
  condition?: ModelRelationConditionInput | null,
};

export type CreateRelationMutation = {
  createRelation?:  {
    __typename: "Relation",
    id: string,
    type: RelationTypes,
    mode: RelationModes,
    name?: string | null,
    description?: string | null,
    avatar?: string | null,
    reference?: string | null,
    members: Array< string >,
    admins: Array< string >,
    updatedAt?: string | null,
    status: RelationStatus,
    search?: string | null,
    relationsLink?:  {
      __typename: "ModelRelationLinkConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
  } | null,
};

export type UpdateRelationMutationVariables = {
  input: UpdateRelationInput,
  condition?: ModelRelationConditionInput | null,
};

export type UpdateRelationMutation = {
  updateRelation?:  {
    __typename: "Relation",
    id: string,
    type: RelationTypes,
    mode: RelationModes,
    name?: string | null,
    description?: string | null,
    avatar?: string | null,
    reference?: string | null,
    members: Array< string >,
    admins: Array< string >,
    updatedAt?: string | null,
    status: RelationStatus,
    search?: string | null,
    relationsLink?:  {
      __typename: "ModelRelationLinkConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
  } | null,
};

export type DeleteRelationMutationVariables = {
  input: DeleteRelationInput,
  condition?: ModelRelationConditionInput | null,
};

export type DeleteRelationMutation = {
  deleteRelation?:  {
    __typename: "Relation",
    id: string,
    type: RelationTypes,
    mode: RelationModes,
    name?: string | null,
    description?: string | null,
    avatar?: string | null,
    reference?: string | null,
    members: Array< string >,
    admins: Array< string >,
    updatedAt?: string | null,
    status: RelationStatus,
    search?: string | null,
    relationsLink?:  {
      __typename: "ModelRelationLinkConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
  } | null,
};

export type CreateRelationLinkMutationVariables = {
  input: CreateRelationLinkInput,
  condition?: ModelRelationLinkConditionInput | null,
};

export type CreateRelationLinkMutation = {
  createRelationLink?:  {
    __typename: "RelationLink",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    relationID: string,
    relation?:  {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null,
    type: string,
    notify: number,
    updatedAt?: string | null,
    search?: string | null,
    percentage?: number | null,
    createdAt: string,
  } | null,
};

export type UpdateRelationLinkMutationVariables = {
  input: UpdateRelationLinkInput,
  condition?: ModelRelationLinkConditionInput | null,
};

export type UpdateRelationLinkMutation = {
  updateRelationLink?:  {
    __typename: "RelationLink",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    relationID: string,
    relation?:  {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null,
    type: string,
    notify: number,
    updatedAt?: string | null,
    search?: string | null,
    percentage?: number | null,
    createdAt: string,
  } | null,
};

export type DeleteRelationLinkMutationVariables = {
  input: DeleteRelationLinkInput,
  condition?: ModelRelationLinkConditionInput | null,
};

export type DeleteRelationLinkMutation = {
  deleteRelationLink?:  {
    __typename: "RelationLink",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    relationID: string,
    relation?:  {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null,
    type: string,
    notify: number,
    updatedAt?: string | null,
    search?: string | null,
    percentage?: number | null,
    createdAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    relationID?: string | null,
    relation?:  {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    type: MessagesTypes,
    content?: string | null,
    search?: string | null,
    identityId?: string | null,
    createdAt?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    relationID?: string | null,
    relation?:  {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    type: MessagesTypes,
    content?: string | null,
    search?: string | null,
    identityId?: string | null,
    createdAt?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePageMutationVariables = {
  input: CreatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type CreatePageMutation = {
  createPage?:  {
    __typename: "Page",
    id: string,
    alias: string,
    status: PageStatus,
    type: PageType,
    menu: string,
    menuProps?:  {
      __typename: "Menu",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      orderDesc?: boolean | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      showDescriptionPage?: string | null,
      showThumbnailPage?: string | null,
      hide?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    title: string,
    titlePadX?: string | null,
    titlePadY?: string | null,
    description?: string | null,
    content?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    tags?: Array< string | null > | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    optionTitle?: PageOptionTitle | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInMenu?: boolean | null,
    createdAt?: string | null,
    search?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    id: string,
    userID: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    options?:  {
      __typename: "ModelCartOptionConnection",
      nextToken?: string | null,
    } | null,
    qty?: number | null,
    changeName?: string | null,
    changeDescription?: string | null,
    changeQtyBlend?: number | null,
    changePriceAdjustment?: string | null,
    blendID?: string | null,
    campaignToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    id: string,
    userID: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    options?:  {
      __typename: "ModelCartOptionConnection",
      nextToken?: string | null,
    } | null,
    qty?: number | null,
    changeName?: string | null,
    changeDescription?: string | null,
    changeQtyBlend?: number | null,
    changePriceAdjustment?: string | null,
    blendID?: string | null,
    campaignToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartOptionMutationVariables = {
  input: CreateCartOptionInput,
  condition?: ModelCartOptionConditionInput | null,
};

export type CreateCartOptionMutation = {
  createCartOption?:  {
    __typename: "CartOption",
    id: string,
    cartID: string,
    optionID: string,
    option?:  {
      __typename: "Option",
      id: string,
      productID: string,
      name?: string | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userID?: string | null,
  } | null,
};

export type UpdateCartOptionMutationVariables = {
  input: UpdateCartOptionInput,
  condition?: ModelCartOptionConditionInput | null,
};

export type UpdateCartOptionMutation = {
  updateCartOption?:  {
    __typename: "CartOption",
    id: string,
    cartID: string,
    optionID: string,
    option?:  {
      __typename: "Option",
      id: string,
      productID: string,
      name?: string | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userID?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: OrderStatus,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
    } | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    notes?: string | null,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    vaccinationCardItems?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: OrderStatus,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
    } | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    notes?: string | null,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    vaccinationCardItems?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateOrderItemMutationVariables = {
  input: CreateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type CreateOrderItemMutation = {
  createOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    optionsItem?:  {
      __typename: "ModelOrderItemOptionConnection",
      nextToken?: string | null,
    } | null,
    qty: number,
    code?: string | null,
    name: string,
    description?: string | null,
    price: number,
    photo1?: string | null,
    changeName?: string | null,
    changeDescription?: string | null,
    changeQtyBlend?: number | null,
    changePriceAdjustment?: string | null,
    blendID?: string | null,
    changeNameAdmin?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderItemMutationVariables = {
  input: UpdateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type UpdateOrderItemMutation = {
  updateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    optionsItem?:  {
      __typename: "ModelOrderItemOptionConnection",
      nextToken?: string | null,
    } | null,
    qty: number,
    code?: string | null,
    name: string,
    description?: string | null,
    price: number,
    photo1?: string | null,
    changeName?: string | null,
    changeDescription?: string | null,
    changeQtyBlend?: number | null,
    changePriceAdjustment?: string | null,
    blendID?: string | null,
    changeNameAdmin?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderItemMutationVariables = {
  input: DeleteOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type DeleteOrderItemMutation = {
  deleteOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    optionsItem?:  {
      __typename: "ModelOrderItemOptionConnection",
      nextToken?: string | null,
    } | null,
    qty: number,
    code?: string | null,
    name: string,
    description?: string | null,
    price: number,
    photo1?: string | null,
    changeName?: string | null,
    changeDescription?: string | null,
    changeQtyBlend?: number | null,
    changePriceAdjustment?: string | null,
    blendID?: string | null,
    changeNameAdmin?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderItemOptionMutationVariables = {
  input: CreateOrderItemOptionInput,
  condition?: ModelOrderItemOptionConditionInput | null,
};

export type CreateOrderItemOptionMutation = {
  createOrderItemOption?:  {
    __typename: "OrderItemOption",
    id: string,
    orderItemID: string,
    optionID: string,
    option?:  {
      __typename: "Option",
      id: string,
      productID: string,
      name?: string | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderItemOptionMutationVariables = {
  input: UpdateOrderItemOptionInput,
  condition?: ModelOrderItemOptionConditionInput | null,
};

export type UpdateOrderItemOptionMutation = {
  updateOrderItemOption?:  {
    __typename: "OrderItemOption",
    id: string,
    orderItemID: string,
    optionID: string,
    option?:  {
      __typename: "Option",
      id: string,
      productID: string,
      name?: string | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderItemOptionMutationVariables = {
  input: DeleteOrderItemOptionInput,
  condition?: ModelOrderItemOptionConditionInput | null,
};

export type DeleteOrderItemOptionMutation = {
  deleteOrderItemOption?:  {
    __typename: "OrderItemOption",
    id: string,
    orderItemID: string,
    optionID: string,
    option?:  {
      __typename: "Option",
      id: string,
      productID: string,
      name?: string | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDeliveryOrderMutationVariables = {
  input: CreateDeliveryOrderInput,
  condition?: ModelDeliveryOrderConditionInput | null,
};

export type CreateDeliveryOrderMutation = {
  createDeliveryOrder?:  {
    __typename: "DeliveryOrder",
    id: string,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null,
    date: string,
    deliveryUserID?: string | null,
    deliveryUser?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    deliveryCompanyID?: string | null,
    deliveryCompany?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: DeliveryStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDeliveryOrderMutationVariables = {
  input: UpdateDeliveryOrderInput,
  condition?: ModelDeliveryOrderConditionInput | null,
};

export type UpdateDeliveryOrderMutation = {
  updateDeliveryOrder?:  {
    __typename: "DeliveryOrder",
    id: string,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null,
    date: string,
    deliveryUserID?: string | null,
    deliveryUser?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    deliveryCompanyID?: string | null,
    deliveryCompany?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: DeliveryStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDeliveryOrderMutationVariables = {
  input: DeleteDeliveryOrderInput,
  condition?: ModelDeliveryOrderConditionInput | null,
};

export type DeleteDeliveryOrderMutation = {
  deleteDeliveryOrder?:  {
    __typename: "DeliveryOrder",
    id: string,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null,
    date: string,
    deliveryUserID?: string | null,
    deliveryUser?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    deliveryCompanyID?: string | null,
    deliveryCompany?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: DeliveryStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotifyMutationVariables = {
  input: CreateNotifyInput,
  condition?: ModelNotifyConditionInput | null,
};

export type CreateNotifyMutation = {
  createNotify?:  {
    __typename: "Notify",
    id: string,
    userID: string,
    createdAt?: string | null,
    content?: string | null,
    link?: string | null,
    viewed?: boolean | null,
    updatedAt: string,
  } | null,
};

export type DeleteNotifyMutationVariables = {
  input: DeleteNotifyInput,
  condition?: ModelNotifyConditionInput | null,
};

export type DeleteNotifyMutation = {
  deleteNotify?:  {
    __typename: "Notify",
    id: string,
    userID: string,
    createdAt?: string | null,
    content?: string | null,
    link?: string | null,
    viewed?: boolean | null,
    updatedAt: string,
  } | null,
};

export type UpdateCampaignMutationVariables = {
  input: UpdateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type UpdateCampaignMutation = {
  updateCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    description?: string | null,
    code: string,
    start?: string | null,
    expiration?: string | null,
    discountPercentage?: number | null,
    discountValue?: number | null,
    qtyLimit?: number | null,
    qtyUsed?: number | null,
    qtyProduct?: number | null,
    qtyProductUsed?: number | null,
    orientation?: string | null,
    orderMessage?: string | null,
    zipCodeCoverage?: Array< string | null > | null,
    search?: string | null,
    products?:  {
      __typename: "ModelCampaignProductConnection",
      nextToken?: string | null,
    } | null,
    campaignUsed?:  {
      __typename: "ModelCampaignUsedConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCampaignCompanyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCampaignUsedMutationVariables = {
  input: CreateCampaignUsedInput,
  condition?: ModelCampaignUsedConditionInput | null,
};

export type CreateCampaignUsedMutation = {
  createCampaignUsed?:  {
    __typename: "CampaignUsed",
    id: string,
    campaignID: string,
    campaign?:  {
      __typename: "Campaign",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      orientation?: string | null,
      orderMessage?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    qty?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCampaignProductMutationVariables = {
  input: CreateCampaignProductInput,
  condition?: ModelCampaignProductConditionInput | null,
};

export type CreateCampaignProductMutation = {
  createCampaignProduct?:  {
    __typename: "CampaignProduct",
    id: string,
    campaignID: string,
    productID: string,
    price?: number | null,
    limit?: number | null,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCampaignProductMutationVariables = {
  input: UpdateCampaignProductInput,
  condition?: ModelCampaignProductConditionInput | null,
};

export type UpdateCampaignProductMutation = {
  updateCampaignProduct?:  {
    __typename: "CampaignProduct",
    id: string,
    campaignID: string,
    productID: string,
    price?: number | null,
    limit?: number | null,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCampaignProductMutationVariables = {
  input: DeleteCampaignProductInput,
  condition?: ModelCampaignProductConditionInput | null,
};

export type DeleteCampaignProductMutation = {
  deleteCampaignProduct?:  {
    __typename: "CampaignProduct",
    id: string,
    campaignID: string,
    productID: string,
    price?: number | null,
    limit?: number | null,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCampaignCompanyMutationVariables = {
  input: CreateCampaignCompanyInput,
  condition?: ModelCampaignCompanyConditionInput | null,
};

export type CreateCampaignCompanyMutation = {
  createCampaignCompany?:  {
    __typename: "CampaignCompany",
    id: string,
    campaignID: string,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCampaignCompanyMutationVariables = {
  input: UpdateCampaignCompanyInput,
  condition?: ModelCampaignCompanyConditionInput | null,
};

export type UpdateCampaignCompanyMutation = {
  updateCampaignCompany?:  {
    __typename: "CampaignCompany",
    id: string,
    campaignID: string,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCampaignCompanyMutationVariables = {
  input: DeleteCampaignCompanyInput,
  condition?: ModelCampaignCompanyConditionInput | null,
};

export type DeleteCampaignCompanyMutation = {
  deleteCampaignCompany?:  {
    __typename: "CampaignCompany",
    id: string,
    campaignID: string,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVaccinationCardItemMutationVariables = {
  input: CreateVaccinationCardItemInput,
  condition?: ModelVaccinationCardItemConditionInput | null,
};

export type CreateVaccinationCardItemMutation = {
  createVaccinationCardItem?:  {
    __typename: "VaccinationCardItem",
    id: string,
    vaccinationCardID: string,
    vaccinationCard?:  {
      __typename: "VaccinationCard",
      id: string,
      userID: string,
      person: string,
      doc?: string | null,
      birth?: string | null,
      relationship?: string | null,
      notes?: string | null,
      avatar?: string | null,
      isOwner?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    orderID: string,
    order?:  {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null,
    orderItemID: string,
    orderItem?:  {
      __typename: "OrderItem",
      id: string,
      orderID: string,
      productID: string,
      qty: number,
      code?: string | null,
      name: string,
      description?: string | null,
      price: number,
      photo1?: string | null,
      changeName?: string | null,
      changeDescription?: string | null,
      changeQtyBlend?: number | null,
      changePriceAdjustment?: string | null,
      blendID?: string | null,
      changeNameAdmin?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    campaignID?: string | null,
    campaign?:  {
      __typename: "Campaign",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      orientation?: string | null,
      orderMessage?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lote?: string | null,
    profissionalID?: string | null,
    profissional?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profissionalName?: string | null,
    coren?: string | null,
    dueDate?: string | null,
    via?: string | null,
    applicationDate?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    userID?: string | null,
  } | null,
};

export type UpdateAuthorizationListMemberMutationVariables = {
  input: UpdateAuthorizationListMemberInput,
  condition?: ModelAuthorizationListMemberConditionInput | null,
};

export type UpdateAuthorizationListMemberMutation = {
  updateAuthorizationListMember?:  {
    __typename: "AuthorizationListMember",
    id: string,
    authorizationListID: string,
    name: string,
    key?: string | null,
    cpf?: string | null,
    birth?: string | null,
    search?: string | null,
    others?: string | null,
    vaccinations?:  {
      __typename: "ModelAuthorizationListMemberVaccinationConnection",
      nextToken?: string | null,
    } | null,
    authorizationList?:  {
      __typename: "AuthorizationList",
      id: string,
      name: string,
      description?: string | null,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      search?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      contactNameFinished?: string | null,
      contactPhoneFinished?: string | null,
      contactEmailFinished?: string | null,
      notesFinished?: string | null,
      professionalFinished?: string | null,
      withList?: boolean | null,
      campaignCode?: string | null,
      OS?: string | null,
      status?: AuthorizationListStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthorizationListMemberVaccinationMutationVariables = {
  input: CreateAuthorizationListMemberVaccinationInput,
  condition?: ModelAuthorizationListMemberVaccinationConditionInput | null,
};

export type CreateAuthorizationListMemberVaccinationMutation = {
  createAuthorizationListMemberVaccination?:  {
    __typename: "AuthorizationListMemberVaccination",
    id: string,
    authorizationListID: string,
    authorizationList?:  {
      __typename: "AuthorizationList",
      id: string,
      name: string,
      description?: string | null,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      search?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      contactNameFinished?: string | null,
      contactPhoneFinished?: string | null,
      contactEmailFinished?: string | null,
      notesFinished?: string | null,
      professionalFinished?: string | null,
      withList?: boolean | null,
      campaignCode?: string | null,
      OS?: string | null,
      status?: AuthorizationListStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorizationListMemberID: string,
    authorizationListMember?:  {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profissionalID?: string | null,
    profissional?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    coren?: string | null,
    lote?: string | null,
    dueDate?: string | null,
    via?: string | null,
    OS?: string | null,
    applicationDate?: string | null,
    applicationTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorizationListMemberVaccinationMutationVariables = {
  input: UpdateAuthorizationListMemberVaccinationInput,
  condition?: ModelAuthorizationListMemberVaccinationConditionInput | null,
};

export type UpdateAuthorizationListMemberVaccinationMutation = {
  updateAuthorizationListMemberVaccination?:  {
    __typename: "AuthorizationListMemberVaccination",
    id: string,
    authorizationListID: string,
    authorizationList?:  {
      __typename: "AuthorizationList",
      id: string,
      name: string,
      description?: string | null,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      search?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      contactNameFinished?: string | null,
      contactPhoneFinished?: string | null,
      contactEmailFinished?: string | null,
      notesFinished?: string | null,
      professionalFinished?: string | null,
      withList?: boolean | null,
      campaignCode?: string | null,
      OS?: string | null,
      status?: AuthorizationListStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorizationListMemberID: string,
    authorizationListMember?:  {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profissionalID?: string | null,
    profissional?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    coren?: string | null,
    lote?: string | null,
    dueDate?: string | null,
    via?: string | null,
    OS?: string | null,
    applicationDate?: string | null,
    applicationTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorizationListMemberVaccinationMutationVariables = {
  input: DeleteAuthorizationListMemberVaccinationInput,
  condition?: ModelAuthorizationListMemberVaccinationConditionInput | null,
};

export type DeleteAuthorizationListMemberVaccinationMutation = {
  deleteAuthorizationListMemberVaccination?:  {
    __typename: "AuthorizationListMemberVaccination",
    id: string,
    authorizationListID: string,
    authorizationList?:  {
      __typename: "AuthorizationList",
      id: string,
      name: string,
      description?: string | null,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      search?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      contactNameFinished?: string | null,
      contactPhoneFinished?: string | null,
      contactEmailFinished?: string | null,
      notesFinished?: string | null,
      professionalFinished?: string | null,
      withList?: boolean | null,
      campaignCode?: string | null,
      OS?: string | null,
      status?: AuthorizationListStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authorizationListMemberID: string,
    authorizationListMember?:  {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profissionalID?: string | null,
    profissional?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    coren?: string | null,
    lote?: string | null,
    dueDate?: string | null,
    via?: string | null,
    OS?: string | null,
    applicationDate?: string | null,
    applicationTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCounterMutationVariables = {
  input: CreateCounterInput,
  condition?: ModelCounterConditionInput | null,
};

export type CreateCounterMutation = {
  createCounter?:  {
    __typename: "Counter",
    id: string,
    qty: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCounterMutationVariables = {
  input: UpdateCounterInput,
  condition?: ModelCounterConditionInput | null,
};

export type UpdateCounterMutation = {
  updateCounter?:  {
    __typename: "Counter",
    id: string,
    qty: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCounterMutationVariables = {
  input: DeleteCounterInput,
  condition?: ModelCounterConditionInput | null,
};

export type DeleteCounterMutation = {
  deleteCounter?:  {
    __typename: "Counter",
    id: string,
    qty: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClientUserMutationVariables = {
  input: CreateClientUserInput,
  condition?: ModelClientUserConditionInput | null,
};

export type CreateClientUserMutation = {
  createClientUser?:  {
    __typename: "ClientUser",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      notes?: string | null,
      status: ClientStatus,
      search?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientUserMutationVariables = {
  input: DeleteClientUserInput,
  condition?: ModelClientUserConditionInput | null,
};

export type DeleteClientUserMutation = {
  deleteClientUser?:  {
    __typename: "ClientUser",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      notes?: string | null,
      status: ClientStatus,
      search?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOSMutationVariables = {
  input: CreateOSInput,
  condition?: ModelOSConditionInput | null,
};

export type CreateOSMutation = {
  createOS?:  {
    __typename: "OS",
    id: string,
    clientID: string,
    clientUnitID: string,
    driverID?: string | null,
    professionals: Array< string >,
    collaborators?: Array< string > | null,
    number: number,
    start?: string | null,
    expiration?: string | null,
    orientation?: string | null,
    notes?: string | null,
    status: OSStatus,
    allowOffList?: boolean | null,
    withList?: boolean | null,
    vaccination?: string | null,
    qtyApplication?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    professionalStarted?: string | null,
    professionalFinished?: string | null,
    notesStarted?: string | null,
    notesFinished?: string | null,
    clientNameStarted?: string | null,
    clientNameFinished?: string | null,
    unitNameFinished?: string | null,
    contactNameFinished?: string | null,
    contactDocFinished?: string | null,
    contactCRMFinished?: string | null,
    contactEmailFinished?: string | null,
    stayVaccines?: boolean | null,
    stayQtd?: number | null,
    lat?: number | null,
    lng?: number | null,
    eligiblesVaccination?:  {
      __typename: "ModelEligibleVaccinationConnection",
      nextToken?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      notes?: string | null,
      status: ClientStatus,
      search?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientUnit?:  {
      __typename: "ClientUnit",
      id: string,
      clientID: string,
      name?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      notes?: string | null,
      search?: string | null,
      contactName?: string | null,
      contactEmail?: string | null,
      contactPhone?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOSMutationVariables = {
  input: UpdateOSInput,
  condition?: ModelOSConditionInput | null,
};

export type UpdateOSMutation = {
  updateOS?:  {
    __typename: "OS",
    id: string,
    clientID: string,
    clientUnitID: string,
    driverID?: string | null,
    professionals: Array< string >,
    collaborators?: Array< string > | null,
    number: number,
    start?: string | null,
    expiration?: string | null,
    orientation?: string | null,
    notes?: string | null,
    status: OSStatus,
    allowOffList?: boolean | null,
    withList?: boolean | null,
    vaccination?: string | null,
    qtyApplication?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    professionalStarted?: string | null,
    professionalFinished?: string | null,
    notesStarted?: string | null,
    notesFinished?: string | null,
    clientNameStarted?: string | null,
    clientNameFinished?: string | null,
    unitNameFinished?: string | null,
    contactNameFinished?: string | null,
    contactDocFinished?: string | null,
    contactCRMFinished?: string | null,
    contactEmailFinished?: string | null,
    stayVaccines?: boolean | null,
    stayQtd?: number | null,
    lat?: number | null,
    lng?: number | null,
    eligiblesVaccination?:  {
      __typename: "ModelEligibleVaccinationConnection",
      nextToken?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      notes?: string | null,
      status: ClientStatus,
      search?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientUnit?:  {
      __typename: "ClientUnit",
      id: string,
      clientID: string,
      name?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      notes?: string | null,
      search?: string | null,
      contactName?: string | null,
      contactEmail?: string | null,
      contactPhone?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOSMutationVariables = {
  input: DeleteOSInput,
  condition?: ModelOSConditionInput | null,
};

export type DeleteOSMutation = {
  deleteOS?:  {
    __typename: "OS",
    id: string,
    clientID: string,
    clientUnitID: string,
    driverID?: string | null,
    professionals: Array< string >,
    collaborators?: Array< string > | null,
    number: number,
    start?: string | null,
    expiration?: string | null,
    orientation?: string | null,
    notes?: string | null,
    status: OSStatus,
    allowOffList?: boolean | null,
    withList?: boolean | null,
    vaccination?: string | null,
    qtyApplication?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    professionalStarted?: string | null,
    professionalFinished?: string | null,
    notesStarted?: string | null,
    notesFinished?: string | null,
    clientNameStarted?: string | null,
    clientNameFinished?: string | null,
    unitNameFinished?: string | null,
    contactNameFinished?: string | null,
    contactDocFinished?: string | null,
    contactCRMFinished?: string | null,
    contactEmailFinished?: string | null,
    stayVaccines?: boolean | null,
    stayQtd?: number | null,
    lat?: number | null,
    lng?: number | null,
    eligiblesVaccination?:  {
      __typename: "ModelEligibleVaccinationConnection",
      nextToken?: string | null,
    } | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      notes?: string | null,
      status: ClientStatus,
      search?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    clientUnit?:  {
      __typename: "ClientUnit",
      id: string,
      clientID: string,
      name?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      notes?: string | null,
      search?: string | null,
      contactName?: string | null,
      contactEmail?: string | null,
      contactPhone?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    status?: UserStatus | null,
    active?: boolean | null,
    avatar?: string | null,
    search?: string | null,
    createdAt?: string | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    groups?:  {
      __typename: "ModelGroupUserConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    payMethods?:  {
      __typename: "ModelPayMethodConnection",
      nextToken?: string | null,
    } | null,
    relationsLink?:  {
      __typename: "ModelRelationLinkConnection",
      nextToken?: string | null,
    } | null,
    carts?:  {
      __typename: "ModelCartConnection",
      nextToken?: string | null,
    } | null,
    ordersByCreatedAt?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    ordersByStatusCreatedAt?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  userID: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    doc?: string | null,
    docType?: DocTypes | null,
    docProfessionType?: string | null,
    docProfession?: string | null,
    profession?: string | null,
    specialties?: string | null,
    subSpecialties?: string | null,
    bio?: string | null,
    gender?: GenderOptions | null,
    birth?: string | null,
    notes?: string | null,
    urlUserName?: string | null,
    urlEnable?: boolean | null,
    allowViewEmail?: boolean | null,
    allowViewPhone?: boolean | null,
    allowCookiesPreference?: boolean | null,
    allowCookiesStatistic?: boolean | null,
    pix?: string | null,
    zipCodeCoverage?: Array< string | null > | null,
    schedulesSunday?: Array< string | null > | null,
    schedulesMonday?: Array< string | null > | null,
    schedulesTuesday?: Array< string | null > | null,
    schedulesWednesday?: Array< string | null > | null,
    schedulesThursday?: Array< string | null > | null,
    schedulesFriday?: Array< string | null > | null,
    schedulesSaturday?: Array< string | null > | null,
    regionsConfig?: string | null,
    regionSunday?: string | null,
    regionMonday?: string | null,
    regionTuesday?: string | null,
    regionWednesday?: string | null,
    regionThursday?: string | null,
    regionFriday?: string | null,
    regionSaturday?: string | null,
    customerPagarmeID?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyHomeCare?: boolean | null,
    companyCampaign?: boolean | null,
    companyAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFoldersQueryVariables = {
  id?: string | null,
  filter?: ModelFolderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFoldersQuery = {
  listFolders?:  {
    __typename: "ModelFolderConnection",
    items:  Array< {
      __typename: "Folder",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVaccinationCardQueryVariables = {
  id: string,
};

export type GetVaccinationCardQuery = {
  getVaccinationCard?:  {
    __typename: "VaccinationCard",
    id: string,
    userID: string,
    person: string,
    doc?: string | null,
    birth?: string | null,
    relationship?: string | null,
    notes?: string | null,
    avatar?: string | null,
    isOwner?: boolean | null,
    vaccinationCardItem?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVaccinationCardItemsQueryVariables = {
  id?: string | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListVaccinationCardItemsQuery = {
  listVaccinationCardItems?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      via?: string | null,
      applicationDate?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByEmailQuery = {
  getUserByEmail?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserByPhoneQueryVariables = {
  phone: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByPhoneQuery = {
  getUserByPhone?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfileByDocQueryVariables = {
  doc: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetProfileByDocQuery = {
  getProfileByDoc?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProfilesByCompanyQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesByCompanyQuery = {
  listProfilesByCompany?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAddressesByUserQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesByUserQuery = {
  listAddressesByUser?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      userID: string,
      name?: string | null,
      reference?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      addressPagarmeID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPayMethodsByUserQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPayMethodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPayMethodsByUserQuery = {
  listPayMethodsByUser?:  {
    __typename: "ModelPayMethodConnection",
    items:  Array< {
      __typename: "PayMethod",
      id: string,
      userID: string,
      method: PaymentMethods,
      number?: string | null,
      holderName?: string | null,
      holderDocument?: string | null,
      expMonth?: number | null,
      expYear?: number | null,
      cvv?: string | null,
      brand?: string | null,
      label?: string | null,
      cardPagarmeID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsByUserCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsByUserCreatedAtQuery = {
  listLogsByUserCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      tag: string,
      source: LogSource,
      notes?: string | null,
      message?: string | null,
      page?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsByUserTagCreatedAtQueryVariables = {
  userID: string,
  tagCreatedAt?: ModelLogLogsByUserTagCreatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsByUserTagCreatedAtQuery = {
  listLogsByUserTagCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      tag: string,
      source: LogSource,
      notes?: string | null,
      message?: string | null,
      page?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsByTagCreatedAtQueryVariables = {
  tag: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsByTagCreatedAtQuery = {
  listLogsByTagCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      tag: string,
      source: LogSource,
      notes?: string | null,
      message?: string | null,
      page?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsBySourceCreatedAtQueryVariables = {
  source: LogSource,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsBySourceCreatedAtQuery = {
  listLogsBySourceCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      tag: string,
      source: LogSource,
      notes?: string | null,
      message?: string | null,
      page?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListFoldersByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFolderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoldersByNameQuery = {
  listFoldersByName?:  {
    __typename: "ModelFolderConnection",
    items:  Array< {
      __typename: "Folder",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListNotifyByUserCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotifyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotifyByUserCreatedAtQuery = {
  listNotifyByUserCreatedAt?:  {
    __typename: "ModelNotifyConnection",
    items:  Array< {
      __typename: "Notify",
      id: string,
      userID: string,
      createdAt?: string | null,
      content?: string | null,
      link?: string | null,
      viewed?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsByUserQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsByUserQuery = {
  listVaccinationCardsByUser?:  {
    __typename: "ModelVaccinationCardConnection",
    items:  Array< {
      __typename: "VaccinationCard",
      id: string,
      userID: string,
      person: string,
      doc?: string | null,
      birth?: string | null,
      relationship?: string | null,
      notes?: string | null,
      avatar?: string | null,
      isOwner?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByVaccinationCardQueryVariables = {
  vaccinationCardID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByVaccinationCardQuery = {
  listVaccinationCardsItemsByVaccinationCard?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      via?: string | null,
      applicationDate?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByOrderQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByOrderQuery = {
  listVaccinationCardsItemsByOrder?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      via?: string | null,
      applicationDate?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByCampaignQueryVariables = {
  campaignID: string,
  applicationDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByCampaignQuery = {
  listVaccinationCardsItemsByCampaign?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      via?: string | null,
      applicationDate?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByCompanyQueryVariables = {
  companyID: string,
  applicationDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByCompanyQuery = {
  listVaccinationCardsItemsByCompany?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      via?: string | null,
      applicationDate?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByProfissionalQueryVariables = {
  profissionalID: string,
  applicationDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByProfissionalQuery = {
  listVaccinationCardsItemsByProfissional?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      via?: string | null,
      applicationDate?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationCardsItemsByStatusQueryVariables = {
  status: string,
  applicationDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVaccinationCardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationCardsItemsByStatusQuery = {
  listVaccinationCardsItemsByStatus?:  {
    __typename: "ModelVaccinationCardItemConnection",
    items:  Array< {
      __typename: "VaccinationCardItem",
      id: string,
      vaccinationCardID: string,
      orderID: string,
      orderItemID: string,
      campaignID?: string | null,
      companyID?: string | null,
      lote?: string | null,
      profissionalID?: string | null,
      profissionalName?: string | null,
      coren?: string | null,
      dueDate?: string | null,
      via?: string | null,
      applicationDate?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTempAuxQueryVariables = {
  id: string,
};

export type GetTempAuxQuery = {
  getTempAux?:  {
    __typename: "TempAux",
    id: string,
    name?: string | null,
    doc?: string | null,
    birth?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersByGroupQueryVariables = {
  group: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersByGroupQuery = {
  listUsersByGroup?:  {
    __typename: "ModelGroupUserConnection",
    items:  Array< {
      __typename: "GroupUser",
      id: string,
      group: string,
      userID: string,
      profileID: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListGroupsByUserQueryVariables = {
  userID: string,
  group?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsByUserQuery = {
  listGroupsByUser?:  {
    __typename: "ModelGroupUserConnection",
    items:  Array< {
      __typename: "GroupUser",
      id: string,
      group: string,
      userID: string,
      profileID: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConfigQueryVariables = {
  id: string,
};

export type GetConfigQuery = {
  getConfig?:  {
    __typename: "Config",
    id: string,
    validationMode: ConfigValidationModes,
    googleAnalyticsID?: string | null,
    googleSiteVerification?: string | null,
    inviteSubject?: string | null,
    inviteMessage?: string | null,
    inviteSMS?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    infoFooter?: string | null,
    minValueOrder?: number | null,
    phoneOrders?: string | null,
    allowPayOnDelivery?: boolean | null,
    allowLocalPickup?: boolean | null,
    deliveryOnSunday?: string | null,
    deliveryOnMonday?: string | null,
    deliveryOnTuesday?: string | null,
    deliveryOnWednesday?: string | null,
    deliveryOnThursday?: string | null,
    deliveryOnFriday?: string | null,
    deliveryOnSaturday?: string | null,
    deliveryOffSunday?: string | null,
    deliveryOffMonday?: string | null,
    deliveryOffTuesday?: string | null,
    deliveryOffWednesday?: string | null,
    deliveryOffThursday?: string | null,
    deliveryOffFriday?: string | null,
    deliveryOffSaturday?: string | null,
    showNotesCart?: boolean | null,
    notesCart?: string | null,
    soundOnNewOrder?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInvitesQueryVariables = {
  id?: string | null,
  filter?: ModelInviteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInvitesQuery = {
  listInvites?:  {
    __typename: "ModelInviteConnection",
    items:  Array< {
      __typename: "Invite",
      id: string,
      name: string,
      description?: string | null,
      email?: string | null,
      phone?: string | null,
      groups?: Array< string | null > | null,
      status: InviteStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInvitesByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInviteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvitesByEmailQuery = {
  listInvitesByEmail?:  {
    __typename: "ModelInviteConnection",
    items:  Array< {
      __typename: "Invite",
      id: string,
      name: string,
      description?: string | null,
      email?: string | null,
      phone?: string | null,
      groups?: Array< string | null > | null,
      status: InviteStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInvitesByPhoneQueryVariables = {
  phone: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInviteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvitesByPhoneQuery = {
  listInvitesByPhone?:  {
    __typename: "ModelInviteConnection",
    items:  Array< {
      __typename: "Invite",
      id: string,
      name: string,
      description?: string | null,
      email?: string | null,
      phone?: string | null,
      groups?: Array< string | null > | null,
      status: InviteStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInvitesByStatusCreatedAtQueryVariables = {
  status: InviteStatus,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInviteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvitesByStatusCreatedAtQuery = {
  listInvitesByStatusCreatedAt?:  {
    __typename: "ModelInviteConnection",
    items:  Array< {
      __typename: "Invite",
      id: string,
      name: string,
      description?: string | null,
      email?: string | null,
      phone?: string | null,
      groups?: Array< string | null > | null,
      status: InviteStatus,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCouponQueryVariables = {
  id: string,
};

export type GetCouponQuery = {
  getCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    description?: string | null,
    code: string,
    start?: string | null,
    expiration?: string | null,
    discountPercentage?: number | null,
    discountValue?: number | null,
    qtyLimit?: number | null,
    qtyUsed?: number | null,
    qtyProduct?: number | null,
    qtyProductUsed?: number | null,
    search?: string | null,
    products?:  {
      __typename: "ModelCouponProductConnection",
      nextToken?: string | null,
    } | null,
    couponUsed?:  {
      __typename: "ModelCouponUsedConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCouponsQueryVariables = {
  id?: string | null,
  filter?: ModelCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCouponsQuery = {
  listCoupons?:  {
    __typename: "ModelCouponConnection",
    items:  Array< {
      __typename: "Coupon",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCouponsByCodeQueryVariables = {
  code: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCouponsByCodeQuery = {
  listCouponsByCode?:  {
    __typename: "ModelCouponConnection",
    items:  Array< {
      __typename: "Coupon",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsByCouponQueryVariables = {
  couponID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCouponProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsByCouponQuery = {
  listProductsByCoupon?:  {
    __typename: "ModelCouponProductConnection",
    items:  Array< {
      __typename: "CouponProduct",
      id: string,
      couponID: string,
      productID: string,
      price?: number | null,
      limit?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsedByCouponQueryVariables = {
  couponID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCouponUsedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsedByCouponQuery = {
  listUsedByCoupon?:  {
    __typename: "ModelCouponUsedConnection",
    items:  Array< {
      __typename: "CouponUsed",
      id: string,
      couponID: string,
      userID: string,
      qty?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsedByCouponUserQueryVariables = {
  couponID: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCouponUsedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsedByCouponUserQuery = {
  listUsedByCouponUser?:  {
    __typename: "ModelCouponUsedConnection",
    items:  Array< {
      __typename: "CouponUsed",
      id: string,
      couponID: string,
      userID: string,
      qty?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMidiasQueryVariables = {
  id?: string | null,
  filter?: ModelMidiaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMidiasQuery = {
  listMidias?:  {
    __typename: "ModelMidiaConnection",
    items:  Array< {
      __typename: "Midia",
      id: string,
      key: string,
      type?: MidiaTypes | null,
      title?: string | null,
      subTitle?: string | null,
      description?: string | null,
      identifyText?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMidiaByKeyQueryVariables = {
  key: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMidiaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMidiaByKeyQuery = {
  listMidiaByKey?:  {
    __typename: "ModelMidiaConnection",
    items:  Array< {
      __typename: "Midia",
      id: string,
      key: string,
      type?: MidiaTypes | null,
      title?: string | null,
      subTitle?: string | null,
      description?: string | null,
      identifyText?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRelationQueryVariables = {
  id: string,
};

export type GetRelationQuery = {
  getRelation?:  {
    __typename: "Relation",
    id: string,
    type: RelationTypes,
    mode: RelationModes,
    name?: string | null,
    description?: string | null,
    avatar?: string | null,
    reference?: string | null,
    members: Array< string >,
    admins: Array< string >,
    updatedAt?: string | null,
    status: RelationStatus,
    search?: string | null,
    relationsLink?:  {
      __typename: "ModelRelationLinkConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
  } | null,
};

export type ListRelationsQueryVariables = {
  id?: string | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRelationsQuery = {
  listRelations?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsByTypeUpdatedAtQueryVariables = {
  type: RelationTypes,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsByTypeUpdatedAtQuery = {
  listRelationsByTypeUpdatedAt?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsByTypeModeUpdatedAtQueryVariables = {
  type: RelationTypes,
  modeUpdatedAt?: ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsByTypeModeUpdatedAtQuery = {
  listRelationsByTypeModeUpdatedAt?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsByTypeStatusUpdatedAtQueryVariables = {
  type: RelationTypes,
  statusUpdatedAt?: ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsByTypeStatusUpdatedAtQuery = {
  listRelationsByTypeStatusUpdatedAt?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsByStatusUpdatedAtQueryVariables = {
  status: RelationStatus,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsByStatusUpdatedAtQuery = {
  listRelationsByStatusUpdatedAt?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsLinkQueryVariables = {
  id?: string | null,
  filter?: ModelRelationLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRelationsLinkQuery = {
  listRelationsLink?:  {
    __typename: "ModelRelationLinkConnection",
    items:  Array< {
      __typename: "RelationLink",
      id: string,
      userID: string,
      relationID: string,
      type: string,
      notify: number,
      updatedAt?: string | null,
      search?: string | null,
      percentage?: number | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsLinkByUserTypeNotifyUpdatedAtQueryVariables = {
  userID: string,
  typeNotifyUpdatedAt?: ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsLinkByUserTypeNotifyUpdatedAtQuery = {
  listRelationsLinkByUserTypeNotifyUpdatedAt?:  {
    __typename: "ModelRelationLinkConnection",
    items:  Array< {
      __typename: "RelationLink",
      id: string,
      userID: string,
      relationID: string,
      type: string,
      notify: number,
      updatedAt?: string | null,
      search?: string | null,
      percentage?: number | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRelationsLinkByRelationUserQueryVariables = {
  relationID: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsLinkByRelationUserQuery = {
  listRelationsLinkByRelationUser?:  {
    __typename: "ModelRelationLinkConnection",
    items:  Array< {
      __typename: "RelationLink",
      id: string,
      userID: string,
      relationID: string,
      type: string,
      notify: number,
      updatedAt?: string | null,
      search?: string | null,
      percentage?: number | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesByRelationCreatedAtQueryVariables = {
  relationID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesByRelationCreatedAtQuery = {
  listMessagesByRelationCreatedAt?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      relationID?: string | null,
      userID: string,
      type: MessagesTypes,
      content?: string | null,
      search?: string | null,
      identityId?: string | null,
      createdAt?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesByUserCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesByUserCreatedAtQuery = {
  listMessagesByUserCreatedAt?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      relationID?: string | null,
      userID: string,
      type: MessagesTypes,
      content?: string | null,
      search?: string | null,
      identityId?: string | null,
      createdAt?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesByStatusCreatedAtQueryVariables = {
  status: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesByStatusCreatedAtQuery = {
  listMessagesByStatusCreatedAt?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      relationID?: string | null,
      userID: string,
      type: MessagesTypes,
      content?: string | null,
      search?: string | null,
      identityId?: string | null,
      createdAt?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    alias: string,
    order: number,
    title?: string | null,
    description?: string | null,
    orderDesc?: boolean | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    showDescriptionPage?: string | null,
    showThumbnailPage?: string | null,
    hide?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  id?: string | null,
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      orderDesc?: boolean | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      showDescriptionPage?: string | null,
      showThumbnailPage?: string | null,
      hide?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMenusByAliasOrderQueryVariables = {
  alias: string,
  order?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusByAliasOrderQuery = {
  listMenusByAliasOrder?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      orderDesc?: boolean | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      showDescriptionPage?: string | null,
      showThumbnailPage?: string | null,
      hide?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPageQueryVariables = {
  id: string,
};

export type GetPageQuery = {
  getPage?:  {
    __typename: "Page",
    id: string,
    alias: string,
    status: PageStatus,
    type: PageType,
    menu: string,
    menuProps?:  {
      __typename: "Menu",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      orderDesc?: boolean | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      showDescriptionPage?: string | null,
      showThumbnailPage?: string | null,
      hide?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    title: string,
    titlePadX?: string | null,
    titlePadY?: string | null,
    description?: string | null,
    content?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    tags?: Array< string | null > | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    optionTitle?: PageOptionTitle | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInMenu?: boolean | null,
    createdAt?: string | null,
    search?: string | null,
    blocks?:  {
      __typename: "ModelBlockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListPagesQueryVariables = {
  id?: string | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPagesQuery = {
  listPages?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      order: number,
      title: string,
      titlePadX?: string | null,
      titlePadY?: string | null,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPagesByAliasCreatedAtQueryVariables = {
  alias: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesByAliasCreatedAtQuery = {
  listPagesByAliasCreatedAt?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      order: number,
      title: string,
      titlePadX?: string | null,
      titlePadY?: string | null,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPagesByStatusMenuOrderQueryVariables = {
  status: PageStatus,
  menuOrder?: ModelPagePagesByStatusMenuOrderCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesByStatusMenuOrderQuery = {
  listPagesByStatusMenuOrder?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      order: number,
      title: string,
      titlePadX?: string | null,
      titlePadY?: string | null,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPagesByMenuOrderQueryVariables = {
  menu: string,
  order?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesByMenuOrderQuery = {
  listPagesByMenuOrder?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      order: number,
      title: string,
      titlePadX?: string | null,
      titlePadY?: string | null,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlockQueryVariables = {
  id: string,
};

export type GetBlockQuery = {
  getBlock?:  {
    __typename: "Block",
    id: string,
    pageID: string,
    order: number,
    component: string,
    content: string,
    config?: string | null,
    page?:  {
      __typename: "Page",
      id: string,
      alias: string,
      status: PageStatus,
      type: PageType,
      menu: string,
      order: number,
      title: string,
      titlePadX?: string | null,
      titlePadY?: string | null,
      description?: string | null,
      content?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      tags?: Array< string | null > | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlocksQueryVariables = {
  id?: string | null,
  filter?: ModelBlockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListBlocksQuery = {
  listBlocks?:  {
    __typename: "ModelBlockConnection",
    items:  Array< {
      __typename: "Block",
      id: string,
      pageID: string,
      order: number,
      component: string,
      content: string,
      config?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBlocksByPageQueryVariables = {
  pageID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBlockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlocksByPageQuery = {
  listBlocksByPage?:  {
    __typename: "ModelBlockConnection",
    items:  Array< {
      __typename: "Block",
      id: string,
      pageID: string,
      order: number,
      component: string,
      content: string,
      config?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBlocksByPageOrderQueryVariables = {
  pageID: string,
  order?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBlockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlocksByPageOrderQuery = {
  listBlocksByPageOrder?:  {
    __typename: "ModelBlockConnection",
    items:  Array< {
      __typename: "Block",
      id: string,
      pageID: string,
      order: number,
      component: string,
      content: string,
      config?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    alias: string,
    order: number,
    title?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    hide?: boolean | null,
    isSub?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  id?: string | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCategoryByAliasOrderQueryVariables = {
  alias: string,
  order?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoryByAliasOrderQuery = {
  listCategoryByAliasOrder?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    alias: string,
    status: PageStatus,
    category: string,
    categoryProps?:  {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subCategory: string,
    subCategoryProps?:  {
      __typename: "Category",
      id: string,
      alias: string,
      order: number,
      title?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      hide?: boolean | null,
      isSub?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    code?: string | null,
    name: string,
    type?: string | null,
    description?: string | null,
    manufacturer?: string | null,
    contentTitle?: string | null,
    contentTitle2?: string | null,
    contentTitle3?: string | null,
    content?: string | null,
    content2?: string | null,
    content3?: string | null,
    tags?: Array< string | null > | null,
    changeFreq?: PageChangeFreq | null,
    priority?: PagePriority | null,
    price_of?: number | null,
    price: number,
    qty?: number | null,
    stockControl?: boolean | null,
    applicationTime?: number | null,
    applicationTimeChild?: number | null,
    photo1?: string | null,
    photo2?: string | null,
    photo3?: string | null,
    photo4?: string | null,
    photo5?: string | null,
    thumbnail?: string | null,
    thumbnailSrc?: string | null,
    thumbnailCropper?: string | null,
    titlePadX?: string | null,
    titlePadY?: string | null,
    contentPadX?: string | null,
    contentPadY?: string | null,
    optionTitle?: PageOptionTitle | null,
    sideColumn?: PageSideColumn | null,
    sideColumnPadX?: string | null,
    sideColumnPadY?: string | null,
    sideColumnContent?: string | null,
    optionSideColumn?: PageOptionSideColumn | null,
    hideFooter?: boolean | null,
    hideInMenu?: boolean | null,
    createdAt?: string | null,
    search?: string | null,
    hideInSearch?: boolean | null,
    options?:  {
      __typename: "ModelOptionConnection",
      nextToken?: string | null,
    } | null,
    kitItems?:  {
      __typename: "ModelKitItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  id?: string | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsByAliasCreatedAtQueryVariables = {
  alias: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsByAliasCreatedAtQuery = {
  listProductsByAliasCreatedAt?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsByStatusCategoryNameQueryVariables = {
  status: PageStatus,
  categoryName?: ModelProductProductsByStatusCategoryNameCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsByStatusCategoryNameQuery = {
  listProductsByStatusCategoryName?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsByCategorySubCategoryNameQueryVariables = {
  category: string,
  subCategoryName?: ModelProductProductsByCategorySubCategoryNameCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsByCategorySubCategoryNameQuery = {
  listProductsByCategorySubCategoryName?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListKitItemsByProductQueryVariables = {
  productID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelKitItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKitItemsByProductQuery = {
  listKitItemsByProduct?:  {
    __typename: "ModelKitItemConnection",
    items:  Array< {
      __typename: "KitItem",
      id: string,
      productID: string,
      kitItemProductID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOptionQueryVariables = {
  id: string,
};

export type GetOptionQuery = {
  getOption?:  {
    __typename: "Option",
    id: string,
    productID: string,
    name?: string | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOptionsQueryVariables = {
  id?: string | null,
  filter?: ModelOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOptionsQuery = {
  listOptions?:  {
    __typename: "ModelOptionConnection",
    items:  Array< {
      __typename: "Option",
      id: string,
      productID: string,
      name?: string | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOptionsByProductQueryVariables = {
  productID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOptionsByProductQuery = {
  listOptionsByProduct?:  {
    __typename: "ModelOptionConnection",
    items:  Array< {
      __typename: "Option",
      id: string,
      productID: string,
      name?: string | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCartsQueryVariables = {
  id?: string | null,
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      userID: string,
      productID: string,
      qty?: number | null,
      changeName?: string | null,
      changeDescription?: string | null,
      changeQtyBlend?: number | null,
      changePriceAdjustment?: string | null,
      blendID?: string | null,
      campaignToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCartsByUserQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsByUserQuery = {
  listCartsByUser?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      userID: string,
      productID: string,
      qty?: number | null,
      changeName?: string | null,
      changeDescription?: string | null,
      changeQtyBlend?: number | null,
      changePriceAdjustment?: string | null,
      blendID?: string | null,
      campaignToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOptionsByCartQueryVariables = {
  cartID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCartOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOptionsByCartQuery = {
  listOptionsByCart?:  {
    __typename: "ModelCartOptionConnection",
    items:  Array< {
      __typename: "CartOption",
      id: string,
      cartID: string,
      optionID: string,
      createdAt: string,
      updatedAt: string,
      userID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: OrderStatus,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
    } | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    notes?: string | null,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    vaccinationCardItems?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  id?: string | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersByUserStatusCreatedAtQueryVariables = {
  userID: string,
  statusCreatedAt?: ModelOrderOrdersByUserStatusCreatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersByUserStatusCreatedAtQuery = {
  listOrdersByUserStatusCreatedAt?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersByUserCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersByUserCreatedAtQuery = {
  listOrdersByUserCreatedAt?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersByStatusCreatedAtQueryVariables = {
  status: OrderStatus,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersByStatusCreatedAtQuery = {
  listOrdersByStatusCreatedAt?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersByCampaignCreatedAtQueryVariables = {
  campaignID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersByCampaignCreatedAtQuery = {
  listOrdersByCampaignCreatedAt?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      status: OrderStatus,
      createdAt?: string | null,
      couponID?: string | null,
      couponName?: string | null,
      couponDiscount?: number | null,
      deliveryPrice?: number | null,
      total?: number | null,
      rating?: number | null,
      ratingNotes?: string | null,
      orderPagarmeID?: string | null,
      addressReference?: string | null,
      addressStreet?: string | null,
      addressNumber?: string | null,
      addressComplement?: string | null,
      addressZipcode?: string | null,
      addressNeighborhood?: string | null,
      addressCity?: string | null,
      addressState?: string | null,
      addressCountry?: string | null,
      notes?: string | null,
      campaignID?: string | null,
      campaignName?: string | null,
      campaignOrientation?: string | null,
      companyID?: string | null,
      companyName?: string | null,
      companyPhone?: string | null,
      companyOpeningHours?: string | null,
      qrCodePix?: string | null,
      qrCodePixUrl?: string | null,
      payMethod?: PaymentMethods | null,
      installments?: number | null,
      homeCareOrRetail?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListItemsByOrderQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsByOrderQuery = {
  listItemsByOrder?:  {
    __typename: "ModelOrderItemConnection",
    items:  Array< {
      __typename: "OrderItem",
      id: string,
      orderID: string,
      productID: string,
      qty: number,
      code?: string | null,
      name: string,
      description?: string | null,
      price: number,
      photo1?: string | null,
      changeName?: string | null,
      changeDescription?: string | null,
      changeQtyBlend?: number | null,
      changePriceAdjustment?: string | null,
      blendID?: string | null,
      changeNameAdmin?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOptionsByOrderItemQueryVariables = {
  orderItemID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderItemOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOptionsByOrderItemQuery = {
  listOptionsByOrderItem?:  {
    __typename: "ModelOrderItemOptionConnection",
    items:  Array< {
      __typename: "OrderItemOption",
      id: string,
      orderItemID: string,
      optionID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryOrdersQueryVariables = {
  id?: string | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDeliveryOrdersQuery = {
  listDeliveryOrders?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      deliveryCompanyID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByOrderQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByOrderQuery = {
  listDeliveryByOrder?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      deliveryCompanyID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByDateUserQueryVariables = {
  date: string,
  deliveryUserID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByDateUserQuery = {
  listDeliveryByDateUser?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      deliveryCompanyID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByUserDateQueryVariables = {
  deliveryUserID: string,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByUserDateQuery = {
  listDeliveryByUserDate?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      deliveryCompanyID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByCompanyDateQueryVariables = {
  deliveryCompanyID: string,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByCompanyDateQuery = {
  listDeliveryByCompanyDate?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      deliveryCompanyID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryByStatusDateQueryVariables = {
  status: DeliveryStatus,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeliveryOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveryByStatusDateQuery = {
  listDeliveryByStatusDate?:  {
    __typename: "ModelDeliveryOrderConnection",
    items:  Array< {
      __typename: "DeliveryOrder",
      id: string,
      orderID: string,
      date: string,
      deliveryUserID?: string | null,
      deliveryCompanyID?: string | null,
      status: DeliveryStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDeliveryMethodOrdersQueryVariables = {
  id?: string | null,
  filter?: ModelDeliveryMethodOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDeliveryMethodOrdersQuery = {
  listDeliveryMethodOrders?:  {
    __typename: "ModelDeliveryMethodOrderConnection",
    items:  Array< {
      __typename: "DeliveryMethodOrder",
      id: string,
      name?: string | null,
      zipCode?: Array< string | null > | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCampaignQueryVariables = {
  id: string,
};

export type GetCampaignQuery = {
  getCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    description?: string | null,
    code: string,
    start?: string | null,
    expiration?: string | null,
    discountPercentage?: number | null,
    discountValue?: number | null,
    qtyLimit?: number | null,
    qtyUsed?: number | null,
    qtyProduct?: number | null,
    qtyProductUsed?: number | null,
    orientation?: string | null,
    orderMessage?: string | null,
    zipCodeCoverage?: Array< string | null > | null,
    search?: string | null,
    products?:  {
      __typename: "ModelCampaignProductConnection",
      nextToken?: string | null,
    } | null,
    campaignUsed?:  {
      __typename: "ModelCampaignUsedConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelCampaignCompanyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCampaignsQueryVariables = {
  id?: string | null,
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCampaignsQuery = {
  listCampaigns?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      orientation?: string | null,
      orderMessage?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCampaignByCodeQueryVariables = {
  code: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCampaignByCodeQuery = {
  listCampaignByCode?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      id: string,
      name: string,
      description?: string | null,
      code: string,
      start?: string | null,
      expiration?: string | null,
      discountPercentage?: number | null,
      discountValue?: number | null,
      qtyLimit?: number | null,
      qtyUsed?: number | null,
      qtyProduct?: number | null,
      qtyProductUsed?: number | null,
      orientation?: string | null,
      orderMessage?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      search?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsedByCampaignQueryVariables = {
  campaignID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignUsedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsedByCampaignQuery = {
  listUsedByCampaign?:  {
    __typename: "ModelCampaignUsedConnection",
    items:  Array< {
      __typename: "CampaignUsed",
      id: string,
      campaignID: string,
      userID: string,
      qty?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsedByCampaignUserQueryVariables = {
  campaignID: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignUsedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsedByCampaignUserQuery = {
  listUsedByCampaignUser?:  {
    __typename: "ModelCampaignUsedConnection",
    items:  Array< {
      __typename: "CampaignUsed",
      id: string,
      campaignID: string,
      userID: string,
      qty?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsByCampaignQueryVariables = {
  campaignID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsByCampaignQuery = {
  listProductsByCampaign?:  {
    __typename: "ModelCampaignProductConnection",
    items:  Array< {
      __typename: "CampaignProduct",
      id: string,
      campaignID: string,
      productID: string,
      price?: number | null,
      limit?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCompaniesByCampaignQueryVariables = {
  campaignID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesByCampaignQuery = {
  listCompaniesByCampaign?:  {
    __typename: "ModelCampaignCompanyConnection",
    items:  Array< {
      __typename: "CampaignCompany",
      id: string,
      campaignID: string,
      companyID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    id: string,
    cnpj: string,
    name: string,
    openingHours?: string | null,
    phones?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    search?: string | null,
    enableRetail?: string | null,
    schedulesSunday?: Array< string | null > | null,
    schedulesMonday?: Array< string | null > | null,
    schedulesTuesday?: Array< string | null > | null,
    schedulesWednesday?: Array< string | null > | null,
    schedulesThursday?: Array< string | null > | null,
    schedulesFriday?: Array< string | null > | null,
    schedulesSaturday?: Array< string | null > | null,
    status?: CompanyStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompaniesQueryVariables = {
  id?: string | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCompanyByCNPJQueryVariables = {
  cnpj: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanyByCNPJQuery = {
  listCompanyByCNPJ?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCompanyByEnableRetailQueryVariables = {
  enableRetail: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanyByEnableRetailQuery = {
  listCompanyByEnableRetail?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAuthorizationListQueryVariables = {
  id?: string | null,
  filter?: ModelAuthorizationListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAuthorizationListQuery = {
  listAuthorizationList?:  {
    __typename: "ModelAuthorizationListConnection",
    items:  Array< {
      __typename: "AuthorizationList",
      id: string,
      name: string,
      description?: string | null,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      search?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      contactNameFinished?: string | null,
      contactPhoneFinished?: string | null,
      contactEmailFinished?: string | null,
      notesFinished?: string | null,
      professionalFinished?: string | null,
      withList?: boolean | null,
      campaignCode?: string | null,
      OS?: string | null,
      status?: AuthorizationListStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAuthorizationListsByCampaignCodeQueryVariables = {
  campaignCode: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorizationListsByCampaignCodeQuery = {
  listAuthorizationListsByCampaignCode?:  {
    __typename: "ModelAuthorizationListConnection",
    items:  Array< {
      __typename: "AuthorizationList",
      id: string,
      name: string,
      description?: string | null,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      search?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      contactNameFinished?: string | null,
      contactPhoneFinished?: string | null,
      contactEmailFinished?: string | null,
      notesFinished?: string | null,
      professionalFinished?: string | null,
      withList?: boolean | null,
      campaignCode?: string | null,
      OS?: string | null,
      status?: AuthorizationListStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAuthorizationListsByStatusQueryVariables = {
  status: AuthorizationListStatus,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorizationListsByStatusQuery = {
  listAuthorizationListsByStatus?:  {
    __typename: "ModelAuthorizationListConnection",
    items:  Array< {
      __typename: "AuthorizationList",
      id: string,
      name: string,
      description?: string | null,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      search?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      contactNameFinished?: string | null,
      contactPhoneFinished?: string | null,
      contactEmailFinished?: string | null,
      notesFinished?: string | null,
      professionalFinished?: string | null,
      withList?: boolean | null,
      campaignCode?: string | null,
      OS?: string | null,
      status?: AuthorizationListStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListClosuresByAuthorizationListQueryVariables = {
  authorizationListID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListClosureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClosuresByAuthorizationListQuery = {
  listClosuresByAuthorizationList?:  {
    __typename: "ModelAuthorizationListClosureConnection",
    items:  Array< {
      __typename: "AuthorizationListClosure",
      id: string,
      authorizationListID: string,
      contactName?: string | null,
      contactPhone?: string | null,
      contactEmail?: string | null,
      notes?: string | null,
      qtyApplication?: number | null,
      qtyReturned?: number | null,
      professionalID?: string | null,
      OS?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAuthorizationListMembersQueryVariables = {
  id?: string | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAuthorizationListMembersQuery = {
  listAuthorizationListMembers?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersByAuthorizationListQueryVariables = {
  authorizationListID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByAuthorizationListQuery = {
  listMembersByAuthorizationList?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersByAuthorizationListKeyQueryVariables = {
  authorizationListID: string,
  key?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByAuthorizationListKeyQuery = {
  listMembersByAuthorizationListKey?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersByAuthorizationListCPFQueryVariables = {
  authorizationListID: string,
  cpf?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByAuthorizationListCPFQuery = {
  listMembersByAuthorizationListCPF?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersByKeyQueryVariables = {
  key: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByKeyQuery = {
  listMembersByKey?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersByCPFQueryVariables = {
  cpf: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByCPFQuery = {
  listMembersByCPF?:  {
    __typename: "ModelAuthorizationListMemberConnection",
    items:  Array< {
      __typename: "AuthorizationListMember",
      id: string,
      authorizationListID: string,
      name: string,
      key?: string | null,
      cpf?: string | null,
      birth?: string | null,
      search?: string | null,
      others?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersVaccinationByAuthorizationListQueryVariables = {
  authorizationListID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberVaccinationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersVaccinationByAuthorizationListQuery = {
  listMembersVaccinationByAuthorizationList?:  {
    __typename: "ModelAuthorizationListMemberVaccinationConnection",
    items:  Array< {
      __typename: "AuthorizationListMemberVaccination",
      id: string,
      authorizationListID: string,
      authorizationListMemberID: string,
      profissionalID?: string | null,
      coren?: string | null,
      lote?: string | null,
      dueDate?: string | null,
      via?: string | null,
      OS?: string | null,
      applicationDate?: string | null,
      applicationTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationsByAuthorizationListMemberQueryVariables = {
  authorizationListMemberID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberVaccinationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationsByAuthorizationListMemberQuery = {
  listVaccinationsByAuthorizationListMember?:  {
    __typename: "ModelAuthorizationListMemberVaccinationConnection",
    items:  Array< {
      __typename: "AuthorizationListMemberVaccination",
      id: string,
      authorizationListID: string,
      authorizationListMemberID: string,
      profissionalID?: string | null,
      coren?: string | null,
      lote?: string | null,
      dueDate?: string | null,
      via?: string | null,
      OS?: string | null,
      applicationDate?: string | null,
      applicationTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVaccinationsByProfissionalQueryVariables = {
  profissionalID: string,
  applicationDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAuthorizationListMemberVaccinationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVaccinationsByProfissionalQuery = {
  listVaccinationsByProfissional?:  {
    __typename: "ModelAuthorizationListMemberVaccinationConnection",
    items:  Array< {
      __typename: "AuthorizationListMemberVaccination",
      id: string,
      authorizationListID: string,
      authorizationListMemberID: string,
      profissionalID?: string | null,
      coren?: string | null,
      lote?: string | null,
      dueDate?: string | null,
      via?: string | null,
      OS?: string | null,
      applicationDate?: string | null,
      applicationTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCounterQueryVariables = {
  id: string,
};

export type GetCounterQuery = {
  getCounter?:  {
    __typename: "Counter",
    id: string,
    qty: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClientsQueryVariables = {
  id?: string | null,
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      notes?: string | null,
      status: ClientStatus,
      search?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListClientsByStatusNameQueryVariables = {
  status: ClientStatus,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsByStatusNameQuery = {
  listClientsByStatusName?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      notes?: string | null,
      status: ClientStatus,
      search?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListClientsByCodeQueryVariables = {
  code: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsByCodeQuery = {
  listClientsByCode?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      notes?: string | null,
      status: ClientStatus,
      search?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListClientUserByUserQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientUserByUserQuery = {
  listClientUserByUser?:  {
    __typename: "ModelClientUserConnection",
    items:  Array< {
      __typename: "ClientUser",
      id: string,
      userID: string,
      clientID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListClientUserByClientQueryVariables = {
  clientID: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientUserByClientQuery = {
  listClientUserByClient?:  {
    __typename: "ModelClientUserConnection",
    items:  Array< {
      __typename: "ClientUser",
      id: string,
      userID: string,
      clientID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUnitsByClientQueryVariables = {
  clientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUnitsByClientQuery = {
  listUnitsByClient?:  {
    __typename: "ModelClientUnitConnection",
    items:  Array< {
      __typename: "ClientUnit",
      id: string,
      clientID: string,
      name?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      notes?: string | null,
      search?: string | null,
      contactName?: string | null,
      contactEmail?: string | null,
      contactPhone?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUnitsByCodeQueryVariables = {
  code: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUnitsByCodeQuery = {
  listUnitsByCode?:  {
    __typename: "ModelClientUnitConnection",
    items:  Array< {
      __typename: "ClientUnit",
      id: string,
      clientID: string,
      name?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      notes?: string | null,
      search?: string | null,
      contactName?: string | null,
      contactEmail?: string | null,
      contactPhone?: string | null,
      code?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEligiblesByClientQueryVariables = {
  clientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientEligibleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEligiblesByClientQuery = {
  listEligiblesByClient?:  {
    __typename: "ModelClientEligibleConnection",
    items:  Array< {
      __typename: "ClientEligible",
      id: string,
      clientID: string,
      key: string,
      name?: string | null,
      cpf?: string | null,
      rg?: string | null,
      birth?: string | null,
      notes?: string | null,
      search?: string | null,
      relationship?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEligiblesByClientKeyQueryVariables = {
  clientID: string,
  key?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientEligibleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEligiblesByClientKeyQuery = {
  listEligiblesByClientKey?:  {
    __typename: "ModelClientEligibleConnection",
    items:  Array< {
      __typename: "ClientEligible",
      id: string,
      clientID: string,
      key: string,
      name?: string | null,
      cpf?: string | null,
      rg?: string | null,
      birth?: string | null,
      notes?: string | null,
      search?: string | null,
      relationship?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEligiblesByClientCPFQueryVariables = {
  clientID: string,
  cpf?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientEligibleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEligiblesByClientCPFQuery = {
  listEligiblesByClientCPF?:  {
    __typename: "ModelClientEligibleConnection",
    items:  Array< {
      __typename: "ClientEligible",
      id: string,
      clientID: string,
      key: string,
      name?: string | null,
      cpf?: string | null,
      rg?: string | null,
      birth?: string | null,
      notes?: string | null,
      search?: string | null,
      relationship?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEligiblesByClientRGQueryVariables = {
  clientID: string,
  rg?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientEligibleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEligiblesByClientRGQuery = {
  listEligiblesByClientRG?:  {
    __typename: "ModelClientEligibleConnection",
    items:  Array< {
      __typename: "ClientEligible",
      id: string,
      clientID: string,
      key: string,
      name?: string | null,
      cpf?: string | null,
      rg?: string | null,
      birth?: string | null,
      notes?: string | null,
      search?: string | null,
      relationship?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOSsQueryVariables = {
  id?: string | null,
  filter?: ModelOSFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOSsQuery = {
  listOSs?:  {
    __typename: "ModelOSConnection",
    items:  Array< {
      __typename: "OS",
      id: string,
      clientID: string,
      clientUnitID: string,
      driverID?: string | null,
      professionals: Array< string >,
      collaborators?: Array< string > | null,
      number: number,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      notes?: string | null,
      status: OSStatus,
      allowOffList?: boolean | null,
      withList?: boolean | null,
      vaccination?: string | null,
      qtyApplication?: number | null,
      dateStarted?: string | null,
      dateFinished?: string | null,
      professionalStarted?: string | null,
      professionalFinished?: string | null,
      notesStarted?: string | null,
      notesFinished?: string | null,
      clientNameStarted?: string | null,
      clientNameFinished?: string | null,
      unitNameFinished?: string | null,
      contactNameFinished?: string | null,
      contactDocFinished?: string | null,
      contactCRMFinished?: string | null,
      contactEmailFinished?: string | null,
      stayVaccines?: boolean | null,
      stayQtd?: number | null,
      lat?: number | null,
      lng?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOSsByClientQueryVariables = {
  clientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOSFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOSsByClientQuery = {
  listOSsByClient?:  {
    __typename: "ModelOSConnection",
    items:  Array< {
      __typename: "OS",
      id: string,
      clientID: string,
      clientUnitID: string,
      driverID?: string | null,
      professionals: Array< string >,
      collaborators?: Array< string > | null,
      number: number,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      notes?: string | null,
      status: OSStatus,
      allowOffList?: boolean | null,
      withList?: boolean | null,
      vaccination?: string | null,
      qtyApplication?: number | null,
      dateStarted?: string | null,
      dateFinished?: string | null,
      professionalStarted?: string | null,
      professionalFinished?: string | null,
      notesStarted?: string | null,
      notesFinished?: string | null,
      clientNameStarted?: string | null,
      clientNameFinished?: string | null,
      unitNameFinished?: string | null,
      contactNameFinished?: string | null,
      contactDocFinished?: string | null,
      contactCRMFinished?: string | null,
      contactEmailFinished?: string | null,
      stayVaccines?: boolean | null,
      stayQtd?: number | null,
      lat?: number | null,
      lng?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOSsByClientUnitQueryVariables = {
  clientUnitID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOSFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOSsByClientUnitQuery = {
  listOSsByClientUnit?:  {
    __typename: "ModelOSConnection",
    items:  Array< {
      __typename: "OS",
      id: string,
      clientID: string,
      clientUnitID: string,
      driverID?: string | null,
      professionals: Array< string >,
      collaborators?: Array< string > | null,
      number: number,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      notes?: string | null,
      status: OSStatus,
      allowOffList?: boolean | null,
      withList?: boolean | null,
      vaccination?: string | null,
      qtyApplication?: number | null,
      dateStarted?: string | null,
      dateFinished?: string | null,
      professionalStarted?: string | null,
      professionalFinished?: string | null,
      notesStarted?: string | null,
      notesFinished?: string | null,
      clientNameStarted?: string | null,
      clientNameFinished?: string | null,
      unitNameFinished?: string | null,
      contactNameFinished?: string | null,
      contactDocFinished?: string | null,
      contactCRMFinished?: string | null,
      contactEmailFinished?: string | null,
      stayVaccines?: boolean | null,
      stayQtd?: number | null,
      lat?: number | null,
      lng?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOSsByNumberQueryVariables = {
  number: number,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOSFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOSsByNumberQuery = {
  listOSsByNumber?:  {
    __typename: "ModelOSConnection",
    items:  Array< {
      __typename: "OS",
      id: string,
      clientID: string,
      clientUnitID: string,
      driverID?: string | null,
      professionals: Array< string >,
      collaborators?: Array< string > | null,
      number: number,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      notes?: string | null,
      status: OSStatus,
      allowOffList?: boolean | null,
      withList?: boolean | null,
      vaccination?: string | null,
      qtyApplication?: number | null,
      dateStarted?: string | null,
      dateFinished?: string | null,
      professionalStarted?: string | null,
      professionalFinished?: string | null,
      notesStarted?: string | null,
      notesFinished?: string | null,
      clientNameStarted?: string | null,
      clientNameFinished?: string | null,
      unitNameFinished?: string | null,
      contactNameFinished?: string | null,
      contactDocFinished?: string | null,
      contactCRMFinished?: string | null,
      contactEmailFinished?: string | null,
      stayVaccines?: boolean | null,
      stayQtd?: number | null,
      lat?: number | null,
      lng?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOSsByStatusNumberQueryVariables = {
  status: OSStatus,
  number?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOSFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOSsByStatusNumberQuery = {
  listOSsByStatusNumber?:  {
    __typename: "ModelOSConnection",
    items:  Array< {
      __typename: "OS",
      id: string,
      clientID: string,
      clientUnitID: string,
      driverID?: string | null,
      professionals: Array< string >,
      collaborators?: Array< string > | null,
      number: number,
      start?: string | null,
      expiration?: string | null,
      orientation?: string | null,
      notes?: string | null,
      status: OSStatus,
      allowOffList?: boolean | null,
      withList?: boolean | null,
      vaccination?: string | null,
      qtyApplication?: number | null,
      dateStarted?: string | null,
      dateFinished?: string | null,
      professionalStarted?: string | null,
      professionalFinished?: string | null,
      notesStarted?: string | null,
      notesFinished?: string | null,
      clientNameStarted?: string | null,
      clientNameFinished?: string | null,
      unitNameFinished?: string | null,
      contactNameFinished?: string | null,
      contactDocFinished?: string | null,
      contactCRMFinished?: string | null,
      contactEmailFinished?: string | null,
      stayVaccines?: boolean | null,
      stayQtd?: number | null,
      lat?: number | null,
      lng?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEligiblesVaccinationByClientEligibleQueryVariables = {
  clientEligibleID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEligibleVaccinationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEligiblesVaccinationByClientEligibleQuery = {
  listEligiblesVaccinationByClientEligible?:  {
    __typename: "ModelEligibleVaccinationConnection",
    items:  Array< {
      __typename: "EligibleVaccination",
      id: string,
      clientEligibleID: string,
      profissionalID?: string | null,
      coren?: string | null,
      applicationDate?: string | null,
      reason?: string | null,
      vaccination?: string | null,
      status?: EligibleVaccinationStatus | null,
      localCity?: string | null,
      localState?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnDeleteRelationLinkSubscriptionVariables = {
  userID?: string | null,
};

export type OnDeleteRelationLinkSubscription = {
  onDeleteRelationLink?:  {
    __typename: "RelationLink",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    relationID: string,
    relation?:  {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null,
    type: string,
    notify: number,
    updatedAt?: string | null,
    search?: string | null,
    percentage?: number | null,
    createdAt: string,
  } | null,
};

export type OnCreateRelationLinkSubscriptionVariables = {
  userID?: string | null,
};

export type OnCreateRelationLinkSubscription = {
  onCreateRelationLink?:  {
    __typename: "RelationLink",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    relationID: string,
    relation?:  {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null,
    type: string,
    notify: number,
    updatedAt?: string | null,
    search?: string | null,
    percentage?: number | null,
    createdAt: string,
  } | null,
};

export type OnUpdateRelationLinkSubscriptionVariables = {
  userID?: string | null,
};

export type OnUpdateRelationLinkSubscription = {
  onUpdateRelationLink?:  {
    __typename: "RelationLink",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    relationID: string,
    relation?:  {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null,
    type: string,
    notify: number,
    updatedAt?: string | null,
    search?: string | null,
    percentage?: number | null,
    createdAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  relationID?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    relationID?: string | null,
    relation?:  {
      __typename: "Relation",
      id: string,
      type: RelationTypes,
      mode: RelationModes,
      name?: string | null,
      description?: string | null,
      avatar?: string | null,
      reference?: string | null,
      members: Array< string >,
      admins: Array< string >,
      updatedAt?: string | null,
      status: RelationStatus,
      search?: string | null,
      createdAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    type: MessagesTypes,
    content?: string | null,
    search?: string | null,
    identityId?: string | null,
    createdAt?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderAdmSubscription = {
  onCreateOrderAdm?:  {
    __typename: "Order",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: OrderStatus,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
    } | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    notes?: string | null,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    vaccinationCardItems?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateLogSubscription = {
  onCreateLog?:  {
    __typename: "Log",
    id: string,
    userID: string,
    tag: string,
    source: LogSource,
    notes?: string | null,
    message?: string | null,
    page?: string | null,
    manufacturer?: string | null,
    model?: string | null,
    osName?: string | null,
    osVersion?: string | null,
    platform?: string | null,
    uuid?: string | null,
    ip?: string | null,
    city?: string | null,
    region?: string | null,
    country?: string | null,
    provider?: string | null,
    lat?: number | null,
    lng?: number | null,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateNotifySubscriptionVariables = {
  userID?: string | null,
};

export type OnCreateNotifySubscription = {
  onCreateNotify?:  {
    __typename: "Notify",
    id: string,
    userID: string,
    createdAt?: string | null,
    content?: string | null,
    link?: string | null,
    viewed?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
  userID?: string | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    id: string,
    userID: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    options?:  {
      __typename: "ModelCartOptionConnection",
      nextToken?: string | null,
    } | null,
    qty?: number | null,
    changeName?: string | null,
    changeDescription?: string | null,
    changeQtyBlend?: number | null,
    changePriceAdjustment?: string | null,
    blendID?: string | null,
    campaignToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
  userID?: string | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    id: string,
    userID: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    options?:  {
      __typename: "ModelCartOptionConnection",
      nextToken?: string | null,
    } | null,
    qty?: number | null,
    changeName?: string | null,
    changeDescription?: string | null,
    changeQtyBlend?: number | null,
    changePriceAdjustment?: string | null,
    blendID?: string | null,
    campaignToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
  userID?: string | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    id: string,
    userID: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      alias: string,
      status: PageStatus,
      category: string,
      subCategory: string,
      code?: string | null,
      name: string,
      type?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      contentTitle?: string | null,
      contentTitle2?: string | null,
      contentTitle3?: string | null,
      content?: string | null,
      content2?: string | null,
      content3?: string | null,
      tags?: Array< string | null > | null,
      changeFreq?: PageChangeFreq | null,
      priority?: PagePriority | null,
      price_of?: number | null,
      price: number,
      qty?: number | null,
      stockControl?: boolean | null,
      applicationTime?: number | null,
      applicationTimeChild?: number | null,
      photo1?: string | null,
      photo2?: string | null,
      photo3?: string | null,
      photo4?: string | null,
      photo5?: string | null,
      thumbnail?: string | null,
      thumbnailSrc?: string | null,
      thumbnailCropper?: string | null,
      titlePadX?: string | null,
      titlePadY?: string | null,
      contentPadX?: string | null,
      contentPadY?: string | null,
      optionTitle?: PageOptionTitle | null,
      sideColumn?: PageSideColumn | null,
      sideColumnPadX?: string | null,
      sideColumnPadY?: string | null,
      sideColumnContent?: string | null,
      optionSideColumn?: PageOptionSideColumn | null,
      hideFooter?: boolean | null,
      hideInMenu?: boolean | null,
      createdAt?: string | null,
      search?: string | null,
      hideInSearch?: boolean | null,
      updatedAt: string,
    } | null,
    options?:  {
      __typename: "ModelCartOptionConnection",
      nextToken?: string | null,
    } | null,
    qty?: number | null,
    changeName?: string | null,
    changeDescription?: string | null,
    changeQtyBlend?: number | null,
    changePriceAdjustment?: string | null,
    blendID?: string | null,
    campaignToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  userID?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: OrderStatus,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
    } | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    notes?: string | null,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    vaccinationCardItems?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  userID?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: OrderStatus,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
    } | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    notes?: string | null,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    vaccinationCardItems?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  userID?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfessionType?: string | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      notes?: string | null,
      urlUserName?: string | null,
      urlEnable?: boolean | null,
      allowViewEmail?: boolean | null,
      allowViewPhone?: boolean | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      pix?: string | null,
      zipCodeCoverage?: Array< string | null > | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      regionsConfig?: string | null,
      regionSunday?: string | null,
      regionMonday?: string | null,
      regionTuesday?: string | null,
      regionWednesday?: string | null,
      regionThursday?: string | null,
      regionFriday?: string | null,
      regionSaturday?: string | null,
      customerPagarmeID?: string | null,
      companyID?: string | null,
      companyHomeCare?: boolean | null,
      companyCampaign?: boolean | null,
      companyAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: OrderStatus,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
    } | null,
    couponID?: string | null,
    couponName?: string | null,
    couponDiscount?: number | null,
    deliveryPrice?: number | null,
    total?: number | null,
    rating?: number | null,
    ratingNotes?: string | null,
    orderPagarmeID?: string | null,
    addressReference?: string | null,
    addressStreet?: string | null,
    addressNumber?: string | null,
    addressComplement?: string | null,
    addressZipcode?: string | null,
    addressNeighborhood?: string | null,
    addressCity?: string | null,
    addressState?: string | null,
    addressCountry?: string | null,
    notes?: string | null,
    campaignID?: string | null,
    campaignName?: string | null,
    campaignOrientation?: string | null,
    companyID?: string | null,
    company?:  {
      __typename: "Company",
      id: string,
      cnpj: string,
      name: string,
      openingHours?: string | null,
      phones?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      search?: string | null,
      enableRetail?: string | null,
      schedulesSunday?: Array< string | null > | null,
      schedulesMonday?: Array< string | null > | null,
      schedulesTuesday?: Array< string | null > | null,
      schedulesWednesday?: Array< string | null > | null,
      schedulesThursday?: Array< string | null > | null,
      schedulesFriday?: Array< string | null > | null,
      schedulesSaturday?: Array< string | null > | null,
      status?: CompanyStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyName?: string | null,
    companyPhone?: string | null,
    companyOpeningHours?: string | null,
    qrCodePix?: string | null,
    qrCodePixUrl?: string | null,
    payMethod?: PaymentMethods | null,
    installments?: number | null,
    homeCareOrRetail?: string | null,
    vaccinationCardItems?:  {
      __typename: "ModelVaccinationCardItemConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};
