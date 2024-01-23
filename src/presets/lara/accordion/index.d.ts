// En un archivo .d.ts o .tsx
interface AccordionTabStyles {
    root: {
        class: string;
    };
    header: {
        class: string[];
    };
    headerAction: {
        class: string[];
    };
    headerIcon: {
        class: string;
    };
    headerTitle: {
        class: string;
    };
    content: {
        class: string[];
    };
    transition: {
        enterFromClass: string;
        enterActiveClass: string;
        enterToClass: string;
        leaveFromClass: string;
        leaveActiveClass: string;
        leaveToClass: string;
    };
}

interface AccordionTabStylesProps {
    disabled?: boolean;
}

interface AccordionTabStylesContext {
    active: boolean;
}

interface AccordionTabStylesExport {
    accordiontab: AccordionTabStyles;
}

export default AccordionTabStylesExport;
