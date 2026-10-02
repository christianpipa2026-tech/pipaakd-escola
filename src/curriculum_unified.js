// Curriculum unificado — Pipa Akd Escola
// Español (ES) + Português (PT) + próximos idiomas

// ── ESPAÑOL ────────────────────────────────────────────────
import { CURRICULUM_A1 } from "./curriculum_A1.js";
import { CURRICULUM_A2 } from "./curriculum_A2.js";
import { CURRICULUM_B1 } from "./curriculum_B1.js";
import { CURRICULUM_B2 } from "./curriculum_B2.js";
import { CURRICULUM_C1 } from "./curriculum_C1.js";
import { CURRICULUM_C2 } from "./curriculum_C2.js";
import { CURRICULUM_MASTER as CURRICULUM_ES_MASTER } from "./curriculum_Master.js";
import { CURRICULUM_ES_EXTRA } from "./curriculum_ES_extra.js";

// ── PORTUGUÊS ──────────────────────────────────────────────
import { CURRICULUM_A1 as PT_A1 } from "./curriculum_PT_A1.js";
import { CURRICULUM_A2 as PT_A2 } from "./curriculum_PT_A2.js";
import { CURRICULUM_B1 as PT_B1 } from "./curriculum_PT_B1.js";
import { CURRICULUM_B2 as PT_B2 } from "./curriculum_PT_B2.js";
import { CURRICULUM_C1 as PT_C1 } from "./curriculum_PT_C1.js";
import { CURRICULUM_C2 as PT_C2 } from "./curriculum_PT_C2.js";
import { CURRICULUM_MASTER as PT_MASTER } from "./curriculum_PT_Master.js";
import { CURRICULUM_PT_EXTRA } from "./curriculum_PT_PT_extra.js";

// ── CURRICULUMS COMPLETOS ──────────────────────────────────
export const CURRICULUM_ES = {
  A1:     { units: CURRICULUM_A1.units },
  A2:     { units: CURRICULUM_A2.units },
  B1:     { units: CURRICULUM_B1.units },
  B2:     { units: CURRICULUM_B2.units },
  C1:     { units: CURRICULUM_C1.units },
  C2:     { units: CURRICULUM_C2.units },
  Master: { units: CURRICULUM_ES_MASTER.units },
  Extra:  { units: CURRICULUM_ES_EXTRA.units },
};

export const CURRICULUM_PT = {
  A1:     { units: PT_A1.units },
  A2:     { units: PT_A2.units },
  B1:     { units: PT_B1.units },
  B2:     { units: PT_B2.units },
  C1:     { units: PT_C1.units },
  C2:     { units: PT_C2.units },
  Master: { units: PT_MASTER.units },
  Extra:  { units: CURRICULUM_PT_EXTRA.units },
};

// ── FUNCIÓN PARA OBTENER CURRICULUM SEGÚN IDIOMA ──────────
export const getCurriculum = (langId) => {
  switch(langId) {
    case "es": return CURRICULUM_ES;
    case "pt": return CURRICULUM_PT;
    default:   return CURRICULUM_ES;
  }
};
