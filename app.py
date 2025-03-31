from flask import Flask, jsonify
import random
import sqlite3
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize the database
def init_db():
    conn = sqlite3.connect('lotto.db')
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS lotto_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        numbers TEXT NOT NULL,
        generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')
    conn.commit()
    conn.close()

# Generate 6 unique random numbers between 1 and 49
def generate_lotto_numbers():
    return sorted(random.sample(range(1, 50), 6))

@app.route('/generate', methods=['GET'])
def generate():
    # Generate 6 unique random numbers
    numbers = generate_lotto_numbers()
    
    # Convert numbers to string for storage
    numbers_str = ','.join(map(str, numbers))
    
    # Store in database
    conn = sqlite3.connect('lotto.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO lotto_results (numbers) VALUES (?)', (numbers_str,))
    conn.commit()
    conn.close()
    
    # Return the generated numbers
    return jsonify({
        'numbers': numbers,
        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    })

@app.route('/history', methods=['GET'])
def history():
    conn = sqlite3.connect('lotto.db')
    cursor = conn.cursor()
    cursor.execute('SELECT numbers, generated_at FROM lotto_results ORDER BY id DESC LIMIT 10')
    rows = cursor.fetchall()
    conn.close()

    history = [{
        'numbers': list(map(int, row[0].split(','))),
        'timestamp': row[1]
    } for row in rows]

    return jsonify({'history': history})

if __name__ == '__main__':
    init_db()
    app.run(debug=True) 