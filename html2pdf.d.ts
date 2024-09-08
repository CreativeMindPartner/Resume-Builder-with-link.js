declare module 'html2pdf.js' {
    export default function html2pdf(element: HTMLElement, options?: any): {
        from: (element: HTMLElement) => {
            save: (filename?: string) => Promise<void>;
            toPdf: () => any;
            toCanvas: () => any;
            toHtml: () => any;
            output: () => Promise<Blob>;
        };
    };
}
