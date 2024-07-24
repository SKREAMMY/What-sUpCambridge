import json
import xmltodict
import requests

response = requests.get("https://www.cambridge-news.co.uk/?service=rss")
dict = xmltodict.parse(response.content)
print("in python cbn")

cambridge_json = []


for item in dict["rss"]["channel"]["item"]:
    # for i in item:
    #     if "enclosure" in i:
    #         # i[enclosure]["url"] = i[enclosure]["@url"]
    #         # del i["@url"]
    #         # print(i["url"])
    #         # print("true")
    #         item[i]["url"] = item[i]["@url"]
    #         del item[i]["@url"]
    #         print(item[i]["url"])
    #         print(item[i])

    cambridge_json.append(item)

# return cambridge_json
with open("./newsJSON/cambridge-news.json", "w") as writefile:
    print("dumping cbn")
    json.dump(cambridge_json, writefile)
