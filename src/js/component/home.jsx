import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { FaRegTrashAlt } from "react-icons/fa";
import { fFaPlusrom } from "react-icons/fa";

//create your first component
const Home = () => {
	//hooks
	const [tareas, setTareas] = useState("");
	const [listaTareas, setListatareas] = useState([]);
	useEffect(() => {
		console.log(tareas);
	});

	const validatetareas = () => {
		if (tareas === "") {
			console.log("El campo tarea no debe estar vacio");
		} else {
			console.log("perfect!");
		}

		setTareas("");
	};

	let arreglo = [];

	return (
		<>
			<div className="text-center mt-5">
				<h2>To Do List</h2>
				<input
					type="text"
					placeholder="Nombre de tarea"
					onChange={(e) => setTareas(e.target.value)}
					value={tareas}
				/>
				<button
					className="btn btn-sm btn-success float-right mx-2"
					type="submit"
					onClick={() => {
						validatetareas();
						setListatareas([...listaTareas, tareas]);
					}}>
					Agregar
				</button>
				<div className="container ">
					<ul className="list-group list-group-flush ">
						{listaTareas.map((item, index) => {
							return (
								<li
									className="list-group-item  d-flex w-100 justify-content-between"
									key={index}>
									{item}
									<button
										className="btn btn-danger"
										type="button"
										onClick={() => {
											const listaNueva =
												listaTareas.filter(
													(key) => key !== item
												);
											setListatareas(listaNueva);
											console.log(listaNueva);
											console.log("hola");
										}}>
										Eliminar
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Home;
