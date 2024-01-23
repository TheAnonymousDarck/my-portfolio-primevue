import type { TecnologyType } from '@/types/TecnologyType';

export interface Tecnology {
    name: string;
    src: string;
    docLink: string;
    main: boolean;
    type: TecnologyType;
    contrastColor: string;
}