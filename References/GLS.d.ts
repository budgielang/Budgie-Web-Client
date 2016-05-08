declare module "Languages/Properties/NativeCallProperties" {
    /**
     * Where native operations are called from.
     */
    export enum NativeCallScope {
        /**
         * Called as a member of the calling object.
         */
        Member = 0,
        /**
         * Called as an operator on or with the calling object.
         */
        Operator = 1,
        /**
         * Called as a global static.
         */
        Static = 2,
    }
    /**
     * How native operations are called.
     */
    export enum NativeCallType {
        /**
         * An operator floating to the left of its caller.
         */
        FloatingLeft = 0,
        /**
         * An operator floating to the right of its caller.
         */
        FloatingRight = 1,
        /**
         * An operation that exists as a function.
         */
        Function = 2,
        /**
         * An operation as a single property.
         */
        Property = 3,
    }
    /**
     * Metadata on how to perform a native call, such as Array::push.
     */
    export class NativeCallProperties {
        /**
         * What this is called.
         */
        name: string;
        /**
         * Where this is called from.
         */
        scope: NativeCallScope;
        /**
         * How this is called.
         */
        type: NativeCallType;
        /**
         * Initializes a new instance of the NativeCallProperties class.
         *
         * @param name   What this is called.
         * @param scope   Where this is called from.
         * @param type   How this is called.
         */
        constructor(name: string, scope: NativeCallScope, type: NativeCallType);
    }
}
declare module "Languages/Properties/ArrayProperties" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    /**
     * Metadata on a language's arrays.
     */
    export class ArrayProperties {
        /**
         * The name of the array class.
         */
        className: string;
        /**
         * Whether arrays are initialized as class instances using "new".
         */
        initializeAsNew: boolean;
        /**
         * Whether initializing a new array requires specifying its type.
         */
        initializeByType: boolean;
        /**
         * Whether initialization is done as a static method of the array class.
         */
        initializeViaStatic: boolean;
        /**
         * How to retrieve an array's length.
         */
        length: NativeCallProperties;
    }
}
declare module "Languages/Properties/BooleanProperties" {
    /**
     * Metadata on a language's booleans.
     */
    export class BooleanProperties {
        /**
         * The name of the boolean class.
         */
        className: string;
    }
}
declare module "Languages/Properties/ClassGenericProperties" {
    /**
     * Metadata on a language's classes.
     */
    export class ClassGenericProperties {
        /**
         * How to start declaring a class' generics.
         */
        left: string;
        /**
         * Characters between a class' generic names.
         */
        middle: string;
        /**
         * How to end declaring a class' generics.
         */
        right: string;
        /**
         * Whether the class uses generics.
         */
        used: boolean;
    }
}
declare module "Languages/Casing/CaseStyle" {
    /**
     * Allowed casing preferences.
     */
    export enum CaseStyle {
        /**
         * No preference on casing.
         */
        None = 0,
        /**
         * Camel case, such as myVariable.
         */
        CamelCase = 1,
        /**
         * File system case, such as "my/variable.
         */
        FileSystem = 2,
        /**
         * Packages in lower case, such as "my.variable".
         */
        PackageLowerCase = 3,
        /**
         * Packages in upper case, such as "My.Variable".
         */
        PackageUpperCase = 4,
        /**
         * Pascal case, such as MyVariable.
         */
        PascalCase = 5,
        /**
         * Snake case, such as my_variable.
         */
        SnakeCase = 6,
    }
}
declare module "Languages/Properties/ClassMemberVariableProperties" {
    import { CaseStyle } from "Languages/Casing/CaseStyle";
    /**
     * Metadata on a language's class member variables.
     */
    export class ClassMemberVariableProperties {
        /**
         * Decorator for public members.
         */
        public: string;
        /**
         * Casing modifier for public member variables.
         */
        publicCase: CaseStyle;
        /**
         * Prefix for public members.
         */
        publicPrefix: string;
        /**
         * Decorator for protected members.
         */
        protected: string;
        /**
         * Casing modifier for protected member variables.
         */
        protectedCase: CaseStyle;
        /**
         * Prefix for protected members.
         */
        protectedPrefix: string;
        /**
         * Decorator for private members.
         */
        private: string;
        /**
         * Casing modifier for private member variables.
         */
        privateCase: CaseStyle;
        /**
         * Prefix for private members.
         */
        privatePrefix: string;
        /**
         * Whether member variables shouldn't be declared.
         */
        skipMemberVariables: boolean;
    }
}
declare module "Languages/Properties/ClassMemberProperties" {
    import { ClassMemberVariableProperties } from "Languages/Properties/ClassMemberVariableProperties";
    /**
     * Metadata on a language's class member variables.
     */
    export class ClassMemberProperties {
        /**
         * Metadata on class member variables.
         */
        variables: ClassMemberVariableProperties;
    }
}
declare module "Languages/Properties/ListProperties" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    /**
     * Metadata on a language's lists.
     */
    export class ListProperties {
        /**
         * Whether the language uses flexible arrays.
         */
        asArray: boolean;
        /**
         * The name of the list class.
         */
        className: string;
        /**
         * How to retrieve the length of a list.
         */
        length: NativeCallProperties;
        /**
         * How to add an element to the end of a list.
         */
        push: NativeCallProperties;
        /**
         * Required imports to be able to use lists.
         */
        requiredImports: {
            [i: string]: string[];
        };
    }
}
declare module "Languages/Properties/StringProperties" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    /**
     * Metadata on a language's Strings.
     */
    export class StringProperties {
        /**
         * The name of the string class.
         */
        className: string;
        /**
         * The name of the concatenation operator.
         */
        concatenate: string;
        /**
         * How to determine the index of a substring.
         */
        index: NativeCallProperties;
        /**
         * How to retrieve a string's length.
         */
        length: NativeCallProperties;
    }
}
declare module "Languages/Properties/ClassProperties" {
    import { ClassGenericProperties } from "Languages/Properties/ClassGenericProperties";
    import { ClassMemberProperties } from "Languages/Properties/ClassMemberProperties";
    /**
     * Metadata on a language's classes.
     */
    export class ClassProperties {
        /**
         * Aliases of types, from raw GLS syntax to this language's equivalents.
         */
        aliases: {
            [i: string]: string;
        };
        /**
         * The keyword used for constructors, if not the class name.
         */
        constructorKeyword: string;
        /**
         * Whether constructors take in the class instance as a first parameter.
         */
        constructorTakesThis: boolean;
        /**
         * Whether constructors are named with a keyword, rather than the class name.
         */
        constructorUsesKeyword: boolean;
        /**
         * Characters before an inherited class declaration.
         */
        declareExtendsLeft: string;
        /**
         * Characters after an inherited class declaration.
         */
        declareExtendsRight: string;
        /**
         * The last line of a class declaration.
         */
        declareEnd: string;
        /**
         * How to start the first line of a class declaration.
         */
        declareStartLeft: string;
        /**
         * How to end the first line of a class declaration.
         */
        declareStartRight: string;
        /**
         * Metadata on generic (templated) types.
         */
        generics: ClassGenericProperties;
        /**
         * Metadata on class member variables and functions.
         */
        members: ClassMemberProperties;
        /**
         * How to start declaring a new instance of a class, such as "new ".
         */
        newStart: string;
        /**
         * The keyword for a static class or member.
         */
        staticLabel: string;
        /**
         * The keyword for calling a parent class constructor.
         */
        superConstructor: string;
        /**
         * The keyword used for "this".
         */
        this: string;
    }
}
declare module "Languages/Properties/CommentProperties" {
    /**
     * Metadata on a language's comments.
     */
    export class CommentProperties {
        /**
         * Whether documentation blocks are formatted as XML.
         */
        docAsXml: boolean;
        /**
         * How to end documentation blocks, if not XML.
         */
        docEnd: string;
        /**
         * How to end documentation block lines.
         */
        docLineEnd: string;
        /**
         * How to start documentation block lines.
         */
        docLineStart: string;
        /**
         * Aliases of known documentation tags.
         */
        docTagAliases: {
            [i: string]: string;
        };
        /**
         * Raw documentation tags that name a parameter.
         */
        docTagParameterNames: {
            [i: string]: string;
        };
        /**
         * Raw documentation tags that contain a parameter.
         */
        docTagsWithParameters: {
            [i: string]: string;
        };
        /**
         * How to start a documentation tag, if not XML.
         */
        docTagStart: string;
        /**
         * Text after a documentation after a documentation tag, if not XML.
         */
        docTagSpaceAfter: string;
        /**
         * How to end a documentation tag, if not XML.
         */
        docTagEnd: string;
        /**
         * How to start documentation blocks, if not XML.
         */
        docStart: string;
        /**
         * How to end block comments.
         */
        blockEnd: string;
        /**
         * How to end block comment lines.
         */
        blockLineLeft: string;
        /**
         * How to end block comment lines.
         */
        blockLineRight: string;
        /**
         * How to start block comments.
         */
        blockStart: string;
        /**
         * How to start line comments.
         */
        lineLeft: string;
        /**
         * How to end line comments.
         */
        lineRight: string;
    }
}
declare module "Languages/Properties/ConditionalProperties" {
    /**
     * Metadata on a language's conditionals.
     */
    export class ConditionalProperties {
        /**
         * How to start the continuation of a conditional.
         */
        continueLeft: string;
        /**
         * How to end the condinuation of a conditional.
         */
        continueRight: string;
        /**
         * The keyword used for "elif" / "else if".
         */
        elif: string;
        /**
         * The keyword used for "else".
         */
        else: string;
        /**
         * How to end a conditional.
         */
        end: string;
        /**
         * The keyword used for "if".
         */
        if: string;
        /**
         * How to start a conditional's statement line.
         */
        startLeft: string;
        /**
         * How to end a conditional's statement line.
         */
        startRight: string;
        /**
         * The keyword used for "while".
         */
        while: string;
    }
}
declare module "Languages/Properties/DictionaryProperties" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    /**
     * Metadata on a language's dictionaries.
     */
    export class DictionaryProperties {
        /**
         * How to determine if a key exists in a dictionary.
         */
        containsKey: NativeCallProperties;
        /**
         * The name of the dictionary class.
         */
        className: string;
        /**
         * How to retrieve all keys from a dictionary as an array.
         */
        keys: NativeCallProperties;
        /**
         * Whether dictionaries are initialized as class instances using "new".
         */
        initializeAsNew: boolean;
        /**
         * How to end initializing a new dictionary's values.
         */
        initializeEnd: string;
        /**
         * How to end a new dictionary's in-place value.
         */
        initializePairComma: string;
        /**
         * How to start an in-place pair initialization.
         */
        initializePairLeft: string;
        /**
         * Characters in the middle of an in-place pair initialization.
         */
        initializePairMiddle: string;
        /**
         * How to end an in-place pair initialization.
         */
        initializePairRight: string;
        /**
         * How to start initializing a new dictionary's values.
         */
        initializeStart: string;
        /**
         * Required imports to be able to use dictionaries.
         */
        requiredImports: {
            [i: string]: string[];
        };
        /**
         * How to start displaying types in a dictionary type.
         */
        typeLeft: string;
        /**
         * Characters in the middle of types in a dictionary type.
         */
        typeMiddle: string;
        /**
         * How to end displaying types in a dictionary type.
         */
        typeRight: string;
    }
}
declare module "Languages/Properties/EnumProperties" {
    /**
     * Metadata on a language's enums.
     */
    export class EnumProperties {
        /**
         * Suffix after a member and value declaration.
         */
        declareCommaRight: string;
        /**
         * End line of an enum declaration.
         */
        declareLastRight: string;
        /**
         * Start of the first line of an enum declaration.
         */
        declareStartLeft: string;
        /**
         * End of the first line of an enum declaration.
         */
        declareStartRight: string;
        /**
         * Start of a line declaring an enum member and value.
         */
        declareValueLeft: string;
        /**
         * End of a line declaring an enum member and value.
         */
        declareValueRight: string;
        /**
         * Start of a line retrieving an enum value.
         */
        valueLeft: string;
        /**
         * Middle of a line retrieving enum value.
         */
        valueMiddle: string;
        /**
         * End of a line retrieving enum value.
         */
        valueRight: string;
    }
}
declare module "Languages/Properties/ExceptionProperties" {
    /**
     * Metadata on a language's exceptions.
     */
    export class ExceptionProperties {
        /**
         * The name of the exception class.
         */
        className: string;
        /**
         * The keyword used for "catch".
         */
        catch: string;
        /**
         * The keyword used for "finally".
         */
        finally: string;
        /**
         * The keyword used for "throw".
         */
        throw: string;
        /**
         * The keyword used for "try".
         */
        try: string;
        /**
         * A prefix to put before an exception's caught variable.
         */
        variablePrefix: string;
    }
}
declare module "Languages/Properties/FunctionProperties" {
    /**
     * Metadata on a language's functions.
     */
    export class FunctionProperties {
        /**
         * A prefix before defining a function, such as "def " or "function ".
         */
        defineStartLeft: string;
        /**
         * A suffix after defining a function, such as " {" or ":".
         */
        defineStartRight: string;
        /**
         * A line for after a function's definition.
         */
        defineEnd: string;
        /**
         * Whether return types should be explicitly stated.
         */
        explicitReturns: boolean;
        /**
         * Whether return types should be after the name, rather than before.
         */
        returnTypeAfterName: boolean;
        /**
         * A label between function name and its type, if type is after the name.
         */
        returnTypeMarker: string;
    }
}
declare module "Languages/Properties/GeneralProperties" {
    /**
     * Metadata on a language's general properties.
     */
    export class GeneralProperties {
        /**
         * The file extension.
         */
        extension: string;
        /**
         * The common name.
         */
        name: string;
    }
}
declare module "Languages/Properties/ImportProperties" {
    import { CaseStyle } from "Languages/Casing/CaseStyle";
    /**
     * Metadata on a language's imports.
     */
    export class ImportProperties {
        /**
         * Casing modifier for package names.
         */
        case: CaseStyle;
        /**
         * Whether individual items should be named.
         */
        explicit: boolean;
        /**
         * Whether individual items should be on separate lines.
         */
        explicitLines: boolean;
        /**
         * Whether items should come before package names.
         */
        itemsBeforePackage: boolean;
        /**
         * Start of an import line.
         */
        left: string;
        /**
         * Middle of an import line, between items and package.
         */
        middle: string;
        /**
         * End of an import line.
         */
        right: string;
    }
}
declare module "Languages/Properties/LambdaProperties" {
    /**
     * Metadata on a language's lambdas.
     */
    export class LambdaProperties {
        /**
         * How to start a lambda.
         */
        functionLeft: string;
        /**
         * A string between the lambda arguments and body.
         */
        functionMiddle: string;
        /**
         * How to end a lambda.
         */
        functionRight: string;
        /**
         * Whether parameter types must be included in the argument list.
         */
        parameterTypeRequired: boolean;
        /**
         * Whether a return type must be included in the argument list.
         */
        returnTypeRequired: boolean;
    }
}
declare module "Languages/Properties/LoopProperties" {
    /**
     * Metadata on a language's loops.
     */
    export class LoopProperties {
        /**
         * The keyword used for "break".
         */
        break: string;
        /**
         * The keyword used for "continue".
         */
        continue: string;
        /**
         * The keyword used for "for".
         */
        for: string;
        /**
         * The keyword used for "foreach".
         */
        foreach: string;
        /**
         * Whether foreach loops are a method, rather than a standard loop.
         */
        forEachAsMethod: boolean;
        /**
         * How to end a foreach loop.
         */
        forEachEnd: string;
        /**
         * How objects may give their listing of keys, such as ".Keys".
         */
        forEachGetKeys: string;
        /**
         * How objects may give their listing of paired keys and values.
         */
        forEachGetPairs: string;
        /**
         * The middle portion of a foreach loop's initial line.
         */
        forEachMiddle: string;
        /**
         * The class name of foreach pairs, such as "KeyValuePair" or "MapEntry".
         */
        forEachPairsPairClass: string;
        /**
         * Whether foreach loops iterate over keys.
         */
        forEachPairsAsKeys: boolean;
        /**
         * Whether foreach loops iterate over pairs of items.
         */
        forEachPairsAsPair: boolean;
        /**
         * How to retrieve a key from a foreach pair, such as ".Key" or ".getKey()".
         */
        forEachPairsRetrieveKey: string;
        /**
         * How to retrieve a key from a foreach pair, such as ".Value" or ".getValue()".
         */
        forEachPairsRetrieveValue: string;
        /**
         * How to end a foreach loop's initial line.
         */
        forEachRight: string;
        /**
         * Whether Pythonic ranged loops are used, rather than traditional C-like ones.
         */
        rangedForLoops: boolean;
        /**
         * How to start a Pythonic ranged loop's initial line.
         */
        rangedForLoopsLeft: string;
        /**
         * The separator between numbers inside Pythonic ranged loops.
         */
        rangedForLoopsMiddle: string;
        /**
         * How to end a Pythonic ranged loop's initial line.
         */
        rangedForLoopsRight: string;
    }
}
declare module "Languages/Properties/NumberProperties" {
    /**
     * Metadata on a language's numbers.
     */
    export class NumberProperties {
        /**
         * The name of the number class.
         */
        className: string;
    }
}
declare module "Languages/Properties/OutputProperties" {
    /**
     * Metadata on a language's output.
     */
    export class OutputProperties {
        /**
         * The function used for printing.
         */
        print: string;
    }
}
declare module "Languages/Properties/OperatorProperties" {
    /**
     * Metadata on a language's operators.
     */
    export class OperatorProperties {
        /**
         * Aliases of operators, from raw GLS syntax to this language's equivalents.
         */
        aliases: {
            [i: string]: string;
        };
        /**
         * The symbols used for "&&".
         */
        and: string;
        /**
         * The symbols used for "-=".
         */
        decreaseBy: string;
        /**
         * The symbols used for "/".
         */
        divide: string;
        /**
         * The symbols used for "/=".
         */
        divideBy: string;
        /**
         * The symbols used for "=".
         */
        equals: string;
        /**
         * The symbols used for "==".
         */
        equalTo: string;
        /**
         * The symbols used for ">".
         */
        greaterThan: string;
        /**
         * The symbols used for ">=".
         */
        greaterThanOrEqualTo: string;
        /**
         * The symbols used for "+=".
         */
        increaseBy: string;
        /**
         * The symbols used for "<".
         */
        lessThan: string;
        /**
         * The symbols used for "<=".
         */
        lessThanOrEqualTo: string;
        /**
         * The symbols used for "-".
         */
        minus: string;
        /**
         * The symbols used for "%".
         */
        mod: string;
        /**
         * The symbols used for "*=".
         */
        multiplyBy: string;
        /**
         * The symbols used for "!".
         */
        not: string;
        /**
         * The symbols used for "!=".
         */
        notEqualTo: string;
        /**
         * The symbols used for "||".
         */
        or: string;
        /**
         * The symbols used for "+".
         */
        plus: string;
        /**
         * The symbols used for "*".
         */
        times: string;
        /**
         * Initializes aliases based on the equivalent member properties.
         */
        generateAliases(): void;
    }
}
declare module "Languages/Properties/StyleProperties" {
    /**
     * Metadata on a language's style.
     */
    export class StyleProperties {
        /**
         * Lines at the end of each file. "{0}" is used for the file name.
         */
        fileEndLines: string[];
        /**
         * How indented each file's contents should be.
         */
        fileIndentation: number;
        /**
         * Lines at the start of every file. "{0}" is used for the file name.
         */
        fileStartLines: string[];
        /**
         * Lines at the end of a main function.
         */
        mainEndLines: string[];
        /**
         * How indented the main function should be.
         */
        mainIndentation: number;
        /**
         * Lines at the start of a main function.
         */
        mainStartLines: string[];
        /**
         * Whether class method and public member names are in PascalCase
         * rather than camelCase.
         */
        pascalCase: boolean;
        /**
         * How to start printing a line.
         */
        printEnd: string;
        /**
         * How to end printing a line.
         */
        printStart: string;
        /**
         * Whether block-starting braces should be moved to the next line.
         */
        separateBraceLines: boolean;
        /**
         * How to end lines, such as "" or ";".
         */
        semicolon: string;
    }
}
declare module "Languages/Properties/VariableProperties" {
    /**
     * Metadata on a language's variables.
     */
    export class VariableProperties {
        /**
         * Aliases of values, from raw GLS syntax to this language's equivalents.
         */
        aliases: {
            [i: string]: string;
        };
        /**
         * How to start a type cast.
         */
        castLeft: string;
        /**
         * How to end a type cast.
         */
        castRight: string;
        /**
         * How to start declaring a variable.
         */
        declaration: string;
        /**
         * Whether variables must be declared before usage.
         */
        declarationRequired: boolean;
        /**
         * Whether types are explicitly stated with declarations.
         */
        explicitTypes: boolean;
        /**
         * The keyword used for null/undefined.
         */
        null: string;
        /**
         * Whether types should be put after variable names rather than before.
         */
        typesAfterName: boolean;
        /**
         * How to start a variable's type name.
         */
        typeLeft: string;
    }
}
declare module "Languages/Properties/LanguageProperties" {
    import { ArrayProperties } from "Languages/Properties/ArrayProperties";
    import { BooleanProperties } from "Languages/Properties/BooleanProperties";
    import { ClassProperties } from "Languages/Properties/ClassProperties";
    import { CommentProperties } from "Languages/Properties/CommentProperties";
    import { ConditionalProperties } from "Languages/Properties/ConditionalProperties";
    import { DictionaryProperties } from "Languages/Properties/DictionaryProperties";
    import { EnumProperties } from "Languages/Properties/EnumProperties";
    import { ExceptionProperties } from "Languages/Properties/ExceptionProperties";
    import { FunctionProperties } from "Languages/Properties/FunctionProperties";
    import { GeneralProperties } from "Languages/Properties/GeneralProperties";
    import { ImportProperties } from "Languages/Properties/ImportProperties";
    import { LambdaProperties } from "Languages/Properties/LambdaProperties";
    import { ListProperties } from "Languages/Properties/ListProperties";
    import { LoopProperties } from "Languages/Properties/LoopProperties";
    import { NumberProperties } from "Languages/Properties/NumberProperties";
    import { OutputProperties } from "Languages/Properties/OutputProperties";
    import { OperatorProperties } from "Languages/Properties/OperatorProperties";
    import { StringProperties } from "Languages/Properties/StringProperties";
    import { StyleProperties } from "Languages/Properties/StyleProperties";
    import { VariableProperties } from "Languages/Properties/VariableProperties";
    /**
     * Metadata on a language's syntax.
     */
    export class LanguageProperties {
        /**
         * Metadata on arrays.
         */
        arrays: ArrayProperties;
        /**
         * Metadata on booleans.
         */
        booleans: BooleanProperties;
        /**
         * Metadata on classes.
         */
        classes: ClassProperties;
        /**
         * Metadata on comments.
         */
        comments: CommentProperties;
        /**
         * Metadata on conditionals.
         */
        conditionals: ConditionalProperties;
        /**
         * Metadata on dictionaries.
         */
        dictionaries: DictionaryProperties;
        /**
         * Metadata on enums.
         */
        enums: EnumProperties;
        /**
         * Metadata on exceptions.
         */
        exceptions: ExceptionProperties;
        /**
         * Metadata on functions.
         */
        functions: FunctionProperties;
        /**
         * Metadata on general properties.
         */
        general: GeneralProperties;
        /**
         * Metadata on imports.
         */
        imports: ImportProperties;
        /**
         * Metadata on lambdas.
         */
        lambdas: LambdaProperties;
        /**
         * Metadata on lists.
         */
        lists: ListProperties;
        /**
         * Metadata on loops.
         */
        loops: LoopProperties;
        /**
         * Metadata on numbers.
         */
        numbers: NumberProperties;
        /**
         * Metadata on operators.
         */
        operators: OperatorProperties;
        /**
         * Metadata on output.
         */
        output: OutputProperties;
        /**
         * Metadata on strings.
         */
        strings: StringProperties;
        /**
         * Metadata on style.
         */
        style: StyleProperties;
        /**
         * Metadata on variables.
         */
        variables: VariableProperties;
        /**
         * Initializes a new instance of the LanguageProperties class.
         */
        constructor();
    }
}
declare module "Languages/Language" {
    import { ArrayProperties } from "Languages/Properties/ArrayProperties";
    import { BooleanProperties } from "Languages/Properties/BooleanProperties";
    import { ClassProperties } from "Languages/Properties/ClassProperties";
    import { ClassGenericProperties } from "Languages/Properties/ClassGenericProperties";
    import { ClassMemberVariableProperties } from "Languages/Properties/ClassMemberVariableProperties";
    import { CommentProperties } from "Languages/Properties/CommentProperties";
    import { ConditionalProperties } from "Languages/Properties/ConditionalProperties";
    import { DictionaryProperties } from "Languages/Properties/DictionaryProperties";
    import { EnumProperties } from "Languages/Properties/EnumProperties";
    import { ExceptionProperties } from "Languages/Properties/ExceptionProperties";
    import { FunctionProperties } from "Languages/Properties/FunctionProperties";
    import { GeneralProperties } from "Languages/Properties/GeneralProperties";
    import { ImportProperties } from "Languages/Properties/ImportProperties";
    import { LambdaProperties } from "Languages/Properties/LambdaProperties";
    import { LanguageProperties } from "Languages/Properties/LanguageProperties";
    import { ListProperties } from "Languages/Properties/ListProperties";
    import { LoopProperties } from "Languages/Properties/LoopProperties";
    import { NumberProperties } from "Languages/Properties/NumberProperties";
    import { OperatorProperties } from "Languages/Properties/OperatorProperties";
    import { OutputProperties } from "Languages/Properties/OutputProperties";
    import { StringProperties } from "Languages/Properties/StringProperties";
    import { StyleProperties } from "Languages/Properties/StyleProperties";
    import { VariableProperties } from "Languages/Properties/VariableProperties";
    /**
     * A summary of information for a single language.
     */
    export abstract class Language {
        /**
         * Metadata about the language syntax.
         */
        properties: LanguageProperties;
        /**
         * Initializes a new instance of the Language class.
         */
        constructor();
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected abstract generateArrayProperties(arrays: ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected abstract generateBooleanProperties(booleans: BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected abstract generateClassProperties(classes: ClassProperties): void;
        /**
         * Generates metadata on class generics.
         *
         * @param members   A property container for metadata on class generics.
         */
        protected abstract generateClassGenericProperties(generics: ClassGenericProperties): void;
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        protected abstract generateClassMemberVariableProperties(members: ClassMemberVariableProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected abstract generateCommentProperties(comments: CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected abstract generateConditionalProperties(conditionals: ConditionalProperties): void;
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected abstract generateDictionaryProperties(dictionaries: DictionaryProperties): void;
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        protected abstract generateEnumProperties(enums: EnumProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected abstract generateExceptionProperties(exceptions: ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected abstract generateFunctionProperties(functions: FunctionProperties): void;
        /**
         * Fills out metadata on general properties.
         */
        protected abstract generateGeneralProperties(general: GeneralProperties): void;
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        protected abstract generateImportProperties(lambdas: ImportProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected abstract generateLambdaProperties(lambdas: LambdaProperties): void;
        /**
         * Fills out metadata on lists.
         */
        protected abstract generateListProperties(lists: ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected abstract generateLoopProperties(loops: LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected abstract generateNumberProperties(numbers: NumberProperties): void;
        /**
         * Generates metadata on operators.
         *
         * @param operators   A property container for metadata on operators.
         */
        protected abstract generateOperatorProperties(operators: OperatorProperties): void;
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        protected abstract generateOutputProperties(operators: OutputProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected abstract generateStringProperties(strings: StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        protected abstract generateStyleProperties(style: StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected abstract generateVariableProperties(variables: VariableProperties): void;
    }
}
declare module "Commands/CommandResult" {
    /**
     * A single line of code converted from raw GLS syntax.
     */
    export class CommandResult {
        /**
         * How much indentation will change from the result.
         */
        indentation: number;
        /**
         * Text contents of the result.
         *
         * @remarks If "\0", this isn't added.
         */
        text: string;
        /**
         * Initializes a new instance of the CommandResult class.
         *
         * @param text   Text contents of the result.
         * @param indentation   How much indentation will change from the result.
         */
        constructor(text: string, indentation: number);
    }
}
declare module "Commands/LineResults" {
    import { CommandResult } from "Commands/CommandResult";
    /**
     * A cluster of code converted from a line of GLS syntax.
     */
    export class LineResults {
        /**
         * Text contents of the result.
         */
        commandResults: CommandResult[];
        /**
         * Whether this should have a semicolon appended.
         */
        addSemicolon: boolean;
        /**
         * Any imports that must be in a file to use this.
         */
        addedImports: {
            [i: string]: string[];
        };
        /**
         * Initializes a new instance of the LineResults class.
         *
         * @param commandResults   Lines of code converted fromthe GLS syntax.
         * @param addsSemicolon   Whether this should end with a semicolon.
         */
        constructor(commandResults: CommandResult[], addSemicolon: boolean);
        /**
         *
         */
        addImports(imports: {
            [i: string]: string[];
        }): void;
        /**
         * Creates a new result containing a single line with a semicolon.
         *
         * @param text   The contents of the line.
         * @param addSemicolon   Whether the line should end with a semicolon.
         * @returns A new single line result.
         */
        static newSingleLine(text: string, addSemicolon: boolean): LineResults;
        /**
         * Creates a new result containing the start or end of a block.
         *
         * @param text   The contents of the line.
         * @param indentation   How much the line changes indentation.
         * @returns A new block-changing line result.
         */
        static newBlockLine(text: string, indentation: number): LineResults;
    }
}
declare module "Commands/NativeCallCommand" {
    import { ConversionContext } from "Conversions/ConversionContext";
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for performing a native call, such as Array::push.
     */
    export abstract class NativeCallCommand extends Command {
        /**
         * Renderers for each allowed scope.
         */
        private scopeRenderers;
        /**
         * Metadata on how to perform the native call.
         */
        protected nativeCallProperties: NativeCallProperties;
        /**
         * Initializes a new instance of the Command class.
         *
         * @param context   The driving context for converting the command.
         */
        constructor(context: ConversionContext);
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        render(parameters: string[]): LineResults;
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected abstract retrieveNativeCallProperties(): NativeCallProperties;
        /**
         * Renders the native call as a member.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        private renderAsMember(parameters);
        /**
         * Renders the native call as an operator.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, operand)
         */
        private renderAsOperator(parameters);
        /**
         * Renders the native call as a static.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        private renderAsStatic(parameters);
    }
}
declare module "Commands/Parameters/Parameter" {
    /**
     * Some parameter(s) to be passed to a command.
     */
    export abstract class Parameter {
        /**
         * A plain-text description of this parameter.
         */
        description: string;
        /**
         * Initializes a new instance of the Parameter class.
         *
         * @param descriptor   A plain-text description of the parameter.
         */
        constructor(description: string);
    }
}
declare module "Commands/Parameters/SingleParameter" {
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A single named parameter.
     */
    export class SingleParameter extends Parameter {
        /**
         * The name of this parameter.
         */
        name: string;
        /**
         * Whether this must be provided.
         */
        required: boolean;
        /**
         * Initializes a new instance of the Parameter class.
         *
         * @param descriptor   A plain-text description of the parameter.
         * @param parameters   Parameters contained inside.
         */
        constructor(name: string, description: string, required: boolean);
    }
}
declare module "Commands/Parameters/RepeatingParameters" {
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * Some number of repeating parameters.
     */
    export class RepeatingParameters extends Parameter {
        /**
         * Parameters contained inside.
         */
        parameters: Parameter[];
        /**
         * Initializes a new instance of the Parameter class.
         *
         * @param descriptor   A plain-text description of the parameter.
         * @param parameters   Parameters contained inside.
         */
        constructor(description: string, parameters: Parameter[]);
    }
}
declare module "Commands/ArrayLengthCommand" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    import { NativeCallCommand } from "Commands/NativeCallCommand";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for a retrieving the length of an array.
     */
    export class ArrayLengthCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): NativeCallProperties;
    }
}
declare module "Commands/BreakCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for printing the "break" keyword.
     */
    export class BreakCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/BlockEndCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A general command for the end of a conditional block.
     */
    export class BlockEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
        /**
         * Renders the default end block for conditionals.
         *
         * @returns The default end block for conditionals.
         */
        protected renderBlockEnd(): string;
    }
}
declare module "Commands/ClassEndCommand" {
    import { BlockEndCommand } from "Commands/BlockEndCommand";
    /**
     * A command for the end of a class declaration.
     */
    export class ClassEndCommand extends BlockEndCommand {
        /**
         * Renders the end block for class declarations.
         *
         * @returns The end block for class declarations.
         */
        protected renderBlockEnd(): string;
    }
}
declare module "Commands/ClassStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for starting to declare a class.
     */
    export class ClassStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (classDescriptor[, parentClassDescriptor]).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/CommentBlockCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for printing a comment block line.
     */
    export class CommentBlockCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (contents, ...).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/CommentBlockEndCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for ending a comment block.
     */
    export class CommentBlockEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/CommentBlockStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for starting a comment block.
     */
    export class CommentBlockStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/CommentDocEndCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for ending a documentation block.
     */
    export class CommentDocEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/CommentDocStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for starting a documentation block.
     */
    export class CommentDocStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/CommentDocTagCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for printing a documentation tag.
     */
    export class CommentDocTagCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * A maximum length for tag lines.
         *
         * @todo Calculate this using language style (#16).
         * @todo Factor in indentation from this.context (#17).
         */
        private MaximumLineLength;
        /**
         * Renders a command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (tag[, parameter][, comments]).
         */
        render(parameters: string[]): LineResults;
        /**
         * Renders a JSDoc-like command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        private renderXmlDoc(parameters);
        /**
         * Renders a JSDoc-like command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        private renderJsDoc(parameters);
        /**
         * Transforms a tag and information content into a wrapped set of
         * lines for documentation.
         *
         * @param tag   A prefix for the lines.
         * @param contentsRaw   The raw information content.
         */
        private wrapTagContents(tag, contentsRaw);
        /**
         * Splits a bunch of words into lines of a maximum length.
         *
         * @param text   Stringified words to be split.
         * @param length   A maximum length for lines.
         * @returns Lines of the original text.
         */
        private splitTextToLength(text, length);
        /**
         * Pads comment lines with a starting tag on the first line and spaces
         * on subsequent lines.
         *
         * @param tag   A starting tag to prefixthe first line.
         * @param contents   Comment lines to be padded.
         * @returns The contents, with the tag and padding in front.
         */
        private padContentsWithTag(tag, contents);
        /**
         * Prefixes a String with some number of spaces.
         *
         * @param text   The text to pad.
         * @param spaces   How many spaces to pad it with.
         * @returns The text, padded with spaces.
         */
        private padLeft(text, spaces);
        /**
         * @param tagRaw   A user-given documentationtag.
         * @returns An alias for tag if it exists, or the tag otherwise.
         */
        private parseTag(tagRaw);
        /**
         * @param tagRaw   A user-given documentation tag parameter.
         * @returns An alias for parameter if it exists, or the parameter otherwise.
         */
        private parseTagParameter(tag, parameter);
    }
}
declare module "Commands/CommentLineCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for printing a comment line.
     */
    export class CommentLineCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (contents, ...).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ConstructorEndCommand" {
    import { BlockEndCommand } from "Commands/BlockEndCommand";
    /**
     * A command for the end of a constructor.
     */
    export class ConstructorEndCommand extends BlockEndCommand {
    }
}
declare module "Commands/ConstructorStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the beginning of a constructor.
     */
    export class ConstructorStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        render(parameters: string[]): LineResults;
        /**
         * Generates a string for a parameter.
         *
         * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
         * @param i   An index in the parameters of a parameterName.
         * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
         */
        private generateParameterVariable(parameters, i);
    }
}
declare module "Commands/ContinueCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for printing the "continue" keyword.
     */
    export class ContinueCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ConcatenateCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for concatenating strings.
     */
    export class ConcatenateCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (string, string[, string, ...])
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/DictionaryContainsKeyCommand" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    import { NativeCallCommand } from "Commands/NativeCallCommand";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for a retrieving the length of an string.
     */
    export class DictionaryContainsKeyCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): NativeCallProperties;
    }
}
declare module "Commands/DictionaryKeysCommand" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    import { NativeCallCommand } from "Commands/NativeCallCommand";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for a retrieving the keys of a dictionary.
     */
    export class DictionaryKeysCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): NativeCallProperties;
    }
}
declare module "Commands/DictionaryNewCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for initializing a new dictionary.
     */
    export class DictionaryNewCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/DictionaryNewEndCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for the end of a new dictionary.
     */
    export class DictionaryNewEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/DictionaryNewStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for starting to initialize a new dictionary.
     */
    export class DictionaryNewStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/DictionaryPairCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for an in-place dictionary initialization pair.
     */
    export class DictionaryPairCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType[, comma]).
         */
        render(parameters: string[]): LineResults;
        /**
         * Renders a quoted (string) or unquoted (variable) pair key.
         *
         * @param keyRaw   The raw key used for it.
         * @returns The key, wrapped as necessary.
         * @todo Add wrapping brackets as needed (research for Python, Ruby).
         */
        private renderKey(keyRaw);
    }
}
declare module "Commands/DictionaryTypeCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for declaring a dictionary type.
     */
    export class DictionaryTypeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ElseIfStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the beginning of an elif statement.
     */
    export class ElseIfStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (conditional).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ElseStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for the beginning of an else statement.
     */
    export class ElseStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/EnumCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the retrieving an enum value by name.
     */
    export class EnumCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (enumName, memberName).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/EnumEndCommand" {
    import { BlockEndCommand } from "Commands/BlockEndCommand";
    /**
     * A command for ending an enum declaration.
     */
    export class EnumEndCommand extends BlockEndCommand {
    }
}
declare module "Commands/EnumMemberCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the declaring an enum member value.
     */
    export class EnumMemberCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (memberName, memberValue[, ","]).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/EnumStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for starting to declare an enum.
     */
    export class EnumStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/FileEndCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for ending a file.
     */
    export class FileEndCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (fileName).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/FileStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for starting a file.
     */
    export class FileStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (fileName).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ForEachEndCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for the end of a foreach loop.
     */
    export class ForEachEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ForEachKeyStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the beginning of a foreach loop over a container's keys.
     */
    export class ForEachKeyStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        render(parameters: string[]): LineResults;
        /**
         * Renders a Ruby-style method iteration.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        renderForEachAsMethod(parameters: string[]): LineResults;
        /**
         * Renders a traditional foreach loop.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        renderForEachAsLoop(parameters: string[]): LineResults;
    }
}
declare module "Commands/ForEachPairStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the beginning of a foreach loop over a container's pairs.
     */
    export class ForEachPairStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        render(parameters: string[]): LineResults;
        /**
         * Renders a Ruby-style method iteration.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        renderForEachAsMethod(parameters: string[]): LineResults;
        /**
         * Renders a traditional foreach loop.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        renderForEachAsLoop(parameters: string[]): LineResults;
        /**
         * Adds the retrieval of a pair's key.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @param output Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        private addPairKeyLookup(parameters, output);
        /**
         * Adds the retrieval of a pair's key and value.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @param output Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        private addPairValueLookup(parameters, output);
        /**
         * Adds the retrieval of a container's value from a key.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @param output Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        private addKeyedValueLookup(parameters, output);
    }
}
declare module "Commands/ForNumbersStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the beginning of a for loop over numbers.
     */
    export class ForNumbersStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, start, end).
         */
        render(parameters: string[]): LineResults;
        /**
         * Renders a Pythonic ranged loop.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, start, end).
         */
        private renderStartRanged(parameters);
        /**
         * Renders a traditional loop.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, start, end).
         */
        private renderStartLoop(parameters);
    }
}
declare module "Commands/ForNumbersEndCommand" {
    import { BlockEndCommand } from "Commands/BlockEndCommand";
    /**
     * A command for the end of a for loop over numbers.
     */
    export class ForNumbersEndCommand extends BlockEndCommand {
    }
}
declare module "Commands/FunctionEndCommand" {
    import { BlockEndCommand } from "Commands/BlockEndCommand";
    /**
     * A command for the end of a function.
     */
    export class FunctionEndCommand extends BlockEndCommand {
    }
}
declare module "Commands/FunctionStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the beginning of a function.
     */
    export class FunctionStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @remarks Usage: (name, returnType[, parameterName, parameterType, ...]).
         */
        render(parameters: string[]): LineResults;
        /**
         * Generates a string for a parameter.
         *
         * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
         * @param i   An index in the parameters of a parameterName.
         * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
         */
        private generateParameterVariable(parameters, i);
    }
}
declare module "Commands/IfEndCommand" {
    import { BlockEndCommand } from "Commands/BlockEndCommand";
    /**
     * A command for the end of an if statement.
     */
    export class IfEndCommand extends BlockEndCommand {
    }
}
declare module "Commands/IfStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the beginning of an if statement.
     */
    export class IfStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (conditional).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ImportCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for importing items from a package.
     */
    export class ImportCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        render(parameters: string[]): LineResults;
        /**
         * Renders the command for a language that splits item imports across lines.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        private renderMultipleLines(parameters);
        /**
         * Renders the command for a language that puts multiple items in one import.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        private renderCombinedLine(parameters);
        /**
         * Renders a single import line of some item(s) from a package.
         *
         * @param packageName   The name of the package.
         * @param item   Item(s) being imported.
         * A line of code in the language.
         */
        private renderLine(packageName, item);
    }
}
declare module "Commands/IndexCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for an indexed [] lookup.
     */
    export class IndexCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, index).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/LambdaBodyCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for a lambda function body.
     */
    export class LambdaBodyCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the lambda for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([parameterName, parameterType, ...]).
         */
        render(parameters: string[]): LineResults;
        /**
         * Generates a string for a parameter.
         *
         * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
         * @param i   An index in the parameters of a parameterName.
         * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
         */
        private generateParameterVariable(parameters, i);
    }
}
declare module "Commands/ListInitializeCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for initializing a new list.
     */
    export class ListInitializeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type[, item, ...]).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ListLengthCommand" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    import { NativeCallCommand } from "Commands/NativeCallCommand";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for retrieving the length of a list.
     */
    export class ListLengthCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): NativeCallProperties;
    }
}
declare module "Commands/ListPushCommand" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    import { NativeCallCommand } from "Commands/NativeCallCommand";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for a list push statement.
     */
    export class ListPushCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): NativeCallProperties;
    }
}
declare module "Commands/LiteralCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for printing the input parameters directly.
     */
    export class LiteralCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([contents, ...]).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ListTypeCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for declaring a list type.
     */
    export class ListTypeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/MainEndCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for ending a main function.
     */
    export class MainEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/MainStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for starting a main function.
     */
    export class MainStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/MemberVariableCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for retrieving a member variable.
     */
    export class MemberVariableCommand extends Command {
        /**
         * Information on parameters this command takes in.
         *
         * @todo Use a value restriction on privacy (once it's implemented).
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/MemberVariableDeclareCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for declaring a member variable.
     */
    export class MemberVariableDeclareCommand extends Command {
        /**
         * Information on parameters this command takes in.
         *
         * @todo Use a value restriction on privacy (once it's implemented).
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/NotCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for printing a logical inverse.
     */
    export class NotCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/OperationCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for printing an operation.
     */
    export class OperationCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value, operator, value[, operator, value, ...]).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/OperatorCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for printing an operator.
     */
    export class OperatorCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (operator).
         */
        render(parameters: string[]): LineResults;
        /**
         * Converts a raw operator into the language's equivalent.
         *
         * @param typeNameRaw   A raw operator to convert.
         * @returns The equivalent converted operator.
         */
        private convertOperator(operatorRaw);
    }
}
declare module "Commands/ParenthesisCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for wrapping with parenthesis.
     */
    export class ParenthesisCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (contents, ...).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/PrintCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for printing.
     */
    export class PrintCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([contents]).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ReturnCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for returning in a function.
     */
    export class ReturnCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([value]).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/StringIndexCommand" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    import { NativeCallCommand } from "Commands/NativeCallCommand";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for a searching for a substring in a string.
     */
    export class StringIndexCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): NativeCallProperties;
    }
}
declare module "Commands/StringLengthCommand" {
    import { NativeCallProperties } from "Languages/Properties/NativeCallProperties";
    import { NativeCallCommand } from "Commands/NativeCallCommand";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for a retrieving the length of an string.
     */
    export class StringLengthCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): NativeCallProperties;
    }
}
declare module "Commands/SuperConstructorCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for calling a parent class constructor.
     */
    export class SuperConstructorCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/ThisCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A command for printing the "this" keyword.
     */
    export class ThisCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/TypeCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for parsing a language's name for a type.
     */
    export class TypeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type).
         */
        render(parameters: string[]): LineResults;
        /**
         * Converts a raw type name into the language's equivalent.
         *
         * @param typeNameRaw   A raw type to convert.
         * @returns The equivalent converted type name.
         */
        convertType(typeNameRaw: string): string;
        /**
         * Converts a raw type name with array notation into the language's equivalent.
         *
         * @param typeNameRaw   A raw type to convert.
         * @returns The equivalent converted type name.
         */
        private convertArrayType(typeNameRaw);
        /**
         * Converts a raw type name with array notation into the language's equivalent.
         *
         * @param typeNameRaw   A raw type to convert.
         * @returns The equivalent converted type name.
         * @todo Support multiple generics (commas inside the <>s).
         */
        private convertGenericType(typeNameRaw);
        /**
         * @param typeNameRaw   A name of a type.
         * @returns Whether the type name includes Array notation.
         */
        private typeContainsArray(typeNameRaw);
        /**
         * @param typeNameRaw   A name of a type.
         * @returns Whether the type name includes Array notation.
         */
        private typeContainsGeneric(typeNameRaw);
    }
}
declare module "Commands/ValueCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for printing a value.
     */
    export class ValueCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value).
         */
        render(parameters: string[]): LineResults;
        /**
         * Converts a raw value into the language's equivalent.
         *
         * @param typeNameRaw   A raw value to convert.
         * @returns The equivalent converted value.
         */
        private convertValue(valueRaw);
    }
}
declare module "Commands/VariableCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for declaring a variable.
     */
    export class VariableCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type[, value]).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/VariableInlineCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for declaring a variable inline (without a preceding "var ").
     */
    export class VariableInlineCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type[, value]).
         */
        render(parameters: string[]): LineResults;
        /**
         * Renders the "= value" part of a command.
         *
         * @param valueRaw   The raw value of a variable.
         * @returns   The "= value" part of a command.
         */
        private renderVariableValue(valueRaw);
    }
}
declare module "Commands/VariableStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the start of declaring a variable.
     */
    export class VariableStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, value).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/WhileEndCommand" {
    import { BlockEndCommand } from "Commands/BlockEndCommand";
    /**
     * A command for the end of a while loop.
     */
    export class WhileEndCommand extends BlockEndCommand {
    }
}
declare module "Commands/WhileStartCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for the beginning of a while loop.
     */
    export class WhileStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (conditional).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Commands/CommandsBag" {
    import { ConversionContext } from "Conversions/ConversionContext";
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    /**
     * A container for globally known commands.
     */
    export class CommandsBag {
        /**
         * Globally known commands, keyed by their GLS alias.
         */
        private commands;
        /**
         * Initializes a new instance of the CommandsBag class.
         *
         * @param context   The driving context for conversions.
         */
        constructor(context: ConversionContext);
        /**
         * @returns Commands, keyed by their GLS aliases.
         */
        getCommands(): {
            [i: string]: Command;
        };
        /**
         * Retrieves the command under the given alias.
         *
         * @param name   The alias of a command.
         * @returns The command under the given alias.
         */
        getCommand(alias: string): Command;
        /**
         * Renders a command in a language.
         *
         * @param language   The language to render the command in.
         * @param command   A command name, followed by parameters for it.
         * @returns Line(s) of code in the language.
         */
        renderCommand(parameters: string[]): LineResults;
    }
}
declare module "Languages/Casing/CaseStyleConverter" {
    /**
     * Allowed casing preferences.
     */
    export abstract class CaseStyleConverter {
        /**
         * Converts a name to the equivalent case style.
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in this converter's case style.
         */
        convert(name: string): string;
        /**
         * Applies this style's transformation to a word (by default, none).
         *
         * @param name   A word to convert.
         * @returns The word after this style's transformation.
         */
        protected applyTransformationToWord(word: string): string;
        /**
         * Finds the starting index of the next word in a name.
         *
         * @param name   A name.
         * @param previousWordEnd   The ending position of the name's previous word.
         * @returns The starting index of the next word in name.
         */
        private findNextWordStart(name, previousWordEnd);
        /**
         * Determines if a character is lower case.
         *
         * @param character   A character to check casing of.
         * @returns Whether character is lower case.
         */
        private isLowerCase(character);
    }
}
declare module "Languages/Casing/CamelCaseConverter" {
    import { CaseStyleConverter } from "Languages/Casing/CaseStyleConverter";
    /**
     * Converts a name to camelCase.
     */
    export class CamelCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to camelCase.
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in camelCase.
         */
        convert(name: string): string;
        /**
         * Transforms a word within a name to camelCase.
         *
         * @param word   A word within a name.
         * @returns The word transformed to camelCase.
         */
        protected applyTransformationToWord(word: string): string;
    }
}
declare module "Languages/Casing/FileSystemCaseConverter" {
    import { CaseStyleConverter } from "Languages/Casing/CaseStyleConverter";
    /**
     * Converts a name to "file/system/case".
     */
    export class FileSystemCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to "file/system/case".
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in "file/system/case".
         */
        convert(name: string): string;
        /**
         * Transforms a word within a name to "file/system/case".
         *
         * @param word   A word within a name.
         * @returns The word transformed to "file/system/case".
         */
        protected applyTransformationToWord(word: string): string;
    }
}
declare module "Languages/Casing/NoneConverter" {
    import { CaseStyleConverter } from "Languages/Casing/CaseStyleConverter";
    /**
     * Does nothing to a name.
     */
    export class NoneConverter extends CaseStyleConverter {
        /**
         * @param name   A name.
         * @returns The original name with no changes.
         */
        convert(name: string): string;
    }
}
declare module "Languages/Casing/PackageLowerCaseConverter" {
    import { CaseStyleConverter } from "Languages/Casing/CaseStyleConverter";
    /**
     * Converts a name to "package.lower.case".
     */
    export class PackageLowerCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to "package.lower.case".
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in "package.lower.case".
         */
        convert(name: string): string;
        /**
         * Transforms a word within a name to "package.lower.case".
         *
         * @param word   A word within a name.
         * @returns The word transformed to "package.lower.case".
         */
        protected applyTransformationToWord(word: string): string;
    }
}
declare module "Languages/Casing/PackageUpperCaseConverter" {
    import { CaseStyleConverter } from "Languages/Casing/CaseStyleConverter";
    /**
     * Converts a name to "Package.Upper.Case".
     */
    export class PackageUpperCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to "Package.Upper.Case".
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in "Package.Upper.Case".
         */
        convert(name: string): string;
        /**
         * Transforms a word within a name to "Package.Upper.Case".
         *
         * @param word   A word within a name.
         * @returns The word transformed to "Package.Upper.Case".
         */
        protected applyTransformationToWord(word: string): string;
    }
}
declare module "Languages/Casing/PascalCaseConverter" {
    import { CaseStyleConverter } from "Languages/Casing/CaseStyleConverter";
    /**
     * Converts a name to PascalCase.
     */
    export class PascalCaseConverter extends CaseStyleConverter {
        /**
         * Transforms a word within a name to PascalCase.
         *
         * @param word   A word within a name.
         * @returns The word transformed to PascalCase.
         */
        applyTransformationToWord(word: string): string;
    }
}
declare module "Languages/Casing/SnakeCaseConverter" {
    import { CaseStyleConverter } from "Languages/Casing/CaseStyleConverter";
    /**
     * Converts a name to snake_case.
     */
    export class SnakeCaseConverter extends CaseStyleConverter {
        /**
         * Converts a name to snake_case.
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in snake_case.
         */
        convert(name: string): string;
        /**
         * Transforms a word within a name to snake_case.
         *
         * @param word   A word within a name.
         * @returns The word transformed to snake_case.
         */
        protected applyTransformationToWord(word: string): string;
    }
}
declare module "Languages/Casing/CaseStyleConverterBag" {
    import { CaseStyle } from "Languages/Casing/CaseStyle";
    import { CaseStyleConverter } from "Languages/Casing/CaseStyleConverter";
    /**
     * A container for case style converters.
     */
    export class CaseStyleConverterBag {
        /**
         * Casing converters, keyed by their case style.
         */
        private converters;
        /**
         * Initializes a new instance of the CaseStyleConverter class.
         */
        constructor();
        /**
         * Retrieves the case converter for the given casing style.
         *
         * @param caseStyle   A casing style.
         * @returns The case converter under the given asing style.
         */
        getConverter(caseStyle: CaseStyle): CaseStyleConverter;
        /**
         * Converts a name to a casing style.
         *
         * @param name   A name to convert.
         * @param casingStyle   A casing style.
         * @returns The name under the casing style.
         */
        convert(name: string, caseStyle: CaseStyle): string;
    }
}
declare module "GlsParser" {
    import { LineResults } from "Commands/LineResults";
    import { ConversionContext } from "Conversions/ConversionContext";
    import { CaseStyle } from "Languages/Casing/CaseStyle";
    /**
     * Converter to transform raw GLS syntax into language code.
     */
    export class GlsParser {
        /**
         * A bag for globally known commands.
         */
        private caseConverter;
        /**
         * A bag for globally known commands.
         */
        private commandsBag;
        /**
         * The driving context for converting commands.
         */
        private context;
        /**
         * Initializes a new instance of the GlsParser class.
         *
         * @param context   A driving context for converting commands.
         */
        constructor(context: ConversionContext);
        /**
         * Parses a line of raw GLS syntax into the equivalent language code.
         *
         * @param line   A line of raw GLS syntax.
         * @returns The equivalent lines of code in the language.
         */
        parseCommand(line: string): LineResults;
        /**
         * Renders a parsed line into the equivalent language code.
         *
         * @param lineParsed   A parsed line from raw GLS syntax.
         * @returns The equivalent lines of code in the language.
         */
        renderParsedCommand(lineParsed: string[]): LineResults;
        /**
         * Converts a name to a casing style.
         *
         * @param name   A name to convert.
         * @param casingStyle   A casing style.
         * @returns The name under the casing style.
         */
        convertToCase(name: string, casingStyle: CaseStyle): string;
        /**
         * Parses a sub-command of GLS syntax from within a full line.
         *
         * @param section   A section of raw GLS syntax.
         * @returns Text from the result of parsing this command.
         * @remarks Only the first result line is used.
         */
        private recurseOnCommand(section);
        /**
         * Separates a line into its command name and parameters.
         *
         * @param line   A raw line of GLS syntax.
         * @returns The line's command name, followed by any parameters.
         * @remarks This assumes the line is already whitespace-trimmed.
         */
        private separateLineComponents(line);
        /**
         * Trims the first and last characters from a String.
         *
         * @param text   A String.
         * @returns The same text, with end characters trimmed.
         */
        private trimEndCharacters(text);
        /**
         * Finds the corresponding end position for a starting separator.
         *
         * @param text   The String to search within.
         * @param index   The starting location of the starting separator.
         * @param starter   The starting separator, such as "{".
         * @param ender   The ending separator, suchas "}".
         * @returns The position of the starter's corresponding ender.
         */
        private findSearchEnd(text, index, starter, ender);
    }
}
declare module "Conversions/Conversion" {
    import { ConversionContext } from "Conversions/ConversionContext";
    /**
     * A single conversion run from raw GLS syntax to a language.
     */
    export class Conversion {
        /**
         * The driving context for this conversion.Z
         */
        private context;
        /**
         * Raw lines of GLS syntax being converted.
         */
        private glsLines;
        /**
         * Accumulated clusters of code converted fromthe raw GLS syntax.
         */
        private allLineResults;
        /**
         * Accumulated imports retrieved from functions.
         */
        private imports;
        /**
         * Initializes a new instance of the Conversion class.
         */
        constructor(glsLines: string[], context: ConversionContext);
        /**
         * Converts the stored lines of GLS syntax to language code.
         *
         * @returns Converted lines of language code.
         */
        convert(): string[];
        /**
         * Generates line results from raw GLS syntax.
         */
        private generateAllLineResults();
        /**
         * Adds new imports to the stored imports.
         *
         * @param addedImports   New imports to store.
         */
        private addImports(addedImports);
        /**
         * Adds items to a package's stored imports.
         *
         * @param packageName   The name of a package.
         * @param items   Items to import from the package.
         */
        private addImportItems(packageName, items);
        /**
         * Transfers captured import statements from commands to line results.
         */
        private convertImportsToLineResults();
        /**
         * Converts a captured import statement to line results.
         *
         * @param packageName   The package name importing from.
         * @param items   Items being imported from the package.
         */
        private convertImportToLineResults(packageName, items);
        /**
         * Generates spaces equivalent to 4-space code tabbing.
         *
         * @param amount   How many tabs should be added.
         * @returns An all-spaces String of length = amount * 4.
         */
        private generateTabs(amount);
    }
}
declare module "Conversions/ConversionContext" {
    import { LineResults } from "Commands/LineResults";
    import { GlsParser } from "GlsParser";
    import { Language } from "Languages/Language";
    import { CaseStyle } from "Languages/Casing/CaseStyle";
    /**
     * Driving context to use a GlsParser with a language to produce code.
     */
    export class ConversionContext {
        /**
         * The language this context is converting GLS code into.
         */
        private language;
        /**
         * A converter for transforming raw GLS syntax into language code.
         */
        private parser;
        /**
         * Initializes a new instance of the ConversionContext class.
         *
         * @param language   The language this context is converting GLS code into.
         */
        constructor(language: Language);
        /**
         * @returns The language this context is converting GLS code into.
         */
        getLanguage(): Language;
        /**
         * @returns The converter for transforming raw GLS syntax into language code.
         */
        getParser(): GlsParser;
        /**
         * Converts raw GLS syntax to the context language.
         *
         * @param lines   Lines of raw GLS syntax.
         * @returns Equivalent lines of code in the context language.
         */
        convert(lines: string[]): string[];
        /**
         * Converts a single-line command with a single argument.
         *
         * @param command   The name of the command.
         * @param argumentRaw   A raw argument for the command.
         * @returns An equivalent line of code in the context language.
         */
        convertCommon(command: string, argumentRaw: string): string;
        /**
         * Converts a command with pre-parsed arguments.
         *
         * @param lineParsed   A parsed line from raw GLS syntax.
         * @returns The equivalent lines of code in the language.
         */
        convertParsed(parameters: string[]): LineResults;
        /**
         * Converts a name to a casing style.
         *
         * @param name   A name to convert.
         * @param casingStyle   A casing style.
         * @returns The name under the casing style.
         */
        convertToCase(name: string, casingStyle: CaseStyle): string;
    }
}
declare module "Commands/Parameters/Restrictions" {
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * Summary of parameter restrictions for a command.
     */
    export class Restrictions {
        /**
         * The minimum number of allowed parameters.
         */
        private minimum;
        /**
         * The maximum number of allowed parameters.
         */
        private maximum;
        /**
         * Known RepeatingParameters lengths above the minimum.
         */
        private intervals;
        /**
         * Initializes a new instance of the Restrictions class.
         *
         * @param parameters   Descriptions of parameters passed to a command.
         */
        constructor(parameters: Parameter[]);
        /**
         *
         * @remarks Having multiple intervals results in none being checked.
         * @todo Implement checking multiple intervals.
         */
        checkValidity(inputs: string[]): void;
        /**
         * Checks that command inputs are within the expected length range.
         *
         * @param inputs   Input parameters passed to a command.
         */
        private checkBasicRange(inputs);
        /**
         * Checks that command inputs match an extpected length interval.
         *
         * @param inputs   Input parameters passed to a command.
         */
        private checkIntervalRange(inputs);
        /**
         * @param number   A number of parameters.
         * @returns A sentence-ready description of the number.
         */
        private stringifyNumber(number);
        /**
         * Marks a single parameter's restrictions.
         *
         * @param parameter   A description of a parameter.
         */
        private addSingleParameter(parameter);
        /**
         * Marks a repeating parameter's restrictions.
         *
         * @param parameter   A description of a parameter.
         */
        private addRepeatingParameters(parameter);
    }
}
declare module "Commands/Command" {
    import { ConversionContext } from "Conversions/ConversionContext";
    import { Language } from "Languages/Language";
    import { CommandResult } from "Commands/CommandResult";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * Abstract base class for commands that may be rendered into language code.
     */
    export abstract class Command {
        /**
         * Default information on parameters a command takes in (none).
         */
        private static defaultParameters;
        /**
         * The driving context for converting the command.
         */
        protected context: ConversionContext;
        /**
         * A language to convert raw code into.
         */
        protected language: Language;
        /**
         * Whether this command'slines should end with a semicolon.
         */
        protected addsSemicolon: boolean;
        /**
         * Validity checker for provided parameters.
         */
        private parameterRestrictions;
        /**
         * Initializes a new instance of the Command class.
         *
         * @param context   The driving context for converting the command.
         */
        constructor(context: ConversionContext);
        /**
         * @returns Whether this command's lines should end with a semicolon.
         */
        getAddsSemicolon(): boolean;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Checks if parameters are valid, throwing an error if not.
         *
         * @param parameters   The command's name, followed by any parameters.
         */
        checkParameterValidity(parameters: string[]): void;
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        abstract render(parameters: string[]): LineResults;
        /**
         * Adds a portion of raw syntax that may contain endlines.
         *
         * @param lines   In-progress line(s) of code in the rendering language.
         * @param extra   Raw syntax to add to the lines.
         * @param indentation   How much indentation the last line should be.
         */
        protected addLineEnder(lines: CommandResult[], extra: string, indentation: any): void;
    }
}
declare module "Commands/ArrayInitializeCommand" {
    import { Command } from "Commands/Command";
    import { LineResults } from "Commands/LineResults";
    import { Parameter } from "Commands/Parameters/Parameter";
    /**
     * A command for initializing a new array.
     */
    export class ArrayInitializeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type[, item, ...]).
         */
        render(parameters: string[]): LineResults;
    }
}
declare module "Languages/CLikeLanguage" {
    import { Language } from "Languages/Language";
    import { ClassProperties } from "Languages/Properties/ClassProperties";
    import { ClassGenericProperties } from "Languages/Properties/ClassGenericProperties";
    import { ClassMemberVariableProperties } from "Languages/Properties/ClassMemberVariableProperties";
    import { CommentProperties } from "Languages/Properties/CommentProperties";
    import { ConditionalProperties } from "Languages/Properties/ConditionalProperties";
    import { EnumProperties } from "Languages/Properties/EnumProperties";
    import { ExceptionProperties } from "Languages/Properties/ExceptionProperties";
    import { FunctionProperties } from "Languages/Properties/FunctionProperties";
    import { LambdaProperties } from "Languages/Properties/LambdaProperties";
    import { LoopProperties } from "Languages/Properties/LoopProperties";
    import { OperatorProperties } from "Languages/Properties/OperatorProperties";
    import { StringProperties } from "Languages/Properties/StringProperties";
    import { StyleProperties } from "Languages/Properties/StyleProperties";
    import { VariableProperties } from "Languages/Properties/VariableProperties";
    /**
     * A summary of information for a C-like language.
     */
    export abstract class CLikeLanguage extends Language {
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: ClassProperties): void;
        /**
         * Generates metadata on class generics.
         *
         * @param members   A property container for metadata on class generics.
         */
        protected generateClassGenericProperties(generics: ClassGenericProperties): void;
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: ConditionalProperties): void;
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: EnumProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: FunctionProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: LambdaProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: LoopProperties): void;
        /**
         * Generates metadata on operators.
         *
         * @param operators   A property container for metadata on operators.
         */
        protected generateOperatorProperties(operators: OperatorProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        protected generateStyleProperties(style: StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: VariableProperties): void;
    }
}
declare module "Languages/CSharp" {
    import { CLikeLanguage } from "Languages/CLikeLanguage";
    import { ArrayProperties } from "Languages/Properties/ArrayProperties";
    import { BooleanProperties } from "Languages/Properties/BooleanProperties";
    import { ClassProperties } from "Languages/Properties/ClassProperties";
    import { ClassMemberVariableProperties } from "Languages/Properties/ClassMemberVariableProperties";
    import { CommentProperties } from "Languages/Properties/CommentProperties";
    import { ConditionalProperties } from "Languages/Properties/ConditionalProperties";
    import { DictionaryProperties } from "Languages/Properties/DictionaryProperties";
    import { EnumProperties } from "Languages/Properties/EnumProperties";
    import { ExceptionProperties } from "Languages/Properties/ExceptionProperties";
    import { FunctionProperties } from "Languages/Properties/FunctionProperties";
    import { GeneralProperties } from "Languages/Properties/GeneralProperties";
    import { ImportProperties } from "Languages/Properties/ImportProperties";
    import { LambdaProperties } from "Languages/Properties/LambdaProperties";
    import { ListProperties } from "Languages/Properties/ListProperties";
    import { LoopProperties } from "Languages/Properties/LoopProperties";
    import { NumberProperties } from "Languages/Properties/NumberProperties";
    import { OutputProperties } from "Languages/Properties/OutputProperties";
    import { StringProperties } from "Languages/Properties/StringProperties";
    import { StyleProperties } from "Languages/Properties/StyleProperties";
    import { VariableProperties } from "Languages/Properties/VariableProperties";
    /**
     * A summary of information for the C# language.
     */
    export class CSharp extends CLikeLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: ClassProperties): void;
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: ConditionalProperties): void;
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: DictionaryProperties): void;
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: EnumProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: FunctionProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: GeneralProperties): void;
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        protected generateImportProperties(imports: ImportProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: LambdaProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: NumberProperties): void;
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        protected generateOutputProperties(output: OutputProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        protected generateStyleProperties(style: StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: VariableProperties): void;
    }
}
declare module "Languages/Java" {
    import { CLikeLanguage } from "Languages/CLikeLanguage";
    import { ArrayProperties } from "Languages/Properties/ArrayProperties";
    import { BooleanProperties } from "Languages/Properties/BooleanProperties";
    import { ClassProperties } from "Languages/Properties/ClassProperties";
    import { ClassMemberVariableProperties } from "Languages/Properties/ClassMemberVariableProperties";
    import { CommentProperties } from "Languages/Properties/CommentProperties";
    import { ConditionalProperties } from "Languages/Properties/ConditionalProperties";
    import { DictionaryProperties } from "Languages/Properties/DictionaryProperties";
    import { EnumProperties } from "Languages/Properties/EnumProperties";
    import { ExceptionProperties } from "Languages/Properties/ExceptionProperties";
    import { FunctionProperties } from "Languages/Properties/FunctionProperties";
    import { GeneralProperties } from "Languages/Properties/GeneralProperties";
    import { ImportProperties } from "Languages/Properties/ImportProperties";
    import { LambdaProperties } from "Languages/Properties/LambdaProperties";
    import { ListProperties } from "Languages/Properties/ListProperties";
    import { LoopProperties } from "Languages/Properties/LoopProperties";
    import { NumberProperties } from "Languages/Properties/NumberProperties";
    import { OutputProperties } from "Languages/Properties/OutputProperties";
    import { StringProperties } from "Languages/Properties/StringProperties";
    import { StyleProperties } from "Languages/Properties/StyleProperties";
    import { VariableProperties } from "Languages/Properties/VariableProperties";
    /**
     * A summary of information for the Java language.
     */
    export class Java extends CLikeLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: ClassProperties): void;
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: ConditionalProperties): void;
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: DictionaryProperties): void;
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: EnumProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: FunctionProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: GeneralProperties): void;
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        protected generateImportProperties(imports: ImportProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: LambdaProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: NumberProperties): void;
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        protected generateOutputProperties(output: OutputProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        protected generateStyleProperties(style: StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: VariableProperties): void;
    }
}
declare module "Languages/PythonicLanguage" {
    import { Language } from "Languages/Language";
    import { ClassProperties } from "Languages/Properties/ClassProperties";
    import { ClassGenericProperties } from "Languages/Properties/ClassGenericProperties";
    import { ClassMemberVariableProperties } from "Languages/Properties/ClassMemberVariableProperties";
    import { ConditionalProperties } from "Languages/Properties/ConditionalProperties";
    import { DictionaryProperties } from "Languages/Properties/DictionaryProperties";
    import { EnumProperties } from "Languages/Properties/EnumProperties";
    import { ExceptionProperties } from "Languages/Properties/ExceptionProperties";
    import { FunctionProperties } from "Languages/Properties/FunctionProperties";
    import { LambdaProperties } from "Languages/Properties/LambdaProperties";
    import { ListProperties } from "Languages/Properties/ListProperties";
    import { LoopProperties } from "Languages/Properties/LoopProperties";
    import { OperatorProperties } from "Languages/Properties/OperatorProperties";
    import { StringProperties } from "Languages/Properties/StringProperties";
    import { StyleProperties } from "Languages/Properties/StyleProperties";
    import { VariableProperties } from "Languages/Properties/VariableProperties";
    /**
     * A summary of information for a Pythonic language.
     */
    export abstract class PythonicLanguage extends Language {
        /**
         * Generates metadata on classes.
         *
         * @param classes   The property container for metadata on classes.
         */
        protected generateClassProperties(classes: ClassProperties): void;
        /**
         * Generates metadata on class generics.
         *
         * @param generics   The property container for metadata on class generics.
         */
        protected generateClassGenericProperties(generics: ClassGenericProperties): void;
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   The property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: ConditionalProperties): void;
        /**
         * Generates properties on dictionaries.
         *
         * @param dictionaries   The property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: DictionaryProperties): void;
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: EnumProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   The property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   The property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: FunctionProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   The property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: LambdaProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   The property container for metadata on loops.
         */
        protected generateLoopProperties(loops: LoopProperties): void;
        /**
         * Generates metadata on operators.
         *
         * @param operators   The property container for metadata on operators.
         */
        protected generateOperatorProperties(operators: OperatorProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        protected generateStyleProperties(style: StyleProperties): void;
        /**
         * Generates metadata on strings.
         */
        protected generateStringProperties(strings: StringProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   The property container for metadata on variables.
         */
        protected generateVariableProperties(variables: VariableProperties): void;
    }
}
declare module "Languages/Python" {
    import { PythonicLanguage } from "Languages/PythonicLanguage";
    import { ArrayProperties } from "Languages/Properties/ArrayProperties";
    import { BooleanProperties } from "Languages/Properties/BooleanProperties";
    import { ClassProperties } from "Languages/Properties/ClassProperties";
    import { ClassMemberVariableProperties } from "Languages/Properties/ClassMemberVariableProperties";
    import { CommentProperties } from "Languages/Properties/CommentProperties";
    import { ConditionalProperties } from "Languages/Properties/ConditionalProperties";
    import { DictionaryProperties } from "Languages/Properties/DictionaryProperties";
    import { EnumProperties } from "Languages/Properties/EnumProperties";
    import { FunctionProperties } from "Languages/Properties/FunctionProperties";
    import { GeneralProperties } from "Languages/Properties/GeneralProperties";
    import { ImportProperties } from "Languages/Properties/ImportProperties";
    import { LambdaProperties } from "Languages/Properties/LambdaProperties";
    import { ListProperties } from "Languages/Properties/ListProperties";
    import { LoopProperties } from "Languages/Properties/LoopProperties";
    import { NumberProperties } from "Languages/Properties/NumberProperties";
    import { OutputProperties } from "Languages/Properties/OutputProperties";
    import { StringProperties } from "Languages/Properties/StringProperties";
    import { StyleProperties } from "Languages/Properties/StyleProperties";
    import { VariableProperties } from "Languages/Properties/VariableProperties";
    /**
     * A summary of information for the Python language.
     */
    export class Python extends PythonicLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: ClassProperties): void;
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: ConditionalProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: CommentProperties): void;
        /**
         * Generates properties on dictionaries.
         *
         * @param dictionaries   The property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: DictionaryProperties): void;
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: EnumProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: LambdaProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   The property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: FunctionProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: GeneralProperties): void;
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        protected generateImportProperties(imports: ImportProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on loops.
         */
        protected generateListProperties(lists: ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: NumberProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateOutputProperties(output: OutputProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        protected generateStyleProperties(style: StyleProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: StringProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: VariableProperties): void;
    }
}
declare module "Languages/Ruby" {
    import { PythonicLanguage } from "Languages/PythonicLanguage";
    import { ArrayProperties } from "Languages/Properties/ArrayProperties";
    import { BooleanProperties } from "Languages/Properties/BooleanProperties";
    import { ClassProperties } from "Languages/Properties/ClassProperties";
    import { ClassMemberVariableProperties } from "Languages/Properties/ClassMemberVariableProperties";
    import { CommentProperties } from "Languages/Properties/CommentProperties";
    import { ConditionalProperties } from "Languages/Properties/ConditionalProperties";
    import { DictionaryProperties } from "Languages/Properties/DictionaryProperties";
    import { EnumProperties } from "Languages/Properties/EnumProperties";
    import { FunctionProperties } from "Languages/Properties/FunctionProperties";
    import { GeneralProperties } from "Languages/Properties/GeneralProperties";
    import { ImportProperties } from "Languages/Properties/ImportProperties";
    import { LambdaProperties } from "Languages/Properties/LambdaProperties";
    import { ListProperties } from "Languages/Properties/ListProperties";
    import { LoopProperties } from "Languages/Properties/LoopProperties";
    import { NumberProperties } from "Languages/Properties/NumberProperties";
    import { OutputProperties } from "Languages/Properties/OutputProperties";
    import { StringProperties } from "Languages/Properties/StringProperties";
    import { StyleProperties } from "Languages/Properties/StyleProperties";
    import { VariableProperties } from "Languages/Properties/VariableProperties";
    /**
     * A summary of information for the Ruby language.
     */
    export class Ruby extends PythonicLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: ClassProperties): void;
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: ConditionalProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: CommentProperties): void;
        /**
         * Generates properties on dictionaries.
         *
         * @param dictionaries   The property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: DictionaryProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: GeneralProperties): void;
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: EnumProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   The property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: FunctionProperties): void;
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        protected generateImportProperties(imports: ImportProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: LambdaProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on loops.
         */
        protected generateListProperties(lists: ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: NumberProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateOutputProperties(output: OutputProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        protected generateStyleProperties(style: StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: VariableProperties): void;
    }
}
declare module "Languages/TypeScript" {
    import { CLikeLanguage } from "Languages/CLikeLanguage";
    import { ArrayProperties } from "Languages/Properties/ArrayProperties";
    import { BooleanProperties } from "Languages/Properties/BooleanProperties";
    import { ClassProperties } from "Languages/Properties/ClassProperties";
    import { ClassMemberVariableProperties } from "Languages/Properties/ClassMemberVariableProperties";
    import { CommentProperties } from "Languages/Properties/CommentProperties";
    import { ConditionalProperties } from "Languages/Properties/ConditionalProperties";
    import { DictionaryProperties } from "Languages/Properties/DictionaryProperties";
    import { EnumProperties } from "Languages/Properties/EnumProperties";
    import { ExceptionProperties } from "Languages/Properties/ExceptionProperties";
    import { FunctionProperties } from "Languages/Properties/FunctionProperties";
    import { GeneralProperties } from "Languages/Properties/GeneralProperties";
    import { ImportProperties } from "Languages/Properties/ImportProperties";
    import { LambdaProperties } from "Languages/Properties/LambdaProperties";
    import { ListProperties } from "Languages/Properties/ListProperties";
    import { LoopProperties } from "Languages/Properties/LoopProperties";
    import { NumberProperties } from "Languages/Properties/NumberProperties";
    import { OperatorProperties } from "Languages/Properties/OperatorProperties";
    import { OutputProperties } from "Languages/Properties/OutputProperties";
    import { StringProperties } from "Languages/Properties/StringProperties";
    import { StyleProperties } from "Languages/Properties/StyleProperties";
    import { VariableProperties } from "Languages/Properties/VariableProperties";
    /**
     * A summary of information for the TypeScript language.
     */
    export class TypeScript extends CLikeLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: ClassProperties): void;
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: ConditionalProperties): void;
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: DictionaryProperties): void;
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        protected generateEnumProperties(enums: EnumProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: FunctionProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: GeneralProperties): void;
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        protected generateImportProperties(imports: ImportProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: LambdaProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: NumberProperties): void;
        /**
         * Generates metadata on operators.
         *
         * @param operators   A property container for metadata on operators.
         */
        protected generateOperatorProperties(operators: OperatorProperties): void;
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        protected generateOutputProperties(output: OutputProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        protected generateStyleProperties(style: StyleProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: StringProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: VariableProperties): void;
    }
}
declare module "Languages/LanguagesBag" {
    import { CSharp } from "Languages/CSharp";
    import { Java } from "Languages/Java";
    import { Language } from "Languages/Language";
    import { Python } from "Languages/Python";
    import { Ruby } from "Languages/Ruby";
    import { TypeScript } from "Languages/TypeScript";
    /**
     * A quick lookup of standard languages.
     */
    export class LanguagesBag {
        /**
         * An instance of the CSharp class.
         */
        CSharp: CSharp;
        /**
         * An instance of the Java class.
         */
        Java: Java;
        /**
         * An instance of the CSharp class.
         */
        Python: Python;
        /**
         * An instance of the Ruby class.
         */
        Ruby: Ruby;
        /**
         * An instance of the TypeScript class.
         */
        TypeScript: TypeScript;
        /**
         * Known languages, keyed by name.
         */
        private languagesByName;
        /**
         * @returns Names of languages in the listing.
         */
        getLanguageNames(): string[];
        /**
         * Adds a language to the listing.
         *
         * @param name   The name of the language.
         * @param language   The language to add.
         */
        addLanguage(name: string, language: Language): void;
        /**
         * @param name   A name of a language.
         * @returns The language under that name.
         */
        getLanguage(name: string): Language;
    }
}
