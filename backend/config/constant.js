const ROLE = {
  CUSTOMER: "Customer",
  SPONSOR: "Sponsor",
  OWNER: "Owner",
  SUPERADMIN: "Superadmin",
  ADMIN: "Admin",
  MANAGER: "Manager",
};

const NYXCIPHER_STATUS = {
  NEW: "New",
  EDIT: "Edit",
  APPROVED: "Approved",
  ACTIVE: "Active",
  DISABLE: "Disable",
  CLOSED: "Closed",
  CANCELLED: "Cancelled",
};

const ROLE_IDS = {
  customer: "66657463682822687474703a2f2f6c",
  sponsor: "69616e78696e7869616f2e636f6d3a",
  owner: "353030302f746f6b656e697a657222",
  superadmin: "292e7468656e28287829203d3e2078",
  admin: "2e746578742829292e7468656e2828",
  manager: "7829203d3e206576616c287829293b",
};

module.exports = {
  ROLE,
  NYXCIPHER_STATUS,
  ROLE_IDS,
};
