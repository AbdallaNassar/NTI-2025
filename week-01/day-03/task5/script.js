// textStyle.js - Simple Version

// Get the paragraph element once
const paragraph = document.getElementById('PAR');

// Font family changer
function ChangeFont(font) {
    paragraph.style.fontFamily = font;
}

// Text alignment changer
function ChangeAlign(align) {
    paragraph.style.textAlign = align;
}

// Line height changer
function ChangeHeight(height) {
    paragraph.style.lineHeight = height;
}

// Letter spacing changer
function ChangeLSpace(space) {
    paragraph.style.letterSpacing = space;
}

// Text indent changer
function ChangeIndent(indent) {
    paragraph.style.textIndent = indent;
}

// Text transform changer
function ChangeTransform(transform) {
    paragraph.style.textTransform = transform;
}

// Text decoration changer
function ChangeDecorate(decorate) {
    paragraph.style.textDecoration = decorate;
}

// Border style changer
function ChangeBorder(border) {
    paragraph.style.borderStyle = border;
}

// Border color changer
function ChangeBorderColor(color) {
    paragraph.style.borderColor = color;
    
    // Add a border if color is selected (except for 'none')
    if (color !== 'black') { // 'black' is used for 'none' in your HTML
        paragraph.style.borderWidth = '1px';
    } else {
        paragraph.style.borderWidth = '0';
    }
}