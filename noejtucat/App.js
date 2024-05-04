import { HeadTodo } from "./components/HeadTodo";

// import './index.css'
const DEFAULT_TODOS = [
  { todo: 'fooasdas', checked: true },
  { todo: 'fooasda', checked: true },
  { todo: 'foosds', checked: false },
  { todo: 'foosds', checked: false },
]
function App() {
  return (
    <>
      <HeadTodo />
      <MainBoard />
    </>
  );
}

function MainBoard() {
  return (
    <>
      <main>
        <section>
          <CreatedTodo />
        </section>
        <section>
          <div className="list-todo ">
            {DEFAULT_TODOS && DEFAULT_TODOS.length > 0 && (
              <div className="m-5 max-w-sm rounded shadow-2xl">
                {DEFAULT_TODOS.map(todo => (
                  <div key={todo.todo}>
                    <input type="checkbox" name="" value="false" />
                    <p>{todo.todo}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </section>
      </main>
    </>
  );
}

function CreatedTodo() {
  return (
    <>
      <div className="m-5  max-w-sm rounded   shadow-2xl">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Crear TODO 😉️</div>
          <p className="text-gray-700 text-base">
            Crea un todo para el futuro
          </p>
        </div>
        <div className="px-6 pt-1 pb-2">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="todo"
            ></label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  focus:bg-"
              id="todo"
              type="text"
              placeholder="Detalle de  TODO"
            />
          </div>
          <div className="f-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Agregar TODO
            </button>
          </div>


        </div>
      </div>
    </>
  );
}


function cardTodo() {
  return (

    <>


    </>
  )
}

const addTodo = (textTodo) => {

  if (textTodo) {
    DEFAULT_TODOS.push({checked: false , todo: textTodo});
  }

}
export default App;