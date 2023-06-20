import pymongo
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from pyarabic import normalize_text

# MongoDB connection URL
mongo_url = 'mongodb://localhost:27017/'

# Connect to MongoDB
client = pymongo.MongoClient(mongo_url)
db = client['tbevents']
collection = db['events']

# Fetch the data from MongoDB
data = collection.find({})  

# Prepare the input data
input_data = []
ids = []  

for item in data:
    title = normalize_text(item['title'])
    description = normalize_text(item['description'])
    zone = normalize_text(item['zone'])
    input_data.append(title + ' ' + description + ' ' + zone)
    ids.append(item['_id'])

input_data = np.array(input_data)

# Tokenize the input data
tokenizer = Tokenizer()
tokenizer.fit_on_texts(input_data)
sequences = tokenizer.texts_to_sequences(input_data)

# Pad the sequences to have a consistent length
padded_sequences = pad_sequences(sequences)

# Calculate the maximum sequence length
max_sequence_length = padded_sequences.shape[1]

model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(max_sequence_length,)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(6, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Make predictions with the model
predictions = model.predict(padded_sequences)

# Display the predictions
for i in range(len(input_data)):
    print("Document ID:", ids[i])
    print("Input:", input_data[i])
    print("Prediction:", predictions[i])
    print()

# Close the MongoDB connection
client.close()
