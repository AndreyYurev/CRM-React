import './bootstrap.min.css'
import './main.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import CreateBidPage from "../CreateBidPage/CreateBidPage"
import ProjectNav from '../ProjectNav/ProjectNav'
import TablePage from '../TablePage/TablePage'
import EditPage from '../EditPage/EditPage'

const App = () => {
	return (
		<Router>
			<main className="main">
				<ProjectNav />
				<Routes>
					<Route path="/" element={<CreateBidPage />} />
					<Route path="/table" element={<TablePage />} />
					<Route path="/edit/:id" element={<EditPage />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;