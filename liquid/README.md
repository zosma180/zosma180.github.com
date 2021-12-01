<p align="center"><img src="logo.png" alt="liquid logo" height="120"></p>

# liquid

---

## Description

**liquid** is an ultra light framework to create HTML5 presentations.  
The highlights are:

- Create your slides through the simple HTML tags declarations
- Navigate your slides in the browser with the keyboard arrows
- Printing supported by default (A4 page or PDF)
- Customize the slide styles adding your CSS rules

[See the DEMO PAGE](https://cdn.rawgit.com/zosma180/liquid/master/index.html)

---

## Getting started

To start your first liquid presentation, you have to:
- download the zip of this repository with the sample content
- open the `index.html` file and implement your content through the &lt;article&gt; tags
  - each slide must be declared with an &lt;article&gt; tag
  - use the &lt;h1&gt; tag to define the slide's title
  - use the &lt;section&gt; tag to define the slide's content
  - in the &lt;section&gt; tag you can use the classic HTML tags like &lt;p&gt;, &lt;img&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;i&gt;, &lt;b&gt;.
- insert your images in the `assets` folder
- insert your style customization in the `theme.css` file
- see the result opening the `index.html` in your browser
- to help the slide definition, you can use a set of CSS classes built-in the liquid style (see `Helper classes`)
- if you want to print the slides, it is recommended to use high resolution images (e.g. height >= 2000px)

---

## Helper classes

The following list of CSS classes are built-in the liquid style and they are ready to use.

e.g.  
`<h1 class="white huge thin">My Presentation's Title</h1>`

- `white` : change the text color to white
- `small` : change the text size to small
- `medium` : change the text size to medium (the &lt;section&gt; tags are default to medium)
- `big` : change the text size to big (the &lt;h1&gt; tags are default to big)
- `huge` : change the text size to huge
- `thin` : change the text weight to thin
- `center` : change the text align to center
- `right` : change the text align to right
- `by-side` : create a side-by-side content layout (e.g. an image with a text beside it) (see index.html for an example)

---

## Browser support
Latest versions of Chrome, Firefox, Opera, Safari and Edge.