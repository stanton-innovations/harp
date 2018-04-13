export class NewOrderView {
  customer: Customer;
  fulfillments: Array<Fulfillment>;
  paymentSummary: PaymentSummary;
  orderNumber: string;
  onlineOrderNumber: string;
  orderDate: string;
  jobName: string;
  sellerOrganizationCode: string;
  svsOrderStatusDesc: string;
  maxOrderStatus: string;
  draftOrderFlag: string;
  cancellable?: boolean;
  cancelEligibility?: CancelEligibilityDetails;
  // Error response fields
  timestamp?: string;
  status?: string;
  error?: string;
  message?: string;
  path?: string;
}

export class Fulfillment {
  deliveryDate: string;
  deliveryType: string;
  svsOrderStatusDesc: string;
  type: string;
  products: Array<Product>;
  services?: Array<Product>;
  deliveryCustomerDetails: Customer;
  itemCount?: string;
}

export class Product {
  skuNumber: string;
  skuDescription: string;
  vendorName: string;
  orderedQty: string;
  originalOrderedQty: string;
  lineTotalWithoutTax: string;
  totalPerQuantity: string;
  originalTotalPerQuantity: string;
  mVendorNo: string;
  poNumber: string;
  lineNumber: string;
  deliveryMethod: string;
  sellerOrganizationCode: string;
  stateCode: string;
  itemGroupCode: string;
  lineType: string;
  shipNode: string;
  refundAmount: string;
  cancelQty?: string;
  lineTaxes: Array<LineTaxes>;
  imageUrl? = '/img/transparent.png';
  modelNumber?: string;
  vendorStockPartNbr: string;
}

export class PaymentSummary {
  subTotal: string;
  discount: string;
  tax: string;
  orderTotal: string;
  refundOwedAmount: string;
  orderStatus?: string;
  paymentMethodList: Array<PaymentMethod>;
}

export class OrderView {
  documentType: string;
  draftOrderFlag: string;
  extnHostOrderReference: string;
  sellerOrganizationCode: string;
  services: Array<OrderService>;
  orderDate: string;
  extnSvsStatusDesc: string;
  jobName: string;
  deliveryPONumber: string;
  customer: Customer;
  deliveryAgent: string;
  cancellable: boolean;
  cancelEligibility: CancelEligibilityDetails;
  onlineOrderNo: string;
  payment: TransactionDetails;
  rawOrder: string;
}

export class PrintView {
  data: RefundReceiptRequest;
}

export class RefundReceiptRequest {
  order: any;
  storeInfo: StoreInfo;
  associateInfo: SellerInfo;
}

export class RecallIdReceiptRequest {
  orderNumber: string;
  stageRecallID: string;
  billTo: Customer;
}

export class StoreInfo {
  sellingStore: string;
  address: Address;
  phoneNumber: string;
}

export class SellerInfo {
  ldapId: string;
  firstName: string;
}

export class OrderService {
  deliveryMethod: string;
  svsOrderStatus: string;
  address: DeliveryAddress;
  estimatedArrival: string;
  itemCount = 0;
  products = new Array<ProductView>();
  orderedQty;
  isDeliveryService: boolean;
}

export class DeliveryAddress {
  addressFirstName: string;
  addressLastName: string;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  addressPhone: string;
}

export class ProductView {
  productDetail: ItemDetail;
  orderedQty: string;
  lineTotalWithoutTax: string;
  totalPerQuantity: string;
  extnPONumber: string;
  extnMVendorNo: string;
  extnHostOrderLineReference: string;
  unitPrice: string;
  unitPricePerQuantity: string;
  deliveryMethod: string;
  sellerOrganizationCode: string;
  stateCode: string;
  splOrderLineNo: string;
  splOrderDeliveryLocIndicator: string;
  splOrdIsDirectShip: string;
  itemGroupCode: string;
  lineType: string;
  shipNode: string;
  lineTaxes: Array<LineTaxesView>;
  vendorLabel: string;
  isAppliance: boolean;
  cancelQty: string;
}

export class LineTaxesView {
  tax: string;
  taxName: string;
  extnExtendedTaxPerLine: string;
}

export class ItemDetail {
  skuNumber: string;
  productName: string;
  modelNumber: string;
  imageUrl: string;
  vendorName: string;
}

export class Address {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

export class Customer {
  dayPhoneNumber: string;
  mobilePhoneNumber: string;
  eveningPhoneNumber?: string;
  emailAddress?: string;
  address: Address;
  firstName: string;
  lastName: string;
}

export class TransactionDetails {
  subTotal: string;
  discount: string;
  tax: string;
  orderTotal: string;
  paymentMethods = new Array<PaymentMethod>();
  refundOwedAmount: string;
  orderStatus: string;
}

export class PaymentMethod {
  paymentType: string;
  displayCreditCardNo: string;
  totalCharged: string;
}

export class CancelOrderRequest {
  order: CancelOrder;
}

export class CancelOrder {
  orderNumber: string;
  cancelLocation: string;
  lockID: string;
  lockRefStore: string;
  modifiedUserID: string;
  documentType: string;
  draftOrderFlag: string;
  enterpriseCode: string;
  cancelReasonCode: string;
  cancelReasonText: string;
  sellerOrganizationCode: string;
  extnInvoiceRequired: string;
  lines: Array<CancelOrderLines>;
}

export class CancelOrderLines {
  hostOrderLineReference: string;
  cancelQuantity: string;
  orderedQty: string;
  skuCode: string;
  customerLinePONo: string;
  deliveryMethod: string;
  itemGroupCode: string;
  lineType: string;
  shipNode: string;
  splOrderLineNumber: string;
  mVendorNo: string;
  poLineReferenceNo: string;
  splOrdDeliveryLocIndicator: string;
  splOrdIsDirectShip: string;
  poOrganizationCode: string;
  poReceivingNode: string;
  stateCode: string;
  country: string;
  lineCategory: string;
  lineTaxes: Array<LineTaxes>;
  modelNbr: string;
}

export class LineTaxes {
  taxName?: string;
  tax?: number;
  extnExtendedTaxPerLine?: number;
}

export class CancelOrderResponse {
  ResponseCode: string;
  ResponseMessage: string;
}

export class CancelPoResponseStatus {
  statusCode: number;
  description: string;
  timeStamp: string;
}

export class CancelPoResponse {
  purchaseOrders: Object[];
  responseStatus: CancelPoResponseStatus;
}

export class PaymentRequest {
  orderID: string;
  userID: string;
  lineItems: PaymentLineItems;
}

export class PaymentLineItems {
  refundableAmount: number;
  stagedAmount: number;
  lineItem: Array<PaymentLineItem>;
}

export class PaymentLineItem {
  quantity: number;
  itemReference: string;
}

export class UserProfile {
  userID: string;
  location: string;
  userRole: string;
}

export class LockDetails {
  lockID: string;
  lockedUser: string;
  lockedLocation: string;
  failureReason: string;
}

export class RefundDetails {
  status: string;
  tillRequired: boolean;
  gcPresent: boolean;
  estimatedRefund: string;
}

export class StageDetails {
  status: string;
  stageRecallID: string;
  stagedTransactionType: string;
  stagedAmount: number;
}

export class PrintResponse {
  ResponseCode: string;
  ResponseMessage: string;
}

export class EligibilityRequest {
  orderID: string;
  purchaseOrders: Array<PurchaseOrder>;
}

export class PurchaseOrder {
  vendorNbr: string;
  locationNbr: string;
  purchaseOrderNbr: string;
  lineItems: Array<LineItem>;
}

export class LineItem {
  orderQuantity: string;
  lineItemReference: string;
  modelNbr: string;
}

export class CancelEligibilityDetails {
  // cancelState: CancellationState;
  orderLines: Array<OrderLine>;
}

export class OrderLine {
  lineItemReference: string;
  orderedQuantity: string;
  cancellableQuantity: string;
}