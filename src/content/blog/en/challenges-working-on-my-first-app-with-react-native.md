---
title: "Challenges working on my first app with React Native"
description: "Setup, bug resolutions, memory and performance issues, versioning and WebView, from my first React Native app."
pubDate: 2023-07-25
lang: en
category: Mobile
tags: [reactnative, android, ios, javascript]
canonicalUrl: https://dev.to/jonathanccardoso/challenges-working-on-my-first-app-with-react-native-j77
draft: false
---

## Initial challenges

Setting up the environment variables, such as Java, Kotlin, Android e Android SDK, along with the Android Studio program and configuring some emulators, can be an initially intense challenge. Going through all this initial setup may vary slightly on each operation system. In my case, I used Linux, and it took a considerable amount of time.

![Photo by [Simon Abrams](https://unsplash.com/@flysi3000?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/8860/0*QN0Cpnp_oS3eMH-G)

## Bug resolutions

Some technical challenges can be identified throughout the project, such as:

**Code:** Removal of unused code and improper reuse of functions and hooks;

**Complexity:** Separation and restructuring of functions and responsibilities within the code;

**Styling:** Improvement of layout responsiveness, such as font sizes and creation of new layouts. One suggestion is to use React Native’s [dimensions](https://reactnative.dev/docs/dimensions), which will greatly facilitate the process;

**Libraries:** Update libraries, which is a common problem in Javascript projects, especially in older projects, where several incompatibilities may arise.

**Exception handling:** Every app must have exception handling to avoid corruption in the app’s usage. One option is to use the **[react-native-exception-handler](https://www.npmjs.com/package/react-native-exception-handler)** library, which assists in handling fatal or no-fatal exceptions, allowing for a higher level of customization in the cataloging of errors that can be displayed or not.

**[TypeScript:](https://www.typescriptlang.org/)** A project may present some challenges, but a new scenario full of possibilities appears on your table, such as optimizations, improvements, best practices, and new libraries, all to deliver the best app to the end user.

In this article, I shared my main challenges, which I believe are common to all beginner developers in the mobile area. With that, I hope to have contributed some useful knowledge. If you have experienced similar situations or enjoyed the content I shared, please share and like the article!

Adding this tool is crucial to assist in ensuring code quality and reducing common errors in data handling, increasing the potential for error detection during development.

## Facing Performance Issues: Memory

This topic has truly been one of the most challenging. Understanding the reason why the app is closing unexpectedly, raises several questions:
>  “Could it be a code error, with some variable being null or undefined and causing a mapping (map) operation?”
>  “Is the app stuck because of rendering too much data on the same screen?
>  “Could it possibly be a memory leak?”

Issues related to this often involve memory leaks. It is crucial to conduct a thorough study of memory management in React Native at this stage. I recommend reading this article: *“[Hunting JS memory leaks in React Native apps](https://blog.swmansion.com/hunting-js-memory-leaks-in-react-native-apps-bd73807d0fde)”.* Additionally, you can analyze your app using the [Android Studio Profiler](https://developer.android.com/studio/profile/android-profiler?hl=pt-br) tool, which will help identify memory leak points during real-time app navigation.

However, the initial solution typically involves a meticulous code search. Refactoring components with a higher data flow and complexity to use best performance practices, such as:

**Hooks:** useMemo, useCallback e useEffect;

**API:** lazy, memo e flatList, ***[contextAPI](https://legacy.reactjs.org/docs/context.html)***;
>  The usage of these tools must be done responsibly, considering the objectives of each one.

Other tips to solve potential errors include removing unnecessary component renderings with conditional limitations, like data pagination. Moreover, it is essential to avoid passing improper properties to these components.

To render various items, the use of FlatList and pagination strategies in data searches is vital to prevent data retrieval from causing freezes. Remember that, in mobile devices, the data load limit should be lighter than what is typically used in web environments.

## Bonus

### Versioning

One of the common problems I faced was dealing with update checks, both on Android and IOS. This becomes a challenge when users don’t update the app frequently. One strategy is overcome this problem is to force the user to update the app through their respective app stores. For this purpose, you can use the [react-native-version-check](https://www.npmjs.com/package/react-native-version-check) library, which will check the version of the installed app and compare it with the version available in the stores. This way, you can display an informative pop-up if an update is available.

### Webview

React Native has a useful library to incorporate a [WebView](https://www.npmjs.com/package/react-native-webview) strategy, allowing you to display a web page within the app itself. However, this approach has its limitations, especially when dealing with web pages that have intense data flow.

To overcome this issue, I suggest an excellent alternative: the [react-native-inappbrowser-reborn](https://www.npmjs.com/package/react-native-inappbrowser-reborn) library. With it, you will experience smoother performance and have the ability to customize the display of the web page. Moreover, this library allows you to open the page in a default browser or share the link with any other app, providing greater flexibility and interaction with the web in your app, without the limitations of the standard WebView.

## Final thoughts

A project may present some challenges, but a new scenario full of possibilities appears on your table, such as optimizations, improvements, best practices, and new libraries, all to deliver the best app to the end user.

In this article, I shared my main challenges, which I believe are common to all beginner developers in the mobile area. With that, I hope to have contributed some useful knowledge. If you have experienced similar situations or enjoyed the content I shared, please **share** and **like** the article!
