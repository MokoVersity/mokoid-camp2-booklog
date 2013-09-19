# Startup Engineering Camp #2 Indonesia

Hello, Indonesia

We are glad to join this camp to share our experience for you and not only tech but also exchange.

If you have any question, any suggest or any idea to implement, just write down on issues or just send email to us.

Terima kasih 謝謝 (xie xie)


# About US

Moko365 Inc. (Tapei, Taiwan)

- Jollen Chen (jollen@moko365.com)
- Hank Wang (hank@moko365.com)

[Moko365 on Github](https://github.com/moko365)

# Day 1

- [Github](https://github.com)
- [Sublime text](http://www.sublimetext.com/3)
	- [Emmet](http://emmet.io)
- [Bootstrap](http://getbootstrap.com)
- [jade](http://jade-lang.com)
	- [html2jade](https://github.com/donpark/html2jade)

## Github

- [Git Application for Mac](http://mac.github.com)
- [Git Application for Windows](http://windows.github.com)
- [Get 15 minutes and want to learn Git?](http://try.github.io/)

### Git flow

- create repository
- git clone
- git status
- git add files
- git commit -m "message"

**Notice: Always pull/push after commit all tracking files.**
- git push (need network)
- git pull (need network)

- git checkout files
- git diff

## jade

### Installation

```
$ npm install -g jade
```

### Run

```
$ jade templateFolderName
$ jade template.jade
$ jade views/*.jade -o public/
```

### Additional Tool: Convert html to jade 

- [html2jade](https://github.com/donpark/html2jade)

	```
	$ npm install -g html2jade
	$ html2jade *.html
	$ html2jade *.html -o outFolder
	```
### See Also

- [Jade Syntax Documentation](http://naltatis.github.io/jade-syntax-docs/)


## SASS

- Step 1: Install SASS compiler by npm first

```
npm install -g sass
```

- Step 2:  Using SASS compiler to generate CSS from SASS

```
sass style.sass:style.css
```

* Why use meta languages such as Jade and SASS. It's becausse that the meta form is easy to maintain and extend anything.

# Learning Resource

- [Startup Engineering on Cousera](https://class.coursera.org/startup-001/class)
- [bootstrap & html5 overview on Mokoversity](http://www.mokoversity.com/course/html5/bootstrap-html5-intro)
- [nodejs oveview on Mokoversity](http://www.mokoversity.com/course/html5/nodejs-overview)
- [jQuery overview on Mokoversity](http://www.mokoversity.com/course/html5/jquery-overview)


# Trouble Shooting

## Trouble 1: how to install Nodejs and jade

Jade will install by npm (include inside NodeJS)
So we need:

1. Install nodejs

Please visit nodejs website

```
http://nodejs.org
```

2. Install jade 

```
npm install jade --global
```

*npm* is a command line tool from NodeJS.


## Trouble 2: Sublime 3 with HTML generation (Emmet)

### Install Emmet on Sublime Text

1. Install Package Controller

-- 1.1 visit http://sublime.wbond.net/installation
-- 1.2 Ctrl + `
-- 1.3 Copy and paste install command, press enter

2. Install [Emmet](http://emmet.io)
 
-- 2.1 Ctrl + Shift + P
-- 2.2 Type 'Package Control: Install Package'
-- 2.3 Type 'Emmet' to find and install.
-- 2.4 Restart Sublime after installed.
-- 2.5 Happy Zen Coding!

- Save file first before you press Tab
- Check Sublime. Type 'syntax:html' at Sublime check box (Ctrl + Shift + P)

**See also**
- http://coding.smashingmagazine.com/2013/03/26/goodbye-zen-coding-hello-emmet/
- https://sublime.wbond.net/packages/Emmet
- https://sublime.wbond.net/installation


## Trouble 3: Must have jQuery installed along with Bootstrap

- [jQuery](http://jquery.com)
- Include jquery.min.js before include bootstrap.min.js

```
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
```

# Trouble 4: Difference between LESS, SCSS and SASS

- SCSS is an extension of CSS and with @extend behavior
- SASS is meta language of CSS
- LESS is also an extension of CSS but without @extend behavior. LESS is able to include CSS files


# Trouble 5: How to install npm packages through HTTP/Proxy

- Disable SSL of npm

```
npm config set strict-ssl false
```

- Set npm registry to http:// instead of https://

```
npm config set registry "http://registry.npmjs.org"
```

- Install packages through proxy here, eg. Jade
 
```
npm --proxy http://10.14.211.120:8080 install -g jade
```

# Trouble 6: Install SASS on Windows

- http://www.impressivewebs.com/sass-on-windows/

- Install sass through proxy

```
gem install sass -P http://10.14.211.120:8080
```

# More

- Apa Khabar 你好 (ni hao)
- Terima kasih 謝謝 (xie xie)
