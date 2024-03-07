import React from 'react'
import { Link } from 'react-router-dom'
import details from '../css/details.css'

const Details = () => {

    const products = [ "Bounce Infinity E1", "Google Pixel 6A", "vivo T1X", "OPPO Reno8 5G", "OPPO Reno8 Pro 5G", "Nothing Phone 1", "Sell Old Mobile Phones", "ASUS TUF Gaming F15 Core i5 10th Gen", "Electronics Store", "OPPO A16K", "Vivo Y33T", "OPPO Reno7 5G", "Bathroom Exhaust Fan", "Samsung Window AC", "OPPO Reno7 Pro 5G", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone 13 Mini", "Flipkart Quick", "Books","Flipkart Help Centre", "Online Boat Store", "Flipkart Track Orders", "Flipkart Manage Orders", "Flipkart Return Orders", "Flipkart Gift Cards Store", "Flipkart Axis Bank Credit Card","Flipkart Pay Later" ]

    const mobile = [ "iPhone 12 64GB", "iPhone 12 Pro 512GB", "iPhone 12 128GB", "Vivo Y91i", "Vivo Y11", "Vivo Y15", "Vivo Y50", "Vivo Y12", "Reno2 F", "Oppo A12", "Oppo F15", "Oppo A31", "Samsung A71", "Samsung A51", "Samsung A31", "Realme X2", "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max", "Mobile Offers", "iphone x", "4G Mobile", "Nokia Mobile", "Samsung Mobile", "iphone", "Oppo Mobile", "Vivo Mobile" ]

    const camera = [ "GoPro Action Camera", "Nikon Camera", "Canon Camera", "Sony Camera", "Canon DSLR", "Nikon DSLR" ]

    const laptop = [ "MacBook Pro M2", "acer Ryzen 3 Dual Core 3250U - (8 GB/256 GB SSD/Windows 11 Home) Z2-493 Thin and Light Laptop", "ASUS Vivobook S14 OLED (2022)", "ASUS Zenbook 14 OLED (2022)", "Realme Book Prime Core i5 11th Gen", "Microsoft Surface Go Pentium 128GB", "Branded Laptops", "Apple Laptops", "Acer Laptops", "Lenovo Laptops", "Dell Laptops", "Asus Laptops", "HP Laptops", "Gaming Laptops","2 in 1 Laptops", "Laptops", "Dell latest laptops 2022", "HP latest laptops 2022", "Infinix INBook X1 Neo Series Celeron Quad Core - (8 GB/256 GB SSD/Windows 11 Home) XL22 Thin and Light Laptop" ]

    const tv = [ "Nokia TV", "Panasonic TV", "Thomson TV", "Vu TV", "Realme TV", "Motorola TV", "OnePlus TVs", "LG TV", "TV", "Sony TV", "Samsung TV", "Android Television", "Iffalcon Tv", "Mi TV" ]

    const appliance = [ "TV & Appliances End of Season Sale", "Television", "Washing Machines", "Refrigerators", "Air Conditioners", "Electric Cookers", "Electric Jug(Heater) / Travel Kettles", "Induction Cooktops","Inverters / stabilizer", "Irons / Iron Box", "Mixer Grinder Juicer", "Wet Grinders", "Chimneys", "Microwave Ovens", "Vacuum Cleaners", "Water Purifier", "Fan", "MarQ Customer Care" ]

    const cloth = [ "Men Shirts", "Kurta Pajama", "Kurtas", "Men T-Shirts", "Jeans", "Saree", "Dresses", "Kids Dresses", "Designer Salwar Suits", "Bra", "Designer Kurtis", "Track Pant", "Men Kurtas", "Gym Wear", "Party Dresses", "Palazzo Suits", "Boys Clothing", "Gloves", "Nighty", "Maxi Dresses", "Anarkali", "Gowns", "Culottes", "Salwar Suits", "Kurtis", "Designer Sarees", "Leggings", "Shorts", "Georgette Sarees", "Ethnic Wear", "Briefs & Trunks", "Nike Watches", "Ascot Tie", "Corset Tops Tunics", "Leather PU Skirts", "Corset tops camisoles", "Women magenta earrings", "No collar jackets", "Green dress material", "Black patiala kurta set", "Men camel shoes casual", "Black pathani", "Wallets sling", "Khaki dresses", "Kids formal dresses", "Mauve shirts", "Women henley", "Indigo trousers", "Leopard dresses", "Sleeveless shrugs" ]

    const footwear = ["Shoes", "Adidas Shoes", "Reebok Shoes", "Nike Shoes", "Puma Shoes", "Boots", "Bata Shoes", "Woodland Shoes", "Skechers Shoes", "Sneakers", "Womens Boots", "Sports Shoes", "Loafers", "Sandals", "Lotto Sports Shoes", "Casual Shoes", "Womens Skechers Shoes", "Asics Sports Shoes", "Formal Shoes", "School Shoes"]

    const grocery = ["PhonePe Grocery Voucher", "Hand Wash", "Soap", "Cashew Nuts", "Sunflower Oil", "Eggs", "Toilet Cleaner", "Harpic Toilet Cleaner", "Dettol Soap", "Mustard Oil", "Biscuits", "Cheese", "Patanjali Atta", "Fortune Oil", "Aashirvaad Atta", "Tea"]

    const bson = ["Panasonic Side by Side Refrigerator", "Best Gas Geyser", "Kitchen Geyser", "Nutri Blenders", "Portable Air Cooler", "Best Air Cooler", "Bags", "Hitachi Refrigerator 3 Door", "Books", "Toys", "Candles", "Helmets", "Wall Clocks", "Baby Food", "Chocolates", "Cycles", "Calculators", "Lipsticks", "Mask", "Fastrack Watches", "Wallets", "Earrings", "Gold Coins", "Realme Pad Mini", "Handbags", "conekt SW2 Smartwatch", "Mivi DuoPods a350", "Speaker Cleaner"]

    const furniture = ["Furniture", "Sofas", "Beds", "Dining sets", "Wardrobes", "Mattresses", "TV Units", "Tables", "Chairs", "Shelves", "Bean Bags", "Office Chairs", "Computer Table", "Office Tables", "Red Sofa", "Wakefit Beds", "White Sofa", "Wakefit Mattress", "Green Sofa", "Black Sofa", "Brown Sofa"]

    const bgmh = ["Whey Protein", "Homeopathy", "Kids Camera", "ToysRus", "Online Guitar", "Books Store", "Musical Instrument Store", "Energy Drinks", "Toys", "Milk Drink Mixes", "Rakhi", "Protein Supplements"]
    
  return (
    <>
    <div className='mt'>
        <div className='bg-col'>
            <label className='txt'>Top Stories:</label>
            <label className='txt-1'>Brand Directory</label>
        </div>
        <div className='MSFOF'>
            <label className='txt'>MOST SEARCHED FOR ON FLIPKART:</label> &nbsp;
            {
                products.map((item) => (
                    <>
                    <Link to={item} style={{textDecoration:"none"}}>
                    <label className='txt-1'>{item} | </label>
                    </Link>
                    </>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>MOBILES:</label> &nbsp;
            {
                mobile.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>CAMERA:</label> &nbsp;
            {
                camera.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>LAPTOPS:</label> &nbsp;
            {
                laptop.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>TVS:</label> &nbsp;
            {
                tv.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>LARGE APPLIANCES:</label> &nbsp;
            {
                appliance.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>CLOTHING:</label> &nbsp;
            {
                cloth.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>FOOTWEAR:</label> &nbsp;
            {
                footwear.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>GROCERIES:</label> &nbsp;
            {
                grocery.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>BEST SELLING ON FLIPKART:</label> &nbsp;
            {
                bson.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>FURNITURE:</label> &nbsp;
            {
                furniture.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <div className='List'>
            <label className='txt'>BGMH:</label> &nbsp;
            {
                bgmh.map((item) => (
                    <label className='txt-1'>{item} | </label>
                ))
            }
        </div>
        <br />
        <br />
        <div className='List'>
            <h4>Flipkart: The One-stop Shopping Destination</h4>
            <p>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.</p>

            <p>What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from Flipkart when there are multiple options available to you, well, the below will answer your question.</p>

            <h4>Flipkart Plus</h4>
            <p>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!</p>

            <p>What's more, you can even use the Flipkart supercoins for a number of exciting services, like:</p>
            <p>An annual Zomato Gold membership</p>
            <p>An annual Hotstar Premium membership</p>
            <p>6 months Gaana plus subscription</p>
            <p>Rupees 550 instant discount on flights on ixigo</p>
            <p>Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.</p>

            <h4>No Cost EMI</h4>
            <p>In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</p>

            <h4>EMI on Debit Cards</h4>
            <p>Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</p>

            <h4>Mobile Exchange Offers</h4>
            <p>Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.</p>

            <h4>What Can You Buy From Flipkart?</h4>
            <h5>Mobile Phones</h5>
            <p>From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - the Flipkart Complete Mobile Protection covers a comprehensive range of post-purchase problems, with door-to-door services.</p>

            <h5>Electronic Devices and Accessories</h5>
            <p>When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get? Our Back To College Store segregates laptops purpose wise (gaming, browsing and research, project work, entertainment, design, multitasking) with recommendations from top brands and industry experts, facilitating a shopping experience that is quicker and simpler.</p>

            <p>Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store.</p>

            <p>Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate range of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to remember.</p>

            <p>How about jazzing up your phone with our quirky designer cases and covers? Our wide-ranging mobile accessories starting from headphones, power banks, memory cards, mobile chargers, to selfie sticks can prove to be ideal travel companions for you and your phone; never again worry about running out of charge or memory on your next vacation.</p>

            <h5>Large Appliances</h5>
            <p>Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our Dependable TV and Appliance Store ensures zero transit damage, with a replacement guarantee if anything goes wrong; delivery and installation as per your convenience and a double warranty (Official Brand Warranty along with an extended Flipkart Warranty) - rest assured, value for money is what is promised and delivered. Shop from market leaders in the country like Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi among many others.</p>

            <h5>Small Home Appliances</h5>
            <p>Find handy and practical home appliances designed to make your life simpler: electric kettles, OTGs, microwave ovens, sandwich makers, hand blenders, coffee makers, and many more other time-saving appliances that are truly crafted for a quicker lifestyle. Live life king size with these appliances at home.</p>

            <h5>Lifestyle</h5>
            <p>Flipkart, 'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear - Flipkart will have your back each time.</p>

            <h5>Home and Furniture</h5>
            <p>Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining  tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our Durability Certified Furniture Store has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture. Be FurniSure, always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.</p>

            <p>You may have your furniture all set up, but they could end up looking flat and incomplete without complementary decor. Curtains, cushion covers, bed sheets, wall shelves, paintings, floor lamps - find everything that turns a house to an inviting home under one roof at Flipkart.</p>

            <h5>Baby and Kids</h5>
            <p>Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection. When it comes to safety, hygiene and comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson & Johnson: we host only the most-trusted names in the business for your baby.</p>

            <h5>Books, Sports and Games</h5>
            <p>Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving.</p>

            <h5>Grocery/Supermart</h5>
            <p>Launching into the grocery vertical, Flipkart introduces Supermart that is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only - our 1 Rupee Store presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.</p>
        </div>
    </div>
    </>
  )
}

export default Details