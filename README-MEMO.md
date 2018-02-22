## GMobile CLI integration
- web [GMobile init web](gluemobile-cli-design.md)
- ~~mobile [gluemobile-template](custom-plugins-cordova-build-contain.md)~~`android studio에서 jar를 못찾는 오류가 있음(아래로대체)`
- mobile [cordova8_updated_plugins_android_app](cordova8_updated_plugins_android_app.md)`수정사항은 ## 7. phone test 참고`
- cordova [cordova-android-ios](cordova-ios-android-combine.md)  
integration

### 1. installation
```sh
$ npm install -g cordova https://github.com/jimmybae/gmobile-cli.git
$ cordova -v
8.0.0
$ gmobile -V
0.0.1
```

### 2. cordova project create & platforms add
```sh
$ cd /Users/jimmyict/bgs/data/cordova
$ cordova create gmobile-project1 com.jimmyict.gmobile.project1 GMobileProject1
Creating a new cordova project.
$ cd gmobile-project1
$ cordova platforms add ios
$ cordova platforms add android
```

### 3. gmobile init
- gmobile init web template는 플러그인 샘플을 넣으면 좋겠는데, 문제는 기본 플러그인(device, dialog) 샘플들이 있는데 어떻게 해줘야 하나?
- custom 플러그인과 같이 고르게 해줘? 그런데 샘플을 실행하려면 플러그인이 다 있긴 있어야해. 없으면 샘플에서 에러가 날거거든.
- 그렇다고 기본 플러그인을 고를 수 있게 해줬다고 해봐 그럼 템플릿으로 가지고 있어야하는데 플러그인이 업데이트 되면 그때는 어떻게 할거야? 또 업데이트해서 배포해야 하나?
- 그럼
- 웹 템플릿을 고르고 플러그인을 고르면 선택된 플러그인의 샘플만 나오도록 하는거지.
- 그렇다고 해도 업데이트, 배포는 피할 수 없네
- 그럼 적어도 기본플러그인을 선택하면 cordova plugins add 명령으로 다운을 받는다? (오래걸리지 않을까?, 방법은 있을거 같은데)

```sh
$ gmobile init
? Select a web template to apply. (Use arrow keys)
❯ Apache Cordova (Current)
  Plugins sample made with jQuery Mobile
  Plugins sample made with Bootstrap

? Choose the costom plugins to apply. (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ cordova-plugin-device
 ◉ cordova-plugin-dialogs
 ◯ ......
 ◯ ......
 ◉ com.jimmyict.mobile.gcm
 ◉ com.jimmyict.mobile.nfc
 ◉ com.jimmyict.mobile.location
 ◉ com.jimmyict.mobile.scan
 ◉ com.jimmyict.mobile.stt

[info] Project <GMobileProject1> initialized successfuly.
```

### 4. gmobile fixed
```sh
$ gmobile init
# web template는 추후 작업하는 ES6 + Backbone.js 로 대체
# 우선 선택없이 package.json과 하나의 dummy file을 www폴더에 넣는것으로 한다.
# 기존 폴더가 지워진다는 경고가 나타나고 '예'선택 시에 적용
? Select a web template to apply. (Use arrow keys)
❯ Apache Cordova (Current)
  Plugins sample made with jQuery Mobile
  Plugins sample made with Bootstrap

# 모바일은 platform에 android가 포함되어 있는지 확인하고
# 있다면 아래 선택이 나타나고 ios만 있으면 어떻게 처리하는가?
# 선택 적용하면 plugins에 복사한다.
? Choose the costom plugins to apply. (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ gcm (android for only)
 ◯ nfc (android for only)
 ◯ scan (android for only)
 ◯ stt (android for only)

[info] Project <GMobileProject1> initialized successfuly.
```

### 5. develop
#### 1. github repository create
https://github.com/jimmybae/gmobile-cli

#### 2. local pull `~/bgs/data/github-project/gmobile-cli`
```sh
$ git clone git@github.com:jimmybae/gmobile-cli.git
$ cd gmobile-cli
```

#### 3. npm init
```sh
$ npm init
This utility will walk you through creating a package.json file.
......
......
```

#### 4. lib install
```sh
$ npm install --save commander
+ commander@2.14.1
added 1 package in 2.133s
```

### 6. test & debug `2018.02.21`
#### 0. prerequisites
- 임시 web resource copy  
`~/bgs/data/cordova/cordova8-test-app/www` copyto `~/bgs/data/github-project/gmobile-cli/templates/www`
- cordova & gmobile-cli install
- cordova version  
8.0.0
- Create your first Cordova app  
[Create apps](http://cordova.apache.org/docs/en/latest/guide/cli/index.html)

#### 1. cordova app create & platform add `platform add를 먼저 하면 custom이 안들어가네`
```sh
$ cd ~/bgs/data/cordova
$ cordova create gmobile-cli-test-app1 com.gmobile.cli.test.app1 GMobileCLITest1
Creating a new cordova project.

$ cd gmobile-cli-test-app1
$ cordova platform add android
Using cordova-fetch for cordova-android@~7.0.0
Adding android project...
......
......
Saving android@~7.0.0 into config.xml file ...
```

#### 1. issue `platform add를 먼저 하면 custom이 안들어가`
cordova plugin add ***를 하면 platform이 있는지 보고  
있으면 뭔가 설정해 주는데  
현재 gmobile init -mobile에서는 copy만 한단 말이지  
어떻게 찾아야 하나?  
```sh
$ cordova plugin save #X
$ cordova plugin add com.poscoict.mobile.gcm --searchpath /Users/poscoict/bgs/data/cordova/gmobile-cli-test-app2/plugins
```
```sh
$ rm -rf gmobile-cli-test-app2
$ cordova create gmobile-cli-test-app2 com.gmobile.cli.test.app2 GMobileCLITest2
$ cd gmobile-cli-test-app2
$ cordova platform add android
$ cordova plugins add cordova-plugin-device
$ cordova plugins add cordova-plugin-dialogs
$ gmobile init
$ cordova plugin add com.poscoict.mobile.gcm --searchpath node_modules
$ cordova plugin add com.poscoict.mobile.nfc --searchpath node_modules
$ cordova plugin add com.poscoict.mobile.scan --searchpath node_modules
$ cordova plugin add com.poscoict.mobile.stt --searchpath node_modules
$ cordova prepare
```
> 그나저나 작업하다보니 생각드는게 커스텀 플러그인들을 내부 git서버가 완성되면 그곳에 올려놓고
그냥 plugin add [git url] 로 설치하면 되지 않을까 하네


#### 2. 필수 plugins add (임시 web resource에서 사용하는 plugins)
```sh
$ cordova plugins add cordova-plugin-device
Installing "cordova-plugin-device" for android
Android Studio project detected
Adding cordova-plugin-device to package.json
Saved plugin info for "cordova-plugin-device" to config.xml

$ cordova plugins add cordova-plugin-dialogs
Installing "cordova-plugin-dialogs" for android
Android Studio project detected
Adding cordova-plugin-dialogs to package.json
Saved plugin info for "cordova-plugin-dialogs" to config.xml
```
#### 3. gmobile init 실행
```sh
$ gmobile init
? Directory www is not empty. Replace the contents? Yes
[info] Web resource initialization succeeded.
? Choose the costom plugins to apply. GCM (android for only), NFC (android for o
nly), SCAN (android for only), STT (android for only)
Installing "com.poscoict.mobile.gcm" for android
Android Studio project detected
Subproject Path: CordovaLib
Subproject Path: app

            GCM Plugin
        
Adding com.poscoict.mobile.gcm to package.json
Saved plugin info for "com.poscoict.mobile.gcm" to config.xml

[info] com.poscoict.mobile.gcm plugins addtion succeeded.
......
......
[info] com.poscoict.mobile.stt plugins addtion succeeded.

$ cordova plugins ls
com.poscoict.mobile.gcm 0.0.1 "gcm"
com.poscoict.mobile.nfc 1.0.2 "nfc"
com.poscoict.mobile.scan 0.0.1 "scan"
com.poscoict.mobile.stt 0.0.1 "stt"
cordova-plugin-device 2.0.1 "Device"
cordova-plugin-dialogs 2.0.1 "Notification"
cordova-plugin-whitelist 1.3.3 "Whitelist"
```
#### 4. cordova prepare or cordova build
```sh
$ cordova build
Android Studio project detected
......
......
BUILD SUCCESSFUL in 35s
47 actionable tasks: 47 executed
Built the following apk(s):
        /Users/poscoict/bgs/data/cordova/gmobile-cli-test-app1/platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

#### 5. import android studio  
Android Studio > Import project  
/Users/poscoict/bgs/data/cordova/gmobile-cli-test-app1/platforms/android

#### 5. issue
android studio에서 jar를 못찾는 오류가 있음  
[cordova8_updated_plugins_android_app](cordova8_updated_plugins_android_app.md) `## 7. phone test 참고`
`~/bgs/data/cordova/cordova8-test-app/plugins` copyto `~/bgs/data/github-project/gmobile-cli/templates/plugins`

```sh
$ cd ~/bgs/data/cordova/gmobile-cli-test-app1/plugins
$ rm -rf com*
$ cd ..
$ cordova platform rm android
$ gmobile init -m
$ cordova platforms add android
$ cordova build
```

## 7. git change
[### 1. git remote change](git-remote-change.md)
```sh
$ git config --global --list
......
remote.origin.url=git@github.com:jimmybae/gmobile-cli.git
git config --local remote.origin.url "ssh://poscoict@192.168.243.142:22/Users/poscoict/bgs/gmobile-cli.git"
......
```
git clone ssh://poscoict@192.168.243.142:22/Users/poscoict/bgs/gmobile-cli.git