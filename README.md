angular-bootstrap-gsresettableinput
=======================

A resettable input field for AngularJS styled to fit the Twitter Bootstrap standard design

Screenshot:

![Screenshot](/screenshot.png?raw=true "Screenshot")

### Installation via Bower:

```
$ bower install angular-bootstrap-gsresettableinput --save
```

### Usage:

Add "ui.gsresettableinput" to your modules list. Then you can use it like follows:

```
<gsresettableinput
    ng-model="inputModel"
    placeholder="Enter data!"    (optional)
></gsresettableinput>
```

See index.html and app.js for examples and how it works.

### Testing:

Start web server e.g. via Python:
```
$ python -m SimpleHTTPServer 8000
```

Start Karma E2E tests (has to be installed globally before):
```
$ karma start
```

### License

Copyright (c) 2014 Sebastian Hammerl, Getslash GmbH

Licensed under the MIT License