import { useState } from "react"

function Lista() {
	const [Nombre, setNombre] = useState("");
	const [Lista, setLista] = useState([]);

	function Agregar() {
		if (Nombre !== "") {
			setLista([...Lista, Nombre]);
			setNombre("")
		}
	}

	function Eliminar(IndexNombre) {
		const NuevaLista = Lista.filter((_, index) => index !== IndexNombre);
		setLista(NuevaLista);
	}
	return (
		<div>
			<h1>⋆˚࿔ Lista 𝜗𝜚˚⋆🧸ྀ</h1>
			<div className="input">
				<input
					type="text"
					value={Nombre}
					placeholder="Escribe..."
					onChange={(e) => setNombre(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							Agregar();
						}
					}}
				></input>
			</div>

			<ul>
				{Lista.length === 0 ? (
					<li>No hay tareas, añadir tareas</li>
				) : (
					Lista.map((Nombre, index) => (
						<li key={index}>
							<span>◦ {Nombre}</span>
							<p className="Borrar" onClick={() => Eliminar(index)}>
								Borrar
							</p>
						</li>
					))
				)}
			</ul>
			<p>Tienes <strong>{Lista.length}</strong>{Lista.length === 1 ? " pendiente" : " pendientes"}</p>
		</div>
	)
}

export default Lista 