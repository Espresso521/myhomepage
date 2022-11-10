---
title: What is a Promise
date: "2022-11-10"
description: "A promise is a special JavaScript object that links the “producing code” and the “consuming code” together."
---

The constructor syntax for a promise object is:

    let promise = new Promise(function(resolve, reject) {
      // executor (the producing code, "singer")
    });

The function passed to **_new Promise_** is called the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

> resolve(value) — if the job is finished successfully, with result value.  
> reject(error) — if an error has occurred, error is the error object.

##### Consumers: then, catch

**_then_**  
**The most important**, fundamental one is .then.

The syntax is:

    promise.then(
      function(result) { /* handle a successful result */ },
      function(error) { /* handle an error */ }
    );

**_Cleanup: finally_**

    new Promise((resolve, reject) => {
      setTimeout(() => ***resolve("value")***, 2000);
    })
      .finally(() => alert("Promise ready")) // triggers first
      .then(result => alert(result)); // <-- .then shows "value"

To summarize:

> A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.

> If a finally handler returns something, it’s ignored.

> When finally throws an error, then the execution goes to the nearest error handler.

##### Promises chaining

    new Promise(function(resolve, reject) {

      setTimeout(() => resolve(1), 1000); // (*)

    }).then(function(result) { // (**)

      alert(result); // 1
      return result * 2;

    }).then(function(result) { // (***)

      alert(result); // 2
      return result * 2;

    }).then(function(result) {

      alert(result); // 4
      return result * 2;

    });

Here the flow is:

> 1.The initial promise resolves in 1 second (\*),  
> 2.Then the .then handler is called (\*\*), which in turn creates a new promise (resolved with 2 value).  
> 3.The next then (\*\*\*) gets the result of the previous one, processes it (doubles) and passes it to the next handler.  
> 4.…and so on.

#### Bigger example: fetch

    function loadJson(url) {
      return fetch(url)
        .then(response => response.json());
    }

    function loadGithubUser(name) {
      return loadJson(`https://api.github.com/users/${name}`);
    }

    function showAvatar(githubUser) {
      return new Promise(function(resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      });
    }

    // Use them:
    loadJson('/article/promise-chaining/user.json')
      .then(user => loadGithubUser(user.name))
      .then(showAvatar)
      .then(githubUser => alert(`Finished showing ${githubUser.name}`));
      // ...

> Today is my wife's birthday, and I promise, I love her

Refer to [Javascript.Info](https://javascript.info/promise-chaining) : )
