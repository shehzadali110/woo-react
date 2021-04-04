import React from 'react';
import Select from 'react-select';

const Search = (props) => {

    const { catDate } = props;

    return (
        <React.Fragment>
            <form className="header_search_form" role="search" method="get" >
                <div className="header_search_input_wrapper">
                    <input name="s" id="search_products" className="header_search_input" type="search" placeholder="Product Search" />
                    <input type="hidden" name="post_type" defaultValue="product" />
                </div>

                <div className="header_search_select_wrapper visible">
                    {catDate.length ? (
                        <Select
                            placeholder="Select Category"
                            isSearchable={false}
                            options={catDate.map((items, key) => {
                                    return {
                                        value: key,
                                        label: items.name
                                    };
                                }
                            )}
                        />
                    ) : null}
                </div>

                <div className="header_search_button_wrapper">
                    <button className="header_search_button" type="submit"></button>
                </div>

            </form>
        </React.Fragment>
    )
}

export default Search;