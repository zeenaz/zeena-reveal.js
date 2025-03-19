# CourseWorkSpace Guide

This workspace contains two main parts:
1. Regular HTML Course Content
2. Interactive Presentations (using reveal.js)

## Directory Structure

```
CourseWorkSpace/
├── presentations/         # Reveal.js presentations
├── reveal.js.official/   # Reveal.js submodule with custom themes
├── slides/              # Regular HTML slides
├── md/                 # Markdown content
├── htmls/             # Regular HTML content
├── styles/           # CSS styles for regular content
├── scripts/         # JavaScript files
└── images/         # Shared images
```

## Part 1: Regular HTML Content

The regular HTML content uses a simple structure without external dependencies:

- `htmls/`: Contains standalone HTML files
- `styles/`: CSS files for styling
- `scripts/`: JavaScript functionality
- `images/`: Shared images across the site
- `slides/`: Regular HTML-based slides

To use this part:
1. No installation needed
2. Open any HTML file directly in a browser
3. All dependencies are included locally

## Part 2: Interactive Presentations (reveal.js)

The presentations use reveal.js for interactive slides with advanced features.

### First-Time Setup

1. Clone the repository with submodules:
   ```bash
   git clone --recursive [repository-url]
   ```

   If already cloned without submodules:
   ```bash
   git submodule update --init --recursive
   ```

2. Install Node.js dependencies (only needed if you want to modify reveal.js itself):
   ```bash
   cd CourseWorkSpace/reveal.js.official
   npm install
   ```

### Creating Presentations

1. Store all presentations in the `presentations/` directory
2. Use this basic template:

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Your Presentation Title</title>
    <link rel="stylesheet" href="../reveal.js.official/dist/reveal.css">
    <link rel="stylesheet" href="../reveal.js.official/dist/theme/vrtl.css" id="theme">
    <!-- For code highlighting -->
    <link rel="stylesheet" href="../reveal.js.official/plugin/highlight/monokai.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <!-- Your slides here -->
            <section>
                <h1>Your Slide</h1>
            </section>
        </div>
    </div>

    <script src="../reveal.js.official/dist/reveal.js"></script>
    <script src="../reveal.js.official/plugin/notes/notes.js"></script>
    <script src="../reveal.js.official/plugin/markdown/markdown.js"></script>
    <script src="../reveal.js.official/plugin/highlight/highlight.js"></script>
    <script>
        Reveal.initialize({
            hash: true,
            slideNumber: true,
            plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
            controls: true,
            progress: true,
            center: true,
            transition: 'slide'
        });
    </script>
</body>
</html>
```

### Available Themes

Custom themes available:
- `vrtl.css`: Virtual Reality theme
- `tech.css`: Technology-focused theme

Standard themes:
- `black.css`: Dark theme
- `white.css`: Light theme
- `league.css`: Gray on dark
- And more in `reveal.js.official/dist/theme/`

### Using Markdown in Presentations

You can include Markdown content in two ways:

1. Inline Markdown:
```html
<section data-markdown>
    <textarea data-template>
        ## Your Slide
        - Point 1
        - Point 2
    </textarea>
</section>
```

2. External Markdown file:
```html
<section data-markdown="your-slides.md"
         data-separator="^\n\n\n"
         data-separator-vertical="^\n\n"
         data-separator-notes="^Note:"
         data-charset="utf-8">
</section>
```

### Best Practices

1. Store presentations:
   - Put all presentation HTML files in `presentations/`
   - Keep related assets (images, etc.) in subdirectories

2. Using images:
   - For presentation-specific images: `presentations/assets/`
   - For shared images: `images/`

3. Version control:
   - The reveal.js.official directory is a git submodule
   - Don't modify files directly in reveal.js.official except for custom themes
   - Keep presentations and custom content in the main repository

### Troubleshooting

1. If presentations don't load:
   - Check that reveal.js.official submodule is properly initialized
   - Verify paths in HTML files are correct (use `../reveal.js.official/`)
   - Ensure all plugins are properly loaded

2. If styles don't apply:
   - Check theme path in HTML
   - Verify custom theme files exist in reveal.js.official/dist/theme/

3. If code highlighting doesn't work:
   - Ensure highlight.js plugin is loaded
   - Check that code blocks use proper language tags
