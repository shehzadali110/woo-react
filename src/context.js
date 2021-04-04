import React, { Component } from 'react';
import axios from 'axios';
import Error from './views/components/error/index';
import Spinner from './views/components/spinner/index';

const ContextApi = React.createContext();

class WpProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            success: false,
            topMenu: null,
            navMenu: null,
            catMenu: null,
            catIcon: null,
            cart: [],
            footerMenu: null,
            bottomfooter: null,
            products: null,
            singleProduct: null,
            quickView: null,
            toggleQuick: null,
            wooSingPro: 28,
            cartSubTotal: 0,
            error: ''
        };
    }

    createMarkup = (data) => ({
        __html: data
    });

    componentDidMount() {

        let catIcons = [
            { id: 15, icon: "thehanger-icons-alignment_align-all-1" },
            { id: 30, icon: "thehanger-icons-clothes_baseball-hat" },
            { id: 37, icon: "thehanger-icons-clothes_pants" },
            { id: 43, icon: "thehanger-icons-party_present-gift" },
            { id: 49, icon: "thehanger-icons-clothes_baby-hoodie" },
            { id: 55, icon: "thehanger-icons-clothes_t-shirt" },
            { id: 61, icon: "thehanger-icons-clothes_trendy-shoes" },
            { id: 62, icon: "thehanger-icons-clothes_shirt" },
            { id: 63, icon: "thehanger-icons-alignment_align-all-1" }
        ];

        let appUrl = process.env.REACT_APP_URL,
            topBar = appUrl + "/wp-api-menus/v2/menus/76",
            navBar = appUrl + "/wp-api-menus/v2/menus/74",
            rightBar = appUrl + "/wp-api-menus/v2/menus/75",
            footerMenu1 = appUrl + "/wp-api-menus/v2/menus/70",
            footerMenu2 = appUrl + "/wp-api-menus/v2/menus/71",
            footerMenu3 = appUrl + "/wp-api-menus/v2/menus/72",
            bottomfooter = appUrl + "/wp-api-menus/v2/menus/73",
            wooCat = appUrl + "/wc/v3/products/categories?&per_page=50&consumer_key=" + process.env.REACT_APP_CONSUMER_KEY + "&consumer_secret=" + process.env.REACT_APP_CONSUMER_SECRET,
            wooPro = appUrl + "/wc/v3/products?&per_page=20&consumer_key=" + process.env.REACT_APP_CONSUMER_KEY + "&consumer_secret=" + process.env.REACT_APP_CONSUMER_SECRET,
            wooSingPro = appUrl + "/wc/v3/products/" + this.state.wooSingPro + "?&consumer_key=" + process.env.REACT_APP_CONSUMER_KEY + "&consumer_secret=" + process.env.REACT_APP_CONSUMER_SECRET;

        const topBarRequest = axios.get(topBar),
            navBarRequest = axios.get(navBar),
            rightBarRequest = axios.get(rightBar),
            wooCatRequest = axios.get(wooCat),
            wooProRequest = axios.get(wooPro),
            wooSingProRequest = axios.get(wooSingPro),
            footerMenu1Request = axios.get(footerMenu1),
            footerMenu2Request = axios.get(footerMenu2),
            footerMenu3Request = axios.get(footerMenu3),
            bottomfooterRequest = axios.get(bottomfooter);

        this.setState({ success: true }, () => {

            axios.all([
                topBarRequest, navBarRequest,
                rightBarRequest, wooCatRequest,
                wooProRequest, wooSingProRequest,
                footerMenu1Request, footerMenu2Request,
                footerMenu3Request, bottomfooterRequest
            ]).then(
                axios.spread((...responses) => {
                    const topBarRequest = responses[0],
                        navBarRequest = responses[1],
                        rightBarRequest = responses[2],
                        wooCatRequest = responses[3],
                        wooProRequest = responses[4],
                        wooSingProRequest = responses[5],
                        footerMenu1Request = responses[6],
                        footerMenu2Request = responses[7],
                        footerMenu3Request = responses[8],
                        bottomfooterRequest = responses[9];

                    if ((topBarRequest.status | navBarRequest.status | rightBarRequest.status |
                        wooCatRequest.status | wooProRequest.status | wooSingProRequest.status |
                        footerMenu1Request.status | footerMenu2Request.status | footerMenu3Request.status |
                        bottomfooterRequest.status) === 200) {

                        this.setState({
                            success: false,
                            topMenu: topBarRequest.data,
                            navMenu: [navBarRequest.data, rightBarRequest.data],
                            catMenu: wooCatRequest.data,
                            products: wooProRequest.data,
                            singleProduct: wooSingProRequest.data,
                            catIcon: catIcons,
                            footerMenu: [footerMenu1Request.data, footerMenu2Request.data, footerMenu3Request.data],
                            bottomfooter: bottomfooterRequest.data
                        });

                    } else {
                        this.setState({ success: false, error: responses.message });
                    }
                })
            ).catch(err => {
                if (err.data === undefined) {
                    this.setState({ success: false, error: err.message });
                } else {
                    this.setState({ success: false, error: err.response.data.message });
                }
            });

        });
    }

    Sorting = (list) => {

        list.sort(function event(a, b) {
            return b.id < a.id ? 1 // if b should come earlier, push a to end
                : b.id > a.id ? -1 // if b should come later, push a to begin
                    : 0;                   // a and b are equal
        });

    };

    makeCat = (list, icon) => {

        if (null !== list && null !== icon) {

            var map = {},
                roots = [],
                merge = [],
                node,
                i, j;

            for (i = 0; i < list.length; i += 1) {
                map[list[i].id] = i;
                list[i].child = [];
            }

            for (i = 0; i < list.length; i += 1) {
                node = list[i];
                if (node.parent !== "0" && list[map[node.parent]] !== undefined) {
                    // if you have dangling branches check that map[node.parent] exists
                    list[map[node.parent]].child.push(node);
                } else {
                    roots.push(node);
                }
            }

            for (i = 0; i < roots.length; i += 1) {
                for (j = 0; j < icon.length; j += 1) {
                    if (roots[i].id === icon[j].id) {
                        merge.push({ ...roots[i], ...icon[j] });
                    }
                }
            }

            this.Sorting(merge);
            return merge;
        }

    };

    makePro = (list, woocat) => {
        if (null !== list && null !== woocat) {
            for (var k = 0; k < list.length; k++) {

                list[k].category = [];
                list[k].related_products = [];
                if (list[k].inCart === undefined) {
                    list[k].inCart = false;
                }
                if (list[0].date_created > list[k].date_created) {
                    list[k].date_tag = "";
                } else {
                    list[k].date_tag = "New";
                }

                for (var j = 0; j < list[k].categories.length; j++) {
                    for (var l = 0; l < woocat.length; l++) {
                        if (list[k].categories[j].id === woocat[l].id) {
                            list[k].category.push(woocat[l]);
                        }
                    }
                }

                for (var i = 0; i < list[k].related_ids.length; i++) {
                    for (var m = 0; m < list.length; m++) {
                        if (list[k].related_ids[i] === list[m].id) {
                            list[k].related_products.push(list[m]);
                        }
                    }
                }

            }
            return list;
        }
    };

    getItem = id => {
        const { products } = this.state;
        for (var i = 0; i < products.length; i += 1) {
            if (products[i].id === id) {
                return products[i];
            }
        }
    }

    handleDetail = id => {
        let product = this.getItem(id);
        let wooDetail = this.makePro(product);
        this.setState(() => {
            return { singleProduct: wooDetail }
        });
    };

    QuickView = id => {
        let wooItem = this.getItem(id);
        this.setState(() => {
            return { quickView: wooItem, toggleQuick: true }
        });
    };

    addToCart = id => {
        let productItem = this.getItem(id);
        let wooProduct = this.state.products;
        const index = wooProduct.indexOf(productItem);
        let wooItem = wooProduct[index];
        wooItem.inCart = true;
        this.setState(() => {
            return { cart: [...this.state.cart, wooItem] }
        }, () => {
            this.addTotals();
        });
    };

    closeModal = () => {
        this.setState(() => {
            return { toggleQuick: false }
        });
    }

    updateCart = (event) => {
        let cartValue = parseInt(event.target.value),
            cartId = parseFloat(event.target.id),
            wooCart = this.state.cart;
        const selectPro = wooCart.find(item => (item.id === cartId));
        const index = wooCart.indexOf(selectPro);
        let wooCartItem = wooCart[index];

        if (cartValue === 0) {
            this.removeItem(cartId);
        } else {
            wooCartItem.price = cartValue * parseInt(wooCartItem.sale_price);
            this.setState(() => {
                return { cart: [...wooCart] }
            }, () => {
                this.addTotals();
            });
        }

    }

    removeItem = (id) => {
        let productItem = this.getItem(id),
            wooProduct = this.state.products,
            wooCart = this.state.cart;
        wooCart = wooCart.filter(item => (item.id !== id));
        const index = wooProduct.indexOf(productItem);
        let wooItem = wooProduct[index];
        wooItem.price = wooItem.sale_price;
        wooItem.inCart = false;
        this.setState(() => {
            return { cart: [...wooCart] }
        }, () => {
            this.addTotals();
        });
    }

    addTotals = () => {
        let productCart = this.state.cart;
        let subTotal = 0;
        for (let i = 0; i < productCart.length; i++) {
            subTotal += parseInt(productCart[i].price);
        }
        this.setState(() => {
            return { cartSubTotal: subTotal }
        });
    }

    render() {

        const { success, topMenu, navMenu, catMenu, products, catIcon, footerMenu, bottomfooter, singleProduct, quickView, toggleQuick, cart, error, cartSubTotal } = this.state;
        const { createMarkup, makeCat, makePro, handleDetail, addToCart, QuickView, closeModal, updateCart, removeItem } = this;

        const wooCategory = makeCat(catMenu, catIcon);
        const wooProduct = makePro(products, catMenu);

        return (
            <React.Fragment>
                {error && <Error Html={createMarkup(error)} />}
                {success && <Spinner />}
                {topMenu && navMenu && wooCategory && wooProduct && singleProduct && footerMenu && bottomfooter ? (
                    <ContextApi.Provider value={{
                        topbar: topMenu, navBar: navMenu, wooCat: wooCategory, wooPro: wooProduct, footerMenus: footerMenu, bottomMenu: bottomfooter,
                        detailProduct: singleProduct, quickItem: [quickView, toggleQuick], cartItems: cart, handleDetail: handleDetail, addToCart: addToCart,
                        updateCart: updateCart, removeItem: removeItem, quickView: QuickView, closeQuickView: closeModal, cartupdate: cartSubTotal
                    }}>
                        {this.props.children}
                    </ContextApi.Provider>
                ) : null}
            </React.Fragment>
        )
    }
}

const WpReact = ContextApi.Consumer;
export { WpProvider, WpReact };