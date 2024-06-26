# Write a function that when given a URL as a string,
# parses out just the domain name and returns it as a string.

# For example:

# * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
# * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
# * url = "https://www.cnet.com"                -> domain name = cnet"

##### submitted
# def domain_name(url):
#     if url.startswith("http://") or url.startswith("https://"):
#         url = url.split("//")[1]
#     if url.startswith("www"):
#         url = url.split('.')[1]
#     return url.split('.')[0]

##### revised
def domain_name(url):
    return url.split("//")[-1].split("www.")[-1].split(".")[0]

print(domain_name("www.xakep.ru"))
