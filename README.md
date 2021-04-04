# [Woocommerce with React](https://github.com/shehzadali110/woo-react) :rocket:

> This is a React WooCommerce theme, built with React JS, Webpack, Babel, Woocommerce Api

## Important Note ⭐:
This code is using in live site. if you want to use it so please change the ui.

## Live Sites:

* [Wp Site](http://sainstore.move.pk/)
* [React Site](http://almovie.move.pk/)

## Demo Desktop :video_camera:

![](demos/home-demo.gif)

# Features:

1. WooCommerce Store in React( contains: Products Page, Single Product Page, AddToCart, CartPage ).
2. Hot Reloading
3. Prefetching
4. Woocommerce Api (http://woocommerce.github.io/woocommerce-rest-api-docs)
5. WP API Menus (https://wordpress.org/plugins/wp-api-menus/)

## Getting Started :rocket:

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Installing :wrench:

1. Clone this repo using terminal `git clone git@github.com:shehzadali110/woo-react`
2. `cd woo-next`
3. `npm install Or yarn install`

## Add the following plugins in your WordPress site.

1. Woocommerce Api (http://woocommerce.github.io/woocommerce-rest-api-docs)
2. WP API Menus (https://wordpress.org/plugins/wp-api-menus/)
3. Download and activate:

* You can also import default wooCommerce products that come with wooCommerce Plugin for development ( if you don't have any products in your WordPress install ) `WP Dashboard > Tools > Import > WooCommerce products(CSV)`: The WooCommerce default products csv file is available at `wp-content/plugins/woocommerce/sample-data/sample_products.csv`

## Configuration(for Woocommerce Rest Api) :wrench:

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

## Author :bust_in_silhouette:

* **[Imran Sayed](https://github.com/shehzadali110/)**

## License :page_with_curl:

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
