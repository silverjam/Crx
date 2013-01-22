#!/bin/python

from shutil import *
from os import *

Z = "../crx_gallery_pkg"
ZF = Z + ".zip"

pkg = "pkg"

def cp(file, target):
	print 'Copying:', file
	copyfile(file, path.join(target, file))

if path.exists(pkg):
	print 'Removing:', pkg
	rmtree(pkg)

mkdir(pkg)

cp("manifest.json", pkg)

cp("nobirthday.js", pkg)

cp("icon-16.png", pkg)
cp("icon-48.png", pkg)
cp("icon-64.png", pkg)
cp("icon-128.png", pkg)
cp("icon-256.png", pkg)

chdir(pkg)

if path.exists(ZF):
	print 'Removing: ', ZF
	unlink(ZF)

print 'Zipping:', Z
make_archive(Z, "zip")
