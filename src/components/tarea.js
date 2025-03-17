export default function Tarea(props) {
  return (
    <a key={props.nombre}>
      <p>{props.nombre}</p>
    </a>
  )
}
