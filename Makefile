bookmarklets.xpi: manifest.json bookmark.png menu/*
	rm -f $@
	zip $@ $^
