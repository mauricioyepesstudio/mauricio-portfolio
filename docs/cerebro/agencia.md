# Agencia del portafolio — departamentos, agentes y tareas recurrentes

Pedido del dueño (2026-10-20): que el portafolio avance cada día en investigación, mejora, desarrollo, pruebas y aprobación, con un departamento por función. Se **reutilizan los 15 agentes existentes** de `.claude/agents/`. `estado-keeper` llega con el PR #11 (cerebro completo); hasta que se integre, `orchestrator` cubre esa tarea. Las reglas de `CLAUDE.md` y `ESTADO.md` mandan sobre este documento.

Objetivo del proyecto: **conseguir clientes mostrando trabajo reciente y real, con un contacto claro.**

Flujo diario: **Investigación → Producto/diseño → Ingeniería → QA → Aprobación → (dueño: merge)**. Cada tarea = un PR pequeño; máximo un PR propio abierto.

| Departamento | Agentes | Responsabilidad |
|---|---|---|
| Coordinación | `orchestrator`, `estado-keeper` (PR #11) | Elige el PR del día; mantiene `ESTADO.md` |
| Investigación y carrera | `job-search-coordinator`, `rate-strategy`, `proposal-strategist` | Ofertas reales, tarifas y propuestas; solo lectura y borradores |
| Producto y diseño | `taste`, `ui-ux-pro` | Casos de estudio con dirección creativa del `CLAUDE.md` |
| Ingeniería | `frontend-engineer` | Next.js, assets, rendimiento |
| QA y pruebas | `qa-engineer`, `accessibility-auditor` | Responsive (8 anchos), accesibilidad, scripts de QA en CI |
| Aprobación y despliegue | `deploy-verifier`, `legal-rights` | Producción READY verificada; permisos de clientes y derechos de assets |
| Crecimiento y contenido | `marketing-strategist`, `seo-specialist`, `social-media`, `social-publisher` | SEO, piezas listas para redes (no publicadas sin OK) |

## Tareas recurrentes

**Coordinación**
1. Cada día: `git log`, PRs abiertos (#1 de agosto, #11, #28, #34) y la cola central; un solo slice. Aceptación: línea fechada en `ESTADO.md`.
2. Pedirle al dueño las capturas de EVOLUSA y BELONG cuando un caso esté listo para recibirlas.

**Investigación y carrera**
1. L-V: ofertas de Senior Designer / Art Director / Creative Director con enlace y fecha; nunca aplicar ni contactar sin el dueño.
2. Por oferta seleccionada: borrador de propuesta/carta con `proposal-strategist` y rango con `rate-strategy`.

**Producto y diseño**
1. Casos de estudio EVOLUSA y BELONG (Siguiente #1): estructura lista; esperan capturas del dueño; sin cifras.
2. Revisión mensual de casos con fechas "Ongoing/Recent": poner año real o marcar "por confirmar".

**Ingeniería**
1. Arreglar el overflow de 28 px de la home a 360 px (Siguiente #2) si sigue en producción.
2. Remitente configurable `CONTACT_FROM_EMAIL`, sin usar mauricioyepes.com (es de un tercero).

**QA y pruebas**
1. Cada PR: TypeScript, lint, pruebas de contacto, build y los QA de CI (responsive, contacto, sitemap).
2. `accessibility-auditor`: una pasada por semana a una ruta distinta.

**Aprobación y despliegue**
1. `legal-rights` antes de publicar cualquier asset de cliente: Resource Living sí; Laura/1MIGRATION **no** (requiere permiso).
2. `deploy-verifier` tras cada merge: producción READY y rutas clave 200.

**Crecimiento y contenido**
1. SEO básico (Siguiente #3): títulos/descripciones únicos y OG por caso.
2. Rutina semanal "avances automáticos" (`lib/studio-updates.ts`) con entregas reales de cada proyecto.

## Lo que solo el dueño puede desbloquear
- Capturas de EVOLUSA y BELONG; comprar un dominio propio; permiso para mostrar trabajo de Laura/1MIGRATION.
- Merges de PRs y publicación en redes.
