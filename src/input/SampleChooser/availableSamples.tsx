const headerBlurb = `
comment block start
comment block : GLS ((General Language Syntax)) is a single syntax
comment block : that compiles into common OOP languages.
comment block : ---
comment block : Write code in the editor,
comment block : and see the language output in real time!
comment block end`;

const prepare = (strings: TemplateStringsArray): string => {
  const source = `${headerBlurb}\n${strings[0]}\n`;

  return source.substring(source.search(/\S+/));
};

export const defaultSampleName = "Default";

export const samples = {
  [defaultSampleName]: prepare`
file start : Program File
    main context start
        main start
            print : ("GLS is awesome!")
            print : ("Select a sample below to see how it works!")
        main end
    main context end
file end`,
  Variables: prepare`
file start : Program File
    main context start
        main start
            comment line : Simple declarations
            variable : foo string
            variable : bar number 7

            comment line : Assignments
            variable : qux string foo
            variable : baz number bar

            comment line : Interesting values
            variable : quux number infinity
            variable : corge boolean true

            comment line : Operation chains
            operation : bar (multiply by) 2
            operation : bar (decrease by) bar times { parenthesis : { operation : bar minus 3 } }
            variable : grault number { operation : foo (divide by) 3 plus 4 times foo }
        main end
    main context end
file end`,
  Conditionals: prepare`
file start : Program File
    main context start
        main start
            comment line : Conditionals
            if start : { operation : 2 plus 2 (equal to) 4 }
                print : ("Seems legit")
            else if start : { operation : 2 plus 2 (equal to) 5}
                print : ("That seems wrong...")
            else start
                print : ("Math.")
            if end
        main end
    main context end
file end`,
  "Arrays and Lists": prepare`
file start : Program File
    main context start
        main start
            variable : fruits { array type : string } { array initialize : string "apple" "banana" "cherry" }

            print : { string format : ("There are {0} fruits.") { array length : fruits } int }
            print : { string format : ("The first fruit is {0}.") { dictionary index : fruits 0 } string }

            variable : vegetables { list type : string } { list initialize : string "artichoke" "broccolli" "carrot" }

            list push : vegetables "onion"
            list add list : vegetables { list initialize : string "pea" "potato" }

            print : { string format : ("There are {0} vegetables.") { list length : vegetables } int }
            print : { string format : ("The first vegetable is {0}.") { dictionary index : vegetables 0 } string }
            print : { string format : ("The last vegetable is {0}.") { dictionary index : vegetables { operation : { list length : vegetables } minus 1 } } string }
        main end
    main context end
file end`,
  Dictionaries: prepare`
file start : Program File
    main context start
        main start
            comment line : Simple type
            variable start : respondentResults { dictionary type : string float } { dictionary initialize start : string float }
                dictionary pair : "javascript" 62.5 ,
                dictionary pair : "sql" 51.2 ,
                dictionary pair : "java" 39.7 ,
                dictionary pair : "c#" 34.1
            dictionary initialize end

            comment line : Indices
            variable : javascript float { dictionary index : surveyResults "javascript" }
            operation : { dictionary index : respondentResults "python" } equals 7

            comment line : Deep type
            variable start : allSurveys { dictionary type : string { dictionary type : string float } } { dictionary initialize start : string { dictionary type : string float } }
                dictionary pair : "respondent" respondentResults
            dictionary initialize end
        main end
    main context end
file end`,
  Loops: prepare`
file start : Program File
    main context start
        main start
            comment line : While
            while start : true
                print : "Hey!"
                break
            while end

            comment line : For ((range))
            for numbers start : i int 0 10
                print : i
            for numbers end

            comment line: For ((collection))
            variable start : container { dictionary type : string int } { dictionary initialize start : string int }
                dictionary pair : "bbb" 1 ,
                dictionary pair : "ccc" 2 ,
                dictionary pair : "ddd" 3
            dictionary initialize end

            for each pair start : container pair key string value int
                print : { concatenate : ("Looking at ") key  }
            for each end
        main end
    main context end
file end`,
  Classes: prepare`
file start : Program File
    class start : Person
        member variable declare : private name string
        member variable declare : private age float

        constructor start : public Person name string age float
            operation : { member variable : private { this } name } equals name
            operation : { member variable : private { this } age } equals age
        constructor end

        member function declare start : public Speak void
            print : { concatenate : ("Hello! I'm ") { member variable : private { this } name } "!" }
        member function declare end

        member function declare start : public CreateClone Person
            return : { new : Person { member variable : private { this } name } 0 }
        member function declare end
    class end

    main context start
        main start
            variable : person Person { new : Person "Mark" 26.0 }
            variable : clone Person { member function : public person CreateClone }

            member function : private clone Speak
        main end
    main context end
file end`
} as const;
