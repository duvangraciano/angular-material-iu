Hi there! Welcome to Cloud9 IDE!

To get you started, create some files, play with the terminal,
or visit http://docs.c9.io for our documentation.
If you want, you can also go watch some training videos at
http://www.youtube.com/user/c9ide.

Happy coding!
The Cloud9 IDE team

¿Cómo Instalar Node.JS Mediante el uso de un PPA?
Una alternativa en la que se puede obtener una versión más reciente de Node.js es agregar un PPA (archivo de paquete personal) mantenido por NodeSource. Ahi tendrán más versiones de Node.js que los repositorios oficiales de Ubuntu hasta la fecha, y le permite elegir entre Node.js v4.x (la versión más antigua de soporte a largo plazo, con apoyo hasta abril de 2017), v6. x (la versión más reciente LTS, que será apoyada hasta abril de 2018), y v7.x Node.js (la actual versión desarrollada de forma activa).

En primer lugar, es necesario instalar el PPA con el fin de obtener acceso a su contenido. Asegúrate de que está en su directorio personal, y utilizar curl para recuperar el script de instalación para su versión preferida, asegurándote de reemplazar 6.x con la cadena de versión correcta:

$>	curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
$>	sudo bash nodesource_setup.sh
$>	sudo apt-get install nodejs
$>	sudo apt-get install build-essential


run c9.io
ng serve --host 0.0.0.0 --port 8080 --disableHostCheck


Push to GitHub

> git add *
> git commit -m "Commit message"
> git push origin master