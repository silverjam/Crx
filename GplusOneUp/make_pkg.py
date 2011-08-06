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

cp("oneup.js", pkg)
cp("sounds.js", pkg)
cp("options.js", pkg)
cp("jquery-1.4.1.min.js", pkg)

cp("background.html", pkg)
cp("options.html", pkg)

cp("oneup.css", pkg)

cp("icon-15.png", pkg)
cp("icon-15-inv.png", pkg)

cp("icon-15g.png", pkg)
cp("icon-15g-inv.png", pkg)

cp("icon-15g1.png", pkg)
cp("icon-15g1-inv.png", pkg)

cp("icon-15r.png", pkg)
cp("icon-15r-inv.png", pkg)

cp("icon-16.png", pkg)
cp("icon-48.png", pkg)
cp("icon-64.png", pkg)
cp("icon-128.png", pkg)
cp("icon-256.png", pkg)

cp("1up-anlg.mp3", pkg)
cp("1up-dig.mp3", pkg)

chdir(pkg)

if path.exists(ZF):
	print 'Removing: ', ZF
	unlink(ZF)

print 'Zipping:', Z
make_archive(Z, "zip")
