import base64

of = file('sounds.js', 'w')

def encode(fn):
    fp = file(fn, "rb")
    bin = fp.read()
    b64 = base64.encodestring(bin).split()
    return b64

tmpl = '''
'<audio ' +
  'id="%(ID)s" ' +
  'type="audio/mpeg" ' +
  'src="data:audio/mpeg;base64,' +
%(DATA)s">' +
'</audio>'
'''

of.write("g_oneup_sounds = \n")

data = encode("1up-anlg.mp3")
data = str.join("' + \n'", data)
data = "'" + data

of.write(tmpl % { 'ID': 'oneup_sound_anlg', 'DATA': data})

data = encode("1up-dig.mp3")
data = str.join("' + \n'", data)
data = "'" + data

of.write(" + \n")

of.write(tmpl % { 'ID': 'oneup_sound_dig', 'DATA': data})

of.write(" ; \n")

of.close()
