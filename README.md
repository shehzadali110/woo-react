# [Woocommerce with React](https://github.com/shehzadali110/woo-react) :rocket:

> This is a React WooCommerce theme, built with React JS, Webpack, Babel, Woocommerce Api

## Important Note ⭐:
The code for the Video Tutorial is in the branch [youtube-course](https://github.com/imranhsayed/woo-next/tree/youtube-course)
However, since there is continuous contribution and updates to this project. The 'master'
branch is upto date with those changes. You can also refer to the PR notes for changes.

## Demo Desktop :video_camera:

![](demos/home-demo.gif)

## Live Demo:

[Wp Live Site](http://sainstore.move.pk/)
[React Live Site](http://almovie.move.pk/)

## Checkout Page Demo
![](demos/Checkout-page.gif)

## Payment Demo ( Paypal example )
![](demos/paypal-payment-demo.gif)

## Order Received Demo
![](demos/order-received-demo.gif)

# Features:

1. WooCommerce Store in React( contains: Products Page, Single Product Page, AddToCart, CartPage ).
2. SSR
3. SEO friendly
4. Automatic Code Splitting
5. Hot Reloading
6. Prefetching
8. Woocommerce Api

## Getting Started :rocket:

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Installing :wrench:

1. Clone this repo using terminal `git clone git@github.com:shehzadali110/woo-react`
2. `cd woo-next`
3. `npm install Or yarn install`

## Add GraphQl support for WordPress

1. Download and activate the following plugins , in your WordPress plugin directory:

* [wp-graphql](https://github.com/imranhsayed/woo-next/tree/master/wordpress/plugins) Exposes graphql for WordPress ( **Tested with v-0.8.0** of this plugin )
* [wp-graphql-woocommerce](https://github.com/imranhsayed/woo-next/tree/master/wordpress/plugins) Adds Woocommerce functionality to a WPGraphQL schema ( **Tested with v-0.5.0** of this plugin )

* Make sure Woocommerce plugin is also installed in your WordPress site. You can also import default wooCommerce products that come with wooCommerce Plugin for development ( if you don't have any products in your WordPress install ) `WP Dashboard > Tools > Import > WooCommerce products(CSV)`: The WooCommerce default products csv file is available at `wp-content/plugins/woocommerce/sample-data/sample_products.csv`

## Hero Carousel.
To use Hero carousel, create a category called 'offers' from WordPress Dashboard > Products > Categories.
Now create and assign as many child categories to this parent 'offers' category with name, description and image.
These Child categories data will automatically be used to create hero carousel on the frontend. 


## Configuration(for GraphQL implementation) :wrench:

* _Note_ Below is for GraphQL implementation , for REST API check [feature/rest-api](https://github.com/imranhsayed/woo-next/tree/feature/rest-api) branch

1. (Required) Create a `.env` file taking reference from `.env-example` and  update your WordPressSite URL.
2. (optional) You can update your productImagePlaceholder, singleImagePlaceholder in `client-config.js`
   
   ```ruby
   const clientConfig = {
       productImagePlaceholder: 'https://via.placeholder.com/800', // e.g https://via.placeholder.com/434 - Placeholder image URL for index page
       singleImagePlaceholder: 'https://via.placeholder.com/200', // e.g https://via.placeholder.com/200 - Placeholder image URL for individual product page
   };
   
   export default clientConfig;
   ```

## Common Commands :computer:

* `dev` Runs server in development mode

## Versioning :bookmark_tabs:

I use [Git](https://github.com/) for versioning. 

## Author :bust_in_silhouette:

* **[Imran Sayed](https://twitter.com/imranhsayed)**

## License :page_with_curl:

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
