# 🚀 Fabricio Iparraguirre — Portfolio

Portfolio personal desarrollado con **Next.js 14**, **TypeScript** y **Tailwind CSS**.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS custom animations
- **Lenguaje**: TypeScript
- **Fuentes**: Bebas Neue, DM Sans, JetBrains Mono (Google Fonts)

## Características

- ✅ Diseño dark mode con estética tech/futurista
- ✅ Efecto glitch en el nombre (Hero)
- ✅ Typing animation con múltiples roles
- ✅ Animaciones de entrada con IntersectionObserver
- ✅ Cursor glow personalizado
- ✅ Terminal card animada (float)
- ✅ Barras de skills animadas
- ✅ Marquee de tecnologías
- ✅ Timeline de experiencia interactivo
- ✅ Grid background + noise texture
- ✅ Navbar con blur al scroll
- ✅ 100% responsivo

## Cómo correr el proyecto

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Abrir en http://localhost:3000
```

## Estructura

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales + animaciones
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Personalización

- Edita los datos en cada componente (nombre, experiencias, skills, contacto)
- Cambia `#00FF94` (verde eléctrico) por cualquier color en `globals.css` y `tailwind.config.ts`
- Agrega tus proyectos creando un componente `Projects.tsx`
