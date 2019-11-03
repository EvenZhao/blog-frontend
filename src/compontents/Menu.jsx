import React from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from "react-router-dom";


export default class Right extends React.Component {
	state = {
		collapsed: false,
	};

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<div style={{ width: 256 }} className="menu-left">
				<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
					<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
				</Button>
				<Menu
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					theme="dark"
					inlineCollapsed={this.state.collapsed}
				>
					<Menu.Item key="1">
						<Link to="/">
							<Icon type="pie-chart" />
							<span>主页</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/DraftBox">
							<Icon type="pie-chart" />
							<span>草稿箱</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to="/publish">
							<Icon type="desktop" />
							<span>已发布</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="4">
						<Link to="/trashcan">
							<Icon type="inbox" />
							<span>垃圾箱</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="5">
						<Icon type="inbox" />
						<span>新建</span>
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}
