#Reference
https://github.com/ideaq/learn-mocha
`npm init`
`npm install mocha --save -dev`
`npm install chai --save -dev`

##Hook
1. it.skip
  skip this test
2. it.only
  only test this
3. beforeEach
  execute before every Test
  'beforeEach(function(){});'
4. before
  execute once before Test
5. afterEach
6. after()

##Reporter
```
$ mocha --reporters -nyan

    dot - dot matrix
    doc - html documentation
    spec - hierarchical spec list
    json - single json object
    progress - progress bar
    list - spec-style listing
    tap - test-anything-protocol
    landing - unicode landing strip
    xunit - xunit reporter

    min - minimal reporter (great with --watch)
    json-stream - newline delimited json events
    markdown - markdown documentation (github flavour)
    nyan - nyan cat!
```
`mocha <testfilename.js> --reporters dot`
`mocha <testfilename.js> --reporters doc`
<!-- it will return a html format -->
'mocha <testfilename.js> --reporters doc > <outputfilename.html>'


##mongodb Test

link:https://codeutopia.net/blog/2016/06/10/mongoose-models-and-unit-tests-the-definitive-guide/

## touch mocha.opt file
`--recursive `
// recursive run all the test in the test directory

### inside package.json
add:
```
npm install --save-dev istanbul
```
and change the "test" script to :
```
"script":{
  <!-- test above is a directory name -->
  "test": "mocha && mocha test --reporter markdown > coverage.md",
  "coverage": "istanbul cover _mocha -- -R spec"
}
```

### coverage
```
npm run coverage
```
to 
link:https://www.youtube.com/watch?v=Q8Jl85FJz4E&t=900s
## mocha done

mocha allow us to do asyn test
but we need to pass done to it;
`it('', function(done){
  #your test here
  done;
  });`
done as a callbackn

## Timeout
the default time out is 2000ms if the test time exceed
then the test will fail;
to solve this problem:
try
`mocha --timeout 5000`
change the timeout to 5000ms
you can add to mocha.opt(s)

## sino
`npm install sinon --save-dev`
`npm install sinon-chai --save-dev`


## test browser

'npm i selenium-webdriver --save-dev'
link:https://www.seleniumhq.org/projects/webdriver/

install chrome test unit
Link: http://selenium-release.storage.googleapis.com/index.html
and choose the latest version (selenium-server-standalone-3.9.1.jar)
to execute it:
in terminal
`java -jar <selenium-server-standalone-3.9.1.jar>`//replace <>
Link: https://chromedriver.storage.googleapis.com/index.html
and choose the latest version (chrome driver)
