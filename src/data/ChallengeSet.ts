export type Question = {
    id: number;
    text: string;
    options: string[];
    answer: string;
}

export const TypeScriptQuestions: Question[] = [
    { 
    id: 1, 
    text: "Which keyword is used to create a blueprint for an object in TS?", 
    options: ["interface", "type", "blueprint", "struct"], 
    answer: "interface" 
    },

    { 
    id: 2, 
    text: "How do you denote an optional property?", 
    options: ["?", "!", "*", "&"], 
    answer: "?" 
    },

    { 
    id: 3, 
    text: "What is the 'any' type?", 
    options: ["A type safety escape hatch", "A strict string", "A numeric type", "An error"], 
    answer: "A type safety escape hatch" 
    },

    { 
    id: 4, 
    text: "Which command compiles TS to JS?", 
    options: ["tsc", "ts-node", "npm compile", "build-ts"], 
    answer: "tsc" 
    },

    { 
    id: 5, 
    text: "What does 'unknown' type represent?", 
    options: ["A safer version of any", "A null value", "A hidden variable", "A void function"], 
    answer: "A safer version of any" 
    },

    { 
    id: 6, 
    text: "How do you define an array of strings?", 
    options: ["string[]", "Array<str>", "[string]", "list<string>"], 
    answer: "string[]" 
    },

    { 
    id: 7, 
    text: "What is a Tuple?", 
    options: ["An array with fixed length/types", "A set of numbers", "A unique ID", "A CSS property"], 
    answer: "An array with fixed length/types" 
    },

    { 
    id: 8, 
    text: "Which operator checks for null/undefined only?", 
    options: ["??", "||", "&&", "?."], 
    answer: "??" 
    },

    { 
    id: 9, 
    text: "TS is a superset of which language?", 
    options: ["JavaScript", "Java", "C++", "Python"], 
    answer: "JavaScript" 
    },

    { 
    id: 10, 
    text: "What is an Enum?", 
    options: ["A set of named constants", "A loop type", "A math function", "A decorative element"], 
    answer: "A set of named constants" 
    }
];