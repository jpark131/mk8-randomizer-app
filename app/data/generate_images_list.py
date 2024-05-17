import os
images = """export let images = {\n"""

for file in os.listdir(os.path.join(os.path.dirname(__file__),"../assets/tracks")):
    split = file[:-4].split('_')
    temp = split[0]
    split = split[1:] + [temp]
    joined = '_'.join(split).replace('\'','').replace('-','')
    images += f"    {joined}: {{\n"
    images += f"        uri: require(\"../assets/tracks/{file}\")\n"
    images += "    },\n"

for file in os.listdir(os.path.join(os.path.dirname(__file__),"../assets/cups")):
    images += f"    {file[:-5]}: {{\n"
    images += f"        uri: require(\"../assets/cups/{file}\")\n"
    images += "    },\n"

images += "}\n"

f = open(os.path.join(os.path.dirname(__file__),"images.js"), "w")
f.write(images)