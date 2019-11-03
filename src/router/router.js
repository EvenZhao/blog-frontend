import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Row, Col } from 'antd';

import App from './App.jsx';
import Login from './Login.jsx';
import Menu from '../compontents/Menu.jsx';
import Crums from '../compontents/Crums.jsx';
import DraftBox from './DraftBox.jsx';
import Trashcan from './Trashcan.jsx';
import Publish from './Publish.jsx';

function route() {
	return (
		<BrowserRouter>
			{
				window.location.pathname === '/login'
					?
					<Switch>
						<Route exact path="/login" component={Login} />
					</Switch>
					:
					<Row>
						<Col span={6}>
							<Menu />
						</Col>
						<Col span={18}>
							<Crums />
							<Switch>
								<Route exact path="/" component={App} />
								<Route exact path="/publish" component={Publish} />
								<Route exact path="/trashcan" component={Trashcan} />
								<Route exact path="/draftbox" component={DraftBox} />
							</Switch>
						</Col>
					</Row>
			}
		</BrowserRouter>
	);
}

export default route;
