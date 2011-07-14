import os, sys, base64

inp = open(sys.argv[1])
out = open(sys.argv[2], 'w')

linenum = 0

def err(msg, *args, **kw):
	sys.stderr.write('\nE: %s\n' % (msg % args % kw,))

for line in inp:

	linenum += 1

	sys.stdout.write('.')

	start = "url("
	start_idx = line.find(start)

	if start_idx >= 0:

		# Hopefully no embeded ')' in filename

		end_idx = line.find(")", start_idx + len(start))
		filename = line[start_idx+len(start):end_idx].strip()

		if filename.startswith("data:"):
			out.write(line)
			continue

		_, extension = os.path.splitext(filename)

		if not extension:
			err('Could not find extension: %r', line)
			out.write(line)
			continue

		image_type = None

		if extension == '.jpg':
			image_type = 'jpeg'

		elif extension == '.png':
			image_type = 'png'

		elif extension == '.gif':
			image_type = 'gif'

		else:
			err('Unrecognized image extension: %r', extension)
			out.write(line)
			continue

		try:
			fp = file(filename, 'rb')
		except IOError:
			err('Could not find file for line %d: %r', linenum, filename)
			out.write(line)
			continue

		data = fp.read()

		b64_data = base64.encodestring(data)
		b64_data = str.join('', b64_data.splitlines())

		template = 'url("data:image/%s;base64,%s")'
		data_url = template % (image_type, b64_data)

		out.write(line[:start_idx])
		out.write(data_url)
		out.write(line[end_idx+1:])

	else:
		out.write(line)
