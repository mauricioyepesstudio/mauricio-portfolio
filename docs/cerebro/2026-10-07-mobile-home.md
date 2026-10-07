# Portfolio — 2026-10-07

Estado: ACTIVO. Cambio preparado; NO integrado, NO desplegado, NO verificado en móvil.

## Objetivo y cambio
Evitar que el bloque inicial de la home impida leer el contenido en móviles estrechos. La auditoría anterior documenta 28 px de overflow a 360 px, pero la home actual usa components/rge/Hero.tsx, no components/Hero.tsx. No se reprodujo ese valor en esta sesión.

El parche permite reducir el ancho mínimo de la columna y del texto junto al logo, conserva el tamaño del logo y limita el badge al ancho disponible con menor tracking solo antes de sm. No cambia copy, rutas, originales ni public/projects.

## Evidencia
Base remota: df47dee4531236123adee3ca8151775aef0c9c94. Checkout aislado portfolio-20261007.
- npm ci: PASS.
- node --experimental-strip-types --test tests/contact-validation.test.mjs: 4 PASS.
- npx tsc --noEmit: PASS.
- npm run lint: PASS sin errores ni warnings ESLint (Next avisa de futura deprecación del comando).
- npm run build: PASS, 25 páginas.
- git diff --check: PASS.
- Producción Vercel READY dpl_7cBUgZFFadGRx4iTRajEUHr23dEe, SHA df47dee4531236123adee3ca8151775aef0c9c94.
- Navegador real: home abierta, innerWidth 1363 / document.scrollWidth 1353; Let's Talk abre /contact y muestra formulario y email. Es evidencia del estado previo; no del parche.

## Bloqueo y reproducción requerida
La API de navegador disponible no expone ajuste de viewport; F12 y Ctrl+Shift+M no activaron controles de dispositivos. No se usó CSS artificial para simular una validación. Faltan 360/390/430/768/1024/1280/1440/1920, reducción de movimiento y revisión visual sobre preview.
Abrir preview de este PR en un navegador con viewport configurable; para cada ancho confirmar document.documentElement.scrollWidth <= document.documentElement.clientWidth, logo/texto/badge/título completos y CTA accesibles. Repetir comprobación de medios y consola. No integrar antes de esa evidencia y checks remotos.

AGENTS.md no existe en checkout actual. Leídos CLAUDE.md, ESTADO.md y perfiles frontend-engineer, ui-ux-pro, qa-engineer. UI/UX Pro Max no está disponible; ui-ux-pro permite usar las reglas del repositorio cuando falta.

## Contenido
La pieza equivalente del 2026-10-06 sigue reciente: exec-a39d1551-653d-4da0-9b44-7301d1cc885d.png. Objetivo: promover trabajo creativo y contacto con URL Vercel comprobada. Estado producido / listo para compartir aquí; no publicado en redes. Registro central brands-content-batch-20261006. No se genera duplicado ni se usan Resource Living/Laura.

Próximo objetivo: completar QA responsive del PR y, solo si pasa, integrar y verificar SHA de producción. No se envió un correo de prueba ni se afirma recepción.
