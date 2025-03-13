import markdownIt from "markdown-it";
import moment from "moment-timezone";


export default function (eleventyConfig) {
    eleventyConfig.addFilter("dateformat", function(dateIn) {
    return moment(dateIn).tz('GMT').format('DD MMM YYYY');
});

    let options = {
        html: true,
        breaks: true,
        linkify: true,
    };


    eleventyConfig.addPassthroughCopy("style");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("files");
    eleventyConfig.addPassthroughCopy("js");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };

    eleventyConfig.setTemplateFormats([
      "md",
      "njk",
      "woff2",
      "png",
      "js",
      "css", // css is not yet a recognized template extension in Eleventy
      "pdf"
    ]);

};