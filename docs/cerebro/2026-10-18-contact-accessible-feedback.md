# Portfolio — feedback accesible de contacto, 2026-10-18

## Objetivo y cambio
En `/contact`, el error asíncrono era texto visual sin semántica de aviso. El éxito sustituía el formulario y eliminaba el botón enfocado sin dirigir el foco al resultado.

Se añade `aria-busy` al formulario, `role="alert"` al error y un ref/efecto de foco sobre el encabezado de éxito con `tabIndex={-1}`. Solo sucede después del HTTP satisfactorio y `success === true` ya exigidos por PR30. No región live de éxito adicional que duplique el anuncio. No cambiar estilos, textos, API, proveedor ni assets.

## Reproducción y validación
Script existente `scripts/qa-contact-confirmation.mjs`: retener cada respuesta interceptada, activar Enviar con foco y Enter, verificar espera/disabled, liberar respuesta, comprobar error con borrador conservado o foco en encabezado confirmado. Reintento también por teclado. Doce escenarios por dos anchos (360/1440), además de la matriz existente de ocho anchos y dos preferencias de movimiento.

Todas las escrituras inesperadas se abortan antes de salir; solo POST local de contacto se responde con datos simulados. Nunca se contacta Resend. Cuatro pruebas de validación, TypeScript, lint sin errores/warnings, build de27páginas y sintaxis/diff pasan localmente. Auditoría accesible y QA estático independientes: GO. Navegador CI e integración/despliegue: evidencia final en tarea central `portfolio-contact-accessible-feedback-20261018`.

La auditoría especializada vincula error a WCAG4.1.3 y foco a 2.4.3; busy es mejora de semántica, no incumplimiento universal certificado. Atributos/foco de navegador no equivalen a oír el resultado en un lector de pantalla real ni a certificar WCAG completo. Recepción real en inbox tampoco comprobada.

## Coordinación
Checkout aislado `portfolio-isolated-20261018`; base `4ca98d63f1889cbb5459b4aef95b73d01f5ee1ce`, producción inicial READY `dpl_H9B2VGoGcwNEkkUx977FsY7unYRR`. CLAUDE/ESTADO y roles leídos; AGENTS no existe en esta revisión. UI/UX Pro Max no disponible: se aplican reglas del repositorio. Orquestación → auditoría accesible → frontend → QA independientes. PR ajenos1/11/28 no se modifican. Lease esperado de implementación en control plane.

Archivos previstos: componente ContactForm, script QA existente, ESTADO y este handoff. No cambio de configuración, dependencias, secretos, permisos, facturación o contenido editorial de casos.

## Contenido y siguiente objetivo
Conservar pieza equivalente reciente del2026-10-15 `exec-eed98b61-d375-4a57-8f32-d35abac42dcd.png`, objetivo atraer clientes al portfolio/contact; QA original registrado, sin afirmar bytes locales presentes tras limpieza. Caption: Diseño con intención, de la identidad a la campaña. Explora mi trabajo y conversemos sobre tu próximo proyecto: https://mauricio-portfolio-v2.vercel.app/contact

Estado producido/listo para compartir aquí, no programado/publicado. Resource Living autorizado, assets reales conservados, sin cifras; Laura/1MIGRATION no se muestra.

Próxima aceptación: prueba manual con lector de pantalla y recepción de correo solo tras autorización específica para enviar un mensaje. No realizarlas ni inventarlas desde esta entrega.
