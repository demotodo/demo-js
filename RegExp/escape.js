function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

console.log(escapeRegExp("/path/to/resource.html?query"));
// \/path\/to\/resource\.html\?query
