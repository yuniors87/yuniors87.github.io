import Tarea from "@/components/tarea"
import TareasBase from "../data/tareas"

export default function Tareas() {
  const listaTareas = TareasBase.map((t) => (
    <Tarea key={t.valor} nombre={t.nombre} valor={t.valor} />
  ))
  return (
    <>
      <h2>Tareas</h2>
      <ul>{listaTareas}</ul>
    </>
  )
}
