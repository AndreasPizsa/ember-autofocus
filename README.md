##ember-autofocus 0.0.1

Automatically focus on an input field upon page load in Ember
```
// myView.handlebars
   :
{{ input autofocus="true" }}
   :
{{ autofocus }}
{# end of file #}
``` 

## Motivation
Setting the keyboard focus on a specific `input` element is a quite standard UI behaviour but rather tedious to accomplish in Ember.

Gladly, there’s [this very useful recipe on the Ember web site ](http://emberjs.com/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted/
) on how you’re supposed to do that; basically, you set the focus after the `didInsertElement` Ember event fires - done! [This](http://stackoverflow.com/questions/9468061/how-to-focus-after-initialization-with-emberjs), [this](http://stackoverflow.com/questions/14763318/set-focus-in-an-ember-application) and [this](http://stackoverflow.com/questions/12557584/how-to-use-autofocus-with-ember-js-templates) Stackoverflow answer propose similar techniques.


Unfortunately, the proposed solutions require subclassing into your own `View`s, which [I do not like so much](http://en.wikipedia.org/wiki/Coupling_(computer_programming)) for various reasons.

Thus, [Change](http://31.media.tumblr.com/tumblr_lnssyhB9FW1qkmpj8o1_500.gif)!


## Solution
`ember-autofocus` bundles Ember's proposed technique into a neat package and adds a few improvements along the way:

+ **Just add water**. No coding. Load it, boom, hooray!
+ **No more subclassing**. Because, [subclassing](http://en.wikipedia.org/wiki/Coupling_(computer_programming)).
+ **Works on any element**. If you pass it a CSS selector.
+ **No configuration**. If you don't pass a CSS selector it takes the first text input it finds.
+ **HTML5 compatible**. Uses the native `autofocus` attribute if available.
+ **HTML<5 fallback**. No HTML5, no problem.
+ **Tiny.** 0.000000670552254 Gigabytes.
+ **It’s really elegant.** [Elegance is a glowing inner peace](https://www.goodreads.com/quotes/436052-elegance-is-a-glowing-inner-peace-grace-is-an-ability).

## How it works

+ Installs an `autofocus` attribute for `InputField` for HTML5 compatibility 
+ Adds an `{{autofocus}}` `View` that uses jQuery to set the focus
+ learn from the source, it’s really minimal


## Installing

### Bower
```
bower install -S ember-autofocus
```

In your `index.html`:

```
<script type="text/javascript" src="bower_components/ember-autofocus/dist/ember-autofocus.min.js)"></script>
```

### Copy & Paste
Well, honestly you can as well just copy and paste it into your `App.js` file but that won’t give you all the free updates in the future.

## Usage

### Most Sophisticated (recommended)
Use a CSS selector to autofocus on a specific element.

```
// myView.handlebars
   :
{{ autofocus on '#my-special-element .my-unique-class' }}
{# end of file #}
``` 

### Laziest
Autofocus on the first `<input>` element.

```
// myView.handlebars
   :
{{ input }}
   :
{{ autofocus }}
{# end of file #}
``` 

### Most compatible (recommended)
+ Sets the focus on the first `<input|button|textarea>` element with an `autofocus` attribute.
+ Uses the browser’s native HTML5 functionality if available.
+ Works in pre-HTML5 browsers.

```
// myView.handlebars
   :
{{ input autofocus="autofocus"}}
   :
{{ autofocus }}
{# end of file #}
``` 

>
> Chrome has a bug that makes autofocus really ugly. See "Caveats" further down.
>

## Caveats
- **Will focus even on hidden/invisible items.** Pull Requests welcome.
- **Chrome 31.0.1650.57 Mac "jumping".** Nothing functional, but æsthetically very discomforting: ~~some HTML5 browsers~~ Chrome 31.0.1650.57 on the Mac will scroll to the _natively_ `autofocus`’ed element and then jump right back to the top of the page, which is pretty ugly and irritating. Please feel free to [file a Chromium Bug Report](http://www.chromium.org/for-testers/bug-reporting-guidelines). **I work around this in my own apps by leaving out the `autofocus` attribute and then using *"Most Sophisticated"* method described above (a specific CSS selector).**

## Building
I extracted this from my project, created a few files and ran it through Dean Edward’s [Packer](http://dean.edwards.name/packer/). I'm serious.


# Thanks

I have found some very valuable advice during my research which I have built into `ember-autofocus`:

+ The Ember team for their article "[Focusing a TextField after it’s been inserted](http://emberjs.com/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted/)"
+ [Matthew Beale](https://github.com/mixonic) for his excellent article on "[Lifecycle hooks in EmberJS Views](http://madhatted.com/2013/6/8/lifecycle-hooks-in-ember-js-views)".
+ [hyder](http://discuss.emberjs.com/users/hyder/activity) for linking to Matthew's article.
+ [Mark Pilgrim](https://github.com/diveintomark) for the [`autofocus` feature detection snippet](http://diveintohtml5.info/detect.html).


--------------------------------
Made with ❤ in Vienna, Austria.