import type { SkillType } from "@/types/SkillType";
import type { Tecnology } from "./Tecnology";

export interface Skill {
    tecnology?: Tecnology,
    name?: string;
    icon?: string;
    type: SkillType;
}