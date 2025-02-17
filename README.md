# Correr el proyecto ⚙️

Para correr el proyecto, se debe asegurar que su equipo (PC) de manera local tenga instalado Node.js y Git para su posterior
clonación del proyecto, si es el caso no es clonado el repositorio, se descarga un archivo .rar que debe extraerlo

Una vez instalado los programas necesarios, clonado o descargado (y extraído) el proyecto, se debe instalar sus dependencias,
este proyecto se ha utiliado un gestor de paquete llamado pnpm pero puede utilizar el gestor de paquetes tradicional de Node.js
llamado npm, puede ejecutar los siguentes comandos dependiendo su gestor de paquetes de Node.js

```
$ npm install

# Con pnpm
$ pnpm install
```
Una vez instalado las dependencias, ya puede correr el proyecto con los siguientes comandos, dependiendo de su gestor de
paquetes de Node.js

```
$ npm run dev

# Con pnpm
$ pnpm run dev
```

Después de haberlo levantado el proyecto, debe ingresar en la siguiente URL: "localhost:5173"

# API usada

La API que fue usada para este proyecto es una API pública llamada JSONPlaceholder

# Mejoras adicionales

## Manejo de errores

Para el tema del manejo de errores y mostrarlos de manera más visual se ha utilizado una librería llamada react-toastify.

## Manejo del estado global del proyecto

En el tema del estado global del proyecto no se ha utilizado Redux tradicional, sino de su contraparte simplificada llamada
Redux Toolkit que permite de igual manera que el Redux tradicional, gestionar el estado de forma más clara y eficiente, minimizando el código repetitivo.
