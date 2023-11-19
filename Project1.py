import torch
import numpy as np
from PIL import Image
import pygame
from sys import exit
TEXT = "path-to-a-folder\\NewImage"
WIDTH = 400
HEIGHT = 400
FPS = 30
class random_Image:
    def generate(x_size,y_size):
        image = Image.new(mode = "RGB",size = (x_size,y_size),color = (255,255,255))
        size = int(x_size*y_size)
        tensor1 = np.random.randint(0,255,size=(size,3))
        for x in range(x_size):
            for y in range(y_size):
                value = x * y
                r = tensor1[value][0]
                g = tensor1[value][1]
                b = tensor1[value][2]
                image.putpixel((x,y),value = (r,g,b))
        return image
    def generate_animation(x_size,y_size,frames):
        animation = []
        for i in range(frames):
            image = random_Image.generate(x_size,y_size)
            text = TEXT + f"{i}.png"
            image.save(text)
            animation.append(text)
        return animation
from This_file import random_Image
pygame.init()
animation1 = random_Image.generate_animation(WIDTH,HEIGHT,FPS)
screen = pygame.display.set_mode((WIDTH,HEIGHT))
pygame.display.set_caption("Name")
clock = pygame.time.Clock()
index = 0
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
    if index >=30:
        index = 0
    screen.blit(pygame.image.load(animation1[index]),(0,0))
    pygame.display.update()
    index +=1
    clock.tick(FPS)
