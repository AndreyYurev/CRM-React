import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Filter from "../Filter/Filter";
import Request from "../TableItem/TableItem";
import { serverPath } from '../../helpers/variables';

// Убран AppContext — он не используется
// export const AppContext = createContext(null);

const TablePage = () => {
	// Убрана мутация body — лучше управлять через CSS или обёртку в App
	useEffect(() => {
		document.body.className = 'with-nav body--dashboard';
		return () => {
			document.body.className = ''; // сброс при размонтировании
		};
	}, []);

	const [table, setTable] = useState([]); // инициализируем как пустой массив
	const [selectedStatus, setSelectedStatus] = useState("all");
	const [selectedProduct, setSelectedProduct] = useState("all");

	const applyFilters = () => {
		const params = [];
		if (selectedStatus !== "all") {
			params.push(`status=${encodeURIComponent(selectedStatus)}`);
		}
		if (selectedProduct !== "all") {
			params.push(`userProduct=${encodeURIComponent(selectedProduct)}`);
		}
		return params.join('&');
	};

	useEffect(() => {
		const params = applyFilters();
		const url = params ? `${serverPath}?${params}` : serverPath;

		fetch(url)
			.then(res => {
				if (!res.ok) {
					throw new Error(`HTTP ${res.status} - ${res.statusText}`);
				}
				return res.json();
			})
			.then(data => {
				if (Array.isArray(data)) {
					setTable(data);
				} else {
					console.error('Expected array from server, got:', data);
					setTable([]);
				}
			})
			.catch(err => {
				console.error('Failed to fetch data:', err);
				setTable([]); // безопасное состояние
			});
	}, [selectedProduct, selectedStatus]);

	return (
		<>
			<Sidebar
				selectedStatus={selectedStatus}
				setSelectedStatus={setSelectedStatus}
			/>
			<div className="main-wrapper">
				<div className="container-fluid">
					<div className="admin-heading-1">Все заявки</div>
					<Filter
						selectedStatus={selectedStatus}
						setSelectedStatus={setSelectedStatus}
						selectedProduct={selectedProduct}
						setSelectedProduct={setSelectedProduct}
					/>
					<table className="table fs-14">
						<thead>
							<tr>
								<th>ID</th>
								<th>дата</th>
								<th>продукт</th>
								<th>имя</th>
								<th>email</th>
								<th>телефон</th>
								<th>статус</th>
								<th></th>
							</tr>
						</thead>
						<tbody id="tbody">
							{table.length > 0 ? (
								table.map(request => (
									<Request request={request} key={request.id} />
								))
							) : (
								<tr>
									<td colSpan="8" className="text-center py-3">
										Заявок не найдено
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default TablePage;