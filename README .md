# Creación de Proyecto React

A continuación se describe como instalar las herramientas que nos permita crear el proyecto de react que fueron las que utilizamos para el presente proyecto.

# Instalar Herramientas De Desarrollo

Encontrara las instrucciones de windows y linux para permitir la creación de aplicaciones react para ello utilizaremos instrucciones de computadora o el lenguaje de programación llamado javascript (JS) para esto necesitamos un software que permita ejecutar las instrucciones realizadas en javascript por ende instalaremos el software node el cuál es un entorno de ejecución para JavaScript y sus distintos archivos de código de terceros como lo es react con sus bibliotecas o librerias de código.

Instalaremos adicionalmente:

* PowerShell: Aplicación que permite escribir comandos para dar ordenes al sistema operativo el cuál utilizaremos las mismas instrucciones tanto para windows como para linux.
* Chocolatey (Solo Windows) Es un instalador de aplicaciones o paquetes que con una instrucción como choco install "nombre de la aplicación" nos ahorra tiempo evitando los clic de los instaladores y es un espacio seguro para instalar aplicaciones
* NVM (Node version manager) Aplicativo que permite instalar de forma automatica las versiones que necesitemos de node también nos permite tener varias instaladas al mismo tiempo

# Instalar Power Shell

## Windows

Abra cmd o powershell 5 con permisos de administrador y ejecute lo siguiente para instalar powershell 7

```
winget install --id Microsoft.Powershell --source winget
```

## Linux

Instale power shell segùn esto: https://learn.microsoft.com/es-es/powershell/scripting/install/installing-powershell-on-linux

En concordancia al enlace anterior se instala con estos comandos:

```
sudo apt-get update
sudo apt-get install -y wget apt-transport-https software-properties-common
wget -q "https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb"
sudo dpkg -i packages-microsoft-prod.deb
sudo apt-get update
sudo apt-get install -y powershell
pwsh
```

# Instalar NVM

## Windows

Abra la aplicación powershell 7 con permisos de administrador La busca en inicio y le da clic secundario, opción más y abrir como administrador

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'));
$Env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine");
choco install nvm.install -y;
$Env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine");
```

Terminado esto Ahora ejecute los comandos de la sesión "Instalar Node"

## Linux

Fuente Oficial: https://github.com/nvm-sh/nvm#installing-and-updating
Resumen De Fuente Oficial:
sudo apt install curl && sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

Valide la instalación abriendo otra terminal y ejecute nvm --version si no funciona valide la fuente oficial

# Instalar NODE

Abra powershell administrativo en windows o en linux ejecute "sudo pwsh"

```
nvm install 18.9.0; 
nvm use 18.9.0; 
node --version; 
```

# Crear proyecto REACT

Crearemos el proyecto llamado tutoapp con el siguiente comando
```
npx create-react-app tutoapp
```

# Comenzar a desarrollar

Ejecute en la terminal los siguientes comandos:

Ingresa a la carpeta desde terminal:

```
cd tutoapp
```

Iniciar el servidor de desarrollo:

```
npm start
```

Iniciar el código de pruebas:

```
npm test
```

Elimina esta herramienta y copia las dependencias de compilación, los archivos de configuración y las secuencias de comandos en el directorio de la aplicación.¡Si haces esto, no puedes regresar!:

```
npm run eject
```
