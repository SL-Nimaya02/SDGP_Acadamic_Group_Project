#Price Prediction
#This Flask application serves a machine learning model for predicting the price and weight of apples based on user-provided dates and apple counts, with CORS enabled for cross-origin requests.
# Define endpoint for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Load the pickled model
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
    # Check if the request method is POST
    if request.method == 'POST':
        # Parse JSON data from the request
        data = request.json
        date = data['date']
        apple_count = int(data['apple_count'])
        
        # Make prediction for one apple
        future = pd.DataFrame({'ds': [date]})
        forecast = model.predict(future)
        price_per_apple = round(forecast['yhat'].values[0],2)
        print(forecast['yhat'])

        # Calculate total price
        total_price = apple_count * price_per_apple
        killos_of_apple = apple_count*0.15 # Assuming each apple weighs 150 grams

        # Return prediction results as JSON
        return jsonify({
            'date': date,
            'apple_count': apple_count,
            'price_per_apple': round(price_per_apple, 2),
            'total_price': round(total_price, 2),
            'killos_of_apple': killos_of_apple
        })
