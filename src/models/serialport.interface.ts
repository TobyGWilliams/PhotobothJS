export interface SerialPort {
  comName: string;
  manufacturer: string;
  serialNumber: string;
  pnpId: string;
  locationId: string;
  vendorId: string;
  productId: string;
}

export interface ConenctedSerialPort {
  path;
}
