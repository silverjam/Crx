import base64

of = file('oneup.css', 'w')

data = str.join('', base64.encodestring(file("icon-15.png", "rb").read()).split())

of.write('''
.eswd {
	background: url(data:image/png;base64,''')
of.write(data)
of.write(')\n!important;}')

of.write('''
.eswd:hover {
	background: url(data:image/png;base64,''')
of.write(data)
of.write(')\n!important;}')


data = str.join('', base64.encodestring(file("icon-15-inv.png", "rb").read()).split())

of.write('''
.eswa {
	background: url(data:image/png;base64,''')

of.write(data)
of.write(')\n!important;}')

data = str.join('', base64.encodestring(file("icon-15g-inv.png", "rb").read()).split())

of.write('''
.oneup_rgy_inv {
	background: url(data:image/png;base64,''')

of.write(data)
of.write(')\n!important;}')

data = str.join('', base64.encodestring(file("icon-15g.png", "rb").read()).split())

of.write('''
.oneup_rgy {
	background: url(data:image/png;base64,''')

of.write(data)
of.write(')\n!important;}')

of.close()
