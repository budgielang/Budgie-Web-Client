/**
 * Global state for the entire application.
 */
export interface IAppState {
    /**
     * Which language to convert GLS syntax into.
     */
    outputLanguage: string;

    /**
     * The most recently selected sample code.
     */
    sampleName: string;

    /**
     * Raw lines of GLS syntax from the editor component.
     */
    sourceLines: string[];
}
