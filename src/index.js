import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './components/App'
import reducers from './reducers'
import './index.css'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Route path="/" component={App} />
			</div>
		</BrowserRouter>
	</Provider>, 
  document.getElementById('app'))