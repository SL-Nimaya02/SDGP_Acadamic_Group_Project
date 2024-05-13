#Description: Predict the future price of an Apple using machine learning, Facebooks Prophet and python
#Before Start code install this part "conda install libpython m2w64-toolchain -c msys2".
#Install prophet library like this "!pip install prophet"
#Import pandas library
import pandas as pd

#Load the dataset 
df = pd.read_csv('apple_history_dataset.csv')

df

df.dtypes

#data Preprocessing
df['Date'] = pd.to_datetime(df['Date']) #change date type 
df.dtypes

df

df = df [['Date','Apple_Price']]
df = df.rename(columns={'Date':'ds', 'Apple_Price':'y'}) #Rename the features
df

#Get the last 20 rows of data and store them into a new vaiable 
last = df[len(df)-20:]
last

#Get all of the rows in the data set exept for the last 20 rows of data
df = df[:-20]
df

#Get the Facebook prophet library 
from prophet import Prophet
fbp = Prophet(daily_seasonality = True)
fbp.fit(df)#fit or train model
future = fbp.make_future_dataframe(periods=365)#periods can be change.For our requrements.'we need to get predict price for 2 years . so, we need to add 730'
forecast = fbp.predict(future)

#Display chart for the prediction part,testing part and traning part
from prophet.plot import plot_plotly

# Plot the forecast with custom axis labels
fig = plot_plotly(fbp, forecast)
fig.update_layout(title={'text': 'Forecasted Apple Prices', 'x': 0.5, 'xanchor': 'center'})

# Specify the title of the chart
fig.update_layout(xaxis_title='Date', yaxis_title='Price')

# Show the plot
fig.show()

#This is example for compare predict price and actual price.

#show the model prediction for the select date 'ex:- 24-12-2023'
forecast[forecast.ds == '24-12-2023']['yhat'] 

#show the actual value of the apple price for  select date 'ex:- 24-12-2023'
last[last.ds == '24-12-2023']['y'] 

#Get user input - Date 
def calculate_predicted_price(today_price, apple_count):
    return today_price * apple_count

user_input_date = input("Enter the date between January 1, 2003 and December 31, 2024(YYYY-MM-DD): ")

# Fetch the predicted price for the selected date
predicted_price_for_date = forecast[forecast.ds == user_input_date]['yhat'].values
predicted_price_for_one_apple = predicted_price_for_date[0] if len(predicted_price_for_date) > 0 else "No prediction available"

print("Predicted price for one apple on {}: {}".format(user_input_date, predicted_price_for_one_apple))

#Get user input - Apple Count
user_input_count = int(input("Enter the count of apples: "))

#Display predict price for the Apple count. 
total_price = calculate_predicted_price(predicted_price_for_date, user_input_count)
print("Total price for {} apples on {} is: {}".format(user_input_count, user_input_date, total_price))
