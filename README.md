# GouGo AI - Landing

Con la finalidad de que pueda dar mantenimiento a la landing se comparte a continuación guía técnica sobre el
desarrollo.

## Tecnología

Para el desarrollo se utilizó [Astro](https://docs.astro.build/en/getting-started/)
con [Tailwind](https://tailwindcss.com/docs/installation) y [React](https://react.dev/reference/react).

## Requisitos

Para poder utilizar es necesario contar en la maquina de desarrollo cuente con:

- [Node](https://nodejs.org/) v22.4+.
- Editor de código como [VSCode](https://code.visualstudio.com/), configurado
  para [Astro](https://docs.astro.build/en/editor-setup/).

## Comandos importantes

Todos los comandos que se pueden ejecutar en la terminal puede ser vistos en el archivo "package.json". Sin embargo se
listan los más importantes a continuación:

| Commando           | Acción                                                                       |
|:-------------------|:-----------------------------------------------------------------------------|
| `npm install`      | Instalar toads las dependencias                                              |
| `npm run dev`      | Inicia un servidor local para desarrollo con Hotreload en `localhost:4321`   |
| `npm run build`    | Compila la solución para publicar a producción en `./dist/`                  |
| `npm run preview`  | Corre la solución en local para ver como correría en producción.             |
| `npm run eslint`   | Valida el código para ver que no exista errores de javascript.               |
| `npm run prettier` | Formatea el código para que tenga consistencia y siguiendo buenas prácticas. |

## Notas

- Este desarrollo está pensado para correr en la raíz del dominio (https://somedomain.com), es decir, que no correrá
  bien en una subcarpeta (https://somedomain.com/subfolder).
- Si se cambia el URL del API el mismo debe ser modificado en el archivo "./src/components/ContactForm.jsx". Y en el
  mismo buscar la variable apiEndpoint y actualizar.
