import { useLoaderData } from "react-router-dom";

export default function TodoList() {
  const list = useLoaderData();

  return (
    <section>
      <h1>Дела</h1>
      <table className="table is-hoverable is-fullwidth">
        <tbody>
          {list.map((item) => (
            <tr key={item.key}>
              <td>
                {item.done && <del>{item.title}</del>}
                {!item.done && item.title}
              </td>
              <td>
                <button
                  className="button is-success"
                  title="Выполнено"
                  disabled={item.done}
                  onClick={() => {
                    props.setDone(item.key);
                  }}
                >
                  &#9745;
                </button>
              </td>
              <td>
                <button
                  className="button is-danger"
                  title="Удалить"
                  onClick={() => props.del(item.key)}
                >
                  &#9746;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
