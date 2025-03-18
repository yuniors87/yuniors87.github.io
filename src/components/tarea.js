export default function Tarea(props) {
  return (
    <li>
      <a>
        {props.nombre} - {props.valor}
      </a>
    </li>
  )
}
