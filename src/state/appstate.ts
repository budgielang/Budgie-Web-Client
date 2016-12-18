/**
 * Global state for the entire application.
 */
export interface IAppState {
    /**
     * Which language to convert GLS syntax into.
     */
    language: string;

    /**
     * The most recently selected sample code.
     */
    sampleName: string;

    /**
     * Raw lines of GLS syntax from the editor component.
     */
    sourceLines: string[];

    /**
     * Whether the editor is using unedited sample lines.
     */
    usingSample: boolean;
}
