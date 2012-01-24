function Parser()
{
}

new Parser("");

Parser.prototype.Evaluate = function(phrase)
{
	return this.Tokenize(phrase);	
}

Parser.prototype.Tokenize = function(phrase)
{
	new PhraseValidator().CheckForClosedTags(phrase);
	var tokens = new Array();
	
	var firstSlices = phrase.split("<");
	for (var i = 0; i < firstSlices.length; i++)
	{
		if (firstSlices[i])
		{
			var secondSlices = firstSlices[i].split(">");
			if (secondSlices.length > 1)
			{
				tokens.push(new NonTerminal(secondSlices[0]));
				if (secondSlices[1])
					tokens.push(new Terminal(secondSlices[1]));	
			}
			else
				tokens.push(new Terminal(firstSlices[i]));
		}
	}
	
	return tokens;
}

Parser.prototype.HasNonTerminals = function(phrase)
{
	var tokens = this.Tokenize(phrase);

	for (var i = 0; i < tokens.length; i++)
	{
		if (NonTerminal.prototype.isPrototypeOf(tokens[i]))
			return true;
	}
	
	return false;
}