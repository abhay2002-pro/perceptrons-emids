from textModel.pipeline import Transcription
import soundfile as sf
from os import path
import librosa
import time
import pathlib

# Create transcription model
transcribe = Transcription('wav2text')


def main(path) : 
    file,sr = librosa.load(path, sr=16000)
    sf.write(path, file, 16000, subtype='PCM_16')
    if(pathlib.Path(path).suffix==".mp4") :
        path = read_create_wav(path)
    res = transcribe(path)
    return (res)



# if file is mp3
def read_create_wav(path):
    file,sr = librosa.load(path, sr=16000)
    sf.write("input.wav", file, 16000, subtype='PCM_16')
    return "input.wav"

if __name__ == "__main__":
    t1 = time.time()
    res = main("audio.wav")
    t2 = time.time()
    print(res, t2-t1)