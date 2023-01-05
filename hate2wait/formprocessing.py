#!/usr/bin/perl
import cgi,cgitb
def htmltop():
	print("""Content-type:text/html\r\n\r\n
		     <!DOCTYPE html>
             <html lang="en">
             <head>
                <meta charset="UTF-8"/>
                <title>Welcome Customer</title>
             </head>
             <body>""")
def htmltail():
	print("""</body>
		  </html>""")
def getData():
	formData = cgi.FieldStorage()
    sname = form.getvalue('name')
    return sname

if __name__=="__main__":
	try:
	htmltop()
	Sname=getData()
	print("Your Name is".format(Sname))
	htmltail()
	except:
		cgi.print_exception()