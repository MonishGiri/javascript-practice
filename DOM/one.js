// document.querySelector('li')
// document.querySelectorAll('li')
// NodeList(3) [li, li, li]
// 0
// : 
// li
// 1
// : 
// li
// 2
// : 
// li
// length
// : 
// 3
// [[Prototype]]
// : 
// NodeList
// const templilist = document.querySelectorAll('li')
// undefined
// templilist.forEach(() =>{)
// VM3359:1 Uncaught 
// SyntaxError: Unexpected token ')'
// templilist.forEach((item) =>{
//     console.log(item);
// })
// VM3433:2 
// VM3433:2 
// VM3433:2 
// undefined
// templilist
// NodeList(3) [li, li, li]
// templilist[0].style.backgroundColor = 'green'
// 'green'
// templilist[0].style.color = 'green'
// 'green'
// templilist[0].style.color = 'red'
// 'red'
// const myH1 = document.querySelectorAll('h1')
// undefined
// myH1
// NodeList [h1#title.heading]
// 0
// : 
// h1#title.heading
// length
// : 
// 1
// [[Prototype]]
// : 
// NodeList

// document.getElementsByClassName('listItem')
// HTMLCollection(4) [li.listItem, li.listItem, li.listItem, li.listItem]0: li.listItem1: li.listItem2: li.listItem3: li.listItemaccessKey: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: class, class: class, length: 1}autocapitalize: ""autofocus: falsebaseURI: "http://127.0.0.1:5501/DOM/one.html"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList ['listItem', value: 'listItem']className: "listItem"clientHeight: 18clientLeft: 0clientTop: 0clientWidth: 1463contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseeditContext: nullelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: nullhidden: falseid: ""inert: falseinnerHTML: "Four"innerText: "Four"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "li"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: nullnextSibling: textnodeName: "LI"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 18offsetLeft: 48offsetParent: body.bg-blackoffsetTop: 396offsetWidth: 1463onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<li class=\"listItem\">Four</li>"outerText: "Four"ownerDocument: documentparentElement: ulparentNode: ulpart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: li.listItempreviousSibling: textrole: nullscrollHeight: 18scrollLeft: 0scrollTop: 0scrollWidth: 1463shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "LI"textContent: "Four"title: ""translate: truetype: ""value: 0virtualKeyboardPolicy: ""writingSuggestions: "true"[[Prototype]]: HTMLLIElement(...)length: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
// const tempClassList = document.getElementsByClassName('listItem')
// undefined
// tempClassList.forEach( (li) =>{} )
// VM4469:1 Uncaught TypeError: tempClassList.forEach is not a function
//     at <anonymous>:1:15
// (anonymous) @ VM4469:1Understand this error
// tempClassList.forEach( (li) =>{
//     console.log(li)
// } )
// VM4512:1 Uncaught TypeError: tempClassList.forEach is not a function
//     at <anonymous>:1:15

// convert html collection to array

// const myTempList = document.getElementsByClassName('listItem')
// undefined
// myTempList
// HTMLCollection(4) [li.listItem, li.listItem, li.listItem, li.listItem]
// const convertedArray = Array.from(myTempList);
// undefined
// convertedArray
// (4) [li.listItem, li.listItem, li.listItem, li.listItem]
// convertedArray.forEach( (list) => {
//     list.style.color = 'orange'
// })

// multiple things in foreach
// const headline = document.querySelectorAll('.mw-heading')
// headline.forEach( (h) =>{
//     h.style.color = 'green'
// })
// undefined
// headline.forEach( (h) =>{
//     h.style.color = 'black';
//     h.style.backgroundColor = 'green';
//     h.style.padding = '10px'
// })
// undefined
// headline.forEach( (h) =>{
//     h.style.color = 'black';
//     h.style.backgroundColor = 'green';
//     h.style.padding = '10px';
//     h.innerText = "Monish"
// })