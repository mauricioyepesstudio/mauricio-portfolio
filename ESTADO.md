# ESTADO

**Estado: ACTIVO** — reactivado 2026-10-01.

Agencia por departamentos (agentes y tareas recurrentes): `docs/cerebro/agencia.md`.

## Seguimiento 2026-10-22 — comprobante de entrega del contacto

- El formulario solo confirma “Message sent” cuando Resend devuelve un identificador de recepción (`data.id`); una respuesta sin error y sin comprobante ahora devuelve 502 y conserva el borrador para reintentar.
- Cambio limitado a `app/api/contact/route.ts`: sin cambios de UI, assets, esquema, permisos, secretos ni destinatario.
- Validación local aprobada: TypeScript, lint, 5 pruebas de contacto y build. No se envió correo real en esta entrega; el comprobante del proveedor evita afirmar éxito sin evidencia.
- Creativo equivalente reciente conservado; no se produjo ni publicó contenido duplicado.

## 2026-10-20 — Decisión del consejo de fundadores: seguir

- Veredicto y razones: `control-plane/consejo/CONSEJO.md` en AI-Projects-Control-Plane (fuente: `consejo.json`).
- Objetivos: Postulaciones enviadas por semana (meta 30 días: 5; 90 días: 5); Entrevistas conseguidas (meta 30 días: 2; 90 días: 6).
- Agentes del consejo instalados en `.claude/agents/`: seo-contenido-es, carrera-postulaciones, analista-metricas, consejo-director. Reglas: no envían, publican, cobran ni gastan sin aprobación de Mauricio; null = sin medir.
- Tareas:
  - cj-001 · 2026-10-22 · Mauricio: Enviar la postulación a Abitaro con la carta ya escrita
  - cj-002 · 2026-10-26 · carrera-postulaciones: Agregar la columna «enviada» a ofertas.csv y dejar 5 postulaciones listas por semana
  - cj-003 · 2026-11-02 · seo-contenido-es: Escribir los casos de estudio de EVOLUSA y BELONG para el portafolio (borrador con huecos para capturas)
  - cj-022 · 2026-10-26 · consejo-director: Revisión semanal del consejo: medir objetivos, corregir rumbo y avisar lo que se vence

## Seguimiento 2026-10-20 — Building en sitemap

- Base main remoto92cea8c9, con PR32 de navegación y PR33 de Owner Statements conservados. Se incorpora `/building`, página existente y canónica, al sitemap generado; fechas reales desde git, sin inventar lastmod cuando se desconoce.
- QA existente ampliado con XML válido, URL única y canónica, entrada Building exactamente una vez y destino200 con canonical coincidente. Sin cambios visuales, copy, assets, cuentas o configuración; PR34 de otro agente intacto.
- Evidencia: `docs/cerebro/2026-10-20-building-sitemap.md`. Pruebas, CI, PR y commit real de producción se registran al cierre en tarea central `portfolio-building-sitemap-20261020`. No se afirma indexación ni mejora de ranking.
- Creativo equivalente reciente del15 conservado, listo aquí/no publicado. Próximo objetivo: comprobar XML y canonical servidos; casos EVOLUSA/BELONG esperan capturas del dueño.

## Seguimiento 2026-10-19 — ciclo de navegación móvil

- Base remota y producción inicial READY `2f44827350d41e6f6e2b0d9f15f02ee50d86dce8`; los cambios de contacto PR30/31 se conservan.
- El menú móvil se cierra al cruzar a escritorio (768px), restaurando el overflow anterior. Escape devuelve foco al botón y se asocia el control con su panel; sin rediseño, bloqueo modal, cambios de assets ni contacto/API.
- QA existente ampliado: abrir, Escape/foco, 767→768, volver a móvil cerrado, reabrir y navegar a Contacto, junto con ocho anchos y dos preferencias de movimiento. Resultados exactos de build, CI y producción en tarea central `portfolio-mobile-nav-lifecycle-20261019`; no inferirlos por existencia del script.
- Evidencia: `docs/cerebro/2026-10-19-mobile-nav-lifecycle.md`. Creativo equivalente del15 conservado; producido/listo para compartir aquí, no publicado externamente. Aceptación manual con lector de pantalla y recepción real de correo pendientes; sin envíos de esta entrega.

## Seguimiento 2026-10-18 — feedback accesible de contacto

- Base remota `4ca98d6`; PR30 ya integrado y producción READY confirmada. Se conserva la confirmación estricta de envío.
- El formulario expone `aria-busy` durante la espera, el error asíncrono usa `role="alert"` y el encabezado de éxito recibe foco solo tras confirmación válida. Sin región live de éxito duplicada, ni cambios de estilos, textos, API o assets.
- Cuatro pruebas de validación, TypeScript y lint sin warnings/errores pasan. Build y CI del commit exacto se registran al cierre en la tarea central `portfolio-contact-accessible-feedback-20261018`; no inferir navegador por existencia del script.
- QA de contacto ampliado: 24 casos con respuestas retenidas, envío por teclado, espera, error, borrador y foco; conserva las 16 verificaciones responsive existentes. Todas las escrituras de prueba quedan interceptadas o bloqueadas. No prueba manual de lector de pantalla ni recepción real de correo.
- Handoff: `docs/cerebro/2026-10-18-contact-accessible-feedback.md`. Creativo equivalente reciente del15 conservado; nada publicado en redes.

## Seguimiento 2026-10-17 — confirmación de contacto

- Base remota fb3247065509e066895dff31018e19372fe3f542, producción READY verificada, preserva newsletters PR29 y responsive PR12 ya integrados. Los estados históricos de PR12 preparado más abajo quedan superados por esa entrega.
- ContactForm exige HTTP satisfactorio y JSON objeto con success boolean true antes de mostrar éxito/borrar borrador. Respuestas incompletas/falsas o JSON inválido siguen el fallback existente y conservan campos. Sin cambios de diseño, assets, servidor, proveedor o secretos.
- TypeScript, lint sin warnings/errores, 4 pruebas de validación y build27 páginas PASS. Nuevo QA local de producción simulado: 24 casos de confirmación/reintento a360/1440; toda escritura queda interceptada o bloqueada. Su resultado y la matriz responsive16 se comprueban en CI del commit exacto, no se presumen por existir el script.
- Handoff: docs/cerebro/2026-10-17-contact-confirmation.md. PR/CI/integración/despliegue/verificación al cierre en tarea central portfolio-contact-confirmation-20261017. No envío ni recepción real de email verificados. Creativo equivalente del15 conservado, no publicado en redes.

## Objetivo
Conseguir clientes mostrando trabajo reciente y real, con un contacto claro.

## Siguiente (máx. 3, una por PR)
Trabajo a destacar: EVOLUSA, BELONG y Resource Living (nombre y logo autorizados el 2026-10-09).

1. **Casos de estudio EVOLUSA y BELONG** — convertir `/evolusa` y `/belong` en casos de estudio. **Espera las capturas que entregará Mauricio.** Sin cifras ni métricas; lo no confirmado se marca "por confirmar".
   - EVOLUSA: plataforma en español para orientar a latinos en EE. UU. a encontrar su próximo paso y conectar con profesionales aprobados. Next.js, Supabase y Stripe. Rol: producto, diseño, desarrollo y automatización. En línea, red en crecimiento.
   - BELONG: app de comunidad con círculos de accountability, marketplace y misiones. Next.js y Supabase, con arquitectura reconstruida por engines. En desarrollo.
2. **Reforzar el contacto** — `RESEND_API_KEY` ya existe en Vercel (producción y preview) y el contacto funciona (confirmado por Mauricio). Pendiente: arreglar el overflow de 28px de la home a 360px; remitente configurable con `CONTACT_FROM_EMAIL` (por defecto `onboarding@resend.dev`); **mauricioyepes.com NO es de Mauricio (lo tiene un tercero)**: no usarlo para nada hasta que compre un dominio nuevo; CTA de contacto visible en home y casos; plan B mailto si falla el envío.
3. **SEO básico** — títulos/descripciones únicos por caso, OG por proyecto, `lastModified` real en sitemap, y fijar `NEXT_PUBLIC_SITE_URL` cuando exista un dominio propio.

## Clientes y permisos
- **Resource Living:** caso con nombre real desde 2026-10-09 (el usuario confirmó que tiene permiso: gestiona al cliente vía Real Group Entertainment). URL `/portfolio/resource-living`; la anónima redirige ahí. Galería nueva: campaña Broward–Palm Beach de oct. 2026 (7 anuncios por categoría, 9 videos verticales de 3 s, fotos orgánicas) en `public/projects/resource-living/campaigns/06-broward-palm-beach-oct-2026/`, copiada de `N:\C2 Multimedia\Social Media\New Resource Living Campaign Oct 2026`. Sigue sin cifras.
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
- Sin dominio propio: mauricioyepes.com es de un tercero. Se usa el dominio de Vercel como canonical hasta que Mauricio elija y compre uno.
- Laura/1MIGRATION no tiene permiso para aparecer. Resource Living sí tiene permiso confirmado desde 2026-10-09; conservar sus assets reales, sin inventar cifras.
- Remitente propio: requiere dominio nuevo verificado en Resend; luego definir `CONTACT_FROM_EMAIL`.
- Capturas de EVOLUSA y BELONG (las entrega Mauricio).

## Seguimiento 2026-10-15 — PR12

PR12 permanece preparado/en borrador, no integrado ni desplegado. Se actualizó sobre main 77c0882 conservando todos los assets y cambios posteriores; no se abrió un segundo PR propio. Ver diagnóstico reproducible en docs/cerebro/2026-10-15-mobile-validation.md. Producción está READY en 77c0882; /contact responde 200, sin envío de correo ni confirmación de recepción. Falta QA real en ocho anchos y reduced-motion: el navegador Playwright no está instalado y su descarga devuelve un archivo inválido. No se afirma resuelto el overflow.

## Seguimiento 2026-10-16 — QA de navegador en CI

PR12 actualizado sobre main fe7f943 sin modificar originales. Se prepara prueba reproducible scripts/qa-home-responsive.mjs en CI existente: ocho anchos y dos preferencias de movimiento, home→Servicios y contacto/fallback; sin cuentas ni envíos. TypeScript, lint, 4 pruebas de contacto, build27 páginas y diff check pasan localmente. La existencia de la prueba no acredita su resultado: consultar CI del commit exacto y cerebro central. Producción READY fe7f943, /contact200, aún sin este parche. Se conserva el creativo equivalente del15, sin nueva generación ni publicación. Ver docs/cerebro/2026-10-16-responsive-ci.md.
