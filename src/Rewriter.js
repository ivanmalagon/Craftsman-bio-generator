// Rewriter

function Rewriter()
{

}

new Rewriter();

Rewriter.prototype.FullSubstitution = function(phrase, grammar)
{
	var text = "";
	var parser = new Parser();
	
	text = this.Substitute(phrase, grammar);
	
	while (parser.HasNonTerminals(text))
	{
		text = this.Substitute(text, grammar)
	}
	
	return text;
}

Rewriter.prototype.Substitute = function(phrase, grammar)
{
	var text = "";
	var tokens = new Parser().Tokenize(phrase);
	var tokensChecker = new TokensChecker();
	
	for (var i = 0; i < tokens.length; i++)
	{
		if (NonTerminal.prototype.isPrototypeOf(tokens[i]))
		{
			var index = Math.floor(Math.random() * grammar[tokens[i].Text].length);
			var tokenSubstitution = grammar[tokens[i].Text][index];
			tokensChecker.CheckForRecursivity(new Parser().Tokenize(tokenSubstitution), tokens[i]);
			text += tokenSubstitution;
		}
		else
			text += tokens[i].Text;
	}
	
	return text;
}

