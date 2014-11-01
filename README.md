emidstartup
===========
Setting up environment.

Install visual studio 2013
.
Install nodejs

install git

git clone https://github.com/kumarrajput1993/emidstartup.git

cd emidstartup/emidstartup/app

npm install

npm install gulp -g

npm install bower -g

npm install karma-cli -g

npm update

bower install

bower update


building project 
===========
build the project in vs and then

run following commands inside app directory

gulp clean

gulp dist

autobuild
===========
if you want you project to autobuild run the following command inside app dir
and leave the shell open

gulp watch

unit tests
===========
to run unit tests, run the following commands inside app/tests

karma start karma.conf
