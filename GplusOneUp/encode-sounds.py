import base64

of = file('sounds.js', 'w')

data = str.join('', base64.encodestring(file("1up-anlg.mp3", "rb").read()).split())

of.write('''
g_oneup_sounds = 
'<audio ' +
    'id="oneup_sound_anlg" type="audio/mpeg" src="data:audio/mpeg;base64,''')

of.write(data)
of.write('"></audio>\'')

data = str.join('', base64.encodestring(file("1up-dig.mp3", "rb").read()).split())

of.write('''
+ '<audio ' +
    'id="oneup_sound_dig" type="audio/mpeg" src="data:audio/mpeg;base64,''')

of.write(data)
of.write('"></audio>\'')

of.close()
