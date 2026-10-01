# ESTADO

**Estado: ACTIVO** — reactivado 2026-10-01.

## Objetivo
Conseguir clientes mostrando trabajo reciente y real, con un contacto claro.

## Siguiente (máx. 3, una por PR)
1. **Casos de estudio EVOLUSA y BELONG** — las páginas `/evolusa` y `/belong` existen pero son páginas de producto; convertirlas en casos de estudio (reto, solución, estado real, capturas actuales). Sin métricas inventadas; requiere textos/capturas de Mauricio.
2. **Reforzar el contacto** — confirmar que `RESEND_API_KEY` está en Vercel, cambiar el remitente `onboarding@resend.dev` por un dominio verificado, añadir CTA de contacto visible en home/casos y un plan B (mailto) si el envío falla. Corregir el overflow horizontal de la home a 360px.
3. **SEO básico** — títulos/descripciones únicos por caso, OG por proyecto, `lastModified` real en sitemap, y volver al dominio propio cuando exista DNS.

**Requiere permiso del cliente** (no publicar/destacar sin autorización): Resource Living (hoy es caso estrella, primero en `featured.ts`), Laura / 1MIGRATION (no está en el sitio).

## Auditoría 2026-10-01 (sin cambios de código)
- **Casos de estudio:** 4 destacados (Resource Living, Microbeau, Get Lost, Evenflo) + Seafood Delight, Loana, Stilo Group, Brand Identity Collection, Real Group Entertainment, Stamina/Hercules, Cinemark; 13 rutas de proyecto. Páginas propias: /evolusa, /belong, /real-group-entertainment, /about, /resume, /contact.
- **Desactualizado:** fechas "Ongoing"/"Recent" sin año real; Get Lost 2023, Seafood Delight 2022, Stamina 2021, Cinemark 2017 → poco "reciente"; EVOLUSA/BELONG no tienen caso de estudio completo y no están en el catálogo de proyectos; Resource Living es cliente y aparece sin permiso verificado; hay carpetas en `public/projects/` sin caso (biker, bloom, car-wash, fk-irons, leciel, onebike, pizza-tacum, tropical-breeze, a-better-copy, clave-estrategica) — no añadir sin revisión.
- **Contacto:** formulario → `/api/contact` (Resend) → rgentertainmentmanagement@gmail.com; además mailto y LinkedIn. En local responde 503 sin `RESEND_API_KEY` (el formulario muestra error correctamente). **No pude comprobar producción** (el sandbox no alcanza el dominio de Vercel): falta confirmar la variable en Vercel. Remitente actual `onboarding@resend.dev` (de pruebas; puede ir a spam o limitar destinatarios).
- **Móvil (360/390/768, build local):** sin 404 ni errores de consola; sin overflow en /contact, /evolusa, /belong, /portfolio, Resource Living y Microbeau. **Fallo:** la home desborda 28px a 360px. tsc y `npm run build` pasan.

## Hecho (desde git log)
- 2026-09-25 Canonical SEO apuntando al dominio Vercel que resuelve, hasta que exista DNS (PR #3 mergeado)
- 2026-09-17 Pasada de accesibilidad: aria-current, nombres de enlaces, contraste; página de resume y ProjectCard
- 2026-09-17 Corrección del caso Resource Living: capítulo duplicado de baja resolución, video de otra marca, numeración
- 2026-09-16 Agentes especialistas añadidos (seo, accessibility, proposal, deploy-verifier, job-search, social-publisher)
- 2026-09-15 Logos reales de clientes en Seafood Delight y Stamina; biblioteca de contenido social de Real Group Entertainment

## Bloqueos
- Dominio propio sin DNS configurado (se usa el dominio de Vercel como canonical).
- Autorización de clientes pendiente (Resource Living, Laura/1MIGRATION).
