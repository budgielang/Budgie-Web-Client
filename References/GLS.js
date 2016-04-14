var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's arrays.
             */
            var ArrayProperties = (function () {
                function ArrayProperties() {
                }
                return ArrayProperties;
            })();
            Properties.ArrayProperties = ArrayProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's booleans.
             */
            var BooleanProperties = (function () {
                function BooleanProperties() {
                }
                return BooleanProperties;
            })();
            Properties.BooleanProperties = BooleanProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's classes.
             */
            var ClassGenericProperties = (function () {
                function ClassGenericProperties() {
                }
                return ClassGenericProperties;
            })();
            Properties.ClassGenericProperties = ClassGenericProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's class members.
             */
            var ClassMemberProperties = (function () {
                function ClassMemberProperties() {
                }
                return ClassMemberProperties;
            })();
            Properties.ClassMemberProperties = ClassMemberProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's lists.
             */
            var ListProperties = (function () {
                function ListProperties() {
                }
                return ListProperties;
            })();
            Properties.ListProperties = ListProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on how to perform a native call, such as Array::push.
             */
            var NativeCallProperties = (function () {
                function NativeCallProperties() {
                }
                /**
                 * @param name   What the native call is called.
                 * @returns A new NativeCallProperties describing a member function.
                 */
                NativeCallProperties.NewMemberFunction = function (name) {
                    var properties = new NativeCallProperties();
                    properties.name = name;
                    properties.asFunction = true;
                    return properties;
                };
                /**
                 * @param name   What the native call is called.
                 * @returns A new NativeCallProperties describing a member propertiy.
                 */
                NativeCallProperties.NewMemberProperty = function (name) {
                    var properties = new NativeCallProperties();
                    properties.name = name;
                    return properties;
                };
                /**
                 * @param name   What the native call is called.
                 * @returns A new NativeCallProperties describing a static function.
                 */
                NativeCallProperties.NewStaticFunction = function (name) {
                    var properties = new NativeCallProperties();
                    properties.name = name;
                    properties.asStatic = true;
                    return properties;
                };
                return NativeCallProperties;
            })();
            Properties.NativeCallProperties = NativeCallProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="NativeCallProperties" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's Strings.
             */
            var StringProperties = (function () {
                function StringProperties() {
                }
                return StringProperties;
            })();
            Properties.StringProperties = StringProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="ArrayProperties.ts" />
/// <reference path="ClassGenericProperties.ts" />
/// <reference path="ClassMemberProperties.ts" />
/// <reference path="ListProperties.ts" />
/// <reference path="StringProperties.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's classes.
             */
            var ClassProperties = (function () {
                function ClassProperties() {
                    /**
                     * Metadata on generic (templated) types.
                     */
                    this.generics = new Properties.ClassGenericProperties();
                    /**
                     * Metadata on class member variables and functions.
                     */
                    this.members = new Properties.ClassMemberProperties();
                }
                return ClassProperties;
            })();
            Properties.ClassProperties = ClassProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's comments.
             */
            var CommentProperties = (function () {
                function CommentProperties() {
                }
                return CommentProperties;
            })();
            Properties.CommentProperties = CommentProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's conditionals.
             */
            var ConditionalProperties = (function () {
                function ConditionalProperties() {
                }
                return ConditionalProperties;
            })();
            Properties.ConditionalProperties = ConditionalProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's dictionaries.
             */
            var DictionaryProperties = (function () {
                function DictionaryProperties() {
                }
                return DictionaryProperties;
            })();
            Properties.DictionaryProperties = DictionaryProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's exceptions.
             */
            var ExceptionProperties = (function () {
                function ExceptionProperties() {
                }
                return ExceptionProperties;
            })();
            Properties.ExceptionProperties = ExceptionProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's functions.
             */
            var FunctionProperties = (function () {
                function FunctionProperties() {
                }
                return FunctionProperties;
            })();
            Properties.FunctionProperties = FunctionProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's general properties.
             */
            var GeneralProperties = (function () {
                function GeneralProperties() {
                }
                return GeneralProperties;
            })();
            Properties.GeneralProperties = GeneralProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's lambdas.
             */
            var LambdaProperties = (function () {
                function LambdaProperties() {
                }
                return LambdaProperties;
            })();
            Properties.LambdaProperties = LambdaProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's loops.
             */
            var LoopProperties = (function () {
                function LoopProperties() {
                }
                return LoopProperties;
            })();
            Properties.LoopProperties = LoopProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's numbers.
             */
            var NumberProperties = (function () {
                function NumberProperties() {
                }
                return NumberProperties;
            })();
            Properties.NumberProperties = NumberProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's output.
             */
            var OutputProperties = (function () {
                function OutputProperties() {
                }
                return OutputProperties;
            })();
            Properties.OutputProperties = OutputProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
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
            })();
            Properties.OperatorProperties = OperatorProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's style.
             */
            var StyleProperties = (function () {
                function StyleProperties() {
                }
                return StyleProperties;
            })();
            Properties.StyleProperties = StyleProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's variables.
             */
            var VariableProperties = (function () {
                function VariableProperties() {
                }
                return VariableProperties;
            })();
            Properties.VariableProperties = VariableProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="ArrayProperties.ts" />
/// <reference path="BooleanProperties.ts" />
/// <reference path="ClassProperties.ts" />
/// <reference path="CommentProperties.ts" />
/// <reference path="ConditionalProperties.ts" />
/// <reference path="DictionaryProperties.ts" />
/// <reference path="ExceptionProperties.ts" />
/// <reference path="FunctionProperties.ts" />
/// <reference path="GeneralProperties.ts" />
/// <reference path="LambdaProperties.ts" />
/// <reference path="ListProperties.ts" />
/// <reference path="LoopProperties.ts" />
/// <reference path="NumberProperties.ts" />
/// <reference path="OutputProperties.ts" />
/// <reference path="OperatorProperties.ts" />
/// <reference path="StringProperties.ts" />
/// <reference path="StyleProperties.ts" />
/// <reference path="VariableProperties.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        var Properties;
        (function (Properties) {
            "use strict";
            /**
             * Metadata on a language's syntax.
             */
            var LanguageProperties = (function () {
                /**
                 * Initializes a new instance of the LanguageProperties class.
                 */
                function LanguageProperties() {
                    this.arrays = new Properties.ArrayProperties();
                    this.booleans = new Properties.BooleanProperties();
                    this.classes = new Properties.ClassProperties();
                    this.comments = new Properties.CommentProperties();
                    this.conditionals = new Properties.ConditionalProperties();
                    this.dictionaries = new Properties.DictionaryProperties();
                    this.exceptions = new Properties.ExceptionProperties();
                    this.functions = new Properties.FunctionProperties();
                    this.general = new Properties.GeneralProperties();
                    this.lambdas = new Properties.LambdaProperties();
                    this.lists = new Properties.ListProperties();
                    this.loops = new Properties.LoopProperties();
                    this.numbers = new Properties.NumberProperties();
                    this.operators = new Properties.OperatorProperties();
                    this.output = new Properties.OutputProperties();
                    this.strings = new Properties.StringProperties();
                    this.style = new Properties.StyleProperties();
                    this.variables = new Properties.VariableProperties();
                }
                return LanguageProperties;
            })();
            Properties.LanguageProperties = LanguageProperties;
        })(Properties = Languages.Properties || (Languages.Properties = {}));
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LanguageProperties.ts" />
/// <reference path="Properties/ListProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OutputProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        "use strict";
        /**
         * A summary of information for a single language.
         */
        var Language = (function () {
            /**
             * Initializes a new instance of the Language class.
             */
            function Language() {
                this.properties = new Languages.Properties.LanguageProperties();
                this.generateArrayProperties(this.properties.arrays);
                this.generateBooleanProperties(this.properties.booleans);
                this.generateClassProperties(this.properties.classes);
                this.generateClassGenericProperties(this.properties.classes.generics);
                this.generateClassMemberProperties(this.properties.classes.members);
                this.generateCommentProperties(this.properties.comments);
                this.generateConditionalProperties(this.properties.conditionals);
                this.generateDictionaryProperties(this.properties.dictionaries);
                this.generateExceptionProperties(this.properties.exceptions);
                this.generateFunctionProperties(this.properties.functions);
                this.generateGeneralProperties(this.properties.general);
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
        })();
        Languages.Language = Language;
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="Language.ts" />
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
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
                classes.defineInheritanceRight = "";
                classes.defineEnd = "}";
                classes.defineStartLeft = "class ";
                classes.defineStartRight = " {";
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
            };
            /**
             * Generates metadata on classmembers.
             *
             * @param members   A property container for metadata on class members.
             */
            CLikeLanguage.prototype.generateClassMemberProperties = function (members) {
                members.functionStart = "";
                members.privacy = true;
                members.private = "private ";
                members.protected = "protected ";
                members.public = "public ";
                members.staticDecorator = "static ";
                members.variableStart = "";
                members.variableDefault = "";
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
                lambdas.startLeft = "(";
                lambdas.startMiddle = ") => ";
                lambdas.startRight = "";
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
        })(Languages.Language);
        Languages.CLikeLanguage = CLikeLanguage;
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="CLikeLanguage.ts" />
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NativeCallProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
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
                arrays.length = Languages.Properties.NativeCallProperties.NewMemberProperty("Length");
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
                classes.constructorAsClassName = true;
                classes.defineInheritanceLeft = " : ";
            };
            /**
             * Generates metadata on class generics.
             *
             * @param generics   A property container for metadata on class generics.
             */
            CSharp.prototype.generateClassGenericProperties = function (generics) {
                generics.left = "<";
                generics.middle = ", ";
                generics.right = ">";
            };
            /**
             * Generates metadata on comments.
             *
             * @param comments   A property container for metadata on comments.
             */
            CSharp.prototype.generateCommentProperties = function (comments) {
                _super.prototype.generateCommentProperties.call(this, comments);
                comments.docAsXml = true;
                comments.docEnd = "";
                comments.docLineEnd = "";
                comments.docLineStart = "/// ";
                comments.docStart = "";
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
                dictionaries.initializeStart = "{";
                dictionaries.initializeEnd = "}";
                dictionaries.initializePairLeft = "{ ";
                dictionaries.initializePairMiddle = ", ";
                dictionaries.initializePairRight = "}";
                dictionaries.keyChecker = "ContainsKey";
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
             * Generates general metadata.
             *
             * @param general   A property container for general metadata.
             */
            CSharp.prototype.generateGeneralProperties = function (general) {
                general.name = "C#";
                general.extension = ".cs";
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
             * Generates metadata on lists.
             *
             * @param lists   A property container for metadata on lists.
             */
            CSharp.prototype.generateListProperties = function (lists) {
                lists.className = "List";
                lists.push = Languages.Properties.NativeCallProperties.NewMemberFunction("Add");
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
                strings.index = Languages.Properties.NativeCallProperties.NewMemberFunction("IndexOf");
                strings.length = Languages.Properties.NativeCallProperties.NewMemberProperty("Length");
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
        })(Languages.CLikeLanguage);
        Languages.CSharp = CSharp;
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="CLikeLanguage.ts" />
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NativeCallProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
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
                arrays.length = Languages.Properties.NativeCallProperties.NewMemberProperty("length()");
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
                classes.constructorAsClassName = true;
                classes.defineInheritanceLeft = " extends ";
            };
            /**
             * Generates metadata on class generics.
             *
             * @param generics   A property container for metadata on class generics.
             */
            Java.prototype.generateClassGenericProperties = function (generics) {
                generics.left = "<";
                generics.middle = ", ";
                generics.right = ">";
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
                dictionaries.initializeStart = "{";
                dictionaries.initializeEnd = "}";
                dictionaries.initializePairLeft = "{ ";
                dictionaries.initializePairMiddle = ", ";
                dictionaries.initializePairRight = "}";
                dictionaries.keyChecker = "containsKey";
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
             * Generates general metadata.
             *
             * @param general   A property container for general metadata.
             */
            Java.prototype.generateGeneralProperties = function (general) {
                general.name = "Java";
                general.extension = ".java";
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
             * Generates metadata on lists.
             *
             * @param lists   A property container for metadata on lists.
             */
            Java.prototype.generateListProperties = function (lists) {
                lists.className = "ArrayList";
                lists.push = Languages.Properties.NativeCallProperties.NewMemberFunction("add");
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
                strings.index = Languages.Properties.NativeCallProperties.NewMemberFunction("indexOf");
                strings.length = Languages.Properties.NativeCallProperties.NewMemberProperty("length()");
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
                    "import java.lang.System;",
                    "import java.util.*;",
                    "",
                    "package {0};",
                    "",
                ];
                style.mainEndLines = [
                    "    }",
                    "}"
                ];
                style.mainIndentation = 2;
                style.mainStartLines = [
                    "class Program {",
                    "    public static void Main() {",
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
        })(Languages.CLikeLanguage);
        Languages.Java = Java;
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="Language.ts" />
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
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
                classes.defineStartLeft = "class ";
                classes.defineStartRight = ":";
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
             * Generates metadata on class members.
             *
             * @param members   The property container for metadata on class members.
             */
            PythonicLanguage.prototype.generateClassMemberProperties = function (members) {
                members.functionStart = "";
                members.privacy = false;
                members.staticDecorator = "static ";
                members.variableStart = "";
                members.variableDefault = "";
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
                dictionaries.initializeStart = "{";
                dictionaries.initializeEnd = "}";
                dictionaries.initializePairLeft = "\"";
                dictionaries.initializePairMiddle = "\": ";
                dictionaries.initializePairRight = "";
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
                lambdas.startLeft = "lambda ";
                lambdas.startMiddle = ": ";
                lambdas.startRight = "";
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
        })(Languages.Language);
        Languages.PythonicLanguage = PythonicLanguage;
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="PythonicLanguage.ts" />
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NativeCallProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OutputProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
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
                arrays.length = Languages.Properties.NativeCallProperties.NewStaticFunction("len");
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
             * Generates general metadata.
             *
             * @param general   A property container for general metadata.
             */
            Python.prototype.generateGeneralProperties = function (general) {
                general.extension = ".py";
                general.name = "Python";
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
             * Generates metadata on lists.
             *
             * @param lists   A property container for metadata on loops.
             */
            Python.prototype.generateListProperties = function (lists) {
                _super.prototype.generateListProperties.call(this, lists);
                lists.push = Languages.Properties.NativeCallProperties.NewMemberFunction("append");
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
                strings.index = Languages.Properties.NativeCallProperties.NewMemberFunction("index");
                strings.length = Languages.Properties.NativeCallProperties.NewStaticFunction("len");
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
        })(Languages.PythonicLanguage);
        Languages.Python = Python;
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="PythonicLanguage.ts" />
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NativeCallProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OutputProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
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
                arrays.length = Languages.Properties.NativeCallProperties.NewMemberProperty("length");
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
            };
            /**
             * Generates metadata on conditionals.
             *
             * @param conditionals   A property container for metadata on conditionals.
             */
            Ruby.prototype.generateConditionalProperties = function (conditionals) {
                _super.prototype.generateConditionalProperties.call(this, conditionals);
                conditionals.continueRight = "";
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
                comments.docEnd = "";
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
                comments.docTagEnd = "]";
                comments.docTagSpaceAfter = "   ";
                comments.docTagStart = "[";
                comments.lineLeft = "# ";
                comments.lineRight = "";
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
             * Generates metadata on lists.
             *
             * @param lists   A property container for metadata on loops.
             */
            Ruby.prototype.generateListProperties = function (lists) {
                _super.prototype.generateListProperties.call(this, lists);
                lists.push = Languages.Properties.NativeCallProperties.NewMemberFunction("push");
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
                strings.index = Languages.Properties.NativeCallProperties.NewMemberFunction("index");
                strings.length = Languages.Properties.NativeCallProperties.NewMemberProperty("length");
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
                    "infinity": "float::Infinity"
                };
                variables.null = "Nil";
            };
            return Ruby;
        })(Languages.PythonicLanguage);
        Languages.Ruby = Ruby;
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="CLikeLanguage.ts" />
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NativeCallProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/OutputProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
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
                arrays.length = Languages.Properties.NativeCallProperties.NewMemberProperty("length");
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
                    "float": "number",
                    "int": "number"
                };
                classes.constructorName = "constructor";
                classes.defineInheritanceLeft = " extends ";
            };
            /**
             * Generates metadata on class members.
             *
             * @param members   A property container for metadata on class members.
             */
            TypeScript.prototype.generateClassMemberProperties = function (members) {
                _super.prototype.generateClassMemberProperties.call(this, members);
                members.functionGetBound = true;
                members.functionGetLeft = ".bind(";
                members.functionGetRight = ")";
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
                dictionaries.initializeStart = "{";
                dictionaries.initializeEnd = "}";
                dictionaries.initializePairLeft = "\"";
                dictionaries.initializePairMiddle = "\": ";
                dictionaries.initializePairRight = "";
                dictionaries.keyChecker = "hasOwnProperty";
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
             * Generates metadata on lists.
             *
             * @param lists   A property container for metadata on lists.
             */
            TypeScript.prototype.generateListProperties = function (lists) {
                lists.asArray = true;
                lists.push = Languages.Properties.NativeCallProperties.NewMemberFunction("push");
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
                strings.index = Languages.Properties.NativeCallProperties.NewMemberFunction("indexOf");
                strings.length = Languages.Properties.NativeCallProperties.NewMemberProperty("length");
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
        })(Languages.CLikeLanguage);
        Languages.TypeScript = TypeScript;
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
/// <reference path="CSharp.ts" />
/// <reference path="Language.ts" />
/// <reference path="Python.ts" />
/// <reference path="Ruby.ts" />
/// <reference path="TypeScript.ts" />
var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        "use strict";
        /**
         * A quick lookup of standard languages.
         */
        var LanguagesBag = (function () {
            function LanguagesBag() {
                /**
                 * An instance of the CSharp class.
                 */
                this.CSharp = new Languages.CSharp();
                /**
                 * An instance of the CSharp class.
                 */
                this.Python = new Languages.Python();
                /**
                 * An instance of the Ruby class.
                 */
                this.Ruby = new Languages.Ruby();
                /**
                 * An instance of the TypeScript class.
                 */
                this.TypeScript = new Languages.TypeScript();
                /**
                 * Known languages, keyed by name.
                 */
                this.languagesByName = {
                    "CSharp": this.CSharp,
                    "Python": this.Python,
                    "Ruby": this.Ruby,
                    "TypeScript": this.TypeScript
                };
            }
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
        })();
        Languages.LanguagesBag = LanguagesBag;
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
        })();
        Commands.CommandResult = CommandResult;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="CommandResult.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
            }
            /**
             * Creates a new result containing a single line with a semicolon.
             *
             * @param text   The contents of the line.
             * @param addSemicolon   Whether the line should end with a semicolon.
             * @returns A new single line result.
             */
            LineResults.newSingleLine = function (text, addSemicolon) {
                return new LineResults([new Commands.CommandResult(text, 0)], addSemicolon);
            };
            /**
             * Creates a new result containing the start or end of a block.
             *
             * @param text   The contents of the line.
             * @param indentation   How much the line changes indentation.
             * @returns A new block-changing line result.
             */
            LineResults.newBlockLine = function (text, indentation) {
                return new LineResults([new Commands.CommandResult(text, indentation)], false);
            };
            return LineResults;
        })();
        Commands.LineResults = LineResults;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
        var Parameters;
        (function (Parameters) {
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
            })();
            Parameters.Parameter = Parameter;
        })(Parameters = Commands.Parameters || (Commands.Parameters = {}));
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="../ConversionContext.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                    currentLine = new Commands.CommandResult("", 0);
                    lines.push(currentLine);
                    endlineIndex = extra.indexOf("\n", currentIndex + 1);
                }
                if (currentIndex !== -1) {
                    currentLine.text = extra.substring(currentIndex + 1);
                }
                lines[lines.length - 1].indentation = indentation;
            };
            /**
             * Throws an error if an incorrect number of parameters are passed.
             *
             * @param parameters   Parameters passed to a command.
             * @param minimum   The allowed number of parameters.
             */
            Command.prototype.requireParametersLength = function (parameters, amount) {
                if (parameters.length - 1 !== amount) {
                    throw new Error("Not the right amount of parameters: expected " + amount + " but got " + (parameters.length - 1) + ".");
                }
            };
            /**
             * Throws an error if not enough parameters are passed.
             *
             * @param parameters   Parameters passed to a command.
             * @param minimum   The minimum allowed number of parameters.
             */
            Command.prototype.requireParametersLengthMinimum = function (parameters, minimum) {
                if (parameters.length - 1 < minimum) {
                    throw new Error("Not enough arguments: expected at least " + minimum + " but got " + (parameters.length - 1) + ".");
                }
            };
            /**
             * Throws an error if too many parameters are passed.
             *
             * @param parameters   Parameters passed to a command.
             * @param minimum   The minimum allowed number of parameters.
             */
            Command.prototype.requireParametersLengthMaximum = function (parameters, maximum) {
                if (parameters.length - 1 > maximum) {
                    throw new Error("Too many arguments: expected fewer than " + maximum + " but got " + (parameters.length - 1) + ".");
                }
            };
            /**
             * Throws an error if not enough or too many parameters are passed.
             *
             * @param parameters   Parameters passed to a command.
             * @param maximum   The maximum allowed number of parameters.
             * @param minimum   The minimum allowed number of parameters.
             */
            Command.prototype.requireParametersLengthRange = function (parameters, minimum, maximum) {
                this.requireParametersLengthMinimum(parameters, minimum);
                this.requireParametersLengthMaximum(parameters, maximum);
            };
            /**
             * Throws an error if an odd number of parameters are passed.
             *
             * @param parameters   Parameters passed to a command.
             */
            Command.prototype.requireParametersLengthEven = function (parameters) {
                if ((parameters.length % 2 - 1) !== 0) {
                    throw new Error("Expected parameters to be even, but got " + (parameters.length - 1) + ".");
                }
            };
            /**
             * Throws an error if an even number of parameters are passed.
             *
             * @param parameters   Parameters passed to a command.
             */
            Command.prototype.requireParametersLengthOdd = function (parameters) {
                if ((parameters.length - 1) % 2 === 0) {
                    throw new Error("Expected parameters to be odd, but got " + (parameters.length - 1) + ".");
                }
            };
            /**
             * Default information on parameters a command takes in (none).
             */
            Command.defaultParameters = [];
            return Command;
        })();
        Commands.Command = Command;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="CommandResult.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
        "use strict";
        /**
         * Constants used for creating commands.
         */
        var CommandStrings = (function () {
            function CommandStrings() {
            }
            /**
             * Generates a raw string of GLS syntax for a command and parameters.
             *
             * @param inputs   A command name followed by any number of parameters.
             * @returns A raw string of GLS syntax for the command and parameters.
             */
            CommandStrings.generateRawCommand = function (inputs) {
                if (inputs.length === 0) {
                    throw new Error("At least one parameter is required.");
                }
                if (inputs.length === 1) {
                    return inputs[0];
                }
                return inputs[0] + " : " + inputs.slice(1).join(" ");
            };
            /**
             * Raw name of the ArrayInitialize command.
             */
            CommandStrings.ArrayInitializeCommandName = "array initialize";
            /**
             * Raw name of the Literal command.
             */
            CommandStrings.LiteralCommandName = "literal";
            /**
             * Raw name of the Type command.
             */
            CommandStrings.TypeCommandName = "type";
            return CommandStrings;
        })();
        Commands.CommandStrings = CommandStrings;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="Parameter.ts" />
/// <reference path="SingleParameter.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
        var Parameters;
        (function (Parameters) {
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
            })(Parameters.Parameter);
            Parameters.RepeatingParameters = RepeatingParameters;
        })(Parameters = Commands.Parameters || (Commands.Parameters = {}));
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="Parameter.ts" />
/// <reference path="RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
        var Parameters;
        (function (Parameters) {
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
            })(Parameters.Parameter);
            Parameters.SingleParameter = SingleParameter;
        })(Parameters = Commands.Parameters || (Commands.Parameters = {}));
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLengthMinimum(parameters, 1);
                var typeName = this.context.convertCommon("type", parameters[1]), output = "";
                if (this.language.properties.arrays.initializeAsNew) {
                    output += "new ";
                }
                if (this.language.properties.arrays.initializeByType) {
                    if (parameters.length === 2) {
                        output += typeName + "[0]";
                        return Commands.LineResults.newSingleLine(output, false);
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
                return Commands.LineResults.newSingleLine(output, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            ArrayInitializeCommand.parameters = [
                new Commands.Parameters.SingleParameter("type", "The type of object.", true),
                new Commands.Parameters.RepeatingParameters("Items initially in the array.", [
                    new Commands.Parameters.SingleParameter("item", "An item initially in the array.", false)
                ])
            ];
            return ArrayInitializeCommand;
        })(Commands.Command);
        Commands.ArrayInitializeCommand = ArrayInitializeCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                if (this.nativeCallProperties.asStatic) {
                    return this.renderAsStatic(parameters);
                }
                return this.renderAsMember(parameters);
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
                this.requireParametersLengthMinimum(parameters, 1);
                var result = "";
                result += this.nativeCallProperties.name;
                result += "(" + parameters[1];
                for (var i = 2; i < parameters.length; i += 1) {
                    result += ", " + parameters[i];
                }
                result += ")";
                return Commands.LineResults.newSingleLine(result, true);
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
                this.requireParametersLengthMinimum(parameters, 1);
                var result = "";
                result += parameters[1] + ".";
                result += this.nativeCallProperties.name;
                if (this.nativeCallProperties.asFunction) {
                    result += "(";
                    if (parameters.length >= 2) {
                        result += parameters[2];
                        for (var i = 3; i < parameters.length; i += 1) {
                            result += ", " + parameters[i];
                        }
                    }
                    result += ")";
                }
                return Commands.LineResults.newSingleLine(result, true);
            };
            return NativeCallCommand;
        })(Commands.Command);
        Commands.NativeCallCommand = NativeCallCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="Command.ts" />
/// <reference path="NativeCallCommand.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                new Commands.Parameters.SingleParameter("name", "The name of the variable.", true)
            ];
            return ArrayLengthCommand;
        })(Commands.NativeCallCommand);
        Commands.ArrayLengthCommand = ArrayLengthCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 0);
                var output = this.language.properties.loops.break;
                return Commands.LineResults.newSingleLine(output, true);
            };
            return BreakCommand;
        })(Commands.Command);
        Commands.BreakCommand = BreakCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(output, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            CommentBlockCommand.parameters = [
                new Commands.Parameters.RepeatingParameters("Contents of the comment block line", [
                    new Commands.Parameters.SingleParameter("word", "A word in the line.", false)
                ])
            ];
            return CommentBlockCommand;
        })(Commands.Command);
        Commands.CommentBlockCommand = CommentBlockCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(this.language.properties.comments.blockEnd, false);
            };
            return CommentBlockEndCommand;
        })(Commands.Command);
        Commands.CommentBlockEndCommand = CommentBlockEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(this.language.properties.comments.blockStart, false);
            };
            return CommentBlockStartCommand;
        })(Commands.Command);
        Commands.CommentBlockStartCommand = CommentBlockStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(this.language.properties.comments.docEnd, false);
            };
            return CommentDocEndCommand;
        })(Commands.Command);
        Commands.CommentDocEndCommand = CommentDocEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(this.language.properties.comments.docStart, false);
            };
            return CommentDocStartCommand;
        })(Commands.Command);
        Commands.CommentDocStartCommand = CommentDocStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLengthMinimum(parameters, 2);
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
                commandResults.push(new Commands.CommandResult(starter, 0));
                var contents = this.wrapTagContents(lineStart, contentsRaw), contentsPadded = this.padContentsWithTag("", contents);
                for (var i = 0; i < contentsPadded.length; i += 1) {
                    commandResults.push(new Commands.CommandResult(contentsPadded[i], 0));
                }
                var ender = this.language.properties.comments.docLineStart;
                ender += "</" + tag + ">";
                commandResults.push(new Commands.CommandResult(ender, 0));
                return new Commands.LineResults(commandResults, false);
            };
            /**
             * Renders a JSDoc-like command for a language with the given parameters.
             *
             * @param parameters   The command's name, followed by any parameters.
             * @returns Line(s) of code in the language.
             */
            CommentDocTagCommand.prototype.renderJsDoc = function (parameters) {
                this.requireParametersLengthMinimum(parameters, 2);
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
                    commandResults.push(new Commands.CommandResult(contentsPadded[i], 0));
                }
                return new Commands.LineResults(commandResults, false);
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
                new Commands.Parameters.SingleParameter("tag", "The name of the tag.", true),
                new Commands.Parameters.SingleParameter("parameter", "An optional descriptor for the tag.", false),
                new Commands.Parameters.SingleParameter("comments", "Comments regarding the tag.", false)
            ];
            return CommentDocTagCommand;
        })(Commands.Command);
        Commands.CommentDocTagCommand = CommentDocTagCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(result, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            CommentLineCommand.parameters = [
                new Commands.Parameters.RepeatingParameters("Contents of the comment line.", [
                    new Commands.Parameters.SingleParameter("word", "A word in the line.", false)
                ])
            ];
            return CommentLineCommand;
        })(Commands.Command);
        Commands.CommentLineCommand = CommentLineCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 0);
                var output = this.language.properties.loops.continue;
                return Commands.LineResults.newSingleLine(output, true);
            };
            return ContinueCommand;
        })(Commands.Command);
        Commands.ContinueCommand = ContinueCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLengthMinimum(parameters, 2);
                var result = parameters[1];
                for (var i = 2; i < parameters.length; i += 1) {
                    result += this.language.properties.strings.concatenate + parameters[i];
                }
                return Commands.LineResults.newSingleLine(result, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            ConcatenateCommand.parameters = [
                new Commands.Parameters.SingleParameter("string", "A string to concatenate.", true),
                new Commands.Parameters.SingleParameter("string", "A string to concatenate.", true),
                new Commands.Parameters.RepeatingParameters("Additional strings to concatenate.", [
                    new Commands.Parameters.SingleParameter("string", "A string to concatenate.", false)
                ])
            ];
            return ConcatenateCommand;
        })(Commands.Command);
        Commands.ConcatenateCommand = ConcatenateCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 1);
                var lines = [new Commands.CommandResult("", -1)], line;
                if (!this.language.properties.style.separateBraceLines) {
                    lines[0].text = "\0";
                    lines.push(new Commands.CommandResult("", 0));
                }
                this.addLineEnder(lines, this.language.properties.conditionals.continueLeft, 0);
                line = lines[lines.length - 1];
                line.text += this.language.properties.conditionals.elif;
                line.text += this.language.properties.conditionals.startLeft;
                line.text += parameters[1];
                this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);
                return new Commands.LineResults(lines, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            ElseIfStartCommand.parameters = [
                new Commands.Parameters.SingleParameter("conditional", "A conditional to check.", true)
            ];
            return ElseIfStartCommand;
        })(Commands.Command);
        Commands.ElseIfStartCommand = ElseIfStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 0);
                var lines = [new Commands.CommandResult("", -1)], indentation;
                if (!this.language.properties.style.separateBraceLines) {
                    lines[0].text = "\0";
                    lines.push(new Commands.CommandResult("", 0));
                }
                this.addLineEnder(lines, this.language.properties.conditionals.continueLeft, 0);
                lines[lines.length - 1].text += this.language.properties.conditionals.else;
                if (this.language.properties.style.separateBraceLines) {
                    lines.push(new Commands.CommandResult("", 1));
                }
                else {
                    lines[lines.length - 1].indentation = 1;
                }
                lines[lines.length - 1].text += this.language.properties.conditionals.continueRight;
                return new Commands.LineResults(lines, false);
            };
            return ElseStartCommand;
        })(Commands.Command);
        Commands.ElseStartCommand = ElseStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 1);
                var output = [], source = this.language.properties.style.fileEndLines;
                for (var i = 0; i < source.length; i += 1) {
                    output.push(new Commands.CommandResult(source[i].replace("{0}", parameters[1]), 0));
                }
                if (output.length !== 0) {
                    output[0].indentation = -this.language.properties.style.fileIndentation;
                }
                return new Commands.LineResults(output, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            FileEndCommand.parameters = [
                new Commands.Parameters.SingleParameter("fileName", "The name of the file.", true)
            ];
            return FileEndCommand;
        })(Commands.Command);
        Commands.FileEndCommand = FileEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 1);
                var output = [], source = this.language.properties.style.fileStartLines;
                for (var i = 0; i < source.length; i += 1) {
                    output.push(new Commands.CommandResult(source[i].replace("{0}", parameters[1]), 0));
                }
                if (output.length !== 0) {
                    output[output.length - 1].indentation = this.language.properties.style.fileIndentation;
                }
                return new Commands.LineResults(output, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            FileStartCommand.parameters = [
                new Commands.Parameters.SingleParameter("fileStart", "The name of the file.", true)
            ];
            return FileStartCommand;
        })(Commands.Command);
        Commands.FileStartCommand = FileStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 0);
                var ender = this.language.properties.loops.forEachEnd;
                return new Commands.LineResults([new Commands.CommandResult(ender, -1)], false);
            };
            return ForEachEndCommand;
        })(Commands.Command);
        Commands.ForEachEndCommand = ForEachEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 3);
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
                return new Commands.LineResults([new Commands.CommandResult(output, 1)], false);
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
                output = [new Commands.CommandResult(line, 0)];
                this.addLineEnder(output, this.language.properties.conditionals.startRight, 1);
                return new Commands.LineResults(output, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            ForEachKeyStartCommand.parameters = [
                new Commands.Parameters.SingleParameter("container", "A container to iterate over.", true),
                new Commands.Parameters.SingleParameter("keyName", "The name of the iteration key variable.", true),
                new Commands.Parameters.SingleParameter("keyType", "The type of the iteration key variable.", true)
            ];
            return ForEachKeyStartCommand;
        })(Commands.Command);
        Commands.ForEachKeyStartCommand = ForEachKeyStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 6);
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
                return new Commands.LineResults([new Commands.CommandResult(output, 1)], false);
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
                    var typeName;
                    var iteratorName;
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
                output = [new Commands.CommandResult(line, 0)];
                this.addLineEnder(output, this.language.properties.conditionals.startRight, 1);
                if (this.language.properties.loops.forEachPairsAsPair && this.language.properties.variables.declarationRequired) {
                    this.addPairKeyLookup(parameters, output);
                    this.addPairValueLookup(parameters, output);
                }
                else if (this.language.properties.loops.forEachPairsAsKeys) {
                    this.addKeyedValueLookup(parameters, output);
                }
                return new Commands.LineResults(output, false);
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
                output.push(new Commands.CommandResult(keyVariable, 0));
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
                output.push(new Commands.CommandResult(valueVariable, 0));
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
                output.push(new Commands.CommandResult(valueVariable, 0));
            };
            /**
             * Information on parameters this command takes in.
             */
            ForEachPairStartCommand.parameters = [
                new Commands.Parameters.SingleParameter("container", "A container to iterate over.", true),
                new Commands.Parameters.SingleParameter("pairName", "The name of the pair variable", true),
                new Commands.Parameters.SingleParameter("keyName", "The name of the key variable.", true),
                new Commands.Parameters.SingleParameter("keyType", "The type of the key variable.", true),
                new Commands.Parameters.SingleParameter("valueName", "The name of the value variable.", true),
                new Commands.Parameters.SingleParameter("valueType", "The type of the value variable.", true)
            ];
            return ForEachPairStartCommand;
        })(Commands.Command);
        Commands.ForEachPairStartCommand = ForEachPairStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 4);
                var starter;
                if (this.language.properties.loops.rangedForLoops) {
                    starter = this.renderStartRanged(parameters);
                }
                else {
                    starter = this.renderStartLoop(parameters);
                }
                var lines = [new Commands.CommandResult(starter, 0)];
                this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);
                return new Commands.LineResults(lines, false);
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
                output += this.context.convertParsed(["variable inline", parameters[1], parameters[2], parameters[3]]).commandResults[0].text;
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
                new Commands.Parameters.SingleParameter("name", "The name of the loop variable.", true),
                new Commands.Parameters.SingleParameter("type", "The type of the loop variable", true),
                new Commands.Parameters.SingleParameter("start", "What the loop variable starts at.", true),
                new Commands.Parameters.SingleParameter("end", "What the loop variable ends at.", true)
            ];
            return ForNumbersStartCommand;
        })(Commands.Command);
        Commands.ForNumbersStartCommand = ForNumbersStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 0);
                var ender = this.language.properties.conditionals.end;
                if (ender === "\0") {
                    return Commands.LineResults.newBlockLine("\0", -1);
                }
                return Commands.LineResults.newBlockLine(ender, -1);
            };
            return BlockEndCommand;
        })(Commands.Command);
        Commands.BlockEndCommand = BlockEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="BlockEndCommand.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
        })(Commands.BlockEndCommand);
        Commands.ForNumbersEndCommand = ForNumbersEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="BlockEndCommand.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
        })(Commands.BlockEndCommand);
        Commands.FunctionEndCommand = FunctionEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
             * @returns Line(s) of code in the language.
             * @remarks Usage: (name, returnType[, parameterName, parameterType, ...]).
             */
            FunctionStartCommand.prototype.render = function (parameters) {
                this.requireParametersLengthMinimum(parameters, 2);
                this.requireParametersLengthEven(parameters);
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
                output = [new Commands.CommandResult(declaration, 0)];
                this.addLineEnder(output, this.language.properties.functions.defineStartRight, 1);
                return new Commands.LineResults(output, false);
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
                new Commands.Parameters.SingleParameter("name", "The name of the function.", true),
                new Commands.Parameters.SingleParameter("returnType", "The return type of the function.", true),
                new Commands.Parameters.RepeatingParameters("Function parameters.", [
                    new Commands.Parameters.SingleParameter("parameterName", "A named parameter for the function.", true),
                    new Commands.Parameters.SingleParameter("parameterType", "The type of the parameter.", true)
                ])
            ];
            return FunctionStartCommand;
        })(Commands.Command);
        Commands.FunctionStartCommand = FunctionStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="BlockEndCommand.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
        })(Commands.BlockEndCommand);
        Commands.IfEndCommand = IfEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 1);
                var line = this.language.properties.conditionals.if;
                line += this.language.properties.conditionals.startLeft;
                line += parameters[1];
                var lines = [new Commands.CommandResult(line, 0)];
                this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);
                return new Commands.LineResults(lines, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            IfStartCommand.parameters = [
                new Commands.Parameters.SingleParameter("conditional", "A conditional to check.", true)
            ];
            return IfStartCommand;
        })(Commands.Command);
        Commands.IfStartCommand = IfStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 2);
                return Commands.LineResults.newSingleLine(parameters[1] + "[" + parameters[2] + "]", false);
            };
            /**
             * Information on parameters this command takes in.
             */
            IndexCommand.parameters = [
                new Commands.Parameters.SingleParameter("container", "A container to look within.", true),
                new Commands.Parameters.SingleParameter("index", "The index within the container.", true)
            ];
            return IndexCommand;
        })(Commands.Command);
        Commands.IndexCommand = IndexCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLengthMinimum(parameters, 1);
                var typeNameRaw = "list<" + parameters[1] + ">", typeName = this.context.convertCommon("type", typeNameRaw), output = "new " + typeName;
                if (parameters.length > 2) {
                    output += " { ";
                    output += parameters.slice(2).join(", ");
                    output += " }";
                }
                else {
                    output += "()";
                }
                return Commands.LineResults.newSingleLine(output, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            ListInitializeCommand.parameters = [
                new Commands.Parameters.SingleParameter("type", "The type of object.", true),
                new Commands.Parameters.RepeatingParameters("Items initially in the list.", [
                    new Commands.Parameters.SingleParameter("item", "An item initially in the list.", false)
                ])
            ];
            return ListInitializeCommand;
        })(Commands.Command);
        Commands.ListInitializeCommand = ListInitializeCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="NativeCallCommand.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                new Commands.Parameters.SingleParameter("name", "The name of the list.", true)
            ];
            return ListLengthCommand;
        })(Commands.NativeCallCommand);
        Commands.ListLengthCommand = ListLengthCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="NativeCallCommand.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                new Commands.Parameters.SingleParameter("name", "The name of the list.", true),
                new Commands.Parameters.SingleParameter("value", "An item to push into the list.", true),
            ];
            return ListPushCommand;
        })(Commands.NativeCallCommand);
        Commands.ListPushCommand = ListPushCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(parameters.slice(1).join(" "), false);
            };
            /**
             * Information on parameters this command takes in.
             */
            LiteralCommand.parameters = [
                new Commands.Parameters.RepeatingParameters("Contents to print.", [
                    new Commands.Parameters.SingleParameter("word", "A word to print.", false)
                ])
            ];
            return LiteralCommand;
        })(Commands.Command);
        Commands.LiteralCommand = LiteralCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 0);
                var output = [], source = this.language.properties.style.mainEndLines;
                for (var i = 0; i < source.length; i += 1) {
                    output.push(new Commands.CommandResult(source[i], 0));
                }
                if (output.length !== 0) {
                    output[0].indentation = -this.language.properties.style.mainIndentation;
                }
                return new Commands.LineResults(output, false);
            };
            return MainEndCommand;
        })(Commands.Command);
        Commands.MainEndCommand = MainEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 0);
                var output = [], source = this.language.properties.style.mainStartLines;
                for (var i = 0; i < source.length; i += 1) {
                    output.push(new Commands.CommandResult(source[i], 0));
                }
                if (output.length !== 0) {
                    output[output.length - 1].indentation = this.language.properties.style.mainIndentation;
                }
                return new Commands.LineResults(output, false);
            };
            return MainStartCommand;
        })(Commands.Command);
        Commands.MainStartCommand = MainStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 1);
                var not = this.language.properties.operators.not;
                return Commands.LineResults.newSingleLine(not + parameters[1], false);
            };
            /**
             * Information on parameters this command takes in.
             */
            NotCommand.parameters = [
                new Commands.Parameters.SingleParameter("value", "A value to inverse.", true)
            ];
            return NotCommand;
        })(Commands.Command);
        Commands.NotCommand = NotCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLengthMinimum(parameters, 3);
                this.requireParametersLengthOdd(parameters);
                var result = this.context.convertCommon("value", parameters[1]);
                for (var i = 2; i < parameters.length; i += 2) {
                    result += " " + this.context.convertCommon("operator", parameters[i]);
                    result += " " + this.context.convertCommon("value", parameters[i + 1]);
                }
                return Commands.LineResults.newSingleLine(result, true);
            };
            /**
             * Information on parameters this command takes in.
             */
            OperationCommand.parameters = [
                new Commands.Parameters.SingleParameter("value", "A value to work with.", true),
                new Commands.Parameters.SingleParameter("operator", "The operation's operator.", true),
                new Commands.Parameters.SingleParameter("value", "A value to work with.", true),
                new Commands.Parameters.RepeatingParameters("Additional values and operators", [
                    new Commands.Parameters.SingleParameter("item", "An additional operator.", false),
                    new Commands.Parameters.SingleParameter("item", "An additional value to work with.", false)
                ])
            ];
            return OperationCommand;
        })(Commands.Command);
        Commands.OperationCommand = OperationCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 1);
                return Commands.LineResults.newSingleLine(this.convertOperator(parameters[1]), false);
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
                new Commands.Parameters.SingleParameter("operator", "An operator to alias.", true)
            ];
            return OperatorCommand;
        })(Commands.Command);
        Commands.OperatorCommand = OperatorCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(result, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            ParenthesisCommand.parameters = [
                new Commands.Parameters.RepeatingParameters("Contents within the parenthesis.", [
                    new Commands.Parameters.SingleParameter("contents", "Contents within the parenthesis.", false)
                ])
            ];
            return ParenthesisCommand;
        })(Commands.Command);
        Commands.ParenthesisCommand = ParenthesisCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(result, true);
            };
            /**
             * Information on parameters this command takes in.
             */
            PrintCommand.parameters = [
                new Commands.Parameters.SingleParameter("contents", "Contents to be printed.", false)
            ];
            return PrintCommand;
        })(Commands.Command);
        Commands.PrintCommand = PrintCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                return Commands.LineResults.newSingleLine(output, true);
            };
            /**
             * Information on parameters this command takes in.
             */
            ReturnCommand.parameters = [
                new Commands.Parameters.SingleParameter("value", "A value to return.", false)
            ];
            return ReturnCommand;
        })(Commands.Command);
        Commands.ReturnCommand = ReturnCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="NativeCallCommand.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                new Commands.Parameters.SingleParameter("string", "A string to look within.", true),
                new Commands.Parameters.SingleParameter("substring", "A potential substring of the string.", true)
            ];
            return StringIndexCommand;
        })(Commands.NativeCallCommand);
        Commands.StringIndexCommand = StringIndexCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="NativeCallCommand.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                new Commands.Parameters.SingleParameter("string", "A string to retrieve the length of.", true)
            ];
            return StringLengthCommand;
        })(Commands.NativeCallCommand);
        Commands.StringLengthCommand = StringLengthCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 0);
                return Commands.LineResults.newSingleLine(this.language.properties.classes.this, false);
            };
            return ThisCommand;
        })(Commands.Command);
        Commands.ThisCommand = ThisCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 1);
                return Commands.LineResults.newSingleLine(this.convertType(parameters[1]), false);
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
                return typeName + "[]";
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
                if (!this.language.properties.classes.generics) {
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
                return typeNameRaw.indexOf("[") !== -1;
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
                new Commands.Parameters.SingleParameter("type", "A type to parse.", true)
            ];
            return TypeCommand;
        })(Commands.Command);
        Commands.TypeCommand = TypeCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 1);
                return Commands.LineResults.newSingleLine(this.convertValue(parameters[1]), false);
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
                new Commands.Parameters.SingleParameter("value", "A value to parse.", true)
            ];
            return ValueCommand;
        })(Commands.Command);
        Commands.ValueCommand = ValueCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLengthRange(parameters, 2, 3);
                if (parameters.length === 3 && !this.language.properties.variables.declarationRequired) {
                    return Commands.LineResults.newSingleLine("\0", false);
                }
                var starter = this.language.properties.variables.declaration;
                var newParameters = parameters.slice();
                newParameters[0] = "variable inline";
                var ender = this.context.convertParsed(newParameters).commandResults[0].text;
                return Commands.LineResults.newSingleLine(starter + ender, true);
            };
            /**
             * Information on parameters this command takes in.
             */
            VariableCommand.parameters = [
                new Commands.Parameters.SingleParameter("name", "The name of the variable.", true),
                new Commands.Parameters.SingleParameter("type", "The type of the variable.", true),
                new Commands.Parameters.SingleParameter("value", "The starting value of the variable.", true)
            ];
            return VariableCommand;
        })(Commands.Command);
        Commands.VariableCommand = VariableCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLengthRange(parameters, 2, 3);
                if (parameters.length === 3 && !this.language.properties.variables.declarationRequired) {
                    return Commands.LineResults.newSingleLine("\0", false);
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
                return Commands.LineResults.newSingleLine(output, false);
            };
            /**
             * Renders the "= value" part of a command.
             *
             * @param valueRaw   The raw value of a variable.
             * @returns   The "= value" part of a command.
             */
            VariableInlineCommand.prototype.renderVariableValue = function (valueRaw) {
                var operator = this.context.convert(["operator : equals"])[0];
                var value = this.context.convert(["value : " + valueRaw])[0];
                return operator + " " + value;
            };
            /**
             * Information on parameters this command takes in.
             */
            VariableInlineCommand.parameters = [
                new Commands.Parameters.SingleParameter("name", "The name of the variable.", true),
                new Commands.Parameters.SingleParameter("type", "The type of the variable.", true),
                new Commands.Parameters.SingleParameter("value", "The starting value of the variable.", true)
            ];
            return VariableInlineCommand;
        })(Commands.Command);
        Commands.VariableInlineCommand = VariableInlineCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="BlockEndCommand.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
        })(Commands.BlockEndCommand);
        Commands.WhileEndCommand = WhileEndCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                this.requireParametersLength(parameters, 1);
                var line = this.language.properties.conditionals.while;
                line += this.language.properties.conditionals.startLeft;
                line += parameters[1];
                var lines = [new Commands.CommandResult(line, 0)];
                this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);
                return new Commands.LineResults(lines, false);
            };
            /**
             * Information on parameters this command takes in.
             */
            WhileStartCommand.parameters = [
                new Commands.Parameters.SingleParameter("conditional", "A conditional to check.", true)
            ];
            return WhileStartCommand;
        })(Commands.Command);
        Commands.WhileStartCommand = WhileStartCommand;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="CommandResult.ts" />
/// <reference path="ArrayInitializeCommand.ts" />
/// <reference path="ArrayLengthCommand.ts" />
/// <reference path="BreakCommand.ts" />
/// <reference path="CommentBlockCommand.ts" />
/// <reference path="CommentBlockEndCommand.ts" />
/// <reference path="CommentBlockStartCommand.ts" />
/// <reference path="CommentDocEndCommand.ts" />
/// <reference path="CommentDocStartCommand.ts" />
/// <reference path="CommentDocTagCommand.ts" />
/// <reference path="CommentLineCommand.ts" />
/// <reference path="ContinueCommand.ts" />
/// <reference path="ConcatenateCommand.ts" />
/// <reference path="ElseIfStartCommand.ts" />
/// <reference path="ElseStartCommand.ts" />
/// <reference path="FileEndCommand.ts" />
/// <reference path="FileStartCommand.ts" />
/// <reference path="ForEachEndCommand.ts" />
/// <reference path="ForEachKeyStartCommand.ts" />
/// <reference path="ForEachPairStartCommand.ts" />
/// <reference path="ForNumbersStartCommand.ts" />
/// <reference path="ForNumbersEndCommand.ts" />
/// <reference path="FunctionEndCommand.ts" />
/// <reference path="FunctionStartCommand.ts" />
/// <reference path="IfEndCommand.ts" />
/// <reference path="IfStartCommand.ts" />
/// <reference path="IndexCommand.ts" />
/// <reference path="ListInitializeCommand.ts" />
/// <reference path="ListLengthCommand.ts" />
/// <reference path="ListPushCommand.ts" />
/// <reference path="LiteralCommand.ts" />
/// <reference path="MainEndCommand.ts" />
/// <reference path="MainStartCommand.ts" />
/// <reference path="NotCommand.ts" />
/// <reference path="OperationCommand.ts" />
/// <reference path="OperatorCommand.ts" />
/// <reference path="ParenthesisCommand.ts" />
/// <reference path="PrintCommand.ts" />
/// <reference path="ReturnCommand.ts" />
/// <reference path="StringIndexCommand.ts" />
/// <reference path="StringLengthCommand.ts" />
/// <reference path="ThisCommand.ts" />
/// <reference path="TypeCommand.ts" />
/// <reference path="ValueCommand.ts" />
/// <reference path="VariableCommand.ts" />
/// <reference path="VariableInlineCommand.ts" />
/// <reference path="WhileEndCommand.ts" />
/// <reference path="WhileStartCommand.ts" />
var GLS;
(function (GLS) {
    var Commands;
    (function (Commands) {
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
                    "array initialize": new Commands.ArrayInitializeCommand(context),
                    "array length": new Commands.ArrayLengthCommand(context),
                    "break": new Commands.BreakCommand(context),
                    "comment block": new Commands.CommentBlockCommand(context),
                    "comment block end": new Commands.CommentBlockEndCommand(context),
                    "comment block start": new Commands.CommentBlockStartCommand(context),
                    "comment doc end": new Commands.CommentDocEndCommand(context),
                    "comment doc start": new Commands.CommentDocStartCommand(context),
                    "comment doc tag": new Commands.CommentDocTagCommand(context),
                    "comment line": new Commands.CommentLineCommand(context),
                    "concatenate": new Commands.ConcatenateCommand(context),
                    "continue": new Commands.ContinueCommand(context),
                    "else if start": new Commands.ElseIfStartCommand(context),
                    "else start": new Commands.ElseStartCommand(context),
                    "file end": new Commands.FileEndCommand(context),
                    "file start": new Commands.FileStartCommand(context),
                    "for each end": new Commands.ForEachEndCommand(context),
                    "for each key start": new Commands.ForEachKeyStartCommand(context),
                    "for each pair start": new Commands.ForEachPairStartCommand(context),
                    "for numbers start": new Commands.ForNumbersStartCommand(context),
                    "for numbers end": new Commands.ForNumbersEndCommand(context),
                    "function start": new Commands.FunctionStartCommand(context),
                    "function end": new Commands.FunctionEndCommand(context),
                    "if end": new Commands.IfEndCommand(context),
                    "if start": new Commands.IfStartCommand(context),
                    "index": new Commands.IndexCommand(context),
                    "list initialize": new Commands.ListInitializeCommand(context),
                    "list length": new Commands.ListLengthCommand(context),
                    "list push": new Commands.ListPushCommand(context),
                    "literal": new Commands.LiteralCommand(context),
                    "main end": new Commands.MainEndCommand(context),
                    "main start": new Commands.MainStartCommand(context),
                    "not": new Commands.NotCommand(context),
                    "operation": new Commands.OperationCommand(context),
                    "operator": new Commands.OperatorCommand(context),
                    "parenthesis": new Commands.ParenthesisCommand(context),
                    "print": new Commands.PrintCommand(context),
                    "return": new Commands.ReturnCommand(context),
                    "string index": new Commands.StringIndexCommand(context),
                    "string length": new Commands.StringLengthCommand(context),
                    "this": new Commands.ThisCommand(context),
                    "type": new Commands.TypeCommand(context),
                    "value": new Commands.ValueCommand(context),
                    "variable": new Commands.VariableCommand(context),
                    "variable inline": new Commands.VariableInlineCommand(context),
                    "while end": new Commands.WhileEndCommand(context),
                    "while start": new Commands.WhileStartCommand(context)
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
                    throw new Error("Unknown command requested: " + alias);
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
                return this.getCommand(parameters[0]).render(parameters);
            };
            return CommandsBag;
        })();
        Commands.CommandsBag = CommandsBag;
    })(Commands = GLS.Commands || (GLS.Commands = {}));
})(GLS || (GLS = {}));
/// <reference path="Commands/Command.ts" />
/// <reference path="Commands/CommandsBag.ts" />
/// <reference path="Commands/CommandResult.ts" />
/// <reference path="Commands/LineResults.ts" />
/// <reference path="Languages/Language.ts" />
var GLS;
(function (GLS) {
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
            this.context = context;
            this.commandsBag = new GLS.Commands.CommandsBag(context);
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
                        nextStart = end;
                        break;
                    case "(":
                        end = this.findSearchEnd(line, i, line[i], ")");
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
    })();
    GLS.GlsParser = GlsParser;
})(GLS || (GLS = {}));
/// <reference path="Commands/Command.ts" />
/// <reference path="Commands/CommandResult.ts" />
/// <reference path="Commands/CommandStrings.ts" />
/// <reference path="Commands/LineResults.ts" />
/// <reference path="Languages/Language.ts" />
/// <reference path="GlsParser.ts" />
var GLS;
(function (GLS) {
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
            this.parser = new GLS.GlsParser(this);
        }
        /**
         * @returns The language this context is converting GLS code into.
         */
        ConversionContext.prototype.getLanguage = function () {
            return this.language;
        };
        /**
         * Converts raw GLS syntax to the context language.
         *
         * @param lines   Lines of raw GLS syntax.
         * @returns Equivalent lines of code in the context language.
         */
        ConversionContext.prototype.convert = function (lines) {
            var indentation = 0, output = [];
            for (var i = 0; i < lines.length; i += 1) {
                if (lines[i].trim() === "") {
                    output.push(this.generateTabs(indentation));
                    continue;
                }
                var lineResults = this.parser.parseCommand(lines[i]);
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
                    output[output.length - 1] += this.language.properties.style.semicolon;
                }
            }
            return output;
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
         * Generates spaces equivalent to 4-space code tabbing.
         *
         * @param amount   How many tabs should be added.
         * @returns An all-spaces String of length = amount * 4.
         */
        ConversionContext.prototype.generateTabs = function (amount) {
            var output = "";
            for (var i = 0; i < amount; i += 1) {
                output += "    ";
            }
            return output;
        };
        return ConversionContext;
    })();
    GLS.ConversionContext = ConversionContext;
})(GLS || (GLS = {}));

if (typeof module !== "undefined") {
    module.exports = GLS;
}
