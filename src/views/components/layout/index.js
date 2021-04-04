import React, { Component } from 'react';
import { WpReact } from '../../../context';
import Header from './header/index';
import Footer from './footer/index';
import QuickView from '../products/quick';

export default class LayOut extends Component {
	render() {
		return (
			<WpReact>
				{value => {
					const { topbar, navBar, wooCat, footerMenus, bottomMenu, quickItem, closeQuickView } = value;
					return (
						<React.Fragment>
							<Header
								topbar={topbar}
								navBar={navBar}
								wooCat={wooCat}
							/>
							{this.props.children}
							<Footer
								footerMenus={footerMenus}
								bottomMenu={bottomMenu}
							/>
							<QuickView getItem={quickItem} closeItem={() => { closeQuickView() }} />
						</React.Fragment>
					)
				}}
			</WpReact>
		);
	}
}