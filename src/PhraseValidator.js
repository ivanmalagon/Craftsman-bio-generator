function PhraseValidator()
{
}

new PhraseValidator("");

PhraseValidator.prototype.CheckForClosedTags = function(phrase)
{
	var open = false;
	
	for (var i = 0; i < phrase.length; i++)
	{
		if (phrase.charAt(i) == "<")
		{
			if (open)
				throw "Anidation for delimiters is not allowed.";
			else
				open = true;
		}	
		else if (phrase.charAt(i) == ">")
		{
			if (open)
				open = false;
			else
				throw "Open delimiter not found.";	
		}	
	}
	
	if (open)
		throw "Close delimiter not found in " + phrase;
}