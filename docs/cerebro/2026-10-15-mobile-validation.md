# Portfolio — 2026-10-15

Estado ACTIVO. PR existente: https://github.com/mauricioyepesstudio/mauricio-portfolio/pull/12

## Alcance

Actualización del PR12 antiguo sobre main 77c0882fcb0bc55927cf11fb6940f87c4b2f24da. Solo se conserva su parche de cinco clases en components/rge/Hero.tsx y documentación. Los assets originales y todos los cambios nuevos de main se preservan. No reemplazar main con el árbol antiguo del PR. No hay otro PR propio nuevo.

El parche permite encoger texto/columna, conserva el tamaño del logo y restringe el badge al ancho disponible. Revisión estática del especialista QA: patrón CSS razonable, pero NO demuestra que el overflow histórico de 28 px esté corregido; revisar también la palabra advertising? y los CTA.

## Diagnóstico reproducible

1. npm ci --ignore-scripts.
2. Usar Playwright disponible en el runtime para chromium.launch(): falla porque no existe el ejecutable chromium_headless_shell-1234.
3. playwright install chromium: cinco intentos fallan con End of central directory record signature not found; la descarga no es un ZIP válido. No se elude la restricción de descarga.
4. npm run dev -- -p 3015 también falla en este entorno con uv_interface_addresses (Unknown system error 1). No se presenta esto como fallo del producto.

Para aceptación, abrir el preview actualizado en navegador disponible; medir clientWidth/scrollWidth y título/logo/badge/CTA a 360/390/430/768/1024/1280/1440/1920, luego reduced-motion. Comprobar consola y medios sin404. No fusionar antes de evidencia y checks requeridos.

## Producción y límites

Validación local sobre el árbol actualizado: npx tsc --noEmit PASS; npm run lint PASS sin errores/warnings ESLint (aviso de deprecación de next lint); node --test tests/contact-validation.test.mjs 4/4 PASS; npm run build PASS (27 páginas); git diff --check PASS. Diff respecto a main en public/projects: vacío. Esto no sustituye pruebas de navegador ni entrega real de correo.

Vercel mauricio-portfolio-v2: READY, deployment dpl_7vaLiMx48tA7x9xkEbuU6fFQrgGG, commit 77c0882fcb0bc55927cf11fb6940f87c4b2f24da. GET https://mauricio-portfolio-v2.vercel.app/contact devuelve200. No se envió correo, no se verificó recepción ni se probó el flujo en navegador esta sesión. El PR12 sigue preparado, NO integrado/desplegado/verificado.

AGENTS.md no existe en este checkout. CLAUDE.md, ESTADO.md, DEVELOPMENT.md y roles QA/UI/deploy leídos. UI/UX Pro Max global no disponible: se aplican reglas editoriales/responsive del repositorio. No se modifican secretos, permisos, esquema, facturación ni presupuesto.

## Contenido

Nueva pieza editorial producida con imagegen: exec-eed98b61-d375-4a57-8f32-d35abac42dcd.png; negro #0a0a0a, marfil #f4f2ee, dorado #b08d57; mensaje de dirección creativa, branding y campañas, sin marcas de clientes, métricas ni pantallas ficticias. QA visual: nombre, tildes y CTA correctos; sin texto cortado ni cifras. Estado producido/listo para compartir aquí, no publicado en redes, no incorporado al sitio.

Caption/CTA: Diseño con intención, de la identidad a la campaña. Explora mi trabajo y conversemos sobre tu próximo proyecto: https://mauricio-portfolio-v2.vercel.app/contact

Próximo objetivo: desbloquear QA del PR12 en navegador y solo entonces integrar/verificar el commit real. Resource Living tiene permiso de nombre/logo desde Oct9; Laura/1MIGRATION no se muestra.
