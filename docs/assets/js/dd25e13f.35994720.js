"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[28485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),k=s,m=u["".concat(d,".").concat(k)]||u[k]||p[k]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const a={id:"kafka",title:"Embedded Kafka Extension",sidebar_label:"Kafka",slug:"embedded-kafka.html"},o=void 0,i={unversionedId:"extensions/kafka",id:"version-5.4/extensions/kafka",title:"Embedded Kafka Extension",description:"Kotest offers an extension that spins up an embedded Kafka instance. This can help in situations",source:"@site/versioned_docs/version-5.4/extensions/kafka.md",sourceDirName:"extensions",slug:"/extensions/embedded-kafka.html",permalink:"/docs/5.4/extensions/embedded-kafka.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/extensions/kafka.md",tags:[],version:"5.4",frontMatter:{id:"kafka",title:"Embedded Kafka Extension",sidebar_label:"Kafka",slug:"embedded-kafka.html"},sidebar:"extensions",previous:{title:"Test Containers",permalink:"/docs/5.4/extensions/test_containers.html"},next:{title:"MockServer",permalink:"/docs/5.4/extensions/mockserver.html"}},d={},l=[{value:"Getting started:",id:"getting-started",level:3},{value:"Consumer / Producer",id:"consumer--producer",level:3},{value:"Custom Ports",id:"custom-ports",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kotest offers an extension that spins up an embedded Kafka instance. This can help in situations\nwhere using the kafka docker images are an issue."),(0,s.kt)("p",null,"To use this extension add the ",(0,s.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-extensions-embedded-kafka")," module to your test compile path."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-embedded-kafka"},(0,s.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-embedded-kafka.svg?label=latest%20release"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-embedded-kafka/"},(0,s.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-embedded-kafka.svg?label=latest%20snapshot"}))),(0,s.kt)("h3",{id:"getting-started"},"Getting started:"),(0,s.kt)("p",null,"Register the ",(0,s.kt)("inlineCode",{parentName:"p"},"embeddedKafkaListener")," listener in your test class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"class EmbeddedKafkaListenerTest : FunSpec({\n  listener(embeddedKafkaListener)\n})\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"class EmbeddedKafkaListenerTest : FunSpec() {\n  init {\n    listener(embeddedKafkaListener)\n  }\n}\n")),(0,s.kt)("p",null,"And the broker will be started once the spec is created and stopped once the spec completes."),(0,s.kt)("p",null,"Note: The underlying ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/embeddedkafka/embedded-kafka"},"embedded kafka library")," uses a global object for state. Do not start multiple kafka instances at the same time."),(0,s.kt)("h3",{id:"consumer--producer"},"Consumer / Producer"),(0,s.kt)("p",null,"To create a consumer and producer we can use convenience methods on the listener:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class EmbeddedKafkaListenerTest : FunSpec({\n\n   listener(embeddedKafkaListener)\n\n   test("send / receive") {\n\n     val producer = embeddedKafkaListener.stringStringProducer()\n     producer.send(ProducerRecord("foo", "a"))\n     producer.close()\n\n     val consumer = embeddedKafkaListener.stringStringConsumer("foo")\n     eventually(10.seconds) {\n       consumer.poll(1000).first().value() shouldBe "a"\n     }\n     consumer.close()\n   }\n\n})\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"stringStringProducer")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"stringStringConsumer")," methods return a producer / consumer that accept strings for the keys and values. Similar methods exist for byte pairs."),(0,s.kt)("p",null,"Alternatively, you can access the host/port the Kafka instance was deployed on and create the clients yourself:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class EmbeddedKafkaListenerTest : FunSpec({\n\n   listener(embeddedKafkaListener)\n   \n   val props = Properties().apply {\n      put(CommonClientConfigs.BOOTSTRAP_SERVERS_CONFIG, "${embeddedKafkaListener.host}:${embeddedKafkaListener.port}")\n   }\n   \n   val producer = KafkaProducer<String, String>(props)\n   \n}\n')),(0,s.kt)("h3",{id:"custom-ports"},"Custom Ports"),(0,s.kt)("p",null,"You can create a new instance of the listener specifying a port and then use that instance rather than\nthe default instance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class EmbeddedKafkaCustomPortTest : FunSpec({\n\n   val listener = EmbeddedKafkaListener(5678)\n   listener(listener)\n\n   test("send / receive") {\n\n      val producer = listener.stringStringProducer()\n      producer.send(ProducerRecord("foo", "a"))\n      producer.close()\n\n      val consumer = listener.stringStringConsumer("foo")\n      eventually(10.seconds) {\n         consumer.poll(1000).first().value() shouldBe "a"\n      }\n      consumer.close()\n   }\n})\n')),(0,s.kt)("p",null,"You can also do specify the zookeeper port using an alternative overload."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"val listener = EmbeddedKafkaListener(kafkaPort = 6005, zookeeperPort = 9005)\n")))}p.isMDXComponent=!0}}]);