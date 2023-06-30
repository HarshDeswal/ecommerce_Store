# Denvo Ecommerce Store
This is an educational project showcasing a fully functional ecommerce store built with Next.js and Sanity. The project includes integration with the Stripe payment gateway and features a collection of [**Boat**](https://www.boat-lifestyle.com/) products for demonstration purposes.

![image](https://github.com/HarshDeswal/ecommerce_Store/assets/94471009/14e8f297-9dbe-4165-af90-1a62671806f3)


## Features

* View detailed product information including images, descriptions, and pricing
* Add products to the shopping cart
* Adjust quantities and remove products from the cart
* Product recommendation using marquee
* Proceed to checkout and complete the payment using Stripe
* Receive order confirmation and summary via email
* Admin dashboard to manage products and orders

## Technologies Used

* **Next.js:** A React framework for server-side rendering and building scalable applications.
* **Sanity:** A headless CMS for managing product data and content.
* **Stripe:** A popular payment gateway for secure and seamless online transactions.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: <br>
```git clone https://github.com/your-username/denvo-ecommerce-store.git```

2. Install dependencies: <br>
   ```cd denvo-ecommerce-store```<br>
```npm install```

3. Set up environment variables:<br>
   Create a .env.local file in the root directory and add the following environment variables:<br>
   `NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<your_stripe_public_key>`<br>
`SANITY_PROJECT_ID=<your_sanity_project_id>`<br>
`SANITY_DATASET=<your_sanity_dataset>`
<br>
Replace your_stripe_public_key, your_sanity_project_id, and your_sanity_dataset with your own values.

4. Import sample data:<br>
In your Sanity dashboard, import the provided sample data located in the sanity/sample-data directory.<br>

5. Start the development server:<br>
`npm run dev`

6. Open your browser and visit **http://localhost:3000** to see the application.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:<br>
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch to your fork.
4. Submit a pull request describing your changes.

## License

This project is licensed under the [**MIT License**](https://opensource.org/license/mit/). 

## Disclaimer

Please note that this project is for educational purposes only and should not be used for production or commercial purposes. The boat product images used in this project are for demonstration purposes and are not to be used for any commercial use without proper licensing.

## Acknowledgements

* [Next.js Documentation](https://nextjs.org/docs)
* [Sanity Documentation](https://www.sanity.io/docs)
* [Stripe Documentation](https://stripe.com/docs)
* [Boat](https://www.boat-lifestyle.com/)
