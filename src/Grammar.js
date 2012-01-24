var simpleGrammar = [];

simpleGrammar["Hello"] = ["hello"];
simpleGrammar["Composite"] = ["<Hello> world!"];
simpleGrammar["A"] = ["<B><C>"];
simpleGrammar["B"] = ["<C>"];
simpleGrammar["C"] = ["c"];
simpleGrammar["D"] = ["<D>"];
simpleGrammar["E"] = ["<F>", "e"];

