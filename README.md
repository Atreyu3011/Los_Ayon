# Terrenos Frente al Río — Landing page

Landing page responsive creada para el proyecto inmobiliario **Terrenos Frente al Río**, ubicado en El Fuerte, Sinaloa.

## Tecnologías

- Next.js App Router
- React
- TypeScript
- CSS personalizado
- Exportación estática compatible con Vercel

## Ejecutar en local

1. Abre esta carpeta en Visual Studio Code.
2. Abre una terminal dentro de la carpeta.
3. Ejecuta:

```bash
npm install
npm run dev
```

4. Abre `http://localhost:3000` en el navegador.

## Crear versión final

```bash
npm run build
```

El sitio está configurado con `output: 'export'`, por lo que la versión estática se genera en la carpeta `out`.

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel selecciona **Add New Project**.
3. Importa el repositorio.
4. Vercel reconocerá Next.js automáticamente.
5. Presiona **Deploy**.

## Información editable

- Contenido principal: `app/page.tsx`
- Colores y diseño: `app/globals.css`
- Logo provisional: `public/brand/mark.svg`
- Fotografías: `public/images`
- Metadatos SEO: `app/layout.tsx`

## Observaciones comerciales

- Las amenidades y los servicios aparecen claramente como **proyectados**.
- No se incluye una fecha de terminación.
- El precio de $500,000 MXN se presenta como referencia para un lote de 200 m².
- Las superficies, precios y disponibilidad se indican como sujetos a confirmación.
- La sección de seguridad jurídica utiliza únicamente el texto aprobado.
