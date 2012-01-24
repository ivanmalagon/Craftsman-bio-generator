// Token

function Token(text)
{
	this.Text = text;
}

new Token("");

// Terminal

Inherit(Terminal, Token);

function Terminal(text)
{
	Token.call(this, text);
}

// NonTerminal

Inherit(NonTerminal, Token);

function NonTerminal(text)
{
	Token.call(this, text);
}

// TokensChecker

function TokensChecker()
{
}

new TokensChecker();

TokensChecker.prototype.TokensHasNonTerminal = function(tokens, nonTerminal)
{
	for (var i = 0; i < tokens.length; i++)
	{
		if (NonTerminal.prototype.isPrototypeOf(tokens[i]) && (tokens[i].Text == nonTerminal.Text))
			return true;	
	}
	
	return false;
}

TokensChecker.prototype.CheckForRecursivity = function(tokens, token)
{
	if (NonTerminal.prototype.isPrototypeOf(token))
	{
		if (this.TokensHasNonTerminal(tokens, token))
			throw "Recursivity is not allowed in the grammar.";
	}
}