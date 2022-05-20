$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage test",
  "description": "",
  "id": "homepage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6900039600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user should navigate to homepage successfull",
  "description": "",
  "id": "homepage-test;user-should-navigate-to-homepage-successfull",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I click on job title",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on enter location",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on select distance",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on enter min salary",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on enter max salary",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on select salary type",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on select job type",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on findjob button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on manage cookies",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I handale the iframe",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageTest.iClickOnJobTitle()"
});
formatter.result({
  "duration": 206842400,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.iClickOnEnterLocation()"
});
formatter.result({
  "duration": 102725300,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.iClickOnSelectDistance()"
});
formatter.result({
  "duration": 145434000,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 189740600,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.iClickOnEnterMinSalary()"
});
formatter.result({
  "duration": 121818000,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.iClickOnEnterMaxSalary()"
});
formatter.result({
  "duration": 87031800,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.iClickOnSelectSalaryType()"
});
formatter.result({
  "duration": 142024900,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.iClickOnSelectJobType()"
});
formatter.result({
  "duration": 74837200,
  "status": "passed"
});
formatter.match({
  "location": "HomepageTest.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 1072227800,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1182, 382). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DARSHIL\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_322\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a48358e34ca1e640bd24a14b3a42971c, clickElement {id\u003d94533fa7-18c9-445a-abf3-6f12abc83f65}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58310}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58310/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (a48358e34ca1e640bd24a14b3a42971c)] -\u003e id: hp-search-btn]\nSession ID: a48358e34ca1e640bd24a14b3a42971c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat uk.co.library.pages.HomePage.clickOnFindJobButton(HomePage.java:73)\r\n\tat uk.co.library.steps.HomepageTest.iClickOnFindJobButton(HomepageTest.java:53)\r\n\tat ✽.And I click on findjob button(homepage.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomepageTest.iClickOnManageCookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageTest.iHandalingTheIframe()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 927316400,
  "status": "passed"
});
});