# FazSeller — Landing Page

Landing page de **FazSeller**: herramientas para sellers de e-commerce (generador de catálogos, etiquetas y SKU) y, próximamente, actualización de stock y precio.

> Estado: concepto v1. El logo es un placeholder y los planes/precios son de ejemplo (ver [Pendientes](#pendientes-antes-de-publicar)).

## Stack

- [Astro](https://astro.build) 7: sitio 100% estático, sin framework de UI en el cliente
- [pnpm](https://pnpm.io) 10 como gestor de paquetes
- TypeScript (estricto) y `astro check` en cada build
- Tipografías autoalojadas con Fontsource: **Sora** (títulos) e **Inter** (texto)
- `@astrojs/sitemap` para el sitemap
- CSS con variables y estilos acotados por componente, sin librerías de estilos

## Requisitos

| Herramienta | Versión |
|---|---|
| Node.js | `>= 22.23.4` |
| pnpm | `10.28.0` (definido en `packageManager`) |

Con `nvm`:

```bash
nvm install 22
nvm use 22
npm install -g pnpm@10
```

## Inicio rápido

```bash
pnpm install
pnpm dev
```

Abre <http://localhost:4321>.

## Comandos

| Comando | Acción |
|---|---|
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Revisa tipos (`astro check`) y genera el sitio en `dist/` |
| `pnpm preview` | Sirve el build de `dist/` para probarlo |
| `pnpm check` | Solo la revisión de tipos |

## Estructura

```text
├── public/                 # Archivos estáticos (favicon, og, robots.txt)
├── src/
│   ├── components/         # Una sección por componente
│   ├── data/content.ts     # Herramientas, planes, FAQ y otros textos
│   ├── layouts/Layout.astro# HTML base, SEO, Open Graph y animación de entrada
│   ├── pages/index.astro   # Orden de las secciones
│   └── styles/global.css   # Tokens de marca y utilidades
├── astro.config.mjs
└── package.json
```

### Secciones

El orden se define en `src/pages/index.astro`:

| Componente | Contenido |
|---|---|
| `Header` | Menú fijo y botón principal |
| `Hero` | Propuesta de valor y visual con las herramientas |
| `Marquee` | Canales donde se usan los archivos (opcional) |
| `Benefits` | Franja de beneficios (opcional) |
| `Tools` | Qué hay disponible hoy |
| `HowItWorks` | Cómo se usa, en 3 pasos |
| `Audience` | Para quien empieza y para quien ya vende (opcional) |
| `ComingSoon` | Actualización de stock y precio, con lista de espera |
| `Pricing` | Planes según cantidad de productos |
| `FAQ` | Preguntas frecuentes (con datos estructurados) |
| `FinalCTA` | Llamada final a la acción |
| `Footer` | Enlaces y derechos |

Las secciones marcadas como opcionales se activan o se quitan comentándolas en `index.astro`.

## Personalización

### Marca (colores y tipografía)

Los tokens están en `src/styles/global.css`:

| Token | Valor | Uso |
|---|---|---|
| `--blue` | `#1313F2` | Color de marca |
| `--navy` | `#04106F` | Degradados y fondos |
| `--deep-blue` | `#00051B` | Títulos y fondos oscuros |
| `--snow` | `#F6F6F6` | Fondos claros |
| `--accent` | `#FF8A3D` | Acento: botones principales y etiquetas "Pronto" |

Para cambiar el acento, edita `--accent`, `--accent-hover`, `--accent-ink` y `--accent-soft`. El texto sobre el acento usa `--deep-blue` por contraste.

### Contenido

En `src/data/content.ts`:

- `tools`: herramientas y su estado (`Disponible` / `En camino`)
- `plans`: planes, límite de productos y precios mensual/anual
- `allPlansInclude`: lo que incluyen todos los planes
- `faqs`: preguntas frecuentes

Los canales de la cinta están en `src/components/Marquee.astro`.

### Planes

Todas las funciones están incluidas en todos los planes. Solo cambia la cantidad de productos. Los valores actuales (Free 50, Starter 500, Pro 5,000, Business 50,000) y los precios **son ejemplos**: ajústalos en `plans`.

## Pendientes antes de publicar

- [ ] Reemplazar `src/components/Logo.astro` y `public/favicon.svg` por el logo final (SVG).
- [ ] Convertir `public/og.svg` a PNG de 1200×630 (las redes sociales no leen SVG) y actualizar la ruta en `Layout.astro`.
- [ ] Conectar el formulario de lista de espera en `src/components/ComingSoon.astro` (hay un `TODO`). Opciones: Formspree, Resend, Mailchimp o un endpoint propio.
- [ ] Definir los planes y precios reales en `src/data/content.ts`.
- [ ] Cambiar `site` en `astro.config.mjs` por el dominio real (afecta sitemap y URLs canónicas).
- [ ] Actualizar el `Sitemap:` de `public/robots.txt` con el dominio real.
- [ ] Revisar que las menciones a canales (Marquee) no insinúen alianzas o integraciones que no existan.

## Despliegue

Es un sitio estático: el resultado de `pnpm build` queda en `dist/`.

| Plataforma | Configuración |
|---|---|
| Netlify / Vercel / Cloudflare Pages | Build: `pnpm build` · Salida: `dist` |
| Hosting tradicional (cPanel, FTP) | Sube el contenido de `dist/` a la raíz pública |

## Solución de problemas

- **`ERR_PNPM_BAD_PM_VERSION`**: tu pnpm no es el 10. Instala con `npm install -g pnpm@10`.
- **`ERR_PNPM_UNSUPPORTED_ENGINE`**: tu Node es anterior a 22.23.4. Usa `nvm install 22 && nvm use 22`.
- **`astro check` falla por TypeScript 7**: el proyecto fija TypeScript 6 (`typescript@^6`), porque `astro check` aún no soporta la versión 7.

## Licencia

Todos los derechos reservados © FazSeller.