// Script bởi tloc0803
let obj = JSON.parse($response.body);

obj.subscriber = {
  "subscriptions": {
    "com.locket.premium.yearly": {
      "expires_date": "2099-12-31T23:59:59Z",
      "purchase_date": "2024-01-01T00:00:00Z"
    }
  },
  "entitlements": {
    "Gold": {
      "expires_date": "2099-12-31T23:59:59Z",
      "purchase_date": "2024-01-01T00:00:00Z",
      "product_identifier": "com.locket.premium.yearly"
    }
  }
};

$done({ body: JSON.stringify(obj) });
