const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    allowedHosts: "all",
    host: 'localhost',   
    port: 3000,          
    open: false,      
  },
};
