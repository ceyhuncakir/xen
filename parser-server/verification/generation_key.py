import os 
from os.path import dirname, abspath
import rsa

#TODO 
# fix de path voor het worm verification storage

class Generation():

    def _store_keys(self):
        (pubKey, privKey) = rsa.newkeys(1024)

        public_key_storage_location = dirname(dirname(dirname(__file__))) 

        private_key_storage_location = os.path.dirname(os.path.realpath(__file__)) 

        storage_path_public = os.path.join(public_key_storage_location + '/Worm/verification', "publickey.pem")

        storage_path_private = os.path.join(private_key_storage_location, "privatekey.pem") 

        with open(storage_path_public, 'wb') as f:
            f.write(pubKey.save_pkcs1('PEM'))

        with open(storage_path_private, 'wb') as f:
            f.write(privKey.save_pkcs1('PEM'))
    
gen = Generation()
gen._store_keys()