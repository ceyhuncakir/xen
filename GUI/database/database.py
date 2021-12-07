import mysql.connector

class Database():
    def __init__(self, host: str, database: str, user: str, password: str):
        self.host = host
        self.database = database
        self.user = user
        self.password = password
    
    def fetch_data(self, table: str):
        connection = mysql.connector.connect(host=self.host, database=self.database, user=self.user, password=self.password)
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM " + table)

        data = cursor.fetchall()

        connection.close()
        
        return data

