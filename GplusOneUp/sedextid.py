
import os
import sys

for root, dirs, files in os.walk('.'):

	if root != '.':
		continue

	for filename in files:

		if (filename.endswith(".css")  or 
			filename.endswith(".html") or 
			filename.endswith(".js")):

			fp = open(filename)

			data = fp.read()
			data = data.replace(sys.argv[1], sys.argv[2])

			fp.close()
			fp = open(filename, 'w')

			fp.write(data)
