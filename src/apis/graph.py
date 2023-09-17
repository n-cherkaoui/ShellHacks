import yfinance as yf
import matplotlib.pyplot as plt
import json

def ticker_tester(start, end):
  with open('tickers.json', 'r') as json_file:
    data = json.load(json_file)

  tickers = {stock["name"]: stock["shares"] for stock in data}

  return tickers


def plot_stock_prices(tickers, start_date, end_date, capital):
    # Sets up graph and gets sp500 data
    fig, ax = plt.subplots(figsize=(10, 6))
    print("1")
    sp500 = yf.download("SPY", start=start_date, end=end_date)
    print("2")    
    sp500_shares = capital / sp500["Close"][0]
    print("3")    
    total_prices = []

    # Calculates investment value for Greenvesting portfolio
    for stock in tickers:
        # data = yf.download(stock, start=start_date, end=end_date)
        # shares = tickers[stock]
        stock_allocation = [price * shares for price in stock["stock"]]

        if not total_prices:
          total_prices.append(list(stock_allocation))
        else:
          total_prices[0] = [x + y if y else x for x, y in zip(stock_allocation, total_prices[0])]

    # print(total_prices[0])
    # Plots data
    plt.plot(data.index, total_prices[0], label=stock)
    plt.plot(data.index, [price * sp500_shares for price in sp500["price"]], label=stock)

    # Customize the plot
    plt.title('Performance Comparison')
    plt.xlabel('Date')
    plt.ylabel('Portfolio Value')
    plt.legend(["GreenVesting", "S&P 500 Index"])

    # Show the plot
    plt.grid(True)
    plt.show()

# Example usage:

start_date = '2012-01-01'
end_date = '2022-12-31'
capital = 10000
tickers = ticker_tester(start_date, end_date)

plot_stock_prices(tickers, start_date, end_date, capital)
