let marketVendor = {
    name: "Kampala Market Vendor",
    location: "Kampala",
    products: [
      { name: "Bananas", price: 2000, quantity: 150 },
      { name: "Cassava", price: 5000, quantity: 100 },
      { name: "Tomatoes", price: 3000, quantity: 80 }
    ],
  
    // Method to calculate total revenue from all products in stock
    calculateTotalRevenue: function() {
      let totalRevenue = 0;
      for (let i = 0; i < this.products.length; i++) {
        totalRevenue += this.products[i].price * this.products[i].quantity;
      }
      return totalRevenue;
    }
  };
  
  // Log the total revenue from all products in stock
  console.log(`Total revenue from products in stock: UGX ${marketVendor.calculateTotalRevenue()}`);
  