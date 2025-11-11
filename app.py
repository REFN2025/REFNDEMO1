import io
import json
#from torchvision import models
#import torchvision.transforms as transforms
#from PIL import Image
from flask import Flask, jsonify, request

import argparse
#import matplotlib.pyplot as plt
#import numpy as np
#import torch
#import torch.nn as nn
#import torch.optim as optim
#from sklearn.datasets.samples_generator import make_blobs

from flask_cors import CORS

import subprocess

app = Flask(__name__)

CORS(app)
# def train(X, Y, model):
#     args_lr = 0.1
#     args_epoch = 10
#     args_batchsize = 5
#     args_device = "cpu"
#     X = torch.FloatTensor(X)
#     Y = torch.FloatTensor(Y)
#     N = len(Y)

#     optimizer = optim.SGD(model.parameters(), lr=args_lr)

#     model.train()
#     for epoch in range(args_epoch):
#         perm = torch.randperm(N)
#         sum_loss = 0

#         for i in range(0, N, args_batchsize):
#             x = X[perm[i : i + args_batchsize]].to(args_device)
#             y = Y[perm[i : i + args_batchsize]].to(args_device)

#             optimizer.zero_grad()
#             output = model(x).squeeze()
#             weight = model.weight.squeeze()

#             loss = torch.mean(torch.clamp(1 - y * output, min=0))
#             # loss += args.c * (weight.t() @ weight) / 2.0

#             loss.backward()
#             optimizer.step()

#             sum_loss += float(loss)

# print("Epoch: {:4d}\tloss: {}".format(epoch, sum_loss / N))
    
# @app.route('/fmtlupdate', methods=['GET'])
# def fmtl():
#     if request.method == 'GET':
#         # print(args)
#         X, Y = make_blobs(n_samples=500, centers=2, random_state=0, cluster_std=0.4)
#         X = (X - X.mean()) / X.std()
#         Y[np.where(Y == 0)] = -1
#         model = nn.Linear(2, 1)
#         model.to("cpu")
#         # train(X, Y, model, args)
#         train(X, Y, model)
#         # print model.weight.squeeze().detach().cpu().numpy()
#         # return 'Hello World!'
#         # W = model.weight.squeeze().detach().cpu().numpy().tostring()
#         W = model.weight.squeeze().detach().cpu().numpy()
#         WS = np.array2string(W, formatter={'float_kind':lambda x: "%.2f" % x})
#         print WS
#         return WS

# @app.route('/showprotospec', methods=['GET'])
# def showprotospec():
#     if request.method == 'GET':
#         # print(args)
#         # process = subprocess.Popen(['docker run -it --rm --net=host -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/test:/pcap -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules:/etc/snort/rules linton/docker-snort snort -r /pcap/fakecmdtest.pcap -c /etc/snort/etc/snort.conf -A console'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         # stdout, stderr = process.communicate()
#         # return stdout
#         f = open("/Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules/proto", "r")
#         return f.read()

# @app.route('/radioupdate', methods=['GET'])
# def radioupdate():
#     if request.method == 'GET':
#         # print(args)
#         # process = subprocess.Popen(['docker run -it --rm --net=host -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/test:/pcap -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules:/etc/snort/rules linton/docker-snort snort -r /pcap/fakecmdtest.pcap -c /etc/snort/etc/snort.conf -A console'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         # stdout, stderr = process.communicate()
#         # return stdout
#         f = open("/Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules/model", "r")
#         return f.read()

# @app.route('/modeltorule', methods=['GET'])
# def modeltorule():
#     if request.method == 'GET':
#         # print(args)
#         # process = subprocess.Popen(['docker run -it --rm --net=host -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/test:/pcap -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules:/etc/snort/rules linton/docker-snort snort -r /pcap/fakecmdtest.pcap -c /etc/snort/etc/snort.conf -A console'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         # stdout, stderr = process.communicate()
#         # return stdout
#         f = open("/Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules/modbus.rules", "r")
#         return f.read()

@app.route('/refntestexploit', methods=['GET'])
def autopatchtest():
    if request.method == 'GET':
        # print(args)
        # process = subprocess.Popen(['docker run -it --rm --net=host -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/test:/pcap -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules:/etc/snort/rules linton/docker-snort snort -r /pcap/fakecmdtest.pcap -c /etc/snort/etc/snort.conf -A console'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        # stdout, stderr = process.communicate()
        # return stdout
        f = open("/Users/tianlongyu/Documents/Projects/Research/REFN/demo/REFN/flask/log/refntestexploit.log", "r")
        return f.read()
  
# @app.route('/autopatchtest', methods=['GET'])
# def autopatchtest():
#     if request.method == 'GET':
#         # print(args)
#         # process = subprocess.Popen(['docker run -it --rm --net=host -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/test:/pcap -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules:/etc/snort/rules linton/docker-snort snort -r /pcap/fakecmdtest.pcap -c /etc/snort/etc/snort.conf -A console'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         # stdout, stderr = process.communicate()
#         # return stdout
#         f = open("/Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules/autopatchtest.log", "r")
#         return f.read()  

# @app.route('/showprotoparserhttp', methods=['GET'])
# def showprotoparserhttp():
#     if request.method == 'GET':
#         # print(args)
#         # process = subprocess.Popen(['docker run -it --rm --net=host -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/test:/pcap -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules:/etc/snort/rules linton/docker-snort snort -r /pcap/fakecmdtest.pcap -c /etc/snort/etc/snort.conf -A console'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         # stdout, stderr = process.communicate()
#         # return stdout
#         f = open("/Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules/iot_http.bro", "r")
#         return f.read()

# @app.route('/radioupdatehttp', methods=['GET'])
# def radioupdatehttp():
#     if request.method == 'GET':
#         # print(args)
#         # process = subprocess.Popen(['docker run -it --rm --net=host -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/test:/pcap -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules:/etc/snort/rules linton/docker-snort snort -r /pcap/fakecmdtest.pcap -c /etc/snort/etc/snort.conf -A console'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         # stdout, stderr = process.communicate()
#         # return stdout
#         f = open("/Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules/modelhttp", "r")
#         return f.read()

# @app.route('/modeltorulehttp', methods=['GET'])
# def modeltorulehttp():
#     if request.method == 'GET':
#         # print(args)
#         # process = subprocess.Popen(['docker run -it --rm --net=host -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/test:/pcap -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules:/etc/snort/rules linton/docker-snort snort -r /pcap/fakecmdtest.pcap -c /etc/snort/etc/snort.conf -A console'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         # stdout, stderr = process.communicate()
#         # return stdout
#         f = open("/Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules/http.rules", "r")
#         return f.read()

# @app.route('/autopatchtesthttp', methods=['GET'])
# def autopatchtesthttp():
#     if request.method == 'GET':
#         # print(args)
#         # process = subprocess.Popen(['docker run -it --rm --net=host -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/test:/pcap -v /Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules:/etc/snort/rules linton/docker-snort snort -r /pcap/fakecmdtest.pcap -c /etc/snort/etc/snort.conf -A console'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         # stdout, stderr = process.communicate()
#         # return stdout
#         f = open("/Users/tianlongyu/Documents/Projects/IntSys/AutoPatch/rules/httpcameratest.log", "r")
#         return f.read()

if __name__ == '__main__':
    #parser = argparse.ArgumentParser()
    #parser.add_argument("--c", type=float, default=0.01)
    #parser.add_argument("--lr", type=float, default=0.1)
    #parser.add_argument("--batchsize", type=int, default=5)
    #parser.add_argument("--epoch", type=int, default=10)
    #parser.add_argument("--device", default="cuda", choices=["cpu", "cuda"])
    #args = parser.parse_args()
    #args.device = torch.device(args.device if torch.cuda.is_available() else "cpu")
    app.run()