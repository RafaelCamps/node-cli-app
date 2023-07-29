# CLI APPLICATION TEST  

## Usaremos los siguientes paquetes

-   **Mongoose** - para conectar con la BBDD de Mongo DB
-   **Commander** - para crear los diferentes comandos q se podrán ejecutar desde la consola
-   **Inquirer** - Para solicitar al usuario q introduzca los datos en consola
  
## Información adicional

Este es un proyecto personal para probar como hacer un programa ejecutable desde consola con NodeJS
Necesitaremos instalar MongoDB en nuestro sistema, o crear una cuenta en Atlas.
Usaremos **Mongoose** para interactuar con la BD

## Inquirer

Mediante este paquete, solicitaremos al usuario que introduzca los parámetros para realizar el CRUD.

## Comandos

- add - Para añadir registros
- `find <name>` - Busca los registros q en el nombre o el apellido contengan el dato pasado
- `update <_id>` - Para actualizar el registro indicado
- `remove <id>` - Para eliminar el registro indicado
- `list` - Para listar todos los registros
- `help` - Nos muestra todos los comandos disponibles

## Convertir en una aplicación CLI

### Añadir comando en commands.js

Debemos añadir en la primera línea del archivo **commands.js** este código

```js
#!/bin/usr/env node
```

Esto hace q podamos llamar a los comandos sin tener q poner `node commands.js *comando*`

### Añadir config a package.json

Aquí debemos añadir dos propiedades:

```json
{
    
    "preferGlobal": true,
    "bin": "commands.js"
    
}
```

*commands.js* hace referencia al archivo q contiene los comandos, y q tiene el comando `#!/bin`

A partir de ahora, en lugar de llamar a `node commands.js ...` deberemos llamar al **name** que hayamos indicado en nuestro `package.json`


npm install -g ./

Para finalizar debemos indicar a node que existe nuestro paquete, para esto usaremos el siguiente comando:

```bash
npm link
```

Para desconectarlo de nuestro node_modules haríamos lo contrario:

```bash
npm unlink
```

Y esto sería todo.