interface Quote {
  author: string;
  content: string;
}

export const getQuote = async (): Promise<Quote> => {
  const res = await fetch("https://api.quotable.io/random");

  const { author, content }: Quote = await res.json();

  return { author, content };
};
