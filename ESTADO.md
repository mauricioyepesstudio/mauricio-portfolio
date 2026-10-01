# ESTADO

**Estado: ACTIVO** — reactivado 2026-10-01.

## Objetivo
Conseguir clientes mostrando trabajo reciente y real, con un contacto claro.

## Siguiente (máx. 3, una por PR)
Trabajo a destacar: EVOLUSA, BELONG y Resource Living (anónimo).

1. **Casos de estudio EVOLUSA y BELONG** — convertir `/evolusa` y `/belong` en casos de estudio. **Espera las capturas que entregará Mauricio.** Sin cifras ni métricas; lo no confirmado se marca "por confirmar".
   - EVOLUSA: plataforma en español para orientar a latinos en EE. UU. a encontrar su próximo paso y conectar con profesionales aprobados. Next.js, Supabase y Stripe. Rol: producto, diseño, desarrollo y automatización. En línea, red en crecimiento.
   - BELONG: app de comunidad con círculos de accountability, marketplace y misiones. Next.js y Supabase, con arquitectura reconstruida por engines. En desarrollo.
2. **Reforzar el contacto** — `RESEND_API_KEY` ya existe en Vercel (producción y preview) y el contacto funciona (confirmado por Mauricio). Pendiente: arreglar el overflow de 28px de la home a 360px; cambiar el remitente de `onboarding@resend.dev` a `contacto@mauricioyepes.com` **cuando el dominio esté verificado en Resend (requiere al dueño: DNS)**; CTA de contacto visible en home y casos; plan B mailto si falla el envío.
3. **SEO básico** — títulos/descripciones únicos por caso, OG por proyecto, `lastModified` real en sitemap, y volver al dominio propio cuando exista DNS.

## Clientes y permisos
- **Resource Living:** se mantiene como caso, **ANÓNIMO** ("Revista de mejoras del hogar del sur de Florida"), sin logo, nombre ni cifras, hasta tener permiso escrito (**requiere permiso**). Hoy el sitio todavía muestra el nombre y los assets con marca: anonimizarlo es trabajo pendiente (va en una PR propia, antes de promocionar el sitio).
- **Laura / 1MIGRATION:** no se muestra (**requiere permiso**).

## Auditoría 2026-10-01 (sin cambios de código)
- **Casos de estudio:** 4 destacados (Resource Living, Microbeau, Get Lost, Evenflo) + Seafood Delight, Loana, Stilo Group, Brand Identity Collection, Real Group Entertainment, Stamina/Hercules, Cinemark; 13 rutas de proyecto. Páginas propias: /evolusa, /belong, /real-group-entertainment, /about, /resume, /contact.
- **Desactualizado:** fechas "Ongoing"/"Recent" sin año real; Get Lost 2023, Seafood Delight 2022, Stamina 2021, Cinemark 2017 → poco "reciente"; EVOLUSA/BELONG no tienen caso de estudio completo y no están en el catálogo de proyectos; Resource Living es cliente y aparece sin permiso verificado; hay carpetas en `public/projects/` sin caso (biker, bloom, car-wash, fk-irons, leciel, onebike, pizza-tacum, tropical-breeze, a-better-copy, clave-estrategica) — no añadir sin revisión.
- **Contacto:** formulario → `/api/contact` (Resend) → rgentertainmentmanagement@gmail.com; además mailto y LinkedIn. En local responde 503 sin `RESEND_API_KEY` (el formulario muestra error correctamente). No pude comprobar producción desde el sandbox; Mauricio confirmó después que la variable existe en Vercel y el contacto funciona. Remitente actual `onboarding@resend.dev` (de pruebas; puede ir a spam o limitar destinatarios).
- **Móvil (360/390/768, build local):** sin 404 ni errores de consola; sin overflow en /contact, /evolusa, /belong, /portfolio, Resource Living y Microbeau. **Fallo:** la home desborda 28px a 360px. tsc y `npm run build` pasan.

## Hecho (desde git log)
- 2026-09-25 Canonical SEO apuntando al dominio Vercel que resuelve, hasta que exista DNS (PR #3 mergeado)
- 2026-09-17 Pasada de accesibilidad: aria-current, nombres de enlaces, contraste; página de resume y ProjectCard
- 2026-09-17 Corrección del caso Resource Living: capítulo duplicado de baja resolución, video de otra marca, numeración
- 2026-09-16 Agentes especialistas añadidos (seo, accessibility, proposal, deploy-verifier, job-search, social-publisher)
- 2026-09-15 Logos reales de clientes en Seafood Delight y Stamina; biblioteca de contenido social de Real Group Entertainment

## Bloqueos
- Dominio propio sin DNS configurado (se usa el dominio de Vercel como canonical).
- Permiso escrito de Resource Living (mientras tanto, anónimo) y de Laura/1MIGRATION (no se muestra).
- DNS/verificación del dominio en Resend para `contacto@mauricioyepes.com` (requiere al dueño).
- Capturas de EVOLUSA y BELONG (las entrega Mauricio).
