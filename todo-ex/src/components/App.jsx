import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Content />
			</div>
		)
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Header</h1>
			</div>
		)
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				<h2>Content</h2>
				<p>The contetn text.</p>
			</div>
		)
	}
}

export default App;