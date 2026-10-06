# ESTADO

**Estado: ACTIVO** — reactivado 2026-10-01.

## Objetivo
Conseguir clientes mostrando trabajo reciente y real, con un contacto claro.

## Siguiente (máx. 3, una por PR)
Trabajo a destacar: EVOLUSA, BELONG y Resource Living (anónimo).

1. **Casos de estudio EVOLUSA y BELONG**: convertir `/evolusa` y `/belong` en casos de estudio. **Espera las capturas que entregará Mauricio.** Sin cifras; lo no confirmado se marca "por confirmar".
2. **Comprobar el contacto en producción**: un envío real llega al correo de Mauricio (la validación en servidor ya está, PR #10).
3. **Dominio propio**: cuando Mauricio lo compre, fijar `NEXT_PUBLIC_SITE_URL` y `CONTACT_FROM_EMAIL` con un remitente verificado en Resend.

## Clientes y permisos
- **Resource Living:** se mantiene como caso, **ANÓNIMO** ("Revista de mejoras del hogar del sur de Florida"), sin logo, nombre ni cifras, hasta tener permiso escrito (**requiere permiso**). Anonimizado (2026-10-01): caso en `/portfolio/south-florida-home-magazine`, solo piezas sin logo/nombre/URL (Pool Leads y Broward–Palm Beach); fuera ad-sales, C2 Multimedia, "Your Business Here", stories y el video de piscinas porque llevan la marca; nombre retirado de about, resume, RGE y logo wall; la URL de los assets usa un alias (rewrite en `next.config.mjs`). Pendiente de revisar a mano: `public/resume.pdf` (el texto no lo menciona, pero no revisé su diseño).
- **Laura / 1MIGRATION:** no se muestra (**requiere permiso**).

## Auditoría 2026-10-01 (sin cambios de código)
- **Casos de estudio:** 4 destacados (Resource Living, Microbeau, Get Lost, Evenflo) + Seafood Delight, Loana, Stilo Group, Brand Identity Collection, Real Group Entertainment, Stamina/Hercules, Cinemark; 13 rutas de proyecto. Páginas propias: /evolusa, /belong, /real-group-entertainment, /about, /resume, /contact.
- **Desactualizado:** fechas "Ongoing"/"Recent" sin año real; Get Lost 2023, Seafood Delight 2022, Stamina 2021, Cinemark 2017 → poco "reciente"; EVOLUSA/BELONG no tienen caso de estudio completo y no están en el catálogo de proyectos; Resource Living es cliente y aparece sin permiso verificado; hay carpetas en `public/projects/` sin caso (biker, bloom, car-wash, fk-irons, leciel, onebike, pizza-tacum, tropical-breeze, a-better-copy, clave-estrategica) — no añadir sin revisión.
- **Contacto:** formulario → `/api/contact` (Resend) → rgentertainmentmanagement@gmail.com; además mailto y LinkedIn. En local responde 503 sin `RESEND_API_KEY` (el formulario muestra error correctamente). No pude comprobar producción desde el sandbox; Mauricio confirmó después que la variable existe en Vercel y el contacto funciona. Remitente actual `onboarding@resend.dev` (de pruebas; puede ir a spam o limitar destinatarios).
- **Móvil (360/390/768, build local):** sin 404 ni errores de consola; sin overflow en /contact, /evolusa, /belong, /portfolio, Resource Living y Microbeau. **Fallo:** la home desborda 28px a 360px. tsc y `npm run build` pasan.

## Hecho (desde git log)
- 2026-10-06 Contacto validado en servidor antes de enviar y mailto de respaldo (PR #10)
- 2026-10-06 Fusionados: Resource Living anónimo (PR #8) y sin dominio propio, URL y remitente por variables de entorno (PR #9)
- 2026-10-01 SEO básico: canonical y Open Graph por página, lastmod real en sitemap (PR #7)
- 2026-10-01 Overflow de la home a 360px corregido (PR #6)
- 2026-10-01 Proyecto reactivado y auditoría (PR #5); segundo cerebro inicial (PR #4)
- 2026-09-25 Canonical SEO apuntando al dominio Vercel que resuelve, hasta que exista DNS (PR #3 mergeado)
- 2026-09-17 Pasada de accesibilidad: aria-current, nombres de enlaces, contraste; página de resume y ProjectCard
- 2026-09-17 Corrección del caso Resource Living: capítulo duplicado de baja resolución, video de otra marca, numeración
- 2026-09-16 Agentes especialistas añadidos (seo, accessibility, proposal, deploy-verifier, job-search, social-publisher)
- 2026-09-15 Logos reales de clientes en Seafood Delight y Stamina; biblioteca de contenido social de Real Group Entertainment

## Bloqueos
- Sin dominio propio: mauricioyepes.com es de un tercero. Se usa el dominio de Vercel como canonical hasta que Mauricio elija y compre uno.
- Permiso escrito de Resource Living (mientras tanto, anónimo) y de Laura/1MIGRATION (no se muestra).
- Remitente propio: requiere dominio nuevo verificado en Resend; luego definir `CONTACT_FROM_EMAIL`.
- Capturas de EVOLUSA y BELONG (las entrega Mauricio).
