import { Gls } from "general-language-syntax";
import { IInputSettings, ITransformResult, TransformStatus } from "monaco-to-monaco";

export const createGlsTransformer = () => {
    const gls = new Gls();

    return (input: IInputSettings): ITransformResult => {
        if (gls.getLanguage().properties.general.name !== input.language) {
            gls.setLanguage(input.language);
        }

        try {
            return {
                status: TransformStatus.Succeeded,
                value: gls.convert(input.value.split(/(\r\n)|\r|\n/g)).join("\n"),
            };
        } catch (error) {
            return {
                error,
                status: TransformStatus.Failed,
            };
        }
    };
};
