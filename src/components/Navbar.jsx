import React from "react";
import { Button, Typography, Avatar, Menu } from "antd";
import { Link } from "react-router-dom";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import { MenuItem } from "rc-menu";

const NavBar = () => {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar
					src="https://img.icons8.com/external-tulpahn-flat-tulpahn/452/external-rich-cat-emoji-tulpahn-flat-tulpahn.png"
					size="large"
				/>
				<Typography.Title level={2} className="logo">
					<Link to="/">Crypto Billionaire </Link>
				</Typography.Title>
			</div>
			<Menu theme="dark">
				<Menu.Item icon={<HomeOutlined />}>
					<Link to="/">Home </Link>
				</Menu.Item>
				<Menu.Item icon={<FundOutlined />}>
					<Link to="/cryptocurrencies">Cryptocurrencies </Link>
				</Menu.Item>
				<Menu.Item icon={<MoneyCollectOutlined />}>
					<Link to="/exchanges">Exchanges </Link>
				</Menu.Item>
				<Menu.Item icon={<BulbOutlined />}>
					<Link to="/news">News </Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default NavBar;
