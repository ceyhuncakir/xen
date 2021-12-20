import mysql.connector

class Database():
    def __init__(self, host: str, database: str, user: str, password: str):
        self.host = host
        self.database = database
        self.user = user
        self.password = password

    def fetch_data(self, table, limit, offset):
        connection = mysql.connector.connect(host=self.host, database=self.database, user=self.user, password=self.password)
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM " + table)

        result = cursor.fetchall()

        total = len(result)

        cur = connection.cursor()

        cur.execute("SELECT * FROM " + table + " ORDER By server_id DESC LIMIT %s OFFSET %s", (limit, offset))

        data = cur.fetchall()

        cur.close()
        connection.close()
        
        return data, total

