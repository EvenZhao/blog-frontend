import React from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'titlt',
		render: text => <a>{text}</a>,
	},
	{
		title: 'Time',
		dataIndex: 'time',
		key: 'time',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: tags => (
			<span>
				{tags.map(tag => {
					let color = tag.length > 5 ? 'geekblue' : 'green';
					if (tag === 'loser') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: (text, record) => (
			<span>
				<a>Invite {record.name}</a>
				<Divider type="vertical" />
				<a>Delete</a>
			</span>
		),
	},
];

const data = [
	{
		key: '1',
		title: 'John Brown',
		time: '2019-02-23 12:23:21',
		tags: ['js', 'css'],
	},
	{
		key: '2',
		title: 'Jim Green',
		time: '2019-02-23 12:23:21',
		tags: ['js'],
	},
	{
		key: '3',
		title: 'Joe Black',
		time: '2019-02-23 12:23:21',
		tags: ['js', 'css'],
	},
];
export default class Publish extends React.Component {
	render() {
		return (
			<div>
				<Table columns={columns} dataSource={data} />
			</div>
		);
	};
}
