import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/Header';
import { useState, useEffect } from 'react';
import ListaTareas from './componentes/ListaTareas';

function App() {
  // OBTENEMOS LAS TAREAS GUARDADAS DE localStorage
  const tareasGuardadas =
    localStorage.getItem('tareas') ?
      JSON.parse(localStorage.getItem('tareas')) : [];

  // ESTABLECEMOS EL ESTADO DE LAS TAREAS.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  // GUARDANDO EL ESTADO DENTRO DE localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  // ACCEDEMOS A localStorage Y COMPROBAMOS SI MOSTRAR COMPLETADAS ES NULL
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  // EL ESTADO DE mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className='contenedor'>
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
      <FormularioTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas} />
    </div>
  );
}

export default App;
