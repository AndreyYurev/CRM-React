import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { serverPath } from "../../helpers/variables"

const EditPage = () => {
	document.querySelector('body').classList = 'with-nav'

	const { id } = useParams()
	const [userName, setUserName] = useState("")
	const [userPhone, setUserPhone] = useState("")
	const [userEmail, setUserEmail] = useState("")
	const [userProduct, setUserProduct] = useState("")
	const [status, setStatus] = useState("new")
	const [date, setDate] = useState("")
	const [request, setRequest] = useState("")
	const navigate = useNavigate()

	useEffect(() => {
		fetch(serverPath + "/" + id)
			.then((result) => {
				return result.json()
			})
			.then((data) => {
				setRequest(data)
				setUserName(data.userName)
				setUserPhone(data.userPhone)
				setUserEmail(data.userEmail)
				setUserProduct(data.userProduct)
				setStatus(data.status)
				setDate(data.date)
			})
	}, [])

	const saveChanges = (e) => {
		e.preventDefault()
		const data = { ...request, userProduct, status, userPhone, userEmail, userName }

		fetch(serverPath + "/" + id, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}).then((result) => {
			return result.json()
		}).then(() => {
			navigate("/table")
		})
	}

	const deleteRequest = () => {
		fetch(serverPath + "/" + id, {
			method: "DELETE",
		}).then(() => {
			navigate("/table")
		})
	}

	return (
		<div className="form-wrapper">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col">
						<div className="admin-heading-1">Работа с заявкой</div>
					</div>
					<div className="col text-right">
						<Link to="/table" className="btn btn-link">
							Вернуться назад
						</Link>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<form onSubmit={saveChanges}>
							<div className="card mb-4">
								<div className="card-header">Данные о заявке</div>
								{userName && (
									<div className="card-body">
										<div className="row mb-3">
											<div className="col-md-2">
												<strong>ID:</strong>
											</div>
											<div className="col">
												Заявка №<span id="number">{id}</span>
											</div>
											<input name="id" type="hidden" id={id} />
										</div>
										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Дата создания: </strong>
											</div>
											<div className="col" id="date">
												{date}
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Продукт:</strong>
											</div>
											<div className="col">
												<select
													onChange={(e) => { setUserProduct(e.target.value) }}
													id="product"
													name="product"
													className="custom-select"
													value={userProduct}
												>
													<option value="course-html">Курс по верстке</option>
													<option value="course-js">Курс по JavaScript</option>
													<option value="course-vue">Курс по VUE JS</option>
													<option value="course-php">Курс по PHP</option>
													<option value="course-wordpress">
														Курс по WordPress
													</option>
												</select>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Имя:</strong>
											</div>
											<div className="col">
												<input
													onChange={(e) => { setUserName(e.target.value) }}
													type="text"
													className="form-control"
													value={userName}
													name="name"
												/>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Email:</strong>
											</div>
											<div className="col">
												<input
													onChange={(e) => { setUserEmail(e.target.value) }}
													type="text"
													className="form-control"
													value={userEmail}
													id="email"
													name="email"
												/>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Телефон:</strong>
											</div>
											<div className="col">
												<input
													onChange={(e) => { setUserPhone(e.target.value) }}
													type="text"
													className="form-control"
													value={userPhone}
													id="phone"
													name="phone"
												/>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Статус заявки:</strong>
											</div>
											<div className="col">
												<select
													onChange={(e) => { setStatus(e.target.value) }}
													className="custom-select"
													id="status"
													name="status"
													value={status}
												>
													<option defaultValue="">Выберите...</option>
													<option value="new">Новая</option>
													<option value="inwork">В работе</option>
													<option value="complete">Завершена</option>
												</select>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="row justify-content-between">
								<div className="col text-right">
									<button className="btn btn-primary">Сохранить изменения</button>
									<button onClick={() => { deleteRequest() }} className="btn btn-danger ml-10">Удалить заявку</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditPage
