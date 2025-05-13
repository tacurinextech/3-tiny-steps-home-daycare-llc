const dev = {
    COMPANY: {
      NAME: "[DEV] 3 Tiny Steps Home Daycare LLC",
      ALIAS: "3 Tiny Steps",
      PHONE: "+1 (203)-818-8596",
      EMAIL: "3tinystepshomedaycare@gmail.com",
      URL: "www.3tinysteps.com",
      ADDRESS: "18 Chipping Lane, Norwalk, CT 06851",
      HOURS: "Mon-Fri: 8:00AM - 5:00PM"
    }
  };
  
  const prod = {
    COMPANY: {
      NAME: "3 Tiny Steps Home Daycare LLC",
      ALIAS: "3 Tiny Steps",
      PHONE: "+1 (203)-818-8596",
      EMAIL: "3tinystepshomedaycare@gmail.com",
      URL: "www.3tinysteps.com",
      ADDRESS: "18 Chipping Lane, Norwalk, CT 06851",
      HOURS: "Mon-Fri: 8:00AM - 5:00PM"
    }
  };
  
  export const config = process.env.NODE_ENV === 'development' ? dev : prod;