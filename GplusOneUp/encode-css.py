import base64

of = file('oneup.css', 'w')

data = str.join('', base64.encodestring(file("icon-15.png", "rb").read()).split())

of.write('''
.eswd {
	background: url(data:audio/mp3;base64,''')
of.write(data)
of.write(')\n!important;}')

of.write('''
.eswd:hover {
	background: url(data:audio/mp3;base64,''')
of.write(data)
of.write(')\n!important;}')


data = str.join('', base64.encodestring(file("icon-15-inv.png", "rb").read()).split())

of.write('''
.eswa {
	background: url(data:audio/mp3;base64,''')

of.write(data)
of.write(')\n!important;}')

of.close()
