# Fabricio Iparraguirre — Portfolio

Portfolio personal de **Fabricio Iparraguirre**, desarrollador frontend con enfoque full-stack en Lima, Perú. Es una sola página con las secciones de presentación, experiencia, skills, proyectos y contacto, desplegada en Cloudflare Workers.

## Stack

| Área | Tecnología |
| --- | --- |
| Framework | Next.js 15 (App Router) + React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 + CSS propio para las animaciones |
| Fuentes | Bebas Neue (títulos), DM Sans (texto), JetBrains Mono (código) |
| Despliegue | Cloudflare Workers con [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) y Wrangler |

No usa librerías de animación ni de iconos: todo está hecho con CSS, SVG en línea y APIs del navegador.

## Secciones

- **Hero:** nombre con efecto glitch, rol que se escribe solo, tarjeta con `profile.json` y estadísticas.
- **Sobre mí:** presentación y una terminal con el recorrido por empresa.
- **Experiencia:** selector de empresas con el detalle técnico de cada una.
- **Skills:** barras de nivel por categoría y carrusel de tecnologías.
- **Proyectos:** tarjetas de proyectos reales. La de InSalud Multidominio abre un selector de país.
- **Contacto:** correo, LinkedIn, WhatsApp y llamada, cada uno con su icono.

## Detalles de interfaz

- Tema oscuro con fondo de cuadrícula y textura de ruido.
- Animaciones de entrada con `IntersectionObserver`.
- Scroll animado: barra de progreso de lectura, parallax en los títulos y desvanecido del Hero (`components/ScrollEffects.tsx`).
- Brillo que sigue al cursor.
- Navbar con desenfoque al hacer scroll y menú móvil.
- Responsive de 320 px en adelante, sin scroll horizontal.
- Respeta `prefers-reduced-motion`: desactiva el scroll animado, el glitch y el brillo del cursor.
- Textos de apoyo con contraste reforzado sobre el fondo oscuro (≥ 4,5:1).

## Cómo correrlo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción de Next.js |
| `npm run start` | Sirve el build de producción |
| `npm run preview` | Compila para Cloudflare y lo prueba en local |
| `npm run deploy` | Compila y despliega en Cloudflare Workers |
| `npm run upload` | Compila y sube una nueva versión sin activarla |

## Despliegue

El proyecto se despliega como **Worker de Cloudflare** usando OpenNext.

- La configuración está en `wrangler.jsonc` y `open-next.config.ts`. El nombre del Worker (`fabriciodev26`) debe coincidir con el del proyecto en Cloudflare.
- En Workers Builds el comando de build es `npm run build` y el de despliegue es `npm run deploy`.
- Para desplegar a mano: `npx wrangler login` y luego `npm run deploy`.

> **Importante:** `@opennextjs/cloudflare` exige Next.js `>= 15.5.27`. No es compatible con `@cloudflare/next-on-pages`, que pide Next.js `<= 15.5.2`. Usa solo uno de los dos adaptadores.

Por ahora no tiene dominio propio, y los íconos usan rutas relativas, así que funciona igual en cualquier URL.

## Estructura

```
app/
├── layout.tsx          # Layout raíz y metadata
├── page.tsx            # Página principal (arma las secciones)
├── globals.css         # Estilos globales, animaciones y reglas responsive
├── favicon.ico         # Íconos del sitio (Next.js los detecta solo)
├── icon.png
└── apple-icon.png
components/
├── Navbar.tsx
├── Hero.tsx
├── About.tsx
├── Experience.tsx
├── Skills.tsx
├── Projects.tsx
├── Contact.tsx
├── Footer.tsx
├── CursorGlow.tsx      # Brillo que sigue al cursor
└── ScrollEffects.tsx   # Barra de progreso, parallax y desvanecido del Hero
open-next.config.ts     # Adaptador de Cloudflare
wrangler.jsonc          # Configuración del Worker
tailwind.config.ts      # Fuentes, colores y animaciones personalizadas
```

## Personalizar

- **Contenido:** los datos viven dentro de cada componente. Edita los arreglos `experiences` (Experience), `skillCategories` y `techLogos` (Skills), `projects` (Projects) y `contacts` (Contact).
- **Color principal:** el verde `#00FF94` aparece en los componentes y en `app/globals.css`. Para cambiarlo, reemplázalo con búsqueda global.
- **Parallax:** añade `data-parallax="0.05"` a cualquier elemento. Un valor mayor se nota más y uno negativo lo mueve al revés. Solo corre en pantallas de 768 px o más.
- **Fuentes y colores de Tailwind:** Tailwind v4 no lee `tailwind.config.ts` por sí solo. Se enlaza con `@config` en `app/globals.css`; si lo quitas, las clases `font-display`, `font-mono` y los colores personalizados dejan de funcionar.

## Notas técnicas

- `tsconfig.json` queda con `"jsx": "preserve"`, porque Next.js lo fuerza en cada build.
- `tsconfig.tsbuildinfo` es un archivo de caché que genera TypeScript.
- Al construir aparece el aviso `MODULE_TYPELESS_PACKAGE_JSON`. Es inofensivo; no agregues `"type": "module"` porque rompería `postcss.config.js`.
