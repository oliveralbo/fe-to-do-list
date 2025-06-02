# Frontend TodoList

Frontend para la aplicación TodoList desarrollado con React, TypeScript, Vite y Apollo Client.

## Aplicacion deplegada productiva:

- [Ticmas To-Do-List](https://fe-to-do-list-dun.vercel.app/)

## Repositorios Relacionados

- [Frontend](https://github.com/oliveralbo/fe-to-do-list) - Aplicación frontend de TodoList(este repositorio)
- [Backend](https://github.com/oliveralbo/be-to-do-list) - API backend de TodoList

## Prerequisitos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Backend corriendo en http://localhost:3000

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/oliverio/frontend-todolist.git
cd frontend-todolist
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en el directorio raíz con el siguiente contenido:

   ```
   VITE_BACKEND_URL=http://localhost:3000
   ```

4. Crea un archivo `.env.production` en el directorio raíz con el siguiente contenido:
   ```
   VITE_BACKEND_URL=https://be-to-do-list-production.up.railway.app
   ```

## Configuración de GraphQL

El proyecto utiliza Apollo Client para consumir la API GraphQL. Los tipos TypeScript se generan automáticamente basados en el schema del backend.

### Generar tipos de GraphQL

Para generar los tipos TypeScript basados en el schema de GraphQL:

1. Asegúrate de que el backend esté corriendo en http://localhost:3000
2. Ejecuta el siguiente comando:

```bash
npm run codegen
```

Este comando:

- Se conecta al backend
- Obtiene el schema de GraphQL
- Genera los tipos TypeScript en `src/gql/`
- Crea hooks tipados para usar en los componentes

### Estructura de GraphQL

El proyecto incluye las siguientes operaciones GraphQL:

#### Queries

- `GET_TASKS`: Obtiene todas las tareas
- `GET_TASK`: Obtiene una tarea específica por ID

#### Mutations

- `CREATE_TASK`: Crea una nueva tarea
- `UPDATE_TASK`: Actualiza una tarea existente
- `REMOVE_TASK`: Elimina una tarea

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la build de producción
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el código
- `npm run test`: Ejecuta los tests
- `npm run codegen`: Genera los tipos de GraphQL

## Estructura del proyecto

```
frontend-todolist/
├── src/
│   ├── components/     # Componentes React
│   ├── graphql/        # Queries y mutations de GraphQL
│   ├── gql/           # Tipos generados de GraphQL
│   ├── lib/           # Utilidades y configuración
│   └── ...
├── public/            # Archivos estáticos
└── ...
```

## Tecnologías principales

- React 19
- TypeScript
- Vite
- Apollo Client
- GraphQL
- TailwindCSS

## Desarrollo

1. Inicia el servidor de desarrollo:

- Verificar backend levantado previamente

```bash
npm run dev
```

2. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## Comentarios

- Se decide migrar los test de jest a vitest debido a conflictos entre versionados de @apollo, @vite y @jest

- Tanto el Frontend como el Backend están preparados para trabajo en equipo, con Husky configurado en el pre-commit para ejecutar el linter, formatear el código y correr los tests. Además, se definieron reglas y se sugieren extensiones en .vscode para facilitar el desarrollo.
