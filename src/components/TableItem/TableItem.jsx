import { Link } from "react-router-dom"
import { statusList, productList, statusBadge } from '../../helpers/variables'

const TableItem = ({ request }) => {

	const { id, userName, userPhone, userEmail, userProduct, date, status } = request

	const productName = (item) => {
		let product = productList.filter((el) => {
			if (el.value === item) {
				return true
			}
		})
		return product[0].title
	}

	const statusName = (item) => {
		let status = statusList.filter((el) => {
			if (el.value === item) {
				return true
			}
		})
		return status[0].title
	}

	const classNames = (item) => {
		let bg = " badge badge-pill "
		let badge = statusBadge.filter((el) => {
			if (el.value === item) {
				return true
			}
		})
		return badge[0].style + bg
	}

	return (
		<tr key={id}>
			<th scope="row">{id}</th>
			<td>{date}</td>
			<td>{productName(userProduct)}</td>
			<td>{userName}</td>
			<td>{userEmail}</td>
			<td>{userPhone}</td>
			<td>
				<div className={classNames(status)}>{statusName(status)}</div>
			</td>
			<td>
				<Link to={`/edit/${id}`} request={request}>Редактировать</Link>
			</td>
		</tr>
	)
}

export default TableItem
