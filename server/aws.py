import boto3


s3 = boto3.client('s3')
s3.download_file('coralmodelbucket', 'model6.keras', 'model6.keras')