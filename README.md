
# AppBin — Compartir previsualizaciones HTML (solo vista)

AppBin es una aplicación para compartir previsualizaciones de HTML mediante un enlace público, al estilo de CodePen, pero sin compartir el código fuente. Los usuarios suben o generan una vista previa y el sistema crea un enlace que muestra únicamente la previsualización (render) en un entorno sandbox seguro.

## Tabla de contenidos
- [Descripción](#descripción)
- [Características principales](#características-principales)
- [Instalación rápida (ejemplo)](#instalación-rápida-ejemplo)
- [Uso](#uso)
  - [Desde la interfaz web](#desde-la-interfaz-web)
- [Variables de entorno (ejemplo)](#variables-de-entorno-ejemplo)
- [Despliegue con Docker (opcional)](#despliegue-con-docker-opcional)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción
AppBin permite a usuarios crear y compartir únicamente la previsualización (render) de documentos HTML. El código fuente no se expone ni se comparte públicamente; solo el resultado renderizado es accesible mediante el enlace generado. Esto es útil para compartir demos visuales, prototipos o resultados sin revelar la implementación.

Casos de uso:
- Compartir prototipos visuales con clientes o compañeros.
- Enviar demos a equipos QA sin exponer el código.
- Embebidos en documentación o chats para mostrar cómo se ve algo.

## Características principales
- Crear previsualizaciones HTML y generar un enlace único para visualización.
- Control de eliminación (el autor puede eliminar enlaces).


## Instalación rápida (ejemplo)

1. Clonar repo
```bash
git clone https://github.com/Eliezer516/AppBin.git
cd AppBin
```

3. Instalar dependencias (ejemplo Node.js)
```bash
npm install
# o
yarn
```

4. Ejecutar en modo desarrollo
```bash
npm run dev
# o
yarn dev
```

5. Crear migraciones / inicializar base de datos
```bash
npm run db:push
```


## Uso

### Desde la interfaz web
- Abrir http://localhost:4321
- Crear una nueva previsualización pegando el HTML 
- Guardar y obtener el enlace público para compartir.

Ver la previsualización
- Abrir el enlace devuelto: https://appbin.example.com/bin/{id}
- El contenido se sirve dentro de un iframe sandbox para mitigar riesgos.
## Variables de entorno (ejemplo)
Incluye las variables mínimas que el servicio podría necesitar. Ajusta nombres según tu implementación.
```
ASTRO_DB_REMOTE_URL=libsql://andromeda-houston.turso.io
ASTRO_DB_APP_TOKEN=eyJhbGciOiJF...3ahJpTkKDw
```
## Contribuir
1. Haz fork del repositorio.
2. Crea una rama con tu feature o fix:
```bash
git checkout -b feat/nombre-de-mi-feature
```
3. Añade tests y documentación.
4. Envía un Pull Request describiendo los cambios.

## Licencia
Este proyecto puede licenciarse bajo MIT u otra licencia; actualiza según corresponda.

## Contacto
Mantenedor: @Eliezer516  
Repo: https://github.com/Eliezer516/AppBin
