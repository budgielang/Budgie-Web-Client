var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("Languages/Properties/NativeCallProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Where native operations are called from.
     */
    (function (NativeCallScope) {
        /**
         * Called as a member of the calling object.
         */
        NativeCallScope[NativeCallScope["Member"] = 0] = "Member";
        /**
         * Called as an operator on or with the calling object.
         */
        NativeCallScope[NativeCallScope["Operator"] = 1] = "Operator";
        /**
         * Called as a global static.
         */
        NativeCallScope[NativeCallScope["Static"] = 2] = "Static";
    })(exports.NativeCallScope || (exports.NativeCallScope = {}));
    var NativeCallScope = exports.NativeCallScope;
    /**
     * How native operations are called.
     */
    (function (NativeCallType) {
        /**
         * An operator floating to the left of its caller.
         */
        NativeCallType[NativeCallType["FloatingLeft"] = 0] = "FloatingLeft";
        /**
         * An operator floating to the right of its caller.
         */
        NativeCallType[NativeCallType["FloatingRight"] = 1] = "FloatingRight";
        /**
         * An operation that exists as a function.
         */
        NativeCallType[NativeCallType["Function"] = 2] = "Function";
        /**
         * An operation as a single property.
         */
        NativeCallType[NativeCallType["Property"] = 3] = "Property";
    })(exports.NativeCallType || (exports.NativeCallType = {}));
    var NativeCallType = exports.NativeCallType;
    /**
     * Metadata on how to perform a native call, such as Array::push.
     */
    var NativeCallProperties = (function () {
        /**
         * Initializes a new instance of the NativeCallProperties class.
         *
         * @param name   What this is called.
         * @param scope   Where this is called from.
         * @param type   How this is called.
         */
        function NativeCallProperties(name, scope, type) {
            this.name = name;
            this.scope = scope;
            this.type = type;
        }
        return NativeCallProperties;
    }());
    exports.NativeCallProperties = NativeCallProperties;
});
define("Languages/Properties/ArrayProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's arrays.
     */
    var ArrayProperties = (function () {
        function ArrayProperties() {
        }
        return ArrayProperties;
    }());
    exports.ArrayProperties = ArrayProperties;
});
define("Languages/Properties/BooleanProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's booleans.
     */
    var BooleanProperties = (function () {
        function BooleanProperties() {
        }
        return BooleanProperties;
    }());
    exports.BooleanProperties = BooleanProperties;
});
define("Languages/Properties/ClassGenericProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's classes.
     */
    var ClassGenericProperties = (function () {
        function ClassGenericProperties() {
        }
        return ClassGenericProperties;
    }());
    exports.ClassGenericProperties = ClassGenericProperties;
});
define("Languages/Casing/CaseStyle", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Allowed casing preferences.
     */
    (function (CaseStyle) {
        /**
         * No preference on casing.
         */
        CaseStyle[CaseStyle["None"] = 0] = "None";
        /**
         * Camel case, such as myVariable.
         */
        CaseStyle[CaseStyle["CamelCase"] = 1] = "CamelCase";
        /**
         * File system case, such as "my/variable.
         */
        CaseStyle[CaseStyle["FileSystem"] = 2] = "FileSystem";
        /**
         * Packages in lower case, such as "my.variable".
         */
        CaseStyle[CaseStyle["PackageLowerCase"] = 3] = "PackageLowerCase";
        /**
         * Packages in upper case, such as "My.Variable".
         */
        CaseStyle[CaseStyle["PackageUpperCase"] = 4] = "PackageUpperCase";
        /**
         * Pascal case, such as MyVariable.
         */
        CaseStyle[CaseStyle["PascalCase"] = 5] = "PascalCase";
        /**
         * Snake case, such as my_variable.
         */
        CaseStyle[CaseStyle["SnakeCase"] = 6] = "SnakeCase";
    })(exports.CaseStyle || (exports.CaseStyle = {}));
    var CaseStyle = exports.CaseStyle;
});
define("Languages/Properties/ClassMemberVariableProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's class member variables.
     */
    var ClassMemberVariableProperties = (function () {
        function ClassMemberVariableProperties() {
        }
        return ClassMemberVariableProperties;
    }());
    exports.ClassMemberVariableProperties = ClassMemberVariableProperties;
});
define("Languages/Properties/ClassMemberProperties", ["require", "exports", "Languages/Properties/ClassMemberVariableProperties"], function (require, exports, ClassMemberVariableProperties_1) {
    "use strict";
    /**
     * Metadata on a language's class member variables.
     */
    var ClassMemberProperties = (function () {
        function ClassMemberProperties() {
            /**
             * Metadata on class member variables.
             */
            this.variables = new ClassMemberVariableProperties_1.ClassMemberVariableProperties();
        }
        return ClassMemberProperties;
    }());
    exports.ClassMemberProperties = ClassMemberProperties;
});
define("Languages/Properties/ListProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's lists.
     */
    var ListProperties = (function () {
        function ListProperties() {
        }
        return ListProperties;
    }());
    exports.ListProperties = ListProperties;
});
define("Languages/Properties/StringProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's Strings.
     */
    var StringProperties = (function () {
        function StringProperties() {
        }
        return StringProperties;
    }());
    exports.StringProperties = StringProperties;
});
define("Languages/Properties/ClassProperties", ["require", "exports", "Languages/Properties/ClassGenericProperties", "Languages/Properties/ClassMemberProperties"], function (require, exports, ClassGenericProperties_1, ClassMemberProperties_1) {
    "use strict";
    /**
     * Metadata on a language's classes.
     */
    var ClassProperties = (function () {
        function ClassProperties() {
            /**
             * Metadata on generic (templated) types.
             */
            this.generics = new ClassGenericProperties_1.ClassGenericProperties();
            /**
             * Metadata on class member variables and functions.
             */
            this.members = new ClassMemberProperties_1.ClassMemberProperties();
        }
        return ClassProperties;
    }());
    exports.ClassProperties = ClassProperties;
});
define("Languages/Properties/CommentProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's comments.
     */
    var CommentProperties = (function () {
        function CommentProperties() {
        }
        return CommentProperties;
    }());
    exports.CommentProperties = CommentProperties;
});
define("Languages/Properties/ConditionalProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's conditionals.
     */
    var ConditionalProperties = (function () {
        function ConditionalProperties() {
        }
        return ConditionalProperties;
    }());
    exports.ConditionalProperties = ConditionalProperties;
});
define("Languages/Properties/DictionaryProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's dictionaries.
     */
    var DictionaryProperties = (function () {
        function DictionaryProperties() {
        }
        return DictionaryProperties;
    }());
    exports.DictionaryProperties = DictionaryProperties;
});
define("Languages/Properties/EnumProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's enums.
     */
    var EnumProperties = (function () {
        function EnumProperties() {
        }
        return EnumProperties;
    }());
    exports.EnumProperties = EnumProperties;
});
define("Languages/Properties/ExceptionProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's exceptions.
     */
    var ExceptionProperties = (function () {
        function ExceptionProperties() {
        }
        return ExceptionProperties;
    }());
    exports.ExceptionProperties = ExceptionProperties;
});
define("Languages/Properties/FunctionProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's functions.
     */
    var FunctionProperties = (function () {
        function FunctionProperties() {
        }
        return FunctionProperties;
    }());
    exports.FunctionProperties = FunctionProperties;
});
define("Languages/Properties/GeneralProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's general properties.
     */
    var GeneralProperties = (function () {
        function GeneralProperties() {
        }
        return GeneralProperties;
    }());
    exports.GeneralProperties = GeneralProperties;
});
define("Languages/Properties/ImportProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's imports.
     */
    var ImportProperties = (function () {
        function ImportProperties() {
        }
        return ImportProperties;
    }());
    exports.ImportProperties = ImportProperties;
});
define("Languages/Properties/LambdaProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's lambdas.
     */
    var LambdaProperties = (function () {
        function LambdaProperties() {
        }
        return LambdaProperties;
    }());
    exports.LambdaProperties = LambdaProperties;
});
define("Languages/Properties/LoopProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's loops.
     */
    var LoopProperties = (function () {
        function LoopProperties() {
        }
        return LoopProperties;
    }());
    exports.LoopProperties = LoopProperties;
});
define("Languages/Properties/NumberProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's numbers.
     */
    var NumberProperties = (function () {
        function NumberProperties() {
        }
        return NumberProperties;
    }());
    exports.NumberProperties = NumberProperties;
});
define("Languages/Properties/OutputProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's output.
     */
    var OutputProperties = (function () {
        function OutputProperties() {
        }
        return OutputProperties;
    }());
    exports.OutputProperties = OutputProperties;
});
define("Languages/Properties/OperatorProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's operators.
     */
    var OperatorProperties = (function () {
        function OperatorProperties() {
        }
        /**
         * Initializes aliases based on the equivalent member properties.
         */
        OperatorProperties.prototype.generateAliases = function () {
            this.aliases = {
                "and": this.and,
                "decrease by": this.decreaseBy,
                "divide": this.divide,
                "divide by": this.divideBy,
                "equals": this.equals,
                "equal to": this.equalTo,
                "greater than": this.greaterThan,
                "greater than or equal to": this.greaterThanOrEqualTo,
                "increase by": this.increaseBy,
                "less than": this.lessThan,
                "less than or equal to": this.lessThanOrEqualTo,
                "minus": this.minus,
                "mod": this.mod,
                "multiply by": this.multiplyBy,
                "not": this.not,
                "not equal to": this.notEqualTo,
                "or": this.or,
                "plus": this.plus,
                "times": this.times
            };
        };
        return OperatorProperties;
    }());
    exports.OperatorProperties = OperatorProperties;
});
define("Languages/Properties/StyleProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's style.
     */
    var StyleProperties = (function () {
        function StyleProperties() {
        }
        return StyleProperties;
    }());
    exports.StyleProperties = StyleProperties;
});
define("Languages/Properties/VariableProperties", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Metadata on a language's variables.
     */
    var VariableProperties = (function () {
        function VariableProperties() {
        }
        return VariableProperties;
    }());
    exports.VariableProperties = VariableProperties;
});
define("Languages/Properties/LanguageProperties", ["require", "exports", "Languages/Properties/ArrayProperties", "Languages/Properties/BooleanProperties", "Languages/Properties/ClassProperties", "Languages/Properties/CommentProperties", "Languages/Properties/ConditionalProperties", "Languages/Properties/DictionaryProperties", "Languages/Properties/EnumProperties", "Languages/Properties/ExceptionProperties", "Languages/Properties/FunctionProperties", "Languages/Properties/GeneralProperties", "Languages/Properties/ImportProperties", "Languages/Properties/LambdaProperties", "Languages/Properties/ListProperties", "Languages/Properties/LoopProperties", "Languages/Properties/NumberProperties", "Languages/Properties/OutputProperties", "Languages/Properties/OperatorProperties", "Languages/Properties/StringProperties", "Languages/Properties/StyleProperties", "Languages/Properties/VariableProperties"], function (require, exports, ArrayProperties_1, BooleanProperties_1, ClassProperties_1, CommentProperties_1, ConditionalProperties_1, DictionaryProperties_1, EnumProperties_1, ExceptionProperties_1, FunctionProperties_1, GeneralProperties_1, ImportProperties_1, LambdaProperties_1, ListProperties_1, LoopProperties_1, NumberProperties_1, OutputProperties_1, OperatorProperties_1, StringProperties_1, StyleProperties_1, VariableProperties_1) {
    "use strict";
    /**
     * Metadata on a language's syntax.
     */
    var LanguageProperties = (function () {
        /**
         * Initializes a new instance of the LanguageProperties class.
         */
        function LanguageProperties() {
            this.arrays = new ArrayProperties_1.ArrayProperties();
            this.booleans = new BooleanProperties_1.BooleanProperties();
            this.classes = new ClassProperties_1.ClassProperties();
            this.comments = new CommentProperties_1.CommentProperties();
            this.conditionals = new ConditionalProperties_1.ConditionalProperties();
            this.dictionaries = new DictionaryProperties_1.DictionaryProperties();
            this.enums = new EnumProperties_1.EnumProperties();
            this.exceptions = new ExceptionProperties_1.ExceptionProperties();
            this.functions = new FunctionProperties_1.FunctionProperties();
            this.general = new GeneralProperties_1.GeneralProperties();
            this.imports = new ImportProperties_1.ImportProperties();
            this.lambdas = new LambdaProperties_1.LambdaProperties();
            this.lists = new ListProperties_1.ListProperties();
            this.loops = new LoopProperties_1.LoopProperties();
            this.numbers = new NumberProperties_1.NumberProperties();
            this.operators = new OperatorProperties_1.OperatorProperties();
            this.output = new OutputProperties_1.OutputProperties();
            this.strings = new StringProperties_1.StringProperties();
            this.style = new StyleProperties_1.StyleProperties();
            this.variables = new VariableProperties_1.VariableProperties();
        }
        return LanguageProperties;
    }());
    exports.LanguageProperties = LanguageProperties;
});
define("Languages/Language", ["require", "exports", "Languages/Properties/LanguageProperties"], function (require, exports, LanguageProperties_1) {
    "use strict";
    /**
     * A summary of information for a single language.
     */
    var Language = (function () {
        /**
         * Initializes a new instance of the Language class.
         */
        function Language() {
            this.properties = new LanguageProperties_1.LanguageProperties();
            this.generateArrayProperties(this.properties.arrays);
            this.generateBooleanProperties(this.properties.booleans);
            this.generateClassProperties(this.properties.classes);
            this.generateClassGenericProperties(this.properties.classes.generics);
            this.generateClassMemberVariableProperties(this.properties.classes.members.variables);
            this.generateCommentProperties(this.properties.comments);
            this.generateConditionalProperties(this.properties.conditionals);
            this.generateDictionaryProperties(this.properties.dictionaries);
            this.generateEnumProperties(this.properties.enums);
            this.generateExceptionProperties(this.properties.exceptions);
            this.generateFunctionProperties(this.properties.functions);
            this.generateGeneralProperties(this.properties.general);
            this.generateImportProperties(this.properties.imports);
            this.generateLambdaProperties(this.properties.lambdas);
            this.generateListProperties(this.properties.lists);
            this.generateLoopProperties(this.properties.loops);
            this.generateNumberProperties(this.properties.numbers);
            this.generateOperatorProperties(this.properties.operators);
            this.generateOutputProperties(this.properties.output);
            this.generateStringProperties(this.properties.strings);
            this.generateStyleProperties(this.properties.style);
            this.generateVariableProperties(this.properties.variables);
            this.properties.operators.generateAliases();
        }
        return Language;
    }());
    exports.Language = Language;
});
define("Commands/CommandResult", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * A single line of code converted from raw GLS syntax.
     */
    var CommandResult = (function () {
        /**
         * Initializes a new instance of the CommandResult class.
         *
         * @param text   Text contents of the result.
         * @param indentation   How much indentation will change from the result.
         */
        function CommandResult(text, indentation) {
            this.text = text;
            this.indentation = indentation;
        }
        return CommandResult;
    }());
    exports.CommandResult = CommandResult;
});
define("Commands/LineResults", ["require", "exports", "Commands/CommandResult"], function (require, exports, CommandResult_1) {
    "use strict";
    /**
     * A cluster of code converted from a line of GLS syntax.
     */
    var LineResults = (function () {
        /**
         * Initializes a new instance of the LineResults class.
         *
         * @param commandResults   Lines of code converted fromthe GLS syntax.
         * @param addsSemicolon   Whether this should end with a semicolon.
         */
        function LineResults(commandResults, addSemicolon) {
            this.commandResults = commandResults;
            this.addSemicolon = addSemicolon;
            this.addedImports = {};
        }
        /**
         *
         */
        LineResults.prototype.addImports = function (imports) {
            if (this.addedImports === undefined) {
                this.addedImports = imports;
                return;
            }
            for (var packageName in imports) {
                this.addedImports[packageName] = imports[packageName];
            }
        };
        /**
         * Creates a new result containing a single line with a semicolon.
         *
         * @param text   The contents of the line.
         * @param addSemicolon   Whether the line should end with a semicolon.
         * @returns A new single line result.
         */
        LineResults.newSingleLine = function (text, addSemicolon) {
            return new LineResults([new CommandResult_1.CommandResult(text, 0)], addSemicolon);
        };
        /**
         * Creates a new result containing the start or end of a block.
         *
         * @param text   The contents of the line.
         * @param indentation   How much the line changes indentation.
         * @returns A new block-changing line result.
         */
        LineResults.newBlockLine = function (text, indentation) {
            return new LineResults([new CommandResult_1.CommandResult(text, indentation)], false);
        };
        return LineResults;
    }());
    exports.LineResults = LineResults;
});
define("Commands/NativeCallCommand", ["require", "exports", "Languages/Properties/NativeCallProperties", "Commands/Command", "Commands/LineResults"], function (require, exports, NativeCallProperties_1, Command_1, LineResults_1) {
    "use strict";
    /**
     * A command for performing a native call, such as Array::push.
     */
    var NativeCallCommand = (function (_super) {
        __extends(NativeCallCommand, _super);
        /**
         * Initializes a new instance of the Command class.
         *
         * @param context   The driving context for converting the command.
         */
        function NativeCallCommand(context) {
            _super.call(this, context);
            this.nativeCallProperties = this.retrieveNativeCallProperties();
            this.scopeRenderers = (_a = {},
                _a[NativeCallProperties_1.NativeCallScope.Member] = this.renderAsMember.bind(this),
                _a[NativeCallProperties_1.NativeCallScope.Operator] = this.renderAsOperator.bind(this),
                _a[NativeCallProperties_1.NativeCallScope.Static] = this.renderAsStatic.bind(this),
                _a
            );
            var _a;
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        NativeCallCommand.prototype.render = function (parameters) {
            var scope = this.nativeCallProperties.scope;
            return this.scopeRenderers[scope](parameters);
        };
        /**
         * Renders the native call as a member.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        NativeCallCommand.prototype.renderAsMember = function (parameters) {
            var result = "";
            result += parameters[1] + ".";
            result += this.nativeCallProperties.name;
            if (this.nativeCallProperties.type === NativeCallProperties_1.NativeCallType.Function) {
                result += "(";
                if (parameters.length > 2) {
                    result += parameters[2];
                    for (var i = 3; i < parameters.length; i += 1) {
                        result += ", " + parameters[i];
                    }
                }
                result += ")";
            }
            return LineResults_1.LineResults.newSingleLine(result, true);
        };
        /**
         * Renders the native call as an operator.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, operand)
         */
        NativeCallCommand.prototype.renderAsOperator = function (parameters) {
            var result = "";
            if (this.nativeCallProperties.type === NativeCallProperties_1.NativeCallType.FloatingLeft) {
                result += parameters[2];
                result += this.nativeCallProperties.name;
                result += parameters[1];
            }
            else {
                result += parameters[1];
                result += this.nativeCallProperties.name;
                result += parameters[2];
            }
            return LineResults_1.LineResults.newSingleLine(result, true);
        };
        /**
         * Renders the native call as a static.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name[, parameters, ...]).
         */
        NativeCallCommand.prototype.renderAsStatic = function (parameters) {
            var result = "";
            result += this.nativeCallProperties.name;
            result += "(" + parameters[1];
            for (var i = 2; i < parameters.length; i += 1) {
                result += ", " + parameters[i];
            }
            result += ")";
            return LineResults_1.LineResults.newSingleLine(result, true);
        };
        return NativeCallCommand;
    }(Command_1.Command));
    exports.NativeCallCommand = NativeCallCommand;
});
define("Commands/Parameters/Parameter", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Some parameter(s) to be passed to a command.
     */
    var Parameter = (function () {
        /**
         * Initializes a new instance of the Parameter class.
         *
         * @param descriptor   A plain-text description of the parameter.
         */
        function Parameter(description) {
            this.description = description;
        }
        return Parameter;
    }());
    exports.Parameter = Parameter;
});
define("Commands/Parameters/SingleParameter", ["require", "exports", "Commands/Parameters/Parameter"], function (require, exports, Parameter_1) {
    "use strict";
    /**
     * A single named parameter.
     */
    var SingleParameter = (function (_super) {
        __extends(SingleParameter, _super);
        /**
         * Initializes a new instance of the Parameter class.
         *
         * @param descriptor   A plain-text description of the parameter.
         * @param parameters   Parameters contained inside.
         */
        function SingleParameter(name, description, required) {
            _super.call(this, description);
            this.name = name;
            this.required = required;
        }
        return SingleParameter;
    }(Parameter_1.Parameter));
    exports.SingleParameter = SingleParameter;
});
define("Commands/Parameters/RepeatingParameters", ["require", "exports", "Commands/Parameters/Parameter"], function (require, exports, Parameter_2) {
    "use strict";
    /**
     * Some number of repeating parameters.
     */
    var RepeatingParameters = (function (_super) {
        __extends(RepeatingParameters, _super);
        /**
         * Initializes a new instance of the Parameter class.
         *
         * @param descriptor   A plain-text description of the parameter.
         * @param parameters   Parameters contained inside.
         */
        function RepeatingParameters(description, parameters) {
            _super.call(this, description);
            this.parameters = parameters;
        }
        return RepeatingParameters;
    }(Parameter_2.Parameter));
    exports.RepeatingParameters = RepeatingParameters;
});
define("Commands/ArrayLengthCommand", ["require", "exports", "Commands/NativeCallCommand", "Commands/Parameters/SingleParameter"], function (require, exports, NativeCallCommand_1, SingleParameter_1) {
    "use strict";
    /**
     * A command for a retrieving the length of an array.
     */
    var ArrayLengthCommand = (function (_super) {
        __extends(ArrayLengthCommand, _super);
        function ArrayLengthCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ArrayLengthCommand.prototype.getParameters = function () {
            return ArrayLengthCommand.parameters;
        };
        /**
         * @returns Metadata on how to perform the native call.
         */
        ArrayLengthCommand.prototype.retrieveNativeCallProperties = function () {
            return this.language.properties.arrays.length;
        };
        /**
         * Information on parameters this command takes in.
         */
        ArrayLengthCommand.parameters = [
            new SingleParameter_1.SingleParameter("name", "The name of the variable.", true)
        ];
        return ArrayLengthCommand;
    }(NativeCallCommand_1.NativeCallCommand));
    exports.ArrayLengthCommand = ArrayLengthCommand;
});
define("Commands/BreakCommand", ["require", "exports", "Commands/Command", "Commands/LineResults"], function (require, exports, Command_2, LineResults_2) {
    "use strict";
    /**
     * A command for printing the "break" keyword.
     */
    var BreakCommand = (function (_super) {
        __extends(BreakCommand, _super);
        function BreakCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        BreakCommand.prototype.render = function (parameters) {
            var output = this.language.properties.loops.break;
            return LineResults_2.LineResults.newSingleLine(output, true);
        };
        return BreakCommand;
    }(Command_2.Command));
    exports.BreakCommand = BreakCommand;
});
define("Commands/BlockEndCommand", ["require", "exports", "Commands/Command", "Commands/LineResults"], function (require, exports, Command_3, LineResults_3) {
    "use strict";
    /**
     * A general command for the end of a conditional block.
     */
    var BlockEndCommand = (function (_super) {
        __extends(BlockEndCommand, _super);
        function BlockEndCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        BlockEndCommand.prototype.render = function (parameters) {
            var ender = this.renderBlockEnd();
            if (ender === "\0") {
                return LineResults_3.LineResults.newBlockLine("\0", -1);
            }
            return LineResults_3.LineResults.newBlockLine(ender, -1);
        };
        /**
         * Renders the default end block for conditionals.
         *
         * @returns The default end block for conditionals.
         */
        BlockEndCommand.prototype.renderBlockEnd = function () {
            return this.language.properties.conditionals.end;
        };
        return BlockEndCommand;
    }(Command_3.Command));
    exports.BlockEndCommand = BlockEndCommand;
});
define("Commands/ClassEndCommand", ["require", "exports", "Commands/BlockEndCommand"], function (require, exports, BlockEndCommand_1) {
    "use strict";
    /**
     * A command for the end of a class declaration.
     */
    var ClassEndCommand = (function (_super) {
        __extends(ClassEndCommand, _super);
        function ClassEndCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the end block for class declarations.
         *
         * @returns The end block for class declarations.
         */
        ClassEndCommand.prototype.renderBlockEnd = function () {
            return this.language.properties.classes.declareEnd;
        };
        return ClassEndCommand;
    }(BlockEndCommand_1.BlockEndCommand));
    exports.ClassEndCommand = ClassEndCommand;
});
define("Commands/ClassStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_4, CommandResult_2, LineResults_4, SingleParameter_2) {
    "use strict";
    /**
     * A command for starting to declare a class.
     */
    var ClassStartCommand = (function (_super) {
        __extends(ClassStartCommand, _super);
        function ClassStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ClassStartCommand.prototype.getParameters = function () {
            return ClassStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (classDescriptor[, parentClassDescriptor]).
         */
        ClassStartCommand.prototype.render = function (parameters) {
            var line = "";
            line += this.language.properties.classes.declareStartLeft;
            line += this.context.convertCommon("type", parameters[1]);
            if (parameters.length === 3) {
                line += this.language.properties.classes.declareExtendsLeft;
                line += this.context.convertCommon("type", parameters[2]);
                line += this.language.properties.classes.declareExtendsRight;
            }
            var lines = [new CommandResult_2.CommandResult(line, 0)];
            this.addLineEnder(lines, this.language.properties.classes.declareStartRight, 1);
            return new LineResults_4.LineResults(lines, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        ClassStartCommand.parameters = [
            new SingleParameter_2.SingleParameter("classDescriptor", "The class name and optional generics.", true),
            new SingleParameter_2.SingleParameter("parentClassDescriptor", "A parent class name and optional generics.", false)
        ];
        return ClassStartCommand;
    }(Command_4.Command));
    exports.ClassStartCommand = ClassStartCommand;
});
define("Commands/CommentBlockCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, Command_5, LineResults_5, SingleParameter_3, RepeatingParameters_1) {
    "use strict";
    /**
     * A command for printing a comment block line.
     */
    var CommentBlockCommand = (function (_super) {
        __extends(CommentBlockCommand, _super);
        function CommentBlockCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        CommentBlockCommand.prototype.getParameters = function () {
            return CommentBlockCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (contents, ...).
         */
        CommentBlockCommand.prototype.render = function (parameters) {
            var output = "";
            output += this.language.properties.comments.blockLineLeft;
            output += parameters.slice(1).join(" ");
            output += this.language.properties.comments.blockLineRight;
            return LineResults_5.LineResults.newSingleLine(output, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        CommentBlockCommand.parameters = [
            new RepeatingParameters_1.RepeatingParameters("Contents of the comment block line", [
                new SingleParameter_3.SingleParameter("word", "A word in the line.", false)
            ])
        ];
        return CommentBlockCommand;
    }(Command_5.Command));
    exports.CommentBlockCommand = CommentBlockCommand;
});
define("Commands/CommentBlockEndCommand", ["require", "exports", "Commands/Command", "Commands/LineResults"], function (require, exports, Command_6, LineResults_6) {
    "use strict";
    /**
     * A command for ending a comment block.
     */
    var CommentBlockEndCommand = (function (_super) {
        __extends(CommentBlockEndCommand, _super);
        function CommentBlockEndCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        CommentBlockEndCommand.prototype.render = function (parameters) {
            return LineResults_6.LineResults.newSingleLine(this.language.properties.comments.blockEnd, false);
        };
        return CommentBlockEndCommand;
    }(Command_6.Command));
    exports.CommentBlockEndCommand = CommentBlockEndCommand;
});
define("Commands/CommentBlockStartCommand", ["require", "exports", "Commands/Command", "Commands/LineResults"], function (require, exports, Command_7, LineResults_7) {
    "use strict";
    /**
     * A command for starting a comment block.
     */
    var CommentBlockStartCommand = (function (_super) {
        __extends(CommentBlockStartCommand, _super);
        function CommentBlockStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        CommentBlockStartCommand.prototype.render = function (parameters) {
            return LineResults_7.LineResults.newSingleLine(this.language.properties.comments.blockStart, false);
        };
        return CommentBlockStartCommand;
    }(Command_7.Command));
    exports.CommentBlockStartCommand = CommentBlockStartCommand;
});
define("Commands/CommentDocEndCommand", ["require", "exports", "Commands/Command", "Commands/LineResults"], function (require, exports, Command_8, LineResults_8) {
    "use strict";
    /**
     * A command for ending a documentation block.
     */
    var CommentDocEndCommand = (function (_super) {
        __extends(CommentDocEndCommand, _super);
        function CommentDocEndCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        CommentDocEndCommand.prototype.render = function (parameters) {
            return LineResults_8.LineResults.newSingleLine(this.language.properties.comments.docEnd, false);
        };
        return CommentDocEndCommand;
    }(Command_8.Command));
    exports.CommentDocEndCommand = CommentDocEndCommand;
});
define("Commands/CommentDocStartCommand", ["require", "exports", "Commands/Command", "Commands/LineResults"], function (require, exports, Command_9, LineResults_9) {
    "use strict";
    /**
     * A command for starting a documentation block.
     */
    var CommentDocStartCommand = (function (_super) {
        __extends(CommentDocStartCommand, _super);
        function CommentDocStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        CommentDocStartCommand.prototype.render = function (parameters) {
            return LineResults_9.LineResults.newSingleLine(this.language.properties.comments.docStart, false);
        };
        return CommentDocStartCommand;
    }(Command_9.Command));
    exports.CommentDocStartCommand = CommentDocStartCommand;
});
define("Commands/CommentDocTagCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/RepeatingParameters", "Commands/Parameters/SingleParameter"], function (require, exports, Command_10, CommandResult_3, LineResults_10, RepeatingParameters_2, SingleParameter_4) {
    "use strict";
    /**
     * A command for printing a documentation tag.
     */
    var CommentDocTagCommand = (function (_super) {
        __extends(CommentDocTagCommand, _super);
        function CommentDocTagCommand() {
            _super.apply(this, arguments);
            /**
             * A maximum length for tag lines.
             *
             * @todo Calculate this using language style (#16).
             * @todo Factor in indentation from this.context (#17).
             */
            this.MaximumLineLength = 70;
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        CommentDocTagCommand.prototype.getParameters = function () {
            return CommentDocTagCommand.parameters;
        };
        /**
         * Renders a command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (tag[, parameter][, comments]).
         */
        CommentDocTagCommand.prototype.render = function (parameters) {
            if (this.language.properties.comments.docAsXml) {
                return this.renderXmlDoc(parameters);
            }
            else {
                return this.renderJsDoc(parameters);
            }
        };
        /**
         * Renders a JSDoc-like command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        CommentDocTagCommand.prototype.renderXmlDoc = function (parameters) {
            var lineStart = this.language.properties.comments.docLineStart, tagRaw = parameters[1], tag = this.parseTag(tagRaw), commandResults = [], contentsRaw;
            var starter = lineStart + "<" + tag;
            if (this.language.properties.comments.docTagsWithParameters.hasOwnProperty(tagRaw)) {
                starter += " " + this.parseTagParameter(tagRaw, parameters[2]) + "=\"";
                starter += parameters[2];
                starter += "\">";
                contentsRaw = parameters.slice(3).join(" ");
            }
            else {
                starter += ">";
                contentsRaw = parameters.slice(2).join(" ");
            }
            commandResults.push(new CommandResult_3.CommandResult(starter, 0));
            var contents = this.wrapTagContents(lineStart, contentsRaw), contentsPadded = this.padContentsWithTag("", contents);
            for (var i = 0; i < contentsPadded.length; i += 1) {
                commandResults.push(new CommandResult_3.CommandResult(contentsPadded[i], 0));
            }
            var ender = this.language.properties.comments.docLineStart;
            ender += "</" + tag + ">";
            commandResults.push(new CommandResult_3.CommandResult(ender, 0));
            return new LineResults_10.LineResults(commandResults, false);
        };
        /**
         * Renders a JSDoc-like command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        CommentDocTagCommand.prototype.renderJsDoc = function (parameters) {
            var tagRaw = parameters[1], tagParsed = this.parseTag(tagRaw), tag = tagParsed + this.language.properties.comments.docTagEnd, contentsRaw;
            if (tagParsed === "\0") {
                tag = this.language.properties.comments.docTagStart;
            }
            else if (tagParsed !== "") {
                tag = this.language.properties.comments.docTagStart + tag;
            }
            if (this.language.properties.comments.docTagsWithParameters.hasOwnProperty(tagRaw)) {
                var parameterInfo = this.language.properties.comments.docTagsWithParameters[tagRaw];
                if (parameterInfo === "\0") {
                    contentsRaw = parameters.slice(2).join(" ");
                    tag = "";
                }
                else {
                    contentsRaw = parameters.slice(3).join(" ");
                    tag += parameters[2];
                    tag += this.language.properties.comments.docTagEnd;
                    tag += this.language.properties.comments.docTagSpaceAfter;
                }
            }
            else {
                contentsRaw = parameters.slice(2).join(" ");
            }
            if (tag === this.language.properties.comments.docTagEnd) {
                tag = "";
            }
            var contents = this.wrapTagContents(tag, contentsRaw), contentsPadded = this.padContentsWithTag(tag, contents), commandResults = [];
            for (var i = 0; i < contentsPadded.length; i += 1) {
                commandResults.push(new CommandResult_3.CommandResult(contentsPadded[i], 0));
            }
            return new LineResults_10.LineResults(commandResults, false);
        };
        /**
         * Transforms a tag and information content into a wrapped set of
         * lines for documentation.
         *
         * @param tag   A prefix for the lines.
         * @param contentsRaw   The raw information content.
         */
        CommentDocTagCommand.prototype.wrapTagContents = function (tag, contentsRaw) {
            var maximumContentsLength = this.MaximumLineLength
                - tag.length
                - this.language.properties.comments.docLineEnd.length;
            if (!this.language.properties.comments.docAsXml) {
                maximumContentsLength -= this.language.properties.comments.docLineStart.length;
            }
            if (contentsRaw.length <= maximumContentsLength) {
                return [contentsRaw];
            }
            return this.splitTextToLength(contentsRaw, maximumContentsLength);
        };
        /**
         * Splits a bunch of words into lines of a maximum length.
         *
         * @param text   Stringified words to be split.
         * @param length   A maximum length for lines.
         * @returns Lines of the original text.
         */
        CommentDocTagCommand.prototype.splitTextToLength = function (text, length) {
            var textSplit = text.split(" "), lines = [], line = "";
            for (var i = 0; i < textSplit.length; i += 1) {
                if (line.length + 1 + textSplit[i].length > length) {
                    lines.push(line);
                    line = textSplit[i];
                }
                else {
                    if (line !== "") {
                        line += " ";
                    }
                    line += textSplit[i];
                }
            }
            lines.push(line);
            return lines;
        };
        /**
         * Pads comment lines with a starting tag on the first line and spaces
         * on subsequent lines.
         *
         * @param tag   A starting tag to prefixthe first line.
         * @param contents   Comment lines to be padded.
         * @returns The contents, with the tag and padding in front.
         */
        CommentDocTagCommand.prototype.padContentsWithTag = function (tag, contents) {
            var results = [], starter = this.language.properties.comments.docLineStart;
            results.push(starter + tag + contents[0]);
            for (var i = 1; i < contents.length; i += 1) {
                results.push(starter + this.padLeft(contents[i], tag.length));
            }
            return results;
        };
        /**
         * Prefixes a String with some number of spaces.
         *
         * @param text   The text to pad.
         * @param spaces   How many spaces to pad it with.
         * @returns The text, padded with spaces.
         */
        CommentDocTagCommand.prototype.padLeft = function (text, spaces) {
            var padder = "";
            for (var i = 0; i < spaces; i += 1) {
                padder += " ";
            }
            return padder + text;
        };
        /**
         * @param tagRaw   A user-given documentationtag.
         * @returns An alias for tag if it exists, or the tag otherwise.
         */
        CommentDocTagCommand.prototype.parseTag = function (tagRaw) {
            if (this.language.properties.comments.docTagAliases.hasOwnProperty(tagRaw)) {
                return this.language.properties.comments.docTagAliases[tagRaw];
            }
            return tagRaw;
        };
        /**
         * @param tagRaw   A user-given documentation tag parameter.
         * @returns An alias for parameter if it exists, or the parameter otherwise.
         */
        CommentDocTagCommand.prototype.parseTagParameter = function (tag, parameter) {
            if (this.language.properties.comments.docTagsWithParameters.hasOwnProperty(tag)) {
                return this.language.properties.comments.docTagsWithParameters[tag];
            }
            return parameter;
        };
        /**
         * Information on parameters this command takes in.
         */
        CommentDocTagCommand.parameters = [
            new SingleParameter_4.SingleParameter("tag", "The name of the tag.", true),
            new SingleParameter_4.SingleParameter("parameter", "An optional descriptor for the tag.", false),
            new RepeatingParameters_2.RepeatingParameters("Comments regarding the tag", [])
        ];
        return CommentDocTagCommand;
    }(Command_10.Command));
    exports.CommentDocTagCommand = CommentDocTagCommand;
});
define("Commands/CommentLineCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, Command_11, LineResults_11, SingleParameter_5, RepeatingParameters_3) {
    "use strict";
    /**
     * A command for printing a comment line.
     */
    var CommentLineCommand = (function (_super) {
        __extends(CommentLineCommand, _super);
        function CommentLineCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        CommentLineCommand.prototype.getParameters = function () {
            return CommentLineCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (contents, ...).
         */
        CommentLineCommand.prototype.render = function (parameters) {
            var language = this.language, result = "";
            result += language.properties.comments.lineLeft;
            result += parameters.slice(1).join(" ");
            result += language.properties.comments.lineRight;
            return LineResults_11.LineResults.newSingleLine(result, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        CommentLineCommand.parameters = [
            new RepeatingParameters_3.RepeatingParameters("Contents of the comment line.", [
                new SingleParameter_5.SingleParameter("word", "A word in the line.", false)
            ])
        ];
        return CommentLineCommand;
    }(Command_11.Command));
    exports.CommentLineCommand = CommentLineCommand;
});
define("Commands/ConstructorEndCommand", ["require", "exports", "Commands/BlockEndCommand"], function (require, exports, BlockEndCommand_2) {
    "use strict";
    /**
     * A command for the end of a constructor.
     */
    var ConstructorEndCommand = (function (_super) {
        __extends(ConstructorEndCommand, _super);
        function ConstructorEndCommand() {
            _super.apply(this, arguments);
        }
        return ConstructorEndCommand;
    }(BlockEndCommand_2.BlockEndCommand));
    exports.ConstructorEndCommand = ConstructorEndCommand;
});
define("Commands/ConstructorStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/RepeatingParameters", "Commands/Parameters/SingleParameter"], function (require, exports, Command_12, CommandResult_4, LineResults_12, RepeatingParameters_4, SingleParameter_6) {
    "use strict";
    /**
     * A command for the beginning of a constructor.
     */
    var ConstructorStartCommand = (function (_super) {
        __extends(ConstructorStartCommand, _super);
        function ConstructorStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ConstructorStartCommand.prototype.getParameters = function () {
            return ConstructorStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        ConstructorStartCommand.prototype.render = function (parameters) {
            var declaration = "", output;
            if (this.language.properties.classes.constructorUsesKeyword) {
                declaration += this.language.properties.classes.constructorKeyword;
            }
            else {
                declaration += parameters[1];
            }
            declaration += "(";
            if (this.language.properties.classes.constructorTakesThis) {
                declaration += this.language.properties.classes.this;
                if (parameters.length > 3) {
                    declaration += ", ";
                }
            }
            if (parameters.length > 3) {
                declaration += this.generateParameterVariable(parameters, 2);
                for (var i = 4; i < parameters.length; i += 2) {
                    declaration += ", ";
                    declaration += this.generateParameterVariable(parameters, i);
                }
            }
            declaration += ")";
            output = [new CommandResult_4.CommandResult(declaration, 0)];
            this.addLineEnder(output, this.language.properties.functions.defineStartRight, 1);
            return new LineResults_12.LineResults(output, false);
        };
        /**
         * Generates a string for a parameter.
         *
         * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
         * @param i   An index in the parameters of a parameterName.
         * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
         */
        ConstructorStartCommand.prototype.generateParameterVariable = function (parameters, i) {
            if (!this.language.properties.variables.declarationRequired) {
                return parameters[i];
            }
            var parameterName = parameters[i];
            var parameterType = this.context.convertCommon("type", parameters[i + 1]);
            return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
        };
        /**
         * Information on parameters this command takes in.
         */
        ConstructorStartCommand.parameters = [
            new SingleParameter_6.SingleParameter("className", "The name of the class.", true),
            new RepeatingParameters_4.RepeatingParameters("Function parameters.", [
                new SingleParameter_6.SingleParameter("parameterName", "A named parameter for the constructor.", true),
                new SingleParameter_6.SingleParameter("parameterType", "The type of the parameter.", true)
            ])
        ];
        return ConstructorStartCommand;
    }(Command_12.Command));
    exports.ConstructorStartCommand = ConstructorStartCommand;
});
define("Commands/ContinueCommand", ["require", "exports", "Commands/Command", "Commands/LineResults"], function (require, exports, Command_13, LineResults_13) {
    "use strict";
    /**
     * A command for printing the "continue" keyword.
     */
    var ContinueCommand = (function (_super) {
        __extends(ContinueCommand, _super);
        function ContinueCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        ContinueCommand.prototype.render = function (parameters) {
            var output = this.language.properties.loops.continue;
            return LineResults_13.LineResults.newSingleLine(output, true);
        };
        return ContinueCommand;
    }(Command_13.Command));
    exports.ContinueCommand = ContinueCommand;
});
define("Commands/ConcatenateCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, Command_14, LineResults_14, SingleParameter_7, RepeatingParameters_5) {
    "use strict";
    /**
     * A command for concatenating strings.
     */
    var ConcatenateCommand = (function (_super) {
        __extends(ConcatenateCommand, _super);
        function ConcatenateCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ConcatenateCommand.prototype.getParameters = function () {
            return ConcatenateCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (string, string[, string, ...])
         */
        ConcatenateCommand.prototype.render = function (parameters) {
            var result = parameters[1];
            for (var i = 2; i < parameters.length; i += 1) {
                result += this.language.properties.strings.concatenate + parameters[i];
            }
            return LineResults_14.LineResults.newSingleLine(result, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        ConcatenateCommand.parameters = [
            new SingleParameter_7.SingleParameter("string", "A string to concatenate.", true),
            new SingleParameter_7.SingleParameter("string", "A string to concatenate.", true),
            new RepeatingParameters_5.RepeatingParameters("Additional strings to concatenate.", [
                new SingleParameter_7.SingleParameter("string", "A string to concatenate.", false)
            ])
        ];
        return ConcatenateCommand;
    }(Command_14.Command));
    exports.ConcatenateCommand = ConcatenateCommand;
});
define("Commands/DictionaryContainsKeyCommand", ["require", "exports", "Commands/NativeCallCommand", "Commands/Parameters/SingleParameter"], function (require, exports, NativeCallCommand_2, SingleParameter_8) {
    "use strict";
    /**
     * A command for a retrieving the length of an string.
     */
    var DictionaryContainsKeyCommand = (function (_super) {
        __extends(DictionaryContainsKeyCommand, _super);
        function DictionaryContainsKeyCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        DictionaryContainsKeyCommand.prototype.getParameters = function () {
            return DictionaryContainsKeyCommand.parameters;
        };
        /**
         * @returns Metadata on how to perform the native call.
         */
        DictionaryContainsKeyCommand.prototype.retrieveNativeCallProperties = function () {
            return this.language.properties.dictionaries.containsKey;
        };
        /**
         * Information on parameters this command takes in.
         */
        DictionaryContainsKeyCommand.parameters = [
            new SingleParameter_8.SingleParameter("dictionary", "A dictionary to check for key membership.", true),
            new SingleParameter_8.SingleParameter("key", "A key to check for membership in the dictionary.", true)
        ];
        return DictionaryContainsKeyCommand;
    }(NativeCallCommand_2.NativeCallCommand));
    exports.DictionaryContainsKeyCommand = DictionaryContainsKeyCommand;
});
define("Commands/DictionaryKeysCommand", ["require", "exports", "Commands/NativeCallCommand", "Commands/Parameters/SingleParameter"], function (require, exports, NativeCallCommand_3, SingleParameter_9) {
    "use strict";
    /**
     * A command for a retrieving the keys of a dictionary.
     */
    var DictionaryKeysCommand = (function (_super) {
        __extends(DictionaryKeysCommand, _super);
        function DictionaryKeysCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        DictionaryKeysCommand.prototype.getParameters = function () {
            return DictionaryKeysCommand.parameters;
        };
        /**
         * @returns Metadata on how to perform the native call.
         */
        DictionaryKeysCommand.prototype.retrieveNativeCallProperties = function () {
            return this.language.properties.dictionaries.keys;
        };
        /**
         * Information on parameters this command takes in.
         */
        DictionaryKeysCommand.parameters = [
            new SingleParameter_9.SingleParameter("dictionary", "A dictionary to retrieve the keys of.", true)
        ];
        return DictionaryKeysCommand;
    }(NativeCallCommand_3.NativeCallCommand));
    exports.DictionaryKeysCommand = DictionaryKeysCommand;
});
define("Commands/DictionaryNewCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_15, LineResults_15, SingleParameter_10) {
    "use strict";
    /**
     * A command for initializing a new dictionary.
     */
    var DictionaryNewCommand = (function (_super) {
        __extends(DictionaryNewCommand, _super);
        function DictionaryNewCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        DictionaryNewCommand.prototype.getParameters = function () {
            return DictionaryNewCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType).
         */
        DictionaryNewCommand.prototype.render = function (parameters) {
            if (!this.language.properties.dictionaries.initializeAsNew) {
                return LineResults_15.LineResults.newSingleLine("{}", false);
            }
            var output = "new ";
            output += this.language.properties.dictionaries.className;
            if (this.language.properties.classes.generics.used) {
                output += this.language.properties.classes.generics.left;
                output += this.context.convertCommon("type", parameters[1]);
                output += this.language.properties.classes.generics.middle;
                output += this.context.convertCommon("type", parameters[2]);
                output += this.language.properties.classes.generics.right;
            }
            output += "()";
            return LineResults_15.LineResults.newSingleLine(output, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        DictionaryNewCommand.parameters = [
            new SingleParameter_10.SingleParameter("keyType", "The type of the keys.", true),
            new SingleParameter_10.SingleParameter("valueType", "The type of the values", true)
        ];
        return DictionaryNewCommand;
    }(Command_15.Command));
    exports.DictionaryNewCommand = DictionaryNewCommand;
});
define("Commands/DictionaryNewEndCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults"], function (require, exports, Command_16, CommandResult_5, LineResults_16) {
    "use strict";
    /**
     * A command for the end of a new dictionary.
     */
    var DictionaryNewEndCommand = (function (_super) {
        __extends(DictionaryNewEndCommand, _super);
        function DictionaryNewEndCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        DictionaryNewEndCommand.prototype.render = function (parameters) {
            var ender = this.language.properties.dictionaries.initializeEnd;
            return new LineResults_16.LineResults([new CommandResult_5.CommandResult(ender, -1)], true);
        };
        return DictionaryNewEndCommand;
    }(Command_16.Command));
    exports.DictionaryNewEndCommand = DictionaryNewEndCommand;
});
define("Commands/DictionaryNewStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_17, CommandResult_6, LineResults_17, SingleParameter_11) {
    "use strict";
    /**
     * A command for starting to initialize a new dictionary.
     */
    var DictionaryNewStartCommand = (function (_super) {
        __extends(DictionaryNewStartCommand, _super);
        function DictionaryNewStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        DictionaryNewStartCommand.prototype.getParameters = function () {
            return DictionaryNewStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType).
         */
        DictionaryNewStartCommand.prototype.render = function (parameters) {
            if (!this.language.properties.dictionaries.initializeAsNew) {
                return LineResults_17.LineResults.newSingleLine("{", false);
            }
            var output = "new ";
            output += this.context.convertParsed(["dictionary type", parameters[1], parameters[2]]).commandResults[0].text;
            var results = [new CommandResult_6.CommandResult(output, 0)];
            this.addLineEnder(results, this.language.properties.dictionaries.initializeStart, 1);
            return new LineResults_17.LineResults(results, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        DictionaryNewStartCommand.parameters = [
            new SingleParameter_11.SingleParameter("keyType", "The type of the keys.", true),
            new SingleParameter_11.SingleParameter("valueType", "Tye type of the values", true)
        ];
        return DictionaryNewStartCommand;
    }(Command_17.Command));
    exports.DictionaryNewStartCommand = DictionaryNewStartCommand;
});
define("Commands/DictionaryPairCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_18, LineResults_18, SingleParameter_12) {
    "use strict";
    /**
     * A command for an in-place dictionary initialization pair.
     */
    var DictionaryPairCommand = (function (_super) {
        __extends(DictionaryPairCommand, _super);
        function DictionaryPairCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        DictionaryPairCommand.prototype.getParameters = function () {
            return DictionaryPairCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType[, comma]).
         */
        DictionaryPairCommand.prototype.render = function (parameters) {
            var results = "";
            results += this.language.properties.dictionaries.initializePairLeft;
            results += this.renderKey(parameters[1]);
            results += this.language.properties.dictionaries.initializePairMiddle;
            results += parameters[2];
            results += this.language.properties.dictionaries.initializePairRight;
            if (parameters.length === 4) {
                results += this.language.properties.dictionaries.initializePairComma;
            }
            return LineResults_18.LineResults.newSingleLine(results, false);
        };
        /**
         * Renders a quoted (string) or unquoted (variable) pair key.
         *
         * @param keyRaw   The raw key used for it.
         * @returns The key, wrapped as necessary.
         * @todo Add wrapping brackets as needed (research for Python, Ruby).
         */
        DictionaryPairCommand.prototype.renderKey = function (keyRaw) {
            var firstCharacter = keyRaw[0];
            var lastCharacter = keyRaw[keyRaw.length - 1];
            if (firstCharacter === "\"" && lastCharacter === "\"") {
                return keyRaw;
            }
            if (firstCharacter === "\"") {
                throw new Error("Dictionary pair keys that start with quotes must end with quotes.");
            }
            if (lastCharacter === "\"") {
                throw new Error("Dictionary pair keys that end with quotes must start with quotes.");
            }
            throw new Error("Variables as dictionary keys are not supported at this time.");
        };
        /**
         * Information on parameters this command takes in.
         */
        DictionaryPairCommand.parameters = [
            new SingleParameter_12.SingleParameter("key", "The pair key.", true),
            new SingleParameter_12.SingleParameter("value", "The pair value", true),
            new SingleParameter_12.SingleParameter("comma", "Whether a comma is needed", false)
        ];
        return DictionaryPairCommand;
    }(Command_18.Command));
    exports.DictionaryPairCommand = DictionaryPairCommand;
});
define("Commands/DictionaryTypeCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_19, LineResults_19, SingleParameter_13) {
    "use strict";
    /**
     * A command for declaring a dictionary type.
     */
    var DictionaryTypeCommand = (function (_super) {
        __extends(DictionaryTypeCommand, _super);
        function DictionaryTypeCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        DictionaryTypeCommand.prototype.getParameters = function () {
            return DictionaryTypeCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (keyType, valueType).
         */
        DictionaryTypeCommand.prototype.render = function (parameters) {
            var output = "";
            if (this.language.properties.dictionaries.initializeAsNew) {
                output += this.language.properties.dictionaries.className;
            }
            if (this.language.properties.classes.generics.used) {
                output += this.language.properties.dictionaries.typeLeft;
                output += this.context.convertCommon("type", parameters[1]);
                output += this.language.properties.dictionaries.typeMiddle;
                output += this.context.convertCommon("type", parameters[2]);
                output += this.language.properties.dictionaries.typeRight;
            }
            var results = LineResults_19.LineResults.newSingleLine(output, false);
            if (this.language.properties.dictionaries.requiredImports) {
                results.addImports(this.language.properties.dictionaries.requiredImports);
            }
            return results;
        };
        /**
         * Information on parameters this command takes in.
         */
        DictionaryTypeCommand.parameters = [
            new SingleParameter_13.SingleParameter("keyType", "The type of the keys.", true),
            new SingleParameter_13.SingleParameter("valueType", "The type of the values", true)
        ];
        return DictionaryTypeCommand;
    }(Command_19.Command));
    exports.DictionaryTypeCommand = DictionaryTypeCommand;
});
define("Commands/ElseIfStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_20, CommandResult_7, LineResults_20, SingleParameter_14) {
    "use strict";
    /**
     * A command for the beginning of an elif statement.
     */
    var ElseIfStartCommand = (function (_super) {
        __extends(ElseIfStartCommand, _super);
        function ElseIfStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ElseIfStartCommand.prototype.getParameters = function () {
            return ElseIfStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (conditional).
         */
        ElseIfStartCommand.prototype.render = function (parameters) {
            var lines = [new CommandResult_7.CommandResult("", -1)], line;
            if (!this.language.properties.style.separateBraceLines) {
                lines[0].text = "\0";
                lines.push(new CommandResult_7.CommandResult("", 0));
            }
            this.addLineEnder(lines, this.language.properties.conditionals.continueLeft, 0);
            line = lines[lines.length - 1];
            line.text += this.language.properties.conditionals.elif;
            line.text += this.language.properties.conditionals.startLeft;
            line.text += parameters[1];
            this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);
            return new LineResults_20.LineResults(lines, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        ElseIfStartCommand.parameters = [
            new SingleParameter_14.SingleParameter("conditional", "A conditional to check.", true)
        ];
        return ElseIfStartCommand;
    }(Command_20.Command));
    exports.ElseIfStartCommand = ElseIfStartCommand;
});
define("Commands/ElseStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults"], function (require, exports, Command_21, CommandResult_8, LineResults_21) {
    "use strict";
    /**
     * A command for the beginning of an else statement.
     */
    var ElseStartCommand = (function (_super) {
        __extends(ElseStartCommand, _super);
        function ElseStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        ElseStartCommand.prototype.render = function (parameters) {
            var lines = [new CommandResult_8.CommandResult("", -1)], indentation;
            if (!this.language.properties.style.separateBraceLines) {
                lines[0].text = "\0";
                lines.push(new CommandResult_8.CommandResult("", 0));
            }
            this.addLineEnder(lines, this.language.properties.conditionals.continueLeft, 0);
            lines[lines.length - 1].text += this.language.properties.conditionals.else;
            if (this.language.properties.style.separateBraceLines) {
                lines.push(new CommandResult_8.CommandResult("", 1));
            }
            else {
                lines[lines.length - 1].indentation = 1;
            }
            lines[lines.length - 1].text += this.language.properties.conditionals.continueRight;
            return new LineResults_21.LineResults(lines, false);
        };
        return ElseStartCommand;
    }(Command_21.Command));
    exports.ElseStartCommand = ElseStartCommand;
});
define("Commands/EnumCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_22, LineResults_22, SingleParameter_15) {
    "use strict";
    /**
     * A command for the retrieving an enum value by name.
     */
    var EnumCommand = (function (_super) {
        __extends(EnumCommand, _super);
        function EnumCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        EnumCommand.prototype.getParameters = function () {
            return EnumCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (enumName, memberName).
         */
        EnumCommand.prototype.render = function (parameters) {
            var result = "";
            result += this.language.properties.enums.valueLeft;
            result += parameters[1];
            result += this.language.properties.enums.valueMiddle;
            result += parameters[2];
            result += this.language.properties.enums.valueRight;
            return LineResults_22.LineResults.newSingleLine(result, true);
        };
        /**
         * Information on parameters this command takes in.
         */
        EnumCommand.parameters = [
            new SingleParameter_15.SingleParameter("enumName", "A container enum.", true),
            new SingleParameter_15.SingleParameter("memberName", "A member of the container enum.", true)
        ];
        return EnumCommand;
    }(Command_22.Command));
    exports.EnumCommand = EnumCommand;
});
define("Commands/EnumEndCommand", ["require", "exports", "Commands/BlockEndCommand"], function (require, exports, BlockEndCommand_3) {
    "use strict";
    /**
     * A command for ending an enum declaration.
     */
    var EnumEndCommand = (function (_super) {
        __extends(EnumEndCommand, _super);
        function EnumEndCommand() {
            _super.apply(this, arguments);
        }
        return EnumEndCommand;
    }(BlockEndCommand_3.BlockEndCommand));
    exports.EnumEndCommand = EnumEndCommand;
});
define("Commands/EnumMemberCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_23, LineResults_23, SingleParameter_16) {
    "use strict";
    /**
     * A command for the declaring an enum member value.
     */
    var EnumMemberCommand = (function (_super) {
        __extends(EnumMemberCommand, _super);
        function EnumMemberCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        EnumMemberCommand.prototype.getParameters = function () {
            return EnumMemberCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (memberName, memberValue[, ","]).
         */
        EnumMemberCommand.prototype.render = function (parameters) {
            var result = "";
            result += parameters[1];
            result += this.language.properties.enums.declareValueLeft;
            result += parameters[2];
            result += this.language.properties.enums.declareValueRight;
            if (parameters.length === 4) {
                result += this.language.properties.enums.declareCommaRight;
            }
            else {
                result += this.language.properties.enums.declareLastRight;
            }
            return LineResults_23.LineResults.newSingleLine(result, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        EnumMemberCommand.parameters = [
            new SingleParameter_16.SingleParameter("memberName", "A member of the container enum.", true),
            new SingleParameter_16.SingleParameter("memberValue", "A value for the enum member.", true),
            new SingleParameter_16.SingleParameter("comma", "Whether a comma is needed.", false)
        ];
        return EnumMemberCommand;
    }(Command_23.Command));
    exports.EnumMemberCommand = EnumMemberCommand;
});
define("Commands/EnumStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_24, CommandResult_9, LineResults_24, SingleParameter_17) {
    "use strict";
    /**
     * A command for starting to declare an enum.
     */
    var EnumStartCommand = (function (_super) {
        __extends(EnumStartCommand, _super);
        function EnumStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        EnumStartCommand.prototype.getParameters = function () {
            return EnumStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name).
         */
        EnumStartCommand.prototype.render = function (parameters) {
            var line = "";
            line += this.language.properties.enums.declareStartLeft;
            line += parameters[1];
            var lines = [new CommandResult_9.CommandResult(line, 0)];
            this.addLineEnder(lines, this.language.properties.enums.declareStartRight, 1);
            return new LineResults_24.LineResults(lines, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        EnumStartCommand.parameters = [
            new SingleParameter_17.SingleParameter("name", "The name of the enum.", true)
        ];
        return EnumStartCommand;
    }(Command_24.Command));
    exports.EnumStartCommand = EnumStartCommand;
});
define("Commands/FileEndCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_25, CommandResult_10, LineResults_25, SingleParameter_18) {
    "use strict";
    /**
     * A command for ending a file.
     */
    var FileEndCommand = (function (_super) {
        __extends(FileEndCommand, _super);
        function FileEndCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        FileEndCommand.prototype.getParameters = function () {
            return FileEndCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (fileName).
         */
        FileEndCommand.prototype.render = function (parameters) {
            var output = [], source = this.language.properties.style.fileEndLines;
            for (var i = 0; i < source.length; i += 1) {
                output.push(new CommandResult_10.CommandResult(source[i].replace("{0}", parameters[1]), 0));
            }
            if (output.length !== 0) {
                output[0].indentation = -this.language.properties.style.fileIndentation;
            }
            return new LineResults_25.LineResults(output, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        FileEndCommand.parameters = [
            new SingleParameter_18.SingleParameter("fileName", "The name of the file.", true)
        ];
        return FileEndCommand;
    }(Command_25.Command));
    exports.FileEndCommand = FileEndCommand;
});
define("Commands/FileStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_26, CommandResult_11, LineResults_26, SingleParameter_19) {
    "use strict";
    /**
     * A command for starting a file.
     */
    var FileStartCommand = (function (_super) {
        __extends(FileStartCommand, _super);
        function FileStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        FileStartCommand.prototype.getParameters = function () {
            return FileStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (fileName).
         */
        FileStartCommand.prototype.render = function (parameters) {
            var output = [], source = this.language.properties.style.fileStartLines;
            for (var i = 0; i < source.length; i += 1) {
                output.push(new CommandResult_11.CommandResult(source[i].replace("{0}", parameters[1]), 0));
            }
            if (output.length !== 0) {
                output[output.length - 1].indentation = this.language.properties.style.fileIndentation;
            }
            return new LineResults_26.LineResults(output, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        FileStartCommand.parameters = [
            new SingleParameter_19.SingleParameter("fileStart", "The name of the file.", true)
        ];
        return FileStartCommand;
    }(Command_26.Command));
    exports.FileStartCommand = FileStartCommand;
});
define("Commands/ForEachEndCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults"], function (require, exports, Command_27, CommandResult_12, LineResults_27) {
    "use strict";
    /**
     * A command for the end of a foreach loop.
     */
    var ForEachEndCommand = (function (_super) {
        __extends(ForEachEndCommand, _super);
        function ForEachEndCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        ForEachEndCommand.prototype.render = function (parameters) {
            var ender = this.language.properties.loops.forEachEnd;
            return new LineResults_27.LineResults([new CommandResult_12.CommandResult(ender, -1)], false);
        };
        return ForEachEndCommand;
    }(Command_27.Command));
    exports.ForEachEndCommand = ForEachEndCommand;
});
define("Commands/ForEachKeyStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_28, CommandResult_13, LineResults_28, SingleParameter_20) {
    "use strict";
    /**
     * A command for the beginning of a foreach loop over a container's keys.
     */
    var ForEachKeyStartCommand = (function (_super) {
        __extends(ForEachKeyStartCommand, _super);
        function ForEachKeyStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ForEachKeyStartCommand.prototype.getParameters = function () {
            return ForEachKeyStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        ForEachKeyStartCommand.prototype.render = function (parameters) {
            if (this.language.properties.loops.forEachAsMethod) {
                return this.renderForEachAsMethod(parameters);
            }
            else {
                return this.renderForEachAsLoop(parameters);
            }
        };
        /**
         * Renders a Ruby-style method iteration.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        ForEachKeyStartCommand.prototype.renderForEachAsMethod = function (parameters) {
            var output = parameters[1];
            output += this.language.properties.loops.forEachGetKeys;
            output += parameters[2];
            output += this.language.properties.loops.forEachRight;
            return new LineResults_28.LineResults([new CommandResult_13.CommandResult(output, 1)], false);
        };
        /**
         * Renders a traditional foreach loop.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        ForEachKeyStartCommand.prototype.renderForEachAsLoop = function (parameters) {
            var line = this.language.properties.loops.foreach, output;
            line += this.language.properties.conditionals.startLeft;
            if (this.language.properties.variables.declarationRequired) {
                var variableInline = this.context.convertParsed(["variable inline", parameters[2], parameters[3]]);
                line += this.language.properties.variables.declaration;
                line += variableInline.commandResults[0].text;
            }
            else {
                line += parameters[2];
            }
            line += this.language.properties.loops.forEachMiddle;
            line += parameters[1];
            line += this.language.properties.loops.forEachGetKeys;
            line += this.language.properties.loops.forEachRight;
            output = [new CommandResult_13.CommandResult(line, 0)];
            this.addLineEnder(output, this.language.properties.conditionals.startRight, 1);
            return new LineResults_28.LineResults(output, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        ForEachKeyStartCommand.parameters = [
            new SingleParameter_20.SingleParameter("container", "A container to iterate over.", true),
            new SingleParameter_20.SingleParameter("keyName", "The name of the iteration key variable.", true),
            new SingleParameter_20.SingleParameter("keyType", "The type of the iteration key variable.", true)
        ];
        return ForEachKeyStartCommand;
    }(Command_28.Command));
    exports.ForEachKeyStartCommand = ForEachKeyStartCommand;
});
define("Commands/ForEachPairStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_29, CommandResult_14, LineResults_29, SingleParameter_21) {
    "use strict";
    /**
     * A command for the beginning of a foreach loop over a container's pairs.
     */
    var ForEachPairStartCommand = (function (_super) {
        __extends(ForEachPairStartCommand, _super);
        function ForEachPairStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ForEachPairStartCommand.prototype.getParameters = function () {
            return ForEachPairStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        ForEachPairStartCommand.prototype.render = function (parameters) {
            if (this.language.properties.loops.forEachAsMethod) {
                return this.renderForEachAsMethod(parameters);
            }
            else {
                return this.renderForEachAsLoop(parameters);
            }
        };
        /**
         * Renders a Ruby-style method iteration.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        ForEachPairStartCommand.prototype.renderForEachAsMethod = function (parameters) {
            var output = parameters[1];
            output += this.language.properties.loops.forEachGetPairs;
            output += parameters[3];
            output += ", ";
            output += parameters[5];
            output += this.language.properties.loops.forEachRight;
            return new LineResults_29.LineResults([new CommandResult_14.CommandResult(output, 1)], false);
        };
        /**
         * Renders a traditional foreach loop.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        ForEachPairStartCommand.prototype.renderForEachAsLoop = function (parameters) {
            var line = this.language.properties.loops.foreach, output;
            line += this.language.properties.conditionals.startLeft;
            // This assumes that all languages that require declared variables (like C#) use
            // something like KeyValuePair<T, U> while languages that don't (like Python) use
            // something like key, value.
            if (this.language.properties.variables.declarationRequired) {
                var typeName = void 0;
                var iteratorName = void 0;
                if (this.language.properties.loops.forEachPairsAsKeys) {
                    iteratorName = parameters[3];
                }
                else {
                    iteratorName = parameters[2];
                }
                if (this.language.properties.loops.forEachPairsAsPair) {
                    typeName = this.language.properties.loops.forEachPairsPairClass;
                    typeName += "<" + parameters[4];
                    typeName += ", " + parameters[6] + ">";
                }
                else {
                    typeName = parameters[4];
                }
                line += this.language.properties.variables.declaration;
                line += this.context.convertParsed(["variable inline", iteratorName, typeName]).commandResults[0].text;
            }
            else {
                line += parameters[3];
                if (this.language.properties.loops.forEachPairsAsPair) {
                    line += ", " + parameters[5];
                }
            }
            line += this.language.properties.loops.forEachMiddle;
            line += parameters[1];
            line += this.language.properties.loops.forEachGetPairs;
            line += this.language.properties.loops.forEachRight;
            output = [new CommandResult_14.CommandResult(line, 0)];
            this.addLineEnder(output, this.language.properties.conditionals.startRight, 1);
            if (this.language.properties.loops.forEachPairsAsPair && this.language.properties.variables.declarationRequired) {
                this.addPairKeyLookup(parameters, output);
                this.addPairValueLookup(parameters, output);
            }
            else if (this.language.properties.loops.forEachPairsAsKeys) {
                this.addKeyedValueLookup(parameters, output);
            }
            return new LineResults_29.LineResults(output, false);
        };
        /**
         * Adds the retrieval of a pair's key.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @param output Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        ForEachPairStartCommand.prototype.addPairKeyLookup = function (parameters, output) {
            var keyName = this.context.convertCommon("type", parameters[3]);
            var keyType = parameters[4];
            var keyLookup = parameters[2] + this.language.properties.loops.forEachPairsRetrieveKey;
            var keyVariable = this.context.convertParsed(["variable", keyName, keyType, keyLookup]).commandResults[0].text;
            keyVariable += this.language.properties.style.semicolon;
            output.push(new CommandResult_14.CommandResult(keyVariable, 0));
        };
        /**
         * Adds the retrieval of a pair's key and value.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @param output Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        ForEachPairStartCommand.prototype.addPairValueLookup = function (parameters, output) {
            var valueName = this.context.convertCommon("type", parameters[5]);
            var valueType = parameters[6];
            var valueLookup = parameters[2] + this.language.properties.loops.forEachPairsRetrieveValue;
            var valueVariable = this.context.convertParsed(["variable", valueName, valueType, valueLookup]).commandResults[0].text;
            valueVariable += this.language.properties.style.semicolon;
            output.push(new CommandResult_14.CommandResult(valueVariable, 0));
        };
        /**
         * Adds the retrieval of a container's value from a key.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @param output Line(s) of code in the language.
         * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
         */
        ForEachPairStartCommand.prototype.addKeyedValueLookup = function (parameters, output) {
            var valueName = this.context.convertCommon("type", parameters[5]);
            var valueType = parameters[6];
            var valueLookup = this.context.convertParsed(["index", parameters[1], parameters[3]]).commandResults[0].text;
            var valueVariable = this.context.convertParsed(["variable", valueName, valueType, valueLookup]).commandResults[0].text;
            valueVariable += this.language.properties.style.semicolon;
            output.push(new CommandResult_14.CommandResult(valueVariable, 0));
        };
        /**
         * Information on parameters this command takes in.
         */
        ForEachPairStartCommand.parameters = [
            new SingleParameter_21.SingleParameter("container", "A container to iterate over.", true),
            new SingleParameter_21.SingleParameter("pairName", "The name of the pair variable", true),
            new SingleParameter_21.SingleParameter("keyName", "The name of the key variable.", true),
            new SingleParameter_21.SingleParameter("keyType", "The type of the key variable.", true),
            new SingleParameter_21.SingleParameter("valueName", "The name of the value variable.", true),
            new SingleParameter_21.SingleParameter("valueType", "The type of the value variable.", true)
        ];
        return ForEachPairStartCommand;
    }(Command_29.Command));
    exports.ForEachPairStartCommand = ForEachPairStartCommand;
});
define("Commands/ForNumbersStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_30, CommandResult_15, LineResults_30, SingleParameter_22) {
    "use strict";
    /**
     * A command for the beginning of a for loop over numbers.
     */
    var ForNumbersStartCommand = (function (_super) {
        __extends(ForNumbersStartCommand, _super);
        function ForNumbersStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ForNumbersStartCommand.prototype.getParameters = function () {
            return ForNumbersStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, start, end).
         */
        ForNumbersStartCommand.prototype.render = function (parameters) {
            var starter;
            if (this.language.properties.loops.rangedForLoops) {
                starter = this.renderStartRanged(parameters);
            }
            else {
                starter = this.renderStartLoop(parameters);
            }
            var lines = [new CommandResult_15.CommandResult(starter, 0)];
            this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);
            return new LineResults_30.LineResults(lines, false);
        };
        /**
         * Renders a Pythonic ranged loop.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, start, end).
         */
        ForNumbersStartCommand.prototype.renderStartRanged = function (parameters) {
            var output = this.language.properties.loops.for;
            output += this.language.properties.conditionals.startLeft;
            output += parameters[1];
            output += this.language.properties.loops.rangedForLoopsLeft;
            output += parameters[3];
            output += this.language.properties.loops.rangedForLoopsMiddle;
            output += parameters[4];
            output += this.language.properties.loops.rangedForLoopsRight;
            return output;
        };
        /**
         * Renders a traditional loop.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, start, end).
         */
        ForNumbersStartCommand.prototype.renderStartLoop = function (parameters) {
            var output = this.language.properties.loops.for;
            output += this.language.properties.conditionals.startLeft;
            output += this.context.convertParsed(["variable", parameters[1], parameters[2], parameters[3]]).commandResults[0].text;
            output += this.language.properties.style.semicolon + " ";
            output += this.context.convertParsed(["operation", parameters[1], "less than", parameters[4]]).commandResults[0].text;
            output += this.language.properties.style.semicolon + " ";
            output += this.context.convertParsed(["operation", parameters[1], "increase by", "1"]).commandResults[0].text;
            return output;
        };
        /**
         * Information on parameters this command takes in.
         */
        ForNumbersStartCommand.parameters = [
            new SingleParameter_22.SingleParameter("name", "The name of the loop variable.", true),
            new SingleParameter_22.SingleParameter("type", "The type of the loop variable", true),
            new SingleParameter_22.SingleParameter("start", "What the loop variable starts at.", true),
            new SingleParameter_22.SingleParameter("end", "What the loop variable ends at.", true)
        ];
        return ForNumbersStartCommand;
    }(Command_30.Command));
    exports.ForNumbersStartCommand = ForNumbersStartCommand;
});
define("Commands/ForNumbersEndCommand", ["require", "exports", "Commands/BlockEndCommand"], function (require, exports, BlockEndCommand_4) {
    "use strict";
    /**
     * A command for the end of a for loop over numbers.
     */
    var ForNumbersEndCommand = (function (_super) {
        __extends(ForNumbersEndCommand, _super);
        function ForNumbersEndCommand() {
            _super.apply(this, arguments);
        }
        return ForNumbersEndCommand;
    }(BlockEndCommand_4.BlockEndCommand));
    exports.ForNumbersEndCommand = ForNumbersEndCommand;
});
define("Commands/FunctionEndCommand", ["require", "exports", "Commands/BlockEndCommand"], function (require, exports, BlockEndCommand_5) {
    "use strict";
    /**
     * A command for the end of a function.
     */
    var FunctionEndCommand = (function (_super) {
        __extends(FunctionEndCommand, _super);
        function FunctionEndCommand() {
            _super.apply(this, arguments);
        }
        return FunctionEndCommand;
    }(BlockEndCommand_5.BlockEndCommand));
    exports.FunctionEndCommand = FunctionEndCommand;
});
define("Commands/FunctionStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/RepeatingParameters", "Commands/Parameters/SingleParameter"], function (require, exports, Command_31, CommandResult_16, LineResults_31, RepeatingParameters_6, SingleParameter_23) {
    "use strict";
    /**
     * A command for the beginning of a function.
     */
    var FunctionStartCommand = (function (_super) {
        __extends(FunctionStartCommand, _super);
        function FunctionStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        FunctionStartCommand.prototype.getParameters = function () {
            return FunctionStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @remarks Usage: (name, returnType[, parameterName, parameterType, ...]).
         */
        FunctionStartCommand.prototype.render = function (parameters) {
            var returnType = this.context.convertCommon("type", parameters[2]), declaration = "", output;
            if (this.language.properties.functions.explicitReturns && !this.language.properties.functions.returnTypeAfterName) {
                declaration += returnType;
            }
            declaration += this.language.properties.functions.defineStartLeft;
            declaration += parameters[1] + "(";
            if (parameters.length > 3) {
                declaration += this.generateParameterVariable(parameters, 3);
                for (var i = 5; i < parameters.length; i += 2) {
                    declaration += ", ";
                    declaration += this.generateParameterVariable(parameters, i);
                }
            }
            declaration += ")";
            if (this.language.properties.functions.explicitReturns && this.language.properties.functions.returnTypeAfterName) {
                declaration += this.language.properties.functions.returnTypeMarker;
                declaration += returnType;
            }
            output = [new CommandResult_16.CommandResult(declaration, 0)];
            this.addLineEnder(output, this.language.properties.functions.defineStartRight, 1);
            return new LineResults_31.LineResults(output, false);
        };
        /**
         * Generates a string for a parameter.
         *
         * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
         * @param i   An index in the parameters of a parameterName.
         * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
         */
        FunctionStartCommand.prototype.generateParameterVariable = function (parameters, i) {
            if (!this.language.properties.variables.declarationRequired) {
                return parameters[i];
            }
            var parameterName = parameters[i];
            var parameterType = this.context.convertCommon("type", parameters[i + 1]);
            return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
        };
        /**
         * Information on parameters this command takes in.
         */
        FunctionStartCommand.parameters = [
            new SingleParameter_23.SingleParameter("name", "The name of the function.", true),
            new SingleParameter_23.SingleParameter("returnType", "The return type of the function.", true),
            new RepeatingParameters_6.RepeatingParameters("Function parameters.", [
                new SingleParameter_23.SingleParameter("parameterName", "A named parameter for the function.", true),
                new SingleParameter_23.SingleParameter("parameterType", "The type of the parameter.", true)
            ])
        ];
        return FunctionStartCommand;
    }(Command_31.Command));
    exports.FunctionStartCommand = FunctionStartCommand;
});
define("Commands/IfEndCommand", ["require", "exports", "Commands/BlockEndCommand"], function (require, exports, BlockEndCommand_6) {
    "use strict";
    /**
     * A command for the end of an if statement.
     */
    var IfEndCommand = (function (_super) {
        __extends(IfEndCommand, _super);
        function IfEndCommand() {
            _super.apply(this, arguments);
        }
        return IfEndCommand;
    }(BlockEndCommand_6.BlockEndCommand));
    exports.IfEndCommand = IfEndCommand;
});
define("Commands/IfStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_32, CommandResult_17, LineResults_32, SingleParameter_24) {
    "use strict";
    /**
     * A command for the beginning of an if statement.
     */
    var IfStartCommand = (function (_super) {
        __extends(IfStartCommand, _super);
        function IfStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        IfStartCommand.prototype.getParameters = function () {
            return IfStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (conditional).
         */
        IfStartCommand.prototype.render = function (parameters) {
            var line = this.language.properties.conditionals.if;
            line += this.language.properties.conditionals.startLeft;
            line += parameters[1];
            var lines = [new CommandResult_17.CommandResult(line, 0)];
            this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);
            return new LineResults_32.LineResults(lines, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        IfStartCommand.parameters = [
            new SingleParameter_24.SingleParameter("conditional", "A conditional to check.", true)
        ];
        return IfStartCommand;
    }(Command_32.Command));
    exports.IfStartCommand = IfStartCommand;
});
define("Commands/ImportCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, Command_33, CommandResult_18, LineResults_33, SingleParameter_25, RepeatingParameters_7) {
    "use strict";
    /**
     * A command for importing items from a package.
     */
    var ImportCommand = (function (_super) {
        __extends(ImportCommand, _super);
        function ImportCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ImportCommand.prototype.getParameters = function () {
            return ImportCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        ImportCommand.prototype.render = function (parameters) {
            var lines;
            if (this.language.properties.imports.explicitLines) {
                lines = this.renderMultipleLines(parameters);
            }
            else {
                lines = [this.renderCombinedLine(parameters)];
            }
            return new LineResults_33.LineResults(lines, false);
        };
        /**
         * Renders the command for a language that splits item imports across lines.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        ImportCommand.prototype.renderMultipleLines = function (parameters) {
            var results = [];
            for (var i = 2; i < parameters.length; i += 1) {
                results.push(this.renderLine(parameters[1], parameters[i]));
            }
            return results;
        };
        /**
         * Renders the command for a language that puts multiple items in one import.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        ImportCommand.prototype.renderCombinedLine = function (parameters) {
            var items = parameters.slice(2).join(", ");
            return this.renderLine(parameters[1], items);
        };
        /**
         * Renders a single import line of some item(s) from a package.
         *
         * @param packageName   The name of the package.
         * @param item   Item(s) being imported.
         * A line of code in the language.
         */
        ImportCommand.prototype.renderLine = function (packageName, item) {
            var line = this.language.properties.imports.left;
            if (this.language.properties.imports.itemsBeforePackage) {
                if (this.language.properties.imports.explicit) {
                    line += item;
                    line += this.language.properties.imports.middle;
                }
                line += this.context.convertToCase(packageName, this.language.properties.imports.case);
            }
            else {
                line += this.context.convertToCase(packageName, this.language.properties.imports.case);
                if (this.language.properties.imports.explicit) {
                    line += this.language.properties.imports.middle;
                    line += item;
                }
            }
            line += this.language.properties.imports.right;
            return new CommandResult_18.CommandResult(line, 0);
        };
        /**
         * Information on parameters this command takes in.
         */
        ImportCommand.parameters = [
            new SingleParameter_25.SingleParameter("package", "A container to look within.", true),
            new RepeatingParameters_7.RepeatingParameters("items", [
                new SingleParameter_25.SingleParameter("item", "An item to import from the package.", true)
            ])
        ];
        return ImportCommand;
    }(Command_33.Command));
    exports.ImportCommand = ImportCommand;
});
define("Commands/IndexCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_34, LineResults_34, SingleParameter_26) {
    "use strict";
    /**
     * A command for an indexed [] lookup.
     */
    var IndexCommand = (function (_super) {
        __extends(IndexCommand, _super);
        function IndexCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        IndexCommand.prototype.getParameters = function () {
            return IndexCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, index).
         */
        IndexCommand.prototype.render = function (parameters) {
            return LineResults_34.LineResults.newSingleLine(parameters[1] + "[" + parameters[2] + "]", false);
        };
        /**
         * Information on parameters this command takes in.
         */
        IndexCommand.parameters = [
            new SingleParameter_26.SingleParameter("container", "A container to look within.", true),
            new SingleParameter_26.SingleParameter("index", "The index within the container.", true)
        ];
        return IndexCommand;
    }(Command_34.Command));
    exports.IndexCommand = IndexCommand;
});
define("Commands/LambdaBodyCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, Command_35, CommandResult_19, LineResults_35, SingleParameter_27, RepeatingParameters_8) {
    "use strict";
    /**
     * A command for a lambda function body.
     */
    var LambdaBodyCommand = (function (_super) {
        __extends(LambdaBodyCommand, _super);
        function LambdaBodyCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        LambdaBodyCommand.prototype.getParameters = function () {
            return LambdaBodyCommand.parameters;
        };
        /**
         * Renders the lambda for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([parameterName, parameterType, ...]).
         */
        LambdaBodyCommand.prototype.render = function (parameters) {
            if (this.language.properties.lambdas.returnTypeRequired) {
                throw Error("returnTypeRequired=true not implemented");
            }
            var returnType = this.context.convertCommon("type", parameters[2]), lambdaBody = "", output;
            lambdaBody += this.language.properties.lambdas.functionLeft;
            if (parameters.length > 3) {
                lambdaBody += this.generateParameterVariable(parameters, 2);
                for (var i = 4; (i + 1) < parameters.length; i += 2) {
                    lambdaBody += ", ";
                    lambdaBody += this.generateParameterVariable(parameters, i);
                }
            }
            lambdaBody += this.language.properties.lambdas.functionMiddle;
            lambdaBody += parameters[parameters.length - 1];
            lambdaBody += this.language.properties.lambdas.functionRight;
            output = [new CommandResult_19.CommandResult(lambdaBody, 0)];
            return new LineResults_35.LineResults(output, false);
        };
        /**
         * Generates a string for a parameter.
         *
         * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
         * @param i   An index in the parameters of a parameterName.
         * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
         */
        LambdaBodyCommand.prototype.generateParameterVariable = function (parameters, i) {
            if (!this.language.properties.lambdas.parameterTypeRequired) {
                return parameters[i];
            }
            var parameterName = parameters[i];
            var parameterType = this.context.convertCommon("type", parameters[i + 1]);
            return this.context.convertParsed(["variable inline", parameterName, parameterType]).commandResults[0].text;
        };
        /**
         * Information on parameters this command takes in.
         */
        LambdaBodyCommand.parameters = [
            new SingleParameter_27.SingleParameter("returnType", "Return type of the lambda function", true),
            new RepeatingParameters_8.RepeatingParameters("Lambda function parameters.", [
                new SingleParameter_27.SingleParameter("parameterName", "A named parameter for the lambda function.", true),
                new SingleParameter_27.SingleParameter("parameterType", "The type of the parameter.", true)
            ]),
            new SingleParameter_27.SingleParameter("functionBody", "The actual body of the lambda function", true)
        ];
        return LambdaBodyCommand;
    }(Command_35.Command));
    exports.LambdaBodyCommand = LambdaBodyCommand;
});
define("Commands/ListInitializeCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, Command_36, LineResults_36, SingleParameter_28, RepeatingParameters_9) {
    "use strict";
    /**
     * A command for initializing a new list.
     */
    var ListInitializeCommand = (function (_super) {
        __extends(ListInitializeCommand, _super);
        function ListInitializeCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ListInitializeCommand.prototype.getParameters = function () {
            return ListInitializeCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type[, item, ...]).
         */
        ListInitializeCommand.prototype.render = function (parameters) {
            if (this.language.properties.lists.asArray) {
                parameters[0] = "array initialize";
                return this.context.convertParsed(parameters);
            }
            var typeNameRaw = "list<" + parameters[1] + ">", typeName = this.context.convertCommon("type", typeNameRaw), output = "new " + typeName;
            if (parameters.length > 2) {
                output += " { ";
                output += parameters.slice(2).join(", ");
                output += " }";
            }
            else {
                output += "()";
            }
            return LineResults_36.LineResults.newSingleLine(output, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        ListInitializeCommand.parameters = [
            new SingleParameter_28.SingleParameter("type", "The type of object.", true),
            new RepeatingParameters_9.RepeatingParameters("Items initially in the list.", [
                new SingleParameter_28.SingleParameter("item", "An item initially in the list.", false)
            ])
        ];
        return ListInitializeCommand;
    }(Command_36.Command));
    exports.ListInitializeCommand = ListInitializeCommand;
});
define("Commands/ListLengthCommand", ["require", "exports", "Commands/NativeCallCommand", "Commands/Parameters/SingleParameter"], function (require, exports, NativeCallCommand_4, SingleParameter_29) {
    "use strict";
    /**
     * A command for retrieving the length of a list.
     */
    var ListLengthCommand = (function (_super) {
        __extends(ListLengthCommand, _super);
        function ListLengthCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ListLengthCommand.prototype.getParameters = function () {
            return ListLengthCommand.parameters;
        };
        /**
         * @returns Metadata on how to perform the native call.
         */
        ListLengthCommand.prototype.retrieveNativeCallProperties = function () {
            return this.language.properties.lists.length;
        };
        /**
         * Information on parameters this command takes in.
         */
        ListLengthCommand.parameters = [
            new SingleParameter_29.SingleParameter("name", "The name of the list.", true)
        ];
        return ListLengthCommand;
    }(NativeCallCommand_4.NativeCallCommand));
    exports.ListLengthCommand = ListLengthCommand;
});
define("Commands/ListPushCommand", ["require", "exports", "Commands/NativeCallCommand", "Commands/Parameters/SingleParameter"], function (require, exports, NativeCallCommand_5, SingleParameter_30) {
    "use strict";
    /**
     * A command for a list push statement.
     */
    var ListPushCommand = (function (_super) {
        __extends(ListPushCommand, _super);
        function ListPushCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ListPushCommand.prototype.getParameters = function () {
            return ListPushCommand.parameters;
        };
        /**
         * @returns Metadata on how to perform the native call.
         */
        ListPushCommand.prototype.retrieveNativeCallProperties = function () {
            return this.language.properties.lists.push;
        };
        /**
         * Information on parameters this command takes in.
         */
        ListPushCommand.parameters = [
            new SingleParameter_30.SingleParameter("name", "The name of the list.", true),
            new SingleParameter_30.SingleParameter("value", "An item to push into the list.", true),
        ];
        return ListPushCommand;
    }(NativeCallCommand_5.NativeCallCommand));
    exports.ListPushCommand = ListPushCommand;
});
define("Commands/LiteralCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/RepeatingParameters", "Commands/Parameters/SingleParameter"], function (require, exports, Command_37, LineResults_37, RepeatingParameters_10, SingleParameter_31) {
    "use strict";
    /**
     * A command for printing the input parameters directly.
     */
    var LiteralCommand = (function (_super) {
        __extends(LiteralCommand, _super);
        function LiteralCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        LiteralCommand.prototype.getParameters = function () {
            return LiteralCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([contents, ...]).
         */
        LiteralCommand.prototype.render = function (parameters) {
            return LineResults_37.LineResults.newSingleLine(parameters.slice(1).join(" "), false);
        };
        /**
         * Information on parameters this command takes in.
         */
        LiteralCommand.parameters = [
            new RepeatingParameters_10.RepeatingParameters("Contents to print.", [
                new SingleParameter_31.SingleParameter("word", "A word to print.", false)
            ])
        ];
        return LiteralCommand;
    }(Command_37.Command));
    exports.LiteralCommand = LiteralCommand;
});
define("Commands/ListTypeCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_38, LineResults_38, SingleParameter_32) {
    "use strict";
    /**
     * A command for declaring a list type.
     */
    var ListTypeCommand = (function (_super) {
        __extends(ListTypeCommand, _super);
        function ListTypeCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ListTypeCommand.prototype.getParameters = function () {
            return ListTypeCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        ListTypeCommand.prototype.render = function (parameters) {
            var typeName;
            if (this.language.properties.lists.asArray) {
                typeName = parameters[1] + "[]";
            }
            else {
                typeName = "list<" + parameters[1] + ">";
            }
            typeName = this.context.convertCommon("type", typeName);
            var results = LineResults_38.LineResults.newSingleLine(typeName, false);
            if (this.language.properties.lists.requiredImports) {
                results.addImports(this.language.properties.lists.requiredImports);
            }
            return results;
        };
        /**
         * Information on parameters this command takes in.
         */
        ListTypeCommand.parameters = [
            new SingleParameter_32.SingleParameter("type", "The type of the list", true)
        ];
        return ListTypeCommand;
    }(Command_38.Command));
    exports.ListTypeCommand = ListTypeCommand;
});
define("Commands/MainEndCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults"], function (require, exports, Command_39, CommandResult_20, LineResults_39) {
    "use strict";
    /**
     * A command for ending a main function.
     */
    var MainEndCommand = (function (_super) {
        __extends(MainEndCommand, _super);
        function MainEndCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        MainEndCommand.prototype.render = function (parameters) {
            var output = [], source = this.language.properties.style.mainEndLines;
            for (var i = 0; i < source.length; i += 1) {
                output.push(new CommandResult_20.CommandResult(source[i], 0));
            }
            if (output.length !== 0) {
                output[0].indentation = -this.language.properties.style.mainIndentation;
            }
            return new LineResults_39.LineResults(output, false);
        };
        return MainEndCommand;
    }(Command_39.Command));
    exports.MainEndCommand = MainEndCommand;
});
define("Commands/MainStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults"], function (require, exports, Command_40, CommandResult_21, LineResults_40) {
    "use strict";
    /**
     * A command for starting a main function.
     */
    var MainStartCommand = (function (_super) {
        __extends(MainStartCommand, _super);
        function MainStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        MainStartCommand.prototype.render = function (parameters) {
            var output = [], source = this.language.properties.style.mainStartLines;
            for (var i = 0; i < source.length; i += 1) {
                output.push(new CommandResult_21.CommandResult(source[i], 0));
            }
            if (output.length !== 0) {
                output[output.length - 1].indentation = this.language.properties.style.mainIndentation;
            }
            return new LineResults_40.LineResults(output, false);
        };
        return MainStartCommand;
    }(Command_40.Command));
    exports.MainStartCommand = MainStartCommand;
});
define("Commands/MemberVariableCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_41, LineResults_41, SingleParameter_33) {
    "use strict";
    /**
     * A command for retrieving a member variable.
     */
    var MemberVariableCommand = (function (_super) {
        __extends(MemberVariableCommand, _super);
        function MemberVariableCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        MemberVariableCommand.prototype.getParameters = function () {
            return MemberVariableCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        MemberVariableCommand.prototype.render = function (parameters) {
            var privacy = parameters[1], instanceName, variableName, variablePrefix, casingStyle;
            if (privacy === "protected") {
                instanceName = parameters[2];
                variableName = parameters[3];
                variablePrefix = this.language.properties.classes.members.variables.protectedPrefix;
                casingStyle = this.language.properties.classes.members.variables.protectedCase;
            }
            else if (privacy === "private") {
                instanceName = parameters[2];
                variableName = parameters[3];
                variablePrefix = this.language.properties.classes.members.variables.privatePrefix;
                casingStyle = this.language.properties.classes.members.variables.privateCase;
            }
            else {
                if (privacy === "public") {
                    instanceName = parameters[2];
                    variableName = parameters[3];
                }
                else {
                    instanceName = privacy;
                    variableName = parameters[2];
                }
                variablePrefix = this.language.properties.classes.members.variables.publicPrefix;
                casingStyle = this.language.properties.classes.members.variables.publicCase;
            }
            variableName = this.context.convertToCase(variableName, casingStyle);
            var output = "";
            output += instanceName + ".";
            output += variablePrefix;
            output += variableName;
            return LineResults_41.LineResults.newSingleLine(output, true);
        };
        /**
         * Information on parameters this command takes in.
         *
         * @todo Use a value restriction on privacy (once it's implemented).
         */
        MemberVariableCommand.parameters = [
            new SingleParameter_33.SingleParameter("privacy", "The privacy of the member variable.", false),
            new SingleParameter_33.SingleParameter("instanceName", "A class instance retrieving a member variable.", true),
            new SingleParameter_33.SingleParameter("variableName", "The name of the member variable.", true)
        ];
        return MemberVariableCommand;
    }(Command_41.Command));
    exports.MemberVariableCommand = MemberVariableCommand;
});
define("Commands/MemberVariableDeclareCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_42, LineResults_42, SingleParameter_34) {
    "use strict";
    /**
     * A command for declaring a member variable.
     */
    var MemberVariableDeclareCommand = (function (_super) {
        __extends(MemberVariableDeclareCommand, _super);
        function MemberVariableDeclareCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        MemberVariableDeclareCommand.prototype.getParameters = function () {
            return MemberVariableDeclareCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        MemberVariableDeclareCommand.prototype.render = function (parameters) {
            if (this.language.properties.classes.members.variables.skipMemberVariables) {
                return LineResults_42.LineResults.newSingleLine("\0", false);
            }
            var output = "", privacy = parameters[1], name, type, casingStyle;
            if (privacy === "protected") {
                output += this.language.properties.classes.members.variables.protected;
                output += this.language.properties.classes.members.variables.protectedPrefix;
                name = parameters[2];
                type = parameters[3];
                casingStyle = this.language.properties.classes.members.variables.protectedCase;
            }
            else if (privacy === "private") {
                output += this.language.properties.classes.members.variables.private;
                output += this.language.properties.classes.members.variables.privatePrefix;
                name = parameters[2];
                type = parameters[3];
                casingStyle = this.language.properties.classes.members.variables.privateCase;
            }
            else {
                if (privacy === "public") {
                    name = parameters[2];
                    type = parameters[3];
                }
                else {
                    name = parameters[1];
                    type = parameters[2];
                }
                output += this.language.properties.classes.members.variables.public;
                output += this.language.properties.classes.members.variables.publicPrefix;
                casingStyle = this.language.properties.classes.members.variables.publicCase;
            }
            name = this.context.convertToCase(name, casingStyle);
            output += this.context.convertParsed(["variable inline", name, type]).commandResults[0].text;
            return LineResults_42.LineResults.newSingleLine(output, true);
        };
        /**
         * Information on parameters this command takes in.
         *
         * @todo Use a value restriction on privacy (once it's implemented).
         */
        MemberVariableDeclareCommand.parameters = [
            new SingleParameter_34.SingleParameter("privacy", "The privacy of the member variable.", false),
            new SingleParameter_34.SingleParameter("name", "The name of the member variable.", true),
            new SingleParameter_34.SingleParameter("type", "The type of the variable.", true)
        ];
        return MemberVariableDeclareCommand;
    }(Command_42.Command));
    exports.MemberVariableDeclareCommand = MemberVariableDeclareCommand;
});
define("Commands/NotCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_43, LineResults_43, SingleParameter_35) {
    "use strict";
    /**
     * A command for printing a logical inverse.
     */
    var NotCommand = (function (_super) {
        __extends(NotCommand, _super);
        function NotCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        NotCommand.prototype.getParameters = function () {
            return NotCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value).
         */
        NotCommand.prototype.render = function (parameters) {
            var not = this.language.properties.operators.not;
            return LineResults_43.LineResults.newSingleLine(not + parameters[1], false);
        };
        /**
         * Information on parameters this command takes in.
         */
        NotCommand.parameters = [
            new SingleParameter_35.SingleParameter("value", "A value to inverse.", true)
        ];
        return NotCommand;
    }(Command_43.Command));
    exports.NotCommand = NotCommand;
});
define("Commands/OperationCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, Command_44, LineResults_44, SingleParameter_36, RepeatingParameters_11) {
    "use strict";
    /**
     * A command for printing an operation.
     */
    var OperationCommand = (function (_super) {
        __extends(OperationCommand, _super);
        function OperationCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        OperationCommand.prototype.getParameters = function () {
            return OperationCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value, operator, value[, operator, value, ...]).
         */
        OperationCommand.prototype.render = function (parameters) {
            var result = this.context.convertCommon("value", parameters[1]);
            for (var i = 2; i < parameters.length; i += 2) {
                result += " " + this.context.convertCommon("operator", parameters[i]);
                result += " " + this.context.convertCommon("value", parameters[i + 1]);
            }
            return LineResults_44.LineResults.newSingleLine(result, true);
        };
        /**
         * Information on parameters this command takes in.
         */
        OperationCommand.parameters = [
            new SingleParameter_36.SingleParameter("value", "A value to work with.", true),
            new SingleParameter_36.SingleParameter("operator", "The operation's operator.", true),
            new SingleParameter_36.SingleParameter("value", "A value to work with.", true),
            new RepeatingParameters_11.RepeatingParameters("Additional values and operators", [
                new SingleParameter_36.SingleParameter("item", "An additional operator.", false),
                new SingleParameter_36.SingleParameter("item", "An additional value to work with.", false)
            ])
        ];
        return OperationCommand;
    }(Command_44.Command));
    exports.OperationCommand = OperationCommand;
});
define("Commands/OperatorCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_45, LineResults_45, SingleParameter_37) {
    "use strict";
    /**
     * A command for printing an operator.
     */
    var OperatorCommand = (function (_super) {
        __extends(OperatorCommand, _super);
        function OperatorCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        OperatorCommand.prototype.getParameters = function () {
            return OperatorCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (operator).
         */
        OperatorCommand.prototype.render = function (parameters) {
            return LineResults_45.LineResults.newSingleLine(this.convertOperator(parameters[1]), false);
        };
        /**
         * Converts a raw operator into the language's equivalent.
         *
         * @param typeNameRaw   A raw operator to convert.
         * @returns The equivalent converted operator.
         */
        OperatorCommand.prototype.convertOperator = function (operatorRaw) {
            if (!this.language.properties.operators.aliases.hasOwnProperty(operatorRaw)) {
                return operatorRaw;
            }
            return this.language.properties.operators.aliases[operatorRaw];
        };
        /**
         * Information on parameters this command takes in.
         */
        OperatorCommand.parameters = [
            new SingleParameter_37.SingleParameter("operator", "An operator to alias.", true)
        ];
        return OperatorCommand;
    }(Command_45.Command));
    exports.OperatorCommand = OperatorCommand;
});
define("Commands/ParenthesisCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, Command_46, LineResults_46, SingleParameter_38, RepeatingParameters_12) {
    "use strict";
    /**
     * A command for wrapping with parenthesis.
     */
    var ParenthesisCommand = (function (_super) {
        __extends(ParenthesisCommand, _super);
        function ParenthesisCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ParenthesisCommand.prototype.getParameters = function () {
            return ParenthesisCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (contents, ...).
         */
        ParenthesisCommand.prototype.render = function (parameters) {
            var result = "";
            result += "(";
            result += parameters.slice(1).join(" ");
            result += ")";
            return LineResults_46.LineResults.newSingleLine(result, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        ParenthesisCommand.parameters = [
            new RepeatingParameters_12.RepeatingParameters("Contents within the parenthesis.", [
                new SingleParameter_38.SingleParameter("contents", "Contents within the parenthesis.", false)
            ])
        ];
        return ParenthesisCommand;
    }(Command_46.Command));
    exports.ParenthesisCommand = ParenthesisCommand;
});
define("Commands/PrintCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_47, LineResults_47, SingleParameter_39) {
    "use strict";
    /**
     * A command for printing.
     */
    var PrintCommand = (function (_super) {
        __extends(PrintCommand, _super);
        function PrintCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        PrintCommand.prototype.getParameters = function () {
            return PrintCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([contents]).
         */
        PrintCommand.prototype.render = function (parameters) {
            var result = "";
            result += this.language.properties.style.printStart;
            if (parameters.length > 1) {
                result += parameters[1];
            }
            result += this.language.properties.style.printEnd;
            return LineResults_47.LineResults.newSingleLine(result, true);
        };
        /**
         * Information on parameters this command takes in.
         */
        PrintCommand.parameters = [
            new SingleParameter_39.SingleParameter("contents", "Contents to be printed.", false)
        ];
        return PrintCommand;
    }(Command_47.Command));
    exports.PrintCommand = PrintCommand;
});
define("Commands/ReturnCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_48, LineResults_48, SingleParameter_40) {
    "use strict";
    /**
     * A command for returning in a function.
     */
    var ReturnCommand = (function (_super) {
        __extends(ReturnCommand, _super);
        function ReturnCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ReturnCommand.prototype.getParameters = function () {
            return ReturnCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([value]).
         */
        ReturnCommand.prototype.render = function (parameters) {
            var output = "return";
            if (parameters.length > 1) {
                output += " " + parameters[1];
            }
            return LineResults_48.LineResults.newSingleLine(output, true);
        };
        /**
         * Information on parameters this command takes in.
         */
        ReturnCommand.parameters = [
            new SingleParameter_40.SingleParameter("value", "A value to return.", false)
        ];
        return ReturnCommand;
    }(Command_48.Command));
    exports.ReturnCommand = ReturnCommand;
});
define("Commands/StringIndexCommand", ["require", "exports", "Commands/NativeCallCommand", "Commands/Parameters/SingleParameter"], function (require, exports, NativeCallCommand_6, SingleParameter_41) {
    "use strict";
    /**
     * A command for a searching for a substring in a string.
     */
    var StringIndexCommand = (function (_super) {
        __extends(StringIndexCommand, _super);
        function StringIndexCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        StringIndexCommand.prototype.getParameters = function () {
            return StringIndexCommand.parameters;
        };
        /**
         * @returns Metadata on how to perform the native call.
         */
        StringIndexCommand.prototype.retrieveNativeCallProperties = function () {
            return this.language.properties.strings.index;
        };
        /**
         * Information on parameters this command takes in.
         */
        StringIndexCommand.parameters = [
            new SingleParameter_41.SingleParameter("string", "A string to look within.", true),
            new SingleParameter_41.SingleParameter("substring", "A potential substring of the string.", true)
        ];
        return StringIndexCommand;
    }(NativeCallCommand_6.NativeCallCommand));
    exports.StringIndexCommand = StringIndexCommand;
});
define("Commands/StringLengthCommand", ["require", "exports", "Commands/NativeCallCommand", "Commands/Parameters/SingleParameter"], function (require, exports, NativeCallCommand_7, SingleParameter_42) {
    "use strict";
    /**
     * A command for a retrieving the length of an string.
     */
    var StringLengthCommand = (function (_super) {
        __extends(StringLengthCommand, _super);
        function StringLengthCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        StringLengthCommand.prototype.getParameters = function () {
            return StringLengthCommand.parameters;
        };
        /**
         * @returns Metadata on how to perform the native call.
         */
        StringLengthCommand.prototype.retrieveNativeCallProperties = function () {
            return this.language.properties.strings.length;
        };
        /**
         * Information on parameters this command takes in.
         */
        StringLengthCommand.parameters = [
            new SingleParameter_42.SingleParameter("string", "A string to retrieve the length of.", true)
        ];
        return StringLengthCommand;
    }(NativeCallCommand_7.NativeCallCommand));
    exports.StringLengthCommand = StringLengthCommand;
});
define("Commands/SuperConstructorCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, Command_49, LineResults_49, SingleParameter_43, RepeatingParameters_13) {
    "use strict";
    /**
     * A command for calling a parent class constructor.
     */
    var SuperConstructorCommand = (function (_super) {
        __extends(SuperConstructorCommand, _super);
        function SuperConstructorCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        SuperConstructorCommand.prototype.getParameters = function () {
            return SuperConstructorCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        SuperConstructorCommand.prototype.render = function (parameters) {
            var output = "";
            output += this.language.properties.classes.superConstructor;
            output += "(";
            if (parameters.length > 1) {
                output += parameters[1];
                for (var i = 2; i < parameters.length; i += 1) {
                    output += ", " + parameters[i];
                }
            }
            output += ")";
            return LineResults_49.LineResults.newSingleLine(output, true);
        };
        /**
         * Information on parameters this command takes in.
         */
        SuperConstructorCommand.parameters = [
            new RepeatingParameters_13.RepeatingParameters("Function arguments.", [
                new SingleParameter_43.SingleParameter("argument", "An argument for the super constructor.", true),
            ])
        ];
        return SuperConstructorCommand;
    }(Command_49.Command));
    exports.SuperConstructorCommand = SuperConstructorCommand;
});
define("Commands/ThisCommand", ["require", "exports", "Commands/Command", "Commands/LineResults"], function (require, exports, Command_50, LineResults_50) {
    "use strict";
    /**
     * A command for printing the "this" keyword.
     */
    var ThisCommand = (function (_super) {
        __extends(ThisCommand, _super);
        function ThisCommand() {
            _super.apply(this, arguments);
        }
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        ThisCommand.prototype.render = function (parameters) {
            return LineResults_50.LineResults.newSingleLine(this.language.properties.classes.this, false);
        };
        return ThisCommand;
    }(Command_50.Command));
    exports.ThisCommand = ThisCommand;
});
define("Commands/TypeCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_51, LineResults_51, SingleParameter_44) {
    "use strict";
    /**
     * A command for parsing a language's name for a type.
     */
    var TypeCommand = (function (_super) {
        __extends(TypeCommand, _super);
        function TypeCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        TypeCommand.prototype.getParameters = function () {
            return TypeCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type).
         */
        TypeCommand.prototype.render = function (parameters) {
            return LineResults_51.LineResults.newSingleLine(this.convertType(parameters[1]), false);
        };
        /**
         * Converts a raw type name into the language's equivalent.
         *
         * @param typeNameRaw   A raw type to convert.
         * @returns The equivalent converted type name.
         */
        TypeCommand.prototype.convertType = function (typeNameRaw) {
            var typeName = typeNameRaw;
            if (this.language.properties.classes.aliases.hasOwnProperty(typeName)) {
                typeName = this.language.properties.classes.aliases[typeName];
            }
            if (this.typeContainsArray(typeNameRaw)) {
                return this.convertArrayType(typeNameRaw);
            }
            if (this.typeContainsGeneric(typeNameRaw)) {
                return this.convertGenericType(typeNameRaw);
            }
            return typeName;
        };
        /**
         * Converts a raw type name with array notation into the language's equivalent.
         *
         * @param typeNameRaw   A raw type to convert.
         * @returns The equivalent converted type name.
         */
        TypeCommand.prototype.convertArrayType = function (typeNameRaw) {
            var bracketIndex = typeNameRaw.indexOf("["), typeName = this.convertType(typeNameRaw.substring(0, bracketIndex));
            return typeName + typeNameRaw.substring(bracketIndex);
        };
        /**
         * Converts a raw type name with array notation into the language's equivalent.
         *
         * @param typeNameRaw   A raw type to convert.
         * @returns The equivalent converted type name.
         * @todo Support multiple generics (commas inside the <>s).
         */
        TypeCommand.prototype.convertGenericType = function (typeNameRaw) {
            var bracketStartIndex = typeNameRaw.indexOf("<"), containerTypeName = this.convertType(typeNameRaw.substring(0, bracketStartIndex));
            if (!this.language.properties.classes.generics.used) {
                return this.convertType(containerTypeName);
            }
            var bracketEndIndex = typeNameRaw.lastIndexOf(">"), genericTypeName = this.convertType(typeNameRaw.substring(bracketStartIndex + 1, bracketEndIndex)), output = containerTypeName;
            output += this.language.properties.classes.generics.left;
            output += genericTypeName;
            output += this.language.properties.classes.generics.right;
            return output;
        };
        /**
         * @param typeNameRaw   A name of a type.
         * @returns Whether the type name includes Array notation.
         */
        TypeCommand.prototype.typeContainsArray = function (typeNameRaw) {
            return typeNameRaw.indexOf("[]") !== -1;
        };
        /**
         * @param typeNameRaw   A name of a type.
         * @returns Whether the type name includes Array notation.
         */
        TypeCommand.prototype.typeContainsGeneric = function (typeNameRaw) {
            return typeNameRaw.indexOf("<") !== -1;
        };
        /**
         * Information on parameters this command takes in.
         */
        TypeCommand.parameters = [
            new SingleParameter_44.SingleParameter("type", "A type to parse.", true)
        ];
        return TypeCommand;
    }(Command_51.Command));
    exports.TypeCommand = TypeCommand;
});
define("Commands/ValueCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_52, LineResults_52, SingleParameter_45) {
    "use strict";
    /**
     * A command for printing a value.
     */
    var ValueCommand = (function (_super) {
        __extends(ValueCommand, _super);
        function ValueCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ValueCommand.prototype.getParameters = function () {
            return ValueCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value).
         */
        ValueCommand.prototype.render = function (parameters) {
            return LineResults_52.LineResults.newSingleLine(this.convertValue(parameters[1]), false);
        };
        /**
         * Converts a raw value into the language's equivalent.
         *
         * @param typeNameRaw   A raw value to convert.
         * @returns The equivalent converted value.
         */
        ValueCommand.prototype.convertValue = function (valueRaw) {
            if (!this.language.properties.variables.aliases.hasOwnProperty(valueRaw)) {
                return valueRaw;
            }
            return this.language.properties.variables.aliases[valueRaw];
        };
        /**
         * Information on parameters this command takes in.
         */
        ValueCommand.parameters = [
            new SingleParameter_45.SingleParameter("value", "A value to parse.", true)
        ];
        return ValueCommand;
    }(Command_52.Command));
    exports.ValueCommand = ValueCommand;
});
define("Commands/VariableCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_53, LineResults_53, SingleParameter_46) {
    "use strict";
    /**
     * A command for declaring a variable.
     */
    var VariableCommand = (function (_super) {
        __extends(VariableCommand, _super);
        function VariableCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        VariableCommand.prototype.getParameters = function () {
            return VariableCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type[, value]).
         */
        VariableCommand.prototype.render = function (parameters) {
            if (parameters.length === 3 && !this.language.properties.variables.declarationRequired) {
                return LineResults_53.LineResults.newSingleLine("\0", false);
            }
            var starter = this.language.properties.variables.declaration;
            var newParameters = parameters.slice();
            newParameters[0] = "variable inline";
            var ender = this.context.convertParsed(newParameters).commandResults[0].text;
            return LineResults_53.LineResults.newSingleLine(starter + ender, true);
        };
        /**
         * Information on parameters this command takes in.
         */
        VariableCommand.parameters = [
            new SingleParameter_46.SingleParameter("name", "The name of the variable.", true),
            new SingleParameter_46.SingleParameter("type", "The type of the variable.", true),
            new SingleParameter_46.SingleParameter("value", "The starting value of the variable.", false)
        ];
        return VariableCommand;
    }(Command_53.Command));
    exports.VariableCommand = VariableCommand;
});
define("Commands/VariableInlineCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_54, LineResults_54, SingleParameter_47) {
    "use strict";
    /**
     * A command for declaring a variable inline (without a preceding "var ").
     */
    var VariableInlineCommand = (function (_super) {
        __extends(VariableInlineCommand, _super);
        function VariableInlineCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        VariableInlineCommand.prototype.getParameters = function () {
            return VariableInlineCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type[, value]).
         */
        VariableInlineCommand.prototype.render = function (parameters) {
            if (parameters.length === 3 && !this.language.properties.variables.declarationRequired) {
                return LineResults_54.LineResults.newSingleLine("\0", false);
            }
            var name = parameters[1];
            var typeName = this.context.convertCommon("type", parameters[2]);
            var output = "";
            if (this.language.properties.variables.explicitTypes) {
                if (this.language.properties.variables.typesAfterName) {
                    output += name + this.language.properties.variables.typeLeft;
                    output += typeName;
                }
                else {
                    output += typeName + " " + name;
                }
            }
            else {
                output += name;
            }
            if (parameters.length > 3) {
                output += " " + this.renderVariableValue(parameters[3]);
            }
            return LineResults_54.LineResults.newSingleLine(output, false);
        };
        /**
         * Renders the "= value" part of a command.
         *
         * @param valueRaw   The raw value of a variable.
         * @returns   The "= value" part of a command.
         */
        VariableInlineCommand.prototype.renderVariableValue = function (valueRaw) {
            var operator = this.context.convertCommon("operator", "equals");
            var value = this.context.convertCommon("value", valueRaw);
            return operator + " " + value;
        };
        /**
         * Information on parameters this command takes in.
         */
        VariableInlineCommand.parameters = [
            new SingleParameter_47.SingleParameter("name", "The name of the variable.", true),
            new SingleParameter_47.SingleParameter("type", "The type of the variable.", true),
            new SingleParameter_47.SingleParameter("value", "The starting value of the variable.", false)
        ];
        return VariableInlineCommand;
    }(Command_54.Command));
    exports.VariableInlineCommand = VariableInlineCommand;
});
define("Commands/VariableStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/Parameters/SingleParameter"], function (require, exports, Command_55, CommandResult_22, SingleParameter_48) {
    "use strict";
    /**
     * A command for the start of declaring a variable.
     */
    var VariableStartCommand = (function (_super) {
        __extends(VariableStartCommand, _super);
        function VariableStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        VariableStartCommand.prototype.getParameters = function () {
            return VariableStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, value).
         */
        VariableStartCommand.prototype.render = function (parameters) {
            // Languages like C# will give the last value in parameters including a "\n"
            var newParameters = ["variable"];
            for (var i = 1; i < parameters.length; i += 1) {
                newParameters.push(parameters[i].split("\n")[0]);
            }
            var output = this.context.convertParsed(newParameters);
            output.addSemicolon = false;
            // Languages like C# might need to pass a separate "\n{" through
            if (this.language.properties.style.separateBraceLines) {
                var lastParameter = parameters[parameters.length - 1];
                if (lastParameter.indexOf("\n") !== -1) {
                    lastParameter = lastParameter.split("\n")[1];
                    output.commandResults.push(new CommandResult_22.CommandResult(lastParameter, 1));
                }
            }
            else {
                output.commandResults[output.commandResults.length - 1].indentation += 1;
            }
            return output;
        };
        /**
         * Information on parameters this command takes in.
         */
        VariableStartCommand.parameters = [
            new SingleParameter_48.SingleParameter("name", "The name of the variable.", true),
            new SingleParameter_48.SingleParameter("type", "The type of the variable.", true),
            new SingleParameter_48.SingleParameter("value", "The start of the value of the variable.", true)
        ];
        return VariableStartCommand;
    }(Command_55.Command));
    exports.VariableStartCommand = VariableStartCommand;
});
define("Commands/WhileEndCommand", ["require", "exports", "Commands/BlockEndCommand"], function (require, exports, BlockEndCommand_7) {
    "use strict";
    /**
     * A command for the end of a while loop.
     */
    var WhileEndCommand = (function (_super) {
        __extends(WhileEndCommand, _super);
        function WhileEndCommand() {
            _super.apply(this, arguments);
        }
        return WhileEndCommand;
    }(BlockEndCommand_7.BlockEndCommand));
    exports.WhileEndCommand = WhileEndCommand;
});
define("Commands/WhileStartCommand", ["require", "exports", "Commands/Command", "Commands/CommandResult", "Commands/LineResults", "Commands/Parameters/SingleParameter"], function (require, exports, Command_56, CommandResult_23, LineResults_55, SingleParameter_49) {
    "use strict";
    /**
     * A command for the beginning of a while loop.
     */
    var WhileStartCommand = (function (_super) {
        __extends(WhileStartCommand, _super);
        function WhileStartCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        WhileStartCommand.prototype.getParameters = function () {
            return WhileStartCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (conditional).
         */
        WhileStartCommand.prototype.render = function (parameters) {
            var line = this.language.properties.conditionals.while;
            line += this.language.properties.conditionals.startLeft;
            line += this.context.convertCommon("value", parameters[1]);
            var lines = [new CommandResult_23.CommandResult(line, 0)];
            this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);
            return new LineResults_55.LineResults(lines, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        WhileStartCommand.parameters = [
            new SingleParameter_49.SingleParameter("conditional", "A conditional to check.", true)
        ];
        return WhileStartCommand;
    }(Command_56.Command));
    exports.WhileStartCommand = WhileStartCommand;
});
define("Commands/CommandsBag", ["require", "exports", "Commands/ArrayInitializeCommand", "Commands/ArrayLengthCommand", "Commands/BreakCommand", "Commands/ClassEndCommand", "Commands/ClassStartCommand", "Commands/CommentBlockCommand", "Commands/CommentBlockEndCommand", "Commands/CommentBlockStartCommand", "Commands/CommentDocEndCommand", "Commands/CommentDocStartCommand", "Commands/CommentDocTagCommand", "Commands/CommentLineCommand", "Commands/ConstructorEndCommand", "Commands/ConstructorStartCommand", "Commands/ContinueCommand", "Commands/ConcatenateCommand", "Commands/DictionaryContainsKeyCommand", "Commands/DictionaryKeysCommand", "Commands/DictionaryNewCommand", "Commands/DictionaryNewEndCommand", "Commands/DictionaryNewStartCommand", "Commands/DictionaryPairCommand", "Commands/DictionaryTypeCommand", "Commands/ElseIfStartCommand", "Commands/ElseStartCommand", "Commands/EnumCommand", "Commands/EnumEndCommand", "Commands/EnumMemberCommand", "Commands/EnumStartCommand", "Commands/FileEndCommand", "Commands/FileStartCommand", "Commands/ForEachEndCommand", "Commands/ForEachKeyStartCommand", "Commands/ForEachPairStartCommand", "Commands/ForNumbersStartCommand", "Commands/ForNumbersEndCommand", "Commands/FunctionEndCommand", "Commands/FunctionStartCommand", "Commands/IfEndCommand", "Commands/IfStartCommand", "Commands/ImportCommand", "Commands/IndexCommand", "Commands/LambdaBodyCommand", "Commands/ListInitializeCommand", "Commands/ListLengthCommand", "Commands/ListPushCommand", "Commands/LiteralCommand", "Commands/ListTypeCommand", "Commands/MainEndCommand", "Commands/MainStartCommand", "Commands/MemberVariableCommand", "Commands/MemberVariableDeclareCommand", "Commands/NotCommand", "Commands/OperationCommand", "Commands/OperatorCommand", "Commands/ParenthesisCommand", "Commands/PrintCommand", "Commands/ReturnCommand", "Commands/StringIndexCommand", "Commands/StringLengthCommand", "Commands/SuperConstructorCommand", "Commands/ThisCommand", "Commands/TypeCommand", "Commands/ValueCommand", "Commands/VariableCommand", "Commands/VariableInlineCommand", "Commands/VariableStartCommand", "Commands/WhileEndCommand", "Commands/WhileStartCommand"], function (require, exports, ArrayInitializeCommand_1, ArrayLengthCommand_1, BreakCommand_1, ClassEndCommand_1, ClassStartCommand_1, CommentBlockCommand_1, CommentBlockEndCommand_1, CommentBlockStartCommand_1, CommentDocEndCommand_1, CommentDocStartCommand_1, CommentDocTagCommand_1, CommentLineCommand_1, ConstructorEndCommand_1, ConstructorStartCommand_1, ContinueCommand_1, ConcatenateCommand_1, DictionaryContainsKeyCommand_1, DictionaryKeysCommand_1, DictionaryNewCommand_1, DictionaryNewEndCommand_1, DictionaryNewStartCommand_1, DictionaryPairCommand_1, DictionaryTypeCommand_1, ElseIfStartCommand_1, ElseStartCommand_1, EnumCommand_1, EnumEndCommand_1, EnumMemberCommand_1, EnumStartCommand_1, FileEndCommand_1, FileStartCommand_1, ForEachEndCommand_1, ForEachKeyStartCommand_1, ForEachPairStartCommand_1, ForNumbersStartCommand_1, ForNumbersEndCommand_1, FunctionEndCommand_1, FunctionStartCommand_1, IfEndCommand_1, IfStartCommand_1, ImportCommand_1, IndexCommand_1, LambdaBodyCommand_1, ListInitializeCommand_1, ListLengthCommand_1, ListPushCommand_1, LiteralCommand_1, ListTypeCommand_1, MainEndCommand_1, MainStartCommand_1, MemberVariableCommand_1, MemberVariableDeclareCommand_1, NotCommand_1, OperationCommand_1, OperatorCommand_1, ParenthesisCommand_1, PrintCommand_1, ReturnCommand_1, StringIndexCommand_1, StringLengthCommand_1, SuperConstructorCommand_1, ThisCommand_1, TypeCommand_1, ValueCommand_1, VariableCommand_1, VariableInlineCommand_1, VariableStartCommand_1, WhileEndCommand_1, WhileStartCommand_1) {
    "use strict";
    /**
     * A container for globally known commands.
     */
    var CommandsBag = (function () {
        /**
         * Initializes a new instance of the CommandsBag class.
         *
         * @param context   The driving context for conversions.
         */
        function CommandsBag(context) {
            this.commands = {
                "array initialize": new ArrayInitializeCommand_1.ArrayInitializeCommand(context),
                "array length": new ArrayLengthCommand_1.ArrayLengthCommand(context),
                "break": new BreakCommand_1.BreakCommand(context),
                "class end": new ClassEndCommand_1.ClassEndCommand(context),
                "class start": new ClassStartCommand_1.ClassStartCommand(context),
                "comment block": new CommentBlockCommand_1.CommentBlockCommand(context),
                "comment block end": new CommentBlockEndCommand_1.CommentBlockEndCommand(context),
                "comment block start": new CommentBlockStartCommand_1.CommentBlockStartCommand(context),
                "comment doc end": new CommentDocEndCommand_1.CommentDocEndCommand(context),
                "comment doc start": new CommentDocStartCommand_1.CommentDocStartCommand(context),
                "comment doc tag": new CommentDocTagCommand_1.CommentDocTagCommand(context),
                "comment line": new CommentLineCommand_1.CommentLineCommand(context),
                "concatenate": new ConcatenateCommand_1.ConcatenateCommand(context),
                "constructor end": new ConstructorEndCommand_1.ConstructorEndCommand(context),
                "constructor start": new ConstructorStartCommand_1.ConstructorStartCommand(context),
                "continue": new ContinueCommand_1.ContinueCommand(context),
                "dictionary contains key": new DictionaryContainsKeyCommand_1.DictionaryContainsKeyCommand(context),
                "dictionary keys": new DictionaryKeysCommand_1.DictionaryKeysCommand(context),
                "dictionary new": new DictionaryNewCommand_1.DictionaryNewCommand(context),
                "dictionary new end": new DictionaryNewEndCommand_1.DictionaryNewEndCommand(context),
                "dictionary new start": new DictionaryNewStartCommand_1.DictionaryNewStartCommand(context),
                "dictionary pair": new DictionaryPairCommand_1.DictionaryPairCommand(context),
                "dictionary type": new DictionaryTypeCommand_1.DictionaryTypeCommand(context),
                "else if start": new ElseIfStartCommand_1.ElseIfStartCommand(context),
                "else start": new ElseStartCommand_1.ElseStartCommand(context),
                "enum": new EnumCommand_1.EnumCommand(context),
                "enum end": new EnumEndCommand_1.EnumEndCommand(context),
                "enum member": new EnumMemberCommand_1.EnumMemberCommand(context),
                "enum start": new EnumStartCommand_1.EnumStartCommand(context),
                "file end": new FileEndCommand_1.FileEndCommand(context),
                "file start": new FileStartCommand_1.FileStartCommand(context),
                "for each end": new ForEachEndCommand_1.ForEachEndCommand(context),
                "for each key start": new ForEachKeyStartCommand_1.ForEachKeyStartCommand(context),
                "for each pair start": new ForEachPairStartCommand_1.ForEachPairStartCommand(context),
                "for numbers start": new ForNumbersStartCommand_1.ForNumbersStartCommand(context),
                "for numbers end": new ForNumbersEndCommand_1.ForNumbersEndCommand(context),
                "function start": new FunctionStartCommand_1.FunctionStartCommand(context),
                "function end": new FunctionEndCommand_1.FunctionEndCommand(context),
                "if end": new IfEndCommand_1.IfEndCommand(context),
                "if start": new IfStartCommand_1.IfStartCommand(context),
                "import": new ImportCommand_1.ImportCommand(context),
                "index": new IndexCommand_1.IndexCommand(context),
                "lambda": new LambdaBodyCommand_1.LambdaBodyCommand(context),
                "list initialize": new ListInitializeCommand_1.ListInitializeCommand(context),
                "list length": new ListLengthCommand_1.ListLengthCommand(context),
                "list push": new ListPushCommand_1.ListPushCommand(context),
                "literal": new LiteralCommand_1.LiteralCommand(context),
                "list type": new ListTypeCommand_1.ListTypeCommand(context),
                "main end": new MainEndCommand_1.MainEndCommand(context),
                "main start": new MainStartCommand_1.MainStartCommand(context),
                "member variable": new MemberVariableCommand_1.MemberVariableCommand(context),
                "member variable declare": new MemberVariableDeclareCommand_1.MemberVariableDeclareCommand(context),
                "not": new NotCommand_1.NotCommand(context),
                "operation": new OperationCommand_1.OperationCommand(context),
                "operator": new OperatorCommand_1.OperatorCommand(context),
                "parenthesis": new ParenthesisCommand_1.ParenthesisCommand(context),
                "print": new PrintCommand_1.PrintCommand(context),
                "return": new ReturnCommand_1.ReturnCommand(context),
                "string index": new StringIndexCommand_1.StringIndexCommand(context),
                "string length": new StringLengthCommand_1.StringLengthCommand(context),
                "super constructor": new SuperConstructorCommand_1.SuperConstructorCommand(context),
                "this": new ThisCommand_1.ThisCommand(context),
                "type": new TypeCommand_1.TypeCommand(context),
                "value": new ValueCommand_1.ValueCommand(context),
                "variable": new VariableCommand_1.VariableCommand(context),
                "variable inline": new VariableInlineCommand_1.VariableInlineCommand(context),
                "variable start": new VariableStartCommand_1.VariableStartCommand(context),
                "while end": new WhileEndCommand_1.WhileEndCommand(context),
                "while start": new WhileStartCommand_1.WhileStartCommand(context)
            };
        }
        /**
         * @returns Commands, keyed by their GLS aliases.
         */
        CommandsBag.prototype.getCommands = function () {
            return this.commands;
        };
        /**
         * Retrieves the command under the given alias.
         *
         * @param name   The alias of a command.
         * @returns The command under the given alias.
         */
        CommandsBag.prototype.getCommand = function (alias) {
            if (!this.commands.hasOwnProperty(alias)) {
                throw new Error("Unknown command requested: '" + alias + "'.");
            }
            return this.commands[alias];
        };
        /**
         * Renders a command in a language.
         *
         * @param language   The language to render the command in.
         * @param command   A command name, followed by parameters for it.
         * @returns Line(s) of code in the language.
         */
        CommandsBag.prototype.renderCommand = function (parameters) {
            var command = this.getCommand(parameters[0]);
            command.checkParameterValidity(parameters);
            return command.render(parameters);
        };
        return CommandsBag;
    }());
    exports.CommandsBag = CommandsBag;
});
define("Languages/Casing/CaseStyleConverter", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Allowed casing preferences.
     */
    var CaseStyleConverter = (function () {
        function CaseStyleConverter() {
        }
        /**
         * Converts a name to the equivalent case style.
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in this converter's case style.
         */
        CaseStyleConverter.prototype.convert = function (name) {
            var position = 0;
            var nameConverted = "";
            name = name.replace(/\//g, "");
            while (position < name.length) {
                var nextWordStart = this.findNextWordStart(name, position);
                var nextWord = name.substring(position, nextWordStart);
                nextWord = nextWord.replace(/_/g, "").toLowerCase();
                nextWord = this.applyTransformationToWord(nextWord);
                nameConverted += nextWord;
                position = nextWordStart;
            }
            return nameConverted;
        };
        /**
         * Applies this style's transformation to a word (by default, none).
         *
         * @param name   A word to convert.
         * @returns The word after this style's transformation.
         */
        CaseStyleConverter.prototype.applyTransformationToWord = function (word) {
            return word;
        };
        /**
         * Finds the starting index of the next word in a name.
         *
         * @param name   A name.
         * @param previousWordEnd   The ending position of the name's previous word.
         * @returns The starting index of the next word in name.
         */
        CaseStyleConverter.prototype.findNextWordStart = function (name, previousWordEnd) {
            var position = previousWordEnd + 1;
            while (position < name.length) {
                if (!this.isLowerCase(name[position])) {
                    break;
                }
                if (name[position - 1] === "_" && name !== "_") {
                    break;
                }
                position += 1;
            }
            return position;
        };
        /**
         * Determines if a character is lower case.
         *
         * @param character   A character to check casing of.
         * @returns Whether character is lower case.
         */
        CaseStyleConverter.prototype.isLowerCase = function (character) {
            return character.toLowerCase() === character;
        };
        return CaseStyleConverter;
    }());
    exports.CaseStyleConverter = CaseStyleConverter;
});
define("Languages/Casing/CamelCaseConverter", ["require", "exports", "Languages/Casing/CaseStyleConverter"], function (require, exports, CaseStyleConverter_1) {
    "use strict";
    /**
     * Converts a name to camelCase.
     */
    var CamelCaseConverter = (function (_super) {
        __extends(CamelCaseConverter, _super);
        function CamelCaseConverter() {
            _super.apply(this, arguments);
        }
        /**
         * Converts a name to camelCase.
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in camelCase.
         */
        CamelCaseConverter.prototype.convert = function (name) {
            name = _super.prototype.convert.call(this, name);
            return name[0].toLowerCase() + name.substring(1);
        };
        /**
         * Transforms a word within a name to camelCase.
         *
         * @param word   A word within a name.
         * @returns The word transformed to camelCase.
         */
        CamelCaseConverter.prototype.applyTransformationToWord = function (word) {
            return word[0].toUpperCase() + word.substring(1);
        };
        return CamelCaseConverter;
    }(CaseStyleConverter_1.CaseStyleConverter));
    exports.CamelCaseConverter = CamelCaseConverter;
});
define("Languages/Casing/FileSystemCaseConverter", ["require", "exports", "Languages/Casing/CaseStyleConverter"], function (require, exports, CaseStyleConverter_2) {
    "use strict";
    /**
     * Converts a name to "file/system/case".
     */
    var FileSystemCaseConverter = (function (_super) {
        __extends(FileSystemCaseConverter, _super);
        function FileSystemCaseConverter() {
            _super.apply(this, arguments);
        }
        /**
         * Converts a name to "file/system/case".
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in "file/system/case".
         */
        FileSystemCaseConverter.prototype.convert = function (name) {
            name = _super.prototype.convert.call(this, name);
            return name.substring(1);
        };
        /**
         * Transforms a word within a name to "file/system/case".
         *
         * @param word   A word within a name.
         * @returns The word transformed to "file/system/case".
         */
        FileSystemCaseConverter.prototype.applyTransformationToWord = function (word) {
            return "/" + word.toLowerCase();
        };
        return FileSystemCaseConverter;
    }(CaseStyleConverter_2.CaseStyleConverter));
    exports.FileSystemCaseConverter = FileSystemCaseConverter;
});
define("Languages/Casing/NoneConverter", ["require", "exports", "Languages/Casing/CaseStyleConverter"], function (require, exports, CaseStyleConverter_3) {
    "use strict";
    /**
     * Does nothing to a name.
     */
    var NoneConverter = (function (_super) {
        __extends(NoneConverter, _super);
        function NoneConverter() {
            _super.apply(this, arguments);
        }
        /**
         * @param name   A name.
         * @returns The original name with no changes.
         */
        NoneConverter.prototype.convert = function (name) {
            return name;
        };
        return NoneConverter;
    }(CaseStyleConverter_3.CaseStyleConverter));
    exports.NoneConverter = NoneConverter;
});
define("Languages/Casing/PackageLowerCaseConverter", ["require", "exports", "Languages/Casing/CaseStyleConverter"], function (require, exports, CaseStyleConverter_4) {
    "use strict";
    /**
     * Converts a name to "package.lower.case".
     */
    var PackageLowerCaseConverter = (function (_super) {
        __extends(PackageLowerCaseConverter, _super);
        function PackageLowerCaseConverter() {
            _super.apply(this, arguments);
        }
        /**
         * Converts a name to "package.lower.case".
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in "package.lower.case".
         */
        PackageLowerCaseConverter.prototype.convert = function (name) {
            name = _super.prototype.convert.call(this, name);
            return name.substring(1);
        };
        /**
         * Transforms a word within a name to "package.lower.case".
         *
         * @param word   A word within a name.
         * @returns The word transformed to "package.lower.case".
         */
        PackageLowerCaseConverter.prototype.applyTransformationToWord = function (word) {
            return "." + word.toLowerCase();
        };
        return PackageLowerCaseConverter;
    }(CaseStyleConverter_4.CaseStyleConverter));
    exports.PackageLowerCaseConverter = PackageLowerCaseConverter;
});
define("Languages/Casing/PackageUpperCaseConverter", ["require", "exports", "Languages/Casing/CaseStyleConverter"], function (require, exports, CaseStyleConverter_5) {
    "use strict";
    /**
     * Converts a name to "Package.Upper.Case".
     */
    var PackageUpperCaseConverter = (function (_super) {
        __extends(PackageUpperCaseConverter, _super);
        function PackageUpperCaseConverter() {
            _super.apply(this, arguments);
        }
        /**
         * Converts a name to "Package.Upper.Case".
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in "Package.Upper.Case".
         */
        PackageUpperCaseConverter.prototype.convert = function (name) {
            name = _super.prototype.convert.call(this, name);
            return name.substring(1);
        };
        /**
         * Transforms a word within a name to "Package.Upper.Case".
         *
         * @param word   A word within a name.
         * @returns The word transformed to "Package.Upper.Case".
         */
        PackageUpperCaseConverter.prototype.applyTransformationToWord = function (word) {
            return "." + word[0].toUpperCase() + word.substring(1).toLowerCase();
        };
        return PackageUpperCaseConverter;
    }(CaseStyleConverter_5.CaseStyleConverter));
    exports.PackageUpperCaseConverter = PackageUpperCaseConverter;
});
define("Languages/Casing/PascalCaseConverter", ["require", "exports", "Languages/Casing/CaseStyleConverter"], function (require, exports, CaseStyleConverter_6) {
    "use strict";
    /**
     * Converts a name to PascalCase.
     */
    var PascalCaseConverter = (function (_super) {
        __extends(PascalCaseConverter, _super);
        function PascalCaseConverter() {
            _super.apply(this, arguments);
        }
        /**
         * Transforms a word within a name to PascalCase.
         *
         * @param word   A word within a name.
         * @returns The word transformed to PascalCase.
         */
        PascalCaseConverter.prototype.applyTransformationToWord = function (word) {
            return word[0].toUpperCase() + word.substring(1);
        };
        return PascalCaseConverter;
    }(CaseStyleConverter_6.CaseStyleConverter));
    exports.PascalCaseConverter = PascalCaseConverter;
});
define("Languages/Casing/SnakeCaseConverter", ["require", "exports", "Languages/Casing/CaseStyleConverter"], function (require, exports, CaseStyleConverter_7) {
    "use strict";
    /**
     * Converts a name to snake_case.
     */
    var SnakeCaseConverter = (function (_super) {
        __extends(SnakeCaseConverter, _super);
        function SnakeCaseConverter() {
            _super.apply(this, arguments);
        }
        /**
         * Converts a name to snake_case.
         *
         * @param name   A name to convert.
         * @returns The name's equivalent in snake_case.
         */
        SnakeCaseConverter.prototype.convert = function (name) {
            name = _super.prototype.convert.call(this, name);
            return name.substring(0, name.length - 1);
        };
        /**
         * Transforms a word within a name to snake_case.
         *
         * @param word   A word within a name.
         * @returns The word transformed to snake_case.
         */
        SnakeCaseConverter.prototype.applyTransformationToWord = function (word) {
            return word.toLowerCase() + "_";
        };
        return SnakeCaseConverter;
    }(CaseStyleConverter_7.CaseStyleConverter));
    exports.SnakeCaseConverter = SnakeCaseConverter;
});
define("Languages/Casing/CaseStyleConverterBag", ["require", "exports", "Languages/Casing/CamelCaseConverter", "Languages/Casing/CaseStyle", "Languages/Casing/FileSystemCaseConverter", "Languages/Casing/NoneConverter", "Languages/Casing/PackageLowerCaseConverter", "Languages/Casing/PackageUpperCaseConverter", "Languages/Casing/PascalCaseConverter", "Languages/Casing/SnakeCaseConverter"], function (require, exports, CamelCaseConverter_1, CaseStyle_1, FileSystemCaseConverter_1, NoneConverter_1, PackageLowerCaseConverter_1, PackageUpperCaseConverter_1, PascalCaseConverter_1, SnakeCaseConverter_1) {
    "use strict";
    /**
     * A container for case style converters.
     */
    var CaseStyleConverterBag = (function () {
        /**
         * Initializes a new instance of the CaseStyleConverter class.
         */
        function CaseStyleConverterBag() {
            this.converters = (_a = {},
                _a[CaseStyle_1.CaseStyle.None.toString()] = new NoneConverter_1.NoneConverter(),
                _a[CaseStyle_1.CaseStyle.CamelCase.toString()] = new CamelCaseConverter_1.CamelCaseConverter(),
                _a[CaseStyle_1.CaseStyle.FileSystem.toString()] = new FileSystemCaseConverter_1.FileSystemCaseConverter(),
                _a[CaseStyle_1.CaseStyle.PackageLowerCase.toString()] = new PackageLowerCaseConverter_1.PackageLowerCaseConverter(),
                _a[CaseStyle_1.CaseStyle.PackageUpperCase.toString()] = new PackageUpperCaseConverter_1.PackageUpperCaseConverter(),
                _a[CaseStyle_1.CaseStyle.PascalCase.toString()] = new PascalCaseConverter_1.PascalCaseConverter(),
                _a[CaseStyle_1.CaseStyle.SnakeCase.toString()] = new SnakeCaseConverter_1.SnakeCaseConverter(),
                _a
            );
            var _a;
        }
        /**
         * Retrieves the case converter for the given casing style.
         *
         * @param caseStyle   A casing style.
         * @returns The case converter under the given asing style.
         */
        CaseStyleConverterBag.prototype.getConverter = function (caseStyle) {
            var caseStyleAlias = caseStyle.toString();
            if (!this.converters.hasOwnProperty(caseStyleAlias)) {
                throw new Error("Unknown case style requested: '" + caseStyle + "'.");
            }
            return this.converters[caseStyleAlias];
        };
        /**
         * Converts a name to a casing style.
         *
         * @param name   A name to convert.
         * @param casingStyle   A casing style.
         * @returns The name under the casing style.
         */
        CaseStyleConverterBag.prototype.convert = function (name, caseStyle) {
            return this.getConverter(caseStyle).convert(name);
        };
        return CaseStyleConverterBag;
    }());
    exports.CaseStyleConverterBag = CaseStyleConverterBag;
});
define("GlsParser", ["require", "exports", "Commands/CommandsBag", "Languages/Casing/CaseStyleConverterBag"], function (require, exports, CommandsBag_1, CaseStyleConverterBag_1) {
    "use strict";
    /**
     * Converter to transform raw GLS syntax into language code.
     */
    var GlsParser = (function () {
        /**
         * Initializes a new instance of the GlsParser class.
         *
         * @param context   A driving context for converting commands.
         */
        function GlsParser(context) {
            this.caseConverter = new CaseStyleConverterBag_1.CaseStyleConverterBag();
            this.context = context;
            this.commandsBag = new CommandsBag_1.CommandsBag(context);
        }
        /**
         * Parses a line of raw GLS syntax into the equivalent language code.
         *
         * @param line   A line of raw GLS syntax.
         * @returns The equivalent lines of code in the language.
         */
        GlsParser.prototype.parseCommand = function (line) {
            var parameters = this.separateLineComponents(line.trim());
            for (var i = 1; i < parameters.length; i += 1) {
                if (parameters[i][0] === "{") {
                    parameters[i] = this.recurseOnCommand(parameters[i]);
                }
            }
            return this.renderParsedCommand(parameters);
        };
        /**
         * Renders a parsed line into the equivalent language code.
         *
         * @param lineParsed   A parsed line from raw GLS syntax.
         * @returns The equivalent lines of code in the language.
         */
        GlsParser.prototype.renderParsedCommand = function (lineParsed) {
            return this.commandsBag.renderCommand(lineParsed);
        };
        /**
         * Converts a name to a casing style.
         *
         * @param name   A name to convert.
         * @param casingStyle   A casing style.
         * @returns The name under the casing style.
         */
        GlsParser.prototype.convertToCase = function (name, casingStyle) {
            return this.caseConverter.convert(name, casingStyle);
        };
        /**
         * Parses a sub-command of GLS syntax from within a full line.
         *
         * @param section   A section of raw GLS syntax.
         * @returns Text from the result of parsing this command.
         * @remarks Only the first result line is used.
         */
        GlsParser.prototype.recurseOnCommand = function (section) {
            var command = this.trimEndCharacters(section).trim();
            var lineResults = this.parseCommand(command);
            var line = lineResults.commandResults[0].text;
            for (var i = 1; i < lineResults.commandResults.length; i += 1) {
                line += "\n" + lineResults.commandResults[i].text;
            }
            return line;
        };
        /**
         * Separates a line into its command name and parameters.
         *
         * @param line   A raw line of GLS syntax.
         * @returns The line's command name, followed by any parameters.
         * @remarks This assumes the line is already whitespace-trimmed.
         */
        GlsParser.prototype.separateLineComponents = function (line) {
            var colonIndex = line.indexOf(":");
            if (colonIndex === -1) {
                return [line.trim()];
            }
            var output = [line.substring(0, colonIndex).trim()];
            for (var i = colonIndex + 2; i < line.length; i += 1) {
                var end = void 0, nextStart = void 0;
                switch (line[i]) {
                    case "{":
                        end = this.findSearchEnd(line, i, line[i], "}") + 1;
                        if (end === 0) {
                            throw new Error("Could not find end for '{' starting at position " + i + ".");
                        }
                        nextStart = end;
                        break;
                    case "(":
                        end = this.findSearchEnd(line, i, line[i], ")");
                        if (end === -1) {
                            throw new Error("Could not find end for '(' starting at position " + i + ".");
                        }
                        nextStart = end + 1;
                        i += 1;
                        break;
                    default:
                        end = this.findSearchEnd(line, i, " ", " ");
                        nextStart = end;
                        break;
                }
                if (end === -1) {
                    end = nextStart = line.length;
                }
                if (i !== end) {
                    output.push(line.substring(i, end));
                }
                i = nextStart;
            }
            return output;
        };
        /**
         * Trims the first and last characters from a String.
         *
         * @param text   A String.
         * @returns The same text, with end characters trimmed.
         */
        GlsParser.prototype.trimEndCharacters = function (text) {
            return text.substring(1, Math.max(text.length - 1, 1));
        };
        /**
         * Finds the corresponding end position for a starting separator.
         *
         * @param text   The String to search within.
         * @param index   The starting location of the starting separator.
         * @param starter   The starting separator, such as "{".
         * @param ender   The ending separator, suchas "}".
         * @returns The position of the starter's corresponding ender.
         */
        GlsParser.prototype.findSearchEnd = function (text, index, starter, ender) {
            var numStarts = 1;
            for (var i = index + 1; i < text.length; i += 1) {
                var current = text[i];
                if (current === ender) {
                    numStarts -= 1;
                    if (numStarts === 0) {
                        return i;
                    }
                }
                else if (current === starter) {
                    numStarts += 1;
                }
            }
            return -1;
        };
        return GlsParser;
    }());
    exports.GlsParser = GlsParser;
});
define("Conversions/Conversion", ["require", "exports", "Commands/LineResults"], function (require, exports, LineResults_56) {
    "use strict";
    /**
     * A single conversion run from raw GLS syntax to a language.
     */
    var Conversion = (function () {
        /**
         * Initializes a new instance of the Conversion class.
         */
        function Conversion(glsLines, context) {
            this.context = context;
            this.glsLines = glsLines;
        }
        /**
         * Converts the stored lines of GLS syntax to language code.
         *
         * @returns Converted lines of language code.
         */
        Conversion.prototype.convert = function () {
            this.allLineResults = [];
            this.imports = {};
            this.generateAllLineResults();
            this.convertImportsToLineResults();
            var output = [];
            var indentation = 0;
            for (var i = 0; i < this.allLineResults.length; i += 1) {
                var lineResults = this.allLineResults[i];
                var commandResults = lineResults.commandResults;
                for (var j = 0; j < commandResults.length; j += 1) {
                    var result = commandResults[j];
                    if (result.indentation < 0) {
                        indentation += result.indentation;
                    }
                    if (result.text !== "\0") {
                        output.push(this.generateTabs(indentation) + result.text);
                    }
                    if (result.indentation > 0) {
                        indentation += result.indentation;
                    }
                }
                if (lineResults.addSemicolon) {
                    output[output.length - 1] += this.context.getLanguage().properties.style.semicolon;
                }
            }
            return output;
        };
        /**
         * Generates line results from raw GLS syntax.
         */
        Conversion.prototype.generateAllLineResults = function () {
            for (var i = 0; i < this.glsLines.length; i += 1) {
                if (this.glsLines[i].trim() === "") {
                    this.allLineResults.push(LineResults_56.LineResults.newSingleLine("", false));
                    continue;
                }
                var lineResults = this.context.getParser().parseCommand(this.glsLines[i]);
                this.allLineResults.push(lineResults);
                if (lineResults.addedImports !== undefined) {
                    this.addImports(lineResults.addedImports);
                }
            }
        };
        /**
         * Adds new imports to the stored imports.
         *
         * @param addedImports   New imports to store.
         */
        Conversion.prototype.addImports = function (addedImports) {
            for (var packageName in addedImports) {
                this.addImportItems(packageName, addedImports[packageName]);
            }
        };
        /**
         * Adds items to a package's stored imports.
         *
         * @param packageName   The name of a package.
         * @param items   Items to import from the package.
         */
        Conversion.prototype.addImportItems = function (packageName, items) {
            if (!this.imports.hasOwnProperty(packageName)) {
                this.imports[packageName] = items;
                return;
            }
            for (var i = 0; i < items.length; i += 1) {
                if (this.imports[packageName].indexOf(items[i]) !== -1) {
                    this.imports[packageName].push(items[i]);
                }
            }
        };
        /**
         * Transfers captured import statements from commands to line results.
         */
        Conversion.prototype.convertImportsToLineResults = function () {
            if (Object.keys(this.imports).length !== 0) {
                this.allLineResults.unshift(LineResults_56.LineResults.newSingleLine("", false));
            }
            for (var packageName in this.imports) {
                this.convertImportToLineResults(packageName, this.imports[packageName]);
            }
        };
        /**
         * Converts a captured import statement to line results.
         *
         * @param packageName   The package name importing from.
         * @param items   Items being imported from the package.
         */
        Conversion.prototype.convertImportToLineResults = function (packageName, items) {
            var parameters = ["import", packageName].concat(items);
            this.allLineResults.unshift(this.context.convertParsed(parameters));
        };
        /**
         * Generates spaces equivalent to 4-space code tabbing.
         *
         * @param amount   How many tabs should be added.
         * @returns An all-spaces String of length = amount * 4.
         */
        Conversion.prototype.generateTabs = function (amount) {
            var output = "";
            for (var i = 0; i < amount; i += 1) {
                output += "    ";
            }
            return output;
        };
        return Conversion;
    }());
    exports.Conversion = Conversion;
});
define("Conversions/ConversionContext", ["require", "exports", "GlsParser", "Conversions/Conversion"], function (require, exports, GlsParser_1, Conversion_1) {
    "use strict";
    /**
     * Driving context to use a GlsParser with a language to produce code.
     */
    var ConversionContext = (function () {
        /**
         * Initializes a new instance of the ConversionContext class.
         *
         * @param language   The language this context is converting GLS code into.
         */
        function ConversionContext(language) {
            this.language = language;
            this.parser = new GlsParser_1.GlsParser(this);
        }
        /**
         * @returns The language this context is converting GLS code into.
         */
        ConversionContext.prototype.getLanguage = function () {
            return this.language;
        };
        /**
         * @returns The converter for transforming raw GLS syntax into language code.
         */
        ConversionContext.prototype.getParser = function () {
            return this.parser;
        };
        /**
         * Converts raw GLS syntax to the context language.
         *
         * @param lines   Lines of raw GLS syntax.
         * @returns Equivalent lines of code in the context language.
         */
        ConversionContext.prototype.convert = function (lines) {
            var converter = new Conversion_1.Conversion(lines, this);
            return converter.convert();
        };
        /**
         * Converts a single-line command with a single argument.
         *
         * @param command   The name of the command.
         * @param argumentRaw   A raw argument for the command.
         * @returns An equivalent line of code in the context language.
         */
        ConversionContext.prototype.convertCommon = function (command, argumentRaw) {
            var lineResults = this.parser.renderParsedCommand([command, argumentRaw]);
            return lineResults.commandResults[0].text;
        };
        /**
         * Converts a command with pre-parsed arguments.
         *
         * @param lineParsed   A parsed line from raw GLS syntax.
         * @returns The equivalent lines of code in the language.
         */
        ConversionContext.prototype.convertParsed = function (parameters) {
            return this.parser.renderParsedCommand(parameters);
        };
        /**
         * Converts a name to a casing style.
         *
         * @param name   A name to convert.
         * @param casingStyle   A casing style.
         * @returns The name under the casing style.
         */
        ConversionContext.prototype.convertToCase = function (name, casingStyle) {
            return this.parser.convertToCase(name, casingStyle);
        };
        return ConversionContext;
    }());
    exports.ConversionContext = ConversionContext;
});
define("Commands/Parameters/Restrictions", ["require", "exports", "Commands/Parameters/SingleParameter", "Commands/Parameters/RepeatingParameters"], function (require, exports, SingleParameter_50, RepeatingParameters_14) {
    "use strict";
    /**
     * Summary of parameter restrictions for a command.
     */
    var Restrictions = (function () {
        /**
         * Initializes a new instance of the Restrictions class.
         *
         * @param parameters   Descriptions of parameters passed to a command.
         */
        function Restrictions(parameters) {
            /**
             * The minimum number of allowed parameters.
             */
            this.minimum = 0;
            /**
             * The maximum number of allowed parameters.
             */
            this.maximum = 0;
            /**
             * Known RepeatingParameters lengths above the minimum.
             */
            this.intervals = [];
            for (var i = 0; i < parameters.length; i += 1) {
                var parameter = parameters[i];
                if (parameter instanceof SingleParameter_50.SingleParameter) {
                    this.addSingleParameter(parameter);
                }
                else if (parameter instanceof RepeatingParameters_14.RepeatingParameters) {
                    this.addRepeatingParameters(parameter);
                }
            }
        }
        /**
         *
         * @remarks Having multiple intervals results in none being checked.
         * @todo Implement checking multiple intervals.
         */
        Restrictions.prototype.checkValidity = function (inputs) {
            this.checkBasicRange(inputs);
            if (this.intervals.length === 1) {
                this.checkIntervalRange(inputs);
            }
        };
        /**
         * Checks that command inputs are within the expected length range.
         *
         * @param inputs   Input parameters passed to a command.
         */
        Restrictions.prototype.checkBasicRange = function (inputs) {
            var inputsLength = inputs.length - 1;
            if (inputsLength >= this.minimum && inputsLength <= this.maximum) {
                return;
            }
            var descriptor = "" + this.stringifyNumber(this.minimum);
            if (this.maximum !== this.minimum) {
                descriptor += " to " + this.stringifyNumber(this.maximum);
            }
            descriptor += " parameter";
            if (this.minimum === 1) {
                if (this.maximum !== 1) {
                    descriptor += "(s)";
                }
            }
            else {
                descriptor += "s";
            }
            throw new Error("'" + inputs[0] + "' expects " + descriptor + " but got " + inputsLength + ".");
        };
        /**
         * Checks that command inputs match an extpected length interval.
         *
         * @param inputs   Input parameters passed to a command.
         */
        Restrictions.prototype.checkIntervalRange = function (inputs) {
            var remaining = inputs.length - this.minimum;
            if (remaining % this.intervals.length !== 0) {
                throw new Error("'" + inputs[0] + "' expects extra parameters to be a multiple of " + this.intervals[0] + ", not " + inputs.length + ".");
            }
        };
        /**
         * @param number   A number of parameters.
         * @returns A sentence-ready description of the number.
         */
        Restrictions.prototype.stringifyNumber = function (number) {
            if (number === Infinity) {
                return "infinite";
            }
            return number.toString();
        };
        /**
         * Marks a single parameter's restrictions.
         *
         * @param parameter   A description of a parameter.
         */
        Restrictions.prototype.addSingleParameter = function (parameter) {
            if (parameter.required) {
                this.minimum += 1;
            }
            this.maximum += 1;
        };
        /**
         * Marks a repeating parameter's restrictions.
         *
         * @param parameter   A description of a parameter.
         */
        Restrictions.prototype.addRepeatingParameters = function (parameter) {
            this.intervals.push(parameter.parameters.length);
            this.maximum = Infinity;
        };
        return Restrictions;
    }());
    exports.Restrictions = Restrictions;
});
define("Commands/Command", ["require", "exports", "Commands/CommandResult", "Commands/Parameters/Restrictions"], function (require, exports, CommandResult_24, Restrictions_1) {
    "use strict";
    /**
     * Abstract base class for commands that may be rendered into language code.
     */
    var Command = (function () {
        /**
         * Initializes a new instance of the Command class.
         *
         * @param context   The driving context for converting the command.
         */
        function Command(context) {
            this.context = context;
            this.language = context.getLanguage();
            this.parameterRestrictions = new Restrictions_1.Restrictions(this.getParameters());
        }
        /**
         * @returns Whether this command's lines should end with a semicolon.
         */
        Command.prototype.getAddsSemicolon = function () {
            return this.addsSemicolon;
        };
        /**
         * @returns Information on parameters this command takes in.
         */
        Command.prototype.getParameters = function () {
            return Command.defaultParameters;
        };
        /**
         * Checks if parameters are valid, throwing an error if not.
         *
         * @param parameters   The command's name, followed by any parameters.
         */
        Command.prototype.checkParameterValidity = function (parameters) {
            this.parameterRestrictions.checkValidity(parameters);
        };
        /**
         * Adds a portion of raw syntax that may contain endlines.
         *
         * @param lines   In-progress line(s) of code in the rendering language.
         * @param extra   Raw syntax to add to the lines.
         * @param indentation   How much indentation the last line should be.
         */
        Command.prototype.addLineEnder = function (lines, extra, indentation) {
            var currentLine = lines[lines.length - 1];
            var endlineIndex = extra.indexOf("\n");
            if (endlineIndex === -1) {
                currentLine.text += extra;
                currentLine.indentation = indentation;
                return;
            }
            var currentIndex = 0;
            while (endlineIndex !== -1) {
                var component = extra.substring(currentIndex, endlineIndex);
                currentLine.text += component;
                currentIndex = endlineIndex;
                currentLine = new CommandResult_24.CommandResult("", 0);
                lines.push(currentLine);
                endlineIndex = extra.indexOf("\n", currentIndex + 1);
            }
            if (currentIndex !== -1) {
                currentLine.text = extra.substring(currentIndex + 1);
            }
            lines[lines.length - 1].indentation = indentation;
        };
        /**
         * Default information on parameters a command takes in (none).
         */
        Command.defaultParameters = [];
        return Command;
    }());
    exports.Command = Command;
});
define("Commands/ArrayInitializeCommand", ["require", "exports", "Commands/Command", "Commands/LineResults", "Commands/Parameters/RepeatingParameters", "Commands/Parameters/SingleParameter"], function (require, exports, Command_57, LineResults_57, RepeatingParameters_15, SingleParameter_51) {
    "use strict";
    /**
     * A command for initializing a new array.
     */
    var ArrayInitializeCommand = (function (_super) {
        __extends(ArrayInitializeCommand, _super);
        function ArrayInitializeCommand() {
            _super.apply(this, arguments);
        }
        /**
         * @returns Information on parameters this command takes in.
         */
        ArrayInitializeCommand.prototype.getParameters = function () {
            return ArrayInitializeCommand.parameters;
        };
        /**
         * Renders the command for a language with the given parameters.
         *
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type[, item, ...]).
         */
        ArrayInitializeCommand.prototype.render = function (parameters) {
            var typeName = this.context.convertCommon("type", parameters[1]), output = "";
            if (this.language.properties.arrays.initializeAsNew) {
                output += "new ";
            }
            if (this.language.properties.arrays.initializeByType) {
                if (parameters.length === 2) {
                    output += typeName + "[0]";
                    return LineResults_57.LineResults.newSingleLine(output, false);
                }
                output += this.context.convertCommon("type", typeName + "[]");
            }
            if (this.language.properties.arrays.initializeByType) {
                output += " { ";
            }
            else {
                output += "[";
            }
            output += parameters.slice(2).join(", ");
            if (this.language.properties.arrays.initializeByType) {
                output += " }";
            }
            else {
                output += "]";
            }
            return LineResults_57.LineResults.newSingleLine(output, false);
        };
        /**
         * Information on parameters this command takes in.
         */
        ArrayInitializeCommand.parameters = [
            new SingleParameter_51.SingleParameter("type", "The type of object.", true),
            new RepeatingParameters_15.RepeatingParameters("Items initially in the array.", [
                new SingleParameter_51.SingleParameter("item", "An item initially in the array.", false)
            ])
        ];
        return ArrayInitializeCommand;
    }(Command_57.Command));
    exports.ArrayInitializeCommand = ArrayInitializeCommand;
});
define("Languages/CLikeLanguage", ["require", "exports", "Languages/Language", "Languages/Casing/CaseStyle"], function (require, exports, Language_1, CaseStyle_2) {
    "use strict";
    /**
     * A summary of information for a C-like language.
     */
    var CLikeLanguage = (function (_super) {
        __extends(CLikeLanguage, _super);
        function CLikeLanguage() {
            _super.apply(this, arguments);
        }
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        CLikeLanguage.prototype.generateClassProperties = function (classes) {
            classes.declareEnd = "}";
            classes.declareExtendsRight = "";
            classes.declareStartLeft = "class ";
            classes.newStart = "new ";
            classes.staticLabel = "static ";
            classes.this = "this";
        };
        /**
         * Generates metadata on class generics.
         *
         * @param members   A property container for metadata on class generics.
         */
        CLikeLanguage.prototype.generateClassGenericProperties = function (generics) {
            generics.left = "<";
            generics.middle = ", ";
            generics.right = ">";
            generics.used = true;
        };
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        CLikeLanguage.prototype.generateClassMemberVariableProperties = function (variables) {
            variables.private = "private ";
            variables.privateCase = CaseStyle_2.CaseStyle.CamelCase;
            variables.privatePrefix = "";
            variables.protected = "protected ";
            variables.protectedPrefix = "";
            variables.public = "public ";
            variables.publicPrefix = "";
        };
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        CLikeLanguage.prototype.generateCommentProperties = function (comments) {
            comments.blockEnd = "*/";
            comments.blockLineLeft = "";
            comments.blockLineRight = "";
            comments.blockStart = "/*";
            comments.lineLeft = "// ";
            comments.lineRight = "";
        };
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        CLikeLanguage.prototype.generateConditionalProperties = function (conditionals) {
            conditionals.elif = "else if";
            conditionals.else = "else";
            conditionals.end = "}";
            conditionals.if = "if";
            conditionals.startLeft = " (";
            conditionals.while = "while";
        };
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        CLikeLanguage.prototype.generateEnumProperties = function (enums) {
            enums.declareStartLeft = "enum ";
            enums.declareValueLeft = " = ";
            enums.declareValueRight = "";
            enums.declareCommaRight = ",";
            enums.valueLeft = "";
            enums.valueMiddle = ".";
            enums.valueRight = "";
        };
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        CLikeLanguage.prototype.generateExceptionProperties = function (exceptions) {
            exceptions.catch = "catch";
            exceptions.finally = "finally";
            exceptions.throw = "throw";
            exceptions.try = "try";
            exceptions.variablePrefix = "";
        };
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        CLikeLanguage.prototype.generateFunctionProperties = function (functions) {
            functions.defineEnd = "}";
            functions.explicitReturns = true;
        };
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        CLikeLanguage.prototype.generateLambdaProperties = function (lambdas) {
            lambdas.functionLeft = "(";
            lambdas.functionRight = "";
            lambdas.parameterTypeRequired = false;
            lambdas.returnTypeRequired = false;
        };
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        CLikeLanguage.prototype.generateLoopProperties = function (loops) {
            loops.break = "break";
            loops.continue = "continue";
            loops.for = "for";
            loops.forEachEnd = "}";
            loops.forEachRight = ") {";
        };
        /**
         * Generates metadata on operators.
         *
         * @param operators   A property container for metadata on operators.
         */
        CLikeLanguage.prototype.generateOperatorProperties = function (operators) {
            operators.and = "&&";
            operators.decreaseBy = "-=";
            operators.divide = "/";
            operators.divideBy = "/=";
            operators.equals = "=";
            operators.equalTo = "==";
            operators.greaterThan = ">";
            operators.greaterThanOrEqualTo = ">=";
            operators.increaseBy = "+=";
            operators.lessThan = "<";
            operators.lessThanOrEqualTo = "<=";
            operators.minus = "-";
            operators.mod = "%";
            operators.multiplyBy = "*=";
            operators.not = "!";
            operators.notEqualTo = "!=";
            operators.or = "||";
            operators.plus = "+";
            operators.times = "*";
        };
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        CLikeLanguage.prototype.generateStringProperties = function (strings) {
            strings.concatenate = " + ";
        };
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        CLikeLanguage.prototype.generateStyleProperties = function (style) {
            style.semicolon = ";";
        };
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        CLikeLanguage.prototype.generateVariableProperties = function (variables) {
            variables.declarationRequired = true;
        };
        return CLikeLanguage;
    }(Language_1.Language));
    exports.CLikeLanguage = CLikeLanguage;
});
define("Languages/CSharp", ["require", "exports", "Languages/CLikeLanguage", "Languages/Casing/CaseStyle", "Languages/Properties/NativeCallProperties"], function (require, exports, CLikeLanguage_1, CaseStyle_3, NativeCallProperties_2) {
    "use strict";
    /**
     * A summary of information for the C# language.
     */
    var CSharp = (function (_super) {
        __extends(CSharp, _super);
        function CSharp() {
            _super.apply(this, arguments);
        }
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        CSharp.prototype.generateArrayProperties = function (arrays) {
            arrays.className = "Array";
            arrays.initializeAsNew = true;
            arrays.initializeByType = true;
            arrays.length = new NativeCallProperties_2.NativeCallProperties("Length", NativeCallProperties_2.NativeCallScope.Member, NativeCallProperties_2.NativeCallType.Property);
        };
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        CSharp.prototype.generateBooleanProperties = function (booleans) {
            booleans.className = "bool";
        };
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        CSharp.prototype.generateClassProperties = function (classes) {
            _super.prototype.generateClassProperties.call(this, classes);
            classes.aliases = {
                "boolean": "bool",
                "dictionary": "Dictionary",
                "list": "List",
                "number": "float"
            };
            classes.declareExtendsLeft = " : ";
            classes.declareStartRight = "\n{";
            classes.superConstructor = "base";
        };
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        CSharp.prototype.generateClassMemberVariableProperties = function (variables) {
            _super.prototype.generateClassMemberVariableProperties.call(this, variables);
            variables.protectedCase = CaseStyle_3.CaseStyle.PascalCase;
            variables.publicCase = CaseStyle_3.CaseStyle.PascalCase;
        };
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        CSharp.prototype.generateCommentProperties = function (comments) {
            _super.prototype.generateCommentProperties.call(this, comments);
            comments.docAsXml = true;
            comments.docEnd = "\0";
            comments.docLineEnd = "";
            comments.docLineStart = "/// ";
            comments.docStart = "\0";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "param",
                "returns": "returns",
                "summary": "summary",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "parameter": "name"
            };
        };
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        CSharp.prototype.generateConditionalProperties = function (conditionals) {
            _super.prototype.generateConditionalProperties.call(this, conditionals);
            conditionals.continueLeft = "}\n";
            conditionals.continueRight = "{";
            conditionals.startRight = ")\n{";
        };
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        CSharp.prototype.generateDictionaryProperties = function (dictionaries) {
            dictionaries.className = "Dictionary";
            dictionaries.containsKey = new NativeCallProperties_2.NativeCallProperties("ContainsKey", NativeCallProperties_2.NativeCallScope.Member, NativeCallProperties_2.NativeCallType.Function);
            dictionaries.keys = new NativeCallProperties_2.NativeCallProperties("Keys", NativeCallProperties_2.NativeCallScope.Member, NativeCallProperties_2.NativeCallType.Property);
            dictionaries.initializeAsNew = true;
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairComma = ",";
            dictionaries.initializePairLeft = "{ ";
            dictionaries.initializePairMiddle = ", ";
            dictionaries.initializePairRight = " }";
            dictionaries.initializeStart = "\n{";
            dictionaries.requiredImports = {
                "System/Collections/Generic": ["Dictionary"]
            };
            dictionaries.typeLeft = "<";
            dictionaries.typeMiddle = ", ";
            dictionaries.typeRight = ">";
        };
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        CSharp.prototype.generateEnumProperties = function (enums) {
            _super.prototype.generateEnumProperties.call(this, enums);
            enums.declareStartRight = "\n{";
            enums.declareLastRight = "";
        };
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        CSharp.prototype.generateExceptionProperties = function (exceptions) {
            exceptions.className = "Error";
        };
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        CSharp.prototype.generateFunctionProperties = function (functions) {
            _super.prototype.generateFunctionProperties.call(this, functions);
            functions.defineStartLeft = " ";
            functions.defineStartRight = "\n{";
        };
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        CSharp.prototype.generateGeneralProperties = function (general) {
            general.name = "C#";
            general.extension = ".cs";
        };
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        CSharp.prototype.generateImportProperties = function (imports) {
            imports.case = CaseStyle_3.CaseStyle.PackageUpperCase;
            imports.explicit = false;
            imports.left = "using ";
            imports.right = ";";
        };
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        CSharp.prototype.generateLambdaProperties = function (lambdas) {
            _super.prototype.generateLambdaProperties.call(this, lambdas);
            lambdas.functionMiddle = ") => ";
        };
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        CSharp.prototype.generateListProperties = function (lists) {
            lists.className = "List";
            lists.push = new NativeCallProperties_2.NativeCallProperties("Add", NativeCallProperties_2.NativeCallScope.Member, NativeCallProperties_2.NativeCallType.Function);
            lists.requiredImports = {
                "System/Collections/Generic": ["List"]
            };
        };
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        CSharp.prototype.generateLoopProperties = function (loops) {
            _super.prototype.generateLoopProperties.call(this, loops);
            loops.foreach = "foreach";
            loops.forEachGetKeys = ".Keys";
            loops.forEachGetPairs = "";
            loops.forEachMiddle = " in ";
            loops.forEachPairsAsPair = true;
            loops.forEachPairsPairClass = "KeyValuePair";
            loops.forEachPairsRetrieveKey = ".Key";
            loops.forEachPairsRetrieveValue = ".Value";
            loops.forEachRight = "";
        };
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        CSharp.prototype.generateNumberProperties = function (numbers) {
            numbers.className = "float";
        };
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        CSharp.prototype.generateOutputProperties = function (output) {
            output.print = "Console.WriteLine";
        };
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        CSharp.prototype.generateStringProperties = function (strings) {
            _super.prototype.generateStringProperties.call(this, strings);
            strings.className = "string";
            strings.index = new NativeCallProperties_2.NativeCallProperties("IndexOf", NativeCallProperties_2.NativeCallScope.Member, NativeCallProperties_2.NativeCallType.Function);
            strings.length = new NativeCallProperties_2.NativeCallProperties("Length", NativeCallProperties_2.NativeCallScope.Member, NativeCallProperties_2.NativeCallType.Property);
        };
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        CSharp.prototype.generateStyleProperties = function (style) {
            _super.prototype.generateStyleProperties.call(this, style);
            style.fileEndLines = ["}"];
            style.fileIndentation = 1;
            style.fileStartLines = [
                "using System;",
                "using System.Collections.Generic;",
                "",
                "namespace {0}",
                "{",
            ];
            style.mainEndLines = [
                "    }",
                "}"
            ];
            style.mainIndentation = 2;
            style.mainStartLines = [
                "class Program",
                "{",
                "    public static void Main()",
                "    {"
            ];
            style.printEnd = ")";
            style.printStart = "Console.WriteLine(";
            style.separateBraceLines = true;
        };
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        CSharp.prototype.generateVariableProperties = function (variables) {
            _super.prototype.generateVariableProperties.call(this, variables);
            variables.aliases = {
                "infinity": "float.PositiveInfinity"
            };
            variables.castLeft = "(";
            variables.castRight = ")";
            variables.declaration = "";
            variables.explicitTypes = true;
            variables.null = "null";
        };
        return CSharp;
    }(CLikeLanguage_1.CLikeLanguage));
    exports.CSharp = CSharp;
});
define("Languages/Java", ["require", "exports", "Languages/CLikeLanguage", "Languages/Casing/CaseStyle", "Languages/Properties/NativeCallProperties"], function (require, exports, CLikeLanguage_2, CaseStyle_4, NativeCallProperties_3) {
    "use strict";
    /**
     * A summary of information for the Java language.
     */
    var Java = (function (_super) {
        __extends(Java, _super);
        function Java() {
            _super.apply(this, arguments);
        }
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        Java.prototype.generateArrayProperties = function (arrays) {
            arrays.className = "Array";
            arrays.initializeAsNew = true;
            arrays.initializeByType = true;
            arrays.length = new NativeCallProperties_3.NativeCallProperties("length", NativeCallProperties_3.NativeCallScope.Member, NativeCallProperties_3.NativeCallType.Function);
        };
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        Java.prototype.generateBooleanProperties = function (booleans) {
            booleans.className = "boolean";
        };
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        Java.prototype.generateClassProperties = function (classes) {
            _super.prototype.generateClassProperties.call(this, classes);
            classes.aliases = {
                "boolean": "boolean",
                "dictionary": "HashMap",
                "list": "ArrayList",
                "number": "double"
            };
            classes.declareExtendsLeft = " extends ";
            classes.declareStartRight = " {";
            classes.superConstructor = "super";
        };
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        Java.prototype.generateClassMemberVariableProperties = function (variables) {
            _super.prototype.generateClassMemberVariableProperties.call(this, variables);
            variables.protectedCase = CaseStyle_4.CaseStyle.CamelCase;
            variables.publicCase = CaseStyle_4.CaseStyle.CamelCase;
        };
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        Java.prototype.generateCommentProperties = function (comments) {
            _super.prototype.generateCommentProperties.call(this, comments);
            comments.docEnd = " */";
            comments.docLineEnd = "";
            comments.docLineStart = " * ";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "param",
                "returns": "returns",
                "summary": "",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "summary": "\0",
                "parameter": ""
            };
            comments.docTagEnd = " ";
            comments.docTagSpaceAfter = "  ";
            comments.docTagStart = "@";
            comments.docStart = "/**";
        };
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        Java.prototype.generateConditionalProperties = function (conditionals) {
            _super.prototype.generateConditionalProperties.call(this, conditionals);
            conditionals.continueLeft = "} ";
            conditionals.continueRight = " {";
            conditionals.startRight = ") {";
        };
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        Java.prototype.generateDictionaryProperties = function (dictionaries) {
            dictionaries.className = "HashMap";
            dictionaries.containsKey = new NativeCallProperties_3.NativeCallProperties("containsKey", NativeCallProperties_3.NativeCallScope.Member, NativeCallProperties_3.NativeCallType.Function);
            dictionaries.keys = new NativeCallProperties_3.NativeCallProperties("keySet", NativeCallProperties_3.NativeCallScope.Member, NativeCallProperties_3.NativeCallType.Function);
            dictionaries.initializeAsNew = true;
            dictionaries.initializeEnd = "}}";
            dictionaries.initializePairComma = "";
            dictionaries.initializeStart = "() {{";
            dictionaries.initializePairLeft = "put(";
            dictionaries.initializePairMiddle = ", ";
            dictionaries.initializePairRight = ");";
            dictionaries.requiredImports = {
                "java.util": ["HashMap"]
            };
            dictionaries.typeLeft = "<";
            dictionaries.typeMiddle = ", ";
            dictionaries.typeRight = ">";
        };
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        Java.prototype.generateEnumProperties = function (enums) {
            _super.prototype.generateEnumProperties.call(this, enums);
            enums.declareStartRight = " {";
            enums.declareValueLeft = "(";
            enums.declareValueRight = ")";
            enums.declareLastRight = "";
        };
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        Java.prototype.generateExceptionProperties = function (exceptions) {
            exceptions.className = "Exception";
        };
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        Java.prototype.generateFunctionProperties = function (functions) {
            _super.prototype.generateFunctionProperties.call(this, functions);
            functions.defineStartLeft = " ";
            functions.defineStartRight = " {";
        };
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        Java.prototype.generateGeneralProperties = function (general) {
            general.name = "Java";
            general.extension = ".java";
        };
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        Java.prototype.generateImportProperties = function (imports) {
            imports.case = CaseStyle_4.CaseStyle.PackageLowerCase;
            imports.explicit = true;
            imports.explicitLines = true;
            imports.left = "import ";
            imports.middle = ".";
            imports.right = ";";
        };
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        Java.prototype.generateLambdaProperties = function (lambdas) {
            _super.prototype.generateLambdaProperties.call(this, lambdas);
            lambdas.functionMiddle = ") -> ";
        };
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        Java.prototype.generateListProperties = function (lists) {
            lists.className = "ArrayList";
            lists.push = new NativeCallProperties_3.NativeCallProperties("add", NativeCallProperties_3.NativeCallScope.Member, NativeCallProperties_3.NativeCallType.Function);
            lists.requiredImports = {
                "java.util": ["ArrayList"]
            };
        };
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        Java.prototype.generateLoopProperties = function (loops) {
            _super.prototype.generateLoopProperties.call(this, loops);
            loops.foreach = "for";
            loops.forEachGetKeys = ".keySet()";
            loops.forEachGetPairs = ".entrySet()";
            loops.forEachMiddle = " : ";
            loops.forEachPairsAsPair = true;
            loops.forEachPairsPairClass = "Map.Entry";
            loops.forEachPairsRetrieveKey = ".getKey()";
            loops.forEachPairsRetrieveValue = ".getValue()";
            loops.forEachRight = "";
        };
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        Java.prototype.generateNumberProperties = function (numbers) {
            numbers.className = "double";
        };
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        Java.prototype.generateOutputProperties = function (output) {
            output.print = "System.out.println";
        };
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        Java.prototype.generateStringProperties = function (strings) {
            _super.prototype.generateStringProperties.call(this, strings);
            strings.className = "string";
            strings.index = new NativeCallProperties_3.NativeCallProperties("indexOf", NativeCallProperties_3.NativeCallScope.Member, NativeCallProperties_3.NativeCallType.Function);
            strings.length = new NativeCallProperties_3.NativeCallProperties("length", NativeCallProperties_3.NativeCallScope.Member, NativeCallProperties_3.NativeCallType.Function);
        };
        /**
         * Generates metadata on style.
         *
         * @param style   A property container for metadata on style.
         */
        Java.prototype.generateStyleProperties = function (style) {
            _super.prototype.generateStyleProperties.call(this, style);
            style.fileEndLines = [];
            style.fileIndentation = 0;
            style.fileStartLines = [
                "package {0};",
                "",
                "import java.util.*;",
                "",
            ];
            style.mainEndLines = [
                "    }",
                "}"
            ];
            style.mainIndentation = 2;
            style.mainStartLines = [
                "class Program {",
                "    public static void main(String[] args) {",
            ];
            style.printEnd = ")";
            style.printStart = "System.out.println(";
        };
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        Java.prototype.generateVariableProperties = function (variables) {
            _super.prototype.generateVariableProperties.call(this, variables);
            variables.aliases = {
                "infinity": "double.POSITIVE_INFINITY"
            };
            variables.castLeft = "(";
            variables.castRight = ")";
            variables.declaration = "";
            variables.explicitTypes = true;
            variables.null = "null";
        };
        return Java;
    }(CLikeLanguage_2.CLikeLanguage));
    exports.Java = Java;
});
define("Languages/PythonicLanguage", ["require", "exports", "Languages/Language", "Languages/Properties/NativeCallProperties"], function (require, exports, Language_2, NativeCallProperties_4) {
    "use strict";
    /**
     * A summary of information for a Pythonic language.
     */
    var PythonicLanguage = (function (_super) {
        __extends(PythonicLanguage, _super);
        function PythonicLanguage() {
            _super.apply(this, arguments);
        }
        /**
         * Generates metadata on classes.
         *
         * @param classes   The property container for metadata on classes.
         */
        PythonicLanguage.prototype.generateClassProperties = function (classes) {
            classes.constructorUsesKeyword = true;
            classes.newStart = "new ";
            classes.staticLabel = "static ";
            classes.this = "self";
        };
        /**
         * Generates metadata on class generics.
         *
         * @param generics   The property container for metadata on class generics.
         */
        PythonicLanguage.prototype.generateClassGenericProperties = function (generics) {
            // Unused
        };
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        PythonicLanguage.prototype.generateClassMemberVariableProperties = function (variables) {
            variables.private = "";
            variables.protected = "";
            variables.public = "";
            variables.publicPrefix = "";
            variables.skipMemberVariables = true;
        };
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   The property container for metadata on conditionals.
         */
        PythonicLanguage.prototype.generateConditionalProperties = function (conditionals) {
            conditionals.continueLeft = "";
            conditionals.else = "else";
            conditionals.end = "\0";
            conditionals.if = "if";
            conditionals.startLeft = " ";
            conditionals.while = "while";
        };
        /**
         * Generates properties on dictionaries.
         *
         * @param dictionaries   The property container for metadata on dictionaries.
         */
        PythonicLanguage.prototype.generateDictionaryProperties = function (dictionaries) {
            dictionaries.containsKey = new NativeCallProperties_4.NativeCallProperties(" in ", NativeCallProperties_4.NativeCallScope.Operator, NativeCallProperties_4.NativeCallType.FloatingLeft);
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairComma = ",";
            dictionaries.initializePairLeft = "";
            dictionaries.initializePairMiddle = ": ";
            dictionaries.initializePairRight = "";
            dictionaries.initializeStart = "{";
        };
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        PythonicLanguage.prototype.generateEnumProperties = function (enums) {
            enums.declareStartLeft = "class ";
            enums.declareValueRight = "";
            enums.declareCommaRight = "";
            enums.declareLastRight = "";
            enums.valueLeft = "";
            enums.valueRight = "";
        };
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   The property container for metadata on exceptions.
         */
        PythonicLanguage.prototype.generateExceptionProperties = function (exceptions) {
            exceptions.catch = "catch";
            exceptions.finally = "finally";
            exceptions.throw = "throw";
            exceptions.try = "try";
            exceptions.variablePrefix = "";
        };
        /**
         * Generates metadata on functions.
         *
         * @param functions   The property container for metadata on functions.
         */
        PythonicLanguage.prototype.generateFunctionProperties = function (functions) {
            functions.defineStartLeft = "def ";
            functions.defineStartRight = ":";
        };
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   The property container for metadata on lambdas.
         */
        PythonicLanguage.prototype.generateLambdaProperties = function (lambdas) {
            lambdas.parameterTypeRequired = false;
            lambdas.returnTypeRequired = false;
        };
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        PythonicLanguage.prototype.generateListProperties = function (lists) {
            lists.asArray = true;
        };
        /**
         * Generates metadata on loops.
         *
         * @param loops   The property container for metadata on loops.
         */
        PythonicLanguage.prototype.generateLoopProperties = function (loops) {
            loops.break = "break";
            loops.continue = "continue";
            loops.for = "for";
            loops.foreach = "for";
            loops.forEachMiddle = " in ";
            loops.rangedForLoops = true;
        };
        /**
         * Generates metadata on operators.
         *
         * @param operators   The property container for metadata on operators.
         */
        PythonicLanguage.prototype.generateOperatorProperties = function (operators) {
            operators.and = "&&";
            operators.decreaseBy = "-=";
            operators.divide = "/";
            operators.divideBy = "/=";
            operators.equals = "=";
            operators.equalTo = "==";
            operators.greaterThan = ">";
            operators.greaterThanOrEqualTo = ">=";
            operators.increaseBy = "+=";
            operators.lessThan = "<";
            operators.lessThanOrEqualTo = "<=";
            operators.minus = "-";
            operators.mod = "%";
            operators.multiplyBy = "*=";
            operators.not = "!";
            operators.notEqualTo = "!=";
            operators.or = "||";
            operators.plus = "+";
            operators.times = "*";
        };
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        PythonicLanguage.prototype.generateStyleProperties = function (style) {
            style.fileEndLines = [];
            style.fileIndentation = 0;
            style.fileStartLines = [];
            style.semicolon = "";
        };
        /**
         * Generates metadata on strings.
         */
        PythonicLanguage.prototype.generateStringProperties = function (strings) {
            strings.concatenate = " + ";
        };
        /**
         * Generates metadata on variables.
         *
         * @param variables   The property container for metadata on variables.
         */
        PythonicLanguage.prototype.generateVariableProperties = function (variables) {
            variables.aliases = {
                "false": "False",
                "infinity": "inf",
                "true": "True"
            };
            variables.declaration = "";
            variables.null = "None";
        };
        return PythonicLanguage;
    }(Language_2.Language));
    exports.PythonicLanguage = PythonicLanguage;
});
define("Languages/Python", ["require", "exports", "Languages/PythonicLanguage", "Languages/Casing/CaseStyle", "Languages/Properties/NativeCallProperties"], function (require, exports, PythonicLanguage_1, CaseStyle_5, NativeCallProperties_5) {
    "use strict";
    /**
     * A summary of information for the Python language.
     */
    var Python = (function (_super) {
        __extends(Python, _super);
        function Python() {
            _super.apply(this, arguments);
        }
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        Python.prototype.generateArrayProperties = function (arrays) {
            arrays.className = "list";
            arrays.length = new NativeCallProperties_5.NativeCallProperties("len", NativeCallProperties_5.NativeCallScope.Static, NativeCallProperties_5.NativeCallType.Function);
        };
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        Python.prototype.generateBooleanProperties = function (booleans) {
            booleans.className = "bool";
        };
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        Python.prototype.generateClassProperties = function (classes) {
            _super.prototype.generateClassProperties.call(this, classes);
            classes.aliases = {
                "dictionary": "dict",
                "number": "float"
            };
            classes.constructorKeyword = "def __init__";
            classes.constructorTakesThis = true;
            classes.declareEnd = "\0";
            classes.declareExtendsLeft = "(";
            classes.declareExtendsRight = ")";
            classes.declareStartLeft = "class ";
            classes.declareStartRight = ":";
            classes.superConstructor = "super().__init__";
        };
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        Python.prototype.generateClassMemberVariableProperties = function (variables) {
            _super.prototype.generateClassMemberVariableProperties.call(this, variables);
            variables.privateCase = CaseStyle_5.CaseStyle.SnakeCase;
            variables.privatePrefix = "__";
            variables.protectedCase = CaseStyle_5.CaseStyle.SnakeCase;
            variables.protectedPrefix = "_";
            variables.publicCase = CaseStyle_5.CaseStyle.CamelCase;
        };
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        Python.prototype.generateConditionalProperties = function (conditionals) {
            _super.prototype.generateConditionalProperties.call(this, conditionals);
            conditionals.continueRight = ":";
            conditionals.elif = "elif";
            conditionals.startRight = ":";
        };
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        Python.prototype.generateCommentProperties = function (comments) {
            comments.blockEnd = "\"\"\"";
            comments.blockLineLeft = "";
            comments.blockLineRight = "";
            comments.blockStart = "\"\"\"";
            comments.docEnd = "\"\"\"";
            comments.docLineEnd = "";
            comments.docLineStart = "";
            comments.docStart = "\"\"\"";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "param",
                "returns": "returns",
                "summary": "",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "parameter": ""
            };
            comments.docTagEnd = " ";
            comments.docTagSpaceAfter = "  ";
            comments.docTagStart = ":";
            comments.lineLeft = "# ";
            comments.lineRight = "";
        };
        /**
         * Generates properties on dictionaries.
         *
         * @param dictionaries   The property container for metadata on dictionaries.
         */
        Python.prototype.generateDictionaryProperties = function (dictionaries) {
            _super.prototype.generateDictionaryProperties.call(this, dictionaries);
            dictionaries.className = "dict";
            dictionaries.keys = new NativeCallProperties_5.NativeCallProperties("keys", NativeCallProperties_5.NativeCallScope.Member, NativeCallProperties_5.NativeCallType.Function);
        };
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        Python.prototype.generateEnumProperties = function (enums) {
            _super.prototype.generateEnumProperties.call(this, enums);
            enums.declareStartRight = "(Enum):";
            enums.declareValueLeft = " = ";
            enums.valueMiddle = ".";
        };
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        Python.prototype.generateLambdaProperties = function (lambdas) {
            _super.prototype.generateLambdaProperties.call(this, lambdas);
            lambdas.functionLeft = "lambda ";
            lambdas.functionMiddle = ": ";
            lambdas.functionRight = "";
        };
        /**
         * Generates metadata on functions.
         *
         * @param functions   The property container for metadata on functions.
         */
        Python.prototype.generateFunctionProperties = function (functions) {
            _super.prototype.generateFunctionProperties.call(this, functions);
            functions.defineStartRight = ":";
            functions.defineEnd = "\0";
        };
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        Python.prototype.generateGeneralProperties = function (general) {
            general.extension = ".py";
            general.name = "Python";
        };
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        Python.prototype.generateImportProperties = function (imports) {
            imports.case = CaseStyle_5.CaseStyle.FileSystem;
            imports.explicit = true;
            imports.left = "from \"";
            imports.middle = "\" import ";
            imports.right = "";
        };
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on loops.
         */
        Python.prototype.generateListProperties = function (lists) {
            _super.prototype.generateListProperties.call(this, lists);
            lists.push = new NativeCallProperties_5.NativeCallProperties("append", NativeCallProperties_5.NativeCallScope.Member, NativeCallProperties_5.NativeCallType.Function);
        };
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        Python.prototype.generateLoopProperties = function (loops) {
            _super.prototype.generateLoopProperties.call(this, loops);
            loops.forEachEnd = "\0";
            loops.forEachGetKeys = "";
            loops.forEachGetPairs = ".iteritems()";
            loops.forEachPairsAsPair = true;
            loops.forEachRight = "";
            loops.rangedForLoopsLeft = " in range(";
            loops.rangedForLoopsMiddle = ", ";
            loops.rangedForLoopsRight = ")";
        };
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        Python.prototype.generateNumberProperties = function (numbers) {
            numbers.className = "float";
        };
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        Python.prototype.generateOutputProperties = function (output) {
            output.print = "print";
        };
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        Python.prototype.generateStyleProperties = function (style) {
            _super.prototype.generateStyleProperties.call(this, style);
            style.mainEndLines = [""];
            style.mainIndentation = 1;
            style.mainStartLines = ["if __name__ == \"__main__\":"];
            style.printEnd = ")";
            style.printStart = "print(";
        };
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        Python.prototype.generateStringProperties = function (strings) {
            _super.prototype.generateStringProperties.call(this, strings);
            strings.className = "string";
            strings.index = new NativeCallProperties_5.NativeCallProperties("index", NativeCallProperties_5.NativeCallScope.Member, NativeCallProperties_5.NativeCallType.Function);
            strings.length = new NativeCallProperties_5.NativeCallProperties("len", NativeCallProperties_5.NativeCallScope.Static, NativeCallProperties_5.NativeCallType.Function);
        };
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        Python.prototype.generateVariableProperties = function (variables) {
            _super.prototype.generateVariableProperties.call(this, variables);
            variables.aliases = {
                "false": "False",
                "infinity": "inf",
                "true": "True"
            };
            variables.null = "None";
        };
        return Python;
    }(PythonicLanguage_1.PythonicLanguage));
    exports.Python = Python;
});
define("Languages/Ruby", ["require", "exports", "Languages/PythonicLanguage", "Languages/Casing/CaseStyle", "Languages/Properties/NativeCallProperties"], function (require, exports, PythonicLanguage_2, CaseStyle_6, NativeCallProperties_6) {
    "use strict";
    /**
     * A summary of information for the Ruby language.
     */
    var Ruby = (function (_super) {
        __extends(Ruby, _super);
        function Ruby() {
            _super.apply(this, arguments);
        }
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        Ruby.prototype.generateArrayProperties = function (arrays) {
            arrays.className = "Array";
            arrays.length = new NativeCallProperties_6.NativeCallProperties("length", NativeCallProperties_6.NativeCallScope.Member, NativeCallProperties_6.NativeCallType.Property);
        };
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        Ruby.prototype.generateBooleanProperties = function (booleans) {
            booleans.className = "";
        };
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        Ruby.prototype.generateClassProperties = function (classes) {
            _super.prototype.generateClassProperties.call(this, classes);
            classes.aliases = {
                "dictionary": "Hash",
                "number": "Float"
            };
            classes.constructorKeyword = "def initialize";
            classes.declareEnd = "end";
            classes.declareExtendsLeft = " < ";
            classes.declareExtendsRight = "";
            classes.declareStartLeft = "class ";
            classes.declareStartRight = "";
            classes.superConstructor = "super";
        };
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        Ruby.prototype.generateClassMemberVariableProperties = function (variables) {
            _super.prototype.generateClassMemberVariableProperties.call(this, variables);
            variables.privateCase = CaseStyle_6.CaseStyle.CamelCase;
            variables.privatePrefix = "";
            variables.protectedCase = CaseStyle_6.CaseStyle.CamelCase;
            variables.protectedPrefix = "";
            variables.publicCase = CaseStyle_6.CaseStyle.CamelCase;
            variables.publicPrefix = "";
        };
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        Ruby.prototype.generateConditionalProperties = function (conditionals) {
            _super.prototype.generateConditionalProperties.call(this, conditionals);
            conditionals.continueRight = "";
            conditionals.end = "end";
            conditionals.elif = "elsif";
            conditionals.startRight = "";
        };
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        Ruby.prototype.generateCommentProperties = function (comments) {
            comments.blockEnd = "=end";
            comments.blockLineLeft = "";
            comments.blockLineRight = "";
            comments.blockStart = "=begin";
            comments.docEnd = "##";
            comments.docLineEnd = "";
            comments.docLineStart = "";
            comments.docStart = "##";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "\0",
                "returns": "returns",
                "summary": "",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "parameter": ""
            };
            comments.docTagEnd = "] ";
            comments.docTagSpaceAfter = "  ";
            comments.docTagStart = "[";
            comments.lineLeft = "# ";
            comments.lineRight = "";
        };
        /**
         * Generates properties on dictionaries.
         *
         * @param dictionaries   The property container for metadata on dictionaries.
         */
        Ruby.prototype.generateDictionaryProperties = function (dictionaries) {
            _super.prototype.generateDictionaryProperties.call(this, dictionaries);
            dictionaries.className = "hash";
            dictionaries.keys = new NativeCallProperties_6.NativeCallProperties("keys", NativeCallProperties_6.NativeCallScope.Member, NativeCallProperties_6.NativeCallType.Property);
        };
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        Ruby.prototype.generateGeneralProperties = function (general) {
            general.extension = ".rb";
            general.name = "Ruby";
        };
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        Ruby.prototype.generateEnumProperties = function (enums) {
            _super.prototype.generateEnumProperties.call(this, enums);
            enums.declareStartRight = "";
            enums.declareValueLeft = " = ";
            enums.valueMiddle = "::";
        };
        /**
         * Generates metadata on functions.
         *
         * @param functions   The property container for metadata on functions.
         */
        Ruby.prototype.generateFunctionProperties = function (functions) {
            _super.prototype.generateFunctionProperties.call(this, functions);
            functions.defineStartRight = "";
            functions.defineEnd = "end";
        };
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        Ruby.prototype.generateImportProperties = function (imports) {
            imports.case = CaseStyle_6.CaseStyle.FileSystem;
            imports.left = "require \"";
            imports.right = "\"";
        };
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        Ruby.prototype.generateLambdaProperties = function (lambdas) {
            _super.prototype.generateLambdaProperties.call(this, lambdas);
            lambdas.functionLeft = "lambda { |";
            lambdas.functionMiddle = "| ";
            lambdas.functionRight = " }";
        };
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on loops.
         */
        Ruby.prototype.generateListProperties = function (lists) {
            _super.prototype.generateListProperties.call(this, lists);
            lists.push = new NativeCallProperties_6.NativeCallProperties("push", NativeCallProperties_6.NativeCallScope.Member, NativeCallProperties_6.NativeCallType.Function);
        };
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        Ruby.prototype.generateLoopProperties = function (loops) {
            _super.prototype.generateLoopProperties.call(this, loops);
            loops.foreach = "foreach";
            loops.forEachAsMethod = true;
            loops.forEachEnd = "}";
            loops.forEachGetKeys = ".each_key { |";
            loops.forEachGetPairs = ".each { |";
            loops.forEachRight = "|";
            loops.rangedForLoopsLeft = " in ";
            loops.rangedForLoopsMiddle = "..";
            loops.rangedForLoopsRight = "";
        };
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        Ruby.prototype.generateNumberProperties = function (numbers) {
            numbers.className = "float";
        };
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        Ruby.prototype.generateOutputProperties = function (output) {
            output.print = "puts";
        };
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        Ruby.prototype.generateStringProperties = function (strings) {
            _super.prototype.generateStringProperties.call(this, strings);
            strings.className = "string";
            strings.index = new NativeCallProperties_6.NativeCallProperties("index", NativeCallProperties_6.NativeCallScope.Member, NativeCallProperties_6.NativeCallType.Function);
            strings.length = new NativeCallProperties_6.NativeCallProperties("length", NativeCallProperties_6.NativeCallScope.Member, NativeCallProperties_6.NativeCallType.Property);
        };
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        Ruby.prototype.generateStyleProperties = function (style) {
            _super.prototype.generateStyleProperties.call(this, style);
            style.mainEndLines = [];
            style.mainIndentation = 0;
            style.mainStartLines = [];
            style.printEnd = "";
            style.printStart = "puts ";
        };
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        Ruby.prototype.generateVariableProperties = function (variables) {
            _super.prototype.generateVariableProperties.call(this, variables);
            variables.aliases = {
                "infinity": "float::Infinity",
            };
            variables.null = "Nil";
        };
        return Ruby;
    }(PythonicLanguage_2.PythonicLanguage));
    exports.Ruby = Ruby;
});
define("Languages/TypeScript", ["require", "exports", "Languages/CLikeLanguage", "Languages/Casing/CaseStyle", "Languages/Properties/NativeCallProperties"], function (require, exports, CLikeLanguage_3, CaseStyle_7, NativeCallProperties_7) {
    "use strict";
    /**
     * A summary of information for the TypeScript language.
     */
    var TypeScript = (function (_super) {
        __extends(TypeScript, _super);
        function TypeScript() {
            _super.apply(this, arguments);
        }
        /**
         * Generates metadata on arrays.
         *
         * @param arrays   A property container for metadata on arrays.
         */
        TypeScript.prototype.generateArrayProperties = function (arrays) {
            arrays.className = "Array";
            arrays.length = new NativeCallProperties_7.NativeCallProperties("length", NativeCallProperties_7.NativeCallScope.Member, NativeCallProperties_7.NativeCallType.Property);
        };
        /**
         * Generates metadata on booleans.
         *
         * @param booleans   A property container for metadata on booleans.
         */
        TypeScript.prototype.generateBooleanProperties = function (booleans) {
            booleans.className = "boolean";
        };
        /**
         * Generates metadata on classes.
         *
         * @param classes   A property container for metadata on classes.
         */
        TypeScript.prototype.generateClassProperties = function (classes) {
            _super.prototype.generateClassProperties.call(this, classes);
            classes.aliases = {
                "dictionary": "object",
                "double": "number",
                "float": "number",
                "int": "number"
            };
            classes.constructorKeyword = "constructor";
            classes.constructorUsesKeyword = true;
            classes.declareExtendsLeft = " extends ";
            classes.declareStartRight = " {";
            classes.superConstructor = "super";
        };
        /**
         * Generates metadata on class member variables.
         *
         * @param members   A property container for metadata on class member variables.
         */
        TypeScript.prototype.generateClassMemberVariableProperties = function (variables) {
            _super.prototype.generateClassMemberVariableProperties.call(this, variables);
            variables.protectedCase = CaseStyle_7.CaseStyle.CamelCase;
            variables.publicCase = CaseStyle_7.CaseStyle.CamelCase;
        };
        /**
         * Generates metadata on comments.
         *
         * @param comments   A property container for metadata on comments.
         */
        TypeScript.prototype.generateCommentProperties = function (comments) {
            _super.prototype.generateCommentProperties.call(this, comments);
            comments.docEnd = " */";
            comments.docLineEnd = "";
            comments.docLineStart = " * ";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "param",
                "returns": "returns",
                "summary": "",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "summary": "\0",
                "parameter": ""
            };
            comments.docTagEnd = " ";
            comments.docTagSpaceAfter = "  ";
            comments.docTagStart = "@";
            comments.docStart = "/**";
        };
        /**
         * Generates metadata on conditionals.
         *
         * @param conditionals   A property container for metadata on conditionals.
         */
        TypeScript.prototype.generateConditionalProperties = function (conditionals) {
            _super.prototype.generateConditionalProperties.call(this, conditionals);
            conditionals.continueLeft = "} ";
            conditionals.continueRight = " {";
            conditionals.startRight = ") {";
        };
        /**
         * Generates metadata on dictionaries.
         *
         * @param dictionaries   A property container for metadata on dictionaries.
         */
        TypeScript.prototype.generateDictionaryProperties = function (dictionaries) {
            dictionaries.className = "Object";
            dictionaries.containsKey = new NativeCallProperties_7.NativeCallProperties("hasOwnProperty", NativeCallProperties_7.NativeCallScope.Member, NativeCallProperties_7.NativeCallType.Function);
            dictionaries.keys = new NativeCallProperties_7.NativeCallProperties("Object.keys", NativeCallProperties_7.NativeCallScope.Static, NativeCallProperties_7.NativeCallType.Function);
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairComma = ",";
            dictionaries.initializePairLeft = "";
            dictionaries.initializePairMiddle = ": ";
            dictionaries.initializePairRight = "";
            dictionaries.initializeStart = "{";
            dictionaries.typeLeft = "{ [i: ";
            dictionaries.typeMiddle = "]: ";
            dictionaries.typeRight = " }";
        };
        /**
         * Generates metadata on enums.
         *
         * @param enums   A property container for metadata on enums.
         */
        TypeScript.prototype.generateEnumProperties = function (enums) {
            _super.prototype.generateEnumProperties.call(this, enums);
            enums.declareStartRight = " {";
            enums.declareLastRight = "";
        };
        /**
         * Generates metadata on exceptions.
         *
         * @param exceptions   A property container for metadata on exceptions.
         */
        TypeScript.prototype.generateExceptionProperties = function (exceptions) {
            _super.prototype.generateExceptionProperties.call(this, exceptions);
            exceptions.className = "Error";
        };
        /**
         * Generates metadata on functions.
         *
         * @param functions   A property container for metadata on functions.
         */
        TypeScript.prototype.generateFunctionProperties = function (functions) {
            _super.prototype.generateFunctionProperties.call(this, functions);
            functions.defineStartLeft = "function ";
            functions.defineStartRight = " {";
            functions.returnTypeAfterName = true;
            functions.returnTypeMarker = ": ";
        };
        /**
         * Generates general metadata.
         *
         * @param general   A property container for general metadata.
         */
        TypeScript.prototype.generateGeneralProperties = function (general) {
            general.extension = ".ts";
            general.name = "TypeScript";
        };
        /**
         * Generates metadata on imports.
         *
         * @param imports   A property container for metadata on imports.
         */
        TypeScript.prototype.generateImportProperties = function (imports) {
            imports.case = CaseStyle_7.CaseStyle.FileSystem;
            imports.explicit = true;
            imports.itemsBeforePackage = true;
            imports.left = "import { ";
            imports.middle = " } from \"";
            imports.right = "\";";
        };
        /**
         * Generates metadata on lambdas.
         *
         * @param lambdas   A property container for metadata on lambdas.
         */
        TypeScript.prototype.generateLambdaProperties = function (lambdas) {
            _super.prototype.generateLambdaProperties.call(this, lambdas);
            lambdas.functionMiddle = ") => ";
        };
        /**
         * Generates metadata on lists.
         *
         * @param lists   A property container for metadata on lists.
         */
        TypeScript.prototype.generateListProperties = function (lists) {
            lists.asArray = true;
            lists.push = new NativeCallProperties_7.NativeCallProperties("push", NativeCallProperties_7.NativeCallScope.Member, NativeCallProperties_7.NativeCallType.Function);
        };
        /**
         * Generates metadata on loops.
         *
         * @param loops   A property container for metadata on loops.
         */
        TypeScript.prototype.generateLoopProperties = function (loops) {
            _super.prototype.generateLoopProperties.call(this, loops);
            loops.foreach = "for";
            loops.forEachGetKeys = "";
            loops.forEachGetPairs = "";
            loops.forEachMiddle = " in ";
            loops.forEachPairsAsKeys = true;
            loops.forEachRight = "";
        };
        /**
         * Generates metadata on numbers.
         *
         * @param numbers   A property container for metadata on numbers.
         */
        TypeScript.prototype.generateNumberProperties = function (numbers) {
            numbers.className = "Number";
        };
        /**
         * Generates metadata on operators.
         *
         * @param operators   A property container for metadata on operators.
         */
        TypeScript.prototype.generateOperatorProperties = function (operators) {
            _super.prototype.generateOperatorProperties.call(this, operators);
            operators.equalTo = "===";
            operators.notEqualTo = "!==";
        };
        /**
         * Generates metadata on output.
         *
         * @param output   A property container for metadata on output.
         */
        TypeScript.prototype.generateOutputProperties = function (output) {
            output.print = "console.log";
        };
        /**
         * Generates metadata on style.
         *
         * @param style   The property container for metadata on style.
         */
        TypeScript.prototype.generateStyleProperties = function (style) {
            _super.prototype.generateStyleProperties.call(this, style);
            style.fileEndLines = ["}"];
            style.fileIndentation = 1;
            style.fileStartLines = ["namespace {0} {"];
            style.mainEndLines = ["})();"];
            style.mainIndentation = 1;
            style.mainStartLines = [
                "(() => {"
            ];
            style.printEnd = ")";
            style.printStart = "console.log(";
        };
        /**
         * Generates metadata on strings.
         *
         * @param strings   A property container for metadata on strings.
         */
        TypeScript.prototype.generateStringProperties = function (strings) {
            _super.prototype.generateStringProperties.call(this, strings);
            strings.className = "String";
            strings.index = new NativeCallProperties_7.NativeCallProperties("indexOf", NativeCallProperties_7.NativeCallScope.Member, NativeCallProperties_7.NativeCallType.Function);
            strings.length = new NativeCallProperties_7.NativeCallProperties("length", NativeCallProperties_7.NativeCallScope.Member, NativeCallProperties_7.NativeCallType.Property);
        };
        /**
         * Generates metadata on variables.
         *
         * @param variables   A property container for metadata on variables.
         */
        TypeScript.prototype.generateVariableProperties = function (variables) {
            _super.prototype.generateVariableProperties.call(this, variables);
            variables.aliases = {
                "infinity": "Infinity"
            };
            variables.castLeft = "<";
            variables.castRight = ">";
            variables.declaration = "let ";
            variables.explicitTypes = true;
            variables.null = "undefined";
            variables.typesAfterName = true;
            variables.typeLeft = ": ";
        };
        return TypeScript;
    }(CLikeLanguage_3.CLikeLanguage));
    exports.TypeScript = TypeScript;
});
define("Languages/LanguagesBag", ["require", "exports", "Languages/CSharp", "Languages/Java", "Languages/Python", "Languages/Ruby", "Languages/TypeScript"], function (require, exports, CSharp_1, Java_1, Python_1, Ruby_1, TypeScript_1) {
    "use strict";
    /**
     * A quick lookup of standard languages.
     */
    var LanguagesBag = (function () {
        function LanguagesBag() {
            /**
             * An instance of the CSharp class.
             */
            this.CSharp = new CSharp_1.CSharp();
            /**
             * An instance of the Java class.
             */
            this.Java = new Java_1.Java();
            /**
             * An instance of the CSharp class.
             */
            this.Python = new Python_1.Python();
            /**
             * An instance of the Ruby class.
             */
            this.Ruby = new Ruby_1.Ruby();
            /**
             * An instance of the TypeScript class.
             */
            this.TypeScript = new TypeScript_1.TypeScript();
            /**
             * Known languages, keyed by name.
             */
            this.languagesByName = {
                "CSharp": this.CSharp,
                "Java": this.Java,
                "Python": this.Python,
                "Ruby": this.Ruby,
                "TypeScript": this.TypeScript
            };
        }
        /**
         * @returns Names of languages in the listing.
         */
        LanguagesBag.prototype.getLanguageNames = function () {
            return Object.keys(this.languagesByName);
        };
        /**
         * Adds a language to the listing.
         *
         * @param name   The name of the language.
         * @param language   The language to add.
         */
        LanguagesBag.prototype.addLanguage = function (name, language) {
            this.languagesByName[name] = language;
        };
        /**
         * @param name   A name of a language.
         * @returns The language under that name.
         */
        LanguagesBag.prototype.getLanguage = function (name) {
            if (!this.languagesByName.hasOwnProperty(name)) {
                throw new Error("Unknown language name: '" + name + "'.'");
            }
            return this.languagesByName[name];
        };
        return LanguagesBag;
    }());
    exports.LanguagesBag = LanguagesBag;
});
//# sourceMappingURL=GLS.js.map