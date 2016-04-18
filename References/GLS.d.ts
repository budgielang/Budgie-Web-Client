declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's arrays.
     */
    class ArrayProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's booleans.
     */
    class BooleanProperties {
        /**
         * The name of the boolean class.
         */
        className: string;
    }
}
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's classes.
     */
    class ClassGenericProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's class members.
     */
    class ClassMemberProperties {
        /**
         * Whether member functions need to be scope-bound to their callers.
         */
        functionGetBound: boolean;
        /**
         * How to start getting a member function, if bound.
         */
        functionGetLeft: string;
        /**
         * How to end getting a member function if bound, such as ".bind".
         */
        functionGetRight: string;
        /**
         * How to start declaring a member function.
         */
        functionStart: string;
        /**
         * Whether member functions explicitly take in a "this"/"self".
         */
        functionsTakeThis: boolean;
        /**
         * Whether the class supports privacy (public/protected/private).
         */
        privacy: boolean;
        /**
         * The keyword to declare a member private.
         */
        private: string;
        /**
         * The keyword to declare a member protected.
         */
        protected: string;
        /**
         * The keyword to declare a member public.
         */
        public: string;
        /**
         * How to mark a member as static, such as "static " or "@staticmethod\n".
         */
        staticDecorator: string;
        /**
         * How to start declaring a member variable.
         */
        variableStart: string;
        /**
         * A default decorator after member variables, such as "" or " = None".
         */
        variableDefault: string;
    }
}
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's lists.
     */
    class ListProperties {
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
    }
}
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on how to perform a native call, such as Array::push.
     */
    class NativeCallProperties {
        /**
         * Whether this is used as a function, rather than a property.
         */
        asFunction: boolean;
        /**
         * Whether this is a static function, rather than a member.
         */
        asStatic: boolean;
        /**
         * How this is called in the language.
         */
        name: string;
        /**
         * @param name   What the native call is called.
         * @returns A new NativeCallProperties describing a member function.
         */
        static NewMemberFunction(name: string): NativeCallProperties;
        /**
         * @param name   What the native call is called.
         * @returns A new NativeCallProperties describing a member propertiy.
         */
        static NewMemberProperty(name: string): NativeCallProperties;
        /**
         * @param name   What the native call is called.
         * @returns A new NativeCallProperties describing a static function.
         */
        static NewStaticFunction(name: string): NativeCallProperties;
    }
}
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's Strings.
     */
    class StringProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's classes.
     */
    class ClassProperties {
        /**
         * Aliases of types, from raw GLS syntax to this language's equivalents.
         */
        aliases: {
            [i: string]: string;
        };
        /**
         * Whether making a new instance is done via a static method, rather than new.
         */
        constructorAsStatic: boolean;
        /**
         * Whether constructors are named the same as their class.
         */
        constructorAsClassName: boolean;
        /**
         * The name of the constructor method, if not the class name.
         */
        constructorName: string;
        /**
         * Characters before an inherited class definition.
         */
        defineInheritanceLeft: string;
        /**
         * Characters after an inherited class definition.
         */
        defineInheritanceRight: string;
        /**
         * The last line of a class definition.
         */
        defineEnd: string;
        /**
         * How to start the first line of a class definition.
         */
        defineStartLeft: string;
        /**
         * How to end the first line of a class definition.
         */
        defineStartRight: string;
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
         * The keyword used for "this".
         */
        this: string;
    }
}
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's comments.
     */
    class CommentProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's conditionals.
     */
    class ConditionalProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's dictionaries.
     */
    class DictionaryProperties {
        /**
         * The name of the dictionary class.
         */
        className: string;
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
         * The name of the function to check if a key exists.
         */
        keyChecker: string;
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's exceptions.
     */
    class ExceptionProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's functions.
     */
    class FunctionProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's general properties.
     */
    class GeneralProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's lambdas.
     */
    class LambdaProperties {
        /**
         * How to start a lambda.
         */
        startLeft: string;
        /**
         * A string between the lambda arguments and body.
         */
        startMiddle: string;
        /**
         * How to end a lambda.
         */
        startRight: string;
        /**
         * Whether type declarations should be in interface form.
         */
        typeAsInterface: boolean;
        /**
         * Whether lambda interfaces must be declared before usage.
         */
        typeRequired: boolean;
        /**
         * How to start the first line of a type declaration.
         */
        typeStartLeft: string;
        /**
         * How to end the first line of a type declaration.
         */
        typeStartRight: string;
        /**
         * How to start the middle line of a type declaration.
         */
        typeMiddleLeft: string;
        /**
         * How to end the middle line of a type declaration.
         */
        typeMiddleRight: string;
        /**
         * How to start the last line of a type declaration.
         */
        typeEndLeft: string;
        /**
         * How to end the last line of a type declaration.
         */
        typeEndRight: string;
    }
}
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's loops.
     */
    class LoopProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's numbers.
     */
    class NumberProperties {
        /**
         * The name of the number class.
         */
        className: string;
    }
}
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's output.
     */
    class OutputProperties {
        /**
         * The function used for printing.
         */
        print: string;
    }
}
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's operators.
     */
    class OperatorProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's style.
     */
    class StyleProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's variables.
     */
    class VariableProperties {
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
declare namespace GLS.Languages.Properties {
    /**
     * Metadata on a language's syntax.
     */
    class LanguageProperties {
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
declare namespace GLS.Languages {
    /**
     * A summary of information for a single language.
     */
    abstract class Language {
        /**
         * Metadata about the language syntax.
         */
        properties: Properties.LanguageProperties;
        /**
         * Initializes a new instance of the Language class.
         */
        constructor();
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected abstract generateArrayProperties(arrays: Properties.ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected abstract generateBooleanProperties(booleans: Properties.BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected abstract generateClassProperties(classes: Properties.ClassProperties): void;
        /**
         * Generates metadata on class generics.
         *
         * @param members   A property container for metadata on class generics.
         */
        protected abstract generateClassGenericProperties(generics: Properties.ClassGenericProperties): void;
        /**
         * Generates metadata on classmembers.
         *
         * @param members   A property container for metadata on class members.
         */
        protected abstract generateClassMemberProperties(members: Properties.ClassMemberProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected abstract generateCommentProperties(comments: Properties.CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected abstract generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected abstract generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected abstract generateExceptionProperties(exceptions: Properties.ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected abstract generateFunctionProperties(functions: Properties.FunctionProperties): void;
        /**
         * Fills out metadata on general properties.
         */
        protected abstract generateGeneralProperties(general: Properties.GeneralProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected abstract generateLambdaProperties(lambdas: Properties.LambdaProperties): void;
        /**
         * Fills out metadata on lists.
         */
        protected abstract generateListProperties(lists: Properties.ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected abstract generateLoopProperties(loops: Properties.LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected abstract generateNumberProperties(numbers: Properties.NumberProperties): void;
        /**
         * Generates metadata on operators.
         *
         * @param operators   A property container for metadata on operators.
         */
        protected abstract generateOperatorProperties(operators: Properties.OperatorProperties): void;
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        protected abstract generateOutputProperties(operators: Properties.OutputProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected abstract generateStringProperties(strings: Properties.StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        protected abstract generateStyleProperties(style: Properties.StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected abstract generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
declare namespace GLS.Languages {
    /**
     * A summary of information for a C-like language.
     */
    abstract class CLikeLanguage extends Language {
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void;
        /**
         * Generates metadata on class generics.
         *
         * @param members   A property container for metadata on class generics.
         */
        protected generateClassGenericProperties(generics: Properties.ClassGenericProperties): void;
        /**
         * Generates metadata on classmembers.
         *
         * @param members   A property container for metadata on class members.
         */
        protected generateClassMemberProperties(members: Properties.ClassMemberProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: Properties.LambdaProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void;
        /**
         * Generates metadata on operators.
         *
         * @param operators   A property container for metadata on operators.
         */
        protected generateOperatorProperties(operators: Properties.OperatorProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
declare namespace GLS.Languages {
    /**
     * A summary of information for the C# language.
     */
    class CSharp extends CLikeLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: Properties.ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: Properties.NumberProperties): void;
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        protected generateOutputProperties(output: Properties.OutputProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
declare namespace GLS.Languages {
    /**
     * A summary of information for the Java language.
     */
    class Java extends CLikeLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: Properties.ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: Properties.NumberProperties): void;
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        protected generateOutputProperties(output: Properties.OutputProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
declare namespace GLS.Languages {
    /**
     * A summary of information for a Pythonic language.
     */
    abstract class PythonicLanguage extends Language {
        /**
         * Generates metadata on classes.
         *
         * @param classes   The property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void;
        /**
         * Generates metadata on class generics.
         *
         * @param generics   The property container for metadata on class generics.
         */
        protected generateClassGenericProperties(generics: Properties.ClassGenericProperties): void;
        /**
         * Generates metadata on class members.
         *
         * @param members   The property container for metadata on class members.
         */
        protected generateClassMemberProperties(members: Properties.ClassMemberProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   The property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;
        /**
         * Generates properties on dictionaries.
         *
         * @param dictionaries   The property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   The property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   The property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void;
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   The property container for metadata on lambdas.
         */
        protected generateLambdaProperties(lambdas: Properties.LambdaProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: Properties.ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   The property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void;
        /**
         * Generates metadata on operators.
         *
         * @param operators   The property container for metadata on operators.
         */
        protected generateOperatorProperties(operators: Properties.OperatorProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void;
        /**
         * Generates metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   The property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
declare namespace GLS.Languages {
    /**
     * A summary of information for the Python language.
     */
    class Python extends PythonicLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void;
        /**
         * Generates properties on dictionaries.
         *
         * @param dictionaries   The property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   The property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on loops.
         */
        protected generateListProperties(lists: Properties.ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: Properties.NumberProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateOutputProperties(output: Properties.OutputProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
declare namespace GLS.Languages {
    /**
     * A summary of information for the Ruby language.
     */
    class Ruby extends PythonicLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void;
        /**
         * Generates properties on dictionaries.
         *
         * @param dictionaries   The property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   The property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on loops.
         */
        protected generateListProperties(lists: Properties.ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: Properties.NumberProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateOutputProperties(output: Properties.OutputProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
declare namespace GLS.Languages {
    /**
     * A summary of information for the TypeScript language.
     */
    class TypeScript extends CLikeLanguage {
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void;
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void;
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void;
        /**
         * Generates metadata on class members.
         *
         * @param members   A property container for metadata on class members.
         */
        protected generateClassMemberProperties(members: Properties.ClassMemberProperties): void;
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void;
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        protected generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void;
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void;
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void;
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void;
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        protected generateListProperties(lists: Properties.ListProperties): void;
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void;
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        protected generateNumberProperties(numbers: Properties.NumberProperties): void;
        /**
         * Generates metadata on operators.
         *
         * @param operators   A property container for metadata on operators.
         */
        protected generateOperatorProperties(operators: Properties.OperatorProperties): void;
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        protected generateOutputProperties(output: Properties.OutputProperties): void;
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        protected generateStyleProperties(style: Properties.StyleProperties): void;
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void;
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
declare namespace GLS.Languages {
    /**
     * A quick lookup of standard languages.
     */
    class LanguagesBag {
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
declare namespace GLS.Commands {
    /**
     * A single line of code converted from raw GLS syntax.
     */
    class CommandResult {
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
declare namespace GLS.Commands {
    /**
     * A cluster of code converted from a line of GLS syntax.
     */
    class LineResults {
        /**
         * Text contents of the result.
         */
        commandResults: CommandResult[];
        /**
         * Whether this should have a semicolon appended.
         */
        addSemicolon: boolean;
        /**
         * Initializes a new instance of the LineResults class.
         *
         * @param commandResults   Lines of code converted fromthe GLS syntax.
         * @param addsSemicolon   Whether this should end with a semicolon.
         */
        constructor(commandResults: CommandResult[], addSemicolon: boolean);
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
declare namespace GLS.Commands.Parameters {
    /**
     * Some parameter(s) to be passed to a command.
     */
    abstract class Parameter {
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
declare namespace GLS.Commands {
    /**
     * Abstract base class for commands that may be rendered into language code.
     */
    abstract class Command {
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
        protected language: Languages.Language;
        /**
         * Whether this command'slines should end with a semicolon.
         */
        protected addsSemicolon: boolean;
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
        getParameters(): Parameters.Parameter[];
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
        /**
         * Throws an error if an incorrect number of parameters are passed.
         *
         * @param parameters   Parameters passed to a command.
         * @param minimum   The allowed number of parameters.
         */
        protected requireParametersLength(parameters: string[], amount: number): void;
        /**
         * Throws an error if not enough parameters are passed.
         *
         * @param parameters   Parameters passed to a command.
         * @param minimum   The minimum allowed number of parameters.
         */
        protected requireParametersLengthMinimum(parameters: string[], minimum: number): void;
        /**
         * Throws an error if too many parameters are passed.
         *
         * @param parameters   Parameters passed to a command.
         * @param minimum   The minimum allowed number of parameters.
         */
        protected requireParametersLengthMaximum(parameters: string[], maximum: number): void;
        /**
         * Throws an error if not enough or too many parameters are passed.
         *
         * @param parameters   Parameters passed to a command.
         * @param maximum   The maximum allowed number of parameters.
         * @param minimum   The minimum allowed number of parameters.
         */
        protected requireParametersLengthRange(parameters: string[], minimum: number, maximum: number): void;
        /**
         * Throws an error if an odd number of parameters are passed.
         *
         * @param parameters   Parameters passed to a command.
         */
        protected requireParametersLengthEven(parameters: string[]): void;
        /**
         * Throws an error if an even number of parameters are passed.
         *
         * @param parameters   Parameters passed to a command.
         */
        protected requireParametersLengthOdd(parameters: string[]): void;
    }
}
declare namespace GLS.Commands {
    /**
     * Constants used for creating commands.
     */
    class CommandStrings {
        /**
         * Raw name of the ArrayInitialize command.
         */
        static ArrayInitializeCommandName: string;
        /**
         * Raw name of the Literal command.
         */
        static LiteralCommandName: string;
        /**
         * Raw name of the Type command.
         */
        static TypeCommandName: string;
        /**
         * Generates a raw string of GLS syntax for a command and parameters.
         *
         * @param inputs   A command name followed by any number of parameters.
         * @returns A raw string of GLS syntax for the command and parameters.
         */
        static generateRawCommand(inputs: string[]): string;
    }
}
declare namespace GLS.Commands.Parameters {
    /**
     * Some number of repeating parameters.
     */
    class RepeatingParameters extends Parameter {
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
declare namespace GLS.Commands.Parameters {
    /**
     * A single named parameter.
     */
    class SingleParameter extends Parameter {
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
declare namespace GLS.Commands {
    /**
     * A command for initializing a new array.
     */
    class ArrayInitializeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for performing a native call, such as Array::push.
     */
    abstract class NativeCallCommand extends Command {
        /**
         * Metadata on how to perform the native call.
         */
        protected nativeCallProperties: Languages.Properties.NativeCallProperties;
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
        protected abstract retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties;
        /**
         * Renders the native call as a static.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        private renderAsStatic(parameters);
        /**
         * Renders the native call as a member.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        private renderAsMember(parameters);
    }
}
declare namespace GLS.Commands {
    /**
     * A command for a retrieving the length of an array.
     */
    class ArrayLengthCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties;
    }
}
declare namespace GLS.Commands {
    /**
     * A command for printing the "break" keyword.
     */
    class BreakCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for printing a comment block line.
     */
    class CommentBlockCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for ending a comment block.
     */
    class CommentBlockEndCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for starting a comment block.
     */
    class CommentBlockStartCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for ending a documentation block.
     */
    class CommentDocEndCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for starting a documentation block.
     */
    class CommentDocStartCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for printing a documentation tag.
     */
    class CommentDocTagCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for printing a comment line.
     */
    class CommentLineCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for printing the "continue" keyword.
     */
    class ContinueCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for concatenating strings.
     */
    class ConcatenateCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for the end of a new dictionary.
     */
    class DictionaryNewEndCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for starting to initialize a new dictionary.
     */
    class DictionaryNewStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
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
declare namespace GLS.Commands {
    /**
     * A command for an in-place dictionary initialization pair.
     */
    class DictionaryPairCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
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
declare namespace GLS.Commands {
    /**
     * A command for declaring a dictionary type.
     */
    class DictionaryTypeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
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
declare namespace GLS.Commands {
    /**
     * A command for the beginning of an elif statement.
     */
    class ElseIfStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for the beginning of an else statement.
     */
    class ElseStartCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for ending a file.
     */
    class FileEndCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for starting a file.
     */
    class FileStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for the end of a foreach loop.
     */
    class ForEachEndCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for the beginning of a foreach loop over a container's keys.
     */
    class ForEachKeyStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for the beginning of a foreach loop over a container's pairs.
     */
    class ForEachPairStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for the beginning of a for loop over numbers.
     */
    class ForNumbersStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A general command for the end of a conditional block.
     */
    class BlockEndCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for the end of a for loop over numbers.
     */
    class ForNumbersEndCommand extends BlockEndCommand {
    }
}
declare namespace GLS.Commands {
    /**
     * A command for the end of a function.
     */
    class FunctionEndCommand extends BlockEndCommand {
    }
}
declare namespace GLS.Commands {
    /**
     * A command for the beginning of a function.
     */
    class FunctionStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
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
declare namespace GLS.Commands {
    /**
     * A command for the end of an if statement.
     */
    class IfEndCommand extends BlockEndCommand {
    }
}
declare namespace GLS.Commands {
    /**
     * A command for the beginning of an if statement.
     */
    class IfStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for an indexed [] lookup.
     */
    class IndexCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for initializing a new list.
     */
    class ListInitializeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for retrieving the length of a list.
     */
    class ListLengthCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties;
    }
}
declare namespace GLS.Commands {
    /**
     * A command for a list push statement.
     */
    class ListPushCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties;
    }
}
declare namespace GLS.Commands {
    /**
     * A command for printing the input parameters directly.
     */
    class LiteralCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for ending a main function.
     */
    class MainEndCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for starting a main function.
     */
    class MainStartCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for printing a logical inverse.
     */
    class NotCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for printing an operation.
     */
    class OperationCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for printing an operator.
     */
    class OperatorCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for wrapping with parenthesis.
     */
    class ParenthesisCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for printing.
     */
    class PrintCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for returning in a function.
     */
    class ReturnCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for a searching for a substring in a string.
     */
    class StringIndexCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties;
    }
}
declare namespace GLS.Commands {
    /**
     * A command for a retrieving the length of an string.
     */
    class StringLengthCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
        /**
         * @returns Metadata on how to perform the native call.
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties;
    }
}
declare namespace GLS.Commands {
    /**
     * A command for printing the "this" keyword.
     */
    class ThisCommand extends Command {
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
declare namespace GLS.Commands {
    /**
     * A command for parsing a language's name for a type.
     */
    class TypeCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for printing a value.
     */
    class ValueCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for declaring a variable.
     */
    class VariableCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for declaring a variable inline (without a preceding "var ").
     */
    class VariableInlineCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for the start of declaring a variable.
     */
    class VariableStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A command for the end of a while loop.
     */
    class WhileEndCommand extends BlockEndCommand {
    }
}
declare namespace GLS.Commands {
    /**
     * A command for the beginning of a while loop.
     */
    class WhileStartCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
        /**
         * @returns Information on parameters this command takes in.
         */
        getParameters(): Parameters.Parameter[];
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
declare namespace GLS.Commands {
    /**
     * A container for globally known commands.
     */
    class CommandsBag {
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
        renderCommand(parameters: string[]): Commands.LineResults;
    }
}
declare namespace GLS {
    /**
     * Converter to transform raw GLS syntax into language code.
     */
    class GlsParser {
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
        parseCommand(line: string): Commands.LineResults;
        /**
         * Renders a parsed line into the equivalent language code.
         *
         * @param lineParsed   A parsed line from raw GLS syntax.
         * @returns The equivalent lines of code in the language.
         */
        renderParsedCommand(lineParsed: string[]): Commands.LineResults;
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
declare namespace GLS {
    /**
     * Driving context to use a GlsParser with a language to produce code.
     */
    class ConversionContext {
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
        constructor(language: Languages.Language);
        /**
         * @returns The language this context is converting GLS code into.
         */
        getLanguage(): Languages.Language;
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
        convertParsed(parameters: string[]): Commands.LineResults;
        /**
         * Generates spaces equivalent to 4-space code tabbing.
         *
         * @param amount   How many tabs should be added.
         * @returns An all-spaces String of length = amount * 4.
         */
        private generateTabs(amount);
    }
}
declare namespace GLS.Commands {
    /**
     * A command for initializing a new dictionary.
     */
    class DictionaryNewCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters;
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
