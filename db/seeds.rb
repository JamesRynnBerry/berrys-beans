# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bean.destroy_all
User.destroy_all
Store.destroy_all

User.create(name: 'William Badger', email: 'badbadge@gmail.com', password: 'password');
User.create(name: 'James Berry', email: 'mallman@gmail.com', password: 'password');
User.create(name: 'Tenzing Shuprina ', email: 'TSA@gmail.com', password: 'password');
User.create(name: 'Roger Doger', email: 'RogerD@gmail.com', password: 'password');
User.create(name: 'Ghost', email: 'ghost@hotmail.com', password: 'password');

Bean.create(name: "French Brazilian Bourbon Cerrado", roast: "Light Roast", price: 12, flavor: "Hazelnut" , origin: "Brazil" , process: "Washed", producer: "Unknown");
Bean.create(name: "Brazilian Daterra Estate Sweet Blue RFA", roast: "Light Roast" , price: 14,  flavor: "Chocolate" , origin: "Brazil", process: "Washed", producer: "Daterra Plantations");
Bean.create(name: "Colombian Supremo", roast: "Light Roast", price: 12, flavor: "Sweet", origin: "Colombia", process: "Washed", producer: "Unkown");
Bean.create(name: "Vienna Sumatra Mandheling", roast: "Vienna Roast" , price: 14,  flavor: "Spices" , origin: "Indonesia" , process: "Washed" , producer: "Unkown");
Bean.create(name: "Vienna Costa Rican SHB EP Cafe De Altura De San Ramom El Poeta", roast: "Vienna Roast" , price: 12,  flavor: "Tangy", origin: "Costa Rica", process: "Washed", producer: "Unknown");
Bean.create(name: "French Java Blue Batavia Grade 1", roast: "French Roast", price: 12,  flavor: "Creamy", origin: "Indonesia" , process: "Semi Washed" , producer: "Unknown");
Bean.create(name: "French Guatemalan Los Olivos SHB", roast: "French Roast", price: 12, flavor: "Sweet", origin: "Guatemala", process: "Semi Washed" , producer: "Unknown");
Bean.create(name: "French Papa New Guinea Grade 1", roast: "French Roast", price: 12, flavor: "Sweet", origin: "Papa New Guinea" , process: "Washed", producer: "Unknown");
Bean.create(name: "Colombian Espresso", roast: "Espresso" , price: 12 ,  flavor: "Sweet", origin: "Colombia" , process: "Washed", producer: "Uknown" );
Bean.create(name: "Brazil Espresso", roast: "Espresso" , price: 12 ,  flavor: "Nutty", origin: "Brazil" , process: "Washed", producer: "Uknown");
Bean.create(name: "Italian Espresso", roast: "Espresso", price: 13 ,  flavor: "Sweet", origin: "Italy" , process: "Semi Washed", producer: "Uknown");
Bean.create(name: "Kenya AA Embu Nyeriville", roast: "Light Roast", price: 16 ,  flavor: "Nutty", origin: "Kenya", process: "Washed" , producer: "Unknown" );
Bean.create(name: "Monsoon Malabar", roast: "Light Roast" , price: 12, flavor: "Hazelnut", origin: "India" , process: "Washed" , producer: "Uknown");

Store.create(name: "Starbucks", location: "455 Main St, New York, NY 10044" )
Store.create(name: "Porto Rico", location: "422 E 75th St. New York, NY 10021")
Store.create(name: "Oslo", location: "201 Bleecker St, New York, NY 10012")

puts "Done Seeding"