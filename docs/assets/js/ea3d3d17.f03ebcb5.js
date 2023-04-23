"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[13025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),m=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=m(n),y=o,d=p["".concat(l,".").concat(y)]||p[y]||c[y]||r;return n?s.createElement(d,i(i({ref:t},u),{},{components:n})):s.createElement(d,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var m=2;m<r;m++)i[m]=n[m];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>m});var s=n(87462),o=(n(67294),n(3905));const r={id:"system_extensions",title:"System Extensions",sidebar_label:"System Extensions",slug:"system_extensions.html"},i=void 0,a={unversionedId:"extensions/system_extensions",id:"version-5.4/extensions/system_extensions",title:"System Extensions",description:"System Extensions",source:"@site/versioned_docs/version-5.4/extensions/system.md",sourceDirName:"extensions",slug:"/extensions/system_extensions.html",permalink:"/docs/5.4/extensions/system_extensions.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/extensions/system.md",tags:[],version:"5.4",frontMatter:{id:"system_extensions",title:"System Extensions",sidebar_label:"System Extensions",slug:"system_extensions.html"},sidebar:"extensions",previous:{title:"Ktor",permalink:"/docs/5.4/extensions/ktor.html"},next:{title:"Test Containers",permalink:"/docs/5.4/extensions/test_containers.html"}},l={},m=[{value:"System Extensions",id:"system-extensions",level:2},{value:"System Environment",id:"system-environment",level:3},{value:"System Property Extension",id:"system-property-extension",level:3},{value:"System Security Manager",id:"system-security-manager",level:3},{value:"System Exit Extensions",id:"system-exit-extensions",level:3},{value:"No-stdout / no-stderr listeners",id:"no-stdout--no-stderr-listeners",level:3},{value:"Locale/Timezone listeners",id:"localetimezone-listeners",level:3}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"system-extensions"},"System Extensions"),(0,o.kt)("p",null,"Sometimes your code might use some functionalities straight from the JVM, which are very hard to simulate. With Kotest System Extensions, these difficulties are made easy to mock and simulate, and your code can be tested correctly. After changing the system and using the extensions, the previous state will be restored."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This code is sensitive to concurrency. Due to the JVM specification there can only be one instance of these extensions running (For example: Only one Environment map must exist). If you try to run more than one instance at a time, the result is unknown.")),(0,o.kt)("h3",{id:"system-environment"},"System Environment"),(0,o.kt)("p",null,"With ",(0,o.kt)("em",{parentName:"p"},"System Environment Extension")," you can simulate how the System Environment is behaving. That is, what you're obtaining from ",(0,o.kt)("inlineCode",{parentName:"p"},"System.getenv()"),"."),(0,o.kt)("p",null,"Kotest provides some extension functions that provides a System Environment in a specific scope:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'withEnvironment("FooKey", "BarValue") {\n    System.getenv("FooKey") shouldBe "BarValue" // System environment overridden!\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"withEnvironment")," with JDK17 you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"--add-opens=java.base/java.util=ALL-UNNAMED")," to the arguments for the JVM that runs the tests."),(0,o.kt)("p",{parentName:"admonition"},"If you run tests with gradle, you can add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle.kts"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.withType<Test>().configureEach {\n  jvmArgs("--add-opens=java.base/java.util=ALL-UNNAMED")\n}\n'))),(0,o.kt)("p",null,"You can also use multiple values in this extension, through a map or list of pairs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'withEnvironment(mapOf("FooKey" to "BarValue", "BarKey" to "FooValue")) {\n  // Use FooKey and BarKey\n}\n\n')),(0,o.kt)("p",null,"These functions will add the keys and values if they're not currently present in the environment, and will override them if they are. Any keys untouched by the function will remain in the environment, and won't be messed with."),(0,o.kt)("p",null,"Instead of extensions functions, you can also use the provided Listeners to apply these functionalities in a bigger scope. There's an alternative for the Spec/Per test level, and an alternative for the Project Level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass MyTest : FreeSpec() {\n\n      override fun listeners() = listOf(SystemEnvironmentTestListener("foo", "bar"))\n\n    init {\n      "MyTest" {\n        System.getenv("foo") shouldBe "bar"\n      }\n    }\n\n}\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass ProjectConfig : AbstractProjectConfig() {\n\n    override fun listeners(): List<TestListener> = listOf(SystemEnvironmentProjectListener("foo", "bar"))\n\n}\n\n')),(0,o.kt)("h3",{id:"system-property-extension"},"System Property Extension"),(0,o.kt)("p",null,"In the same fashion as the Environment Extensions, you can override the System Properties (",(0,o.kt)("inlineCode",{parentName:"p"},"System.getProperties()"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'withSystemProperty("foo", "bar") {\n  System.getProperty("foo") shouldBe "bar"\n}\n')),(0,o.kt)("p",null,"And with similar Listeners:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'    class MyTest : FreeSpec() {\n\n          override fun listeners() = listOf(SystemPropertyListener("foo", "bar"))\n\n        init {\n          "MyTest" {\n            System.getProperty("foo") shouldBe "bar"\n          }\n        }\n\n    }\n')),(0,o.kt)("h3",{id:"system-security-manager"},"System Security Manager"),(0,o.kt)("p",null,"Similarly, with System Security Manager you can override the System Security Manager (",(0,o.kt)("inlineCode",{parentName:"p"},"System.getSecurityManager()"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\n    withSecurityManager(myManager) {\n      // Usage of security manager\n    }\n\n")),(0,o.kt)("p",null,"And the Listeners:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"    class MyTest : FreeSpec() {\n\n              override fun listeners() = listOf(SecurityManagerListener(myManager))\n\n            init {\n              // Use my security manager\n            }\n\n        }\n")),(0,o.kt)("h3",{id:"system-exit-extensions"},"System Exit Extensions"),(0,o.kt)("p",null,"Sometimes you want to test that your code calls ",(0,o.kt)("inlineCode",{parentName:"p"},"System.exit"),". For that you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"System Exit Listeners"),". The Listener will throw an exception when the ",(0,o.kt)("inlineCode",{parentName:"p"},"System.exit")," is called, allowing you to catch it and verify:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass MyTest : FreeSpec() {\n\n  override fun listeners() = listOf(SpecSystemExitListener)\n\n  init {\n    "Catch exception" {\n      val thrown: SystemExitException = shouldThrow<SystemExitException> {\n        System.exit(22)\n      }\n\n      thrown.exitCode shouldBe 22\n    }\n  }\n}\n\n')),(0,o.kt)("h3",{id:"no-stdout--no-stderr-listeners"},"No-stdout / no-stderr listeners"),(0,o.kt)("p",null,"Maybe you want to guarantee that you didn't leave any debug messages around, or that you're always using a Logger in your logging."),(0,o.kt)("p",null,"For that, Kotest provides you with ",(0,o.kt)("inlineCode",{parentName:"p"},"NoSystemOutListener")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NoSystemErrListener"),". These listeners won't allow any messages to be printed straight to ",(0,o.kt)("inlineCode",{parentName:"p"},"System.out")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"System.err"),", respectively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"    // In Project or in Spec\n    override fun listeners() = listOf(NoSystemOutListener, NoSystemErrListener)\n")),(0,o.kt)("h3",{id:"localetimezone-listeners"},"Locale/Timezone listeners"),(0,o.kt)("p",null,"Some codes use and/or are sensitive to the default Locale and default Timezone. Instead of manipulating the system defaults no your own,\nlet Kotest do it for you!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'withDefaultLocale(Locale.FRANCE) {\n  println("My locale is now France! Tr\xe8s bien!")\n}\n\nwithDefaultTimezone(TimeZone.getTimeZone(ZoneId.of("America/Sao_Paulo"))) {\n  println("My timezone is now America/Sao_Paulo! Muito bem!")\n}\n\n')),(0,o.kt)("p",null,"And with the listeners"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'  // In Project or in Spec\n  override fun listeners() = listOf(\n    LocaleTestListener(Locale.FRANCE),\n    TimeZoneTestListener(TimeZone.getTimeZone(ZoneId.of("America/Sao_Paulo")))\n  )\n\n')))}c.isMDXComponent=!0}}]);