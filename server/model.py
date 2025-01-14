import pickle
import pandas as pd
import json
import tensorflow as tf
from tensorflow  import keras
import numpy as np
import boto3



class Model:
    def __init__(self):
        self.download_model_from_s3('coralmodelbucket', 'model6.keras')
        self.model = tf.keras.models.load_model('./model6.keras')
    
    def download_model_from_s3(self, bucket_name, model_key):
        s3 = boto3.client('s3')
        s3.download_file(bucket_name, model_key, 'model6.keras')
    
    def prepareImage(self, picture):
        imageTransformed = tf.keras.utils.load_img(picture, target_size=(160,160), color_mode="rgb", keep_aspect_ratio=False)
        input_arr = tf.keras.utils.img_to_array(imageTransformed)
        input_arr = np.array([input_arr])


        return input_arr
        
        
    def predict(self, picture):
        X = self.prepareImage(picture)
        print(X)
        y_pred = self.model.predict(X)

        if y_pred[0][0] > 0.5:
            return "Healthy"
        else: 
            return "Bleached"
