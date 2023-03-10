---
author: "Hugo Authors"
title: "Emoji Support"
date: 2019-12-16T12:00:06+09:00
description: "Guide to emoji usage in Hugo"
draft: false
hideToc: false
enableToc: true
enableTocContent: false
author: Kim
authorEmoji: π»
tags: ["hugo"]
categroies: ["hugo"]
---

Emoji can be enabled in a Hugo project in a number of ways. 
<!--more-->
The [`emojify`](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes). 

To enable emoji globally, set `enableEmoji` to `true` in your siteβs [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files; e.g.


<p><span class="nowrap"><span class="emojify">π</span> <code>:see_no_evil:</code></span>  <span class="nowrap"><span class="emojify">π</span> <code>:hear_no_evil:</code></span>  <span class="nowrap"><span class="emojify">π</span> <code>:speak_no_evil:</code></span></p>
<br>

The [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) is a useful reference for emoji shorthand codes.

***

**N.B.** The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack; e.g.