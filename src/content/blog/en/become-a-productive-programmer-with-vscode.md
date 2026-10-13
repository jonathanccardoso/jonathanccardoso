---
title: "Become a Productive Programmer with VSCode"
description: "Themes, extensions, shortcuts, fonts, Emmet and snippets to be more productive in VSCode."
pubDate: 2020-05-18
lang: en
category: Productivity
tags: [vscode, extensionsvscode, react, javascript]
canonicalUrl: https://dev.to/jonathanccardoso/become-a-productive-programmer-with-vscode-3hid
draft: false
---

### Do you know all the tools?
> If you spent hours and hours programming in your IDE and felt that you were performing more mechanical than logical actions or were not having as much productivity? This article is for you!

## Themes

A fact that must be taken into account. In vscode, there are several themes that can help you not to overload your vision (the case of a dark theme) and improve the reading of source codes.

### **Researching themes**

On the sidebar tab, of a block-like icon (Ctrl/⌘ + Shift + x), of vscode, is the extension part, where you can write in the search bar **“category: themes”**, being filtered by downloads and stars. One of the community favorites that I can measure, is [Dracula](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-Dracula), [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme) **e [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark)**.

Once selected and installed, the platform will restart and load the selected theme.

## Extensions

And it doesn’t matter what language (markup or programming) you use in vscode, there is some extension to that language, *snippets*, *emmets* and *linting*, which I will explain shortly.

![vscode extensions screen on vscode](https://cdn-images-1.medium.com/max/2800/0*28m5oxh_6BWSUke_.png)*vscode extensions screen on vscode*

And don’t stop there, there are also for formatters, stylists, test managers, packages, etc. Here are some extensions that I use a lot:

* *Python*

* *Bracket Pair Colorizer*

* *Material Icon Theme*

* *SASS*

* *Prettier Code formatter*

* *ESLint*

* *Color Highlight*

* *Vscode Styled Components*

## Shortcuts

Shortcuts are good practice for productivity, the more the better.

* Search by settings: **Ctrl/⌘ + Shift + p**

* Search or files: **Ctrl/⌘ + Shift + p**, (erasing the arrow)

* Search line in the file: **Ctrl/⌘ + Shift + p**, (erasing the arrow and placing **:**)

* Open terminal: **Ctrl/⌘ + Shift + `**

* Up or down line: **Alt + PageUp /PageDown**

* Replicate text: **Ctrl/⌘ + h**

* Select identical texts: **Ctrl/⌘ + d**

* Search the file for methods: **Ctrl/⌘ + Shift + p**, (erasing the arrow and placing **@**)

If you used another platform and are migrating to this tool, type in the search bar “**keymaps + ide**” and install an extension that will provide all those shortcuts. The vscode documentation provides tips and all [keyboard-shortcuts](https://code.visualstudio.com/docs/getstarted/tips-and-tricks) *on the platform*.

## Fonts

For a better visualization and understanding of codes, I recommend using fonts, where after installed on your machine, just use the shortcut **(Ctrl/⌘ + Shift + p)** to go to the user’s preferences, then click on *Text Editor* and on *Font* type your respective source and enable ligatures. The following is a source I advise:

* **[Firacode](https://github.com/tonsky/FiraCodehttps://github.com/tonsky/FiraCode)** (*Font* e *Font Ligatures*)

## Emmet

This tool came to speed up the time with repetitive content like *divs* and *components*. Enable this option in both **html** and **jsx**, copying the code snippet below in your *settings.json*.

    "emmet.triggerExpansionOnTab": true,

    "emmet.syntaxProfiles": {"javascript":"jsx"},

    "emmet.includeLanguages": {"javascript":"javascriptreact"},

### Example

    ul>li.class#id+li.class

    // result

    <ul>

      <li class="class" id="id"></li>

      <li class="class"></li>

    </ul>

## Snippets

Snippets are blocks of code that can be reused in a simple way as an acronym. With the help of extensions we can use snippets of each language such as [angular](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2), [javascript](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets), *among others*.

### Examples, in JS

### rcc

    // result

    import React, { Component } from 'react'

    export default class FileName extends *Component* {
      render() {
        return <div>$2</div>
      }
    }

### clg

    // result 

    console.log(object)

### rcredux

    // result

    import React, { Component } from 'react'
    import { connect } from 'react-redux'

    export class FileName extends Component {
      render() {
        return <div>$4</div>
      }
    }

    const mapStateToProps = state => ({})

    const mapDispatchToProps = {}

    export default connect(mapStateToProps, mapDispatchToProps)(FileName)


For this and other information follow the [visual studio marketplace](https://marketplace.visualstudio.com/vscode).

I hope you enjoyed the content! If you have suggestions and/or criticisms comment below. Bye! 🖐🏽
